<template>
    <div>
        <v-bottom-nav app fixed :active.sync="activeItem" :value="true">
    <v-btn flat color="primary" value="top">
      <span>Top Stories</span>
      <v-icon>thumb_up</v-icon>
    </v-btn>

    <v-btn flat color="primary" value="code">
      <span>Code Examples</span>
      <v-icon>code</v-icon>
    </v-btn>

    <v-btn flat color="primary" value="favorites">
      <span>Favorites</span>
      <v-icon>favorite</v-icon>
    </v-btn>

</v-bottom-nav>
    </div>
</template>

<script>
    export default {
        data:()=>{
            return{
                activeItem:''
            }
        }
        
    }
</script>

<style scoped>

</style>