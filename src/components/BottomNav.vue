<template>
  <div>
    <v-bottom-nav app fixed :active.sync="activeItem" :value="true">
      <v-btn @click="removeItem" flat color="primary" value="top">
        <span>Usuń</span>
        <v-icon>delete</v-icon>
      </v-btn>

      <v-btn flat color="primary" value="code">
        <span>Code Examples</span>
        <v-icon>code</v-icon>
      </v-btn>

      <v-btn @click="sendOrderClick" flat color="primary" value="favorites">
        <span>Wyślij</span>
        <v-icon>email</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      activeItem: ""
    };
  },
  methods: {
    sendOrderClick() {
      this.$root.$emit("sendorder");
    },
    removeItem(){
      this.$root.$emit('removeItem')
    }
  }
};
</script>

<style scoped>
</style>