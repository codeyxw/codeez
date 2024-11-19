<template>
  <div class="section" ref="section">
    <div :class="{ header: true, fixed: isFixed }">
      <div class="yx-container flex justify-between lh-56px">
        <div class="flex flex-items-center">
          <div class="i-tabler-arrow-left-dashed"></div>
          <span>退出答题</span>
        </div>
        <div class="sub-btn">
          <button>交卷</button>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="yx-container">
        <div class="bank-box">
          <ul>
            <li>
              <div class="title">
                1.
                在一个长度为28的数组中删除第5个元素时（元素序号：1~28），需要向前移动（）个元素。
              </div>
              <div>A\B\C\D</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useScroll } from "@vueuse/core";
import { useScrollStore } from "~/stores/scroll";

let section = ref(null);
let isFixed = ref(false);
const scroll = useScrollStore();

const { y } = useScroll(section);
watch(y, (val) => {
  if (val > 0) {
    scroll.top = -56;
    isFixed.value = true;
  }
  if (val < 56) {
    scroll.top = 0;
    isFixed.value = false;
  }
});
</script>
<style lang="scss" scoped>
.section {
  height: 100vh;
  padding-top: 112px;
  overflow-y: auto;
}
.yx-container {
  width: 1200px;
  margin: 0 auto;
}
.header {
  width: 100%;
  height: 56px;
  z-index: 999;
  border-top: 1px solid #ccc;
  position: fixed;
  top: 56px;
  transition: top 0.3s;
  left: 0;
  background-color: #fff;
  &.fixed {
    top: 0;
  }
  .sub-btn {
    button {
      color: rgb(18, 95, 167);
      border: 1px solid rgb(18, 95, 167);
      background-color: #fff;
    }
  }
}
.main {
  min-height: 110vh;
  padding-top: 30px;
  background-color: #ebebeb;
  .bank-box {
    width: 100%;
    padding: 16px;
    height: 1000px;
    box-sizing: border-box;
    background-color: #fff;
  }
}
</style>
