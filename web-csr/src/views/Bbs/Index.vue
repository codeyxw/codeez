<template>
  <div class="container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="发帖" name="posts">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="标题" width="180" />
          <el-table-column prop="address" label="摘要" />
          <el-table-column prop="name" label="所属板块" width="180" />
          <el-table-column prop="address" label="点赞" />
          <el-table-column prop="address" label="评论" />
          <el-table-column prop="address" label="收藏" />
          <el-table-column fixed="right" label="操作" min-width="120">
            <template #default>
              <el-button link type="primary" size="small"> 查看 </el-button>
              <el-button link type="primary" size="small"> 编辑 </el-button>
              <el-button link type="primary" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="评论" name="comment">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
          <el-table-column fixed="right" label="操作" min-width="120">
            <template #default>
              <el-button link type="primary" size="small"> 查看 </el-button>
              <el-button link type="primary" size="small"> 编辑 </el-button>
              <el-button link type="primary" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup>
import { ref } from "vue";

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

const activeName = ref("posts");
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 700px;
  background-color: #fff;
}
</style>
