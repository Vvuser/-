<template>
  <div>

    <div class="entepriseheart" v-show="showFlag.indexOf('7-1')>-1">
      <span class="enterpriseSc"
        v-for="(item,index) in navItemList"
        :key="index"
        :class="{dd:item==activeNavItem}"
        @click="activeNavItemFun(item)">
        {{item}}</span>
    </div>
    <div class="publicOpinion" v-show="showFlag.indexOf('7-1')>-1">
      <div class="box">
        <div class="item" v-for="(item,index) in list" :key="index">
          <h3 @click="href(item.url)">{{item.titleZh}}</h3>
          <p>{{item.domain}}&nbsp;&nbsp;&nbsp;{{item.created}}</p>
          <p v-html="item.abstractZh"></p>
        </div>
      </div>
      <div class="pagination">
        <pagination :total="total" @getCurrentPage="getCurrentPage" :pageSize="pageSize"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations, mapGetters } from "vuex";
  import pagination from "@/components/pagination"
  export default {
    data() {
      return {
        searchText: "",
        page: 1,
        pageSize: 10,
        currentPage:1,
        list:[],
        total:0,
        navItemList:["相关信息","成果奖励","处罚信息","正面信息","负面信息"],
        activeNavItem: "相关信息"
      };
    },
    props:{
      showFlag:{
        default(){
          return ['7-1']
        }
      }
    },
    components:{
      pagination
    },
    methods: {
      /**
       * 外联
       */
      href(url){
        window.open(url)
      },
      getCurrentPage(page){
        // console.log(`父组件page ${page}`)
        this.currentPage = page
        this.getPOList()
      },
      /**
       * 获取信息
       */
      activeNavItemFun(item){
        this.activeNavItem = item
        this.getPOList()
      },
      getPOList() {
        let obj = {
          keyWord :  sessionStorage.getItem('SHANGJIAOSUOCOMPANYNAME'),
          pageSize: this.pageSize,
          pageNo:this.currentPage,
          ysType: 0
        };
        switch(this.activeNavItem){
          case "成果奖励":
            obj.keyWord =  `((\"${sessionStorage.getItem('SHANGJIAOSUOCOMPANYNAME')}\") AND (奖励))`
            //语句
            break;
          case "处罚信息" :
            obj.keyWord =  `((\"${sessionStorage.getItem('SHANGJIAOSUOCOMPANYNAME')}\") AND (处罚))`
            //语句
            break;
          case "正面信息":
            obj.sentimentId = 1
            //语句
            break;
          case "负面信息" :
            obj.sentimentId = -1
            //语句
            break;
          default :
        }
        console.log(obj);
        this.$post("/yess/invoke",obj).then(res => {
          console.log(res);
          this.list = res.data.resultList
          this.total = res.data.resultCount
        });
      }
    },
    created() {
      this.activeNavItem = '相关信息'
      this.getPOList();
    }
  };
</script>

<style scoped type="text/scss" lang="scss">
  .pagination{
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .dd {
    color: #557bf7;
    font-weight: 600;
  }
  .entepriseheart {
    width: 800px;
    margin: 0 auto;
    height: 60px;
    line-height: 60px;
    color: #969ebb;
    font-size: 14px;
  }
  .enterpriseSc {
    font-size: 14px;
    font-weight: 600;
    margin-left: 25px;
    cursor: pointer;
  }
  .enterpriseSc:after{
    content: "";
    display: inline-block;
    height: 14px;
    width: 1px;
    background-color: #969ebb;
    margin-left: 20px;
  }
  .enterpriseSc:last-child:after{
    display: none;
  }
  .publicOpinion {
    width: 800px;
    margin: 0 auto;
    background: #fcfcff;
    .box {
      .item {
        margin: 0 30px;
        padding: 20px 0;
        border-bottom: 1px solid #edecf1;
        color: #838895;
        h3 {
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }
        h3:hover{
          color: #5180ff;
        }
        p:nth-child(2) {
          color: #cad0dd;
          font-size: 12px;
          margin: 10px 0;
        }
        p:nth-child(3) {
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .i_footer {
          display: flex;
          justify-content: space-between;
          .bord{
            border: 1px solid #c26d10;
            color: #c26d10;
            border-radius: 4px;
            padding: 2px 10px;
            margin-left: 10px;
          }
        }
      }
    }
  }
</style>
