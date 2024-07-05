<template>
  <v-container>
    <v-text-field v-model="search" label="Ara" solo></v-text-field>
    <v-row>
      <v-col
        v-for="product in filteredProducts"
        :key="product.Id"
        cols="12" sm="6" md="4"
      >
        <v-card class="product-card">
          <v-img :src="product.img" height="200px"></v-img>
          <div class="card-content">
            <v-card-title class="card-title">{{ product.Title }}</v-card-title>
            <v-card-text>{{ product.Description }}</v-card-text>
            <v-card-subtitle class="price">{{ product.Price.toFixed(2) }} TL</v-card-subtitle> <!-- Displaying price here -->
          </div>
          <v-card-actions class="card-actions">
            <v-btn :to="{ name: 'ProductDetail', params: { id: product.Id }}">Detay</v-btn>
            <v-btn @click="toggleCart(product)" :color="cartStore.isInCart(product.Id) ? 'error' : 'primary'">
              {{ cartStore.isInCart(product.Id) ? 'Sepetten Çıkar' : 'Sepete Ekle' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCartStore } from '@/stores'
import { fetchProducts } from '@/services/api'

const products = ref([])
const search = ref('')
const cartStore = useCartStore()

onMounted(async () => {
  products.value = await fetchProducts()
})

const filteredProducts = computed(() => {
  return products.value.filter(product =>
    product.Title.toLowerCase().includes(search.value.toLowerCase())
  )
})

const toggleCart = (product) => {
  if (cartStore.isInCart(product.Id)) {
    cartStore.removeFromCart(product.Id)
  } else {
    cartStore.addToCart(product)
  }
}
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; 
}
.card-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-title {
  text-align: center;
  overflow-wrap: break-word;
  white-space: normal;
}
.price {
  text-align: center; 
  margin-top: 10px;
}
.v-card-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto; 
}
</style>
