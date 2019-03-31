<template>
  <div>
    <div class="risk">
      <div class="titles"></div>
      <span class="weni">判决文书</span>
    </div>
    <div>
      <el-table :data="tableData" class="tableList" border>
        <el-table-column prop="date" label="序号" width="60"></el-table-column>
        <el-table-column prop="name" label="判决时间" width="100"></el-table-column>
        <el-table-column prop="address" label="身份" width="80"></el-table-column>
        <el-table-column prop="goods" label="判决身份"></el-table-column>
      </el-table>
    </div>
     <div class="block">
        <el-pagination layout="prev, pager, next" :total="50">111111111111111111</el-pagination>
      </div>
      <div class="riskn">
      <div class="titlest"></div>
      <span class="wenik">判决文书</span>
    </div>
    <div>
      <el-table :data="tableData" class="tableList" border>
       <el-table-column prop="date" label="序号" width="60"></el-table-column>
        <el-table-column prop="name" label="判决时间" width="100"></el-table-column>
        <el-table-column prop="address" label="身份" width="80"></el-table-column>
        <el-table-column prop="goods" label="判决身份"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "1",
          name: "王小虎",
          address:"上海",
          goods:"1"
        }
      ]
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex == 0) {
        return "waring-row";
      } else {
        return "";
      }
    }
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
}
.waring-row {
  background: #fcfcff;
}
.block{
  width: 100px;
  height: 100px;
  margin-left: 60%;
  margin-top: 16px;
}
.riskn {
  margin-left: 26px;
  margin-top: -37px;
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
}
.waring-row {
  background: #fcfcff;
}
.block{
  width: 100px;
  height: 100px;
  margin-left: 60%;
  margin-top: 16px;
}
</style>
