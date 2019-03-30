<template>
  <div class="content">
    <div class="login_cover">
      <p class="title">科创板审查综合检索系统</p>
      <div>
        <label>用户名：</label>
        <el-input v-model="input" placeholder="用户名" style="width: 280px;height: 40px"></el-input>
      </div>
      <div>
        <label>密&nbsp;&nbsp;&nbsp;码：</label>
        <el-input placeholder="请输入密码" v-model="input11" show-password  style="width: 280px;height: 40px"></el-input>
      </div>
      <div>
        <label></label>
        <el-button style="width: 280px;height: 40px;background-color: #557bf7;color:#fff">默认按钮</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data(){
      return{
        input11: '',
        input: ''
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
      &>div{
        margin-top: 30px;
      }
      .title{
        color: #557bf7;
        font-size: 20px;
        font-weight: 600;
      }
      label{
        color: #838895;
        font-size: 16px;
        width: 70px;
        display: inline-block;
      }
    }
  }
</style>