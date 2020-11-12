<template>
    <div id="app">
        <div class="img">
            <img src="../assets/img/zhuce.png" width="700px">
        </div>
        <div class="deng">
            <h1>注册七尾客服云</h1>
            <p class="p1">
                <span>账号</span>
                <input type="text" class="input1" v-model="text" placeholder="请输入邮箱或手机号码" @click="border()">
            </p>
            <p class="p2">
                <span>密码</span>
                <input type="password" class="input2" v-model="psd" placeholder="请输入密码">
            </p>
            <p class="yzm">
                <span>验证码</span>
                <input type="text" class="input3" v-model="yzm" placeholder="请输入右侧图形验证码">
                <img src="../assets/img/yzm.png" width="80px">
            </p>
            <p class="btn">
                <el-button :plain="true" @click="open3" style="background: #E6A23C;color:#ffffff;">注册</el-button>
            </p>
            <router-link to="/Deng" tag="p" class="p4">已有账号，去登录</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'Deng',
    data() {
    return {
    text:"",
    psd:"",
    yzm:"",
      input1: '',
      input2: ''
    }
  },
  methods:{
       open3() {
        if(this.text==""||this.psd==""){
        this.$message({
          message: '请填写账号或密码',
          type: 'warning'
        });
        }else if(this.yzm!="rdrp"){
            this.$message({
          message: '验证码错误',
          type: 'warning'
        });
        
        }else{
            alert("注册成功")
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
    .yzm{
        width: 350px;
        background: #ffffff;
        border-radius: 2px;
        margin-top: 20px;
    }
    .yzm span{
        padding: 0px 10px;
        color: #006eff;
    }
    .input3{
        width: 200px;
        border: none;
        height: 45px;
        font-size: 15px;
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
        margin-top: 50px;
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