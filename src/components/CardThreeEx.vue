<template>
  <el-card class="card3">
    <div class="header"><span>馆藏总量</span></div>
    <div id="totalChart" style="width: 460px; height: 180px"></div>
  </el-card>
</template>
<script setup>
import * as echarts from 'echarts'
import axios from 'axios'
import { onMounted, reactive, ref } from 'vue'
let totalNum = reactive({})
//获取座位数量
const initChart = async () => {
  await axios
    .get('/card/getTotalNum')
    .then((res) => {
      console.log(res)
      totalNum = res.data
    })
    .catch((err) => {
      console.log(err)
    })
  let myChart = echarts.init(document.getElementById('totalChart'))
  myChart.setOption(totalNum)
}
onMounted(() => {
  initChart()
})
</script>
<style lang="less" scoped>
.card3 {
  .header {
    color: #eee;
    font-weight: 600;
    span {
      border-bottom: 3px solid rgb(60, 96, 138);
    }
  }
  #totalChart {
    margin: 0 auto;
    margin-top: -30px;
    color: rgb(168, 168, 117);
  }
}
</style>
