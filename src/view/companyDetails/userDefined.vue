<template>
  <div>
    <p class="default" v-if="showFlag.length==0 || showFlag==''">页面暂无展示内容，请进行 <span @click="getTree()">[配置]</span> </p>
    <p class="reset" v-else><span @click="getTree()">[重新配置]</span> </p>
    <div v-show="showFlag.length!=0">
      <essential :showFlag="showFlag"></essential>
      <risk :showFlag="showFlag"></risk>
      <intellectual :showFlag="showFlag"></intellectual>
      <annualReports :showFlag="showFlag"></annualReports>
      <management :showFlag="showFlag"></management>
      <financial :showFlag="showFlag"></financial>
      <div class="FinancialInformation" v-show="showFlag.indexOf('7-1')>-1">
        <div class="FinancialInformationIcon"></div>
        <span class="FinancialInformations">舆情信息</span>
      </div>
      <publicOpinion :showFlag="showFlag" style="margin-top: 20px"></publicOpinion>
    </div>
    <el-dialog
      title="自定义"
      :visible.sync="pageBox"
      width="30%"
      :lock-scroll="true">
      <div class="box">
        <el-tree
            :data="data2"
            show-checkbox
            node-key="id"
            ref="tree"
            :default-expanded-keys="[1,2,3,4,5,6,7]"
            >
        </el-tree>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="pageBox = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="getCheckedKeys()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

  import essential from './essential.vue'
  import risk from './risk.vue'
  import intellectual from './intellectual.vue'
  import annualReports from './annualReports.vue'
  import management from './management.vue'
  import financial from './financial.vue'
  import publicOpinion from './publicOpinion.vue'
export default {
    components:{
      essential,
      risk,
      intellectual,
      annualReports,
      management,
      financial,
      publicOpinion
    },
  data(){
    return {
      pageBox:false,
      showFlag:[],
      data2: [{
        id: 1,
        label: '基本信息',
        children: [{
          id: '1-1',
          label: '工商信息',
        },{
          id: '1-2',
          label: '发起人/股东信息',
        },{
          id: '1-3',
          label: '工商信息',
        },{
          id: '1-4',
          label: '工商变更',
        },{
          id: '1-5',
          label: '分支机构',
        }]
      }, {
        id: 2,
        label: '风险信息',
        children: [{
          id: '2-1',
          label: '判决文书',
        },{
          id: '2-2',
          label: '法院公告',
        },{
          id: '2-3',
          label: '失信信息',
        },{
          id: '2-4',
          label: '经营异常',
        },{
          id: '2-5',
          label: '行政处罚',
        },{
          id: '2-6',
          label: '股权出质',
        },{
          id: '2-7',
          label: '股权冻结',
        },{
          id: '2-8',
          label: '立案信息',
        },{
          id: '2-9',
          label: '开庭公告',
        }]
      }, {
        id: 3,
        label: '知识产权',
        children: [{
          id: '3-1',
          label: '专利信息',
        },{
          id: '3-2',
          label: '软件著作权',
        },{
          id: '3-3',
          label: '资质认证',
        }]
      }, {
        id: 4,
        label: '企业年报',
        children: [{
          id: '4-1',
          label: '企业基本信息',
        },{
          id: '4-2',
          label: '网站或网店信息',
        },{
          id: '4-3',
          label: '股东（发起人）出资信息',
        },{
          id: '4-4',
          label: '社保信息',
        }]
      }, {
        id: 5,
        label: '经营信息',
        children: [{
          id: '5-1',
          label: '行政许可',
        },{
          id: '5-2',
          label: '融资信息',
        },{
          id: '5-3',
          label: '抽查检查',
        },{
          id: '5-4',
          label: '税务评级',
        }]
      }, {
        id: 6,
        label: '财务信息',
        children: [{
          id: '6-1',
          label: '财务信息',
        }]
      }, {
        id: 7,
        label: '舆情信息',
        children: [{
          id: '7-1',
          label: '舆情信息',
        }]
      }],
    }
  },
  methods:{
    getCheckedKeys() {
      this.pageBox = false,
      // console.log(this.$refs.tree.getCheckedKeys());
      this.changeTree(this.$refs.tree.getCheckedKeys())
    },
    setCheckedKeys(data) {
      this.$refs.tree.setCheckedKeys(data);
    },
    changeTree(customizeInfo){
      this.$post('/customizehtml/',{
        customizeInfo:customizeInfo.toString()
      }).then((res)=>{
        // console.log('changeTree',res);
        this.showFlag = customizeInfo
      })
    },
    getTree(){
      this.pageBox=true
      this.$get('/customizehtml/menu').then((res)=>{
        // console.log('getTree',res);
        this.setCheckedKeys(res.data.result[0].customizeInfo.split(','))
      })
    },
    getDate(){
      this.$get('/customizehtml/menu').then((res)=>{
        // console.log('getTree',res);
        this.showFlag = res.data.result[0].customizeInfo.split(',')
        console.log(this.showFlag)
      })
    }
  },
  created(){
    this.getDate()
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .FinancialInformation {
    margin-top: 20px;
    margin-left: 30px;
  }

  .FinancialInformationIcon {
    display: inline-block;
    width: 5px;
    margin-right: -1px;
    height: 14px;
    background-color: #557bf7;
    transform: translateY(1px);
  }

  .FinancialInformations {
    font-weight: bold;
    color: #838895;
  }
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
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
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
.reset{
  text-align: right;
  color: #838895;
  cursor: pointer;
  margin-top: 20px;
}
.default{
  /*margin-top: 300px;*/
  padding-top: 30px;
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
