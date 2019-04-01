<template>
    <el-pagination
      background
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
</template>

<script>
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
    }
  }
</script>

<style scoped>

</style>