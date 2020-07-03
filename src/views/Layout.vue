<template>
  <!-- 主页面的布局 -->
  <el-container>
    <el-aside width="200px">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <Main></Main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from '../components/Header'
import Aside from '../components/Aside'
import Main from '../components/Main'
export default {
  components: {
    Header,
    Aside,
    Main
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header {
  background-color: $theme-color;
}
</style>
