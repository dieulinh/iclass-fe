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
          class="item about"
          to="/about"
          exact
        > About </nuxt-link>
        </li>
      </ul>
    </div>
    <Nuxt/>
    <footer class="global_footer">
      <section class="copy-right">
        Copyright © 2022 Linh Nguyen. All rights reserved.
      </section>
    </footer>
  </div>
</template>

<style>
body {
  background-color: #ffffff;
}

.global_footer {
  padding: 20px;
  height: 70px;
  bottom: 0;
  background: rgb(63,174,185);
  color: #fff;
}
.link {
  color: #1f6097;
  line-height: 1.42em;
  background-color: transparent;
}
.link:hover {
  text-decoration: underline;
  color: #db6a1e;
  font-weight: 500;
  outline: 0;
}
.ui.menu .item img.logo {
  margin-right: 1.5em;
}
.main.container {
  margin: 7em 10vw 0 10vw;
}
.about {
  color: #284f3c;
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
h2, h3, h4, h5 {
  padding: 30px;
  background: #1abc9c;
  color: white;
}
</style>
