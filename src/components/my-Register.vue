<template>
    <div class="main">
         <div class="registerbox">
            <h1>MountainBlog</h1>
            <p>分享精彩世界</p>
             <el-button type="primary" class="othersregister">
                使用
                 <i class="wechat">&nbsp;微信</i>
                 <i class="qq">&nbsp;QQ</i>
                登录
             </el-button>
            <el-form class="registerform" :rules="registerFormRules" ref="registerFormRef" :model="registerForm" label-width="80px">
                <el-form-item prop="email">
                    <el-input type="email" v-model="registerForm.email"   placeholder="请输入手机号或邮箱"></el-input>
                </el-form-item>
                <el-form-item prop="username">
                    <el-input type="text" v-model="registerForm.username"  placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="registerForm.password"  placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item prop="checkPassword">
                    <el-input type="password" v-model="registerForm.checkPassword"  placeholder="确认密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="register" class="registerbutton">注册</el-button>
                    <div>
                        <div>注册即表示您同意并愿意遵守</div> 
                        <a href="#">用户协议</a>
                        <a href="#">隐私政策</a>
                    </div>
                </el-form-item>
            </el-form>
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

        var checkPassword1 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registerForm.checkPassword !== '') {
            this.$refs.registerFormRef.validateField('checkPass');
          }
          callback();
        }
      };
      var checkPassword2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
        return {
            registerForm: {
                email: '',
                username: '',
                password: '',
                checkPassword: '',
            },
             // 这是表单的验证规则对象
            registerFormRules: {
                // 验证邮箱格式是否正确
                email: [ {validator: checkEmail, trigger: 'blur'}, ],
                // 验证用户名是否合法
                username: [
                { required: true, message: '请输入登录名称', trigger: 'blur' },
                { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
                ],
                // 验证密码是否合法
                password: [
                { required: true, message: '请输入登录密码', trigger: 'blur' },
                { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
                {validator: checkPassword1,trigger:"blur"}
                ],
                //验证密码是否一致
                checkPassword: [ {validator: checkPassword2,trigger:"blur"}]
            },
        }      
    },
    methods: {
        register() {
             this.$refs.registerFormRef.validate(async valid => {
        if (!valid) return
        const result = await this.$http.post('admin/register', this.registerForm); 
        console.log(result)
        if(result.status !== 200) return  this.$message.error(result.message)
        this.$message.success('注册成功')
        //注册成功，跳转至登录页面
        this.$router.push('/login')
       
        // if (res.meta.status !== 200) return this.$message.error('登录失败！')
        // this.$message.success('登录成功')
        // // 1. 将登录成功之后的 token，保存到客户端的 sessionStorage 中
        // //   1.1 项目中出了登录之外的其他API接口，必须在登录之后才能访问
        // //   1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
        // window.sessionStorage.setItem('token', res.data.token)
        // // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
        // this.$router.push('/home')
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

.registerbox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 350px;
    height: 550px;
    background-color: #fcffff;
    border: 1px solid #ccc;
}

.registerbox h1 {
    font-family:  "Helvetica Neue";
    padding: 10px 0 0 0;
}

.registerbox p {
    padding: 10px 0;
}

.registerbox .othersregister i {
    font-family: 'icomoon';
    padding: 10px 9px;
   
}
.registerbox .othersregister i:hover {
    color: #636b6f;
}

.registerbox .registerform div {
    text-align: center;
}

.registerbox .registerform div a {
    color: #0095f6;
    padding: 0 30px;
}

</style>

<style>
/*必须在这里 修改elementui表单样式 */
.registerbox .registerform {
    margin-top: 20px;
}
.registerbox .registerform .el-form-item .el-form-item__content {
    margin: 0 50px!important;
}
.registerbox .registerform .el-form-item .el-input__inner {
    display: block;
}

.registerbox .registerform .registerbutton {
    display: block;
    text-align: center;
    margin-bottom: 10px;
    width: 100%;
}

</style>