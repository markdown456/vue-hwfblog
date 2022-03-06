<template>
    <div class="main">
         <div class="loginbox">
            <h1>MountainBlog</h1>
            <el-form class="loginform"    label-width="80px">
                <el-form-item>
                    <el-input type="email"   placeholder="请输入手机号/邮箱/用户名"></el-input>
                </el-form-item>
                <el-form-item prop="pass">
                    <el-input type="password"  placeholder="密码"></el-input>
                </el-form-item>
               
                <el-form-item>
                    <el-button type="primary" class="loginbutton">登录</el-button>
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
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            ruleForm: {
                pass: '',
                checkPass: '',
                age: ''
            },
            rules: {
                 pass: [
                     { validator: validatePass, trigger: 'blur' }
                 ],
                 checkPass: [
                     { validator: validatePass2, trigger: 'blur' }
                 ],
            }
        }      
    },
    methods: {
        
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