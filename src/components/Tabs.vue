<template>
  <div class="tabs">
    <div v-if="tabActive" class="add-tabs">
      <v-btn small fab>
        <v-icon @click="tabsTimeOut" dark>keyboard_arrow_down</v-icon>
      </v-btn>
    </div>
    <v-pagination
      v-if="!tabActive"
      class="pagin"
      v-model="page"
      :length="length"
      :page="page"
      :total-visible="totalVisible"
      circle
      color="indigo"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabActive: true,
      page: 1,
      length: 6,

      totalVisible: 6
    };
  },
  methods: {
    tabsTimeOut: function() {
      this.tabActive = !this.tabActive;
      setTimeout(() => {
        this.tabActive = !this.tabActive;
      }, 5000);
    }
  },
  computed: {
    // tabActiveF: function() {
    //   this.tabsTimeOut();
    //   //   return this.tabActive;
    // }
  }
};
</script>

<style>
.add-tabs {
  transform: scale(0.8);
  display: flex;
  justify-content: center;
  animation: showIn 1s ease-out;
}
.pagin {
  display: flex;
  justify-content: center;
  animation: showIn 1.2s easeout;
}
@keyframes showIn {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  ,
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}

.tabs {
  position: absolute;
  margin-top: 1px;
  opacity: 0.3;
  width: 100%;
  top: 60px;
}
</style>