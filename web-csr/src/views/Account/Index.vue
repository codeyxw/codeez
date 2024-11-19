<template>
  <div class="container">
    账号设置（手机、第三方绑定、邮箱、密码）
    <el-descriptions title="账号设置">
      <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
      <el-descriptions-item label="手机">18100000000</el-descriptions-item>
      <el-descriptions-item label="邮箱">Suzhou</el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const activeName = ref('1')
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 700px;
  background-color: #fff;
}
</style>