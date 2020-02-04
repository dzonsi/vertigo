<template>
  <div class="side-navbar" :class="{ 'is-show': sideNavbarIsShow }">
    <ul class="side-navbar-nav">
      <top-nav-item :isActive="true">home</top-nav-item>
      <top-nav-item>who we are</top-nav-item>
      <top-nav-item>how we do it</top-nav-item>
      <top-nav-item>careers</top-nav-item>
      <top-nav-item>contact</top-nav-item>
      <div class="side-navbar-bottom-nav">
        <ul class="social-links">
          <social-links-item>
            <v-icon name="brands/facebook-f" scale="1.3" />
          </social-links-item>
          <social-links-item>
            <v-icon name="brands/linkedin-in" scale="1.3" />
          </social-links-item>
          <social-links-item>
            <v-icon name="brands/github" scale="1.3" />
          </social-links-item>
          <social-links-item>
            <v-icon name="brands/behance" scale="1.3" />
          </social-links-item>
          <social-links-item>
            <v-icon name="brands/instagram" scale="1.3" />
          </social-links-item>
        </ul>
        <p class="side-nav-copyright">©2020 Nikola. All Rights Reserved.</p>
      </div>
      <side-navbar-close></side-navbar-close>
    </ul>
  </div>
</template>

<script>
import TopNavItem from '@/components/side-navbar/TopNavItem.vue'
import SocialLinksItem from '@/components/shared/SocialLinksItem.vue'
import SideNavbarClose from '@/components/side-navbar/SideNavbarClose.vue'
import { mapState } from 'vuex'

export default {
  name: 'SideNavbar',
  components: {
    TopNavItem,
    SocialLinksItem,
    SideNavbarClose
  },
  computed: mapState(['sideNavbarIsShow'])
}
</script>

<style lang="scss">
.side-navbar {
  width: 100%;
  height: 100%;
  padding: 24px 0;
  background-color: rgba(0, 0, 0, 0.85);
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(100%);
  transition: transform 0.3s;
  z-index: 6;
  &.is-show {
    transform: translateX(0);
    & .social-links {
      transform: translateX(0);
      transition: transform 0.45s 0.625s;
    }
  }
}
.side-navbar-nav {
  width: 40%;
  height: 100%;
  padding-left: 0;
  margin: 0;
  list-style: none;
  position: relative;
  left: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}
.social-links {
  padding: 15px 0;
  list-style-type: none;
  margin-left: -13.5px;
  transform: translateX(700px);
}
.side-nav-copyright {
  color: $gray-500;
  font-size: 14px;
}
@include media-breakpoint-down(sm) {
  .side-navbar-nav {
    width: 100%;
    left: 20px;
  }
  .social-links {
    padding: 5px 0;
    margin-left: -8.5px;
  }
}
@include media-breakpoint-up(xl) {
  .side-navbar-nav {
    width: 36%;
    left: 64%;
  }
}
</style>
