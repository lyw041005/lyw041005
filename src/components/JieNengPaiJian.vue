<template>
    <div>
        <ul class="jieneng">
            <li style="margin-top: 5px;"><i class="iconfont" style="color: rgb(205,144 , 133); float: left;">&#xe6f7;</i>
            <p class="p">二氧化碳</p>
            <p class="p2">万吨</p>
            <span class="jn-number">8.45</span>
            </li>
            <li><i class="iconfont" style="color: rgb(32,187 , 221); float: left; font-size: 28px; ">&#xe67b;</i>
            <p class="p">汽车里程</p>
            <p class="p2">KM</p>
            <span class="jn-number">7.37</span>
            </li>
            <li><i class="iconfont" style="color: rgb(13,188 , 121); float: left; font-size: 28px;">&#xe63e;</i>
            <p class="p">等效植树</p>
            <p class="p2">万颗</p>
            <span class="jn-number">461.79</span>
            </li>
            <li><i class="iconfont" style="color: rgb(242,238 , 127); float: left; font-size: 28px;">&#xe607;</i>
            <p class="p">二氧化硫</p>
            <p class="p2">吨</p>
            <span class="jn-number">2542.91</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>
<style>
    .jieneng li{
        width: 100%;
        height: 20px;
        list-style: none;
        line-height: 20px;
        margin-top: 35px;
    }
    .p{
        
        color: rgb(105, 104, 144);
        float: left;
        margin-left: 15px;
    }
    .jn-number{
        color: white;
        font-size: 18px;
        float: right;
    }
    .p2{
        color: white;
        float: right;
        margin-left: 10px;
    }
</style>