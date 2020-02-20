<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<style lang="scss">
// import custom bootstrap for whole app
@import './assets/styles/custom-bootstrap';

// import robot font from google fonts
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

// import shared scss for
// set-up with no fullpage
@import './assets/styles/shared';

.app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
