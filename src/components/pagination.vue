<template>
    <div>
        <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="pageSize"
                layout="total, prev, pager, next"
                :total="total"
                v-show="total">
        </el-pagination>
        <p v-show="!total && getStatus==1" style="color: #969ebb;padding: 40px 0">暂无数据</p>
        <p v-show="!total && getStatus==0" style="color: #969ebb;padding: 40px 0">数据加载中...</p>
    </div>
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex'
  export default {
    props: {
      total:{
        type: Number,
        default: 10
      },
      pageSize:{
        type: Number,
        default: 10
      }
    },
    data(){
      return {
        currentPage: 1
      }
    },
    methods:{
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.$emit("getCurrentPage", val)
      }
    },
    computed: {
      ...mapGetters([
        'getStatus'
      ])
    },
  }
</script>

<style scoped>

</style>