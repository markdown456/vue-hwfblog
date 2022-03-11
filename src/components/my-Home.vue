<template>
    <div>
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
                     <el-carousel height="587px" ref="carousel">
                        <el-carousel-item name="index" v-for="(item,index) in  AllArticleList" :key="item.id">
                            <!-- <h3 class="small">{{ item }}</h3> -->
                            <img :src="item.imgUrl" alt="">
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
        <!-- 主体内容 -->
      <div class="content">
             <ul id="article" v-for="(item,index) in AllArticleList" :key="index">
                <li class="box"> 
                    <div class="pic" @click="toArticleDetail(item.id,item.type)">
                        <a href="#"><img :src="item.imgUrl" alt=""></a>
                    </div>
                    <div class="ptitle">
                        <span @click="toArticleDetail(item.id,item.type)">
                                <a href="#" class="articletitle">{{item.title}}</a>
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
                            <i class="el-icon-time">&nbsp;{{item.date}}</i>
                            <i class="el-icon-view">&nbsp;12233</i>
                            <a href="#">Read More <i class="el-icon-arrow-right"></i></a>
                        </div>
                    </div>
                </li>
             </ul>   
      </div>
      <!-- 主体内容 -->

    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            input: '',
            picdata: [{id:0,url:require('../assets/pic1.png')},{id:1,url:require('../assets/pic2.png')},{id:2,url:require('../assets/pic3.png')},{id:3,url:require('../assets/pic4.png')}],
            isLogin: false,
            AllArticleList: []
        }
    },
    created() {
        this.getAllArticle()
    },
    //  mounted: async function () {
    //      const result = await this.$http.get('admin/articleList');
    //       console.log(result)
    // },
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
      },
      //检测是否登录，若未登录，跳转至登录界面;若登录，跳转至笔记
     async toNotes() {
          //请求服务器，检验token是否已登录
          console.log(sessionStorage.getItem('token'))
          let params = {
              email: this.$store.state.loginForm.email,
              token: sessionStorage.getItem('token')
          }
           const result = await this.$http.post('admin/notes',params);
           console.log(result)
            this.isLogin = result.data.isValid;
           //isVaild是服务器响应的数据，该数据验证了token
           if(!result.data.isValid) {
               this.$message.error('请先登录')
               this.$router.push('/login') 
               return;
            }
           this.$router.push('/notes') 
      },
      toLogin() {
          console.log(sessionStorage.getItem('token'));
          if(sessionStorage.getItem('token') && this.$store.state.loginForm.email) {
              this.$message.success('您已经登录');
              return;
          }
          this.$router.push('/login')
      },
      logout() {
          sessionStorage.clear('token');
          this.$router.push('/login')
      },
      //获取所有文章
      async getAllArticle() {
          const result = await this.$http.get('admin/articleList');
          console.log(result);
          this.AllArticleList = result.data;
          console.log(this.AllArticleList)
      },
      //点击文章，跳转至文章详细
     toArticleDetail(id,type) {
         console.log(id)
         this.$router.push('/article/'+id+'/'+type)
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

 .introduction {
    flex: 5;
    display: flex;
    height: 587px;
    background-color: #39736c;
    /* background-color: pink; */
}

.introduction .bloger {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
}

.introduction .bloger .blogerInfo {
    width: 100%;
    height: 200px;
    flex: 1;
    text-align: center;
    color: #fff;
}

 .introduction .bloger .blogerInfo .logopic {
    width: 30%;
    height: 30%;
    background: url(../assets/mypic.png) no-repeat;
    background-position: center center;
    background-size: 50%;
    margin: 0 auto;
    border-radius: 50%;
}

 .introduction .bloger .blogerInfo button {
    display: block;
    overflow: hidden;
    padding: 5px 10px;
    background-color: #f2653b;
    border: 1px solid transparent ;
    border-radius: 10px;
    margin: 0 auto;
    color: #fff;
}

 .introduction .bloger .blogerInfo button a:hover {
    color:#ccc;
}

 .introduction .course {
    flex:2;
    display: flex;
    /* background-color: green; */
}

/* 轮播图 */
.introduction .course .lunbotu {
    flex: 3;
    /* height: 200px; */
}

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }


 .introduction .course .lunbotu .el-carousel__item img {
    display: inline-block;
    width: 100%;
    height: 100%;
}

/* 侧边栏 */
 .introduction .course .courseaside {
    flex:1;
    display: flex;
    align-items: center;
    background-color: #f2653b;
}

 .introduction .course .courseaside .aside {
    flex:1;
    color: #fff;
    font-size: 24px;
}

 .introduction .course .courseaside .aside li {
    padding: 20px;
}

 .introduction .course .courseaside .aside li:hover {
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