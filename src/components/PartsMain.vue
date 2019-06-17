<template>
    
     <v-container class='mainView'>
         <input class='partInput'type="number" placeholder="podaj numer części...">
        <v-icon class='search'>search</v-icon>
    </v-container>

        

    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.partInput{
    color:gray;
    padding:30px;
    font-size:16px;
    border: 1px solid lightgray;
    width:50vh;
    height:50px;
    border-radius:50px;
    box-shadow: 2px 4px 9px lightgray;
}
.search{
    position:absolute;
    max-width:50px;
    margin-left:130px;
}
.mainView{
    
    
    display:flex;
    
    align-items: center;
    justify-content: center;
}
@media only screen 
and (min-device-width : 375px) 
and (max-device-width : 667px) { 
.partInput{
    
    width:100vh;
    height:50px;
    
}

}

</style>