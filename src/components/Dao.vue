<template>
    <div id="app">
      <div class="app">
        <el-menu >
        <el-menu-item class="item">
          <img src="../assets/img/logo.png" >
        </el-menu-item>
      </el-menu>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    
    <router-link to="/shou" tag="div">
  <el-menu-item index="1">
 <i class="el-icon-s-home"></i>
    <span slot="title">首页</span>
  </el-menu-item>
   </router-link>

<router-link to="/Zu2" tag="div">
  <el-menu-item index="2">
    <i class="el-icon-chat-dot-square"></i>
    <span slot="title">会话</span>
  </el-menu-item>
  </router-link>
  
  <router-link to="/Zu3" tag="div">
  <el-menu-item index="3">
    <i class="el-icon-user"></i>
    <span slot="title">访客</span>
  </el-menu-item>
  </router-link>

  <el-menu-item index="4">
    <i class="el-icon-tickets"></i>
    <span slot="title">历史</span>
  </el-menu-item>
  <el-menu-item index="5">
    <i class="el-icon-user-solid"></i>
    <span slot="title">客户</span>
  </el-menu-item>
  <el-menu-item index="6">
    <i class="el-icon-s-order"></i>
    <span slot="title">工单</span>
  </el-menu-item>
  <el-menu-item index="7">
    <i class="el-icon-s-data"></i>
    <span slot="title">统计</span>
  </el-menu-item>
  <el-menu-item index="8">
    <i class="el-icon-setting"></i>
    <span slot="title">设置</span>
  </el-menu-item>
  <el-menu-item index="9">
    <i class="el-icon-switch-button"></i>
    <span slot="title">退出</span>
  </el-menu-item>
  
</el-menu>
      </div>
    </div>
</template>
<script>
export default {
  name:"Dao"
}
</script>
<style>
  .app{
    position: fixed;
    left: 0px;
    z-index: 99;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 500px;
    float: left;
  }
  .el-menu-item{
    height: 76.6px;
    background: #171c3a;
    border: none;
    line-height: 71.6px;
    width: 83px;
    text-align: center;
  }
  .el-menu-item i{
    color: #ffffff;
    font-size: 50px;
  }
  .item{
    float: left;
  }
  .item img{
    position: absolute;
    top: 10px;
    left: 10px;
  }
  
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>