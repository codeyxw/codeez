<template>
  <div class="circle">
    <h2>社区版块</h2>
    <div class="circle-list">
      <div class="circle-item" @click="router.push('/bbs/section-content')">
        <div class="circle-item-img">
          <img src="/avatar.png" alt="圈子图标" />
        </div>
        <div class="circle-item-info">
          <div class="circle-item-title">
            <span>Java交流</span>
            <div class="circle-item-tag">
              <div class="i-tabler-bookmarks-filled"></div>
              <span>主题:1420</span>
            </div>
          </div>
          <div class="circle-item-intr">讨论关于Java的学习与问题</div>
          <div>版主：<span>asdsd</span><span>撒打算大</span></div>
        </div>
      </div>
      <div class="circle-item">
        <div class="circle-item-img">
          <img src="/avatar.png" alt="圈子图标" />
        </div>
        <div class="circle-item-info">
          <div class="circle-item-title">
            <span>Java交流</span>
            <div class="circle-item-tag">
              <div class="i-tabler-bookmarks-filled"></div>
              <span>主题:1420</span>
            </div>
          </div>
          <div class="circle-item-intr">讨论关于Java的学习与问题</div>
          <div>版主：<span>asdsd</span><span>撒打算大</span></div>
        </div>
      </div>
      <div class="circle-item">
        <div class="circle-item-img">
          <img src="/avatar.png" alt="圈子图标" />
        </div>
        <div class="circle-item-info">
          <div class="circle-item-title">
            <span>Java交流</span>
            <div class="circle-item-tag">
              <div class="i-tabler-bookmarks-filled"></div>
              <span>主题:1420</span>
            </div>
          </div>
          <div class="circle-item-intr">讨论关于Java的学习与问题</div>
          <div>版主：<span>asdsd</span><span>撒打算大</span></div>
        </div>
      </div>
      <div class="circle-item">
        <div class="circle-item-img">
          <img src="/avatar.png" alt="圈子图标" />
        </div>
        <div class="circle-item-info">
          <div class="circle-item-title">
            <span>Java交流</span>
            <div class="circle-item-tag">
              <div class="i-tabler-bookmarks-filled"></div>
              <span>主题:1420</span>
            </div>
          </div>
          <div class="circle-item-intr">讨论关于Java的学习与问题</div>
          <div>版主：<span>asdsd</span><span>撒打算大</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
</script>
<style lang="scss" scoped>
.circle {
  background-color: #fff;
  margin-bottom: 16px;
  & > h2 {
    padding: 18px;
    font-size: 20px;
    font-weight: 200;
    border-bottom: 1px solid #ebebeb;
  }
  .circle-list {
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    .circle-item {
      width: 260px;
      height: 80px;
      margin-right: 18px;
      margin-bottom: 18px;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:nth-child(3n) {
        margin-right: 0;
      }
      .circle-item-img {
        margin-right: 8px;
        width: 60px;
        height: 60px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .circle-item-info {
        .circle-item-title {
          display: flex;
          align-items: center;
          & > span {
            color: #282828;
            font-weight: 600;
            font-size: 16px;
            margin-right: 8px;
          }
          .circle-item-tag {
            display: flex;
            align-items: center;
            .i-tabler-bookmarks-filled {
              font-size: 18px;
              color: rgb(224, 61, 24);
            }
          }
        }
        .circle-item-intr,
        div {
          font-size: 14px;
          color: #626262;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
