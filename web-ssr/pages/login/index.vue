<template>
  <div class="section">
    <div class="login-box">
      <h2>登陆</h2>
      <div class="login-form">
        <input type="text" name="username" class="input" />
        <input type="password" name="password" class="input" />
        <button class="login-btn">登陆</button>
        <div class="login-footer">
          <span>手机验证码登陆</span>
          <a href="">忘记密码</a>
        </div>
        <div class="third-party">
          <span>第三方账号登陆</span>
          <div class="third-party-icons">
            <img src="/wechat_login.png" alt="" />
          </div>
        </div>
        <button class="register-btn" @click="router.push('/login/register')">
          没有账号？立即注册
        </button>
        <div>
          <label><input type="checkbox" name="" />我已同意</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
</script>
<style lang="scss" scoped>
.section {
  padding-top: 70px;
  overflow: hidden;
  background-color: #f7f8fa;
}
.login-box {
  width: 800px;
  height: 650px;
  padding-top: 50px;
  box-sizing: border-box;
  margin: 46px auto;
  background-color: #fff;
  h2 {
    text-align: center;
    font-size: 22px;
  }
  .login-form {
    width: 360px;
    margin: 0 auto;
    margin-top: 30px;
    overflow: hidden;
    .input {
      margin-top: 18px;
      width: 100%;
      height: 40px;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
    .login-btn {
      width: 100%;
      margin-top: 16px;
      height: 40px;
      color: #fff;
      background-color: #2c8cda;
      border: none;
      outline: none;
    }
    .login-footer {
      margin-top: 16px;
      display: flex;
      justify-content: space-between;
    }
    .third-party {
      .third-party-icons {
        display: flex;
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
      }
    }
    .register-btn {
      width: 100%;
      height: 40px;
      background-color: #fff;
      border: 1px solid #ccc;
      color: #ccc;
    }
  }
}
</style>
