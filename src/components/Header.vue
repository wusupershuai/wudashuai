<template>
  <div class="header">
    <div class="header-left">ElementUi管理后台</div>
    <div class="header-right">
      <i class="el-icon-menu"></i>
      <div>
        <i class="el-icon-s-tools"></i>
        <i class="el-icon-s-comment"></i>
        <i class="el-icon-bell"></i>
        <p>Admin</p>
        <i class="el-icon-arrow-down"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  background: #0086f1;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 9999;
}
.header-left {
  width: 19.5%;
  display: flex;
  justify-content: center;
}
.header-right {
  box-sizing: border-box;
  flex-grow: 1;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-right div {
  height: 100%;
  display: flex;
  align-items: center;
}
.header-right div p {
  margin-right: 10px;
}
.header-right div i {
  margin-right: 15px;
}
.header-right div i:last-child {
  margin-right: 0px;
}
</style>