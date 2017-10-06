// import axios from 'axios';
import auth0 from 'auth0-js';
import Router from 'vue-router';
// import Auth0Lock from 'auth0-lock';

import { isTokenExpired } from './utils';

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';

const CLIENT_ID = '';
const CLIENT_DOMAIN = '';
const REDIRECT = 'http://localhost:8080/callback';
const SCOPE = 'openid';
const AUDIENCE = '';

const auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN,
});

const router = new Router({
  mode: 'history',
});

export function login() {
  auth.authorize({
    responseType: 'token id_token',
    redirectUri: REDIRECT,
    audience: AUDIENCE,
    scope: SCOPE,
  });
}

// Helper to extract the access token and id token
function getParameterByName(name) {
  // eslint-disable-next-line
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  // const match = RegExp(`[#&] ${name} =([^&]*)`).exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Get the id token from the localStorage
export function getIdToken() {
  return window.localStorage.getItem(ID_TOKEN_KEY);
}

// Get the access token from the localStorage
export function getAccessToken() {
  return window.localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function setAccessToken() {
  const accessToken = getParameterByName('access_token');
  window.localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

export function setIdToken() {
  const idToken = getParameterByName('id_token');
  window.localStorage.setItem(ID_TOKEN_KEY, idToken);
}

// Remove the id token from the localStorage
export function clearIdToken() {
  window.localStorage.removeItem(ID_TOKEN_KEY);
}

// Remove the access token from the localStorage
export function clearAccessToken() {
  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
}

// Check if there's a token and it's not expired
export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

// Logout the current user by deleting the tokens
export function logout() {
  clearIdToken();
  clearAccessToken();
  router.go('/');
}

// Middleware to check if the user is logged in
export function requireAuth(to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/',
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
}