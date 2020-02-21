<template>
  <div class="home">
    <Header></Header>
    <menu-button></menu-button>
    <side-navbar></side-navbar>
    <full-page
      id="fullpage"
      ref="fullpage"
      :options="options"
      :skip-init="true"
    >
      <div class="section section-home">
        <home-section></home-section>
      </div>
      <clients v-if="!fullpage"></clients>
      <div class="section section-who-you-are">
        <who-you-are></who-you-are>
      </div>
      <div class="section section-who-we-are">
        <who-we-are></who-we-are>
      </div>
      <div class="section section-what-we-do">
        <what-we-do></what-we-do>
      </div>
      <div class="section section-how-we-do-it">
        <how-we-do-it></how-we-do-it>
      </div>
      <div class="section fp-auto-height"></div>
    </full-page>
    <scroll-indicator></scroll-indicator>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/header/Header.vue'
import MenuButton from '@/components/menu-button/MenuButton.vue'
import SideNavbar from '@/components/side-navbar/SideNavbar.vue'
import ScrollIndicator from '@/components/scroll-indicator/ScrollIndicator.vue'
import Footer from '@/components/footer/Footer.vue'
import HomeSection from '@/components/home-section/HomeSection.vue'
import WhoYouAre from '@/components/who-you-are/WhoYouAre.vue'
import WhoWeAre from '@/components/who-we-are/WhoWeAre.vue'
import WhatWeDo from '@/components/what-we-do/WhatWeDo.vue'
import HowWeDoIt from '@/components/how-we-do-it/HowWeDoIt.vue'
import Clients from '@/components/shared/Clients'

import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {
    MenuButton,
    Header,
    SideNavbar,
    ScrollIndicator,
    Footer,
    HomeSection,
    WhoYouAre,
    WhoWeAre,
    WhatWeDo,
    HowWeDoIt,
    Clients
  },
  data() {
    return {
      options: {
        licenseKey: null,
        anchors: [
          'home',
          'who-you-are',
          'who-we-are',
          'what-we-do',
          'how-we-do-it',
          'footer'
        ],
        sectionsColor: ['#070707', '#34334d', '#423e3d', '#532d2d', '#364a49'],
        onLeave: this.onLeave
      }
    }
  },
  computed: mapState([
    'whoYouAreIsAnimate',
    'whoWeAreIsAnimate',
    'whatWeDoIsAnimate',
    'howWeDoItIsAnimate',
    'fullpage'
  ]),
  methods: {
    ...mapMutations({
      toggleFooter: 'changeFooterStatus'
    }),
    ...mapMutations([
      'changeWhoYouAreStatus',
      'changeWhoWeAreStatus',
      'changeWhatWeDoStatus',
      'changeHowWeDoItStatus',
      'changeFullpage'
    ]),
    onLeave(origin, destination, direction) {
      // animate description in WhoYouAre component
      if (!this.whoYouAreIsAnimate && destination.anchor == 'who-you-are') {
        this.changeWhoYouAreStatus()
        return
      }
      // animate description in WhoWeAre component
      if (!this.whoWeAreIsAnimate && destination.anchor == 'who-we-are') {
        this.changeWhoWeAreStatus()
        return
      }
      // animate description in WhatWeDo component
      if (!this.whatWeDoIsAnimate && destination.anchor == 'what-we-do') {
        this.changeWhatWeDoStatus()
        return
      }
      // animate description in HowWeDoIt component
      if (!this.howWeDoItIsAnimate && destination.anchor == 'how-we-do-it') {
        this.changeHowWeDoItStatus()
        return
      }
      // show footer
      if (destination.isLast) {
        this.toggleFooter()
        return
      }
      // hide footer
      if (origin.anchor == 'footer') {
        this.toggleFooter()
      }
    }
  },
  mounted() {
    // init fullpage if screen is more than 575 px width
    // or add no-fullpage class to body
    if (window.innerWidth > 575) {
      this.changeFullpage()
      this.$refs.fullpage.init()
    } else {
      document.body.classList.add('no-fullpage')
    }
  }
}
</script>

<style lang="scss">
// set height of last section to 0px
.fp-auto-height {
  &.fp-section,
  & .fp-slide,
  & .fp-tableCell {
    height: auto !important;
  }
}
.section {
  &-home,
  &-who-you-are,
  &-who-we-are,
  &-what-we-do,
  &-how-we-do-it {
    overflow: hidden;
    color: $white;
    background-color: #070707;
  }
  &-who-you-are,
  &-who-we-are,
  &-what-we-do,
  &-how-we-do-it {
    & .container {
      padding: 0 30px;
    }
  }
}
.section-home {
  background-image: url('../assets/images/earth.jpg');
  background-position: center center;
  background-size: cover;
}
.section-who-you-are {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../assets/images/who-you-are-bg.jpg') center / cover;
}
.section-who-we-are {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../assets/images/who-we-are-bg.jpg') center / cover;
}
.section-what-we-do {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../assets/images/what-we-do-bg.jpg') center / cover;
}
.section-how-we-do-it {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../assets/images/how-we-do-it-bg.jpg') center / cover;
}
@include media-breakpoint-down(lg) {
  .section-how-we-do-it {
    background-size: auto;
    background-position: -150px center;
  }
}
@include media-breakpoint-down(xs) {
  .section {
    &-who-you-are,
    &-who-we-are,
    &-what-we-do,
    &-how-we-do-it {
      & .container {
        padding: 0 20px;
      }
    }
  }
}
@include media-breakpoint-up(xl) {
  .section {
    &-who-you-are,
    &-who-we-are,
    &-what-we-do,
    &-how-we-do-it {
      & .container {
        padding-left: 120px;
      }
    }
  }
}
</style>
