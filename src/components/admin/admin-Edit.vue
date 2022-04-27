<template>
  <div>
    <h3 class="el-icon-arrow-left">编辑文章</h3>
    <el-form label-width="80px" :model="articleInfo">
      <el-form-item label="文章标题">
        <el-input v-model="articleInfo.title"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="articleInfo.type" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker v-model="articleInfo.date" value-format="yyyy-MM-dd" type="date" placeholder="选择日期"> </el-date-picker>
      </el-form-item>
      <el-form-item label="图片地址">
        <el-input v-model="articleInfo.imgUrl"></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-input v-model="articleInfo.label"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <quill-editor v-model="articleInfo.content" class="ql-editor" style="height: 1000px" ref="text" :options="editorOption" />
      </el-form-item>
      <el-button v-if="flag" type="primary" class="btnAdd" @click="addArticle()">添加文章</el-button>
      <el-button v-else type="primary" class="btnAdd" @click="addArticle()">修改文章</el-button>
    </el-form>
  </div>
</template>

<script>
import { ImageDrop } from 'quill-image-drop-module'
import ImageResize from 'quill-image-resize-module'
import Quill from 'quill'
Quill.register('modules/imageDrop', ImageDrop)
Quill.register('modules/imageResize', ImageResize)

export default {
  data() {
    return {
      //判断是添加文章还是编辑文章
      flag: JSON.parse(sessionStorage.isAddArticle),
      //设置文章信息表单
      articleInfo: {
        title: '',
        type: '',
        date: '',
        imgUrl: '',
        label: [],
        //富文本编辑器的内容
        content: '',
      },
      //富文本编辑器配置
      editorOption: {
        placeholder: 'Hello World',
        modules: {
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike'],
              [{ color: [] }, { background: [] }],
              ['link', 'image'],
              ['blockquote', 'code-block'],
              [{ align: [] }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ script: 'sub' }, { script: 'super' }],
              [{ header: 1 }, { header: 2 }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ size: ['small', false, 'large', 'huge'] }],
              [{ font: [] }],
              [{ indent: '-1' }, { indent: '+1' }],
            ],
          },
          imageDrop: true,
          imageResize: {
            displayStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white',
            },
            modules: ['Resize', 'DisplaySize', 'Toolbar'],
          },
        },
      },
      // 文章类型选择框
      options: [
        {
          value: 'art',
          label: 'art',
        },
        {
          value: 'note',
          label: 'note',
        },
      ],
    }
  },
  created() {
    //向服务器请求需要编辑的文章
    if (!this.flag) {
      this.getEditArticle()
      console.log('请求数据成功')
    }
  },
  mounted() {},
  methods: {
    //提交文章信息表单（添加和修改）
    async addArticle() {
      console.log(this.articleInfo)

      const res = await this.$http.post('admin/addArticle', this.articleInfo)
      if (res.status != 200) return this.$message.error(res.msg)
      this.$message.success(res.msg)
      this.$router.push('/articlelist')
    },
    //获取需要编辑的文章
    getEditArticle() {
      this.articleInfo = JSON.parse(window.sessionStorage.editRow)
      console.log(this.articleInfo)
    },
  },
  watch: {
    $route: function () {},
  },
}
</script>

<style scoped>
.btnAdd {
  margin-top: 20px;
}
</style>
