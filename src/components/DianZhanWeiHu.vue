<template>
    <div>
        <div ref="chart" style="height: 400px; width: 800px;">
           111
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
  
          color: ['#12739B', '#7C23A8'],
          
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          
          toolbox: {
            
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['0','3', '6', '9', '12', '15', '18', '21']
            }
          ],
          yAxis: [
            {
              type: 'value',
              
            }
          ],
          series: [
            {
              name: 'Line 1',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                
                  {
                    offset: 0,
                    color: 'rgb(9, 184, 202)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(37, 37, 107)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [700, 1100, 900, 2000, 1000, 1700, 700,800]
            },
            {
              name: 'Line 2',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              label: {
                show: true,
                position: 'top'
              },
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  
                {
                    offset: 0,
                    color: 'rgb(182, 42, 219)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(79, 31, 130)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [700, 750, 1400, 1600 ,1100, 2000, 1000,600]
            }
          ],
          
        }
      
  
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
  