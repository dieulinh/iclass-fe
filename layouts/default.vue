<template>
  <div>
    <div class="ui fixed inverted menu top-menu">
      <div class="ui container head-main">
        <nuxt-link
            class="header item brand"
            to="/"
            exact
          > Bikiin </nuxt-link>
      </div>
      <ul class="fl-right">
        <li>
          <nuxt-link
          class="item"
          to="/about"
          exact
        > About </nuxt-link>
        </li>
      </ul>
    </div>
    <Nuxt/>
  </div>
</template>

<style>
body {
  background-color: #ffffff;
}
.ui.menu .item img.logo {
  margin-right: 1.5em;
}
.main.container {
  margin: 7em 10vw 0 10vw;
}
.brand {
  color: #db0c0c;
}
.top-menu {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;

  height: 90px;
  box-sizing: border-box;
  z-index: 1000;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(222, 223, 224);
  padding: 20px 10px 20px 10px;
}
ol {
  display: block;
  list-style-type: disc;
  margin-top: 1em;
  margin-bottom: 1 em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
}
</style>
