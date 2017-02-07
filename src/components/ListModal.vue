<template>
  <div class="modal">
    <div class="content">
      <div class="topbar">
        <span @click="$emit('close')">取消</span>
        <i>0</i>
      </div>
      <div class="toolbar">
        <span>从已有设备选择</span>
        <div>
          <i>1</i>
          <i>2</i>
          <i>3</i>
        </div>
      </div>
      <input class="searchbar" placeholder="搜索设备名称" />
      <div class="list">
        <div v-for="a in list">
          <p class="a">
            <i class="iconfont icon-icon_plus action" v-if="!a.open" @click="a.open = !a.open"></i>
            <i class="iconfont icon-icon_minus action" v-if="a.open" @click="a.open = !a.open"></i>
            <span class="line">—</span>
            <span class="name">
               <i class="iconfont icon-icon_unknown"></i>
               <span class="text">{{a.name}}</span>
            </span>
          </p>
          <div v-for="b in a.branch" v-show="a.open">
            <p class="b">
              <i class="iconfont icon-icon_plus action" v-if="!b.open" @click="b.open = !b.open"></i>
              <i class="iconfont icon-icon_minus action" v-if="b.open" @click="b.open = !b.open"></i>
              <span class="line">—</span>
              <span class="name">
                <i class="iconfont icon-icon_unknown"></i>
                <span class="text">{{b.name}}</span>
              </span>
            </p>
            <div v-for="c in b.devices" v-show="b.open">
              <p class="c">
                <span class="line">—</span>
                <span class="name">
                  <i class="iconfont icon-icon_app"></i>
                  <span class="text">{{c}}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottombar">
    </div>
  </div>
</template>

<script>
  const logo = require('assets/images/logo.png')

  export default {
    name: 'ListModal',
    data() {
      return {
        list: {
          a: {
            name: '上海部门',
            open: true,
            branch: {
              a1: {
                name: '上海技术部',
                open: true,
                devices: [1111111, 2222222, 3333333],
              },
              a2: {
                name: '上海运维部',
                open: true,
                devices: [4444444, 555555, 6666666],
              },
            },
          },
          b: {
            name: '北京部门',
            open: true,
            branch: {
              a1: {
                name: '北京技术部',
                open: true,
                devices: ['aaaaa', 'bbbbb'],
              },
            },
          },
        },
        logo,
        isAopen: true,
        isBopen: true,
        adminShow: 'superAdmin',
      }
    },
    methods: {},
    events: {},
  }
</script>

<style lang="less" scoped>
  @import "../styles/colors";

  .modal {
    position: absolute;
    right: 25px;
    top: 130px;
    width: 350px;
    height: 740px;
    background: #fff;
    color: @background;
    .content {
      margin: 30px 30px 0;
    }
  }

  .topbar, .toolbar {
    display: flex;
    justify-content: space-between;
  }

  .topbar {
    margin: 5px 0;
  }

  .toolbar {
    padding: 18px 0;
    border-bottom: 1px solid @dark;
  }

  .searchbar {
    width: e("calc(100% - 20px)");
    margin: 11.5px 0;
    padding: 10px;
    background: rgba(36, 37, 43, 0.05);
  }

  .list {
    .b {
      padding-left: 35px;
    }
    .c {
      padding-left: 75px;
    }
    .action {
      color: @highlight;
      cursor: pointer;
    }
    .line {
      color: @dark;
    }
    .name {
      // margin-left: 15px;
      .text {
        margin-left: 6px;
      }
    }
  }

  .bottombar {
    width: 100%;
    height: 78px;
    position: absolute;
    bottom: 0;
  }
</style>
