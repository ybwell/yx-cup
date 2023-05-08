<template>
  <el-card class="card6">
    <div class="header"><span>推荐书籍</span></div>
    <div class="recommendList">
      <el-carousel :interval="4000" type="card" height="150px">
        <el-carousel-item>
          <img src="@/assets/images/img1.png" alt="" /> </el-carousel-item
        ><el-carousel-item>
          <img src="@/assets/images/img2.jpg" alt="" /> </el-carousel-item
        ><el-carousel-item>
          <img src="@/assets/images/img3.jpg" alt="" /> </el-carousel-item
        ><el-carousel-item>
          <img src="@/assets/images/img4.png" alt="" /> </el-carousel-item
        ><el-carousel-item>
          <img src="@/assets/images/img5.png" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </el-card>
</template>
<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
// let imgList = [
//   {
//     src: require('@/assets/images/img1.png')
//   },
//   {
//     src: require('@/assets/images/img2.jpg')
//   },
//   {
//     src: require('@/assets/images/img3.jpg')
//   },
//   {
//     src: require('@/assets/images/img4.png')
//   },
//   {
//     src: require('@/assets/images/img5.png')
//   }
// ]
// let getRecommendBook = async () => {
//   await axios
//     .get('/card/getRecommendBook')
//     .then((res) => {
//       console.log(res.data)
//       imgList.value = res.data
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }
onMounted(() => {
  // getRecommendBook()
})
</script>
<style lang="less" scoped>
.card6 {
  .header {
    height: 40px;
    color: white;
    font-weight: 600;
    span {
      border-bottom: 3px solid rgb(60, 96, 138);
    }
  }
  .recommendList {
    width: 220px;
    margin: 0 auto;
    img {
      width: 110px;
      height: 160px;
    }
    // .el-carousel__item h3 {
    //   color: #475669;
    //   opacity: 0.75;
    //   line-height: 200px;
    //   margin: 0;
    //   text-align: center;
    // }
    .el-carousel__item:nth-child(2n) {
      width: 110px;
      height: 160px;
      background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n + 1) {
      width: 110px;
      height: 160px;
      background-color: #d3dce6;
    }
  }
}
</style>
