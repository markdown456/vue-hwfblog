<template>
    <div class="main">
         <div class="loginbox">
            <h1>MountainBlog</h1>
            <el-form class="loginform" :rules="loginFormRules" ref="loginFormRef" :model="loginForm" label-width="80px">
                <el-form-item prop="email">
                    <el-input type="email" v-model="loginForm.email"   placeholder="请输入手机号/邮箱/用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password"  placeholder="密码"></el-input>
                </el-form-item>
               
                <el-form-item>
                    <el-button type="primary" @click="login()" class="loginbutton">登录</el-button>
                </el-form-item>
            </el-form>
            <el-button type="primary" class="otherslogin">
               使用
                <i class="wechat">&nbsp;微信</i>
                <i class="qq">&nbsp;QQ</i>
               登录
            </el-button>
            <div><a href="#" class="forgetpwd">忘记密码？</a></div>
            <div>没有账户？
                <router-link to="/register" class="toregister">注册</router-link>
                </div>
        </div>
    </div>
   
</template>

<script>
export default {
    data() {
         var checkEmail = (rule, value, callback) => {
             const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
             if (!value) {
                 return callback(new Error('邮箱不能为空'))
             }
             setTimeout(() => {
                 if (mailReg.test(value.trim())) {
                 callback()
             } else {
                 callback(new Error('请输入正确的邮箱格式'))
             }
         }, 100)
        }

        return {
            loginForm: {
                email: '',
                password: '',
            },
            loginFormRules: {
                 email: [
                     { validator: checkEmail, trigger: 'blur' }
                 ],
                 password: [
                     { required: true, message: '请输入登录密码', trigger: 'blur' },
                     { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
                 ],
            }
        }      
    },
    methods: {
       //客户端处理登录,表单对象的validate方法，请求服务器验证登录
       login() {
           this.$refs.loginFormRef.validate(async valid => {
               if(!valid) return;
            // 1 向服务器请求数据，验证用户输入的信息是否正确
            const result = await this.$http.post('admin/login',this.loginForm);
            console.log(result);
           if(result.status !==200) return this.$message.error(result.data.msg)
            this.$message.success(result.data.msg)
            //登录验证成功后，跳转至首页
            this.$router.push('/notes')
           })
       } 
    }
}
</script>

<style scoped>

.main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}

.loginbox {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 350px;
    height: 550px;
    background-color: #fcffff;
    border: 1px solid #ccc;
}

.loginbox h1 {
    font-family:  "Helvetica Neue";
    padding: 20px 0;
}



.loginbox .otherslogin i {
    font-family: 'icomoon';
    padding: 10px 4px;
   
}
.loginbox .otherslogin i:hover {
    color: #636b6f;
}

.loginbox div .forgetpwd  {
    display: block;
    margin: 30px;
    color: #000;
}

.loginbox div .forgetpwd:hover {
    color: #ccc;
}

.loginbox div .toregister {
    color: #0095f6;
}

.loginbox .loginform div {
    text-align: center;
}

.loginbox .loginform div a {
    color: #0095f6;
    padding: 0 20px;
}

</style>

<style>
/*必须在这里 修改elementui表单样式 */
.loginbox .loginform {
    margin-top: 20px;
}
.loginbox .loginform .el-form-item .el-form-item__content {
    margin: 0 50px!important;
}
.loginbox .loginform .el-form-item .el-input__inner {
    display: block;
}

.loginbox .loginform .loginbutton {
    display: block;
    text-align: center;
    margin-bottom: 10px;
    width: 100%;
}

</style>