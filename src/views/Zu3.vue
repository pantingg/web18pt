<template>
  <div id="app">
    <Tou title="访客"></Tou>
    <div class="app">
      <div class="div1">
        <div class="sd">
          <div>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus"
                  >狮子头</el-dropdown-item
                >
                <el-dropdown-item icon="el-icon-circle-plus-outline"
                  >螺蛳粉</el-dropdown-item
                >
                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-check"
                  >蚵仔煎</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>

          <div>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus"
                  >狮子头</el-dropdown-item
                >
                <el-dropdown-item icon="el-icon-circle-plus-outline"
                  >螺蛳粉</el-dropdown-item
                >
                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-check"
                  >蚵仔煎</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus"
                  >狮子头</el-dropdown-item
                >
                <el-dropdown-item icon="el-icon-circle-plus-outline"
                  >螺蛳粉</el-dropdown-item
                >
                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-check"
                  >蚵仔煎</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>

        <div class="block">
          <el-date-picker
            v-model="value"
            type="daterange"
            start-placeholder="请选择日期"
            end-placeholder="请选择日期"
            :default-time="['00:00:00', '23:59:59']"
          >
          </el-date-picker>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tou from "../components/Tou";
export default {
  name: "Zu3",
  components: {
    Tou,
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>
<style scoped>
.app {
  width: 1295px;
  margin-left: 70px;
  float: right;
  background: #e6f1ff;
  margin-top: 60px;
  height: 500px;
}
.div1 {
  width: 1280px;
  height: 300px;
  border: 1px solid red;
  margin-top: 20px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.sd {
  width: 400px;
  float: left;
}
.sd div {
  width: 100px;
  margin: 10px 10px;
  background: #f2f2f2;
  float: left;
}
.block {
  float: left;
  margin: 10px 0px;
  background: #f2f2f2;
}
</style>