<template>
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
            <el-button icon="el-icon-star-off" v-if="!item.isKeep" size="mini" @click="collect(item)">收藏</el-button>
            <el-button type="primary" icon="el-icon-star-on" v-if="item.isKeep" size="mini" @click="unCollect(item)">已收藏</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <pagination :total="total" @getCurrentPage="getCurrentPage"></pagination>
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
      total:0
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
    /**
     * 取消收藏
     */
    unCollect(item) {
      this.$get(`/patentkeep/delete/${item.uuid}`).then(res => {
        this.getPOList();
      })
    },
    /**
     * 收藏
     */
    collect(item) {
      let obj = {
        url: item.url,
        titleZh: item.titleZh,
        domain: item.domain,
        created: item.created,
        abstractZh: item.abstractZh,
        languageTname: item.languageTname,
        keywordsZh: JSON.stringify(item.keywordsZh),
        uuid:item.uuid
      }
      this.$post('/yesskeep/',obj).then(res => {
        console.log(res)
        this.getPOList();
      })
    },
    getCurrentPage(page){
      console.log(page)
      this.getPOList(page);
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
    getPOList(pageNo) {
      let obj = {
        keyWord: this.getSeacherText,
        pageSize: 10,
        pageNo,
        ysType: 0
      };
      this.$post("/yess/invoke",obj).then(res => {
        console.log(res);
        this.list = res.data.resultList
        this.total = res.data.resultCount
      });
    }
  },
  created() {
    this.getPOList(1);
  }
};
</script>

<style scoped type="text/scss" lang="scss">
.pagination{
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
.publicOpinion {
  margin-top: 20px;
  width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  .box {
    margin-top: 20px;
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
}
</style>
