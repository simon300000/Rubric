<template>
<div id="app">
  <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top">
    <span class="navbar-brand">
        <img src="./assets/his-logo-text-short.png" alt="his-logo-book" height="30" width="86.5">
      </span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse justify-content-left" id="navbarNav">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link" to="/">HelloWorld</router-link>
        <router-link class="nav-item nav-link" to="/home">Home</router-link>
        <router-link class="nav-item nav-link" to="/rubric">Rubric</router-link>
      </div>
    </div>
  </nav>
  <div class="note">
    <p>Your screen is to small. Please view this page in landscape mode, or change the device.</p>
  </div>
  <div class="grid">
    <div class="router">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*
  all screen sizes by bootstrap
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
*/

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Lucida Grande', Tahoma, Verdana, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.router {
  padding-bottom: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0.3;
}

.grid {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas: "content";
}

.router {
  grid-area: content;
  display: block;
  width: 100%;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: auto;
  margin-left: auto;
}

.note {
  display: none;
}

@media screen and (max-width: 319px) {
  .grid>.router {
    display: none;
  }
  .note {
    display: block;
  }
}

@media screen and (min-width: 465px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 435px 1fr;
    grid-template-rows: auto;
    grid-template-areas: ". content .";
  }

  .router {
    grid-area: content;
    display: block;
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-right: auto;
    margin-left: auto;
  }
}

@media screen and (min-width: 815px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 785px 1fr;
    grid-template-rows: auto;
    grid-template-areas: ". content .";
  }

  .router {
    grid-area: content;
    display: block;
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
