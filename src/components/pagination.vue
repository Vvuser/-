<template>
    <el-pagination
        background
        layout="prev, pager, next"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        :total="total">
    </el-pagination>
</template>

<script>
  export default {
    name: "",
    props: {
      total:{
        type: Number,
        default: 10
      },
      currentPage:{
        type: Number,
        default: 1
      },
      pageSize:{
        type: Number,
        default: 10
      }
    },
  }
</script>

<style scoped>

</style>