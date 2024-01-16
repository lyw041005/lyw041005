<template>
  <div>
      <div ref="chart" style="height: 500px; width: 800px;">
  
      </div>
    </div>
    
  
</template>
<script>
// import Vue from 'vue'
import * as echarts from 'echarts'

export default {
  mounted() {
    // 在组件挂载后，初始化Echart图表
    this.initChart()
  },
  methods: {
    format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      },
    initChart() {
      // 使用Echart创建一个图表实例
      const chart = echarts.init(this.$refs.chart)
      

      // 模拟一些数据
      // const data = [220, 302, 181, 234, 210, 290, 150]

      // 配置Echart的选项
      const options = {
  calculable: true,
  xAxis: [
    {
      type: 'category',
      // prettier-ignore
      data: ['0', '6', '9', '12', '15', '18', '21', '24']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Rainfall',
      type: 'bar',
      barWidth: 10,
      data: [
        1000, 1600, 2000, 1800, 1700, 2000, 2300, 1400
      ],
      itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(
          0, 0, 0, 1,
          [
            { offset: 1, color: 'rgb(62, 84, 206)' },
            { offset: 0, color: 'rgb(20, 243, 247)' }
          ]
        )
      }
    },
      // markPoint: {
      //   data: [
      //     { type: 'max', name: 'Max' },
      //     { type: 'min', name: 'Min' }
      //   ]
      // },
      // markLine: {
      //   data: [{ type: 'average', name: 'Avg' }]
      // }
    },
    {
      name: 'Evaporation',
      type: 'bar',
      barWidth: 10,
      data: [
        700, 1100, 1400, 1300, 1200, 1400, 1700, 1000
      ],
      itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(
          0, 0, 0, 1,
          [
          { offset: 0, color: 'rgb(229, 60, 252)' },
            { offset: 1, color: 'rgb(81, 60, 196)' }
          ]
        )
      }
    },
      // markPoint: {
      //   data: [
      //     { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
      //     { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
      //   ]  最大值最小值
      // },
      // markLine: {
      //   data: [{ type: 'average', name: 'Avg' }]
      // }
    }
  ]
};
    

        // 使用配置项渲染图表
      chart.setOption(options)
  }
  }
}

</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
