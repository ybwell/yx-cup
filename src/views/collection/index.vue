<template>
  <div class="tableList">
    <div class="tableHeader">
      <el-input placeholder="" prefix-icon="search" v-model="searchContent" />
      <button @click="flag = true">+ 新增</button>
    </div>
    <el-table
      :data="collectionList"
      style="width: 100%"
      :row-style="{ height: '60px' }"
    >
      <el-table-column prop="name" label="书名" width="300px">
      </el-table-column>
      <el-table-column prop="author" label="作者" width="200px" />
      <el-table-column prop="number" label="索书号" width="300px" />
      <el-table-column prop="address" label="馆藏地" width="300px" />
      <el-table-column prop="sum" label="馆藏数量" width="190px" />
      <el-table-column prop="rest" label="剩余馆藏" width="190px" />
      <el-table-column fixed="right" label="操作" width="120">
        <template v-slot="scoped">
          <el-button link type="primary" size="small">编辑</el-button>
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
    <div class="addBook" v-if="flag">
      <div>
        <input type="text" placeholder="书名" v-model="newBook.name" />
        <input type="text" placeholder="作者" v-model="newBook.author" />
        <input type="text" placeholder="索书号" v-model="newBook.number" />
        <input type="text" placeholder="馆藏地" v-model="newBook.address" />
        <input type="text" placeholder="馆藏数量" v-model="newBook.sum" />
        <input type="text" placeholder="剩余馆藏" v-model="newBook.rest" />
      </div>
      <div class="button2">
        <button @click="flag = false">取消</button>
        <button @click="addNewBook">确认</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
let collectionList = ref([])
let searchContent = ref('')
let flag = ref(false)
let newBook = ref({
  bookName: '',
  author: '',
  searchNum: '',
  bookPlace: '',
  bookSum: '',
  restBook: ''
})
//删除书籍
let deRole = (id) => {
  for (let i = 0; i < collectionList.value.length; i++) {
    if (collectionList.value[i].id === id && collectionList.value.length > 0) {
      collectionList.value.splice(i, 1)
    }
  }
}
//获取馆藏书籍
let getCollectionList = async () => {
  await axios.get('/collection/getCollectionList').then((res) => {
    console.log(res.data)
    collectionList.value = res.data
  })
}
//新增书籍
let addNewBook = () => {
  flag = false
  if (newBook.value.author) {
    collectionList.value.unshift(newBook.value)
    collectionList.value.splice(10, 1)
  } else {
  }

  console.log(newBook.value)
}
onMounted(() => {
  getCollectionList()
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
      width: 70px;
      height: 30px;
      border: none;
      color: white;
      border-radius: 3px;
      background-color: rgb(147, 183, 214);
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
  .addBook {
    z-index: 2;
    width: 800px;
    height: 500px;
    background-color: #fff;
    box-shadow: 0px 0px 1px grey;
    border-radius: 3px;
    // border: 1px solid grey;
    box-shadow: 0px 0px 2px grey;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    input {
      width: 300px;
      height: 40px;
      font-size: 16px;
      margin-left: 50px;
      margin-top: 50px;
      border-color: transparent;
      border-bottom: 1px solid rgb(203, 200, 200);
      outline: none;
    }
    .button2 {
      margin-top: 50px;
      margin-left: 320px;
      button {
        width: 60px;
        height: 40px;
        font-size: 14px;
        border: none;
        margin-left: 8px;
      }
      :active {
        background-color: rgb(212, 210, 210);
      }
    }
  }
}
</style>
