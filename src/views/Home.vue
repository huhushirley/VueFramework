<template>
  <div class="global--view">
    <header class="global--topbar">
      <div class="test">Topbar</div>
    </header>
    <main class="global--content">
      <div class="test">Content</div>
      <p class="test" @click="isListModalVisible = true">打开列表弹框</p>
    </main>
    <ListModal v-if="isListModalVisible" @close="isListModalVisible = false" />
  </div>
</template>

<script>
  import ListModal from 'components/ListModal.vue'

  export default {
    name: 'Home',
    components: {
      ListModal,
    },
    data() {
      return {
        isListModalVisible: false,
      }
    },
  }
</script>

<style lang="less" scoped>
  @import "../styles/colors.less";
  @import "../styles/fonts";

  .test {
    .proximanova-regular(32px, 400, #fff);
  }

  .white(@height) {
    height: @height;
    background: #fff;
  }

  .list-tabbar {
    padding: 0;
    margin: 10px 0;
  }

  .radiobar {
    display: flex;
    line-height: 12px;
  }

  .tabbar {
    height: 46px;
    line-height: 46px;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    li {
      height: 46px;
      line-height: 46px;
      list-style: none;
      margin-right: 30px;
      cursor: pointer;
    }
    .active {
      border-bottom: 2px solid #000;
    }
  }

  .results {
    .white(180px);
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .result {
      width: 100%;
      border-right: 1px solid #000;
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        .value {
          margin-bottom: 12px;
        }
        .title {
          margin-bottom: 20px;
        }
        .border-bottom {
          width: 30px;
          border-bottom: 1px solid #000;
        }
        .rate {
          margin-top: 21px;
        }
      }
    }
  }

  .graph {
    .white(280px);
    display: flex;
    flex-direction: column;
    .container {
      height: e("calc(100% - 57px)");
      width: e("calc(100% - 40px)");
      padding: 0 20px;
    }
    .list-tabbar {
      padding: 0;
      margin: 0 20px 10px 20px;
    }
  }

  .table {
    display: table;
    width: 100%;
    margin: 10px 0;
    .header {
      .proximanova-regular(12px, 400, @dark);
      background: #f6f6f6;
    }
    .unit {
      .proximanova-regular(12px, 400, @dark);
      background: #ffffff;
      margin-bottom: 6px;
    }
    .row {
      display: flex;
      height: 56px;
      white-space: nowrap;
      justify-content: space-around;
      div {
        display: flex;
        align-items: center;
      }
      .cell-check {
        width: 36px;
      }
      .cell-avatar {
        width: 36px;
        justify-content: center;
        .avatar {
          width: 36px;
          height: 36px;
        }
      }
      .cell-name {
        padding-left: 20px;
        width: 80px;
      }
      .cell-gender {
        width: 36px;
        justify-content: center;
      }
      .cell-creatAt {
        justify-content: center;
        width: 150px;
      }
      .cell-address {
        width: 100px;
        justify-content: center;
      }
      .cell-from {
        width: 165px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>
