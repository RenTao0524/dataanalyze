<template>
  <div class="statement-filter">
    <div class='close'>
      <span>收起<img src="../../../../../assets/images/close.png" alt=""></span>
    </div>
    <div class="indicator">
      <span>请添加指标</span>
      <el-cascader :options="indicator" v-model="selectedOptions" :show-all-levels="false" />
    </div>
    <div class="dimension-container">
      <label>需要查看的维度</label>
      <div class="dimension-filter">
        <div v-for="n in dimensionCount" :key="n">
          <span>按</span>
          <el-cascader :options="indicator" :show-all-levels="false" />
          <span>查看</span>
          <svg-icon icon-class='add' @click.native="addDimensionFilter" />
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
import { mapGetters } from 'vuex'

export default {
  name: 'filterPart',
  data() {
    return {
      // 维度筛选条件计数
      dimensionCount: 1,
      selectedOptions: []
    }
  },
  computed: {
    ...mapGetters([
      'indicator',
      'edit_option_list'
    ])
  },
  created() {
  },
  methods: {
    addDimensionFilter() {
      this.dimensionCount++
      console.log(this.indicator)
    },
    addFilter() {
    }
  }
}
</script>

<style lang="scss">
  .statement-filter {
    background-color: #ffffff;
    & > div {
      border-bottom: 1px solid #e8e3e3;
      box-sizing: border-box;
    }
    .close {
      text-align: center;
      cursor: pointer;
      span {
        display: inline-block;
        color: #555555;
        font-size: 0.75rem;
        line-height: 2rem;
      }
    }
    .indicator {
      span {
        display: inline-block;
        color: #555555;
        font-size: 0.75rem;
        line-height: 2rem;
      }
      input {
        display: inline-block;
        color: #222222;
        font-size: 0.75rem;
        line-height: 2rem;
      }
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
