<template>
  <div id="header-div">
    <nav class="main-nav">
      <div class="div-header">
        <h1 class="header-header">
          <a href="http://localhost:8080/" class="a-torgos-logo"
            ><h1 class="torgos-logo">Торгос Вент</h1>
          </a>
        </h1>
      </div>
      <div class="router-div">
        <router-link to="/" class="router">Главная</router-link>
        <router-link to="/about" class="router">Каталог</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style lang="scss" scoped>
* {
  margin: 0px;
  padding: 0px;
  z-index: 100;
}
#header-div {
  position: absolute;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}
.router {
  font-family: Poppins-Regular;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  .router {
    position: relative;
    top: 15px;
    margin-left: 20px;
    color: #f3f3f3;
    text-decoration: none;

    &.router-link-exact-active {
      color: grey;
    }
  }
  .a-torgos-logo {
    position: relative;
    top: 15px;
    color: #f3f3f3;
    text-decoration: none;
  }
  text-align: center;
}

.div-header {
  position: relative;
}
.router-div {
  position: relative;
}
.torgos-logo {
  display: block;
  text-align: left;
  position: relative;
  bottom: 15px;
  margin: 0;
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: -0.8928570747375488px;
  text-align: left;
  color: #f3f3f3;
}
</style>
