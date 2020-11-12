<template>
    <div id="app">
        <Tou title="首页"></Tou>
         <div class="cont">
      <h3>客服七尾，欢迎回来！</h3>
      <div class="div1">
        <div class="div1-1">
          <p>总会话量</p>
          <p class="shu1">230</p>
          <p>较昨日上涨10%</p>
        </div>
        <div class="div1-1">
          <p>总会话量</p>
          <p class="shu2">200</p>
          <p>较昨日上涨10%</p>
        </div>
        <div class="div1-1">
          <p>总会话量</p>
          <p class="shu3">30</p>
          <p>较昨日上涨10%</p>
        </div>
        <div class="div1-1">
          <p>总会话量</p>
          <p class="shu4">2300</p>
          <p>较昨日上涨10%</p>
        </div>
      </div>
      <div class="div2">
          <div class="div2-1">
              <img src="../assets/img/tjt.png"  width="750px" >
          </div>
          <div class="div2-2">
              <p class="p1">
                  快捷入口
              </p>
              <router-link tag="div" to="">
                  <img src="../assets/img/1.png" >
              </router-link>
              <router-link tag="div" to="">
                  <img src="../assets/img/2.png">
              </router-link>
              <router-link tag="div" to="">
                  <img src="../assets/img/3.png" >
              </router-link>
              <router-link tag="div" to="">
                  <img src="../assets/img/4.png">
              </router-link>
              <router-link tag="div" to="">
                  <img src="../assets/img/5.png">
              </router-link>
              <router-link tag="div" to="">
                  <img src="../assets/img/6.png">
              </router-link>
              <router-link tag="div" to="">
                  <img src="../assets/img/7.png">
              </router-link>
          </div>
      </div>
      <div class="div3">
          <p>
              客服监控
          </p>
    <el-table
      :data="tableData"
      style="width: 1250px;">
      <el-table-column align="center"
        prop="date"
        label="客服昵称"
        width="180">
      </el-table-column>
      <el-table-column align="center"
        prop="name"
        label="状态"
        width="180">
      </el-table-column>
      <el-table-column align="center"
        prop="address"
        label="在线时长">
      </el-table-column>
      <el-table-column align="center"
        prop="hui"
        label="会话数"
        width="180">
      </el-table-column>
      <el-table-column align="center"
        prop="xiao"
        label="消息数"
        width="180">
      </el-table-column>
      <el-table-column align="center"
        prop="px"
        label="平均响应时长"
        width="180">
      </el-table-column>
      <el-table-column align="center"
        prop="ph"
        label="平均会话时长"
        width="180">
      </el-table-column>
      
    </el-table>
      </div>
    </div>
    </div>
</template>
<script>
import Tou from "../components/Tou";
export default {
    name:'Zu1',
    components: {
    Tou
  },
     data() {
        return {
          tableData: [{
            date: '客服小美',
            name: '在线',
            address: '6h',
            hui:'30',
            xiao:'389',
            px:'24s',
            ph:'5min'
          }, {
             date: '客服小美',
            name: '在线',
            address: '6h',
            hui:'30',
            xiao:'389',
            px:'24s',
            ph:'5min'
          }, {
             date: '客服小美',
            name: '在线',
            address: '6h',
            hui:'30',
            xiao:'389',
            px:'24s',
            ph:'5min'
          }, {
            date: '客服小美',
            name: '在线',
            address: '6h',
            hui:'30',
            xiao:'389',
            px:'24s',
            ph:'5min'
          }]
        }
      }
}
</script>
<style scoped>
.cont {
      width: 1435px;
    margin-left: 84px;
    float: left;
    background: #e6f1ff;
    margin-top: 60px;
}
h3{
  margin: 15px 30px;
}
.div1 {
  background: #ffffff;
  width: 1280px;
  height: 200px;
  border-radius: 5px;
}
.div1-1 {
  text-align: center;
  width: 300px;
  height: 180px;
  float: left;
  margin-top: 10px;
  margin-left: 16px;
  background: #e6f1ff;
  border-radius: 5px;
}
.div1-1 p:nth-of-type(1),
:nth-of-type(3) {
  font-size: 10px;
  line-height: 50px;
}
.shu1 {
  font-size: 40px;
  color: #187cff;
  line-height: 60px;
  font-weight: 900;
}
.shu2 {
  font-size: 40px;
  color: #ff6262;
  line-height: 60px;
  font-weight: 900;
}
.shu3 {
  font-size: 40px;
  color: #2ed477;
  line-height: 60px;
  font-weight: 900;
}
.shu4 {
  font-size: 40px;
  color: #ff923a;
  line-height: 60px;
  font-weight: 900;
}
.div2{
    width: 1250px;
    margin-top: 10px;
    height: 340px;
}
.div2-1{
    width: 750px;
    background: #ffffff;
    float: left;
}
.div2-2{
    width: 490px;
    height: 325px;
    float: left;
    background: #ffffff;
    margin-left: 10px;
    border-radius: 5px;
}
.p1{
    font-size: 18px;
    padding-left: 20px;
    margin: 10px 0px;
}
.div2-2 div{
    height: 119px;
    float: left;
    padding: 10px 20px;
    cursor: pointer;
}
.div3{
    width: 1250px;
    margin-top: 0px;
    background: #ffffff;
}
.div3 p{
    font-size: 20px;
    padding: 0px 20px;
}
</style>