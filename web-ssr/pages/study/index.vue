<template>
  <div class="section">
    <div class="classify">
      <div class="yx-container">
        <div class="title">
          <div class="i-tabler-device-tv-old text-3xl"></div>
          <span>全部课程</span>
        </div>
        <div class="direction">
          <span>方向：</span> <button class="active">前端开发</button
          ><button>专升本</button><button>Java</button>
        </div>
        <div class="category">
          <span>分类：</span><button>系统课</button><button>实战课</button
          ><button>问题记录</button><button>经验总结</button>
        </div>
      </div>
    </div>
    <div class="course-list">
      <div class="yx-container">
        <div class="course-sort"></div>
        <div class="course-item" @click="handleToDetail">
          <img src="/ad1.png" alt="" />
          <div class="course-body">
            <h3>嵌入式RTOS工程师就业课(基于FreeRTOS) 前30名赠书</h3>
            <p>描述描述描述描述描述描述描述描述描述描述</p>
            <div class="oper">
              <span>0.00</span>
              <button><span class="i-tabler-shopping-cart"></span>加购</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();

const handleToDetail = () => {
  router.push("/study/details/12138");
};
</script>
<style lang="scss" scoped>
.section {
  min-height: 80vh;

  .yx-container {
    width: 1200px;
    margin: 0 auto;
  }
}
.classify {
  height: 140px;
  padding-top: 80px;
  background-color: #f7f8fa;
  .title {
    font-size: 18px;
    font-weight: 700;
    display: flex;
    align-items: center;
    .i-tabler-device-tv-old {
      color: #3b78f2;
      margin-right: 8px;
    }
  }
  .direction,
  .category {
    margin-top: 16px;
    span {
      font-size: 14px;
      font-weight: 700;
      margin-right: 10px;
    }
    button {
      background-color: #f7f8fa;
      border: none;
      color: #535353;
      &.active {
        background-color: #3b78f2;
        color: #fff;
      }
    }
  }
}
.course-list {
  padding-top: 16px;
  background-color: #fff;
  .course-item {
    width: 260px;
    height: 270px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    img {
      width: 100%;
    }
    .course-body {
      padding: 12px;
      h3 {
        font-size: 16px;
      }
      p {
        font-size: 12px;
        margin-top: 6px;
        color: #535353;
        line-height: 16px;
      }
      .oper {
        display: flex;
        margin-top: 6px;
        justify-content: space-between;
        align-items: center;
        span {
          color: #e31f1f;
          font-size: 14px;
        }
        button {
          background-color: #fff;
          border: none;
          color: #e31f1f;
          span {
            display: inline-block;
            vertical-align: middle;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
