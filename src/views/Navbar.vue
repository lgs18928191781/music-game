<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
      style="box-shadow:2px 2px 10px #000;z-index: 10;"
      fixed="top">
      <b-navbar-brand to="/">
        <img src="../../public/logoNav.png">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-for="item in navItems" :key="item.id">
          <b-nav-item :to="item.route" class="navItemCustom">{{ item.title }}</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" v-if="!hasLoginIn">
          <b-nav-item class="navItemCustom" @click="fakeLogin">登录</b-nav-item>
          <b-button size="lg" class="navButtonCustom" to="">注册</b-button>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-else>
          <b-nav-item class="navItemCustom">{{ userName }}</b-nav-item>
          <b-nav-item class="navItemCustom" @click="fakeLogout">
            <b-icon-power></b-icon-power>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      hasLoginIn: false,
      userName: "",
      navItems:[{
        id: 0,
        title: "首页",
        route: "/"
      },{
        id: 1,
        title: "歌曲收录",
        route: "Collection"
      },{
        id: 2,
        title: "待定",
        route: "/"
      }]
    }
  },
  methods: {
    fakeLogin() {
      this.$store.commit('login')
      this.hasLoginIn = !this.hasLoginIn
      this.userName = this.$store.state.username
    },
    fakeLogout() {
      this.$store.commit('logout')
      this.hasLoginIn = !this.hasLoginIn
      this.userName = ""
    }
  }
}
</script>

<style scoped>
  .navItemCustom {
    font-size: 20px;
    margin: 0 15px 0 15px;
  }
  .navButtonCustom {
    background-color: #00A8E9;
    margin-left: 20px;
    width: 100px;
  }
</style>