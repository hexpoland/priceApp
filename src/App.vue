<template>
<div>
  <topToolbar/>
  <v-content class='content'>
  <partsMain/>
  </v-content>
  <bottomNav/>
</div>
</template>

<script>
import topToolbar from "@/components/TopToolbar";
import bottomNav from "@/components/BottomNav"
import partsMain from "@/components/PartsMain"
  export default {
    components:{
      topToolbar,
      bottomNav,
      partsMain
    }
  }
</script>

<style scoped>
* {
  font-family:'Roboto'
}
.content{
  
  height:500px;
  display:flex;
  align-items:center;
  justify-content:center;
}

</style>