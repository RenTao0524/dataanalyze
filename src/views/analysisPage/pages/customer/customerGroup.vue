<template>
  <div class="customerGroup">
    <div>
      <label @click="handleChangeRouter">用户分群列表</label>
      <label>| 更新时间：{{updateTime}} 总人数：{{totalNum}}</label>
    </div>
    <div>
      <span>满足如下条件的用户</span>
    </div>
    <div class="userAttribute">
      <span>用户属性满足</span>
      <div class="relation">
        <span>或</span>
      </div>
      <div>
        <div v-for='i in countNumber' :key='i'>
          <el-select v-model="value" placeholder="请选择">
            <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
            </el-option>
          </el-select>

          <el-select v-model="value" placeholder="请选择">
            <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
            </el-option>
          </el-select>

          <img v-if='i === countNumber' src="../../../../assets/images/add.png" @click="handleAdd" alt="">
          <img v-else src="../../../../assets/images/remove.png" @click="handleRemove" alt="">
        </div>
      </div>
    </div>
    <div>提及</div>
    <div>
      <el-button>保存</el-button>
      <el-button>删除</el-button>
      <el-button>执行</el-button>
    </div>
  </div>
</template>

<script>
import customerGroup from '@/api/customerGroup'

export default {
  name: 'customerGroup',
  data() {
    return {
      value: '',
      value: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      totalNum: 4,
      updateTime: '2018-03-30 15:00:00',
      tableData: [],
      countNumber: 2,
      userAttribute: []
    }
  },
  created() {
    customerGroup.getClusteringResult(1, 2).then(res => {
      console.log(res)
      this.tableData = res.customerList
    })
  },
  methods: {
    handleChangeRouter() {
      const list = window.location.href.split('/')
      if (list.indexOf('customerGroup') !== -1) {
        this.$router.push('customerTable')
      } else {
        this.$router.push('customerGroup')
      }
    },
    // 用户属性添加和移除
    handleAdd() {
      this.countNumber++
    },
    handleRemove() {
      this.countNumber--
    }
  }
}
</script>

<style lang="scss">
  .customerGroup {
    overflow-y: auto;
    .userAttribute {
      display: flex;
      .relation {
        height: 50px;
        width: 50px;
        border: 1px solid black;
        border-right: none;
        span {
          border: 1px solid black;
          position: relative;
          top: 10px;
          left: -10px;
          background-color: #ffffff;
        }
      }
    }
  }
</style>
