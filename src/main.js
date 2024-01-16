//全局引入echarts
import * as echarts from 'echarts';
//需要挂载到Vue原型上
Vue.prototype.$echarts = echarts;
import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../font_4396150_dpzkliirotc/iconfont.css';

Vue.use(ViewUI);
Vue.use(ElementUI);




Vue.config.productionTip = false
new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app')



