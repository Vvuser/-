<template>
  <div>
    <div class="risk" v-show="showFlag.indexOf('2-1')>-1">
      <div class="titles"></div>
      <span class="weni">判决文书</span>
    </div>
    <div v-show="showFlag.indexOf('2-1')>-1">
      <el-table :data="tableData" class="tableList" border>
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="date" label="判决时间" width="100"></el-table-column>
        <el-table-column prop="type" label="身份" width="80"></el-table-column>
        <el-table-column prop="title" label="判决身份"></el-table-column>
      </el-table>
    </div>
    <div class="riskn" v-show="showFlag.indexOf('2-2')>-1">
      <div class="titlest"></div>
      <span class="wenik">法院公告</span>
    </div>
    <div v-show="showFlag.indexOf('2-2')>-1">
      <el-table :data="hookList" class="tableList" border>
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="date" label="发布时间" width="100"></el-table-column>
        <el-table-column prop="type" label="公告类型" width="80"></el-table-column>
        <el-table-column prop="content" label="公告内容"></el-table-column>
      </el-table>
    </div>
    <div class="BrokenPromises" v-show="showFlag.indexOf('2-3')>-1">
      <div class="BrokenPromisesst"></div>
      <span class="BrokenPromisesk">失信信息</span>
    </div>
    <div v-show="showFlag.indexOf('2-3')>-1">
      <el-table :data="BrokenPromises" class="BrokenPromisesList" border>
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="date" label="立案时间" width="100"></el-table-column>
        <el-table-column prop="case_number" label="案号" width="80"></el-table-column>
        <el-table-column prop="doc_number" label="执行依据文号"></el-table-column>
        <el-table-column prop="court" label="执行法院"></el-table-column>
        <el-table-column prop="execution_status" label="被执行人履行情况"></el-table-column>
      </el-table>
    </div>
    <div class="Business" v-show="showFlag.indexOf('2-4')>-1">
      <div class="Businessst"></div>
      <span class="Businessk">经营异常</span>
    </div>
    <div v-show="showFlag.indexOf('2-4')>-1">
      <el-table :data="Business" class="tableList" border>
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="in_date" label="列入日期" width="100"></el-table-column>
        <el-table-column prop="department" label="做出决定机关" width="80"></el-table-column>
        <el-table-column prop="in_reason" label="列入经营异常名录原因"></el-table-column>
        <el-table-column prop="out_reason" label="移出日期"></el-table-column>
        <el-table-column prop="out_reason" label="移出经营异常名录原因"></el-table-column>
      </el-table>
    </div>
    <div class="administrativePunishment" v-show="showFlag.indexOf('2-5')>-1">
      <div class="administrativePunishmentst"></div>
      <span class="administrativePunishmentk">行政处罚</span>
    </div>
    <div v-show="showFlag.indexOf('2-5')>-1">
      <el-table :data="administrativePunishment" class="tableList" border>
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="date" label="处罚日期" width="100"></el-table-column>
        <el-table-column prop="number" label="处决文书号" width="80"></el-table-column>
        <el-table-column prop="content" label="处罚内容"></el-table-column>
        <el-table-column prop="department" label="处罚机关"></el-table-column>
        <el-table-column prop="description" label="详情"></el-table-column>
      </el-table>
    </div>
    <div class="EquityPledge" v-show="showFlag.indexOf('2-6')>-1">
      <div class="EquityPledgest"></div>
      <span class="EquityPledgek">股权出质</span>
    </div>
    <div v-show="showFlag.indexOf('2-6')>-1">
      <el-table :data="EquityPledge" class="tableList" border>
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="date" label="登记日期" width="100"></el-table-column>
        <el-table-column prop="seq_no" label="登记编号" width="80"></el-table-column>
        <el-table-column prop="pledgor" label="出质人"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
      </el-table>
    </div>
    <div class="freeze" v-show="showFlag.indexOf('2-7')>-1">
      <div class="freezest"></div>
      <span class="freezek">股权冻结</span>
    </div>
    <div v-show="showFlag.indexOf('2-7')>-1">
      <el-table :data="freeze" class="tableList" border>
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="be_executed_person" label="被执行人" width="100"></el-table-column>
        <el-table-column prop="amount" label="股权数额" width="80"></el-table-column>
        <el-table-column prop="notice_no" label="执行通知书文号"></el-table-column>
        <el-table-column prop="public_date" label="起止日期"></el-table-column>
        <el-table-column prop="status" label="类型/状态"></el-table-column>
      </el-table>
    </div>
    <div class="FilInformation" v-show="showFlag.indexOf('2-8')>-1">
      <div class="FilInformationst"></div>
      <span class="FilInformationk">立案信息</span>
    </div>
    <div v-show="showFlag.indexOf('2-8')>-1">
      <el-table :data="FilInformation" class="FilInformationList" border>
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="case_no" label="案号" width="100"></el-table-column>
        <el-table-column prop="hearing_date" label="开庭时间" width="80"></el-table-column>
        <el-table-column prop="role" label="身份"></el-table-column>
        <el-table-column prop="name" label="详情"></el-table-column>
      </el-table>
    </div>
    <div class="hearingAnnouncement" v-show="showFlag.indexOf('2-9')>-1">
      <div class="hearingAnnouncementst"></div>
      <span class="hearingAnnouncementK">开庭公告</span>
    </div>
    <div v-show="showFlag.indexOf('2-9')>-1">
      <el-table :data="hearingAnnouncement" class="hearingAnnouncementList" border>
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="hearing_date" label="开庭日期" width="100"></el-table-column>
        <el-table-column prop="case_reason" label="案由" width="80"></el-table-column>
        <el-table-column prop="plaintiff" label="原告/上诉人"></el-table-column>
        <el-table-column prop="defendant" label="被告/被上诉人"></el-table-column>
        <el-table-column prop="disabled" label="详情"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      hookList: [],
      BrokenPromises: [], //失信name enterprise/getSeriousIllegalByName
      Business: [], //经营id v2/abnormal/getAbnormalListByName
      administrativePunishment: [], //行政处罚keyword v2/adminPunish/getAdminPunishByName
      EquityPledge: [], //股权出质name v2/equityPledge/getEquityQualitiesByName
      freeze: [], //冻结name v2/judicialFreeze/getJudicialFreezeByName
      FilInformation: [], //立案信息id /case/getCaseListById
      hearingAnnouncement: [] //开庭公告id courtnotice/getCourtNoticeByName
    };
  },
  props:{
    showFlag:{
      default(){
        return ['2-1','2-2','2-3','2-4','2-5','2-6','2-7','2-8','2-9']
      }
    }
  },
  methods: {
    detaList() {
      var riskId = sessionStorage.getItem("enterpriseId");
      this.$post("/company/invoke", {
        url: "/lawsuit/getLawsuitListById",
        id: "riskId"
      })
        .then(data => {
          console.log(data);
          this.tableData = data.data.items;
          this.hookList = data.data.items;
        })
        .catch(error => {
          console.log(1);
        });
    },
    getBrokenPromises() {
      var BrokenPromisesName = sessionStorage.getItem(
        "SHANGJIAOSUOCOMPANYNAME"
      );
      this.$post("/company/invoke", {
        url: "/enterprise/getSeriousIllegalByName",
        name: "BrokenPromisesName"
      })
        .then(data => {
          console.log(data);
          this.BrokenPromises = data.data.items;
        })
        .catch(error => {
          console.log(1);
        });
    },
    getBusiness() {
      var BusinessId = sessionStorage.getItem("enterpriseId");
      this.$post("/company/invoke", {
        url: "/v2/abnormal/getAbnormalListByName",
        id: "enterpriseId"
      })
        .then(data => {
          console.log(data);
          this.Business = data.data.items;
        })
        .catch(error => {
          console.log(1);
        });
    },
    getadministrativePunishment() {
      var administrativePunishmentkeyword = sessionStorage.getItem(
        "SHANGJIAOSUOCOMPANYNAME"
      );
      this.$post("/company/invoke", {
        url: "/v2/adminPunish/getAdminPunishByName",
        keyword: "administrativePunishmentkeyword"
      })
        .then(data => {
          console.log(data);
          this.administrativePunishment = data.data.items;
        })
        .catch(error => {
          console.log(1);
        });
    },
    getEquityPledge() {
      var EquityPledgeName = sessionStorage.getItem("SHANGJIAOSUOCOMPANYNAME");
      this.$post("/company/invoke", {
        url: "/v2/equityPledge/getEquityQualitiesByName",
        keyword: "EquityPledgeName"
      })
        .then(data => {
          console.log(data);
          this.EquityPledge = data.data.items;
        })
        .catch(error => {
          console.log(1);
        });
    },
    getfreeze() {
      var freezeName = sessionStorage.getItem("SHANGJIAOSUOCOMPANYNAME");
      this.$post("/company/invoke", {
        url: "/v2/judicialFreeze/getJudicialFreezeByName",
        name: "freezeName"
      })
        .then(data => {
          console.log(data);
          this.freeze = data.data.items;
        })
        .catch(error => {
          console.log(1);
        });
    },
    getFilInformation() {
      var FilInformationId = sessionStorage.getItem("enterpriseId");
      this.$post("/company/invoke", {
        url: "/case/getCaseListById",
        id: "FilInformationId"
      })
        .then(data => {
          console.log(data);
          this.FilInformation = data.data.items;
        })
        .catch(error => {
          console.log(1);
        });
    },
    gethearingAnnouncement() {
      var hearingAnnouncementId = sessionStorage.getItem("enterpriseId");
      this.$post("/company/invoke", {
        url: "/courtnotice/getCourtNoticeByName",
        id: "hearingAnnouncementId"
      })
        .then(data => {
          console.log(data);
          this.hearingAnnouncement = data.data.items;
        })
        .catch(error => {
          console.log(1);
        });
    }
  },
  created() {
    this.detaList();
    this.getBrokenPromises();
    this.getBusiness();
    this.getadministrativePunishment();
    this.getEquityPledge();
    this.getfreeze();
    this.getFilInformation();
    this.gethearingAnnouncement();
  }
};
</script>

<style>
.risk {
  margin-left: 26px;
  margin-top: 15px;
}
.titles {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}
.tableList {
  margin-left: 26px;
  margin-top: 10px;
  width: 90%;
  background: #fcfcff;
}
.rowClass {
  font-weight: bold;
  color: #838895;
}
.waring-row {
  background: #fcfcff;
}
.block {
  width: 100px;
  height: 100px;
  margin-left: 60%;
  margin-top: 16px;
}
.riskn {
  margin-left: 26px;
  margin-top: -37px;
}
.wenik{
  font-weight: bold;
  color: #838895;
}
.weni{
  font-weight: bold;
  color: #838895;
}
.titlest {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}
.tableList {
  margin-left: 26px;
  margin-top: 10px;
  width: 90%;
  background: #fcfcff;
}
.rowClass {
  font-weight: bold;
  color: #838895;
}
.waring-row {
  background: #fcfcff;
}
.block {
  width: 100px;
  height: 100px;
  margin-left: 60%;
  margin-top: 16px;
}
.BrokenPromises {
  margin-left: 26px;
  margin-top: 15px;
}
.BrokenPromisesst {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}
.BrokenPromisesk {
  font-weight: bold;
  color: #838895;
}
.BrokenPromisesList {
  margin-left: 26px;
  margin-top: 10px;
  width: 90%;
  background: #fcfcff;
}

.Business {
  margin-left: 26px;
  margin-top: 15px;
}
.Businessst {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}
.Businessk {
  font-weight: bold;
  color: #838895;
}
.BusinessList {
  margin-left: 26px;
  margin-top: 10px;
  width: 90%;
  background: #fcfcff;
}
.administrativePunishment {
  margin-left: 26px;
  margin-top: 15px;
}
.administrativePunishmentst {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}
.administrativePunishmentk {
  font-weight: bold;
  color: #838895;
}
.administrativePunishmentList {
  margin-left: 26px;
  margin-top: 10px;
  width: 90%;
  background: #fcfcff;
}
.EquityPledge {
  margin-left: 26px;
  margin-top: 15px;
}
.EquityPledgest {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}
.EquityPledgek {
  font-weight: bold;
  color: #838895;
}
.EquityPledgeList {
  margin-left: 26px;
  margin-top: 10px;
  width: 90%;
  background: #fcfcff;
}
.freeze {
  margin-left: 26px;
  margin-top: 15px;
}
.freezest {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}
.freezek {
  font-weight: bold;
  color: #838895;
}
.freezeList {
  margin-left: 26px;
  margin-top: 10px;
  width: 90%;
  background: #fcfcff;
}
.FilInformation {
  margin-left: 26px;
  margin-top: 15px;
}
.FilInformationst {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}
.FilInformationk {
  font-weight: bold;
  color: #838895;
}
.FilInformationList {
  margin-left: 26px;
  margin-top: 10px;
  width: 90%;
  background: #fcfcff;
}
.hearingAnnouncement {
  margin-left: 26px;
  margin-top: 15px;
}
.hearingAnnouncementst {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}
.hearingAnnouncementK {
  font-weight: bold;
  color: #838895;
}
.hearingAnnouncementList {
  margin-left: 26px;
  margin-top: 10px;
  width: 90%;
  background: #fcfcff;
}
</style>
