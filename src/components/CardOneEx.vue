<template>
  <el-card class="card1">
    <div class="header"><span>藏书类别统计</span></div>
    <div id="sortChart" style="width: 460px; height: 230px"></div>
  </el-card>
</template>
<script setup>
import * as echarts from 'echarts'
import axios from 'axios'
import { onMounted, reactive, ref } from 'vue'
let sortNum = reactive({})
//获取座位数量
const initChart = async () => {
  await axios
    .get('/card/getSortNum')
    .then((res) => {
      console.log(res)
      sortNum = res.data
    })
    .catch((err) => {
      console.log(err)
    })
  let myChart = echarts.init(document.getElementById('sortChart'))
  myChart.setOption(sortNum)
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
  #sortChart {
    margin: 0 auto;
    margin-top: -30px;
  }
}
</style>
