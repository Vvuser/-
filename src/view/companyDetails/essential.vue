<template>
  <div>
    <div class="basicInformation">
      <div class="basicInformationIcon"></div>
      <span class="basicInformationIndustrial">工商信息</span>
    </div>
    <div>
      <table class="basicInformationTable">
        <tr>
          <th class="basicInformationTableth0">统一社会信用代码</th>
          <th class="basicInformationTableth1"></th>
          <th class="basicInformationTableth2">组织机构代码</th>
          <th class="basicInformationTableth3"></th>
        </tr>
        <tr>
          <th class="basicInformationTableth0">组册号</th>
          <th class="basicInformationTableth1"></th>
          <th class="basicInformationTableth2">经营状态</th>
          <th class="basicInformationTableth3"></th>
        </tr>
        <tr>
          <th class="basicInformationTableth0">所属行业</th>
          <th class="basicInformationTableth1"></th>
          <th class="basicInformationTableth2">成立日期</th>
          <th class="basicInformationTableth3"></th>
        </tr>
        <tr>
          <th class="basicInformationTableth0">公司类型</th>
          <th class="basicInformationTableth1"></th>
          <th class="basicInformationTableth2">营业期限</th>
          <th class="basicInformationTableth3"></th>
        </tr>
        <tr>
          <th class="basicInformationTableth0">法定代表人</th>
          <th class="basicInformationTableth1"></th>
          <th class="basicInformationTableth2">发照日期</th>
          <th class="basicInformationTableth3"></th>
        </tr>
        <tr>
          <th class="basicInformationTableth0">注册资本</th>
          <th class="basicInformationTableth1"></th>
          <th class="basicInformationTableth2">登记机关</th>
          <th class="basicInformationTableth3"></th>
        </tr>
        <tr>
          <th class="basicInformationTableth0">经营范围</th>
          <th class="basicInformationTableth1"></th>
          <th class="basicInformationTableth2">企业地址</th>
          <th class="basicInformationTableth3"></th>
        </tr>
      </table>
    </div>
    <div class="originator">
      <div class="originatorIcon"></div>
      <span class="originatorShareholders">发起人/股东信息</span>
    </div>
    <div>
      <el-table :data="tableData" border class="originatorTable">
        <el-table-column prop="originatorTabledate" label="发起人/股东类型" width="150"></el-table-column>
        <el-table-column prop="originatorTablename" label="发起人/股东" width="215"></el-table-column>
        <el-table-column prop="originatorTableaddress" label="认缴出资(金额/时间)" width="217"></el-table-column>
        <el-table-column prop="originatorTablemoney" label="实缴出资(金额/时间)" width="217"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
      </div>
    </div>
    <div class="mainStaff">
      <div class="mainStaffIcon"></div>
      <span class="mainStaffShareholders">主要人员</span>
    </div>
    <div>
      <table class="mainStaffTbale">
        <tr>
          <th class="mainStaffTbaleths0">董事</th>
          <th class="mainStaffTbaleths1"></th>
          <th class="mainStaffTbaleths0">董事</th>
          <th class="mainStaffTbaleths0"></th>
        </tr>
        <tr>
          <th class="mainStaffTbaleths0">监事</th>
          <th class="mainStaffTbaleths0"></th>
          <th class="mainStaffTbaleths0">监事</th>
          <th class="mainStaffTbaleths0"></th>
        </tr>
        <tr>
          <th class="mainStaffTbaleths0">监事</th>
          <th class="mainStaffTbaleths0"></th>
          <th class="mainStaffTbaleths0">总经理</th>
          <th class="mainStaffTbaleths0"></th>
        </tr>
        <tr>
          <th class="mainStaffTbaleths0">董事</th>
          <th class="mainStaffTbaleths0"></th>
          <th class="mainStaffTbaleths0">董事</th>
          <th class="mainStaffTbaleths0"></th>
        </tr>
        <tr>
          <th class="mainStaffTbaleths0">董事</th>
          <th class="mainStaffTbaleths0"></th>
          <th class="mainStaffTbaleths0">副董事长</th>
          <th class="mainStaffTbaleths0"></th>
        </tr>
      </table>
      <div class="block">
        <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
      </div>
    </div>
    <div class="commercialChange">
      <div class="commercialChangeIcon"></div>
      <span class="commercialChangeShareholders">工商变更</span>
    </div>
    <div>
      <el-table :data="tableData" border class="commercialChangeTable">
        <el-table-column prop="originatorTabledate" label="序号" width="70"></el-table-column>
        <el-table-column prop="originatorTablename" label="变更日期" width="115"></el-table-column>
        <el-table-column prop="originatorTableaddress" label="变更事项" width="95"></el-table-column>
        <el-table-column prop="originatorTablemoney" label="变更前" width="260"></el-table-column>
        <el-table-column prop="originatorTablemoney" label="变更后" width="259"></el-table-column>
      </el-table>
      <div class="commercialChangeFy">
        <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
      </div>
    </div>
    <div class="BranchingStructure">
      <div class="BranchingStructureIcon"></div>
      <span class="BranchingStructure">分支机构</span>
    </div>
    <div>
      <el-table :data="tableData" border class="BranchingStructureTable">
        <el-table-column prop="originatorTabledate" label="公司名称" width="400"></el-table-column>
        <el-table-column prop="originatorTablename" label="负责" width="380"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
	data(){
		return{
			tableData:[]
		}
	}
}
</script>

<style scoped>
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
  width: 800px;
  height: 488px;
  border: 1px solid rebeccapurple;
  margin-left: 30px;
  margin-top: 20px;
}
.basicInformationTableth0 {
  width: 150px;
  border: 1px solid #ececf5;
  color: #838895;
}
.basicInformationTableth1 {
  width: 300px;
  color: #838895;
  border: 1px solid #ececf5;
}
.basicInformationTableth2 {
  width: 120px;
  color: #838895;
  border: 1px solid #ececf5;
}
.basicInformationTableth3 {
  width: 224px;
  color: #838895;
  border: 1px solid #ececf5;
}
.originator {
  margin-left: 30px;
  margin-top: 20px;
}
.originatorIcon {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}
.originatorShareholders {
  font-weight: bold;
  color: #838895;
}
.originatorTable {
  width: 800px;
  margin-left: 30px;
  margin-top: 20px;
}
.block {
  margin-top: 20px;
  margin-left: 585px;
}
.mainStaff {
  margin-left: 30px;
  margin-top: 15px;
}
.mainStaffIcon {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}
.mainStaffShareholders {
  font-weight: bold;
  color: #838895;
}
.mainStaffTbale {
  margin-left: 30px;
  margin-top: 20px;
  width: 800px;
  height: 265px;
}
.mainStaffTbaleths0 {
  width: 150px;
  border: 1px solid #ececf5;
  color: #838895;
}
.mainStaffTbaleths1 {
  width: 250px;
  border: 1px solid #ececf5;
  color: #838895;
}
.commercialChange {
  margin-left: 30px;
  margin-top: 15px;
}
.commercialChangeIcon {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}
.commercialChangeShareholders {
  font-weight: bold;
  color: #838895;
}
.commercialChangeTable {
  width: 800px;
  margin-top: 20px;
  margin-left: 30px;
}
.commercialChangeFy {
  margin-top: 20px;
  margin-left: 585px;
}
.BranchingStructureTable {
  width: 800px;
  margin-left: 30px;
  margin-top: 20px;
}
.BranchingStructure {
  margin-left: 30px;
  margin-top: 20px;
}
.BranchingStructureIcon {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}
</style>
