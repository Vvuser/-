<template>
  <div>
    <div class="basicInformation" v-show="showFlag.indexOf('1-1')>-1">
      <div class="basicInformationIcon"></div>
      <span class="basicInformationIndustrial">工商信息</span>
    </div>
    <div v-show="showFlag.indexOf('1-1')>-1">
      <table class="basicInformationTable">
        <tr>
          <th class="basicInformationTableth0">统一社会信用代码</th>
          <th class="basicInformationTableth1">{{item.credit_no}}</th>
          <th class="basicInformationTableth2">组织机构代码</th>
          <th class="basicInformationTableth3">{{item.org_no}}</th>
        </tr>
        <tr>
          <th class="basicInformationTableth0">组册号</th>
          <th class="basicInformationTableth1">{{item.reg_no}}</th>
          <th class="basicInformationTableth2">经营状态</th>
          <th class="basicInformationTableth3">{{item.status}}</th>
        </tr>
        <tr>
          <th class="basicInformationTableth0">所属行业</th>
          <th class="basicInformationTableth1">{{itemlist}}</th>
          <th class="basicInformationTableth2">成立日期</th>
          <th class="basicInformationTableth3">{{item.start_date}}</th>
        </tr>
        <tr>
          <th class="basicInformationTableth0">公司类型</th>
          <th class="basicInformationTableth1">{{item.econ_kind}}</th>
          <th class="basicInformationTableth2">营业期限</th>
          <th class="basicInformationTableth3">{{item.term_start}}-{{item.term_end}}</th>
        </tr>
        <tr>
          <th class="basicInformationTableth0">法定代表人</th>
          <th class="basicInformationTableth1">{{item.oper_name}}</th>
          <th class="basicInformationTableth2">发照日期</th>
          <th class="basicInformationTableth3">{{item.check_date}}</th>
        </tr>
        <tr>
          <th class="basicInformationTableth0">注册资本</th>
          <th class="basicInformationTableth1">{{item.regist_capi}}</th>
          <th class="basicInformationTableth2">登记机关</th>
          <th class="basicInformationTableth3">{{item.belong_org}}</th>
        </tr>

        <tr>
          <th class="basicInformationTableth4">企业地址</th>
          <th class="basicInformationTableth5" colspan="3">{{item.address}}</th>
        </tr>
        <tr>
          <th class="basicInformationTableth6">经营范围</th>
          <th class="basicInformationTableth7" colspan="3">{{item.scope}}</th>
        </tr>
      </table>
    </div>
    <div class="originator" v-show="showFlag.indexOf('1-2')>-1">
      <div class="originatorIcon"></div>
      <span class="originatorShareholders">发起人/股东信息</span>
    </div>
    <div v-show="showFlag.indexOf('1-2')>-1">
      <el-table :data="dbckop" border class="originatorTable">
        <el-table-column prop="stock_type" label="发起人/股东类型" width="150"></el-table-column>
        <el-table-column prop="name" label="发起人/股东" width="215"></el-table-column>
        <el-table-column prop="should_capi_items.shoud_capi" label="认缴出资(金额/时间)" width="217"></el-table-column>
        <el-table-column prop="real_capi_items.real_capi" label="实缴出资(金额/时间)" width="217"></el-table-column>
      </el-table>
    </div>
    <div class="mainStaff" v-show="showFlag.indexOf('1-3')>-1">
      <div class="mainStaffIcon"></div>
      <span class="mainStaffShareholders">主要人员</span>
    </div>
    <div v-show="showFlag.indexOf('1-3')>-1">
      <table class="mainStaffTbale">
        <tr v-for="(DataList,index) in conList" :key="index">
          <th class="mainStaffTbaleths0">{{DataList.job_title}}</th>
          <th class="mainStaffTbaleths1" style="font-weight: normal;">{{DataList.name}}</th>
          <th class="mainStaffTbaleths0">{{DataList.job_title}}</th>
          <th class="mainStaffTbaleths0" style="font-weight: normal;">{{DataList.name}}</th>
        </tr>
      </table>
    </div>
    <div class="commercialChange" v-show="showFlag.indexOf('1-4')>-1">
      <div class="commercialChangeIcon"></div>
      <span class="commercialChangeShareholders">工商变更</span>
    </div>
    <div v-show="showFlag.indexOf('1-4')>-1">
      <el-table :data="tableList" border class="commercialChangeTable">
        <el-table-column type="index" label="序号" width="70"></el-table-column>
        <el-table-column prop="change_date" label="变更日期" width="115"></el-table-column>
        <el-table-column prop="change_item" label="变更事项" width="95"></el-table-column>
        <el-table-column prop="before_content" label="变更前" width="260"></el-table-column>
        <el-table-column prop="after_content" label="变更后" width="259"></el-table-column>
      </el-table>
    </div>
    <div class="BranchingStructure" v-show="showFlag.indexOf('1-5')>-1">
      <div class="BranchingStructureIcon"></div>
      <span class="BranchingStructured">分支机构</span>
    </div>
    <div v-show="showFlag.indexOf('1-5')>-1">
      <table class="BranchingStructureTable">
        <tr>
          <th class="BranchingStructureTableths">公司名称</th>
          <th class="BranchingStructureTablethst">负责人</th>
        </tr>
        <tr>
          <th class="BranchingStructureTableths">{{item.name}}</th>
          <th class="BranchingStructureTablethst">{{item.oper_name}}</th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableDeta: [],
      item: {},
      itemlist: [],
      dbckop: [],
      employees: [],
      conList: [],
      tableList: []
    };
  },
  props: {
    showFlag: {
      default() {
        return ["1-1", "1-2", "1-3", "1-4", "1-5"];
      }
    }
  },
  methods: {
    detaList() {
      var basicInformationId = sessionStorage.getItem("enterpriseId");
      this.$post("/company/invoke", {
        url: "/enterprise/getDetailAndContactById",
        id: sessionStorage.getItem("enterpriseId")
      })
        .then(data => {
          this.item = data.data;
          this.itemlist = data.data.domains[0].substring(0);
          console.log(data.data.partners);
          this.dbckop = data.data.partners;
          this.conList = data.data.employees;
          this.tableList = data.data.changerecords;
          this.tableDeta = data.data;
          console.log(785144081);
          console.log(this.tableDeta);
        })
        .catch(error => {
          console.log(1);
        });
    }
  },
  created() {
    this.detaList();
    console.log(sessionStorage.getItem("enterpriseId"));
  }
};
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
  height: 377px;
  border: 1px solid rebeccapurple;
  margin-left: 30px;
  margin-top: 20px;
}

.basicInformationTableth0 {
  width: 150px;
  border: 1px solid #ececf5;
  color: #838895;
  background: #fcfcff;
  padding: 19px 19px 42px;
}

.basicInformationTableth1 {
  width: 300px;
  color: #838895;
  border: 1px solid #ececf5;
  padding: 20px 41px;
  font-weight: normal;
}

.basicInformationTableth2 {
  width: 120px;
  color: #838895;
  border: 1px solid #ececf5;
  background: #fcfcff;
  padding: 19px 19px 42px;
}

.basicInformationTableth3 {
  z-index: 1;
  width: 224px;
  color: #838895;
  border: 1px solid #ececf5;
  padding: 20px 41px;
  font-weight: normal;
}
.basicInformationTableth4 {
  width: 100px;
  color: #838895;
  border: 1px solid #ececf5;
  padding: 20px 41px;
  background: #fcfcff;
}
.basicInformationTableth5 {
  width: 700px;
  color: #838895;
  border: 1px solid #ececf5;
  padding: 20px 41px;
  font-weight: normal;
}
.basicInformationTableth6 {
  width: 100px;
  color: #838895;
  border: 1px solid #ececf5;
  padding: 20px 41px;
  background: #fcfcff;
}
.basicInformationTableth7 {
  width: 700px;
  color: #838895;
  border: 1px solid #ececf5;
  padding: 20px 41px;
  font-weight: normal;
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
  margin-bottom: 20px;
  border: 1px solid #838895;
}
.BranchingStructureTableths {
  border: 1px solid #ebeef5;
  height: 40px;
  color: #606266;
  font-size: 14px;
}
.BranchingStructureTablethst {
  border: 1px solid #ebeef5;
  height: 40px;
  color: #606266;
  font-size: 14px;
}

.BranchingStructure {
  margin-left: 30px;
  margin-top: 20px;
}
.BranchingStructured {
  font-weight: bold;
  color: #838895;
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
