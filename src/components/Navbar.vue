<template>
  <div class="navbar">
    <div class="logo global--regular-small">
      <img :src="logo" alt="">
    </div>
    <nav class="nav global--light-small">
      <router-link to="/" active-class="global--nav-active" exact>
        <li class="item animated pulse"><i class="iconfont icon-icon_dashboard icon"></i><span class="text">0</span></li>
      </router-link>
      <router-link to="/a" active-class="global--nav-active" exact>
        <li class="item"><i class="iconfont icon-icon_stats icon"></i><span class="text">a</span></li>
      </router-link>
      <router-link to="/b" active-class="global--nav-active">
        <li class="item"><i class="iconfont icon-icon_event icon"></i><span class="text">b</span></li>
      </router-link>
      <router-link to="/c" active-class="global--nav-active" exact>
        <li class="item"><i class="iconfont icon-icon_reply icon"></i><span class="text">c</span></li>
      </router-link>
      <router-link to="/d" active-class="global--nav-active" exact>
        <li class="item"><i class="iconfont icon-icon_menu icon"></i><span class="text">d</span></li>
      </router-link>
      <router-link to="/e" active-class="global--nav-active" exact>
        <li class="item"><i class="iconfont icon-icon_bound icon"></i><span class="text">e</span></li>
      </router-link>
      <router-link to="/f" active-class="global--nav-active" exact>
        <li class="item"><i class="iconfont icon-icon_qrcode icon"></i><span class="text">f</span></li>
      </router-link>
      <router-link to="/g" active-class="global--nav-active" v-if="adminShow === 'superAdmin'" exact>
        <li class="item"><i class="iconfont icon-icon_setting icon"></i><span class="text">g</span></li>
      </router-link>
    </nav>
  </div>
</template>

<script>
  const logo = require('assets/images/logo.png')

  export default {
    name: 'Navbar',
    data() {
      return {
        logo,
        adminShow: 'superAdmin',
      }
    },
  }
</script>

<style lang="less" scoped>
  @import "../styles/colors";

  .navbar {
    width: 230px;
    height: 100%;
    margin: 40px 25px;
    background: @background;
    color: #fff;
    .logo {
      display: flex;
      align-items: center;
      color: #fff;
      padding-left: 21px;
      font-size: 12px;
      img {
        height: 80px;
        width: 80px;
      }
    }
    .nav {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  .item {
    display: flex;
    align-items: center;
    list-style: none;
    height: 38px;
    color: #8B859F;
    font-size: 13px;
    .icon {
      font-size: 13px;
      margin-right: 9px;
    }
  }

  .active {
    background: @highlight;
  }
</style>
