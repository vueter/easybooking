<template>
  <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Авторизация" name="authentification">
      <el-form :model="ruleForm" ref="ruleForm" status-icon>
        <el-form-item
          class="auth-input"
          label="Логин"
          prop="login"
          :rules="[
            { required: true, message: ' ', trigger: 'blur' },
          ]"
        >
          <el-input type="login" v-model="ruleForm.login"></el-input>
        </el-form-item>

        <el-form-item
          class="auth-input"
          label="Пароль"
          prop="password"
          :rules="[
          { required: true, message: ' ', trigger: 'blur' },
          { min: 5, message: 'Минимум 4 символа', trigger: 'blur' },
        ]"
        >
          <el-input type="password" v-model="ruleForm.password" show-password></el-input>
        </el-form-item>

        <el-form-item class="auth-remember">
          <el-checkbox label="Запомнить меня"></el-checkbox>
        </el-form-item>
        <el-form-item class="mb-10">
          <el-button class="d-block" @click="submitForm('ruleForm')" type="primary">Войти</el-button>
        </el-form-item>

        <el-form-item class="mb-10">
          <el-button class="d-block" plain>Войти как агентство</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="Регистрация" name="signup">
      <el-form :model="register" ref="register" status-icon>
        <el-form-item
          class="auth-input"
          label="Логин"
          prop="login"
          :rules="[
            { required: true, message: ' ', trigger: 'blur' },
          ]"
        >
          <el-input type="login" v-model="register.login"></el-input>
        </el-form-item>

        <el-form-item
          class="auth-input"
          label="Email"
          prop="email"
          :rules="[
            { required: true, message: ' ', trigger: 'blur' },
            { type: 'email', message: ' ', trigger: ['blur', 'change'] }
          ]"
        >
          <el-input type="login" v-model="register.email"></el-input>
        </el-form-item>

        <!-- <phone-number /> -->

        <el-form-item
          class="auth-input"
          label="Пароль"
          prop="password"
          :rules="[
          { required: true, message: ' ', trigger: 'blur' },
          { min: 5, message: 'Минимум 4 символа', trigger: 'blur' },
        ]"
        >
          <el-input type="password" v-model="register.password" show-password></el-input>
        </el-form-item>

        <el-form-item class="mb-10">
          <el-button
            class="d-block"
            @click="submitForm('register')"
            type="primary"
          >Зарегистрироваться</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>


<script>
export default {
  data() {
    return {
      activeName: "authentification",
      ruleForm: {
        login: "",
        password: ""
      },
      register: {
        login: "",
        email: "",
        password: "",
        phone_code: "",
        phone_number: "",
        country_code: ""
      }
    };
  },

  methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert("submit!");
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss">
.d-block {
  width: 100%;
}

.el-button--default {
  border: 1px solid #0fb8d3;
  color: #0fb8d3;
  &:hover {
    background-color: #edfdff !important;
  }
}
.mb-10 {
  margin-bottom: 10px !important;
}
.auth-remember {
  .el-form-item__content {
    line-height: 20px;
  }
  .el-checkbox__label {
    font-size: 14px;
    color: #4a4a4a;
    font-weight: normal;
  }
}

.el-tabs--border-card > .el-tabs__header .el-tabs__item:not(.is-disabled):hover,
.el-tabs__item.is-active {
  color: #0bd5f5;
  border-color: #0bd5f5;
  background: #edfdff;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: #0bd5f5;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  border-right-color: transparent;
  border-left-color: transparent;
  border-color: #0bd5f5;
}
.el-tabs--border-card > .el-tabs__header {
  border-bottom-color: transparent;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item {
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #4a4a4a;
  background-color: white;
  border: 0;
  border-bottom: 2px solid transparent;
}
.el-tabs__item {
  padding: 0 30px !important;
}
.el-tabs--border-card > .el-tabs__content {
  padding: 15px 30px;
}
.auth-input {
  margin-bottom: 15px;
  label {
    line-height: 25px;
    color: #777777;
  }
}
</style>
