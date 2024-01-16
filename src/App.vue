<template>  
  <div id="app">  
        
      <myAbcComponent></myAbcComponent>  
        
  </div>  
       
</template>  
<script>  
  
import myAbcComponent from './components/myAbcComponent.vue';  

export default {  
  name:'app', 
  components:{  
    'myAbcComponent':myAbcComponent,  //引入组件  
  }  
}  
  
</script>  
<style>  
  
  
</style>