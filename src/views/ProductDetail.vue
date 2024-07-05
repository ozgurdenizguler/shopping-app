<template>
  <v-container v-if="product">
    <v-row>
      <v-col cols="12" md="6">
        <v-img :src="product.img" height="400px"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-card-title>{{ product.Title }}</v-card-title>
        <v-card-text>{{ product.Description }}</v-card-text>
        <v-card-subtitle>{{ product.Price.toFixed(2) }} TL</v-card-subtitle> <!-- Displaying price here -->
        <v-card-actions class="buttonContainer">
          <v-btn @click="toggleCart(product)" :color="cartStore.isInCart(product.Id) ? 'error' : 'primary'">
            {{ cartStore.isInCart(product.Id) ? 'Sepetten Çıkar' : 'Sepete Ekle' }}
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores'
import { fetchProductById } from '@/services/api'

const route = useRoute()
const product = ref(null)
const cartStore = useCartStore()

const toggleCart = (product) => {
  if (cartStore.isInCart(product.Id)) {
    cartStore.removeFromCart(product.Id)
  } else {
    cartStore.addToCart(product)
  }
}

onMounted(async () => {
  const id = route.params.id
  product.value = await fetchProductById(id)
})
</script>

<style scoped>
.buttonContainer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
