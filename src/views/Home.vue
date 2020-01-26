<template>
  <div class="home">
    <Header></Header>
    <menu-button></menu-button>
    <SideNavbar></SideNavbar>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section section-home">
        <HomeSection></HomeSection>
      </div>
      <div class="section section-who-you-are">
        <WhoYouAre ref="whoYouAre"></WhoYouAre>
      </div>
      <div class="section section-who-we-are">
        <WhoWeAre ref="whoWeAre"></WhoWeAre>
      </div>
      <div class="section section-what-we-do">
        <WhatWeDo ref="whatWeDo"></WhatWeDo>
      </div>
      <div class="section section-how-we-do-it">
        <HowWeDoIt ref="howWeDoIt"></HowWeDoIt>
      </div>
      <div class="section fp-auto-height"></div>
    </full-page>
    <ScrollIndicator></ScrollIndicator>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import MenuButton from '@/components/menu-button/MenuButton.vue'
import Header from '@/components/header/Header.vue'
import SideNavbar from '@/components/side-navbar/SideNavbar.vue'
import ScrollIndicator from '@/components/scroll-indicator/ScrollIndicator.vue'
import Footer from '@/components/footer/Footer.vue'
import HomeSection from '@/components/home-section/HomeSection.vue'
import WhoYouAre from '@/components/who-you-are/WhoYouAre.vue'
import WhoWeAre from '@/components/who-we-are/WhoWeAre.vue'
import WhatWeDo from '@/components/what-we-do/WhatWeDo.vue'
import HowWeDoIt from '@/components/how-we-do-it/HowWeDoIt.vue'

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
    HowWeDoIt
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
        sectionsColor: ['#070707', '#070707', '#070707', '#070707', '#070707'],
        onLeave: this.onLeave
      }
    }
  },
  methods: {
    ...mapMutations({
      toggleFooter: 'changeFooterStatus'
    }),
    onLeave(origin, destination, direction) {
      // animate description in WhoYouAre component
      if (
        !this.$refs.whoYouAre.isAnimate &&
        destination.anchor == 'who-you-are'
      ) {
        this.$refs.whoYouAre.changeStatus()
        return
      }
      // animate description in WhoWeAre component
      if (
        !this.$refs.whoWeAre.isAnimate &&
        destination.anchor == 'who-we-are'
      ) {
        this.$refs.whoWeAre.changeStatus()
        return
      }
      // animate description in WhatWeDo component
      if (
        !this.$refs.whatWeDo.isAnimate &&
        destination.anchor == 'what-we-do'
      ) {
        this.$refs.whatWeDo.changeStatus()
        return
      }
      // animate description in HowWeDoIt component
      if (
        !this.$refs.howWeDoIt.isAnimate &&
        destination.anchor == 'how-we-do-it'
      ) {
        this.$refs.howWeDoIt.changeStatus()
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
  background-image: url('../assets/earth.jpg');
  background-position: center center;
  background-size: cover;
}
.section-who-you-are {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../assets/who-you-are-bg.jpg') center / cover;
}
.section-who-we-are {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../assets/who-we-are-bg.jpg') center / cover;
}
.section-what-we-do {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../assets/what-we-do-bg.jpg') center / cover;
}
.section-how-we-do-it {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../assets/how-we-do-it-bg.jpg') center / cover;
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
