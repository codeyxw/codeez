<template>
  <div class="right-hot">
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
      <span class="font-size-4 font-bold c-dark ml-1">今日资讯</span>
    </h2>
    <div class="news-list">
      <div class="news-item">
        <span>1</span>
        <span
          >华为全球最大研发中心带火周边租房市场，村民紧急装修 30 年老宅</span
        >
      </div>
      <div class="news-item">
        <span>2</span>
        <span>何小鹏：我跟雷军说过几次，你太努力了搞得我们都好累</span>
      </div>
      <div class="news-item">
        <span>3</span>
        <span>国补后再降千元：华为 Mate 60 Pro 512G 版 5127 元京东新低</span>
      </div>
      <div class="news-item">
        <span class="uni">4</span>
        <span
          >微信确认新功能：好友达上限再添加新好友时，将提示删除“单删好友”</span
        >
      </div>
      <div class="news-item">
        <span class="uni">5</span>
        <span>极空间私有云推出车机端 App，将首发上线长安汽车</span>
      </div>
      <div class="news-item">
        <span class="uni">6</span>
        <span>小米澎湃 OS 2 预热：系统内核焕新，HyperAI 智能全面升维</span>
      </div>
      <div class="news-item">
        <span class="uni">7</span>
        <span
          >华为 MatePad 11.5" 2024 款平板电脑被曝于 10 月 30 日发布，搭载麒麟
          8000 处理器</span
        >
      </div>
      <div class="news-item">
        <span class="uni">8</span>
        <span
          >《使命召唤：黑色行动 6》推出音效增强服务，20 美元可使用 5 年</span
        >
      </div>
      <div class="news-item">
        <span class="uni">9</span>
        <span
          >微信确认新功能：好友达上限再添加新好友时，将提示删除“单删好友”</span
        >
      </div>
      <div class="news-item">
        <span class="uni">10</span>
        <span
          >微信确认新功能：好友达上限再添加新好友时，将提示删除“单删好友”</span
        >
      </div>
      <div class="news-item">
        <span class="uni">11</span>
        <span>小马智行设立欧洲研发中心，在卢森堡研发和部署自动驾驶车辆</span>
      </div>
      <div class="news-item">
        <span class="uni">12</span>
        <span>京东自营 56 元：KONO 轻盈香氛洗发水 600mL 套装 26 元发车</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.right-hot {
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
    padding-left: 18px;
    box-sizing: border-box;
    a {
      text-decoration: none;
      color: #262626;
      font-size: 14px;
      margin-top: 8px;
      margin-right: 16px;
      display: inline-block;
    }
  }
  .news-list {
    .news-item {
      display: flex;
      margin-top: 18px;
      span:first-child {
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        background-color: #db2b2b;
        color: #fff;
        font-size: 12px;
        margin-right: 8px;
      }
      .uni {
        background-color: #989898 !important;
      }
      span:last-child {
        width: 280px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
