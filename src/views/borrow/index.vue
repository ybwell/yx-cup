<template>
  <div class="tableList">
    <div class="tableHeader">
      <el-input placeholder="" prefix-icon="search" v-model="searchContent" />
    </div>
    <el-table
      :data="borrowList"
      style="width: 100%"
      :row-style="{ height: '60px' }"
    >
      <el-table-column prop="name" label="姓名" width="300px" />
      <el-table-column prop="number" label="学号" width="300px" />
      <el-table-column prop="book" label="所借书籍" width="300px" />
      <el-table-column prop="date" label="借书日期" width="300px" />
      <el-table-column prop="rdate" label="应还日期" width="300px" />
    </el-table>
    <el-popover
      placement="bottom"
      :width="200"
      trigger="click"
      content="暂时没有更多信息哦~"
    >
      <template #reference>
        <div class="example-pagination-block">
          <el-pagination layout="prev, pager, next" :total="1000" />
        </div>
      </template>
    </el-popover>
  </div>
</template>
<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
let borrowList = ref([])
let searchContent = ref('')
let getBorrowList = async () => {
  await axios.get('/borrow/getBorrowList').then((res) => {
    console.log(res.data)
    borrowList.value = res.data
  })
}
onMounted(() => {
  getBorrowList()
})
</script>
<style lang="less" scoped>
.tableList {
  width: 1500px;
  margin: 0 auto;
  margin-top: 30px;
  position: relative;
  .tableHeader {
    height: 20px;
    width: 100%;
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;
    .el-input {
      width: 150px;
    }
    button {
      width: 100px;
      height: 30px;
      border: none;
      color: grey;
      border-radius: 3px;
      border: 1px solid grey;
      background-color: rgb(224, 230, 232);
    }
    :active {
      border: none;
    }
  }
  .el-table {
    width: 1500px;
    font-size: 16px;
    box-shadow: 0px 0px 1px;
  }
  .example-pagination-block {
    position: absolute;
    right: 0;
    margin-top: 20px;
  }
}
</style>
