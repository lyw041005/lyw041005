<style>
.layout {
  border: 1px solid #27265c;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #27265c;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}

.ivu-menu-vertical.ivu-menu-light:after {
  width: 0px !important;
}
.ivu-menu-item-active:not(.ivu-menu-submenu) {
  background-color: rgb(14, 17, 67) !important;
  color: white !important;
}
.layout-nav {
  width: 1140px;

  margin: 0 auto;
  float: left;
 margin-left: -100px;
 margin-right: -60px;

}
.el-tabs__nav-wrap::after{
  background-color: rgb(11,14,64) !important;
}
.el-card__header{
  border-bottom: #27265c solid 1px !important;
}
.gl-chang{
  width: 50px;
  height: 3px;
  background: linear-gradient(to right, #02c2ef, #067ef4);
  float: left;
  margin-top: 10px;
}
.gl-chang2{
  width: 50px;
  height: 3px;
  background: linear-gradient(to right, #D22DE2, #532CC5);
  float: left;
  margin-top: 10px;
}
.gl-you{
 
  float: right;
  margin-left: 20px;
  
}
.gl-you span{
  float: left;
  margin-left: 10px;

}
.nav-right li{
  margin-left: 10px;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header style="background-color: #27265c;">
        <Menu mode="horizontal" theme="dark" active-name="1" style="background-color: #27265c;">
          <img src="../assets/logo1.png" style="width: 150px; height: 60px; float: left;">
          <div class="layout-logo">
           
          </div>
          <div class="layout-nav">
              <!-- <Tabs>
        <TabPane label="macOS" icon="logo-apple">标签一的内容</TabPane>
        <TabPane label="Windows" icon="logo-windows">标签二的内容</TabPane>
        <TabPane label="Linux" icon="logo-tux">标签三的内容</TabPane>
    </Tabs> -->
            <MenuItem name="1">
            <i class="iconfont">&#xe61b;</i>
            运行监控
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-paper" />
            生产管理
            </MenuItem>
            <MenuItem name="3" ><router-link to="/DianZhanWeiHu">
            <i class="iconfont">&#xe647;</i>
            电站维护
          </router-link>
            </MenuItem>
          
            <MenuItem name="4">
            <i class="iconfont">&#xe70f;</i>
            系统管理
            </MenuItem>
            <ul style="float: right; list-style: none;" class="nav-right">
              <li class="iconfont" style="color: white; font-size: 24px; float:left;">&#xe64b;</li>
              <li class="iconfont" style="color: white; font-size: 24px; float:left;">&#xe856;</li>
              <li class="iconfont" style="color: white; font-size: 20px; float:left;">&#xe631;</li>
            </ul>
            <!-- 头像 -->
            <div class="demo-avatar" style="float: right;">
             
              <img src="../assets/toxiang.jpg" style="width: 30px; height: 30px; float: left; margin-top: 20px;">
              <p style="float: left; color: white; margin-left: 10px;">刘义宛</p>
            </div>
            
            <!-- 时间 -->
            <MenuItem name="3" style="float: right;">
            <div>
              <p style="float: left;">{{ time }}&nbsp;&nbsp;</p>
              <p style="float: left;">{{ date }}</p>
            </div>
            </MenuItem>
            

          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{ background: '#27265c' }" style="border: #27265c solid 1px; ">
        
          <Menu :theme="theme" active-name="1" style="width: 199px; background-color: #27265c; color: white;"
            class="custom-menu">

            <MenuItem name="1">
            <Icon type="md-home" />首页
            </MenuItem>
            <MenuItem name="2">
            <i class="iconfont">&#xe8c5;</i>
            电力监控
            </MenuItem>

            <MenuItem name="3">
            <i class="iconfont">&#xe625;</i>
            光伏区监控
            </MenuItem>
            <MenuItem name="4">
            <i class="iconfont">&#xe603;</i>
            设备分布图
            </MenuItem>
            <MenuItem name="5">
            <i class="iconfont">&#xe87e;</i>
            设备实时数据
            </MenuItem>
            <MenuItem name="6">
            <i class="iconfont">&#xe63c;</i>
            故障告警
            </MenuItem>
            <MenuItem name="7">
            <i class="iconfont">&#xe61b;</i>远程控制
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Breadcrumb>
            <div style="background-color: rgb(11,14,64); ">
              <el-tabs style="margin-top: -40px; background-color: rgb(11,14,64); ">
                <el-tab-pane style="background-color: rgb(11,14,64); margin-left: 20px;">


                  <div class="grid-layout">
                    <el-row :gutter="20">
                      <el-col :xs="24" :sm="12" :md="8">
                        <el-card style="color: white; background-color: rgb(26, 25, 79); height: 300px; margin-bottom: 20px; border: #27265c solid 1px;">
                          <div slot="header" class="iconfont" style="border-bottom: solid 1px rgb(26, 25, 79);">&#xe636;&nbsp;发电与功率</div>
                          <biaoqian>
                            <MyHotComponent></MyHotComponent>

                          </biaoqian>

                        </el-card>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="8">
                        <el-card style=" background-color: rgb(26, 25, 79); height: 300px; border: #27265c solid 1px;">
                          <div slot="header" class="iconfont" style="color: white;">&#xe6e5;&nbsp;节能减排</div>
                          <div>

                            <JieNengPaiJian></JieNengPaiJian>

                          </div>
                        </el-card>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="8">
                        <el-card style="color: white; background-color: rgb(26, 25, 79); height: 300px; border: #27265c solid 1px;">
                          <div slot="header" class="iconfont">&#xe622; &nbsp;电站基本信息</div>
                          <div>
                            <JinDuTiao></JinDuTiao>
                          </div>
                        </el-card>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :xs="24" :sm="12">
                        <el-card style="color: white; background-color: rgb(26, 25, 79); border: #27265c solid 1px;">
                          <div slot="header" class="iconfont">&#xe619;&nbsp;日功率-辐射强度
                            <div class="gl-you">
                              <p class="gl-chang2"></p>
                              <span>实时功率</span>
                              <i class="iconfont" style="margin-left: 15px;">&#xe8f0;</i>
              
                            </div>
                            <div class="gl-you">
                              <p class="gl-chang"></p>
                              <span>辐射强度</span>
                            </div>
                            
                          </div>

                          <YYDS></YYDS>
                        </el-card>
                      </el-col>
                      <el-col :xs="24" :sm="12">
                        <el-card style="color: white; background-color: rgb(26, 25, 79); border: #27265c solid 1px;">
                          <div slot="header" class="iconfont">&#xe649;&nbsp;日累计发电量
                            <div class="gl-you">
                              <p class="gl-chang2"></p>
                              <span>实时功率</span>
                              <i class="iconfont" style="margin-left: 15px;">&#xe8f0;</i>
                            </div>
                            <div class="gl-you">
                              <p class="gl-chang"></p>
                              <span>辐射强度</span>
                            </div>
                          </div>
                          <div>
                            <GlobalXuanran></GlobalXuanran>
                          </div>
                        </el-card>
                      </el-col>
                    </el-row>
                  </div>


                </el-tab-pane>


              </el-tabs>
            </div>
          </Breadcrumb>
          <Content :style="{ padding: '24px', minHeight: '280px', background: '#fff' }">

          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>

import MyHotComponent from './MyHotComponent.vue';
import GlobalXuanran from './GlobalXuanran.vue';
import YYDS from './YYDS.vue';
import JieNengPaiJian from './JieNengPaiJian.vue';
import JinDuTiao from './JinDuTiao.vue';
export default {
  components: {
    MyHotComponent,
    GlobalXuanran,
    YYDS,
    JieNengPaiJian,
    JinDuTiao

  },
  data() {
    return {
      time: '',
      date: '',
      // toxiang: toxiang
    }
  },
  mounted() {
    this.getCurrentTime();
  },
  methods: {
    getCurrentTime() {
      const now = new Date();
      const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
      const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };

      this.time = now.toLocaleTimeString([], timeOptions);
      this.date = now.toLocaleDateString([], dateOptions);
    }
  }

}

</script>
