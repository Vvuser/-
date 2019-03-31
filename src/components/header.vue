<template>
    <header>
        <p>科创板审查综合检索系统</p>
        <div>
            <span>当前用户：23451</span>
            <b @click="logout"><img src="../assets/image/close.jpg" alt=""></b>
        </div>
    </header>
</template>

<script>
  export default {
    name: "header",
    data(){
      return{

      }
    },
    methods:{
      logout() {
        this.$confirm('确认退出当前用户？', '退出登录', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.logoutAjax()
        })
      },
      logoutAjax(){
        this.$get('/api/loginOut',{
          token:sessionStorage.getItem("SHANGJIAOSUOUSERTOKEN")
        }).then(data=>{
            console.log(data);
            if (data.status == 200) {
              sessionStorage.removeItem("SHANGJIAOSUOUSER")
              sessionStorage.removeItem("SHANGJIAOSUOUSERTOKEN")
              this.$router.replace("/login")
            }
          })
          .catch(error=>{
            this.$message.error('退出登陆失败')
            console.log(error);
          })
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
    header{
        display: flex;
        justify-content: space-between;
        width: 1140px;
        height: 60px;
        line-height: 60px;
        color: #557bf7;
        font-size: 18px;
        font-weight: 600;
        margin: 0 auto;
        span{
            font-size: 14px;
            color: #969ebb;
        }
        b{
            display: inline-block;
            width: 30px;
            height: 60px;
            line-height: 60px;
            text-align: right;
            cursor: pointer;
            img{
                vertical-align: middle;
            }
        }
    }
</style>