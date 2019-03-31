<template>
  <div>
    <vue-header/>
    <search></search>
    <div class="company-title">
      <img src="../../assets/image/company_logo.jpg" alt="">
      <p>武汉科前生物股份有限公司</p>
      <el-tag class="company-el-tag">高薪企业</el-tag>
      <div @click="collect">
        <el-button icon="el-icon-star-off" v-if="!collectFlag" size="mini">收藏</el-button>
        <el-button type="primary" icon="el-icon-star-on" v-else size="mini">已收藏</el-button>
      </div>
    </div>
    <div class="company-cover">
      <div class="company-content-left">
        <div class="company-nav">
            <span
                    v-for="(item,index) in pathList"
                    :key="index"
                    :class="{ac:index == pathIndex}"
                    @click="to(item.path, index)"
            >{{item.text}}</span>
        </div>
        <router-view/>
      </div>
      <div class="company-content-right">
        <div class="jiben">
          <p class="title">基本信息</p>
          <p>简称：武汉科前生物股份有限公司</p>
          <p>行业：制药/生物工程</p>
          <p>地址：武汉市东湖新技术开发区高新二路419号</p>
        </div>
        <div class="xiangguan">
          <p class="title">相关新闻</p>
          <ul>
            <li>
              <a href="">周末影响市场重要资讯回顾</a>
              <span>来源：新浪财经 2019-03-24 15:12:48</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import vueHeader from '@/components/header.vue';
  import search from '@/components/search'

  export default {
    components: {
      vueHeader,
      search
    },
    data(){
      return{
        collectFlag:false,
        pathIndex:0,
        pathList: [
          {
            path: "/enterprise",
            text: "基本信息",
            active: false
          },
          {
            path: "/publicOpinion",
            text: "风险信息",
            active: false
          },
          {
            path: "/patent",
            text: "知识产权",
            active: false
          },
          {
            path: "/patent",
            text: "企业年报",
            active: false
          },
          {
            path: "/patent",
            text: "经营信息",
            active: false
          },
          {
            path: "/patent",
            text: "财务信息",
            active: false
          },
          {
            path: "/patent",
            text: "自定义页",
            active: false
          }
        ]
      }
    },
    methods: {
      collect(){
        this.collectFlag = !this.collectFlag
      },
      to(path, index){
        this.pathIndex = index
        console.log(this.flag)
        this.$router.push({
          path: `${this.flag}${path}`
        })
      },
    }
  }
</script>
<style scope type="text/scss" lang="scss">
  .company-title{
    width: 1200px;
    margin: 20px auto;
    height: 150px;
    line-height: 150px;
    background-image:url("../../assets/image/company_bg.jpg");
    background-size: contain;
    padding: 0 30px;
    box-sizing: border-box;
    &>*{
      display: inline-block;
    }
    &>p{
      color: #838895;
      font-size: 18px;
    }
    &>img{
       width: 110px;
       max-height: 110px;
       vertical-align: middle;
       margin-right: 10px;
     }
    .company-el-tag{
      height: 20px;
      line-height: 20px;
      margin-left: 20px;
    }
    &>div{
      float: right;
    }
  }
  .company-cover{
    width: 1200px;
    margin: 0 auto;
    .company-content-left {
      background-color: #fff;
      width: 860px;
      .company-nav {
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        background-color: #ececf5;
        margin-top: 20px;
        text-align: left;
        span {
          margin-left: 30px;
          display: inline-block;
          cursor: pointer;
        }
        .ac {
          color: #557bf7;
          font-weight: 600;
        }
      }
    }
    .company-content-right{
      background-color: #fff;
      width: 340px;
      margin-left: 20px;
      .jiben{
        border-bottom: 1px solid #f3f5fb;
      }
    }
  }
</style>