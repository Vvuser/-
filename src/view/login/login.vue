<template>
  <div class="content">
    <div class="login_cover">
      <p class="title">科创板审查综合检索系统</p>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :label-position="labelPosition" label-width="70px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="密 码" prop="password">
          <el-input v-model="ruleForm.password" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width: 280px;height: 40px;background-color: #557bf7;color:#fff">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import md5 from 'js-md5';
  export default {
    name: "",
    data(){
      return{
        labelPosition: 'left',
        ruleForm: {
          name: '',
          password: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true,message: '请输入密码',  trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      login(){
        this.$post('/api/login',{
          name: this.ruleForm.name,
          password: this.ruleForm.password
          // password: md5(this.ruleForm.password)
        }).then(data => {
          if(data.status == 200){
            sessionStorage.setItem("SHANGJIAOSUOUSER","SHANGJIAOSUOUSER")
            this.$router.replace('/home')
          } else {
            this.$message.error(data.message);
          } 
        }).catch(error => {
          this.$message.error('登陆失败');
          console.log(error);
        })
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .content{
    width: 100%;
    position: absolute;
    height: 690px;
    top: 50%;
    transform: translateY(-50%);
    background-image: url("../../assets/image/login_bg.jpg");
    background-position: center;
    background-size: contain;
    .login_cover{
      width: 700px;
      height: 450px;
      background-color: #fff;
      border-radius: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      padding-top: 60px;
      /*padding-left: 140px;*/
      text-align: center;
      box-sizing: border-box;
      .demo-ruleForm{
        width: 350px;
        margin: 0 auto;
        margin-top: 30px;
      }
      .title{
        color: #557bf7;
        font-size: 20px;
        font-weight: 600;
      }
      /*label{
        color: #838895;
        font-size: 16px;
        width: 70px;
        display: inline-block;
      }*/
    }
  }
</style>