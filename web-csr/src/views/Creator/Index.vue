<template>
  <div class="container">
    我上传的作品（视频、文章）
    <div class="empty" v-if="false">
      <el-empty description="您还没有发布过作品">
        <el-button type="primary">去发布</el-button>
      </el-empty>
    </div>
    <div class="art-list">
      <h3>我发布的文章</h3>
      <div class="art-box">
        <el-table :data="artList">
          <el-table-column prop="date" label="文章标题" width="180" />
          <el-table-column prop="name" label="方向" width="180" />
        </el-table>
        <el-pagination layout="prev, pager, next" :total="50" />
      </div>
    </div>
    <div class="videos-list">
      <h3>我发布的视频</h3>
      <div class="video-box">
        <div class="v-item">
          <img src="/v9.png" alt="">
          <div class="v-info">
            <div class="v-title">专升本C语言xx课程专升本C语言xx课程</div>
            <div class="v-num">
              <div class="good">点赞数</div>
              <div class="date">日期</div>
            </div>
          </div>
        </div>
        <div class="v-item">
          <img src="/v9.png" alt="">
          <div class="v-info">
            <div class="v-title">专升本C语言xx课程专升本C语言xx课程</div>
            <div class="v-num">
              <div class="good">点赞数</div>
              <div class="date">日期</div>
            </div>
          </div>
        </div>
        <div class="v-item">
          <img src="/v9.png" alt="">
          <div class="v-info">
            <div class="v-title">专升本C语言xx课程专升本C语言xx课程</div>
            <div class="v-num">
              <div class="good">点赞数</div>
              <div class="date">日期</div>
            </div>
          </div>
        </div>
        <div class="v-item">
          <img src="/v9.png" alt="">
          <div class="v-info">
            <div class="v-title">专升本C语言xx课程专升本C语言xx课程</div>
            <div class="v-num">
              <div class="good">点赞数</div>
              <div class="date">日期</div>
            </div>
          </div>
        </div>
        <div class="v-item">
          <img src="/v9.png" alt="">
          <div class="v-info">
            <div class="v-title">专升本C语言xx课程专升本C语言xx课程</div>
            <div class="v-num">
              <div class="good">点赞数</div>
              <div class="date">日期</div>
            </div>
          </div>
        </div>
        <div class="v-item">
          <img src="/v9.png" alt="">
          <div class="v-info">
            <div class="v-title">专升本C语言xx课程专升本C语言xx课程</div>
            <div class="v-num">
              <div class="good">点赞数</div>
              <div class="date">日期</div>
            </div>
          </div>
        </div>
        <div class="v-item">
          <img src="/v9.png" alt="">
          <div class="v-info">
            <div class="v-title">专升本C语言xx课程专升本C语言xx课程</div>
            <div class="v-num">
              <div class="good">点赞数</div>
              <div class="date">日期</div>
            </div>
          </div>
        </div>
        <div class="v-item">
          <img src="/v9.png" alt="">
          <div class="v-info">
            <div class="v-title">专升本C语言xx课程专升本C语言xx课程</div>
            <div class="v-num">
              <div class="good">点赞数</div>
              <div class="date">日期</div>
            </div>
          </div>
        </div>
        <div class="v-item">
          <img src="/v9.png" alt="">
          <div class="v-info">
            <div class="v-title">专升本C语言xx课程专升本C语言xx课程</div>
            <div class="v-num">
              <div class="good">点赞数</div>
              <div class="date">日期</div>
            </div>
          </div>
        </div>
        <div class="v-item">
          <img src="/v9.png" alt="">
          <div class="v-info">
            <div class="v-title">专升本C语言xx课程专升本C语言xx课程</div>
            <div class="v-num">
              <div class="good">点赞数</div>
              <div class="date">日期</div>
            </div>
          </div>
        </div>
        <div class="v-item">
          <img src="/v9.png" alt="">
          <div class="v-info">
            <div class="v-title">专升本C语言xx课程专升本C语言xx课程</div>
            <div class="v-num">
              <div class="good">点赞数</div>
              <div class="date">日期</div>
            </div>
          </div>
        </div>
        <div class="v-item">
          <img src="/v9.png" alt="">
          <div class="v-info">
            <div class="v-title">专升本C语言xx课程专升本C语言xx课程</div>
            <div class="v-num">
              <div class="good">点赞数</div>
              <div class="date">日期</div>
            </div>
          </div>
        </div>
      </div>
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

let artList = ref([])
</script>
<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.container {
  width: 100%;
  background-color: #fff;
}

.videos-list {
  margin-top: 14px;

  h3 {
    font-size: 18px;
  }

  .video-box {
    display: flex;
    flex-wrap: wrap;

    .v-item {
      width: 218px;
      height: 200px;
      margin-top: 16px;
      margin-right: 16px;
      overflow: hidden;

      &:nth-child(4n) {
        margin-right: 0;
      }

      img {
        width: 100%;
        height: 130px;
        border-radius: 8px;
      }

      .v-info {
        margin-top: 4px;

        .v-title {
          height: 36px;
          line-height: 20px;
          font-size: 16px;
        }

        .v-num {
          margin-top: 6px;
          font-size: 14px;
          color: $RegText;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>