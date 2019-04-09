<template>
  <div>
    <div class="Administrative" v-show="showFlag.indexOf('5-1')>-1">
      <div class="AdministrativeIcon"></div>
      <span class="Administrativenods">行政许可</span>
    </div>
    <div v-show="showFlag.indexOf('5-1')>-1">
      <el-table :data="tableData" border class="AdministrativeTable">
        <el-table-column prop="itemId" label="序号" width="69"></el-table-column>
        <el-table-column prop="number" label="许可文件编号" width="161"></el-table-column>
        <el-table-column prop="name" label="许可文件名称" width="153"></el-table-column>
        <el-table-column prop="startDate" label="有效期自" width="118"></el-table-column>
        <el-table-column prop="endDate" label="有效期至" width="120"></el-table-column>
        <el-table-column prop="department" label="许可机关" width="98"></el-table-column>
        <el-table-column label="详情" width="80">
          <template slot-scope="scope">
            <span style="color:#557bf7;cursor: pointer;" @click="detail(scope.row)">详情</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="FinanceInformation" v-show="showFlag.indexOf('5-2')>-1">
      <div class="FinanceInformationIcon"></div>
      <span class="FinanceInformationKl">融资信息</span>
    </div>
    <div v-show="showFlag.indexOf('5-2')>-1">
      <el-table :data="tableData2" border class="creditRatingTable">
        <el-table-column prop="finance_date" label="融资时间" width="140"></el-table-column>
        <el-table-column prop="financing_round" label="融资轮次" width="140"></el-table-column>
        <el-table-column label="融资金额" width="140" @>
          <template slot-scope="scope">
            <span>{{scope.row.financing_amount[0] == 0?"未披露":scope.row.financing_amount}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="names" label="投资方"></el-table-column>
      </el-table>
    </div>
    <div class="SpotCheck" v-show="showFlag.indexOf('5-3')>-1">
      <div class="SpotCheckIcon"></div>
      <span class="SpotCheckKl">抽查检查</span>
    </div>
    <div v-show="showFlag.indexOf('5-3')>-1">
      <el-table :data="tableData3" border class="creditRatingTable">
        <el-table-column type="index" label="序号" width="70"></el-table-column>
        <el-table-column prop="date" label="日期" width="96"></el-table-column>
        <el-table-column prop="type" label="类型" width="140"></el-table-column>
        <el-table-column prop="result" label="结果" width="210"></el-table-column>
        <el-table-column prop="department" label="检查实施机关" width="283"></el-table-column>
      </el-table>
    </div>
    <div class="creditRating" v-show="showFlag.indexOf('5-4')>-1">
      <div class="creditRatingIcon"></div>
      <span class="creditRatingKl">税务评级</span>
    </div>
    <div v-show="showFlag.indexOf('5-4')>-1">
      <el-table :data="tableData1" border class="creditRatingTable">
        <el-table-column type="index" label="序号" width="70"></el-table-column>
        <el-table-column prop="year" label="评价年度" width="96"></el-table-column>
        <el-table-column prop="grade" label="纳税人信用级别" width="140"></el-table-column>
        <el-table-column prop="name" label="纳税人名称" width="210"></el-table-column>
        <el-table-column prop="credit_no" label="纳税人识别号" width="283"></el-table-column>
      </el-table>
    </div>
    <el-dialog title="行政许可详情" :visible.sync="dialogVisible" width="40%" center>
      <table>
        <tr>
          <td class="left">许可文件标号</td>
          <td class="right">{{item.number}}</td>
          <td class="left">许可文件名称</td>
          <td class="right">{{item.name}}</td>
        </tr>
        <tr>
          <td class="left">有效期自</td>
          <td class="right">{{item.startDate}}</td>
          <td class="left">有效期至</td>
          <td class="right">{{item.endDate}}</td>
        </tr>
        <tr>
          <td class="left">许可机关</td>
          <td colspan="3" class="right">{{item.department}}</td>
        </tr>
        <tr>
          <td class="left">许可内容</td>
          <td colspan="3" class="right">{{item.content}}</td>
        </tr>
      </table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      tableData1: [],
      tableData2: [],
      tableData3: [],
      credit_no: 0,
      name: "",
      item: {},
      dialogVisible: false
    };
  },
  props: {
    showFlag: {
      default() {
        return ["5-1", "5-2", "5-3", "5-4"];
      }
    }
  },
  methods: {
    // 详情
    detail(item) {
      this.dialogVisible = true
      this.item = item;
    },
    // 获取行政许可
    init() {
      let id = sessionStorage.getItem("enterpriseId");
      this.$post("/company/invoke", {
        url: "/administrativeLicense/getAdministrativeLicenseListById",
        id: id
      })
        .then(data => {
          //   console.log(data)
          this.tableData = data.data.items;
        })
        .catch(error => {
          //   console.log(1)
        });

      this.$post("/company/invoke", {
        url: "/creditgrade/getCreditGradeById",
        id: id
      })
        .then(data => {
          //   console.log(data)
          this.tableData1 = data.data.grade_list;
          this.tableData1 = this.tableData1.map(el => {
            el.name = data.data.name;
            el.credit_no = data.data.credit_no;
            return el;
          });
          //   console.log(this.tableData1)
        })
        .catch(error => {
          console.log(error);
        });

      this.$post("/company/invoke", {
        url: "/v2/financing/getFinancingById",
        id: id
      })
        .then(data => {
          //   console.log(data);
          this.tableData2 = data.data.financing_list;
          this.tableData2 = this.tableData2.map(el => {
            let names = [];
            el.investors.map(cel => {
              names.push(cel.org_name);
            });
            el.names = names.join(",");
            return el;
          });
          //   console.log(this.tableData2)
        })
        .catch(error => {
          console.log(error);
        });

      this.$post("/company/invoke", {
        url: "/checkup/getCheckupListById",
        id: id
      })
        .then(data => {
          console.log(data);
          this.tableData3 = data.data.items;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.init();
  }
};
</script>

<style scoped>
table{
  width: 100%;
  height: 200px;
}
td{
  border: 1px solid #dedede;
}
.left{
  color: #c1c6d0;
  width: 105px;
  height: 32px;
  background: #fcfcfc;
  padding-left: 10px;
}
.right{
  padding-left: 10px;
  color: #919398;
}
.Administrative {
  margin-left: 30px;
  margin-top: 20px;
}

.AdministrativeIcon {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}

.Administrativenods {
  font-weight: bold;
  color: #838895;
}

.AdministrativeTable {
  width: 800px;

  margin-left: 30px;
  margin-top: 20px;
}

.FinanceInformation {
  margin-top: 20px;
  margin-left: 30px;
}

.FinanceInformationIcon {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}

.FinanceInformationKl {
  font-weight: bold;
  color: #838895;
}

.FinanceInformationInformation {
}

.SpotCheck {
  margin-top: 20px;
  margin-left: 30px;
}

.SpotCheckIcon {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}

.SpotCheckKl {
  font-weight: bold;
  color: #838895;
}

.SpotCheckInformation {
}

.creditRating {
  margin-top: 20px;
  margin-left: 30px;
}

.creditRatingIcon {
  display: inline-block;
  width: 5px;
  margin-right: -1px;
  height: 14px;
  background-color: #557bf7;
  transform: translateY(1px);
}

.creditRatingKl {
  font-weight: bold;
  color: #838895;
}

.creditRatingTable {
  width: 800px;
  margin-left: 30px;
  margin-top: 20px;
}
</style>
