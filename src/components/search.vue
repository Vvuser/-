<template>
  <div>
    <div class="wrapper">
      <div class="content">
        <el-input
          placeholder="请输入企业名、人名等关键词"
          v-model="searchText"
          class="input-with-select"
          style="width: 1000px;"
        >
          <el-button
            slot="append"
            @click="search"
            icon="el-icon-search"
            style="width: 150px;background-color: #557bf7;height:40px;color: #fff;border-radius: 0"
            :disabled="searchText==''"
          >搜索</el-button>
        </el-input>
        <div class="search_history" v-show="historySearchList.length > 0">
          搜索历史：
          <el-button
            v-for="(text,index) in historySearchList"
            :key="index"
            round
            @click="historyFind(text)"
            size="mini"
          >{{text}}</el-button>
        </div>
        <div class="table_cover" v-if="!companyDetailsFlag">
          <div class="table_nav">
            <span
              v-for="(item,index) in pathList"
              :key="index"
              :class="{ac:index == pathIndex}"
              @click="to(item.path, index)"
            >{{item.text}}</span>
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
      companyDetailsFlag: false,
      flag: "/home",
      searchText: "",
      historySearchList: [],
      pathIndex: 0,
      pathList: [
        {
          path: "/enterprise",
          text: "企业信息",
          active: false
        },
        {
          path: "/publicOpinion",
          text: "舆情信息",
          active: false
        },
        {
          path: "/patent",
          text: "专利数据",
          active: false
        }
      ]
    };
  },
  watch: {
    pathIndex(val) {
      console.log(val)
    }
  },
  methods: {
    historyFind(text){
        this.setSearchText(text)
        this.$router.push({
            path: "/search/enterprise",
            query: {
              search: text
            }
        });
    },
    to(path, index){
        this.pathIndex = index
        console.log(this.flag)
        this.$router.push({
            path: `${this.flag}${path}`
        })
    },
    search() {
      if(this.searchText == ''){
        return
      }
      let historySearch = localStorage.getItem("historySearch");
      historySearch = historySearch == null ? [] : JSON.parse(historySearch);
      if (historySearch.indexOf(this.searchText) == -1) {
        if (historySearch.length < 5) {
          historySearch.push(this.searchText);
        } else {
          historySearch.shift();
          historySearch.push(this.searchText);
        }
        localStorage.setItem("historySearch", JSON.stringify(historySearch));
      }
      this.setSearchText(this.searchText)
      this.getHistorySearchList();
      let path = "/search"
      if(this.pathIndex == 0){
        path += "/enterprise"
      } else if (this.pathIndex == 1) {
        path += "/publicOpinion"
      } else {
        path += "/patent"
      }
      this.$router.push({
        path
      });
    },
    getHistorySearchList() {
      let historySearch = localStorage.getItem("historySearch");
      this.historySearchList =
        historySearch == null ? [] : JSON.parse(historySearch);
    },
    initialize() {
      let path = this.$route.path
      if(path.indexOf("home") == -1) {
        this.flag = '/search'
      }
      if (path.indexOf("companyDetails") > -1) {
        this.$nextTick(()=>{this.companyDetailsFlag = true})    
      }
      if(path.indexOf("enterprise") > -1){
        this.pathIndex = 0
      } else if (path.indexOf("publicOpinion") > -1) {
        this.pathIndex = 1
      } else if (path.indexOf("patent") > -1) {
        this.pathIndex = 2
      }
    },
    ...mapMutations([
      'setSearchText'
    ])
  },
  created() {
    this.getHistorySearchList();
    this.initialize()
  }
};
</script>

<style scope type="text/scss" lang="scss">
.wrapper {
  background: -webkit-linear-gradient(#eef0f9, #fcfcff); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#eef0f9, #fcfcff); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#eef0f9, #fcfcff); /* Firefox 3.6 - 15 */
  background: linear-gradient(#eef0f9, #fcfcff); /* 标准的语法 */
  width: 100%;
  .content {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding-top: 38px;
    color: #969ebb;
    .search_history {
      margin: 0 auto;
      width: 1000px;
      margin-top: 12px;
      padding-left: 30px;
      box-sizing: border-box;
      overflow: hidden;
      text-align: left;
      font-size: 15px;
    }
    .table_cover {
      background-color: #fff;
      .table_nav {
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        background-color: #ececf5;
        margin-top: 20px;
        border-radius: 8px 8px 0 0;
        text-align: left;
        span {
          margin-left: 30px;
          display: inline-block;
          cursor: pointer;
        }
        .ac {
          color: #557bf7;
          font-weight: 600;
        }
      }
    }
  }
}
</style>