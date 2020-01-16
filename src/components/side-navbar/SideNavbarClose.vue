<template>
  <button class="side-navbar-close" @click="hide">
    <span class="close-bar close-bar-first"></span>
    <span class="close-bar close-bar-second"></span>
  </button>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'SideNavbarClose',
  computed: {
    sideNavbarIsShow() {
      return this.$store.state.sideNavbarIsShow
    }
  },
  methods: {
    ...mapMutations({
      hide: 'changeSideNavbarStatus'
    })
  }
}
</script>

<style lang="scss">
.side-navbar-close {
  display: block;
  padding: 13px 0;
  position: absolute;
  top: 14px;
  right: 38px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  overflow: hidden;
  z-index: 7;
  transform: translateY(-100px);
  transition: transform 0.6s 0.3s;
  &:hover .close-bar {
    background-color: $danger;
  }
  & .close-bar + .close-bar {
    margin-top: 4px;
  }
}
/* class for animation */
.side-navbar.is-show {
  & .side-navbar-close {
    transform: translateY(0);
  }
}
.close-bar {
  display: block;
  width: 45px;
  height: 4px;
  border-radius: 2px;
  background-color: $white;
  position: relative;
  transition: background-color 0.3s;
}
.close-bar-first {
  transform: rotate(45deg);
  top: 4px;
}
.close-bar-second {
  transform: rotate(-45deg);
  top: -4px;
}
@include media-breakpoint-down(sm) {
  .side-navbar-close {
    top: 0;
    right: 44px;
  }
}
@include media-breakpoint-up(xl) {
  .side-navbar-close {
    top: 34px;
    right: 58px;
  }
}
</style>
