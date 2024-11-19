<template>
  <div class="tool-box">
    <h2 class="tool-box-title">
      <svg
        t="1729740224113"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5334"
        width="30"
        height="30"
      >
        <path
          d="M85.333333 149.333333h853.333334v725.333334H85.333333z"
          fill="#BBDEFB"
          p-id="5335"
        ></path>
        <path
          d="M192 256h640v106.666667H192z"
          fill="#3F51B5"
          p-id="5336"
        ></path>
        <path
          d="M192 448h277.333333v341.333333H192zM554.666667 448h277.333333v341.333333H554.666667z"
          fill="#2196F3"
          p-id="5337"
        ></path>
      </svg>
      <span class="font-size-4 font-bold c-dark ml-1">在线工具箱</span>
    </h2>
    <div class="flex flex-items-center font-size-4 font-400 mt-6">
      <div class="i-tabler-transform c-blue text-xl mr1"></div>
      <span>格式转换</span>
    </div>
    <div class="tool-box-item">
      <a href="#">PPT转PDF</a>
      <a href="#">PPT转图片</a>
      <a href="#">PPT转World</a>
      <a href="#">图片生成PPT</a>
    </div>
    <div class="flex flex-items-center font-size-4 font-400 mt-6">
      <div class="i-tabler-icons c-blue text-xl mr1"></div>
      <span>图片工具</span>
    </div>
    <div class="tool-box-item">
      <a href="#">PPT转PDF</a>
      <a href="#">PPT转图片</a>
      <a href="#">PPT转World</a>
      <a href="#">图片生成PPT</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tool-box {
  width: 320px;
  padding: 14px;
  border-radius: 6px;
  background-image: linear-gradient(145deg, #ffffff 70%, #eaf6ff);
  background-color: #fff;
  box-sizing: border-box;
  .tool-box-title {
    height: 60px;
    display: flex;
    align-items: center;
    margin: -14px -14px 14px;
    padding-left: 14px;
    border-radius: 6px 6px 0 0;
    background-image: linear-gradient(90deg, #e7fdff, #ebf8ff, #dbeeff);
  }
  .tool-box-item {
    padding-left: 20px;
    box-sizing: border-box;
    a {
      text-decoration: none;
      color: #262626;
      font-size: 14px;
      margin-top: 12px;
      margin-right: 16px;
      display: inline-block;
    }
  }
}
</style>
