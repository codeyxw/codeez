<template>
  <div class="container">
    <h3>我的课程</h3>
    <div class="box">
      <el-table :data="courseList">
        <el-table-column prop="date" label="课程名称" width="180" />
        <el-table-column prop="name" label="方向" width="180" />
        <el-table-column prop="address" label="类型" />
      </el-table>
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
    <h3>在刷的题库</h3>
    <div class="box">
      <el-table :data="quesbankList">
        <el-table-column prop="date" label="题库名称" width="180" />
        <el-table-column prop="name" label="方向" width="180" />
        <el-table-column prop="address" label="完成度" />
      </el-table>
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
    <h3>点赞的文章</h3>
    <div class="box">
      <el-table :data="goodArtList">
        <el-table-column prop="date" label="标题" width="180" />
        <el-table-column prop="name" label="作者" width="180" />
        <el-table-column prop="address" label="摘要" />
      </el-table>
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
    <h3>点赞的帖子</h3>
    <div class="box">
      <el-table :data="goodPostList">
        <el-table-column prop="date" label="标题" width="180" />
        <el-table-column prop="name" label="作者" width="180" />
        <el-table-column prop="address" label="摘要" />
      </el-table>
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
let courseList = ref([])
let quesbankList = ref([])
let goodArtList = ref([])
let goodPostList = ref([])

</script>
<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.container {
  width: 100%;
  height: 700px;
  background-color: #fff;

  h3 {
    font-size: 18px;
    padding-left: 8px;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 4px;
      height: 20px;
      background-color: $primary;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .box {
    padding-bottom: 14px;

    .el-table {
      width: 90%;
      margin: 16px auto;
    }

    .el-pagination {
      float: right;
    }
  }
}
</style>