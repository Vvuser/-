<template>
    <header>
        <p>科创板审查综合检索系统</p>
        <div>
            <span>当前用户：23451</span>
            <b><img src="../assets/image/close.jpg" alt=""></b>
        </div>
    </header>
</template>

<script>
  export default {
    name: "header"
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
            img{
                vertical-align: middle;
            }
        }
    }
</style>