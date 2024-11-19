<template>
  <div class="container">
    <h3>收藏的课程</h3>
    <div class="collect-courses">
      <el-table :data="courseList">
        <el-table-column prop="date" label="课程名称" width="180" />
        <el-table-column prop="name" label="方向" width="180" />
      </el-table>
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
    <h3>收藏的文章</h3>
    <div class="collect-articles">
      <el-table :data="articleList">
        <el-table-column prop="date" label="文章名称" width="180" />
        <el-table-column prop="name" label="方向" width="180" />
      </el-table>
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
    <h3>收藏的帖子</h3>
    <div class="collect-posts">
      <el-table :data="postsList">
        <el-table-column prop="date" label="帖子名称" width="180" />
        <el-table-column prop="name" label="方向" width="180" />
      </el-table>
      <el-pagination layout="prev, pager, next" :total="50" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

let courseList = ref([]);
let articleList = ref([]);
let postsList = ref([]);
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 700px;
  background-color: #fff;
}
</style>
