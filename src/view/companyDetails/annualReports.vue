 <template>
  <div v-show="showFlag.toString().indexOf('4-')>-1">
    <div class="annualReports annualReportsmag">
      <span
        v-for="(item, index) in yearList"
        :class="{annualReportsmag:index!=yearList.length-1,none:index==yearList.length,active:index==yearIndex}"
        @click="yearIndex = index"
        :key="index"
      >{{item}}年度</span>
    </div>
    <div class="annualReportstitle" v-show="showFlag.indexOf('4-1')>-1">
      <div class="annualReportstitlebibl"></div>
      <span class="annualReportsspan">企业基本信息</span>
    </div>
    <table class="annualReportstable" v-show="showFlag.indexOf('4-1')>-1">
      <tr>
        <th class="annualReportstableyhs">
          注册号/统一社会
          <br>信用代码
        </th>
        <th class="annualReportstableybs">{{obj.credit_no}}</th>
        <th class="annualReportstableyht">企业名称</th>
        <th class="annualReportstableybs">{{obj.name}}</th>
      </tr>
      <tr>
        <th class="annualReportstableyht">企业联系电话</th>
        <th class="annualReportstableybs">{{obj.telephone}}</th>
        <th class="annualReportstableyht">邮政编码</th>
        <th class="annualReportstableybs">{{obj.zip_code}}</th>
      </tr>
      <tr>
        <th class="annualReportstableyht">企业通信地址</th>
        <th class="annualReportstableybs">{{obj.address}}</th>
        <th class="annualReportstableyhs">
          有限责任公司本年度
          <br>是否发生股东股权转让
        </th>
        <th class="annualReportstableybs">{{obj.if_equity}}</th>
      </tr>
      <tr>
        <th class="annualReportstableyht">电子邮箱</th>
        <th class="annualReportstableybs">{{obj.email}}</th>
        <th class="annualReportstableyht">是否有网站或网店</th>
        <th class="annualReportstableybs">{{obj.ifwebsite}}</th>
      </tr>
      <tr>
        <th class="annualReportstableyht">企业经营状态</th>
        <th class="annualReportstableybs">{{obj.status}}</th>
        <th class="annualReportstableyht">从业人数</th>
        <th class="annualReportstableybs">{{obj.collegues_num}}</th>
      </tr>
      <tr>
        <th class="annualReportstableyhs">
          企业是否有投资信息
          <br>或购买其他公司股权
        </th>
        <th class="annualReportstableybs">{{obj.if_invest}}</th>
        <th class="annualReportstableyhs"></th>
        <th class="annualReportstableybs"></th>
      </tr>
    </table>
    <div class="annualReportsInter" v-show="showFlag.indexOf('4-2')>-1">
      <div class="annualReportsIone"></div>
      <span class="annualReportsPom">网站或网店信息</span>
    </div>
    <div v-show="showFlag.indexOf('4-2')>-1">
      <el-table :data="obj.websites" border class="annualReportsIntertable">
        <el-table-column prop="web_type" label="类型" width="80"></el-table-column>
        <el-table-column prop="web_name" label="名称" width="120"></el-table-column>
        <el-table-column prop="web_url" label="网址" width="599"></el-table-column>
      </el-table>
    </div>
    <div class="iconCan" v-show="showFlag.indexOf('4-3')>-1">
      <div class="iconCanblem"></div>
      <span class="iconCanblemtitle">股东(发起人)及出姿信息</span>
    </div>
    <div v-show="showFlag.indexOf('4-3')>-1">
      <el-table :data="obj.partners" border class="annualReportsIntertable2">
        <el-table-column prop="stock_name" label="股东" width="280"></el-table-column>
        <el-table-column prop="real_capi_items[0].real_capi" label="认缴出姿额(万元)" width="160"></el-table-column>
        <el-table-column
          prop="should_capi_items[0].should_capi_date"
          label="认缴出资时间"
          width="120"
        ></el-table-column>
        <el-table-column prop="real_capi_items[0].real_capi" label="实资缴出额(万元)" width="160"></el-table-column>
        <el-table-column prop="real_capi_items[0].real_capi_date" label="实缴出资时间" width="30"></el-table-column>
        <el-table-column prop="real_capi_items[0].invest_type" label="实缴出资方式" width="49"></el-table-column>
      </el-table>
    </div>
    <div class="notling" v-show="showFlag.indexOf('4-4')>-1">
      <div class="notlingbox"></div>
      <span class="notlingboxmp">社保信息</span>
    </div>
    <div v-show="showFlag.indexOf('4-4')>-1">
      <table class="notlingtable">
        <tr>
          <th class="notlingtableths">城镇职工基本养老保险</th>
          <th class="notlingtabletbs">{{socialItem.social_security.basic_endownment_num}}</th>
          <th class="notlingtabletas">失业保险</th>
          <th class="notlingtabletds">{{socialItem.social_security.unenployment_num}}</th>
        </tr>
        <tr>
          <th class="notlingtableths">职工基本医疗保险</th>
          <th class="notlingtabletbs">{{socialItem.social_security.insurance_num}}</th>
          <th class="notlingtabletas">工伤保险</th>
          <th class="notlingtabletds">{{socialItem.social_security.injury_insurance_num}}</th>
        </tr>
        <tr>
          <th class="notlingtableths">生育保险</th>
          <th class="notlingtabletbs">{{socialItem.social_security.birth_num}}</th>
          <th class="notlingtabletas"></th>
          <th class="notlingtabletds"></th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      annualReports: [],
      obj: {},
      yearIndex: 0,
      yearList: [],
      tableDatas: [],
      socialInformation: [],
      socialItem: {social_security:{basic_endownment_num:""}},
      keyword: sessionStorage.getItem("SHANGJIAOSUOCOMPANYNAME")
    };
  },
  props:{
    showFlag:{
      default(){
        return ['4-1','4-2','4-3','4-4']
      }
    }
  },
  watch:{
    yearIndex() {
      this.obj = this.annualReports[this.yearIndex]
      this.socialItem = this.socialInformation[this.yearIndex]
    }
  },
  methods: {
    getInfo() {
      this.$post("/company/invoke", {
        url: "/reports/getReportListByName",
        keyword: this.keyword
      }).then(data => {
          console.log(data);
          this.annualReports = data.data.items
          for (var i = 0; i < data.data.items.length; i++) {
            this.yearList.push(data.data.items[i].report_year);
          }
          this.obj = data.data.items[this.yearIndex]
        })
        .catch(error => {
          console.log(error);
        });
    },
    getSocialInformation() {
      this.$post("/company/invoke", {
        url: "/reports/getSocialSecurityByName",
        keyword: this.keyword
      }).then(res => {
        console.log(res)
        this.socialInformation = res.data.items
        this.socialItem = res.data.items[this.yearIndex]
      })
    }
  },
  created() {
    this.getInfo();
    this.getSocialInformation()
  }
};
</script>

<style scoped>
.active{
  color: #557bf7 !important;
}
.annualReports span{
  cursor: pointer;
  color: #969ebb;
  padding: 0 20px;
  font-weight: bold;
}
.annualReports {
  margin-left: 30px;
  margin-top: 20px;
  color: #969ebb;
}
.none{
  border-right: none;
}
.annualReportsmag{
  border-right: 1px solid #969ebb;
}
.annualReportsp {
}
.annualReportstable {
  border: 1px solid #f8f8fc;

  margin-left: 30px;
  margin-top: 15px;
}
.annualReportstableyhs {
  background: #fcfcff;
  width: 170px;
  height: 70px;
  border: 1px solid #f4f4f9;
  color: #838895;
}
.annualReportstableyht {
  background: #fcfcff;
  width: 170px;
  height: 50px;
  border: 1px solid #f4f4f9;
  color: #838895;
}
.annualReportstableybs {
  border: 1px solid #f4f4f9;
  color: #838895;
  width: 220px;
}
.annualReportstitle {
  margin-top: 30px;
  margin-left: 30px;
}
.annualReportstitlebibl {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}
.annualReportsspan {
  font-weight: bold;
  color: #838895;
}
.annualReportsInter {
  margin-top: 40px;
  margin-left: 30px;
}
.annualReportsIone {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}
.annualReportsPom {
  font-weight: bold;
  color: #838895;
}
.annualReportsIntertable {
  margin-top: 20px;
  margin-left: 30px;
  width: 800px;
}
.iconCan {
  margin-top: 40px;
  margin-left: 30px;
}
.iconCanblem {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}
.iconCanblemtitle {
  font-weight: bold;
  color: #838895;
}
.annualReportsIntertable2 {
  width: 800px;
  margin-left: 30px;
  margin-top: 20px;
}
.notling {
  margin-top: 40px;
  margin-left: 30px;
}
.notlingbox {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}
.notlingboxmp {
  font-weight: bold;
  color: #838895;
}
.notlingtable {
  width: 800px;
  height: 157px;
  margin-left: 30px;
  margin-top: 20px;
}
.notlingtableths {
  width: 180px;
  border: 1px solid #ececf5;
  background: #fcfcff;
  color: #838895;
  font-weight: bold;
}
.notlingtabletbs {
  width: 220px;
  border: 1px solid #ececf5;
  color: #838895;
  font-weight: bold;
}
.notlingtabletas {
  width: 100px;
  border: 1px solid #ececf5;
  background: #fcfcff;
  color: #838895;
  font-weight: bold;
}
.notlingtabletds {
  width: 230px;
  border: 1px solid #ececf5;
  color: #838895;
  font-weight: bold;
}
</style>
