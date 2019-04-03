<template>
  <div>
    <div class="risk">
      <div class="titles"></div>
      <span class="weni">判决文书</span>
    </div>
    <div>
      <el-table :data="items" class="tableList" border>
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="type" label="专利类型" width="100"></el-table-column>
        <el-table-column prop="address" label="申请公众号" width="140"></el-table-column>
        <el-table-column prop="date" label="发布日期" width="120"></el-table-column>
        <el-table-column prop="title" label="摘要"></el-table-column>
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
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="name" label="软件名称" width="140"></el-table-column>
        <el-table-column prop="number" label="登记号" width="80"></el-table-column>
        <el-table-column prop="version" label="版本号" width="80"></el-table-column>
        <el-table-column prop="type_num" label="分类号" width="80"></el-table-column>
        <el-table-column prop="first_date" label="登记批准日期" width="160"></el-table-column>
        <el-table-column prop="short_name" label="软件简称" width="173"></el-table-column>
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
      <el-table :data="remarksList" class="tableList" border>
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="type" label="证书类型" width="200"></el-table-column>
        <el-table-column prop="num" label="证书编号" width="150"></el-table-column>
        <el-table-column prop="issue_date" label="发证日期" width="120"></el-table-column>
        <el-table-column prop="remarks" label="备注"></el-table-column>
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
      tableData: [],
      items:[],
      remarksList:[]
    };
  },
  methods: {
    detaList() {
      this.$post("/company/invoke", {
        url: "/copyright/getCopyrightSoftById",
        id: "534472fd-7d53-4958-8132-d6a6242423d8",
        skip:"0"
      })
        .then(data => {
          // console.log(data)
          this.tableData = data.data.items
        })
        .catch(error => {
          console.log(1);
        });
    },
    itemsList(){
      this.$post("/company/invoke", {
        url: "/lawsuit/getLawsuitListById",
        id: "534472fd-7d53-4958-8132-d6a6242423d8",
        skip:"0"
      })
        .then(data => {
          console.log(data)
          this.items = data.data.items
        })
        .catch(error => {
          console.log(1);
        });
    },
    navbisList(){
      this.$post("/company/invoke", {
        url: "/certificate/getCertificateById",
        id: "534472fd-7d53-4958-8132-d6a6242423d8",
        skip:"0"
      })
        .then(data => {
          console.log(data)
          this.remarksList = data.data.items
          
        })
        .catch(error => {
          console.log(1);
        });
    }
  },
  created(){
    this.detaList();
    this.itemsList();
    this.navbisList();
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
