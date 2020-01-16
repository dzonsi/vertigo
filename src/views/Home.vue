<template>
  <div class="home">
    <Header></Header>
    <menu-button></menu-button>
    <SideNavbar></SideNavbar>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        First section ...
      </div>
      <div class="section">
        Second section ...
      </div>
      <div class="section">
        Third section ...
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
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {
    MenuButton,
    Header,
    SideNavbar,
    ScrollIndicator,
    Footer
  },
  data() {
    return {
      options: {
        licenseKey: null,
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
        onLeave: this.onLeave
      }
    }
  },
  methods: {
    ...mapMutations({
      toggleFooter: 'changeFooterStatus'
    }),
    onLeave(origin, destination, direction) {
      if (destination.isLast) {
        this.toggleFooter()
      }
      if (origin.anchor == 'page4') {
        this.toggleFooter()
      }
    }
  }
}
</script>

<style lang="scss">
/* set height of last section to 0px */
.fp-auto-height {
  &.fp-section,
  & .fp-slide,
  & .fp-tableCell {
    height: auto !important;
  }
}
</style>
