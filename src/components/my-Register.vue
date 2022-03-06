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
            <el-form class="registerform" :rules="rules" ref="ruleForm" :model="ruleForm" label-width="80px">
                <el-form-item>
                    <el-input type="email"   placeholder="请输入手机号或邮箱"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="text"  placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item prop="pass">
                    <el-input type="password" v-model="ruleForm.pass"  placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass"  placeholder="确认密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="registerbutton">注册</el-button>
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
        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
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