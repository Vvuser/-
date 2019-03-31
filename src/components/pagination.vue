<template>
    <el-pagination
        background
        layout="prev, pager, next"
        :total=total>
    </el-pagination>
</template>

<script>
  export default {
    name: "",
    props: ["total"],
  }
</script>

<style scoped>

</style>