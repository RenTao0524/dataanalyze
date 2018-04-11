<template>
  <div class="statement-filter">
    <div>
      <label>请添加指标</label>
      <el-cascader :options="options" :show-all-levels="false" />
    </div>
    <div class="dimension-container">
      <label>需要查看的维度</label>
      <div class="dimension-filter">
        <div v-for="n in dimensionCount" :key="n">
          <span>按</span>
          <el-cascader :options="options" :show-all-levels="false" />
          <span>查看</span>
          <svg-icon icon-class='add' @click.native="addDimension" />
        </div>
      </div>
    </div>
    <div>
      <label>筛选条件</label>
      <div>
        <el-input placeholder="请输入内容" style="width: 100px"></el-input>
        <el-input placeholder="请输入内容" style="width: 100px"></el-input>
        <el-input placeholder="请输入内容" style="width: 100px"></el-input>
        <svg-icon icon-class='add' @click.native="addFilter" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'filterPart',
  data() {
    return {
      // 维度筛选条件计数
      dimensionCount: 1,
      options: [
        {
          value: 'zhinan1',
          label: '指南1',
          children: [
            {
              value: 'zhinan5',
              label: '指南5'
            },
            {
              value: 'zhinan6',
              label: '指南6'
            }
          ]
        },
        {
          value: 'zhinan2',
          label: '指南2'
        },
        {
          value: 'zhinan3',
          label: '指南3'
        },
        {
          value: 'zhinan4',
          label: '指南4'
        }
      ]
    }
  },
  methods: {
    addDimensionFilter() {
      this.dimensionCount++
    },
    addFilter() {
    }
  }
}
</script>

<style lang="scss">
  .statement-filter {
    height: 300px;
    background-color: #ffffff;
    & > div {
      border-bottom: 1px solid #e8e3e3;
      box-sizing: border-box;
    }
    .dimension-container {
      display: flex;
      justify-content: flex-start;
      .dimension-filter {
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
