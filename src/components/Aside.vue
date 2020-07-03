/* eslint-disable prettier/prettier */
<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- 无子菜单渲染 -->
    <el-menu-item
      :index="item.path"
      v-for="item in noChildren"
      :key="item.path"
      @click="sentMenu(item)"
    >
      <i :class="'el-icon-' + item.iconClass"></i>
      <span slot="title">{{ item.title }}</span>
    </el-menu-item>
    <!-- 有子菜单渲染（双重渲染） -->
    <el-submenu :index="item.path" v-for="item in hasChildren" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.iconClass"></i>
        <span>{{ item.title }}</span>
      </template>
      <!-- // eslint-disable-next-line prettier/prettier -->
      <el-menu-item-group v-for="item in item.children" :key="item.path">
        <el-menu-item :index="item.path" @click="sentMenu(item)">{{ item.title }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  computed: {
    // 设置计算属性，将要渲染的data数据分散到2个数组中分别渲染
    hasChildren() {
      return this.asideMenuList.filter(a => a.children)
    },
    noChildren() {
      return this.asideMenuList.filter(a => !a.children)
    }
  },
  data() {
    return {
      asideMenuList: [
        {
          path: '/',
          title: '首页',
          iconClass: 's-home'
        },
        {
          path: '/video',
          title: '视频管理',
          iconClass: 'video-play'
        },
        {
          path: '/user',
          title: '用户管理',
          iconClass: 'user'
        },
        {
          path: '/other',
          title: '其他',
          iconClass: 'menu',
          children: [
            {
              path: '/func1',
              title: '功能1',
              iconClass: 'link'
            },
            {
              path: '/func2',
              title: '功能2',
              iconClass: 'connection'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    sentMenu(item) {
      this.$router.push({ path: item.path })
      // 实现路由的跳转
      this.$store.commit('updateValue', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
}
.el-menu-item-group {
  overflow: hidden;
}
</style>
