<template>
  <div>
    <div class="patent-wrapper">
      <div class="contentLeft">
        <p class="title">筛选项</p>
        <el-menu
                default-active="2"
                background-color="#fcfcff"
                text-color="#838895"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <span>导航一</span>
            </template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
            <el-menu-item index="1-4-2">选项1</el-menu-item>
            <el-menu-item index="1-4-3">选项1</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span>导航二</span>
            </template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项1</el-menu-item>
            <el-menu-item index="2-4-3">选项1</el-menu-item>
          </el-submenu>
        </el-menu>
        </el-col>
      </div>
      <div class="contentRight">
        <ul>
          <li>
            <div>
              <a href="">卷积神经网络FPGA加速中的图像填充方法及装置</a>
              <span style="margin-right: 10px;border: 1px solid #38da95;color: #38da95;">公开</span>
              <span style="border: 1px solid #8445f7;color: #8445f7;">发明</span>
              <div @click="collect">
                <el-button icon="el-icon-star-off" v-if="!collectFlag" size="mini">收藏</el-button>
                <el-button type="primary" icon="el-icon-star-on" v-else size="mini">已收藏</el-button>
              </div>
            </div>
            <p><span>申请号：CN201910094931.5</span><span>申请日：2019-01-31</span></p>
            <p><span>公开/公告号：CN109460754A</span><span>公开/公告日：2019-03-12</span></p>
            <p>申请人：深兰人工智能芯片研究院（江苏）有限公司</p>
            <p>发明人：陈海波</p>
            <p>IPC：G06K 9/00; G06K 9/62; G06T 5/40; G06T 7/13;</p>
            <p>本发明提供一种水面异物检测方法、装置、设备及存储介质，用于解决现有技术存在水面异物检测准确率低的技术问题。方法包括：使用若干个水面图像对卷积神经网络yolov3进行训练，获得yolov3分类模型；获取无人机发送的第一目标水面场景对应的水面图像；对所述第一目标水面场景对应的水面图像进行直方图均衡化处理和对数变换处理，以在增强所述水面图像的整体对比度的同时增强所述水面图像的暗部细节，获得处理后的水面图像；将所述处理后的水面图像输入所述yolov3分类模型，根据所述yolov3分类模型的输出结果确定所述第一目标水面场景中是否存在异物。</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <pagination :total="total" :currentPage="currentPage" :pageSize="pageSize"></pagination>
    </div>
  </div>
</template>

<script>

  import pagination from '@/components/pagination'
  import {mapMutations, mapGetters} from 'vuex'
  export default {
    name: "",
    components: {
      pagination
    },
    data(){
      return{
        collectFlag:false,
        total:100,
        currentPage:1,
        pageSize:10
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      collect(){
        this.collectFlag = !this.collectFlag
      },
      ...mapGetters([
        'getSeacherText'
      ])
    },
    watch: {
      getSeacherText(){
        console.log(this.getSeacherText)
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .patent-wrapper{
    background-color: #fff;
    width: 1200px;
    padding: 20px 30px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    box-sizing: border-box;
    &>div{
      background-color: #fcfcff;
      padding-top: 40px;
    }
    .contentLeft{
      width: 240px;
      color: #838895;
      .title{
        font-weight: bold;
        margin-bottom: 10px;
        margin-left: 20px;
      }
      .title:before{
        display: inline-block;
        content: "";
        width: 5px;
        margin-right: 5px;
        height: 14px;
        background-color: #557bf7;
        transform: translateY(1px);
      }
    }
    .contentRight{
      width: 880px;
      ul li{
        padding: 20px;
        border-bottom: 1px solid #ececf5;
        color: #838895;
        font-size: 14px;
        padding-top: 0;
      }
      ul li:last-child{
        border-bottom:none;
      }
      ul li p{
        margin-top: 10px;
      }
      ul li>div span{
        text-align: center;
        width: 46px;
        display: inline-block;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        border-radius: 4px;
      }
      ul li>div>div{
        float: right;
      }
      ul li>div>*{
        display: inline-block;
      }
      ul li p>span{
        display: inline-block;
        width: 230px;
      }
      a{
        color: #838895;
        font-size: 16px;
        font-weight: bold;
        margin-right: 40px;
      }
    }
    .el-menu{
      border: none;
    }

  }
  .footer{
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding: 30px 0;
    background-color: #fff;
  }
</style>
