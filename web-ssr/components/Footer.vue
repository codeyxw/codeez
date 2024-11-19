<template>
  <div class="footer">
    <div class="yx-container">
      <div
        class="flex justify-between mt8"
        style="border-bottom: 1px solid #5b5b5b; padding-bottom: 20px"
      >
        <ul class="footer-menus" style="width: 500px">
          <li><a href="">关于我们</a></li>
          <li><a href="">意见反馈</a></li>
          <li><a href="">校企合作</a></li>
          <li><a href="">免责声明</a></li>
          <li><a href="">加入我们</a></li>
        </ul>
        <div
          class="flex justify-around flex-items-center font-size-6"
          style="color: #6f6f6f; width: 180px"
        >
          <div class="font-size-4">QQ群</div>
          <div class="i-tabler-brand-wechat"></div>
          <div class="i-tabler-brand-weibo"></div>
          <div class="i-tabler-mail"></div>
        </div>
      </div>
      <div class="company-info">
        <p>公司地址：河北雄安新区</p>
        <p>备案号：abcadasdsadadsa</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  height: 240px;
  padding: 18px;
  background-color: rgb(40, 40, 40);
  box-sizing: border-box;
  .yx-container {
    width: 1200px;
    margin: 0 auto;
    .footer-menus {
      display: flex;
      justify-content: space-between;
      li {
        a {
          text-decoration: none;
          color: #6f6f6f;
          font-weight: 200;
          font-size: 14px;
        }
      }
    }
    .company-info {
      margin-top: 20px;
      color: #6f6f6f;
      font-size: 12px;
      line-height: 26px;
    }
  }
}
</style>
