<template>
  <div>
    <!-- 头部 -->
    <div class="header" id="hd">
      <!-- 头部导航区 -->
      <div class="nav">
        <!-- 博客logo区 -->
        <div class="logo" id="tubiao">
          <a href="#">Mountain Blog</a>
        </div>
        <!-- 博客logo区/ -->
        <!-- 导航区 -->
        
        <div class="navbar" id="daohang">
          <el-menu  id="daohangc"  :class="[{'el-menu-demo':true},flag ? 'animate': 'animateb' ]" :mode=mode @select="handleSelect">
            <el-menu-item index="1" @click="goToAnchor('#article')">文章</el-menu-item>
            <el-menu-item index="2" @click="toNotes()"> 笔记 </el-menu-item>
            <el-menu-item index="3" @click="toLogin()"> 登录 </el-menu-item>
            <el-menu-item index="4">
              <router-link to="/register">注册</router-link>
            </el-menu-item>
            <el-menu-item index="5" @click="logout()">退出 </el-menu-item>
          </el-menu>
        </div>
        <!-- 导航区 -->
        <i class="el-icon-menu" id="btn" @click="displayNav()"></i>
        <!-- 搜索 -->
        <div class="search" id="ss">
          <el-input v-model="input" placeholder="搜索"></el-input>
        </div>
        <!-- 搜索 -->
      </div>
      <!-- 头部导航区 -->
    </div>
    <!-- 头部 -->

    <!-- 中间内容插入,占位 -->
    <router-view></router-view>

    <!-- 底部 -->
    <div class="footer" id="ft">
      <div class="fcontent">
        <ul>
          <li>
            <a href="http://www.qq.com"><span class="qq"></span></a>
          </li>
          <li>
            <a href="http://www.weibo.com"><span class="weibo"></span></a>
          </li>
          <li>
            <a href="https://github.com/markdown123"><span class="github"></span></a>
          </li>
        </ul>
        <div class="secondfloor">
          <a href="https://www.csdn.net">友情链接</a>
          <a href="#">关于我</a>
        </div>
        <p>© Huang Weifeng 2022 . All rights reserved.</p>
      </div>
    </div>
    <!-- 底部 -->
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  data() {
    return {
        // animateClass: '',
    //导航栏飞入和飞出动画的切换
      flag: false,
      activeIndex: '1',
      input: '',
      isLogin: false,
      AllArticleList: [],
      //判断窗口是否为水平
      mode: 'horizontal',
      //获取窗口宽度
      screenWidth: document.body.clientWidth,
    }
  },
  created() {
    this.getAllArticle()
  },
  
  //  mounted: async function () {
  //      const result = await this.$http.get('admin/articleList');
  //       console.log(result)
  // },
  mounted() {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },


  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    //点击侧边栏的li，改变轮播图播放状态
    showImage(e) {
      //获取事件对象中id值
      var id = e.path[0].id
      this.$refs.carousel.setActiveItem(id)
    },
    goToAnchor(selector) {
      if (!this.$el.querySelector(selector)) {
        //若不是首页，则直接返回首页
        this.$router.push('/home')
        return
      }
      this.$el.querySelector(selector).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    },
    //检测是否登录，若未登录，跳转至登录界面;若登录，跳转至笔记
    async toNotes() {
      //请求服务器，检验token是否已登录
      console.log(sessionStorage.getItem('token'))
      let params = {
        email: this.$store.state.loginForm.email,
        token: sessionStorage.getItem('token'),
      }
      const result = await this.$http.post('admin/notes', params)
      this.isLogin = result.isValid
      //isVaild是服务器响应的数据，该数据验证了token
      if (!result.isValid) {
        this.$message.error('请先登录')
        this.$router.push('/login')
        return
      }
      this.$router.push('/notes')
    },
    toLogin() {
      console.log(sessionStorage.getItem('token'))
      if (sessionStorage.getItem('token') && this.$store.state.loginForm.email) {
        this.$message.success('您已经登录')
        return
      }
      this.$router.push('/login')
    },
    logout() {
      sessionStorage.clear('token')
      this.$router.push('/login')
    },
    //获取所有文章
    async getAllArticle() {
      const result = await this.$http.get('admin/articleList')
      this.AllArticleList = result
    },
    //点击文章，跳转至文章详细
    toArticleDetail(id) {
      this.$router.push('/article/' + id)
    },
    //点击窗口缩小后的菜单按钮，显示和隐藏菜单
    displayNav() {
        //控制类名
        this.flag = !this.flag;
        //实现从屏幕飞人飞出
        // this.animateClass = 'animate';
    }
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        //当窗口小于870时，导航栏垂直摆放
        if(val< 870) {
            this.mode = 'vertical'
        } else {
            this.mode = 'horizontal'
        }
        this.timer = true
        let that = this
        setTimeout(function () {
          // 打印screenWidth变化的值
          console.log(that.screenWidth)
          that.timer = false
        }, 400)
      }
      //窗口缩小后，重新加载页面
      this.reload()
    },
  },
}
</script>

<style scoped>
@font-face {
  font-family: 'icomoon';
  src: url('../assets/fonts/icomoon.eot?ehjytq');
  src: url('../assets/fonts/icomoon.eot?ehjytq#iefix') format('embedded-opentype'), url('../assets/fonts/icomoon.ttf?ehjytq') format('truetype'),
    url('../assets/fonts/icomoon.woff?ehjytq') format('woff'), url('../assets/fonts/icomoon.svg?ehjytq#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
.header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: #39736c;
}

.header .nav {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  /* background-color: pink; */
  font-style: 'sans-serif';
}

.header .nav .logo {
  flex: 1;
  font-weight: 700;
  color: #fff;
  font-size: 24px;
  text-align: center;
  line-height: 70px;
}

/* 导航栏 */
/* 窗口正常时，btn隐藏 */
.header .nav #btn {
    display: none;
}

/* 动画 */
.animate {
    transform: translateX(-100px);
    transition: all linear .75s;
}

.animateb {
    transform: translateX(10px);
    transition: all linear .75s;
}
.header .nav .navbar {
  flex: 2;
  line-height: 70px;
  min-width: 40%;
}

.header .nav .el-menu {
  background-color: none !important;
  /* color: #fff; */
}
.header .nav .el-menu-demo {
  /* background-color: rgba(0,0,0,.5); */
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0);
  /* line-height: 70px; */
}

.header .nav .el-menu.el-menu--horizontal .el-menu-item:hover {
    background-color: #f2653b;
}

.header .nav .el-menu.el-menu--horizontal .el-menu-item {
    border: none;
    color: #fff;
    background-color: rgba(0, 0, 0, 0); 
    height: 40px;
    line-height: 40px;
}

.header .nav .el-menu--horizontal {
    border: none;
    color: #fff;
    background-color: rgba(0, 0, 0, 0);
}




/* 搜索框 */
.header .nav .search {
  flex: 1;
  /* margin-left: 130px; */
  line-height: 70px;
}

.header .introduction {
  flex: 5;
  display: flex;
  height: 587px;
  /* background-color: pink; */
}

.header .introduction .bloger {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
}

.header .introduction .bloger .blogerInfo {
  width: 100%;
  height: 200px;
  flex: 1;
  text-align: center;
  color: #fff;
}

.header .introduction .bloger .blogerInfo .logopic {
  width: 30%;
  height: 30%;
  background: url(../assets/mypic.png) no-repeat;
  background-position: center center;
  background-size: 50%;
  margin: 0 auto;
  border-radius: 50%;
}

.header .introduction .bloger .blogerInfo button {
  display: block;
  overflow: hidden;
  padding: 5px 10px;
  background-color: #f2653b;
  border: 1px solid transparent;
  border-radius: 10px;
  margin: 0 auto;
  color: #fff;
}

.header .introduction .bloger .blogerInfo button a:hover {
  color: #ccc;
}

.header .introduction .course {
  flex: 2;
  display: flex;
  /* background-color: green; */
}

/* 轮播图 */
.header .introduction .course .lunbotu {
  flex: 3;
  /* height: 200px; */
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.header .introduction .course .lunbotu .el-carousel__item img {
  display: inline-block;
  width: 100%;
  height: 100%;
}

/* 侧边栏 */
.header .introduction .course .courseaside {
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #f2653b;
}

.header .introduction .course .courseaside .aside {
  flex: 1;
  color: #fff;
  font-size: 24px;
}

.header .introduction .course .courseaside .aside li {
  padding: 20px;
}

.header .introduction .course .courseaside .aside li:hover {
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
}

/* 底部区 */
.footer {
  position: relative;
  width: 100%;
  height: 250px;
  background-color: #23222c;
  margin-top: 100px;
}

.footer .fcontent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
}

.footer .fcontent ul {
  text-align: center;
}

.footer .fcontent li {
  display: inline-block;
  padding: 0 20px;
}

.footer .fcontent li a .qq::before {
  content: '\eabd';
  font-family: 'icomoon';
  font-size: 20px;
}

.footer .fcontent li a .qq:hover {
  color: #636b6f;
}

.footer .fcontent li a .weibo::before {
  content: '\ea9a';
  font-family: 'icomoon';
  font-size: 20px;
}

.footer .fcontent li a .weibo:hover {
  color: #636b6f;
}

.footer .fcontent li a .github::before {
  content: '\eab0';
  font-family: 'icomoon';
  font-size: 20px;
}

.footer .fcontent li a .github:hover {
  color: #636b6f;
}

.footer .fcontent .secondfloor {
  text-align: center;
}

.footer .fcontent .secondfloor a {
  padding: 0 30px;
  font-weight: 700;
}

.footer .fcontent .secondfloor a:hover {
  color: #636b6f;
}

.footer .fcontent p {
  text-align: center;
}
</style>