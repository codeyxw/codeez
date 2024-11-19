<script setup lang="ts">
import CourseContainer from "~/components/index/CourseContainer.vue";
</script>

<template>
  <section class="yx-body">
    <main class="main">
      <div class="yx-container">
        <div class="banner-main">
          <!-- 实战课 -->
          <CourseContainer></CourseContainer>
          <!-- 在线工具箱 -->
          <IndexAsideToolBox></IndexAsideToolBox>
        </div>
        <div class="banner-sec">
          <!-- 路线图｜题库｜教材 -->
          <IndexStudyPlan></IndexStudyPlan>
          <!-- 资讯 -->
          <IndexAsideNews></IndexAsideNews>
        </div>
        <div class="banner-bbs">
          <!-- 推荐贴/板块 -->
          <IndexBbsRec></IndexBbsRec>
          <!-- 热门贴 -->
          <IndexAsideBbsHot></IndexAsideBbsHot>
        </div>
      </div>
    </main>
  </section>
</template>
<style lang="scss" scoped>
.yx-body {
  padding-top: 70px;
  background: linear-gradient(180deg, #e7f5ff, #f8f8f8);
  background-repeat: no-repeat;
  background-size: 100% 600px;
  background-color: #f8f8f8;
  .yx-container {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
  .main {
    .banner-main {
      height: 400px;
      display: flex;
      justify-content: space-between;
    }
    .banner-sec {
      height: 500px;
      margin-top: 18px;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
    }
    .banner-bbs {
      height: 1500px;
      margin-top: 18px;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
