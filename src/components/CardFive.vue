<template>
  <el-card class="card5">
    <div class="header"><span>最近一周借书统计</span></div>
    <div id="borrowChart" style="width: 700px; height: 300px"></div>
  </el-card>
</template>
<script setup>
import * as echarts from 'echarts'
import { ref, onMounted, reactive } from 'vue'
import axios from 'axios'
let borrowData = reactive({})
//获取最近一周借书数据
let initChart = async () => {
  await axios
    .get('/card/getBorrowData')
    .then((res) => {
      console.log(res.data)
      borrowData = res.data
    })
    .catch((err) => {
      console.log(err)
    })
  let myChart = echarts.init(document.getElementById('borrowChart'))
  myChart.setOption(borrowData)
}
onMounted(() => {
  initChart()
})
</script>
<style lang="less" scoped>
.card5 {
  .header {
    height: 0px;
    color: white;
    font-weight: 600;
    span {
      border-bottom: 3px solid rgb(60, 96, 138);
    }
  }
  #borrowChart {
    margin-top: -15px;
  }
}
</style>
