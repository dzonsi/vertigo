<template>
  <div class="clients">
    <h2 class="clients-text">
      <span
        >They <br />
        Trust <br />
        Us.</span
      >
    </h2>
    <div class="clients-list">
      <v-icon
        class="clients-list-image"
        name="brands/microsoft"
        :scale="size"
      />
      <v-icon class="clients-list-image" name="brands/cc-visa" :scale="size" />
      <v-icon class="clients-list-image" name="brands/google" :scale="size" />
      <v-icon class="clients-list-image" name="brands/apple" :scale="size" />
      <v-icon
        class="clients-list-image"
        name="brands/cc-paypal"
        :scale="size"
      />
      <v-icon class="clients-list-image" name="brands/steam" :scale="size" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clients',
  data() {
    return {
      size: 4
    }
  }
}
</script>

<style lang="scss">
.clients {
  color: $white;
  background-color: #070707;
}
.clients-text {
  text-align: center;
  font-weight: 900;
  text-transform: uppercase;
  padding: 20px 0;
  margin: 0;
}
.clients-list {
  padding: 20px 0 40px;
  text-align: center;
}
.clients-list-image {
  margin: 10px 20px;
  opacity: 0.5;
}
@include media-breakpoint-up(xl) {
  .clients-list-image {
    margin: 10px 40px;
  }
}
</style>
