<template>
  <v-container class="mt-2">
    <div class="scrollable-container">
      <v-row v-if="cartStore.items.length">
        <v-col
          v-for="item in cartStore.items"
          :key="item.Id"
          cols="12"
        >
          <v-card class="mb-2">
            <v-row>
              <v-col cols="4">
                <v-img :src="item.img" height="100px" class="item-image"></v-img>
              </v-col>
              <v-col cols="8">
                <v-card-title class="card-title">{{ item.Title }}</v-card-title>
                <v-card-subtitle class="card-subtitle">Price: {{ item.Price }} TL</v-card-subtitle>
                <v-card-actions class="card-actions">
                  <v-btn @click="removeFromCart(item.Id)" color="error">Sepetten Çıkar</v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-divider v-if="cartStore.items.length" class="my-4"></v-divider>
    <v-row v-if="cartStore.items.length">
      <v-col cols="12" class="text-right">
        <v-card-title class="text-h5">Toplam: {{ cartStore.totalPrice.toFixed(2) }} TL</v-card-title>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" class="text-center">
        <v-card-title class="text-h5">Sepette ürün yok</v-card-title>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useCartStore } from '@/stores'

const cartStore = useCartStore()

const removeFromCart = (id) => {
  cartStore.removeFromCart(id)
}
</script>

<style scoped>
.v-container {
  padding: 20px;
}

.v-card-title {
  margin-bottom: 0;
  overflow-wrap: break-word;
  white-space: normal;
}

.v-card-subtitle {
  margin-top: 4px;
  color: #616161;
}

.item-image {
  object-fit: contain;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.card-actions {
  display: flex;
  justify-content: flex-end;
}

.scrollable-container {
  padding: 20px;
  max-height: 500px;
  overflow-y: auto;
}
</style>
