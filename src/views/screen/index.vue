<template>
  <div id="background"></div>
  <el-row :gutter="30" class="topRow">
    <el-col :span="7"
      ><div>
        <CardOne class="cardOne" />
      </div>
      <div>
        <CardOneEx class="cardOneEx" />
      </div>
    </el-col>
    <el-col :span="10"
      ><div><CardTwo class="cardTwo" /></div
    ></el-col>
    <el-col :span="7"
      ><div><CardThree class="cardThree" /></div>
      <div><CardThreeEx class="cardThreeEx" /></div
    ></el-col>
  </el-row>
  <el-row :gutter="30" class="underRow">
    <el-col :span="7"
      ><div>
        <CardFour class="cardFour" /></div></el-col
    ><el-col :span="10"
      ><div>
        <CardFive class="cardFive" /></div></el-col
    ><el-col :span="7"
      ><div>
        <CardSix class="cardSix" /></div
    ></el-col>
  </el-row>
</template>
<script setup>
import * as echarts from 'echarts'
import CardOne from '@/components/CardOne.vue'
import CardTwo from '@/components/CardTwo.vue'
import CardThree from '@/components/CardThree.vue'
import CardFour from '@/components/CardFour.vue'
import CardFive from '@/components/CardFive.vue'
import CardSix from '@/components/CardSix.vue'
import CardOneEx from '@/components/CardOneEx.vue'
import CardThreeEx from '@/components/CardThreeEx.vue'
</script>
<style lang="less" scoped>
#background {
  background: url('@/assets/images/pageBg.png') no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
.topRow {
  cursor: default;
  margin-top: 10px;
  height: 500px;
  span {
    color: white;
  }
  .el-card {
    height: 500px;
    margin-left: 10px;
    border: 2px solid rgb(74, 71, 117);
    background-color: transparent;
  }
  .cardOne {
    height: 290px;
  }
  .cardOneEx {
    margin-top: 10px;
    height: 195px;
  }
  .cardTwo {
    margin-left: -15px;
  }
  .cardThree {
    height: 290px;
    margin-left: -15px;
  }
  .cardThreeEx {
    margin-left: -15px;
    margin-top: 10px;
    height: 195px;
  }
}
.underRow {
  cursor: default;
  height: 320px;
  span {
    color: white;
  }
  .el-card {
    height: 260px;
    margin-top: 15px;
    margin-left: 10px;
    border: 2px solid rgb(64, 61, 112);
    background-color: transparent;
  }
  .cardFive {
    margin-left: -15px;
  }
  .cardSix {
    margin-left: -15px;
    color: rgb(212, 114, 212);
  }
}
</style>
