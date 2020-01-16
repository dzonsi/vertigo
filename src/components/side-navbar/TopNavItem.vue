<template>
  <li class="top-nav-item">
    <a
      href="javascript:void(0)"
      class="top-nav-item-link"
      :class="{ active: isActive }"
    >
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: 'TopNavItem',
  props: {
    isActive: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>

<style lang="scss">
.top-nav-item {
  display: block;
}
.top-nav-item:first-of-type {
  & .top-nav-item-link {
    margin-top: 10px;
  }
}
.top-nav-item-link {
  display: block;
  color: $white;
  font-size: 46px;
  text-transform: lowercase;
  font-weight: 900;
  line-height: 46px;
  margin: 0 0 30px;
  opacity: 0;
  transform: translateX(100%);
  &:hover {
    text-decoration: none;
    color: $primary;
  }
  &.active {
    color: $primary;
  }
}
/* class for animation */
.top-nav-item:nth-of-type(1) {
  & .top-nav-item-link {
    transition: color 0.2s, font-size 0.2s, opacity 0.6s,
      transform 0.225s 0.0625s;
  }
}
.top-nav-item:nth-of-type(2) {
  & .top-nav-item-link {
    transition: color 0.2s, font-size 0.2s, opacity 0.6s,
      transform 0.225s 0.125s;
  }
}
.top-nav-item:nth-of-type(3) {
  & .top-nav-item-link {
    transition: color 0.2s, font-size 0.2s, opacity 0.6s,
      transform 0.225s 0.1875s;
  }
}
.top-nav-item:nth-of-type(4) {
  & .top-nav-item-link {
    transition: color 0.2s, font-size 0.2s, opacity 0.6s,
      transform 0.225s 0.225s;
  }
}
.top-nav-item:nth-of-type(5) {
  & .top-nav-item-link {
    transition: color 0.2s, font-size 0.2s, opacity 0.6s,
      transform 0.225s 0.3125s;
  }
}
.side-navbar.is-show {
  & .top-nav-item {
    & .top-nav-item-link {
      transform: translateX(0);
      opacity: 1;
    }
  }
}
@include media-breakpoint-down(xs) {
  .top-nav-item:first-of-type {
    & .top-nav-item-link {
      margin-top: 0;
    }
  }
  .top-nav-item-link {
    font-size: 18px;
    line-height: normal;
    padding: 7px 0;
    margin: 0;
  }
}
@include media-breakpoint-down(sm) {
  .top-nav-item:last-of-type {
    & .top-nav-item-link {
      margin-bottom: 15px;
    }
  }
}
@include media-breakpoint-up(lg) {
  .top-nav-item-link {
    margin-bottom: 35px;
  }
}
@include media-breakpoint-up(xl) {
  .top-nav-item-link {
    font-size: 70px;
    margin: 0 0 50px;
  }
}
</style>
