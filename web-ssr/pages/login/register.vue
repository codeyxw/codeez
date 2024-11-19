<template>
  <div class="section">
    <div class="register-box">
      <h2>手机注册</h2>
      <div class="register-form">
        <input type="text" name="username" class="input" />
        <input type="password" name="password" class="input" />
        <button class="reg-btn">注册</button>
        <button class="login-btn">已有账号登陆</button>
        <div>我已同意</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section {
  padding-top: 80px;
  background-color: #f7f8fa;
  overflow: hidden;
}
.register-box {
  width: 800px;
  height: 650px;
  margin: 40px auto;
  background-color: #fff;
  h2 {
    font-size: 22px;
    padding-top: 50px;
    text-align: center;
  }
  .register-form {
    width: 300px;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
    .input {
      width: 100%;
      height: 30px;
      margin-top: 18px;
      box-sizing: border-box;
    }
    .reg-btn {
      width: 100%;
      height: 30px;
      background-color: #318cdb;
      color: #fff;
      border: none;
      margin-top: 18px;
    }
    .login-btn {
      width: 100%;
      height: 30px;
      margin-top: 18px;
      background-color: #fff;
      border: 1px solid #ccc;
      color: #ccc;
    }
  }
}
</style>
