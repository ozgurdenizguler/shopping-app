<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link :to="{ name: 'ProductList' }" class="toolbar-title-link">
        <v-toolbar-title>Alışveriş Uygulaması</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div class="button-container">
        <v-btn :to="{ name: 'ProductList' }" text>Ürünler</v-btn>
        <v-btn :to="{ name: 'ShoppingCart' }" text>Sepet</v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'App',
}
</script>

<style scoped>
@import '~vuetify/dist/vuetify.min.css';

.v-app-bar {
  padding: 0 20px;
}

.toolbar-title-link {
  text-decoration: none;
  color: inherit;
}

.button-container {
  padding: 20px;
  display: flex;
  gap: 10px;
}
</style>