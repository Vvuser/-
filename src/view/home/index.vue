<template>
  <div>
    <vue-header/>
    <div class="wrapper">
      <div class="content">
        <el-input placeholder="请输入企业名、人名等关键词" v-model="input5" class="input-with-select" style="width: 1000px;">
          <el-button slot="append" icon="el-icon-search" style="width: 150px;background-color: #557bf7;height:40px;color: #fff;border-radius: 0">搜索</el-button>
        </el-input>
        <div class="search_history">
          搜索历史：
          <el-button round size="mini">圆角按钮</el-button>
          <el-button round size="mini">圆角按钮</el-button>
        </div>
        <div class="table_cover">
          <div class="table_nav"><span class="ac">企业信息</span><span>舆情信息</span><span>专利数据</span></div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import vueHeader from '@/components/header.vue';

  export default {
    name: '主页',
    components: {
      vueHeader,
    }
  }
</script>
<style scope type="text/scss" lang="scss">
  .wrapper{
    background: -webkit-linear-gradient(#eff0f9, #fff); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#eff0f9, #fff); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#eff0f9, #fff); /* Firefox 3.6 - 15 */
    background: linear-gradient(#eff0f9, #fff); /* 标准的语法 */
    width: 100%;
    .content{
      width: 1200px;
      margin: 0 auto;
      text-align: center;
      padding-top: 38px;
      color: #969ebb;
      .search_history{
        margin: 0 auto;
        width: 1000px;
        margin-top: 12px;
        padding-left: 30px;
        box-sizing: border-box;
        overflow: hidden;
        text-align: left;
        font-size: 15px;
      }
      .table_cover{
        background-color: #fff;
        .table_nav{
          width: 100%;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          background-color: #ececf5;
          margin-top: 20px;
          border-radius: 8px 8px 0 0;
          text-align: left;
          span{
            margin-left: 30px;
            display: inline-block;
          }
          .ac{
            color: #557bf7;
            font-weight: 600;
          }
        }
      }

    }
  }

</style>
