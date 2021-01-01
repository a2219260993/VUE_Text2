<template>
  <div>
    <div class="top">
      <b>COMPLETED</b>
    </div>
    <div class="list">
      <ui>
        <li v-for="itme in doesList"
            :key="itme.key"
            @click="change(itme.key)">
          <van-checkbox v-model=itme.targe
                        icon-size="24px">
            <div class="box"><span class="dataColor"><s>{{itme.data}}</s> </span><span class="right">
                <van-icon name="calendar-o" />
                <span class="listTime">{{itme.time}}</span>
              </span></div>
          </van-checkbox>
        </li>
      </ui>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['doesList'])
  },
  methods: {
    change (id) {
      console.log(id);
      this.$store.commit("changeTarge", id)
    }
  }
}
</script>
.<style lang="scss" scoped>
.top {
  margin-top: 30px;
  margin-left: 30px;
  text-align: left;
  font-size: 14px;
  color: #6a6a6a;
}
.list {
  list-style-type: none;
  margin-top: 15px;
  margin-left: 30px;
  li {
    width: 90%;
    height: 50px;
    border-radius: 10px;
    margin: 10px 0;
    background-color: #45446c;
  }
}
.van-checkbox {
  padding-left: 20px;
}
.box {
  color: rgb(146, 132, 132);
  line-height: 50px;
  font-size: 20px;
  width: 250px;
  .listTime {
    font-size: 16px;
    margin-left: 5px;
  }
}
.dataColor {
  font-size: 20px;
  float: left;
}
.right {
  float: right;
  margin-right: 5px;
  .van-icon {
    position: relative;
    top: 3px;
  }
}
</style>