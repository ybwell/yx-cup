<template>
  <el-card class="card1"
    ><div class="header"><span>本年读者排行</span></div>
    <div class="readerList">
      <div v-for="(item, index) in readerData" class="listItem">
        <div class="name">{{ index + 1 }} {{ item.name }}</div>
        <div class="count">
          <span>借阅{{ item.count }}次</span>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script setup>
import { onMounted, ref, reactive } from 'vue'
import axios from 'axios'
let readerData = ref([])
let getReaderData = async () => {
  await axios
    .get('/card/getReaderData')
    .then((res) => {
      console.log(res.data)
      readerData.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
}
onMounted(() => {
  getReaderData()
})
</script>
<style lang="less" scoped>
.card1 {
  .header {
    height: 35px;
    color: white;
    font-weight: 600;
    span {
      border-bottom: 3px solid rgb(60, 96, 138);
    }
  }
  .readerList {
    :hover {
      background-color: rgb(67, 64, 92);
      border-radius: 3px;
    }
    .listItem {
      height: 40px;
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      vertical-align: middle;
      div {
        font-size: 18px;
        color: #eee;
      }
      .count {
        width: 120px;
        height: 34px;
        padding-top: 8px;
        text-align: center;
        border-radius: 3px;
        // background-color: rgb(52, 85, 113);
      }
    }
  }
}
</style>
