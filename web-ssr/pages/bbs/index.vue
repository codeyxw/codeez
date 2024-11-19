<template>
  <div class="bbs-body">
    <div class="yx-container">
      <div class="bbs-main">
        <!-- 板块 -->
        <BbsSector></BbsSector>
        <!-- 搜索、筛选工具栏 -->
        <div class="tool-bar">
          <div class="cols">
            <div class="cols-btn">
              <span>关注</span>
              <span>最新</span>
              <span>推荐</span>
            </div>
            <div>
              <button>刷新</button>
            </div>
          </div>
          <div class="keywords">
            <span>Java</span>
            <span>网页设计</span>
            <span>专升本</span>
          </div>
        </div>
        <BbsList></BbsList>
      </div>
      <div class="bbs-aside">
        <div class="login-box">
          <div class="login-head">
            <span>codeez社区</span>
            <span>立即注册</span>
          </div>
          <div class="login-body">
            <button>发帖</button>
          </div>
        </div>
        <div class="bbs-notice">
          <div class="notice-title">公告</div>
          <ul>
            <li>[4月2日更新]能力值、活跃值和雪币介绍</li>
            <li>[4月2日更新]能力值、活跃值和雪币介绍</li>
            <li>[4月2日更新]能力值、活跃值和雪币介绍</li>
            <li>[4月2日更新]能力值、活跃值和雪币介绍</li>
          </ul>
        </div>
        <div class="bbs-hot">
          <div>热榜</div>
          <ul>
            <li>
              [求助] x64dbg怎么每次调程序都加载了卡巴斯基的com_antivirus.dll ？
            </li>
            <li>
              [求助] x64dbg怎么每次调程序都加载了卡巴斯基的com_antivirus.dll ？
            </li>
            <li>
              [求助] x64dbg怎么每次调程序都加载了卡巴斯基的com_antivirus.dll ？
            </li>
            <li>
              [求助] x64dbg怎么每次调程序都加载了卡巴斯基的com_antivirus.dll ？
            </li>
            <li>
              [求助] x64dbg怎么每次调程序都加载了卡巴斯基的com_antivirus.dll ？
            </li>
            <li>
              [求助] x64dbg怎么每次调程序都加载了卡巴斯基的com_antivirus.dll ？
            </li>
            <li>
              [求助] x64dbg怎么每次调程序都加载了卡巴斯基的com_antivirus.dll ？
            </li>
            <li>
              [求助] x64dbg怎么每次调程序都加载了卡巴斯基的com_antivirus.dll ？
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.yx-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.bbs-body {
  padding-top: 70px;
  background: #f7f8fa;
  min-height: 100vh;
  .bbs-main {
    width: 860px;
  }
  .tool-bar {
    padding: 16px;
    background-color: #fff;
    border-bottom: 1px solid #ebebeb;
    .cols {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      .cols-btn {
        span {
          font-size: 22px;
          font-weight: 700;
          margin-right: 8px;
          color: #a8a8a8;
        }
      }
    }
    .keywords {
      height: 18px;
      span {
        padding: 2px 6px;
        border-radius: 6px;
        background-color: #d6d6d6;
        color: #1a76bb;
        font-size: 12px;
        margin-right: 6px;
        cursor: pointer;
      }
    }
  }
  .bbs-aside {
    width: 320px;
    .login-box {
      padding: 18px;
      background-color: #fff;
      .login-head {
        line-height: 40px;
        border-bottom: 1px solid #ebebeb;
        display: flex;
        justify-content: space-between;
      }
      .login-body {
        text-align: center;
        line-height: 50px;
        button {
          width: 80%;
          height: 28px;
        }
      }
    }
    .bbs-notice {
      margin-top: 16px;
      padding: 18px;
      background-color: #fff;
      .notice-title {
        font-size: 18px;
      }
      ul {
        margin-top: 12px;
        li {
          line-height: 22px;
        }
      }
    }
    .bbs-hot {
      margin-top: 16px;
      padding: 18px;
      background-color: #fff;
      ul {
        li {
          line-height: 24px;
        }
      }
    }
  }
}
</style>
