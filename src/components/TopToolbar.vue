<template>
    <div>
        <v-navigation-drawer app fixed v-model="showMenu">
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>help</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Help</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar fixed app light >

      <v-toolbar-side-icon @click.stop="toggleMenu"></v-toolbar-side-icon>

      <v-toolbar-title class='font-weight-thin'>Parts'nPrice</v-toolbar-title>

    </v-toolbar>

    </div>
</template>

<script>
    export default {
        props:{
           
        },
        data:()=>{
            return{
                showMenu:false 

            }
        },
        methods:{
            toggleMenu:function(){
                this.showMenu=!this.showMenu
            }
        }
    }
</script>

<style  scoped>

</style>