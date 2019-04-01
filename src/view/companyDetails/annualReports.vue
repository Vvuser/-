 <template>
  <div>
    <div class="annualReports">
      <span>2017年度</span>
      <span class="annualReportsmag">|</span>
      <span class="annualReportsmag">2016年度</span>
      <span class="annualReportsmag">|</span>
      <span class="annualReportsmag">2015年度</span>
      <span class="annualReportsmag">|</span>
      <span class="annualReportsmag">2015年度</span>
    </div>
    <div class="annualReportstitle">
      <div class="annualReportstitlebibl"></div>
      <span class="annualReportsspan">企业基本信息</span>
    </div>
    <table class="annualReportstable">
      <tr>
        <th class="annualReportstableyhs">
          注册号/统一社会
          <br>信用代码
        </th>
        <th class="annualReportstableybs">1</th>
        <th class="annualReportstableyht">企业名称</th>
        <th class="annualReportstableybs">1</th>
      </tr>
      <tr>
        <th class="annualReportstableyht">企业联系电话</th>
        <th class="annualReportstableybs">1</th>
        <th class="annualReportstableyht">邮政编码</th>
        <th class="annualReportstableybs">1</th>
      </tr>
      <tr>
        <th class="annualReportstableyht">企业通信地址</th>
        <th class="annualReportstableybs">1</th>
        <th class="annualReportstableyhs">
          有限责任公司本年度
          <br>是否发生股东股权转让
        </th>
        <th class="annualReportstableybs">1</th>
      </tr>
      <tr>
        <th class="annualReportstableyht">电子邮箱</th>
        <th class="annualReportstableybs">1</th>
        <th class="annualReportstableyht">是否有网站或网店</th>
        <th class="annualReportstableybs">1</th>
      </tr>
      <tr>
        <th class="annualReportstableyht">企业经营状态</th>
        <th class="annualReportstableybs">1</th>
        <th class="annualReportstableyht">从业人数</th>
        <th class="annualReportstableybs">1</th>
      </tr>
      <tr>
        <th class="annualReportstableyhs">
          企业是否有投资信息
          <br>或购买其他公司股权
        </th>
        <th class="annualReportstableybs">1</th>
        <th class="annualReportstableyhs"></th>
        <th class="annualReportstableybs">1</th>
      </tr>
    </table>
    <div class="annualReportsInter">
      <div class="annualReportsIone"></div>
      <span class="annualReportsPom">网站或网店信息</span>
    </div>
    <div>
      <el-table :data="tableData" border class="annualReportsIntertable">
        <el-table-column prop="date" label="类型" width="80"></el-table-column>
        <el-table-column prop="name" label="名称" width="120"></el-table-column>
        <el-table-column prop="address" label="网址" width="599"></el-table-column>
      </el-table>
    </div>
    <div class="iconCan">
      <div class="iconCanblem"></div>
      <span class="iconCanblemtitle">股东(发起人)及出姿信息</span>
    </div>
    <div>
      <el-table :data="tableData" border class="annualReportsIntertable2">
        <el-table-column prop="date" label="股东" width="80"></el-table-column>
        <el-table-column prop="name" label="认缴出姿额(万元)" width="160"></el-table-column>
        <el-table-column prop="address" label="认缴出资时间" width="120"></el-table-column>
        <el-table-column prop="address" label="实缴出姿额(万元)" width="160"></el-table-column>
        <el-table-column prop="address" label="实缴出资时间" width="130"></el-table-column>
        <el-table-column prop="address" label="实缴出资方式" width="149"></el-table-column>
      </el-table>
    </div>
    <div class="notling">
      <div class="notlingbox"></div>
      <span class="notlingboxmp">社会信息</span>
    </div>
    <div>
      <table class="notlingtable">
        <tr>
          <th class="notlingtableths">城镇职工基本养老保险</th>
          <th class="notlingtabletbs"></th>
          <th class="notlingtabletas">失业保险</th>
          <th class="notlingtabletds"></th>
        </tr>
        <tr>
          <th class="notlingtableths">职工基本医疗保险</th>
          <th class="notlingtabletbs"></th>
          <th class="notlingtabletas">工伤保险</th>
          <th class="notlingtabletds"></th>
        </tr>
        <tr>
          <th class="notlingtableths">生育保险</th>
          <th class="notlingtabletbs"></th>
          <th class="notlingtabletas"></th>
          <th class="notlingtabletds"></th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "企业年报"
};
</script>

<style scoped>
.annualReports{
  margin-left: 30px;
  margin-top: 20px;
  color: #969ebb;
}
.annualReportsmag{
  margin-left: 18px;
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
.notlingtable{
  width: 800px;
  height: 157px;
  margin-left: 30px;
  margin-top: 20px;
}
.notlingtableths{
  width: 180px;
  border: 1px solid #ececf5;
  background: #fcfcff;
  color: #838895;
  font-weight: bold;
}
.notlingtabletbs{
  width: 220px;
  border: 1px solid #ececf5;
  color: #838895;
  font-weight: bold;
}
.notlingtabletas{
  width: 100px;
  border: 1px solid #ececf5;
  background: #fcfcff;
  color: #838895;
  font-weight: bold;
}
.notlingtabletds{
  width: 230px;
  border: 1px solid #ececf5;
  color: #838895;
  font-weight: bold;
}
</style>
