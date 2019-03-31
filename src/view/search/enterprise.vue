<template>
  <div class="enterprise">
    <div class="dHeader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="item"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: ""
    }
  },
  methods:{
    init(){
      this.searchText = sessionStorage.getItem("searchText")
    },
  },
  created() {
    this.init()
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
    }
    .dHeader>div:nth-child(1){
      width: 180px;
      
    }
  }
</style>
