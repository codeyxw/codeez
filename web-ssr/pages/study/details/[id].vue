<template>
  <div class="section">
    <div class="yx-container">
      <div class="crumbs">面包屑导航</div>
      <div class="course-head">
        <div class="profile-video">
          <video src="/public/test.mp4" controls></video>
        </div>
        <div class="profile-info">
          <div class="course-title">Python零基础入门动画课【全集】</div>
          <p>讲师：你的大坝</p>
          <p>
            <span>难度：初级</span><span>时长：88小时</span
            ><span>方向：后段开发</span><span>分类：系统课</span>
          </p>
          <div class="course-price">
            <div>
              <span class="price">￥99.00</span>
              <span class="origin-price">券后价￥199.00</span>
            </div>
            <div class="discount">优惠券</div>
          </div>
          <div class="buy-btn">
            <button class="buy">立即购买</button>
            <button class="cart">加入购物车</button>
          </div>
        </div>
      </div>
      <div class="course-body">
        <div class="main">
          <div class="columns">
            <span>介绍</span>
          </div>
          <div class="content">
            适用人群 应届/在校学生：增强求职竞争力 数据分析人员：提升效率不加班
            运营/市场/财务：工作重复，需编程解放自己
          </div>
        </div>
        <div class="aside">
          <div class="author">
            <img src="/avatar.png" alt="" />
            <div>你的大坝</div>
            <div class="author-info">
              大熊之道：道之至简是高效，真传一句话，假传万卷书，我们愿意毫无保留的分享自己的经验和知识。道之不变是初心，我们有一颗永远充满热情的做课初心，反复打磨，持续更新。愿与诸君在智能时代中磨炼技能，终身学习！
            </div>
          </div>
          <div class="consult">咨询</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section {
  padding-top: 70px;
  background-color: #f7f8fa;
  .yx-container {
    width: 1200px;
    margin: 0 auto;
    .crumbs {
      margin-bottom: 12px;
    }
    .course-head {
      display: flex;
      justify-content: space-between;
      padding: 16px;
      background-color: #fff;
      .profile-video {
        width: 600px;
        video {
          width: 100%;
        }
      }
      .profile-info {
        width: 550px;
        .course-title {
          font-size: 24px;
        }
        p {
          margin-top: 20px;
        }
        .course-price {
          margin-top: 20px;
          .price {
            font-size: 22px;
            margin-right: 20px;
          }
          .origin-price {
            padding: 2px 6px;
            border-radius: 16px;
            font-size: 22px;
            color: #fff;
            background-color: #e31c0a;
          }
          .discount {
            margin-top: 18px;
          }
        }
        .buy-btn {
          margin-top: 122px;
          button {
            font-size: 18px;
            width: 140px;
            height: 46px;
            border: none;
          }
          .buy {
            color: #f7f8fa;
            margin-right: 20px;
            background-color: #ff0000;
          }
          .cart {
            color: #e9603a;
            border: 2px solid #e9603a;
            background-color: #fff;
          }
        }
      }
    }
    .course-body {
      margin-top: 18px;
      display: flex;
      justify-content: space-between;
      .main {
        width: 860px;

        box-sizing: border-box;
        background-color: #fff;
        .columns {
          height: 30px;
          border-bottom: 1px solid #ccc;
          span {
            height: 100%;
            line-height: 30px;
            display: inline-block;
            padding: 0 28px;
            border-right: 1px solid #ccc;
            background-color: #f0f0f0;
          }
        }
        .content {
          padding: 12px;
        }
      }
      .aside {
        width: 320px;
        padding: 12px;
        box-sizing: border-box;
        background-color: #fff;
      }
    }
  }
}
</style>
