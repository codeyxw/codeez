<template>
  <div class="container">
    <el-container>
      <el-header>
        <div class="user-first">
          <img src="/avatar.jpeg" alt="" />
          <div class="user-info">
            <h3>昵称的位置</h3>
            <div class="user-info-tag">
              <el-tag type="primary" size="small">Tag 1</el-tag>
              <el-tag type="success" size="small">Tag 2</el-tag>
            </div>
            <p>简介简介简介简介简介简介简介简介简介简介简介简介</p>
          </div>
          <div class="interact">
            <div class="interact-item">
              <span>获赞</span>
              <span>0</span>
            </div>
            <div class="interact-item">
              <span>粉丝</span>
              <span>0</span>
            </div>
            <div class="interact-item">
              <span>关注</span>
              <span>0</span>
            </div>
          </div>
        </div>
        <div class="user-second">
          <div class="user-second-num">
            <span>ID号:123123</span>
            <span>注册时间：2022年22月11日</span>
          </div>
          <div>
            <el-button type="primary" @click="dialogEditInfo = true">编辑资料</el-button>
            <el-button type="primary" plain>创作者中心</el-button>
          </div>
        </div>
      </el-header>
      <el-container style="padding-top: 14px">
        <el-aside width="200px">
          <el-menu default-active="/home" router>
            <el-menu-item index="/home">
              <span>学习进度</span>
            </el-menu-item>
            <el-menu-item index="/message">
              <span>我的消息</span>
            </el-menu-item>
            <el-menu-item index="/posts">
              <span>我的帖子</span>
            </el-menu-item>
            <el-menu-item index="/collect">
              <span>我的收藏</span>
            </el-menu-item>
            <el-menu-item index="/creator">
              <span>我的作品</span>
            </el-menu-item>
            <el-menu-item index="/account">
              <span>账号设置</span>
            </el-menu-item>
            <el-menu-item index="/wallet">
              <span>我的钱包</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <el-dialog v-model="dialogEditInfo" title="编辑资料" width="500">
      <el-upload class="avatar-uploader" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon">
          <Plus />
        </el-icon>
      </el-upload>
      <el-form :model="editInfoForm" label-width="auto">
        <el-form-item label="用户名">
          <el-input v-model="editInfoForm.name" />
        </el-form-item>
        <el-form-item label="专业方向">
          <el-select v-model="editInfoForm.direction" placeholder="选择专业方向">
            <el-option label="前端" value="frontend" />
            <el-option label="Java" value="java" />
          </el-select>
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="editInfoForm.intro" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogEditInfo = false">取消</el-button>
          <el-button type="primary" @click="handleEditInfo"> 保存 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";

const imageUrl = ref("");
let dialogEditInfo = ref(false);
let editInfoForm = ref({
  name: "",
  intro: "",
  direction: "",
});

const handleAvatarSuccess = (response, uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw);
};

const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== "image/jpeg") {
    ElMessage.error("必须是jpg格式!");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("不能大于2MB!");
    return false;
  }
  return true;
};

const handleEditInfo = () => {
  dialogEditInfo.value = false;
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables" as *;

.container {
  width: 1200px;
  padding: 14px;
  margin: 0 auto;
  box-sizing: border-box;

  .el-header {
    height: 160px;
    padding: 0;
    background-color: #fff;

    .user-first {
      display: flex;
      padding: 14px;
      border-bottom: 1px solid $border;
      justify-content: space-between;

      img {
        width: 60px;
        height: 60px;
        margin-right: 10px;
        border-radius: 50%;
      }

      .user-info {
        flex: 1;

        h3 {
          font-size: 18px;
        }

        .user-info-tag {
          margin-top: 6px;

          .el-tag {
            margin-right: 8px;
          }
        }

        p {
          margin-top: 8px;
          font-size: 14px;
        }
      }

      .interact {
        width: 280px;
        display: flex;
        justify-content: space-between;

        .interact-item {
          width: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        }
      }
    }

    .user-second {
      display: flex;
      height: 60px;
      padding: 0 14px;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;

      .user-second-num {
        font-size: 14px;

        span {
          margin-right: 12px;
        }
      }
    }
  }

  .el-aside {
    background-color: #fff;

    .el-menu {
      border-right: none;
    }
  }

  .el-main {
    padding: 0 0 0 14px;
  }

  .avatar-uploader {
    text-align: center;
    margin-bottom: 18px;
  }

  .avatar-uploader .avatar {
    width: 88px;
    height: 88px;
    display: block;
  }
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 88px;
  height: 88px;
  text-align: center;
}
</style>
