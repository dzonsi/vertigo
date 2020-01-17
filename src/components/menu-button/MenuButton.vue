<template>
  <button
    class="sidebar-toggle"
    :class="{
      'is-closed': sideNavbarIsShow
    }"
    @click="toggleSideNavbar"
  >
    <div data-aos="fade-down" data-aos-once="true">
      <span class="icon-bar icon-bar-first"></span>
      <span class="icon-bar icon-bar-second"></span>
      <span class="icon-bar icon-bar-third"></span>
    </div>
    <span class="sidebar-toggle-text" data-aos="fade-down" data-aos-once="true">MENU</span>
  </button>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: 'MenuButton',
  computed: mapState(['sideNavbarIsShow']),
  methods: {
    ...mapMutations({
      toggleSideNavbar: 'changeSideNavbarStatus'
    })
  }
}
</script>

<style lang="scss">
.sidebar-toggle {
  display: block;
  width: 90px;
  height: 90px;
  cursor: pointer;
  background-color: transparent;
  padding: 9px 0;
  border: none;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  transition: all 0.2s;
  &.is-closed {
    display: none;
  }
}
.icon-bar {
  display: block;
  width: 49px;
  height: 2px;
  background-color: $primary;
  & + .icon-bar {
    margin-top: 4px;
  }
}
.icon-bar-first {
  animation: animate-toggle 1s cubic-bezier(0.895, 0.3, 0.685, 0.22) -0.3s alternate
    infinite;
}
.icon-bar-second {
  animation: animate-toggle 1s cubic-bezier(0.895, 0.3, 0.685, 0.22) -0.5s alternate
    infinite;
}
.icon-bar-third {
  animation: animate-toggle 1s cubic-bezier(0.895, 0.3, 0.685, 0.22) -0.7s alternate
    infinite;
}
@keyframes animate-toggle {
  0% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-25px);
  }
}
.sidebar-toggle-text {
  display: block;
  color: $white;
  text-align: left;
  position: absolute;
  left: 0;
  bottom: 10px;
  font-weight: 600;
}
@include media-breakpoint-down(xs) {
  .sidebar-toggle {
    width: 65px;
    height: 70px;
    padding: 0;
  }
  .icon-bar {
    width: 45px;
  }
  .sidebar-toggle-text {
    bottom: 0;
    font-weight: 400;
  }
}
@include media-breakpoint-up(xl) {
  .sidebar-toggle {
    top: 30px;
    right: 30px;
  }
}
</style>
