<template>
  <div>
    <essential :showFlag="{a:false}"></essential>
    <p class="default">页面暂无展示内容，请进行 <span @click="pageBox=true">[配置]</span> </p>
    <el-dialog
      title="自定义"
      :visible.sync="pageBox"
      width="30%"
      :lock-scroll="true">
      <div class="box">
        <table class="table">
          <tr>
            <td class="k" rowspan="5">基本信息</td>
            <td class="v">
              <span>工商信息</span>
              <el-checkbox class="checkbox" v-model="business"></el-checkbox>
            </td>
            <td class="k" rowspan="2">知识产权</td>
            <td class="v">
              <span>专利信息</span>
              <el-checkbox class="checkbox" v-model="patent"></el-checkbox>
            </td>
            <td class="v">
              <span>软件著作权</span>
              <el-checkbox class="checkbox" v-model="copyright"></el-checkbox>
            </td>
          </tr>
          <tr>
            <td class="v">
              <span>发起人/股东信息</span>
              <el-checkbox class="checkbox" v-model="initiator"></el-checkbox>
            </td>
          </tr>
          <tr>
             <td class="v">
              <span>主要人员</span>
              <el-checkbox class="checkbox" v-model="keyPeople"></el-checkbox>
            </td>
            <td class="k">企业年报</td>
            <td class="v">
              <span>企业年报</span>
              <el-checkbox class="checkbox" v-model="reports"></el-checkbox>
            </td>
          </tr>
          <tr>
            <td class="v">
              <span>工商变更</span>
              <el-checkbox class="checkbox" v-model="businessChanges"></el-checkbox>
            </td>
            <td class="k">经营信息</td>
            <td class="v">
              <span>经营信息</span>
              <el-checkbox class="checkbox" v-model="management"></el-checkbox>
            </td>
          </tr>
          <tr>
            <td class="v">
              <span>分支机构</span>
              <el-checkbox class="checkbox" v-model="branch"></el-checkbox>
            </td>
            <td class="k">财务信息</td>
            <td class="v">
              <span>财务信息</span>
              <el-checkbox class="checkbox" v-model="financial"></el-checkbox>
            </td>
          </tr>
          <tr>
            <td class="k" rowspan="2">风险信息</td>
            <td class="v">
              <span>裁判文书</span>
              <el-checkbox class="checkbox" v-model="judgement"></el-checkbox>
            </td>
            <td class="k">舆情信息</td>
            <td class="v">
              <span>舆情信息</span>
              <el-checkbox class="checkbox" v-model="publicOpinion"></el-checkbox>
            </td>
          </tr>
          <tr>
            <td class="v">
              <span>法院公告</span>
              <el-checkbox class="checkbox" v-model="courtAnnouncement"></el-checkbox>
            </td>
            <td class="k"></td>
            <td class="v"></td>
          </tr>
        </table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="pageBox = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="pageBox = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import essential from './essential.vue'
export default {
    components:{
      essential
    },
  data(){
    return {
      pageBox: false,
      // 工商信息
      business: false,
      // 专利信息
      patent: false,
      // 发起人
      initiator: false,
      // 软件著作权
      copyright: false,
      // 主要人员
      keyPeople: false,
      // 企业年报
      reports: false,
      // 工商变更
      businessChanges: false,
      // 管理信息
      management: false,
      // 分支机构
      branch: false,
      // 财务信息
      financial: false,
      // 裁判文书
      judgement: false,
      // 舆情信息
      publicOpinion: false,
      // 法院公告
      courtAnnouncement: false,

    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
.k{
  background: #fdfcff;
  font-size: 16px;
  color: #858995;
  font-weight: bold;
  width: 104px;
  text-align: center;
  vertical-align: top;
  padding-top: 24px;
}
.v{
  background: white;
  font-size: 12px;
  color: #858995;
  height: 100%;
  width: 178px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span{
    margin-left: 20px;
  }
  .checkbox{
    margin-right: 20px;
  }
}
.box{
  height: 500px;
  .table{
    width: 100%;
    height: 100%;
    tr{
      border: 1px solid #edecf1;
      border-right: none;
      height: 60px;
    }
    td{
      // border-left: 1px solid #edecf1;
      border-right: 1px solid #edecf1;
    }
  }
}
.default{
  margin-top: 300px;
  text-align: center;
  font-size: 18px;
  color: #838895;
  span{
    cursor: pointer;
  }
}
.dialog-footer{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
