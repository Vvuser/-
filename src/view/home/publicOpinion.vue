  <template>
  <div>
    <div class="entepriseheart">
      <span class="enterpriseSc"
            v-for="(item,index) in navItemList"
            :key="index"
            :class="{dd:item==activeNavItem}"
            @click="activeNavItemFun(item)">
        {{item}}</span>
    </div>
    <div class="enteprisebody">
      <div class="publicOpinion">
    <div class="box">
      <div class="item" v-for="(item,index) in list" :key="index">
        <h3 @click="href(item.url)">{{item.titleZh}}</h3>
        <p>{{item.domain}}&nbsp;&nbsp;&nbsp;{{item.created}}</p>
        <p v-html="item.abstractZh"></p>
        <div class="i_footer">
          <div>
            <span>{{item.languageTname}}</span>
            <span class="bord" v-for="(c_item,index) in item.keywordsZh" :key="index">{{c_item}}</span>
          </div>
          <div>
            <el-button icon="el-icon-star-off" v-if="!item.isClick == 0" size="mini" @click="collect(item,index)">收藏</el-button>
            <el-button type="primary" icon="el-icon-star-on" v-else size="mini" @click="unCollect(item,index)">已收藏</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <pagination :total="total" @getCurrentPage="getCurrentPage"></pagination>
    </div>
  </div>
    </div>
  </div>
</template>


<script>
import { mapMutations, mapGetters } from "vuex";
import pagination from "@/components/pagination"
export default {
  data() {
    return {
      searchText: "",
      page: 1,
      pageSize: 10,
      list:[],
      total:0,
      navItemList:["我的收藏","浏览历史"],
      activeNavItem: ""
    };
  },
  components:{
    pagination
  },
  computed: {
    ...mapGetters(["getSeacherText"])
  },
  watch: {
    getSeacherText() {
      console.log(this.getSeacherText);
    }
  },
  methods: {
    history() {
      this.list = []
      this.total = 0
    },
    /**
     * 取消收藏
     */
    unCollect(item,index) {
      this.$get(`/yesskeep/delete/${item.uuid}`).then(res => {
        this.$message.success("取消收藏成功")
        this.list[index].isClick= 1
      })
    },
    /**
     * 收藏
     */
    collect(item,index) {
      let obj = {
        url: item.url,
        titleZh: item.titleZh,
        domain: item.domain,
        created: item.created,
        abstractZh: item.abstractZh,
        languageTname: item.languageTname,
        keywordsZh: JSON.stringify(item.keywordsZh),
        uuid:item.uuid,
        isClick: 0
      }
      this.$post('/yesskeep/',obj).then(res => {
        console.log(res);
        this.$message.success("收藏成功")
        this.list[index].isClick= 0
      })
    },
    activeNavItemFun(item){
      this.activeNavItem = item
    },
    getCurrentPage(page){
      this.page = page
      this.getPOList();
    },
    /**
     * 外联
     */
    href(url){
      window.open(url)
    },
    /**
     * 获取检索信息
     */
    getPOList() {
      let isclick = this.activeNavItem
      if(isclick == "我的收藏"){
        isclick = 0
      }else {
        isclick = 1
      }
      this.$get(`/yesskeep/page/${this.page}/10/${isclick}`).then(res => {
        console.log(res);
        this.list = res.data.result.map(el => {
          el.keywordsZh = JSON.parse(el.keywordsZh)
          el.isKeep = true
          return el
        })
        this.total = res.data.total
      });
    }
  },
  watch: {
    activeNavItem(){
      this.currentPage = 1
      this.getPOList()
    }
  },
  created() {
    this.activeNavItem = '我的收藏'
    this.getPOList()
  }
};
</script>


<style scoped type="text/scss" lang="scss">
.dd {
  color: #557bf7;
  font-weight: 600;
}
.enteprisebody {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
.entepriseheart {
  width: 1200px;
  margin: 0 auto;
  height: 60px;
  line-height: 60px;
  color: #969ebb;
  font-size: 14px;
  background-color: #fff;
}
.enterpriseSc {
  font-size: 14px;
  font-weight: 600;
  margin-left: 25px;
  cursor: pointer;
}
.enterpriseSc:after{
  content: "";
  display: inline-block;
  height: 14px;
  width: 1px;
  background-color: #969ebb;
  margin-left: 20px;
}
.enterpriseSc:last-child:after{
  display: none;
}
.pagination{
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
.publicOpinion {
  width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  .box {
    // margin-top: 20px;
    .item {
      margin: 0 30px;
      padding: 20px 0;
      border-bottom: 1px solid #edecf1;
      color: #838895;
      h3 {
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
      }
      h3:hover{
        color: #5180ff;
      }
      p:nth-child(2) {
        color: #cad0dd;
        font-size: 12px;
        margin: 10px 0;
      }
      p:nth-child(3) {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin-bottom: 15px;
      }
      .i_footer {
        display: flex;
        justify-content: space-between;
        .bord{
          border: 1px solid #c26d10;
          color: #c26d10;
          border-radius: 4px;
          padding: 2px 10px;
          margin-left: 10px;
        }
      }
    }
  }
  .pagination{
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding: 30px 0;
    background-color: #fff;
  }
}
</style>
