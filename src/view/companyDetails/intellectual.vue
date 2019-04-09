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
        <el-table-column prop="type" label="证书类型" width="200"></el-table-column>
        <el-table-column prop="num" label="证书编号" width="150"></el-table-column>
        <el-table-column prop="issue_date" label="发证日期" width="120"></el-table-column>
        <el-table-column prop="remarks" label="备注">
          <template slot-scope="scope">
            <span style="display: inline-block;max-height: 42px;overflow: hidden">{{scope.row.remarks}}</span>
            <p style="color:#557bf7;cursor: pointer;" @click="detail2(scope.row)">详情</p>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="资质认证详情" :visible.sync="dialogVisible2" width="40%" center>
      <table>
        <tr>
          <td class=left>发证日期</td>
          <td class="right">{{item2.issue_date}}</td>
        </tr>
        <tr>
          <td class=left>证书类型</td>
          <td class="right">{{item2.type}}</td>
        </tr>
        <tr>
          <td class=left>截至日期</td>
          <td class="right">{{item2.validity_end}}</td>
        </tr>
        <tr>
          <td class=left>证书编号</td>
          <td class="right">{{item2.num}}</td>
        </tr>
        <tr>
          <td class=left>状态</td>
          <td class="right">{{item2.status}}</td>
        </tr>
        <tr>
          <td class=left>备注</td>
          <td class="right">{{item2.remarks}}</td>
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
      items: [],
      item2: [],
      remarksList: [],
      dialogVisible2:false
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
    detail2(item) {
      this.dialogVisible2 = true
      this.item2 = item
      /*this.$post("/company/invoke", {
        url: "/case/getCaseDetailById",
        id:item.case_id
      }).then(res => {
        console.log('立案详情',res);
        this.item2 = res.data
      });*/

    },
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
          this.tableData = data.data.items;
        })
        .catch(error => {
          console.log(1);
        });
    },
    detaList2() {
      var risksId = sessionStorage.getItem("enterpriseId");
      this.$post("/company/invoke", {
        url: "/certificate/getCertificateById",
        id: risksId
      })
        .then(data => {
          console.log("认证资质",data.data.items)
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
    this.detaList2();

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
