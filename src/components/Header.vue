/* eslint-disable prettier/prettier */
<template>
  <div class="fatherBox">
    <div class="leftBox">
      <el-button type="primary" icon="el-icon-s-grid" size="mini"></el-button>
      <el-breadcrumb separator="/" class="breadNav">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <router-link :to="data.path" class="color" v-if="data">{{ data.title }}</router-link>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="rightBox">
      <el-dropdown trigger="click">
        <img src="../assets/images/OIP.png" alt="用户头像加载失败" class="userImg" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-setting">功能暂定</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({ data: state => state.tab.currentMenu })
  }
}
</script>

<style lang="scss" scoped>
.fatherBox {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  .leftBox {
    display: flex;
    align-items: center;
    .breadNav {
      margin-left: 25px;
      .color {
        color: #303133;
        cursor: pointer;
        &:hover {
          color: orange;
        }
      }
    }
  }
}
.userImg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
