<template>
  <div class="section">
    <div class="yx-container">
      <div class="main">
        <div>面包屑</div>
        <div>
          标签：<span>全部</span> <span>基础理论</span> <span>资源分享</span>
        </div>
        <div class="posts-list">
          <div class="posts-sort">
            <div class="posts-sort-left">
              <span>最新主题</span>
              <span>热门主题</span>
            </div>
            <div class="posts-sort-right">
              <span>按发帖时间</span>
              <span>按回帖时间</span>
            </div>
          </div>
          <div class="posts-item" @click="router.push('/bbs/details/1001')">
            <div class="posts-item-title">
              <h3>开学季特辑：新学期 coding 指南</h3>
              <span class="posts-item-trait">推荐</span
              ><span class="posts-item-trait">置顶</span>
            </div>
            <div class="posts-item-tags">
              <span>Java</span> <span>面试</span>
            </div>
            <div class="abstract">
              秋招大战即将打响，你准备好了吗？别紧张，无论你是刷题小能手，还是实习达人，这里都有一套适合你的攻略。本帖集合了众多成功上岸的前辈们的实战经验，从刷题突击到面试技巧，应有尽有。快来一起看看，这些干货能
            </div>
            <div class="operate">
              <div class="flex">
                <div class="flex flex-items-center mr-6">
                  <div class="i-tabler-thumb-up text-xl"></div>
                  <span>12</span>
                </div>
                <div class="flex flex-items-center mr-6">
                  <div class="i-tabler-message text-xl"></div>
                  <span>22</span>
                </div>
                <div class="flex flex-items-center mr-6">
                  <div class="i-tabler-star text-xl"></div>
                  <span>2</span>
                </div>
                <div class="flex flex-items-center mr-6">
                  <div class="i-tabler-share-3 text-xl"></div>
                  <span>22</span>
                </div>
              </div>
            </div>
          </div>
          <div class="posts-item">
            <div class="posts-item-title">
              <h3>开学季特辑：新学期 coding 指南</h3>
              <span class="posts-item-trait">推荐</span
              ><span class="posts-item-trait">置顶</span>
            </div>
            <div class="posts-item-tags">
              <span>Java</span> <span>面试</span>
            </div>
            <div class="abstract">
              秋招大战即将打响，你准备好了吗？别紧张，无论你是刷题小能手，还是实习达人，这里都有一套适合你的攻略。本帖集合了众多成功上岸的前辈们的实战经验，从刷题突击到面试技巧，应有尽有。快来一起看看，这些干货能
            </div>
            <div class="operate">
              <div class="flex">
                <div class="flex flex-items-center mr-6">
                  <div class="i-tabler-thumb-up text-xl"></div>
                  <span>12</span>
                </div>
                <div class="flex flex-items-center mr-6">
                  <div class="i-tabler-message text-xl"></div>
                  <span>22</span>
                </div>
                <div class="flex flex-items-center mr-6">
                  <div class="i-tabler-star text-xl"></div>
                  <span>2</span>
                </div>
                <div class="flex flex-items-center mr-6">
                  <div class="i-tabler-share-3 text-xl"></div>
                  <span>22</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="aside">
        <div class="plate-intro">
          <img src="/plate.png" alt="" />
          <h2>Java板块</h2>
          <p>Android系统逆向、对抗、加固、漏洞等</p>
          <div class="plate-intro-num">
            <div>
              <span>8077</span>
              <span>板块主题</span>
            </div>
            <div>
              <span>8077</span>
              <span>精品主题</span>
            </div>
            <div>
              <span>8077</span>
              <span>今日主题</span>
            </div>
          </div>
        </div>
        <div class="plate-master">
          <h3>版主</h3>
          <div class="master-item">
            <img src="/avatar.png" alt="版主头像" />
            <p><span>昵称：啊啊啊</span></p>
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
  .yx-container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .main {
      width: 860px;
      .posts-list {
        margin-top: 16px;
        .posts-item {
          padding: 16px;
          margin-top: 16px;
          background-color: #fff;
          .posts-item-title {
            display: flex;
            h3 {
              font-size: 18px;
              font-weight: 700;
            }
            span {
              margin-left: 18px;
            }
          }
          .posts-item-tags {
            margin-top: 8px;
            span {
              color: rgb(67, 167, 224);
              background-color: #dedede;
            }
          }
          .abstract {
            margin-top: 8px;
          }
          .operate {
            margin-top: 8px;
          }
        }
      }
    }
    .aside {
      width: 320px;
      .plate-intro {
        text-align: center;
        background-color: #fff;
        padding: 18px;
        img {
          width: 60px;
          height: 60px;
        }
        h2 {
          margin: 16px 0;
          font-size: 18px;
        }
        p {
          font-size: 14px;
          color: #ccc;
        }
        .plate-intro-num {
          display: flex;
          justify-content: space-between;
          margin-top: 26px;
          span {
            display: block;
          }
        }
      }
      .plate-master {
        margin-top: 16px;
        padding: 18px;
        background-color: #fff;
        h3 {
          font-size: 18px;
          line-height: 30px;
          border-bottom: 1px solid #ebebeb;
        }
      }
    }
  }
}
</style>
