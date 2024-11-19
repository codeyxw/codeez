<template>
  <div class="section">
    <div class="yx-container">
      <div class="flex justify-between">
        <div class="main">
          <div class="classification">
            <button>Java开发</button>
            <button>前端开发</button>
            <button>大数据工程师</button>
          </div>
          <div class="exercises">
            <div class="que-item" @click="router.push('/quesbank/details')">
              <p>前端开发</p>
              <div>已做0/11题</div>
            </div>
          </div>
        </div>
        <div class="aside">
          <div class="exe-history">
            <div class="title">练习历史</div>
            <div class="list">
              <ul>
                <li>JavaScript练习</li>
                <li>JavaScript练习</li>
                <li>JavaScript练习</li>
              </ul>
            </div>
          </div>
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
  background-color: #f7f8fa;
  min-height: 80vh;
  .yx-container {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    .main {
      width: 860px;
      padding: 16px;
      box-sizing: border-box;
      background-color: #fff;
      .classification {
        height: 40px;
        border-bottom: 1px solid #ebebeb;
        button {
          color: #0b82dd;
          background-color: #e9e9e9;
          border: none;
          margin-right: 12px;
          font-size: 16px;
          padding: 5px 10px;
        }
      }
      .exercises {
        margin-top: 16px;
        .que-item {
          width: 200px;
          height: 68px;
          padding: 12px;
          box-sizing: border-box;
          background-color: #ececec;
          p {
            font-size: 16px;
            color: #333;
          }
          div {
            margin-top: 6px;
            font-size: 14px;
          }
        }
      }
    }
    .aside {
      width: 320px;
      padding: 16px;
      box-sizing: border-box;
      background-color: #fff;
    }
  }
}
</style>
