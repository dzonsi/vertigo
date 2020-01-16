<template>
  <div :style="style" class="logo">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
    <div class="bar4"></div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    scale: Number
  },
  computed: {
    style() {
      return `transform: rotate(165deg) scale(${this.scale});`
    }
  }
}
</script>

<style scoped lang="scss">
.logo {
  position: relative;
  width: 100px;
  height: 100px;
  transform: rotate(165deg);

  .bar1,
  .bar2,
  .bar3,
  .bar4 {
    width: 100px;
    height: 20px;
    border-radius: 10px;
    background-color: rgba(31, 190, 213, 1);
    position: absolute;
  }
  .bar1,
  .bar2 {
    transform: rotate(90deg);
    top: 40px;
  }
  .bar1 {
    left: 20px;
  }
  .bar2 {
    right: 20px;
  }
  .bar3 {
    top: 20px;
  }
  .bar4 {
    top: 60px;
  }
}
</style>
