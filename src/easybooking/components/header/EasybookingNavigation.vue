<template>
  <el-header height="70px">
    <section class="container">
      <div class="row">
        <div class="col-4">
            <img v-bind:src="logo" class="logo" />
        </div>
        <div class="col-8">
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            text-color="#777777"
            active-text-color="#0BD5F5"
            :unique-opened="true"
            menu-trigger="click"
            router
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="mdi mdi-wallet menu-icon"></i> UZS
              </template>
              <el-menu-item index="/">UZS</el-menu-item>
              <el-menu-item index="/">USD</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span class="uppercace">
                  <i class="mdi mdi-web menu-icon"></i>
                  ru
                </span>
              </template>
              <el-menu-item :index="switchLocalePath('ru')">Русский</el-menu-item>
              <el-menu-item :index="switchLocalePath('uz')">O'zbekcha</el-menu-item>
            </el-submenu>

            <el-submenu class="no-arrow" index="3">
              <template slot="title">
                <i class="mdi mdi-account-circle menu-icon"></i>
              </template>
              <!-- <easybooking-auth /> -->
            </el-submenu>

            <el-submenu class="no-arrow" index="4">
              <template slot="title">
                <i class="mdi mdi-menu menu-icon"></i>
              </template>
              <el-menu-item :index="localePath('about')">О компании</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </div>
    </section>
  </el-header>
</template>

<script>
const big_logo = require("@/assets/image/logo.svg");
const small_logo = require("@/assets/image/logo.svg");

export default {
  data() {
    return {
      logo: big_logo,
      window: {
        width: 0,
        height: 0
      },
      mobile: false,
      unique: true
    };
  },

  mounted: function() {
    window.addEventListener("resize", this.getWindowHeight);
    this.getWindowHeight();
  },
  methods: {
    getWindowHeight(event) {
      if (document.documentElement.clientWidth < 767) {
        this.logo = small_logo;
        this.mobile = true;
      } else {
        this.logo = big_logo;
        this.mobile = false;
      }
    }
  }
};
</script>

<style lang="scss">
.uppercace {
  text-transform: uppercase;
}
.el-header {
  box-shadow: 0 4px 8px rgba(0, 8, 19, 0.1);
  background: #ffffff;
  position: fixed;
  width: 100%;
}
.logo {
  margin-top: 16px;
}

.el-menu.el-menu--horizontal {
  border-bottom: 0;
}

.el-submenu__title {
  color: #777777;
  height: 69px !important;
  line-height: 69px !important;
  display: flex;
  align-items: center;
  border-bottom: 0 !important;
  &:hover {
    color: #0bd5f5 !important;
  }
  .menu-icon {
    color: #0fb8d3;
    font-size: 20px;
    position: relative;
  }
  .uppercace {
    display: flex;
    align-items: center;
  }
}

.no-arrow .el-submenu__icon-arrow {
  display: none;
}
.el-menu.el-menu--horizontal {
  display: flex;
  justify-content: flex-end;
}
.el-menu--popup-bottom-start {
  margin-top: 0;
}
.el-menu--popup {
  padding: 0;
  box-shadow: 0px 5px 10px rgba(0, 8, 19, 0.15);
  border-radius: 0px 0px 4px 4px;
}
.el-menu--horizontal .el-menu .el-menu-item {
  border-left: 2px solid transparent;
  a {
    color: #4a4a4a;
    text-decoration: none;
  }
  &:hover {
    background: #edfdff;
    border-left: 2px solid #0bd5f5;
    a {
      color: #0bd5f5 !important;
    }
  }
}
.el-menu-item * {
  vertical-align: auto;
}
@media screen and (max-width: 767px) {
  .el-submenu__title {
    padding: 0px 15px !important;
  }
  .el-submenu__icon-arrow {
    display: none;
  }
}
@media screen and (max-width: 575px) {
  .el-submenu__title {
    padding: 0px 10px !important;
  }
}
</style>
