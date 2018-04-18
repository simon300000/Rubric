<template>
  <div class="home">

    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
            Core Docs
          </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">
            Forum
          </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">
            Community Chat
          </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">
            Twitter
          </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
            Docs for This Template
          </a>
      </li>
    </ul>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <sub>nostrud exercitation ullamco</sub> laboris nisi ut <sup>aliquip ex ea commodo consequat</sup>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <mark>dolore eu fugiat</mark> nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <b>labore et dolore magna aliqua.</b> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <button type="button" class="btn btn-outline-warning">Warning</button>
  </div>

</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
