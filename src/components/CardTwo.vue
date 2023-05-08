<template>
  <el-card class="card2">
    <div class="header"><span>累计到馆人次</span></div>
    <div class="count">
      <div v-for="(item, index) of peopleNumber" :key="index">
        <span>{{ item }}</span>
      </div>
    </div>
    <div class="fourCharts">
      <div>
        <div id="chart1" style="height: 120px; width: 120px"></div>
        <span>上月人数</span>
      </div>
      <div>
        <div id="chart2" style="height: 120px; width: 120px"></div>
        <span>本月人数</span>
      </div>
      <div>
        <div id="chart3" style="height: 120px; width: 120px"></div>
        <span>昨日人数</span>
      </div>
      <div>
        <div id="chart4" style="height: 120px; width: 120px"></div>
        <span>今日人数</span>
      </div>
    </div></el-card
  >
</template>
<script setup>
import * as echarts from 'echarts'
import axios from 'axios'
import { onMounted, reactive, ref } from 'vue'
let option = {}
// let peopleNumber = [9, 8, 6, 4, 7, 2]
let peopleNumber = ref([])
//获取累计到馆人次
const getAllPeopleNumber = async () => {
  await axios
    .get('/card/getAllPeopleNumber')
    .then((res) => {
      console.log(res.data)
      peopleNumber.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
}
//获取四个echarts数据
const initChart = async () => {
  await axios
    .get('/card/getCardData')
    .then((res) => {
      console.log(res)
      option = res
    })
    .catch((err) => {
      console.log(err)
    })
  let myChart1 = echarts.init(document.getElementById('chart1'))
  let myChart2 = echarts.init(document.getElementById('chart2'))
  let myChart3 = echarts.init(document.getElementById('chart3'))
  let myChart4 = echarts.init(document.getElementById('chart4'))
  myChart1.setOption(option.data.option1)
  myChart2.setOption(option.data.option2)
  myChart3.setOption(option.data.option3)
  myChart4.setOption(option.data.option4)
}
onMounted(() => {
  getAllPeopleNumber()
  initChart()
})
</script>
<style lang="less" scoped>
.card2 {
  position: relative;
  .header {
    height: 80px;
    color: white;
    font-weight: 600;
    span {
      border-bottom: 3px solid rgb(60, 96, 138);
    }
  }
  .count {
    display: flex;
    width: 420px;
    margin: 0 auto;
    div {
      width: 50px;
      height: 90px;
      margin-left: 15px;
      margin: 0 auto;
      font-size: 50px;
      border: 2.5px solid #41458e;
      color: white;
      text-align: center;
      border-radius: 4px;
      span {
        cursor: default;
        vertical-align: middle;
      }
    }
  }
  .fourCharts {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        color: white;
        margin-top: 15px;
      }
    }
    // border: 1px solid #333;
  }
}
</style>
