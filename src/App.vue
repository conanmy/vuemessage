<template>
  <div id="app">
    <div id="header" class="header">
      <div></div>
    </div>
    <div class="wrapper">
      <h1>Message center</h1>
      <div class="main-wrapper">
        <div class="main-tab">
          <router-link to="/">
            <a href="#/" class="main-tab-item" id="main-tab-show" data-log="{'target':'setting','subTarget':'msg-view'}">
              <span class="main-tab-item-icon message-show-tab-icon">Messages</span>
              <span class="main-tab-item-arrow-wrapper"><span class="main-tab-item-arrow"></span></span>
            </a>
          </router-link>
          <router-link to="/setting">
            <a href="#/setting" class="main-tab-item" id="main-tab-setting" data-log="{'target':'setting','subTarget':'msg-setting'}">
              <span class="main-tab-item-icon message-setting-tab-icon">Setting</span>
              <span class="main-tab-item-arrow-wrapper"><span class="main-tab-item-arrow"></span></span>
            </a>
          </router-link>
        </div>
        <div class="container"><router-view/></div>
      </div>
    </div>
    <div class="foot">
      <p>©2014 conanmy</p>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
