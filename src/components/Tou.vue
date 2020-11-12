<template>
    <div id="app">
        <div class="div1">
            <span>{{title}}</span>
        </div>
        <div class="div3">
            <img src="../assets/img/yh.png" >
            <div class="div3-1">
                <p>在线</p>
                <p>离线</p>
            </div>
        </div>
        <div class="div2">
            <i class="el-icon-message-solid"></i>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"Tou",
    props:{
        title:{
            type:String,
            default:'首页'
        }
    }
}
</script>
<style scoped>
    #app{
        width: 100%;
        height: 60px;
        background: #ffffff;
        position: fixed;
        top: 0%;
        right: 0px;
        z-index: 9;
    }
    .div1{
        float: left;
        line-height: 50px;
        margin-left: 90px;
        font-size: 20px;
    }
    .div3{
        float: right;
        padding-right: 10px;
        position: relative;
    }
    .div3-1{
        width: 140px;
        height: 80px;
        position: absolute;
        border: 1px solid #55baf5;
        background: #ffffff;
        display: none;
        text-align: center;
    }
    .div3-1 p{
        line-height: 40px;
    }
    .div3-1 p:hover{
        background: rgb(186, 226, 250);
        color: red;
        cursor: pointer;
    }

    .div3:hover div{
        display: block;
    }
    .div2{
        line-height: 60px;
        float: right;
        padding-right: 30px;
        font-size: 20px;
        cursor: pointer;
    }
    .div2:hover{
        color: blue;
    }
    
</style>