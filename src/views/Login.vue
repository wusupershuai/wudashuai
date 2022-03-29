<template>
  <div class="login-wrapper">
    <div class="login">
      <p class="login-title">Login Form</p>
      <div class="login-content">
        <el-form class="login-form" :model="formdata" :rules="rules">
          <el-form-item prop="usa">
            <el-input v-model="formdata.usa" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input v-model="formdata.pwd" placeholder="密码" type="password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="btn" @click="submitfn">登录</el-button>
          </el-form-item>
        </el-form>
        <div class="login-text">
          <p class="info">username:admin</p>
          <p class="info">password:123456</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import instance from '@/api/index.js'
export default {
    name:'Login',
    data(){
        let usafn = function(rule,value,callback){
            let usa = /^[A-z0-9]{5,10}$/
            if(!value)return callback(new Error('请输入用户名'))
            if(!usa.test(value)) return callback(new Error('用户名格式错误请输入由5到10个字符组成的用户名'))
        }
        let pwdfn = function(rule,value,callback){
            let pwd = /^[A-z0-9]{6,10}$/
            if(!value) return callback(new Error('请输入密码'))
            if(!pwd.test(value)) return callback(new Error('密码格式错误请输入由6到10个字符组成的密码'))
        }
        return {
            formdata:{
                usa:'',
                pwd:''
            },
            rules:{
                usa:[
                    {
                        validator:usafn,
                        tirgger:'blur'
                    }
                ],
                pwd:[
                    {
                        validator:pwdfn,
                        trigger:'blur'
                    }
                ]
            },
            newdebocncefn:null
        }
    },
    methods:{
        async login(){
            let usa = this.formdata.usa;
            let pwd = this.formdata.pwd;
            let {data} = await instance.post('/login',{usa,pwd})

            if(data.message==='fail'){
                return this.$message.error('登录失败')
            }else if(data.message === 'success'){
                localStorage.setItem("token",data.data.token)
                this.$message({
                    type:'success',
                    message:'登录成功',
                    duration:2000,
                    onClose:()=>{
                        this.$router.push({name:"table"})
                    }
                })
            }
        },
        submitfn(){
          this.newdebocncefn();
        }

    },
    created(){
      this.newdebocncefn = this.debouncefn(this.login,2000)
    }
}
</script>

<style scoped>
.login-wrapper {
  width: 100vw;
  height: 100vh;
  background: #324057;
  position: relative;
}
.login {
  width: 370px;
  height: 360px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.login-title {
  width: 100%;
  height: 70px;
  font-size: 30px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.login-content {
  width: 100%;
  padding-bottom: 10px;
  border-radius: 10px;
}
.login-form {
  box-sizing: border-box;
  width: 100%;
  padding: 25px 25px 0px 25px;
}
.login-form >>> input {
  background: #283443;
  border: none;
  color: #fff;
}
.login-form .btn {
  width: 100%;
}
.login-text {
  box-sizing: border-box;
  width: 100%;
  padding: 0 25px;
  font-size: 14px;
  color: #fff;
  display: flex;
}
.login-text p {
  margin-right: 15px;
}
</style>