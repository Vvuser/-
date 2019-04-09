<template>
  <div>
    <div class="risk" v-show="showFlag.indexOf('3-1')>-1">
      <div class="titles"></div>
      <span class="weni">专利信息</span>
    </div>
    <div v-show="showFlag.indexOf('3-1')>-1">
      <el-table :data="items" class="tableList" border>
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="type_name" label="专利类型" width="100"></el-table-column>
        <el-table-column prop="outhor_num" label="专利申请号" width="140"></el-table-column>
        <el-table-column prop="outhor_date" label="发布日期"></el-table-column>
         <el-table-column prop="patent_name" label="标题" width="340">
           <template slot-scope="scope">
             <p style="color: rgb(85, 123, 247); cursor: pointer;" @click="goDetail(scope.row.request_num)">{{ scope.row.patent_name }}</p>
           </template>
         </el-table-column>
      </el-table>
    </div>
    <div class="riska" v-show="showFlag.indexOf('3-2')>-1">
      <div class="titles"></div>
      <span class="weni">软件著作权</span>
    </div>
    <div v-show="showFlag.indexOf('3-2')>-1">
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
    <div class="risks" v-show="showFlag.indexOf('3-3')>-1">
      <div class="titles"></div>
      <span class="weni">资质认证</span>
    </div>
    <div v-show="showFlag.indexOf('3-3')>-1">
      <el-table :data="remarksList" class="tableList" border>
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="type_name" label="证书类型" width="200"></el-table-column>
        <el-table-column prop="type_num" label="证书编号" width="150"></el-table-column>
        <el-table-column prop="first_date" label="发证日期" width="120"></el-table-column>
        <el-table-column prop="company" label="备注"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      items: [],
      remarksList: []
    };
  },
  props:{
    showFlag:{
      default(){
        return ['3-1','3-2','3-3']
      }
    }
  },
  methods: {
    //详情跳转
    goDetail(p){
      this.$router.push({path:"/details/patentDetail",query:{p}})
    },
    detaList() {
      var risksId = sessionStorage.getItem("enterpriseId");
      this.$post("/company/invoke", {
        url: "/copyright/getCopyrightSoftById",
        id: risksId
      })
        .then(data => {
          console.log(data.data.items)
          this.tableData = data.data.items;
          this.remarksList = data.data.items;
        })
        .catch(error => {
          console.log(1);
        });
    },
    detaList1() {
      var risksId = sessionStorage.getItem("enterpriseId");
      this.$post("/company/invoke", {
        url: "/patent/getPatentListById",
        id: risksId
      })
        .then(data => {
          console.log("专利",data.data.items)
          this.items = data.data.items
        })
        .catch(error => {
          console.log(1);
        });
    },

  },
  created() {
    this.detaList();
    this.detaList1();
  }
};
</script>

<style scoped>
.risk {
  margin-left: 26px;
  margin-top: 15px;
}
.riska {
  margin-left: 26px;
  margin-top: 20px;
}
.risks {
  margin-left: 26px;
  margin-top: 20px;
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
