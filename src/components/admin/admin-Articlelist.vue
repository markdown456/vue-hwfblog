<template>
  <div>
    <h3 class="el-icon-arrow-left">文章列表</h3>
    <div class="header">
      <el-button type="primary" @click="toAddArticle(allArticleList.length)">添加文章</el-button>
      <el-input placeholder="请输入文章标题" prefix-icon="el-icon-search" v-model="input2"> </el-input>
    </div>

    <div class="content">
      <el-table :data="allArticleList" style="width: 100%">
        <el-table-column prop="id" label="序号" width="50"></el-table-column>
        <el-table-column prop="title" label="文章标题" width="150"></el-table-column>
        <el-table-column prop="type" label="类型" width="50"></el-table-column>
        <el-table-column prop="date" label="日期" width="150"> 
            <template slot-scope="scope">
            {{scope.row.date}}
          </template>
        </el-table-column>
        <el-table-column prop="imgUrl" label="图片地址" width="150"> </el-table-column>
        <el-table-column prop="label" label="标签" width="150">  </el-table-column>
        
        <el-table-column prop="operate" label="操作" width="150">
         <template slot-scope="scope">
            <el-button size="small" type="primary" icon="el-icon-edit" @click="toEditArticle(scope.row)"></el-button>
            <el-button size="small" type="danger" icon="el-icon-delete" @click="deleteArticle(scope.row._id)"></el-button>
         </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input2: '',
      allArticleList: [],
    }
  },
  created() {
      this.getArticleList();
  },
  methods: {
     async getArticleList() {
          //向服务器请求所有文章列表
          console.log('dsss');
          const res = await this.$http.get('admin/allarticle')
          this.allArticleList = res
          
        //将文章列表进行排序
        this.allArticleList.forEach((item,index) => {
            item.id =index;
        });

          console.log( this.allArticleList);
      },
      toAddArticle(length) {
        //跳转至添加文章页面
        console.log('跳转');
        window.sessionStorage.setItem('activePath', '2-2');
        window.sessionStorage.setItem('isAddArticle',true);
        this.$router.push('/edit');
      },
      //编辑文章
      toEditArticle(row) {
        window.sessionStorage.setItem('editRow', JSON.stringify(row));
        window.sessionStorage.setItem('activePath', '2-2');
         window.sessionStorage.setItem('isAddArticle', false);
        this.$router.push('/edit')
      },
      //直接删除文章
     async deleteArticle(id) {
      const res = await this.$http.get('admin/deleteArticle/'+id);
      this.getArticleList()
     if(res.status !=200) return this.$message.error(res.msg);
        this.$message.success(res.msg);
      }
  },
  watch: {
    $route: function() {
      //回到该页面将侧边栏高亮跳转至相应页面
      window.sessionStorage.setItem('activePath', '2-1');
    }
  }
}
</script>


<style scoped>
.header {
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
}

.header .el-input {
  width: 30% !important;
  outline: none;
}
</style>