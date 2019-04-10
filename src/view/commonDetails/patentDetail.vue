<template>
    <div class="patentDetailWrapper">
        <div class="title-wrapper">
            <p class="title">{{tableData.t}}</p>
            <a :href="pdfUrl"><img src="../../assets/image/PDF.png" alt="" style="width: 30px;margin-right:20px;vertical-align: middle;"></a>
            <span style="border: 1px solid #8445f7;color: #8445f7;" v-show="tableData.p.indexOf('A')>-1 || tableData.p.indexOf('B')>-1 || tableData.p.indexOf('C')>=1">发明</span>
            <span style="margin-right: 10px;border: 1px solid #557bf7;color: #557bf7;" v-show="tableData.p.indexOf('S')>-1 || tableData.p.indexOf('D')>-1">外观</span>
            <span style="margin-right: 10px;border: 1px solid #38da95;color: #38da95;" v-show="tableData.p.indexOf('U')>-1 || tableData.p.indexOf('Y')>-1">实用新型</span>
            <div style="margin-left: 20px">
                <el-button icon="el-icon-star-off" v-if="!tableData.isKeep" size="mini" @click="addCollect()">收藏</el-button>
                <el-button type="primary" icon="el-icon-star-on" v-else size="mini" @click="cancelCollect()">已收藏</el-button>
            </div>
        </div>
        <div class="basicInformation">
            <div class="basicInformationIcon"></div>
            <span class="basicInformationIndustrial">基本信息</span>
        </div>
        <div>
            <table class="basicInformationTable">
                <tr>
                    <th class="basicInformationTableth0">申请号</th>
                    <th class="basicInformationTableth1">{{tableData.ap}}</th>
                    <th class="basicInformationTableth2">申请日</th>
                    <th class="basicInformationTableth3">{{tableData.ad}}</th>
                </tr>
                <tr>
                    <th class="basicInformationTableth0">公开/公告号</th>
                    <th class="basicInformationTableth1">{{tableData.p}}</th>
                    <th class="basicInformationTableth2">公开/公告日</th>
                    <th class="basicInformationTableth3">{{tableData.isd}}</th>
                </tr>
                <tr>
                    <th class="basicInformationTableth0">申请人</th>
                    <th class="basicInformationTableth1">{{tableData.aList.join(",")}}</th>
                    <th class="basicInformationTableth2">发明人</th>
                    <th class="basicInformationTableth3">{{tableData.iList.join(",")}}</th>
                </tr>
                <tr>
                    <th class="basicInformationTableth0">IPC</th>
                    <th class="basicInformationTableth1">{{tableData.l.key}}</th>
                    <th class="basicInformationTableth2"></th>
                    <th class="basicInformationTableth3"></th>
                </tr>
                <tr>
                    <th class="basicInformationTableth2">简介</th>
                    <th class="basicInformationTableth3" colspan="3">{{tableData.abst}}</th>
                </tr>
            </table>
        </div>
        <div class="basicInformation">
            <div class="basicInformationIcon"></div>
            <span class="basicInformationIndustrial">法律信息</span>
        </div>
        <div>
            <el-table :data="tableDataFl" class="basicInformationTable" border>
                <el-table-column type="index" label="序号" width="50"></el-table-column>
                <el-table-column prop="PD" label="出版日期" width="160"></el-table-column>
                <el-table-column prop="Type" label="法律状态" width="140"></el-table-column>
                <el-table-column prop="Content" label="详情"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        pn:'',
        tableData:{
          aList:[],
          iList:[],
          l:{
            key:''
          },
          p:[]
        },
        tableDataFl:[],
        pdfUrl:'javascript:;'
      }
    },
    methods: {
      //获取专利列表
      getAjaxData(){
        this.$post('/patent/invoke',{
          "sf": "QueryFulltext",
          "istype": "1",
          "ialist": "1",
          "sx": "cn/queryfulltext_cn",
          "iclient": "1",
          "isClick": 1,
          "foo": "SEARCH-MASTER",
          "sl": "chs",
          "itrans": "1",
          "fooShowPN": "null",
          "ispage": "100",
          "advanceSearchHistory": "false",
          "idi": "4",
          "sq": `pns/${this.$route.query.p}`,
          "ipi": this.currentPage,
          "ips": this.pageSize,
          "ishowAbst":1
        }).then(data => {
          console.log('专利详情',data);
          this.tableData = data.data.PatentList[0]
          this.pn = data.data.PatentList[0].PN
          this.searchPdf()
          this.searchfalv()
          this.addhistory()
        }).catch(error => {
          console.log(error);
        })
      },
      searchPdf() {
        this.$get('/getPdf',{
          pn: this.pn,
        }).then(data => {
            // console.log('pdf',data);
            // this.pdfUrl = data
        }).catch(error => {
          console.log(error);
        })
      },
      searchfalv() {
        this.$post('/patent/invoke',{
          ipn: this.pn,
          sf: 'QueryLegalStatus'
        }).then(data => {
            console.log('法律信息',data);
            this.tableDataFl.push(data.data.Result.LegalStatusList.LegalStatus)
        }).catch(error => {
          console.log(error);
        })
      },
      addhistory() {
        this.$post('/patentkeep/',{
          t: this.tableData.t,
          ad: this.tableData.ad,
          strkey: this.tableData.l.key,
          ap: this.tableData.ap,
          p: this.tableData.p,
          isd: this.tableData.isd,
          alist: this.tableData.aList.toString(),
          ilist: this.tableData.iList.toString(),
          isClick: 1,
          abst: this.tableData.abst
        }).then(data => {

        }).catch(error => {
          console.log(error);
        })
      },
      addCollect() {
        this.$post('/patentkeep/',{
          t: this.tableData.t,
          ad: this.tableData.ad,
          strkey: this.tableData.l.key,
          ap: this.tableData.ap,
          p: this.tableData.p,
          isd: this.tableData.isd,
          alist: this.tableData.aList.toString(),
          ilist: this.tableData.iList.toString(),
          isClick: 0,
          abst: this.tableData.abst
        }).then(data => {
          console.log(data);
          this.$message.success("收藏成功")
          this.tableData.isKeep = true
        }).catch(error => {
          console.log(error);
          this.$message.success("收藏失败")
        })
      },
      cancelCollect(){
        this.$get(`/patentkeep/delete/${this.tableData.p}`)
          .then(data => {
            console.log(data);
            this.$message.success("取消收藏成功")
            this.tableData.isKeep = false
          }).catch(error => {
          console.log(error);
          this.$message.success("取消收藏失败")

        })
      }
    },
    created(){
      this.getAjaxData()


    }
  }
</script>

<style scoped lang="scss" type="text/scss">
    .basicInformation {
        margin-left: 30px;
        margin-top: 20px;
    }
    .basicInformationIcon {
        display: inline-block;
        width: 5px;
        margin-right: -1px;
        height: 14px;
        background-color: #557bf7;
        transform: translateY(1px);
    }
    .basicInformationIndustrial {
        font-weight: bold;
        color: #838895;
    }
    .basicInformationTable {
        width: 1140px;
        /*height: 488px;*/
        /*border: 1px solid rebeccapurple;*/
        margin-left: 30px;
        margin-top: 20px;
    }
    .basicInformationTableth0 {
        width: 150px;
        border: 1px solid #ececf5;
        color: #838895;
        padding: 19px 20px;
    }
    .basicInformationTableth1 {
        width: 300px;
        color: #838895;
        border: 1px solid #ececf5;
        padding: 19px 20px;
    }
    .basicInformationTableth2 {
        width: 120px;
        color: #838895;
        border: 1px solid #ececf5;
        padding: 19px 42px;
    }
    .basicInformationTableth3 {
        width: 224px;
        color: #838895;
        border: 1px solid #ececf5;
        padding: 19px 20px;
    }
   .patentDetailWrapper{
       background-color: #fff;
       width: 1200px;
       margin: 0 auto;
       margin-top: 20px;
       padding-bottom: 60px;
       .title-wrapper *{
           display: inline-block;
       }
       .title-wrapper{
           span{
               text-align: center;
               /*width: 46px;*/
               display: inline-block;
               /*height: 20px;*/
               /*line-height: 20px;*/
               font-size: 12px;
               border-radius: 4px;
               padding: 4px 10px;
           }
       }
       .title{
           color: #838895;
           font-size: 18px;
           font-weight: bold;
           height: 40px;
           line-height: 40px;
           padding-top: 20px;
           padding-left: 30px;
           /*padding-right: 10px;*/
       }
   }
</style>
