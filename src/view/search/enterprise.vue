<template>
  <div class="enterprise">
    <div class="dHeader">
      <div></div>
      <div>公司信息</div>
      <div>统一社会信用代码</div>
      <div>成立年限</div>
    </div>
    <div class="item" v-for="(item,index) in list" :key="index" @click="Enterdetails(item)">
      <div>
        <img v-if="!item.isKeep" @click.stop="collect(item,0)" src="../../assets/image/collect1.jpg"/>
        <img v-if="item.isKeep" @click.stop="unCollect(item.id)" src="../../assets/image/collect.jpg"/>
        <img v-if="item.imgUrl != ''" :src="item.imgUrl">
        <img v-else src="../../assets/image/default.png">
      </div>
      <div>
        <h3>{{item.name}}</h3>
        <p>法定人代表：{{item.oper_name}}</p>
        <!-- <p>电话：xxxxx 邮箱：xxxxx</p> -->
        <p>企业注册号：{{item.reg_no}}</p>
      </div>
      <div>{{item.credit_no}}</div>
      <div>{{item.start_date}}</div>
    </div>
    <div class="pagination">
      <pagination :total="total" :pageSize="20"  @getCurrentPage="getCurrentPage"></pagination>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import pagination from "@/components/pagination"
export default {
  data() {
    return {
      currentPage: 1,
      list:[],
      total: 0
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
      this.getEnterpriseList(this.getSeacherText)
    }
  },
  methods:{
    /**
     * 取消收藏
     */
    unCollect(companyid) {
      this.$get(`/companykeep/delete/${companyid}`).then(res => {
        this.getEnterpriseList(this.getSeacherText)
      })
    },
    /**
     * 收藏
     */
    collect(item,flag) {
      this.$post('/companykeep/',{
        companyid:item.id,
        isClick:flag,
        companyInfo: JSON.stringify(item)
      }).then(res => {
        this.getEnterpriseList(this.getSeacherText)
      })
    },
    /**
     * 获取图片
     */
    getCimg(index,name) {
      // console.log(index)
      let that = this
      this.$post('/company/invoke',{
        url: "/enterprise/getEntLogoByName",
        name
      }).then(res => {
        this.$nextTick(()=>{
          if('logo' in res.data) {
            that.list[index].imgUrl = res.data.logo
          }
          
        })
      })
    },
    /**
     * 进入企业详情页
     */
    Enterdetails(item) {
      this.collect(item,1)
      sessionStorage.setItem("enterpriseId", item.id)
      this.$router.push({
        path:'/companyDetails/essential'
      })
    },
    getCurrentPage(page){
      console.log(page)
      this.currentPage = page
      this.getEnterpriseList(this.getSeacherText)
    },
    /**
     * 获取企业信息列表
     */
    getEnterpriseList(keyword){
      this.$post("/company/invoke",{
        url:'/v2/enterprise/searchListPaging',
        keyword,
        skip: (this.currentPage - 1) * 20
      }).then((res) => {
        console.log(res)
        this.list = res.data.items
        this.total = res.data.total
        this.list = this.list.map((el,index) => {
          el.imgUrl = ""
          this.getCimg(index,el.name)
          return el
        })
        console.log(this.list)
        let str = JSON.stringify(this.list)
        this.list = JSON.parse(str)
      })
    }
  },
  mounted() {
    this.getEnterpriseList(this.getSeacherText)
    
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
        cursor: pointer;
        margin: 0 10px;
        width: 20px;
        height: 20px;
      }
      img:nth-child(2) {
        width: 120px;
        height: auto;
        // background: black;

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
