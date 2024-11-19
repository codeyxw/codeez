<template>
  <div class="section">
    <div class="yx-container">
      <div class="main">
        <div class="crumb">社区>Java社区>xxxx</div>
        <div class="article">
          <div class="art-head">
            <h2>
              [招生]科锐逆向工程师培训(2024年06月28日实地，远程教学同时开班,
              第50期)
            </h2>
            <p>
              <span>发表于：2024-11-11 20:35</span> <span>点击量：38876</span>
            </p>
          </div>
          <div class="art-body">内容</div>
        </div>
      </div>
      <div class="aside">
        <div class="user-info">
          <div class="user-info-head">
            <img src="/avatar.png" alt="" />
            <div>
              <div>UserName</div>
              <div class="user-info-level">等级</div>
            </div>
          </div>
          <div class="user-info-body">
            <div>
              <p>26</p>
              <p>发帖</p>
            </div>
            <div>
              <p>26</p>
              <p>回帖</p>
            </div>
            <div>
              <p>26</p>
              <p>获赞</p>
            </div>
          </div>
        </div>
        <div class="operate">
          <button>回复</button>
        </div>
        <div class="user-article">
          <div class="user-art-head">他的文章</div>
          <div class="user-art-list">
            <ul>
              <li>[分享]科锐学员版块对外开放了</li>
              <li>[分享]科锐学员版块对外开放了</li>
              <li>[分享]科锐学员版块对外开放了</li>
              <li>[分享]科锐学员版块对外开放了</li>
              <li>[分享]科锐学员版块对外开放了</li>
              <li>[分享]科锐学员版块对外开放了</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section {
  padding-top: 70px;
  background-color: #f7f8fa;
  .yx-container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .main {
      width: 860px;
      .article {
        background-color: #fff;
      }
    }
    .aside {
      width: 320px;
      .user-info {
        padding: 18px;
        background-color: #fff;
        .user-info-head {
          display: flex;
          align-items: center;
          img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
          }
        }
        .user-info-body {
          display: flex;
          justify-content: space-between;
        }
      }
      .operate {
        button {
          margin: 18px 0;
          color: #1186da;
          background-color: #d0d0d0;
          width: 100%;
          border: none;
        }
      }
      .user-article {
        background-color: #fff;
      }
    }
  }
}
</style>
