<template>
  <div>
    <div class="patent-wrapper">
      <div class="contentLeft">
        <p class="title">筛选项</p>
        <el-menu
                default-active="0"
                background-color="#fcfcff"
                text-color="#838895"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :unique-opened="true">
          <el-submenu v-for="(item,index) in selectDataList"
                      :key="index"
                      :index="`${index.toString()}`">
            <template slot="title">
              <span>{{item.name}}</span>
            </template>
            <el-menu-item v-for="(childitem,childindex) in item.list"
                          :key="childindex"
                          :index="`${index.toString()} - ${childindex.toString()}`"
                          @click="cl(index, childindex)">
              {{childitem.fullName || childitem.name}} ({{childitem.value}})</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="contentRight">
        <ul>
          <li v-for="(item,index) in listData"
              :key="index">
            <div>
              <a class="zl-title" href="javascript:;" @click="goDetail(item.p)">{{item.t}}</a>
              <span style="margin-right: 10px;border: 1px solid #38da95;color: #38da95;">公开</span>
              <span style="border: 1px solid #8445f7;color: #8445f7;">发明</span>
              <div>
                <el-button icon="el-icon-star-off" v-if="!item.isKeep" size="mini" @click="addCollect(item,index)">收藏</el-button>
                <el-button type="primary" icon="el-icon-star-on" v-else size="mini" @click="cancelCollect(item.p,index)">已收藏</el-button>
              </div>
            </div>
            <p><span>申请号：{{item.ap}}</span><span>申请日：{{item.ad}}</span></p>
            <p><span>公开/公告号：{{item.p}}</span><span>公开/公告日：{{item.isd}}</span></p>
            <p>申请人：{{item.aList.toString()}}</p>
            <p>发明人：{{item.iList.toString()}}</p>
            <p>IPC：{{item.l.key}}</p>
            <p>{{item.abst}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <pagination :total="total" @getCurrentPage="getCurrentPage" :pageSize="pageSize"></pagination>
    </div>
  </div>
</template>

<script>

  import pagination from '@/components/pagination'
  import {mapMutations, mapGetters} from 'vuex'
  export default {
    name: "",
    components: {
      pagination
    },
    data(){
      return{
        total:0,
        currentPage:1,
        pageSize:10,
        sq:`B/${this.getSeacherText}`,
        listData:[],
        selectDataList:[
          {
            name:"专利类型",
            code:"na",
            list:[]
          },
          {
            name:"国家及地区",
            code:"nd",
            list:[]
          },
          {
            name:"申请日",
            code:"apd",
            list:[]
          },
          {
            name:"公开/公告日",
            code:"isd",
            list:[]
          },
          {
            name:"法律状态",
            code:"ls",
            list:[]
          },
          {
            name:"申请人",
            code:"an",
            list:[]
          },
          {
            name:"标准化申请人",
            code:"ann",
            list:[]
          },
          {
            name:"发明人",
            code:"in",
            list:[]
          },
          {
            name:"IPC分类",
            code:"icl",
            list:[]
          },
          {
            name:"优先权国家",
            code:"pririnfo",
            list:[]
          },
          {
            name:"数据库过滤",
            code:"db",
            list:[]
          },
          {
            name:"被引用国家",
            code:"rcc",
            list:[]
          },
          {
            name:"权利要求个数",
            code:"acc",
            list:[]
          },
          {
            name:"代理机构",
            code:"lrep",
            list:[]
          },
        ]
      }
    },
    methods: {
      cl(index,childindex){
        // console.log(index,childindex);
        // AND ${nd/(CN)}
        this.sq = `B/${this.getSeacherText}AND ${this.selectDataList[index].code}/(${this.selectDataList[index].list[childindex].name})`
        console.log(this.sq);
        this.getAjaxData()
      },
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
        this.getCheckedList(key)
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      getCurrentPage(page){
        // console.log(`父组件page ${page}`)
        this.currentPage = page
        this.getAjaxData()
      },
      //详情跳转
      goDetail(p){
        this.$router.push({path:"/details/patentDetail",query:{p}})
      },
      //获取专利列表
      getAjaxData(){
        this.$post('/patent/invoke',{
          "sf": "QueryFulltext",
          "istype": "1",
          "ialist": "1",
          "sx": "cn/queryfulltext_cn",
          "iclient": "1",
          "foo": "SEARCH-MASTER",
          "sl": "chs",
          "itrans": "1",
          "fooShowPN": "null",
          "ispage": "100",
          "advanceSearchHistory": "false",
          "idi": "4",
          "sq": this.sq,
          "ipi": this.currentPage,
          "ips": this.pageSize,
          "ishowAbst":1
        }).then(data => {
          console.log(data);
          this.listData = data.data.PatentList
          this.total = data.data.Total || 0
        }).catch(error => {
          console.log(error);
        })
      },
      //获取筛选列表
      getCheckedList(index){
        this.$post('/patent/invoke',{
          dataType: "sql",
          foo: "SEARCH-MASTER",
          idi: "274766528119",
          scontent: `${this.selectDataList[index].code}%30%↵data%ct%`,
          sf: "QueryFulltextAnalysis",
          showType: "second",
          sl: "chs",
          sq: `B/${this.getSeacherText}`,
          sx: "cn/queryrelated-searchmaster_cn"
        }).then(data => {
          console.log(data);
          this.selectDataList[index].list = data.data.sResult.data
        }).catch(error => {
          console.log(error);
        })
      },
      addCollect(item,index) {
        this.$post('/patentkeep/',{
          t: item.t,
          ad: item.ad,
          strkey: item.l.key,
          ap: item.ap,
          p: item.p,
          isd: item.isd,
          alist: item.aList.toString(),
          ilist: item.iList.toString(),
          isClick: 0,
          abst: item.abst
        }).then(data => {
          console.log(data);
          this.$message.success("收藏成功")
          this.listData[index].isKeep = true
        }).catch(error => {
          console.log(error);
          this.$message.success("收藏失败")
        })
      },
      cancelCollect(p,index){
        this.$get(`/patentkeep/delete/${p}`)
          .then(data => {
            console.log(data);
            this.$message.success("取消收藏成功")
            this.listData[index].isKeep = false
        }).catch(error => {
          console.log(error);
          this.$message.success("取消收藏失败")

        })
      }
    },
    computed:{
      ...mapGetters([
        'getSeacherText'
      ])
    },
    watch: {
      getSeacherText(){
        console.log(this.getSeacherText)
        this.sq=`B/${this.getSeacherText}`,
        this.getAjaxData()
      }
    },
    created() {
      this.sq = `B/${this.getSeacherText}`
      this.getAjaxData()
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .patent-wrapper{
    background-color: #fff;
    width: 1200px;
    padding: 20px 30px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    box-sizing: border-box;
    &>div{
      background-color: #fcfcff;
      padding-top: 40px;
    }
    .contentLeft{
      width: 240px;
      color: #838895;
      .title{
        font-weight: bold;
        margin-bottom: 10px;
        margin-left: 20px;
        font-size: 15px;
      }
      .title:before{
        display: inline-block;
        content: "";
        width: 5px;
        margin-right: 5px;
        height: 14px;
        background-color: #557bf7;
        transform: translateY(1px);
      }
    }
    .contentRight{
      width: 880px;
      ul li{
        padding: 20px;
        border-bottom: 1px solid #ececf5;
        color: #838895;
        font-size: 14px;
      }
      ul li:last-child{
        border-bottom:none;
      }
      ul li:first-child{
        padding-top: 0;
      }
      ul li p{
        margin-top: 10px;
      }
      ul li>div span{
        text-align: center;
        width: 46px;
        display: inline-block;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        border-radius: 4px;
      }
      ul li>div>div{
        float: right;
      }
      ul li>div>*{
        display: inline-block;
      }
      ul li p>span{
        display: inline-block;
        width: 230px;
      }
      .zl-title{
        color: #838895;
        font-size: 16px;
        font-weight: bold;
        margin-right: 40px;
      }
    }
    .el-menu{
      border: none;
    }
    .el-submenu__title span{
      font-weight: bold !important;
    }
  }
  .footer{
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding: 30px 0;
    background-color: #fff;
  }
</style>
