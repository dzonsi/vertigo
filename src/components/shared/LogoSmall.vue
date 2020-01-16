<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
    <path
      :fill="firstColor"
      d="M0 0 L10 0 L20 24 L30 0 L40 0 L25 36 L15 36 Z"
    />
    <path
      :fill="secondColor"
      transform="translate(-10)"
      d="M40 0 L70 0 L65.8 10 L55.8 10 L45 36 L35 36 L45.8 10 L35.8 10 Z"
    />
  </svg>
</template>

<script>
export default {
  name: 'LogoSmall',
  props: {
    width: {
      type: Number,
      default: 60,
      required: false
    },
    height: {
      type: Number,
      default: 36,
      required: false
    },
    firstColor: {
      type: String,
      default: '#fff',
      required: false
    },
    secondColor: {
      type: String,
      default: '#1fbed5',
      required: false
    }
  }
}
</script>

<style scoped lang="scss"></style>
