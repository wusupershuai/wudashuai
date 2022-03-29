<template>
  <div class="table">
    <Header></Header>
    <div class="main">
      <!-- 布局容器 -->
      <el-container>
        <!-- 左边 -->
        <el-aside style="background-color: rgb(50, 64, 87)" class="aside">
          <el-menu background-color="rgb(50,64, 87)" text-color="#bfcbd9">
            <!-- 首页 -->
            <el-menu-item index="/" class="active">
              <i class="el-icon-menu"></i>
              <span slot="title">
                <router-link :to="{name:'homepage'}" active-class="sign">首页</router-link>
              </span>
            </el-menu-item>

            <!-- 文章管理 -->
            <el-submenu index="2" class="active">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>文章管理</span>
              </template>
              <el-menu-item>
                <router-link :to="{name:'articlelist'}" active-class="sign">文章列表</router-link>
              </el-menu-item>
              <el-menu-item>
                <router-link :to="{name:'examplelist'}" active-class="sign">多层级路由示例</router-link>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>

        <!-- 右边 -->
        <el-container>
          <el-header>
            <!-- 面包屑 -->
            <div>
              <el-breadcrumb separator="/">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item v-for="(item,index) in this.$route.meta" :key="index">{{item}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
export default {
  name:"HomeView",
  components:{
    Header
  }
}
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
.table {
  padding-top: 50px;
}
.aside .active {
  width: 100%;
  color: #bfcbd9;
  background-color: rgb(50, 64, 87);
}
.aside .active a {
  display: inline-block;
  width: 100%;
  color: #bfcbd9;
}
.aside .active a.sign {
  color: #20a0ff;
}

.main >>> .el-submenu__title:hover,
.main >>> .el-menu-item:hover {
  background-color: #48576a !important;
}
.el-menu--inline .el-menu-item {
  background-color: #1f2d3d !important;
}

.main >>> .el-header {
  height: 30px;
  display: flex;
  align-items: center;
}

.el-main {
  margin-top: -25px;
}
</style>