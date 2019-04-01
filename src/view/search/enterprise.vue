<template>
  <div class="enterprise">
    <div class="dHeader">
      <div></div>
      <div>公司信息</div>
      <div>注册资金</div>
      <div>成立年限</div>
    </div>
    <div class="item">
      <div>
        <img src="../../assets/image/collect.jpg"/>
        <img src="../../assets/image/logo.png">
      </div>
      <div>
        <h3>武安科前生物</h3>
        <p>法定人代表：xxxx</p>
        <p>电话：xxxxx 邮箱：xxxxx</p>
        <p>地址：xxxxxx</p>
      </div>
      <div>3000万人民币</div>
      <div>2001-11-1</div>
    </div>
    <div class="pagination">
      <pagination :total="100" @getCurrentPage="getCurrentPage"></pagination>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import pagination from "@/components/pagination"
export default {
  data() {
    return {
      currentPage: 0
    }
  },
  components:{
    pagination
  },
  computed: {
      ...mapGetters([
        'getSeacherText'
      ])
  },
  watch:{
    getSeacherText() {
      console.log(this.getSeacherText)
    }
  },
  methods:{
    getCurrentPage(page){
      console.log(page)
      this.currentPage = page
    }
  },
  created() {

  }
}
</script>

<style scope type="text/scss" lang="scss">
  .pagination{
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .enterprise{
    width: 1200px;
    margin: 0 auto;
    background: #ffffff;
    .dHeader{
      margin: 20px 30px 0 30px;
      background: #ececf4;
      height: 40px;
      display: flex;
      align-items: center;
      color: #838895;
    }
    .dHeader>div:nth-child(1){
      width: 180px;
    }
    .dHeader>div:nth-child(2){
      width: 570px;
    }
    .dHeader>div:nth-child(3){
      width: 270px;
    }
    .item{
      display: flex;
      padding: 28px 0;
      margin: 0 30px;
      align-items: center;
      background: white;
      color: #838895;
      border-bottom: 1px solid #ececf5;
    }
    .item>div:nth-child(1){
      width: 180px;
      display: flex;
      align-items: center;
      img:nth-child(1) {
        margin: 0 10px;
        width: 20px;
        height: 20px;
      }
      img:nth-child(2) {
        width: 120px;
        height: 120px;
        background: black;

      }
    }
    .item>div:nth-child(2){
      width: 570px;
      h3{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      p{
        font-size: 14px;
      }
    }
    .item>div:nth-child(3){
      width: 270px;
    }
  }
</style>
