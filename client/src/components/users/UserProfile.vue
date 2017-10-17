<template>
  <div class="container profile">
    <header class="profile__header">
      <h1>{{userName}}&rsquo;s profile</h1>
    </header>

    <section>
      <div class="profile__card">
        <div class="profile__top-wrap">
          <div class="profile__image-wrap">
            <div class="profile__image-aspect">
              <div class="profile__image-crop">
                <div
                  class="profile__image"
                  role="image"
                  :style="{ backgroundImage: `url(${avatarUrl})` }"
                  :aria-label="name"></div>
              </div>
            </div>
          </div>
          <div class="profile__card-top profile__text-wrap">
            <div class="profile__name">
              {{name}}</div>
            <div class="profile__username">
              {{userName}}</div>
          </div>
          </div>
          <div class="profile__qualifications">
            {{userQualifications}}
          </div>
          <div v-show="!edit" class="profile__button-wrap">
            <button @click="()=>{toggleEdit()}" class="btn btn__primary profile__button profile__button">Edit</button>
          </div>

        <div v-show="edit">
          <textarea
            v-model="userQualifications"
            id="qualifications"
            ref="qualifications"
            @change="(e)=>{adjustTextArea(e.target)}"
            class="profile__textarea"
            maxlength="1024"
            placeholder="Describe your qualifications">
          </textarea>
          <div class="profile__button-wrap">
            <button @click="()=>{saveQualifications()}" class="btn btn__primary profile__button profile__button--btm">Save</button>
            <button @click="()=>{cancelQualifications()}" class="btn btn__primary profile__button profile__button--btm">Cancel</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'UserProfile',
    data() {
      return {
        userName: 'isisAnchalee',
        name: 'Isis Anchalee',
        avatarUrl: 'https://ghc.anitab.org/wp-content/uploads/sites/2/2015/10/Isis_Anchalee.jpg',
        userQualifications: 'Software Engineer at Hustle. Building scalable text message based communication tools for political campaigns/organizations like Planned Parenthood, Bernie Sanders, Michelle Obama, Hillary Clinton, etc. Advisory Board Member at Women Who Code, a 501(c)3 nonprofit whose mission lends itself to women around the world – connecting them to technology and to one another. Former Software Engineer at Uber, OneLogin.',
        edit: false,
      };
    },
    methods: {
      saveQualifications() {
        this.toggleEdit();
      },
      cancelQualifications() {
        this.toggleEdit();
      },
      adjustTextArea(target) {
        // expand textarea height to match content
        // setTimeout bc otherwise doesn't work ???
        setTimeout(() => {
          const el = target;
          let adjustedHeight = el.clientHeight;
          adjustedHeight = Math.max(el.scrollHeight, adjustedHeight);
          if (adjustedHeight > el.clientHeight) { el.style.height = `${adjustedHeight + 20}px`; }
        }, 50);
      },
      toggleEdit() {
        this.edit = !this.edit;
        this.adjustTextArea(document.getElementById('qualifications'));
      },
    },
    mounted() {
      this.adjustTextArea(document.getElementById('qualifications'));
    },
  };
</script>

<style lang="stylus" scoped>
@import '~stylus_var'

.profile

  &__card
    border 1px solid $purple
    padding 40px
    width 100%
    max-width 600px
    margin auto

  &__top-wrap
    display: flex
    @media (min-width: 600px)
      display: block

  &__image-wrap
    width: 100%
    flex-basis: 40%
    @media (min-width: 600px)
      margin-top: 20px
      text-align: center

  &__image-aspect
    width: 100%
    padding-bottom: 100%
    position: relative
    @media (min-width: 600px)
      width: 50%
      padding-bottom: 50%
      margin: 0 auto

  &__image-crop
    width: 100%
    border-radius: 100%
    height: auto
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    border 1px solid $purple
    overflow: hidden
    text-align: center
    display: flex
    justify-content: center

  &__image
    min-width: 100%
    min-height: 100%
    height: auto
    margin: 0 auto
    background-size cover
    background-position center center

  &__text-wrap
    padding: 20px 0 5px 20px
    @media (min-width: 600px)
      padding: 15px 30px 10px 30px

  &__name
    font-weight: 700
    font-size: 30px
    padding-bottom 10px
    color: $gray_text
    @media (min-width: 600px)
      text-align: center
      font-size: 30px
      padding-bottom 10px

  &__username
    font-weight: 700
    font-size: 18px
    color: lighten($gray_text, 30%)
    @media (min-width: 600px)
      font-weight: 400
      text-align: center
      font-size: 22px

  &__header
    text-align center
    color $purple
    margin-bottom 60px
    font-size: 1.5em;
    line-height: 1.2em;
    @media (min-width: 600px)
      font-size 36px

    & h1
      font-weight 200 !important

  &__button-wrap
    display flex
    justify-content center
    margin 20px auto

  &__button

    &--btm
      margin-top 1vh

      &:last-child
        margin-left 20px

  &__qualifications
    margin 20px 0
    line-height 1.8em

  &__textarea
    width 100%
    padding 20px
    font-size 1em
    font-family: 'Titillium Web', Helvetica, Arial, sans-serif;
    color: $gray_text;
    letter-spacing: 1px;
    line-height: 1.5em;


</style>