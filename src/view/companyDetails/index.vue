<template>
  <div>
    <vue-header/>
    <search></search>
    <div class="company-title">
      <img v-if="imgUrl != ''" :src="imgUrl">
      <img v-else src="../../assets/image/default.png">
      <p>{{obj.name}}</p>
      <el-tag class="company-el-tag">高薪企业</el-tag>
      <!--<div>
        <el-button @click="collect" icon="el-icon-star-off" v-if="!collectFlag" size="mini">收藏</el-button>
        <el-button @click="unCollect" type="primary" icon="el-icon-star-on" v-else size="mini">已收藏</el-button>
      </div>-->
    </div>
    <div class="company-cover">
      <div class="company-content-left">
        <div class="company-nav">
          <span
            v-for="(item,index) in pathList"
            :key="index"
            :class="{ac:item.path == nowPath}"
            @click="to(item.path, index)"
          >{{item.text}}</span>
        </div>
        <router-view/>
      </div>
      <div class="company-content-right">
        <div class="jiben">
          <p class="title">基本信息</p>
          <p>简称：{{obj.name}}</p>
          <p style="margin: 30px 0">行业：{{obj.econ_kind}}</p>
          <p>地址：{{obj.address}}</p>
        </div>
        <div class="xiangguan">
          <p class="title">相关新闻</p>
          <ul>
            <li v-for="(text,index) in newsList" :key="index">
              <a href="javascript:;" @click="href(text.url)">{{text.titleZh}}</a>
              <span>来源：{{text.mediaNameSrc}} {{text.created}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import vueHeader from "@/components/header.vue";
import search from "@/components/search";

export default {
  components: {
    vueHeader,
    search
  },
  data() {
    return {
      imgUrl: "",
      collectFlag: false,
      pathIndex: 0,
      nowPath:'',
      newsList: [{}, {}, {}],
      obj: {},
      cId: sessionStorage.getItem("enterpriseId"),
      pathList: [
        {
          path: "/companyDetails/essential",
          text: "基本信息",
          active: false
        },
        {
          path: "/companyDetails/risk",
          text: "风险信息",
          active: false
        },
        {
          path: "/companyDetails/intellectual",
          text: "知识产权",
          active: false
        },
        {
          path: "/companyDetails/annualReports",
          text: "企业年报",
          active: false
        },
        {
          path: "/companyDetails/management",
          text: "经营信息",
          active: false
        },
        {
          path: "/companyDetails/financial",
          text: "财务信息",
          active: false
        },
        {
          path: "/companyDetails/publicOpinion",
          text: "舆情信息",
          active: false
        },
        {
          path: "/companyDetails/userDefined",
          text: "自定义页",
          active: false
        }
      ]
    };
  },
  methods: {
    getNews(name) {
      let obj = {
        keyWord: name,
        pageSize: 5,
        pageNo:1,
        ysType: 0
      };
      this.$post("/yess/invoke", obj).then(res => {
        console.log(res);
        this.newsList = res.data.resultList;
      });
    },
    /**
     * 取消收藏
     */
    unCollect() {
      this.$get(`/companykeep/delete/${this.cId}`).then(res => {
        this.collectFlag = false
        this.$message.success("取消收藏成功")
      });
    },
    /**
     * 外联
     */
    href(url){
      window.open(url)
    },
    /**
     * 收藏
     */
    collect() {
      this.$post("/companykeep/", {
        companyid: this.cId,
        isClick: 0,
        companyInfo: JSON.stringify(this.obj)
      }).then(res => {
        this.collectFlag = true
        this.$message.success("收藏成功")
      });
    },
    getCimg(name) {
      let that = this;
      this.$post("/company/invoke", {
        url: "/enterprise/getEntLogoByName",
        name
      }).then(res => {
        this.$nextTick(() => {
          if ("logo" in res.data) {
            that.imgUrl = res.data.logo;
          }
        });
      });
    },
    getInfoById() {
      this.$post("/company/invoke", {
        url: "/v2/enterprise/getDetailById",
        id: this.cId
      }).then(res => {
        console.log(res);
        this.obj = res.data;
        sessionStorage.setItem("SHANGJIAOSUOCOMPANYNAME",res.data.name)
        this.getCimg(res.data.name);
        this.getNews(res.data.name)
      });
    },
    to(path, index) {
      this.pathIndex = index;
      this.$router.push(path);
      this.nowPath = this.$route.path
    }
  },
  created() {
    this.getInfoById();
    this.nowPath = this.$route.path
    console.log(this.$route.path);
  }
};
</script>
<style scope type="text/scss" lang="scss">
.company-title {
  width: 1200px;
  margin: 20px auto;
  height: 150px;
  line-height: 150px;
  background-image: url("../../assets/image/company_bg.jpg");
  background-size: contain;
  padding: 0 30px;
  box-sizing: border-box;
  & > * {
    display: inline-block;
  }
  & > p {
    color: #838895;
    font-size: 18px;
  }
  & > img {
    width: 110px;
    max-height: 110px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .company-el-tag {
    height: 20px;
    line-height: 20px;
    margin-left: 20px;
  }
  & > div {
    float: right;
  }
}
.company-cover {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .company-content-left {
    min-width: 680px;
    background-color: #fff;
    width: 860px;
    .company-nav {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      background-color: #ececf5;
      text-align: left;
      span {
        margin-left: 30px;
        display: inline-block;
        cursor: pointer;
        color: #969ebb;
      }
      .ac {
        color: #557bf7;
        font-weight: 600;
      }
    }
  }
  .company-content-right {
    background-color: #fff;
    width: 320px;
    color: #838895;
    font-size: 14px;
    a {
      color: #838895;
      display: block;
      font-size: 14px;
    }
    & > div {
      padding: 20px 30px;
      box-sizing: border-box;
    }
    & > div .title {
      font-weight: bold;
      margin-bottom: 10px;
    }
    & > div .title:before {
      display: inline-block;
      content: "";
      background-color: #557bf7;
      height: 12px;
      width: 4px;
      margin-right: 6px;
    }
  }
  .jiben {
    border-bottom: 2px solid #f3f5fb;
  }
  .xiangguan ul li span {
    display: inline-block;
    color: #cad0dd;
    font-size: 12px;
    margin: 10px 0 20px 0;
  }
  .xiangguan ul li {
    border-bottom: 1px solid #ececf5;
    margin-bottom: 10px;
  }
}
</style>