<template>
  <div class="right-bbs">
    <div class="right-bbs-title flex flex-items-center pl-2">
      <svg
        t="1729756675306"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5028"
        width="28"
        height="28"
      >
        <path
          d="M789.333333 917.333333l-277.333333-128-277.333333 128V192c0-46.933333 38.4-85.333333 85.333333-85.333333h384c46.933333 0 85.333333 38.4 85.333333 85.333333v725.333333z"
          fill="#F44336"
          p-id="5029"
        ></path>
      </svg>
      <span>社区热帖</span>
    </div>
    <div class="right-bbs-body">
      <div class="right-bbs-item">
        <img src="/hot1.png" alt="" />
        <p>没offer但不想挣扎了</p>
        <div class="bbs-hot-num">
          <span>1.9W</span>
          <div class="i-tabler-flame"></div>
        </div>
      </div>
      <div class="right-bbs-item">
        <img src="/hot2.png" alt="" />
        <p>没offer但不想挣扎了</p>
        <div class="bbs-hot-num">
          <span>1.9W</span>
          <div class="i-tabler-flame"></div>
        </div>
      </div>
      <div class="right-bbs-item">
        <img src="/hot3.png" alt="" />
        <p>没offer但不想挣扎了</p>
        <div class="bbs-hot-num">
          <span>1.9W</span>
          <div class="i-tabler-flame"></div>
        </div>
      </div>
      <div class="right-bbs-item">
        <p>没offer但不想挣扎了</p>
        <div class="bbs-hot-num">
          <span>1.9W</span>
          <div class="i-tabler-flame"></div>
        </div>
      </div>
      <div class="right-bbs-item">
        <p>没offer但不想挣扎了</p>
        <div class="bbs-hot-num">
          <span>1.9W</span>
          <div class="i-tabler-flame"></div>
        </div>
      </div>
      <div class="right-bbs-item">
        <p>没offer但不想挣扎了</p>
        <div class="bbs-hot-num">
          <span>1.9W</span>
          <div class="i-tabler-flame"></div>
        </div>
      </div>
      <div class="right-bbs-item">
        <p>没offer但不想挣扎了</p>
        <div class="bbs-hot-num">
          <span>1.9W</span>
          <div class="i-tabler-flame"></div>
        </div>
      </div>
      <div class="right-bbs-item">
        <p>没offer但不想挣扎了</p>
        <div class="bbs-hot-num">
          <span>1.9W</span>
          <div class="i-tabler-flame"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.right-bbs {
  width: 320px;
  height: 500px;
  background-color: #fff;
  .right-bbs-title {
    height: 50px;
    background-image: linear-gradient(90deg, #ffe7e7 40%, #fffce5);
  }
  .right-bbs-body {
    padding: 18px;
    box-sizing: border-box;
    .right-bbs-item {
      display: flex;
      align-items: center;
      margin-bottom: 22px;
      img {
        width: 16px;
        height: 16px;
        vertical-align: middle;
      }
      p {
        font-weight: 200;
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .bbs-hot-num {
        display: flex;
        align-items: center;
        color: #db2b2b;
        span {
          font-size: 14px;
        }
        .i-tabler-flame {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
