<template>
  <div class="col">
    <div class="footer-info-column">
      <p class="footer-info-column-title">{{ city }}</p>
    </div>
    <div class="footer-info-column">
      <p>{{ name }}</p>
      <p>{{ address }}</p>
      <p>{{ location }}</p>
    </div>
    <div class="footer-info-column">
      <a href="javascript:void(0)" class="footer-info-column-link">
        <v-icon name="mobile-alt" />
        {{ phone }}
      </a>
      <a href="javascript:void(0)" class="footer-info-column-link">
        <v-icon name="envelope" />
        {{ email }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterInfoColumn',
  props: {
    city: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.footer-info-column {
  display: inline-block;
  margin: 10px;
  & .footer-info-column-title {
    color: $primary;
    font-size: 18px;
    font-weight: 900;
    margin: 2px 0;
  }
  & p {
    color: $gray-500;
    font-size: 14px;
    line-height: 1.6;
    margin: 2px 0;
  }
  & .footer-info-column-link {
    display: block;
    color: $gray-500;
    font-size: 14px;
    line-height: 1.6;
    margin: 2px 0;
    &:first-of-type {
      & svg {
        vertical-align: -4px;
        margin-left: 3px;
        margin-right: 8px;
      }
    }
    &:hover {
      text-decoration: none;
      color: $white;
    }
    & svg {
      vertical-align: -3px;
      margin-right: 5px;
    }
  }
}
@include media-breakpoint-down(xs) {
  .footer-info-column {
    margin: 5px;
  }
}
@media screen and (max-width: 1600px) {
  .footer-info-column {
    width: 100%;
  }
}
@media screen and (min-width: 1600px) {
  .footer-info-column {
    margin: 15px;
  }
}
</style>
