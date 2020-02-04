<template>
  <footer class="footer" :class="{ 'is-reveal': footerIsShow }">
    <h1 class="footer-title">
      <router-link to="/">Contact us</router-link>
    </h1>
    <div class="footer-top">
      <div class="container-fluid">
        <div class="footer-info row">
          <footer-info-column
            city="Belgrade"
            name="Fantasy d.o.o."
            address="Fantasy boulevard 33"
            location="11000 Belgrade, Serbia"
            phone="+381 60 123 456"
            email="office@fantasydoo.com"
          ></footer-info-column>
          <footer-info-column
            city="Milano"
            name="ACM company"
            address="Unknown Avenue 7"
            location="20100 Milano, Italy"
            phone="+39 12 345 6789"
            email="office@acmdoo.com"
          ></footer-info-column>
          <footer-info-column
            city="Green Bay"
            name="Packers Inc."
            address="1265 Lombardi Ave"
            location="54304 Green Bay, WI"
            phone="+1 920 569-7500"
            email="office@greenbay.com"
          ></footer-info-column>
        </div>
      </div>
      <img
        class="footer-top-logo"
        src="../../assets/images/logo-small.svg"
        alt="Vertigo logo"
        width="60"
        height="36"
      />
      <div class="footer-social">
        <ul class="footer-social-links">
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
      </div>
    </div>
    <footer-copyright></footer-copyright>
  </footer>
</template>

<script>
import FooterInfoColumn from '@/components/footer/FooterInfoColumn.vue'
import SocialLinksItem from '@/components/shared/SocialLinksItem.vue'
import FooterCopyright from '@/components/footer/FooterCopyright.vue'
import { mapState } from 'vuex'

export default {
  name: 'Footer',
  components: {
    FooterInfoColumn,
    SocialLinksItem,
    FooterCopyright
  },
  computed: mapState(['footerIsShow'])
}
</script>

<style lang="scss">
.footer {
  width: 100%;
  background-color: $black;
  position: absolute;
  top: 100%;
  transform: translateY(0%);
  transition: all 0.2s;
  z-index: 5;
  &.is-reveal {
    transform: translateY(-100%);
    z-index: 5;
    &::before {
      display: block;
      top: -1080px;
      opacity: 1;
    }
  }
  &::before {
    width: 100%;
    height: 1080px;
    content: '';
    background-color: rgba(0, 0, 0, 0.7);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s 0.2s;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
  }
}
.footer-title {
  color: $white;
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
  & a {
    display: block;
    color: $white;
    padding: 15px;
    text-decoration: none;
    background-color: $primary;
    transition: all 0.2s;
    &:hover {
      color: $primary;
      background-color: $black;
    }
  }
}
.footer-top {
  border-bottom: 1px solid $gray-700;
}
.footer-info {
  &.row {
    margin: 0;
  }
  & .col {
    margin-bottom: 15px;
  }
}
.footer-top-logo {
  display: block;
  width: 60px;
  height: auto;
  margin: 0 auto;
}
.footer-social-links {
  padding: 15px;
  margin: 0;
  text-align: center;
}
@include media-breakpoint-down(sm) {
  .footer-top {
    & .container-fluid {
      padding: 0 5px;
    }
  }
  .footer-info {
    & .col {
      margin-bottom: 0;
      padding: 0 5px;
    }
    & .col:last-child {
      margin-bottom: 10px;
    }
  }
}
@include media-breakpoint-down(xs) {
  .footer-top {
    & .container-fluid {
      padding-left: 30px;
    }
  }
  .footer-title {
    margin-bottom: 10px;
  }
  .footer-info {
    &.row {
      flex-direction: column;
    }
  }
}
@include media-breakpoint-up(xl) {
  .footer-title {
    font-size: 24px;
    margin-bottom: 50px;
    & a {
      padding: 20px;
    }
  }
  .footer-social-links {
    margin: 30px 0;
  }
}
@media screen and (min-width: 1600px) {
  .footer-info {
    & .col {
      display: flex;
      justify-content: flex-start;
    }
  }
}
</style>
