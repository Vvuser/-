<template>
  <div class="enterprise">
    <div class="dHeader">
      <div></div>
      <div>公司信息</div>
      <div>注册资金</div>
      <div>成立年限</div>
    </div>
    <div class="item">
      <div></div>
      <div>公司信息</div>
      <div>注册资金</div>
      <div>成立年限</div>
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

  },
  created() {

  }
}
</script>

<style scope type="text/scss" lang="scss">
  .enterprise{
    width: 1200px;
    margin: 0 auto;
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
      margin: 20px 30px 0 30px;
      align-items: center;
    }
    .item>div:nth-child(1){
      width: 180px;
    }
    .item>div:nth-child(2){
      width: 570px;
    }
    .item>div:nth-child(3){
      width: 270px;
    }
  }
</style>
