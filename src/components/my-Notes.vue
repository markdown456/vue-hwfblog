<template>
    <div>
        <!-- 主体内容 -->
      <div class="content">
         <div class="notesbox">
                <ul>
                    <li @click="toNoteDetail(item._id)" v-for="(item,index) in AllNoteList" :key="index">{{item.title}}</li>
                </ul> 
         </div>
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
            AllNoteList: [],
           
        }
    },
    created() {
        this.getAllNotes()
    },
    methods: {
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
        toLogin() {
          console.log(sessionStorage.getItem('token'));
          if(sessionStorage.getItem('token')) {
              this.$message.success('您已经登录');
              return;
          }
          this.$router.push('/login')
      },
       //获取所有文章
      async getAllNotes() {
          const result = await this.$http.get('admin/articleList');
          //将文章过滤掉，只留下笔记
          let res = result.filter((item,index) =>{
              return item.type == 'note'
          })
          console.log(res);
          this.AllNoteList = res;
          console.log(this.AllNoteList)
      },
      //点击笔记，跳转至笔记详情页
      toNoteDetail(id) {
           this.$router.push('/article/'+id)
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
    display: flex;
    justify-content: center;
    align-items: center;
}

.content .notesbox {
    width: 40%;
    margin-top: 30px;
    background-color: #fcffff;
    border-radius: 10px;
    box-shadow: 2px 2px 10px #ccc;
}

.content .notesbox ul li {
    padding: 20px;
    color: #000;
}

.content .notesbox ul li:hover {
    color: #fff;
    padding: 20px;
    background-color: #39736c;
    cursor: pointer;
    border-radius: 5px;
}

</style>