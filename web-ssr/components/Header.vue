<template>
  <div class="header" :style="{ top: scroll.top + 'px' }">
    <div class="yx-container">
      <nav>
        <div class="flex items-center">
          <a href="#"><img src="/logo.png" class="logo" alt="codeez" /></a>
          <ul class="menu-list ml-12">
            <li :class="{ 'cursor-pointer': true, active: route.path === '/' }">
              <a href="/">首页</a>
            </li>
            <li
              :class="{
                'cursor-pointer': true,
                active: route.path.includes('/bbs'),
              }"
            >
              <a href="/bbs">论坛</a>
            </li>
            <li
              :class="{
                'cursor-pointer': true,
                active: route.path.includes('/study'),
              }"
            >
              <a href="/study">学习</a>
            </li>
            <li
              :class="{
                'cursor-pointer': true,
                active: route.path.includes('/quesbank'),
              }"
            >
              <a href="/quesbank">题库</a>
            </li>
          </ul>
        </div>
        <div class="flex items-center">
          <div class="search-box mr-6">
            <input type="text" name="search" id="search-box" />
            <button id="search-btn">
              <div class="i-tabler-search text-xl mr-2"></div>
              <span>搜索</span>
            </button>
          </div>
          <div
            class="i-tabler-device-mobile text-3xl mr-6 cursor-pointer c-gray"
          ></div>
          <button
            class="login-btn cursor-pointer"
            @click="router.push('/login')"
          >
            登陆 / 注册
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>
<script setup>
import { useScrollStore } from "~/stores/scroll";

const route = useRoute();
const router = useRouter();
const scroll = useScrollStore();
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 56px;
  position: fixed;
  left: 0;
  z-index: 999;
  transition: top 0.3s;
  background-color: #fff;
  box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent,
    0 1px 4px 0 rgba(0, 0, 0, 0.02), 0 2px 12px 0 rgba(0, 0, 0, 0.04),
    0 2px 6px 0 rgba(0, 0, 0, 0.02);
  .yx-container {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
  .logo {
    width: 91px;
    height: 26px;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .menu-list {
      width: 360px;
      height: 100%;
      display: flex;
      justify-content: space-around;
      li {
        padding: 0 4px;
        height: 100%;
        position: relative;
        a {
          text-decoration: none;
          color: #333333;
          line-height: 56px;
        }
        &:hover {
          a {
            color: #2381ef;
          }
        }
      }
      li.active {
        a {
          color: #2381ef;
        }
        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 4px;
          background-color: #2381ef;
          position: absolute;
          left: 0;
          bottom: 6px;
        }
      }
    }
    .search-box {
      width: 300px;
      height: 38px;
      background-color: #f8f8f8;
      border-radius: 6px;
      padding-top: 5px;
      display: flex;
      #search-box {
        width: 216px;
        height: 34px;
        outline: none;
        border: none;
        background-color: #f8f8f8;
        box-sizing: border-box;
        padding-left: 4px;
      }
      #search-btn {
        border: none;
        width: 78px;
        height: 34px;
        font-size: 16px;
        display: flex;
        color: #2381ef;
        align-items: center;
        border-left: 1px solid #e3e3e3;
        cursor: pointer;
        background-color: #f8f8f8;
      }
    }
    .login-btn {
      background-color: #2381ef;
      border: none;
      color: #fff;
      width: 100px;
      height: 34px;
      border-radius: 6px;
    }
  }
}
</style>
