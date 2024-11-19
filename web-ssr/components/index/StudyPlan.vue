<template>
  <div class="left-rec">
    <div class="ban-head">
      <h2>学习计划</h2>
      <ul>
        <li class="active">路线</li>
        <li>刷题</li>
        <li>教辅</li>
        <li>备考</li>
      </ul>
    </div>
    <div class="ban-content">
      <div class="plan-box">
        <div class="plan-item">
          <div class="plan-img">
            <img src="/plan1.png" alt="" />
          </div>
          <div class="plan-info">
            <h4>前端开发路线规划</h4>
            <p>为0基础小白定制的学习路线图，面面俱到</p>
          </div>
        </div>
        <div class="plan-item">
          <div class="plan-img">
            <img src="/plan2.png" alt="" />
          </div>
          <div class="plan-info">
            <h4>Java开发路线规划</h4>
            <p>为0基础小白定制的学习路线图，面面俱到</p>
          </div>
        </div>
        <div class="plan-item">
          <div class="plan-img">
            <img src="/plan3.png" alt="" />
          </div>
          <div class="plan-info">
            <h4>产品经理路线规划</h4>
            <p>为0基础小白定制的学习路线图，面面俱到</p>
          </div>
        </div>
        <div class="plan-item">
          <div class="plan-img">
            <img src="/plan1.png" alt="" />
          </div>
          <div class="plan-info">
            <h4>前端开发工程师路线规划</h4>
            <p>为0基础小白定制的学习路线图，面面俱到</p>
          </div>
        </div>
        <div class="plan-item">
          <div class="plan-img">
            <img src="/plan1.png" alt="" />
          </div>
          <div class="plan-info">
            <h4>前端开发工程师路线规划</h4>
            <p>为0基础小白定制的学习路线图，面面俱到</p>
          </div>
        </div>
        <div class="plan-item">
          <div class="plan-img">
            <img src="/plan1.png" alt="" />
          </div>
          <div class="plan-info">
            <h4>前端开发工程师路线规划</h4>
            <p>为0基础小白定制的学习路线图，面面俱到</p>
          </div>
        </div>
        <div class="plan-item">
          <div class="plan-img">
            <img src="/plan1.png" alt="" />
          </div>
          <div class="plan-info">
            <h4>前端开发工程师路线规划</h4>
            <p>为0基础小白定制的学习路线图，面面俱到</p>
          </div>
        </div>
        <div class="plan-item">
          <div class="plan-img">
            <img src="/plan1.png" alt="" />
          </div>
          <div class="plan-info">
            <h4>前端开发工程师路线规划</h4>
            <p>为0基础小白定制的学习路线图，面面俱到</p>
          </div>
        </div>
        <div class="plan-item">
          <div class="plan-img">
            <img src="/plan1.png" alt="" />
          </div>
          <div class="plan-info">
            <h4>前端开发工程师路线规划</h4>
            <p>为0基础小白定制的学习路线图，面面俱到</p>
          </div>
        </div>
      </div>
      <div class="sec-banner">
        <img src="/banner.webp" alt="" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.left-rec {
  width: 860px;
  padding: 14px;
  box-sizing: border-box;
  background-color: #fff;
  .ban-head {
    height: 52px;
    margin-top: -14px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    h2 {
      font-size: 22px;
      margin-right: 34px;
    }
    ul {
      display: flex;
      height: 100%;
      li {
        margin: 0 12px;
        padding: 0 12px;
        line-height: 50px;
        color: #989898;
        position: relative;
        cursor: pointer;
      }
      .active {
        color: #2381ef;
        &::after {
          content: "";
          display: block;
          width: 50%;
          height: 3px;
          background-color: #2381ef;
          position: absolute;
          bottom: 12px;
          left: 14px;
        }
      }
    }
  }
  .ban-content {
    padding-top: 16px;
    box-sizing: border-box;
    .plan-box {
      height: 310px;
      box-sizing: border-box;
      .plan-item {
        display: flex;
        width: 266px;
        padding: 6px;
        float: left;
        margin-right: 15px;
        margin-bottom: 18px;
        border-radius: 8px;
        transition: box-shadow 0.3s;
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
        box-sizing: border-box;
        &:hover {
          box-shadow: 0px 16px 48px 16px rgba(0, 0, 0, 0.08),
            0px 12px 32px rgba(0, 0, 0, 0.12),
            0px 8px 16px -8px rgba(0, 0, 0, 0.16);
        }
        .plan-img {
          img {
            width: 70px;
            height: 70px;
          }
        }
        .plan-info {
          margin-left: 14px;
          h4 {
            line-height: 30px;
            font-weight: 700;
            width: 136px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p {
            line-height: 18px;
            font-size: 12px;
            color: #989898;
          }
        }
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
    .sec-banner {
      height: 100px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
}
</style>
