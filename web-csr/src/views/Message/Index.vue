<template>
  <div class="container">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="私信" name="letter">
        <div class="letter-box">
          <div class="list">
            <div class="user-item">
              <img src="/avatar.jpeg" alt="" />
              <span>用户名子@</span>
            </div>
            <div class="user-item">
              <img src="/avatar.jpeg" alt="" />
              <span>用户名子@</span>
            </div>
          </div>
          <div class="content">
            <div class="title">正在与<span>用户名称</span>对话中</div>
            <div class="dialogue">
              <div class="dia-item">
                <div class="left">
                  <span class="dia-item-user">用户名称：</span>
                  <span> 内容 </span>
                </div>
              </div>
              <div class="dia-item">
                <div class="left">
                  <span class="dia-item-user">用户名称：</span>
                  <span> 内容 </span>
                </div>
              </div>
              <div class="dia-item">
                <div class="right">
                  <span> 内容 </span>
                  <span class="dia-item-user">：用户名称</span>
                </div>
              </div>
            </div>
            <div class="input-box">
              <textarea class="textarea" name="" id=""></textarea>
              <el-button size="small" type="primary">发送</el-button>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="回复" name="reply">
        <div class="msg-list">
          <div class="msg-item">
            <div class="item-first">
              <div>
                <img src="/avatar.jpeg" alt="" /><span>用户名</span>：<span>回复内容</span>
              </div>
              <div>2023-10-16 18:46</div>
            </div>
            <div class="item-second">
              <div><span>来自主题：</span><span>啦啦啦啦啦</span></div>
              <div>
                <el-button type="primary">回复</el-button>
              </div>
            </div>
          </div>
          <div class="msg-item">
            <div class="item-first">
              <div>
                <img src="/avatar.jpeg" alt="" /><span>用户名</span>：<span>回复内容</span>
              </div>
              <div>2023-10-16 18:46</div>
            </div>
            <div class="item-second">
              <div><span>来自主题：</span><span>啦啦啦啦啦</span></div>
              <div>
                <el-button type="primary">回复</el-button>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup>
import { ref } from "vue";

let activeTab = ref("letter");
</script>
<style lang="scss" scoped>
@use "@/assets/styles/variables" as *;

.container {
  width: 100%;
  background-color: #fff;
}

.letter-box {
  width: 100%;
  height: 720px;
  background-color: #f2f6fc;
  display: flex;

  .list {
    width: 200px;
    height: 100%;
    background-color: #607eab;

    .user-item {
      margin-top: 12px;
      margin-left: 12px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 8px;
      }
    }
  }

  .content {
    width: 100%;

    .title {
      height: 60px;
      line-height: 60px;
      padding-left: 16px;
      border-bottom: 1px solid $border;
      box-sizing: border-box;
    }

    .dialogue {
      width: 100%;
      height: 500px;
      padding: 14px;
      box-sizing: border-box;
      overflow-y: auto;

      .dia-item {
        margin-bottom: 16px;
        overflow: hidden;

        .dia-item-user {
          font-size: 14px;
        }
      }

      .left {
        float: left;
      }

      .right {
        float: right;
      }
    }

    .input-box {
      border-top: 1px solid $border;
      height: 159px;

      .textarea {
        width: 100%;
        height: 128px;
        background-color: #f2f6fc;
        border: none;
        outline: none;
        font-size: 16px;
        resize: none;
        box-sizing: border-box;
      }

      .el-button {
        float: right;
        margin-right: 8px;
      }
    }
  }
}

.msg-list {
  min-height: 700px;

  .msg-item {
    padding: 16px;
    margin-bottom: 16px;
    box-sizing: border-box;
    background-color: #ebedf0;

    .item-first {
      display: flex;
      justify-content: space-between;

      img {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        vertical-align: middle;
      }
    }

    .item-second {
      margin-top: 22px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
