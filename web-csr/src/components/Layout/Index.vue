<template>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <Main></Main>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
</template>
<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue"
import Main from "./Main.vue"
</script>
<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.el-header, .el-main, .el-footer {
    padding: 0;
}
.el-main {
    background-image: linear-gradient(180deg, $primary, $bgc);
    background-repeat: no-repeat;
    background-size: 100% 260px;
    background-color: $bgc;
}
</style>