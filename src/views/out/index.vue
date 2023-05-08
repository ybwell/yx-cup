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
      <el-table-column fixed prop="name" label="姓名" width="250" />
      <el-table-column prop="number" label="学号" width="250" />
      <el-table-column prop="book" label="所借书籍" width="250" />
      <el-table-column prop="phone" label="电话号码" width="250" />
      <el-table-column prop="date" label="借书日期" width="250" />
      <el-table-column prop="rdate" label="应还日期" width="250" />
      <el-table-column prop="money" label="滞纳金" width="250" />
      <el-table-column fixed="right" label="操作" width="120">
        <template v-slot="scoped">
          <el-button link type="primary" size="small">提醒</el-button>
          <el-button
            link
            type="primary"
            size="small"
            @click="deRole(scoped.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
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
let getOutData = async () => {
  await axios.get('/out/getOutData').then((res) => {
    console.log(res.data)
    borrowList.value = res.data
  })
}
let deRole = (id) => {
  for (let i = 0; i < borrowList.value.length; i++) {
    if (borrowList.value[i].id === id && borrowList.value.length > 0) {
      borrowList.value.splice(i, 1)
    }
  }
}
onMounted(() => {
  getOutData()
  deRole()
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
    :active {
      border: none;
    }
  }
  .el-table {
    width: 1500px;
    font-size: 16px;
    box-shadow: 0px 0px 1px;
    .el-button {
      color: grey;
      font-size: 14px;
      :active {
        color: rgb(162, 159, 159);
      }
    }
  }
  .example-pagination-block {
    position: absolute;
    right: 0;
    margin-top: 20px;
  }
}
</style>
