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
  background-image: url("http://kanlian-hk.oss-cn-beijing.aliyuncs.com/company_bg.jpg");
  /*background-image: url(data:img/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QOKaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MGVkOGZiNWUtMzMxZC00NzgzLWI0OTAtZGEwZmFhY2MwY2U5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZCMDNBMERGNTM4MzExRTlCQjU3RUMzRjE0NjkxMThDIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZCMDNBMERFNTM4MzExRTlCQjU3RUMzRjE0NjkxMThDIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmM5MTNlMzM0LWUyM2EtNDU4OS1hODI5LThhNjYwMTdkNzRlNyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc1MTQyMmUyLTI0MjktNmY0OS05YmViLWMzZTg3MjE4MzkyZCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIAJYEsAMBEQACEQEDEQH/xACdAAEAAwEBAQEAAAAAAAAAAAAAAQIDBAUGCAEBAQEBAQEAAAAAAAAAAAAAAAECAwQFEAACAgIBAwMDAwIDCAICAwABAgADEQQSITETQSIFUTIUYUIjgVJxYhWRobHBcjNDJOE08NHCUyURAQABAwIEBAUEAwABBQEAAAABESECMUFRYRIicYEyA/CRobFCwdFSYuHxE3KistIjBDP/2gAMAwEAAhEDEQA/AP1TAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAE4GYHnHeOxTXu0uv+mqth2g6tzIUEe0f0no/wCfTM4z67UY6q32ejPO2QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQILoCAWALdFBPcj6S0HKPlNV3oWnlcuwzKtlY5ICnfkfSdP+OUVrajPXDnxa5ps22U/Ja62WV6tFnEOD0GQ06WisY+iaXmGfHVL2bBH5yrY2ylIDfGCwYyxzk/r+skRHptSvqoX1+j0p53QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNdv1VtUqq13ks8RNQ5BG/z4PTE6Y+3M12tVmcmaL8tb42sdNfhaxdEHMPV6DJ7GamfbitL2+qdyq/HojUi7ctd67WuTk4BYf2keqiWfdrWmMaUOnmxr1viFOvx2i2LH2Kf5c8j+7/ABUTU5+5e21NEiMeKtVfwi/jlNgthrNqn3k5x95/wGJrKfcvbhCRGKlB+DX8ca9bXMq2bWrgOSf7sZ9TjsZcv+s1rNNIkjp2dNTbD1qtNC6enbSzM5wlldjf5O36znlERN56son5w1FfCFArE2a9BD/K61SKNy5OhDdfuEtd59EzpCco1FC33XWaDIm+jpXuWsjYIXuBmJ7YiMvTsa6avUnmdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxHZs3CV0bhWde/hs80JyF+5Rn/jO3RGHqjWLMVroiqzVosrr0qede07s91WGrVwOpcg+vaXKMsomcpvjxImI0KtbeYUW7mxxeoP5kpJFThu2c9egic8bxjGvHUiJ3YrT8HqCpSyltWp7ayzF2FbZ5H9RNTl7udf7TTzSmMITa+GrCCmjl4aDfTwrz/G/fjn1bPaWcPcnWdZpruVxWG1Ui/wDr/HuTVQLaQKwgw/etT6Hr1EnRM65azx+pXhDRrPlGWyvX10pArQ672N05HHJSq9sTMRhaZmt7rWdmO4utiz/UNjy6+01dH4yg8UsHXoV9wyRmb9uZt0RSYrNeSZU3XsV7iNbZf8MLcPw/HYA1qV9v/kTMWvj3WvbRdbTZUv8AlWULsg6u/Wz2Ua4syHC9AW49xLTpiad2O80TXW0vUnmdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI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MWBY/wDUJnGk9s0jeqzxVdbS9+x8bettqgU/jO38KMpHLovZsSxMWjOKRrXc5wz2m+PtsvG1XZqW2Muquzgqz59wCMM9MiawjOIjpplGtP3SaTrZua/kU8jauwl6lkVK7B0RV6P7l6lj+sxXCadUU+LLSdmN50r7PFu6hqe6/hWw72eLqrsyen+M1j1RFcZrSPlVJpOsNqztVAW1XDb1Xey21ycsqY9q18eh6iZnpm0x05W+JWK+MO+cGyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUtvqqKh3Cs54oCQCx+gzNRjM6JMvOute+hrdnlTqml/NpkfynBxyBHWd8cYxmmN8q67MTNdUu1w13FTJpa3jq/H23wWx09rBv9nWIpW/dNZrBtwZ3rqud0LTbtuWrW+kkhcjsUlx6o6bxjrQml92163KdxhRQmVRKbbCMWA9CrzOMxPTeVndIwu2vIawr1acnrh63P0/tTEn4/lefn/k32c345bQppOuobbt53jXs4gAnPkBOc9AO06dVMpmvpi1Y+jNLeLp8+N7Ztex66NWsKyWLisk+7mrdz06Gc+ntiKXmfNqt3MtTH46pfGVfdtD22aRIA5HPPLZOMYzOs5d839Mfl9maW8eDqG3adncNVyWproB+ORxIsxkZc9Os5dEUxrFK78mq3lrXvMHopvpau65C7Y9yIVHUF5mfb1mJtCxk2o2dfYrW2mwPW+eLD1x3mMsJxmkrExLSZUgICAgICAgICAgIHPbtsDR4KjsV3Nxaysgqg/uM6RhrWaUZmXnV2flIpqur3dfZ2Cxr2Bx41r3FanuVnomOnWJxmI2482Nealbjy1KHfXs29lrH19peZZa+pCdMKPpLMWnfpx1j9T9ZU124W0KB+NbsW27Nmu2LhZxHcWHovaXKKxO8RERXSnkkKVslS0mwJV4q7dqyu0m6+ssSFZDjGOxmpiZrS9ZiLWifFIsuWseo8vyttl1QGCDxV2i49wP7wGmbRP4493jSn6L85s1GpYrOKvjlYotWur3OG8lPdsj/LiZ64nXLjNtpWnJsz7SkCzco10rsNtaVgEtrVjqpB/3kTERjtjM2/8A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);*/
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