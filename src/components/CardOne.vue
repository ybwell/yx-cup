<template>
  <el-card class="card1">
    <div class="header"><span>座位预约情况</span></div>
    <div id="seatChart" style="width: 360px; height: 300px"></div>
  </el-card>
</template>
<script setup>
import * as echarts from 'echarts'
import axios from 'axios'
import { onMounted, reactive, ref } from 'vue'
let seatNum = reactive({})
//获取座位数量
const initChart = async () => {
  await axios
    .get('/card/getSeatNum')
    .then((res) => {
      console.log(res)
      seatNum = res.data
    })
    .catch((err) => {
      console.log(err)
    })
  let myChart = echarts.init(document.getElementById('seatChart'))
  myChart.setOption(seatNum)
}
onMounted(() => {
  initChart()
})
</script>
<style lang="less" scoped>
.card1 {
  .header {
    color: #eee;
    font-weight: 600;
    span {
      border-bottom: 3px solid rgb(60, 96, 138);
    }
  }
  #seatChart {
    margin: 0 auto;
    margin-top: -30px;
  }
}
</style>
