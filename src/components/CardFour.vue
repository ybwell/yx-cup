<template>
  <el-card class="card4">
    <div class="header"><span>本月借阅排行</span></div>
    <div class="bookRank">
      <div v-for="(item, index) in bookRank" :key="index" class="rankItem">
        <div>{{ index + 1 }} {{ item.name }}</div>
        <div>{{ item.count }}次</div>
      </div>
    </div>
  </el-card>
</template>
<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
let bookRank = ref([])
let getBookRank = async () => {
  await axios
    .get('/card/getBookRank')
    .then((res) => {
      console.log(res.data)
      bookRank.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
}
onMounted(() => {
  getBookRank()
})
</script>
<style lang="less" scoped>
.card4 {
  .header {
    height: 30px;
    color: #fff;
    font-weight: 600;
    span {
      border-bottom: 3px solid rgb(60, 96, 138);
    }
  }
  .bookRank {
    :hover {
      background-color: rgb(67, 64, 92);
      border-radius: 3px;
    }
    .rankItem {
      display: flex;
      justify-content: space-between;
      height: 30px;
      font-size: 18px;
      margin-top: 10px;
      color: #fff;
    }
  }
}
</style>
