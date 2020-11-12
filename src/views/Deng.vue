<template>
    <div id="app">
        <div class="img">
            <img src="../assets/img/denglu.png" width="700px">
        </div>
        <div class="deng">
            <h1>登录七尾客服云</h1>
            <p class="p1">
                <span>账号</span>
                <input type="text" v-model="text" class="input1" placeholder="请输入注册时填写的邮箱" @click="border()">
            </p>
            <p class="p2">
                <span>密码</span>
                <input type="password" v-model="psd" class="input2" placeholder="请输入密码">
            </p>
            <p class="p3">
                忘记密码请联系客服人员
            </p>
            <p class="btn">
                <el-button :plain="true" @click="open3" style="background: #E6A23C;color:#ffffff;">登录</el-button>
            </p>
            <router-link to="/Zhu" tag="p" class="p4">没有账号，现在去注册</router-link>
        </div>
    </div>
</template>
<script>
export default {
     data() {
    return {
      text:"",
      psd:"",
      input1: '',
      input2: '',
    }
  },
    methods:{
       open3() {
        if(this.text==""||this.psd==""){
        this.$message({
          message: '请填写账号或密码',
          type: 'warning'
        });
        }else if(this.text!="admin"&&this.psd!="123"){
            this.$message({
          message: '账号或密码错误',
          type: 'warning'
        });
        
        }else if(this.text=="admin"&&this.psd=="123"){
            this.$router.push({
                path:'./Shou'
            })
        }
       
      }
  },
   
 
}
</script>
<style scoped>
    #app{
        width: 100%;
        height: 650px;
        background-color: #e6f1ff;
    }
    .img{
        float: left;
        margin-top: 50px;
        margin-left: 100px;
    }
    .deng{
        width: 450px;
        height: 500px;
        float: left;
        background-color: #006eff;
        margin-top: 80px;
        border-radius: 5px;
    }
    h1{
        color: #ffffff;
        padding: 45px;
    }
    .input1{
        width: 285px;
        border: none;
        height: 45px;
        font-size: 15px;
    }
    .p1{
        width: 350px;
        background-color: #ffffff;
        border-radius: 2px;
    }
    .p1 span{
        padding: 0px 15px;
        color: #006eff;
    }
    .p2{
        border-radius: 2px;
        width: 350px;
        background-color: #ffffff;
        margin-top: 20px;
    }
    .p2 span{
        padding: 0px 15px;
        color: #006eff;
    }
    .input2{
        width: 285px;
        border: none;
        height: 45px;
        font-size: 15px;
    }
    .p3{
        float: right;
        margin-right: 50px;
        color: #ffffff;
        margin-top: 15px;
        font-size: 13px;
    }
    .btn{
        text-align: center;
        margin-top: 80px;
    }
    .btn button{
        width: 350px;
        height: 50px;
        border: none;
    }
    .p4{
        text-align: center;
        margin-top: 20px;
        font-size: 13px;
        color: #ffffff;
        cursor: pointer;
    }
</style>