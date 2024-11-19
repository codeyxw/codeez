<template>
  <!-- 帖子列表 -->
  <div class="bbs-list">
    <div class="bbs-item" @click="router.push('/bbs/details/1001')">
      <div class="user-info">
        <div class="avatar">
          <img src="/avatar.png" alt="用户头像" />
        </div>
        <div class="user-details">
          <div class="user-name">
            <span>用户名admin</span> <span class="user-level">等级</span>
          </div>
          <div class="bbs-info">
            <span>发帖时间</span> <span>来自哪里</span>
            <span>学的什么</span>
          </div>
        </div>
      </div>
      <div class="bbs-item-title">
        <span>帖子的标题</span> <span>置顶</span> <span>精品</span>
      </div>
      <div class="abstract">
        这是一大段摘要，帖子的债要，后面用省略号省略，有查看更多的按钮。这是一大段摘要，帖子的债要，后面用省略号省略，有查看更多的按钮。这是一大段摘要，帖子的债要，后面用省略号省略，有查看更多的按钮。这是一大段摘要，帖子的债要，后面用省略号省略，有查看更多的按钮。
        <a href="#">查看更多</a>
      </div>
      <div class="hot-comment">
        <img src="/avatar.png" alt="热评用户头像" />
        <span class="hot-comment-name">用户名</span>
        <span class="hot-comment-content">评论的内容</span>
      </div>
      <div class="bbs-circle"><span>Java</span><span>技术交流</span></div>
      <div class="interact">
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
    <div class="bbs-item">
      <div class="user-info">
        <div class="avatar">
          <img src="/avatar.png" alt="用户头像" />
        </div>
        <div class="user-details">
          <div class="user-name">
            <span>用户名admin</span> <span class="user-level">等级</span>
          </div>
          <div class="bbs-info">
            <span>发帖时间</span> <span>来自哪里</span>
            <span>学的什么</span>
          </div>
        </div>
      </div>
      <div class="bbs-item-title">
        <span>帖子的标题</span> <span>置顶</span> <span>精品</span>
      </div>
      <div class="abstract">
        这是一大段摘要，帖子的债要，后面用省略号省略，有查看更多的按钮。这是一大段摘要，帖子的债要，后面用省略号省略，有查看更多的按钮。这是一大段摘要，帖子的债要，后面用省略号省略，有查看更多的按钮。这是一大段摘要，帖子的债要，后面用省略号省略，有查看更多的按钮。
        <a href="#">查看更多</a>
      </div>
      <div class="hot-comment">
        <img src="/avatar.png" alt="热评用户头像" />
        <span class="hot-comment-name">用户名</span>
        <span class="hot-comment-content">评论的内容</span>
      </div>
      <div class="bbs-circle"><span>Java</span><span>技术交流</span></div>
      <div class="interact">
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
    <div class="bbs-item">
      <div class="user-info">
        <div class="avatar">
          <img src="/avatar.png" alt="用户头像" />
        </div>
        <div class="user-details">
          <div class="user-name">
            <span>用户名admin</span> <span class="user-level">等级</span>
          </div>
          <div class="bbs-info">
            <span>发帖时间</span> <span>来自哪里</span>
            <span>学的什么</span>
          </div>
        </div>
      </div>
      <div class="bbs-item-title">
        <span>帖子的标题</span> <span>置顶</span> <span>精品</span>
      </div>
      <div class="abstract">
        这是一大段摘要，帖子的债要，后面用省略号省略，有查看更多的按钮。这是一大段摘要，帖子的债要，后面用省略号省略，有查看更多的按钮。这是一大段摘要，帖子的债要，后面用省略号省略，有查看更多的按钮。这是一大段摘要，帖子的债要，后面用省略号省略，有查看更多的按钮。
        <a href="#">查看更多</a>
      </div>
      <div class="hot-comment">
        <img src="/avatar.png" alt="热评用户头像" />
        <span class="hot-comment-name">用户名</span>
        <span class="hot-comment-content">评论的内容</span>
      </div>
      <div class="bbs-circle"><span>Java</span><span>技术交流</span></div>
      <div class="interact">
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
  <!-- 分页 -->
  <div class="paging"></div>
</template>
<script setup>
const router = useRouter();
</script>
<style lang="scss" scoped>
.bbs-list {
  margin-bottom: 18px;
  .bbs-item {
    padding: 16px;
    border-bottom: 1px solid #ebebeb;
    background-color: #fff;
    box-sizing: border-box;
    .user-info {
      display: flex;
      align-items: center;
      .avatar {
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
      .user-details {
        .user-name {
          .user-level {
            font-size: 14px;
            color: #555555;
          }
        }
        .bbs-info {
          margin-top: 6px;
          color: #cccccc;
          font-size: 12px;
        }
      }
    }
    .bbs-item-title {
      color: #323232;
      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
    }
    .abstract {
      font-size: 16px;
      line-height: 20px;
    }
    .hot-comment {
      margin: 8px 0;
      display: flex;
      background-color: #f2f2f2;
      align-items: center;
      border-radius: 6px;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 8px;
      }
      .hot-comment-name {
        font-weight: 200;
        margin-right: 8px;
        color: #555555;
      }
      .hot-comment-content {
        color: #333333;
        font-weight: 200;
      }
    }
    .bbs-circle {
      span {
        padding: 4px 8px;
        margin-right: 6px;
        border-radius: 6px;
        background-color: #e1e1e1;
        box-sizing: border-box;
        display: inline-block;
      }
    }
    .interact {
      margin-top: 6px;
      color: #555555;
    }
  }
}
.paging {
}
</style>
