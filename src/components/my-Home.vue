<template>
    <div>
        <!-- 头部 -->
      <div class="header">
          <!-- 头部导航区 -->
          <div class="nav">
              <!-- 博客logo区 -->
              <div class="logo">
                  <a href="#">Mountain Blog</a>
                </div>
              <!-- 博客logo区/ -->
              <!-- 导航区 -->
              <div class="navbar">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                >
                     <el-menu-item index="1" @click="goToAnchor('#article')">文章</el-menu-item>
                     <el-menu-item index="2">笔记</el-menu-item>
                     <el-menu-item index="3">登录</el-menu-item>
                     <el-menu-item index="4">注册</el-menu-item>
                 </el-menu>
              </div>
              <!-- 导航区 -->

              <!-- 搜索 -->
              <div class="search">
                 <el-input v-model="input" placeholder="搜索"></el-input>
              </div>
              <!-- 搜索 -->
          </div>
          <!-- 头部导航区 -->
          <!-- 博主和课程介绍区 -->
          <div class="introduction">
              <!-- 左边博主介绍 -->
            <div class="bloger">
                <div class="blogerInfo">
                    <div class="logopic">
                    </div>
                    <h1>MountainBlog</h1>
                    <p>鉴赏创造知识</p>
                   <button>
                       <a href="#">详细信息</a>
                    </button>
                </div>
            </div>
            <!-- 左边博主介绍 -->
            <!-- 课程介绍 -->
            <div class="course">
                <!-- 轮播图 -->
                <div class="lunbotu">
                     <el-carousel height="547px" ref="carousel">
                        <el-carousel-item name="index" v-for="(item,index) in picdata" :key="item.id">
                            <!-- <h3 class="small">{{ item }}</h3> -->
                            <img :src="item.url" alt="">
                         </el-carousel-item>
                    </el-carousel>
                </div>
                <!-- 轮播图 -->
                <div class="courseaside">
                   <ul class="aside" @click="showImage($event)">
                       <li id="0"  class="el-icon-basketball">库里1</li>
                       <li id="1" class="el-icon-football">库里2</li>
                       <li id="2" class="el-icon-soccer">库里3</li>
                       <li id="3" class="el-icon-baseball">库里4</li>
                   </ul>
                </div>
           </div>
          </div>
          <!-- 课程介绍 -->
         <!-- 博主和课程介绍区 -->
     </div> 
        <!-- 头部 -->

        <!-- 主体内容 -->
      <div class="content">
          <ul id="article">
              <li class="box"> 
                  <div class="pic">
                      <a href="#"><img src="../assets/pics/listpic1.jpg" alt=""></a>
                  </div>
                  <div class="ptitle">
                      <span>
                            <a href="#" class="articletitle">Ubuntu 16.04 环境安装部署</a>
                      </span>
                      <p>项目布署文档</p>
                      <span>
                          <i class="el-icon-collection-tag">&nbsp;入门</i>
                          <i class="el-icon-collection-tag">&nbsp;Ubuntu</i>
                          <i class="el-icon-collection-tag">&nbsp;Linux</i>
                          <i class="el-icon-collection-tag">&nbsp;PHP  </i>
                     </span>
                      <div class="info">
                          <i class="el-icon-user">&nbsp;Huangweifeng</i>
                          <i class="el-icon-time">&nbsp;2年前</i>
                          <i class="el-icon-view">&nbsp;12233</i>
                          <a href="#">Read More <i class="el-icon-arrow-right"></i></a>
                      </div>
                  </div>
              </li>
               <li class="box"> 
                  <div class="pic">
                      <a href="#"><img src="../assets/pics/listpic1.jpg" alt=""></a>
                  </div>
                  <div class="ptitle">
                      <span>
                            <a href="#" class="articletitle">Ubuntu 16.04 环境安装部署</a>
                      </span>
                      <p>项目布署文档</p>
                      <span>
                          <i class="el-icon-collection-tag">&nbsp;入门</i>
                          <i class="el-icon-collection-tag">&nbsp;Ubuntu</i>
                          <i class="el-icon-collection-tag">&nbsp;Linux</i>
                          <i class="el-icon-collection-tag">&nbsp;PHP  </i>
                     </span>
                      <div class="info">
                          <i class="el-icon-user">&nbsp;Huangweifeng</i>
                          <i class="el-icon-time">&nbsp;2年前</i>
                          <i class="el-icon-view">&nbsp;12233</i>
                          <a href="#">Read More <i class="el-icon-arrow-right"></i></a>
                      </div>
                  </div>
              </li>
               <li class="box"> 
                  <div class="pic">
                      <a href="#"><img src="../assets/pics/listpic1.jpg" alt=""></a>
                  </div>
                  <div class="ptitle">
                      <span>
                            <a href="#" class="articletitle">Ubuntu 16.04 环境安装部署</a>
                      </span>
                      <p>项目布署文档</p>
                      <span>
                          <i class="el-icon-collection-tag">&nbsp;入门</i>
                          <i class="el-icon-collection-tag">&nbsp;Ubuntu</i>
                          <i class="el-icon-collection-tag">&nbsp;Linux</i>
                          <i class="el-icon-collection-tag">&nbsp;PHP  </i>
                     </span>
                      <div class="info">
                          <i class="el-icon-user">&nbsp;Huangweifeng</i>
                          <i class="el-icon-time">&nbsp;2年前</i>
                          <i class="el-icon-view">&nbsp;12233</i>
                          <a href="#">Read More <i class="el-icon-arrow-right"></i></a>
                      </div>
                  </div>
              </li>
               <li class="box"> 
                  <div class="pic">
                      <a href="#"><img src="../assets/pics/listpic1.jpg" alt=""></a>
                  </div>
                  <div class="ptitle">
                      <span>
                            <a href="#" class="articletitle">Ubuntu 16.04 环境安装部署</a>
                      </span>
                      <p>项目布署文档</p>
                      <span>
                          <i class="el-icon-collection-tag">&nbsp;入门</i>
                          <i class="el-icon-collection-tag">&nbsp;Ubuntu</i>
                          <i class="el-icon-collection-tag">&nbsp;Linux</i>
                          <i class="el-icon-collection-tag">&nbsp;PHP  </i>
                     </span>
                      <div class="info">
                          <i class="el-icon-user">&nbsp;Huangweifeng</i>
                          <i class="el-icon-time">&nbsp;2年前</i>
                          <i class="el-icon-view">&nbsp;12233</i>
                          <a href="#">Read More <i class="el-icon-arrow-right"></i></a>
                      </div>
                  </div>
              </li>
          </ul>    
      </div>
      <!-- 主体内容 -->

      <!-- 底部 -->
      <div class="footer">
          <div class="fcontent">
              <ul>
                  <li><a href="http://www.qq.com"><span class="qq"></span></a></li>
                  <li><a href="http://www.weibo.com"><span class="weibo"></span></a></li>
                  <li><a href="https://github.com/markdown123"><span class="github"></span></a></li>
              </ul>
              <div class="secondfloor">
                  <a href="https://www.csdn.net">友情链接</a>
                  <a href="#">关于我</a>
              </div>
                <p>© Huang Weifeng 2022 . All rights reserved. </p>  
          </div>
      </div>
      <!-- 底部 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            input: '',
            picdata: [{id:0,url:require('../assets/pic1.png')},{id:1,url:require('../assets/pic2.png')},{id:2,url:require('../assets/pic3.png')},{id:3,url:require('../assets/pic4.png')}]
        }
    },
    methods: {
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      //点击侧边栏的li，改变轮播图播放状态
      showImage(e) {
        //获取事件对象中id值
        var id = e.path[0].id;
          this.$refs.carousel.setActiveItem(id);
      },
      goToAnchor(selector) {
          this.$el.querySelector(selector).scrollIntoView({
              behavior: 'smooth',
              block:'start'
          })
      }
    }
}
</script>

<style scoped>
@font-face {
  font-family: 'icomoon';
  src:  url('../assets/fonts/icomoon.eot?ehjytq');
  src:  url('../assets/fonts/icomoon.eot?ehjytq#iefix') format('embedded-opentype'),
    url('../assets/fonts/icomoon.ttf?ehjytq') format('truetype'),
    url('../assets/fonts/icomoon.woff?ehjytq') format('woff'),
    url('../assets/fonts/icomoon.svg?ehjytq#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
.header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 657px;
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
   flex:1;
   font-weight: 700;
   color: #fff;
   font-size: 24px;
   text-align: center;
   line-height: 70px;
}

/* 导航栏 */
.header .nav .navbar {
    flex:2;
    line-height: 70px;
    
}

.header .nav .el-menu {
    background-color: none !important;;
    /* color: #fff; */
}
.header .nav .el-menu-demo {
    /* background-color: rgba(0,0,0,.5); */
    font-size: 16px;
    background-color: rgba(0,0,0,0);
    /* line-height: 70px; */
}
.header .nav .el-menu.el-menu--horizontal .el-menu-item {
    border: none;
    color: #fff;
    background-color: rgba(0,0,0,0);
    height: 70px;
    line-height: 70px;
}
.header .nav .el-menu.el-menu--horizontal .el-menu-item:hover {
    background-color: #f2653b;
}
.header .nav .el-menu--horizontal{
    border: none;
    color: #fff;
    background-color: rgba(0,0,0,0);
}

/* 搜索框 */
.header .nav .search {
    flex:1;
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
    flex:1;
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
    border: 1px solid transparent ;
    border-radius: 10px;
    margin: 0 auto;
    color: #fff;
}

.header .introduction .bloger .blogerInfo button a:hover {
    color:#ccc;
}

.header .introduction .course {
    flex:2;
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
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }


.header .introduction .course .lunbotu .el-carousel__item img {
    display: inline-block;
    width: 100%;
    height: 100%;
}

/* 侧边栏 */
.header .introduction .course .courseaside {
    flex:1;
    display: flex;
    align-items: center;
    background-color: #f2653b;
}

.header .introduction .course .courseaside .aside {
    flex:1;
    color: #fff;
    font-size: 24px;
}

.header .introduction .course .courseaside .aside li {
    padding: 20px;
}

.header .introduction .course .courseaside .aside li:hover {
    color: rgba(0,0,0,.7);
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
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
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

/* 主体内容区 */
.content  {
    width: 80%;
    /* background-color: pink; */
    margin: 0 auto;
}

.content .box {
    display: flex;
    margin: 30px 0;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
}

.content .box .pic {
    flex:1;
    padding-right: 10px;
}

.content .box .pic img {
    width: 100%;
    height: 100%;
}

.content .box .ptitle {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.content .box .ptitle .articletitle {
    color: #000;
    font-size: 25px;
    padding: 10px 0;
}

.content .box .ptitle .articletitle:hover {
    color: #f2653b;
}

.content .box .ptitle span i {
    margin-right: 30px;
    margin-bottom: 10px;
    padding: 5px 10px;
    background-color: #e8e8e8;
    border-radius: 2px;
    color:#000;
    cursor: pointer;
}

.content .box .ptitle span i:hover {
    color: #99a9bf;
}

.content .box .ptitle p {
    padding: 10px;
    font-size: 20px;
}

.content .box .ptitle .info i {
    padding-right: 20px;
}

.content .box .ptitle .info a {
    float:right;
    padding-right: 20px;
    color: #ccc;
}

.content .box .ptitle .info a:hover {
    color: #f2653b;
}

</style>