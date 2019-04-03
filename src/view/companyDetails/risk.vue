<template>
  <div>
    <div class="risk">
      <div class="titles"></div>
      <span class="weni">判决文书</span>
    </div>
    <div>
      <el-table :data="tableData" class="tableList" border>
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="date" label="判决时间" width="100"></el-table-column>
        <el-table-column prop="type" label="身份" width="80"></el-table-column>
        <el-table-column prop="title" label="判决身份"></el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="50">111111111111111111</el-pagination>
    </div>
    <div class="riskn">
      <div class="titlest"></div>
      <span class="wenik">法院公告</span>
    </div>
    <div>
      <el-table :data="hookList" class="tableList" border>
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="date" label="发布时间" width="100"></el-table-column>
        <el-table-column prop="type" label="公告类型" width="80"></el-table-column>
        <el-table-column prop="content" label="公告内容"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      hookList:[]
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
      this.$post("/company/invoke", {
        url: "/lawsuit/getLawsuitListById",
        id: "534472fd-7d53-4958-8132-d6a6242423d8",
        skip: "0"
      })
        .then(data => {
          console.log(data)
          this.tableData = data.data.items
          
        })
        .catch(error => {
          console.log(1);
        });
    },
    itemList() {
      this.$post("/company/invoke", {
        url: "/notice/getNoticeListById",
        id: "534472fd-7d53-4958-8132-d6a6242423d8",
        skip: "0"
      })
        .then(data => {
          console.log(data)
          this.hookList = data.data.items
          
        })
        .catch(error => {
          console.log(1);
        });
    }
  },
  created(){
    this.detaList();
    this.itemList();
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
.block {
  width: 100px;
  height: 100px;
  margin-left: 60%;
  margin-top: 16px;
}
</style>
