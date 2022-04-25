<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../../assets/heima.png" alt="">
        <span>mthuang博客后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
           
       <el-menu
       :default-active=activePath
     route="false"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <!-- 博客简介 -->
      <el-menu-item index="1" @click="toIntro(),saveNavState('1')">
            <i class="el-icon-user"></i>
            <span slot="title">博客后台管理简介</span>
        </el-menu-item> 
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>文章</span>
        </template>
          <el-menu-item index="2-1" @click="toArticleList(),saveNavState('2-1')"> <i class="el-icon-notebook-2"></i>我的文章</el-menu-item>
          <el-menu-item index="2-2" @click="toEdit(), saveNavState('2-2')"> <i class="el-icon-edit"></i>编辑文章</el-menu-item>
          <el-menu-item index="2-3" @click="toLabel(),saveNavState('2-3')"><i class="el-icon-collection-tag"></i>文章标签</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
      </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  data() {
    return {
      // 左侧菜单数据
      menulist: [],
      iconsObj: {
        '125': 'iconfont icon-user',
        '103': 'iconfont icon-tijikongjian',
        '101': 'iconfont icon-shangpin',
        '102': 'iconfont icon-danju',
        '145': 'iconfont icon-baobiao'
      },
      // 是否折叠
      isCollapse: false,
      // 被激活的链接地址
      activePath: ''
    }
  },
  created() {
    this.activePath = window.sessionStorage.getItem('activePath')
    console.log(this.activePath)
  },
  methods: {
    logout() {
    //   window.sessionStorage.clear()
    //   this.$router.push('/login')
    console.log('退出了');
     sessionStorage.clear('token');
          this.$router.push('/login')
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      //点击，跳转至简介页面
      toIntro() {
          this.$router.push('/introduction')
      },
      //
      toArticleList() {
          this.$router.push('/articlelist')
      },
      //跳转至编辑文章界面
      toEdit() {
          this.$router.push('/edit')
      },
      //跳转至文章标签
      toLabel() {
          this.$router.push('/label')
      },
      
    // 获取所有的菜单
    // async getMenuList() {
    //   const { data: res } = await this.$http.get('menus')
    //   if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
    //   this.menulist = res.data
    //   console.log(res)
    // },
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    // 保存链接的激活状态
    saveNavState(activePath) {
        console.log(activePath)
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  },
  watch: {
    $route: function(to,from) {
       this.activePath = window.sessionStorage.getItem('activePath')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: #eaedf1;
}

.iconfont {
  margin-right: 10px;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
