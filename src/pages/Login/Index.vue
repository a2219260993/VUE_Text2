<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #32315b !important;
  color: #b1b2b3;
}
.van-row {
  height: 60px;
  line-height: 60px;
}
.van-icon {
  margin-top: 10px;
  // background-color: black;
}
</style>

<template>
  <div class="container">
    <van-row type="flex"
             justify="space-between">
      <van-col span="4">
        <van-icon name="apps-o"
                  size="35" />
      </van-col>
      <van-col span="9"><img src="@/assets/背景.png"
             alt="背景"></van-col>
    </van-row>
    <router-view name='add'></router-view>
    <router-view name='todo'></router-view>
    <router-view name='does'></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
