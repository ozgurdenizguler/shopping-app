import productsData from '@/data/products.json'

export async function fetchProducts() {
  return productsData
}

export async function fetchProductById(id) {
  const products = await fetchProducts()
  return products.find(product => product.Id === id)
}
