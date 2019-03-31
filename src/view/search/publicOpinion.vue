<template>
  <div class="publicOpinion">
    <div class="box">
      <div class="item">
        <h3>子啊顺道收个发货到是</h3>
        <p>www.iasaas.com</p>
        <p>基地啊师姐殴打教案设计的撒娇哦多久啊是京东i阿瑟将军打死经济案件到死见到就是动静啊送佛阿森纳都的撒娇哦多久啊是京东i阿瑟将军打死经济案件到死见到就是动静啊送佛阿森纳都的撒娇哦多久啊是京东i阿瑟将军打死经济案件到死见到就是动静啊送佛阿森纳都的撒娇哦多久啊是京东i阿瑟将军打死经济案件到死见到就是动静啊送佛阿森纳都的撒娇哦多久啊是京东i阿瑟将军打死经济案件到死见到就是动静啊送佛阿森纳都的撒娇哦多久啊是京东i阿瑟将军打死经济案件到死见到就是动静啊送佛阿森纳都撒娇案件到时间东京阿松i的骄傲松井大嵩i发爱的静安寺哦降低哦就扫</p>
        <div class="i_footer">
          <div>
            <span>中文</span>
            <span>矿业</span>
            <span>工业</span>
          </div>
          <div>
            <img v-show="false" src="../../assets/image/collect3.jpg">
            <img src="../../assets/image/collect4.jpg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
  data() {
    return {
      searchText: ""
    }
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
    /**
     * 获取检索信息
     */
    getPOList() {
      this.$get('/patent/invoke').then(res => {
        console.log(res)
      })
    }
  },
  created() {

  }
}
</script>

<style scoped type="text/scss" lang="scss">
.publicOpinion{
  margin-top: 20px;
  width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  .box{
    margin-top: 20px;
    .item{
      margin: 0 30px;
      padding: 20px 0;
      border-bottom: 1px solid #edecf1;
      color: #838895;
      h3{
        font-size: 16px;
        font-weight: bold;
      }
      p:nth-child(2){
        color: #cad0dd;
        font-size: 12px;
        margin: 10px 0;
      }
      p:nth-child(3){
        font-size: 14px;
        overflow:hidden; 
        text-overflow:ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
        margin-bottom: 15px;
      }
      div{
        display: flex;
        justify-content: space-between;

      }
    }
  }
}
</style>
