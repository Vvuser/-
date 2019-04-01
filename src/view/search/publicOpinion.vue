<template>
  <div class="publicOpinion">
    <div class="box">
      <div class="item" v-for="(item,index) in list" :key="index">
        <h3 @click="href(item.url)">{{item.titleZh}}</h3>
        <p>{{item.domain}}&nbsp;&nbsp;&nbsp;{{item.created}}</p>
        <p>{{item.abstractZh}}</p>
        <div class="i_footer">
          <div>
            <span>{{item.languageTname}}</span>
            <span class="bord" v-for="(c_item,index) in item.keywordsZh" :key="index">{{c_item}}</span>
          </div>
          <div>
            <el-button icon="el-icon-star-off" v-if="false" size="mini">收藏</el-button>
            <el-button type="primary" icon="el-icon-star-on" v-if="true" size="mini">已收藏</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      searchText: "",
      page: 1,
      pageSize: 10,
      list:[]
    };
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
     * 外联
     */
    href(url){
      window.open(url)
    },
    /**
     * 获取检索信息
     */
    getPOList() {
      let obj = {
        keyWord: this.getSeacherText,
        pageSize: 10,
        pageNo: 1,
        ysType: 0
      };
      this.$post("/yess/invoke",obj).then(res => {
        console.log(res);
        this.list = res.data.resultList
      });
    }
  },
  created() {
    this.getPOList();
  }
};
</script>

<style scoped type="text/scss" lang="scss">
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
