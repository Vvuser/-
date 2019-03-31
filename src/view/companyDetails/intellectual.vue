<template>
  <div>
    <div class="risk">
      <div class="titles"></div>
      <span class="weni">判决文书</span>
    </div>
    <div>
      <el-table :data="tableData" class="tableList" border>
        <el-table-column prop="date" label="序号" width="60"></el-table-column>
        <el-table-column prop="name" label="专利类型" width="100"></el-table-column>
        <el-table-column prop="address" label="申请公众号" width="140"></el-table-column>
        <el-table-column prop="goods" label="发布日期" width="120"></el-table-column>
        <el-table-column prop="canvrs" label="摘要"></el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="50">111111111111111111</el-pagination>
    </div>
      <div class="riska">
      <div class="titles"></div>
      <span class="weni">软件著作权</span>
    </div>
    <div>
      <el-table :data="tableData" class="tableList" border>
        <el-table-column prop="date" label="序号" width="60"></el-table-column>
        <el-table-column prop="name" label="软件名称" width="140"></el-table-column>
        <el-table-column prop="address" label="登记号" width="80"></el-table-column>
        <el-table-column prop="goods" label="版本号" width="80"></el-table-column>
        <el-table-column prop="canvrs" label="分类号" width="80"></el-table-column>
        <el-table-column prop="canvrs" label="登记批准日期" width="160"></el-table-column>
        <el-table-column prop="canvrs" label="软件简称" width="173"></el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="50">111111111111111111</el-pagination>
    </div>
      <div class="risks">
      <div class="titles"></div>
      <span class="weni">资质认证</span>
    </div>
    <div>
      <el-table :data="tableData" class="tableList" border>
        <el-table-column prop="date" label="序号" width="60"></el-table-column>
        <el-table-column prop="name" label="证书类型" width="200"></el-table-column>
        <el-table-column prop="address" label="证书编号" width="150"></el-table-column>
        <el-table-column prop="goods" label="发证日期" width="120"></el-table-column>
        <el-table-column prop="canvrs" label="备注"></el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="50">111111111111111111</el-pagination>
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
        },
        {
          date: "1",
          name: "王小虎",
          address:"上海",
          goods:"1"
        },
        {
          date: "1",
          name: "王小虎",
          address:"上海",
          goods:"1"
        },
        {
          date: "1",
          name: "王小虎",
          address:"上海",
          goods:"1"
        },
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

<style scoped>
.risk {
  margin-left: 26px;
  margin-top: 15px;
}
.riska{
  margin-left: 26px;
  margin-top: -30px;
}
.risks{
  margin-left: 26px;
  margin-top: -30px;
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
.block {
  width: 100px;
  height: 100px;
  margin-left: 60%;
  margin-top: 16px;
}
</style>
