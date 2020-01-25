<template>
  <div class="home">
    <Header></Header>
    <menu-button></menu-button>
    <SideNavbar></SideNavbar>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section section-home">
        <HomeSection></HomeSection>
      </div>
      <div class="section section-who-we-are">
        <WhoWeAre ref="whoWeAre"></WhoWeAre>
      </div>
      <div class="section section-what-we-do">
        <WhatWeDo ref="whatWeDo"></WhatWeDo>
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
import WhoWeAre from '@/components/who-we-are/WhoWeAre.vue'
import WhatWeDo from '@/components/what-we-do/WhatWeDo.vue'

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
    WhoWeAre,
    WhatWeDo
  },
  data() {
    return {
      options: {
        licenseKey: null,
        anchors: ['home', 'who-we-are', 'what-we-do', 'footer'],
        sectionsColor: ['#070707', '#070707', '#070707'],
        onLeave: this.onLeave
      }
    }
  },
  methods: {
    ...mapMutations({
      toggleFooter: 'changeFooterStatus'
    }),
    onLeave(origin, destination, direction) {
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
  &-who-we-are,
  &-what-we-do {
    overflow: hidden;
    color: $white;
    background-color: #070707;
  }
  &-who-we-are,
  &-what-we-do {
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
.section-who-we-are {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../assets/who-we-are-bg.jpg') center / cover;
}
.section-what-we-do {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../assets/what-we-do-bg.jpg') center / cover;
}
@include media-breakpoint-down(lg) {
  .section-who-we-are {
    background-size: auto;
    background-position: -150px center;
  }
}
@include media-breakpoint-down(xs) {
  .section {
    &-who-we-are,
    &-what-we-do {
      & .container {
        padding: 0 20px;
      }
    }
  }
}
@include media-breakpoint-up(xl) {
  .section {
    &-who-we-are,
    &-what-we-do {
      & .container {
        padding-left: 120px;
      }
    }
  }
}
</style>
