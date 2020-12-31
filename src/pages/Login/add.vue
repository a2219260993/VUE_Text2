
<template>
  <div>
    <div class="input">
      <input type="text"
             placeholder="Add Item"
             v-model="data"
             @keydown.enter="add">
      <button class="btn-add"
              @click="add"><svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-jia1"></use>
        </svg></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  width: 30px;
  height: 30px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  // margin: auto;
  position: relative;
  top: -1px;
  right: 6px;
}
.btn-add {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  position: relative;
  top: 5px;
  right: 5px;
}
.input {
  background-color: #292852;
  height: 60px;
  width: 90%;
  margin: 0 auto;
  border-radius: 30px;
  input {
    background-color: #292852;
    border: none;
    height: 60px;
    width: 85%;
    border-radius: 30px;
    color: #999999;
    font-size: 20px;
  }
  input::-webkit-input-placeholder {
    color: #b0b1d0;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #b0b1d0;
  }
  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #b0b1d0;
  }
  input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #b0b1d0;
  }
}
</style>
<script>

export default {
  data () {
    return {
      data: ''
    }
  },
  methods: {
    add: function () {
      if (this.data !== '') {
        this.$store.commit("addToList", this.data)
        this.data = ''
      } else {
        this.$notify('请输入内容');
      }
    }
  }
}
</script>
