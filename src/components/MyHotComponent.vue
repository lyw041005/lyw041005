<template>
  <div>
    <div class="leiji">

      <div class="huang iconfont" style="color: white; font-size: 20px;">&#xeb17;</div>
      <div style="width: 80%; height: 40px; float: left;">
        <p style=";">累计发电</p>
        <span style="color: white;float: right; ">kwh</span>
        <p style="color:#faeb41 ;  float: right; font-size: 18px;">1235689256.00</p>
        <Progress :percent="90" :stroke-color="['#e5983c', '#faeb41']" style="float: left;" />
      </div>
    </div>
    <div class="leiji">
      <div class="lan iconfont" style="color: white; font-size: 20px;">&#xeb17;</div>
      <div style="width: 80%; height: 40px; float: left;">
        <p style=";">今日发电</p>
        <span style="color: white;float: right;">kwh</span>
        <p style="color:#02c2ef ;  float: right;  font-size: 18px;">4567.00</p>
        <Progress :percent="60" :stroke-color="['#067ef4', '#02c2ef']" style="float: left;" />
      </div>
    </div>

    <div class="leiji">
      <div class="zi iconfont" style="color: white; font-size: 20px;">&#xed50;</div>
      <div style="width: 80%; height: 40px; float: left;">
        <p style=";">当前功率</p>
        <span style="color: white;float: right;">kwh</span>
        <p style="color:#dd2dfe ;  float: right;  font-size: 18px;">567.00</p>
        <Progress :percent="30" :stroke-color="['#5c3ecd', '#dd2dfe']" style="float: left;" />
      </div>
    </div>

  </div>
</template>
<script>
export default {

}
</script>
<style>
.ivu-progress-inner {
  background-color: rgb(40, 39, 93) !important;
}

.leiji {
  width: 100%;
  height: 50px;
  float: left;
  margin-bottom: 20px;
}

.leiji-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  float: left;
  margin-right: 5px;
}

.leiji p {
  float: left;
}

.huang {
  width: 35px;
  height: 35px;
  float: left;
  background: linear-gradient(to bottom right, #faeb41, orange, #e5983c);
  border-radius: 50%;
  line-height: 35px;
  text-align: center;
  margin-right: 5px;
}

.lan {
  width: 35px;
  height: 35px;
  float: left;
  background: linear-gradient(to bottom right, #02c2ef, #067ef4);
  border-radius: 50%;
  line-height: 35px;
  text-align: center;
  margin-right: 5px;
}

.zi {
  width: 35px;
  height: 35px;
  float: left;
  background: linear-gradient(to bottom right, #dd2dfe, #5c3ecd);
  border-radius: 50%;
  line-height: 35px;
  text-align: center;
  margin-right: 5px;
}</style>