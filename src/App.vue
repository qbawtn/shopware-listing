<script setup>
	import ProductCard from './components/ProductCard.vue';
	import { useProductListing } from './useProductListing.js';
	import PriceSort from './components/PriceSort.vue';
	import Search from './components/Search.vue';

	const { getProducts, products } = useProductListing();

	getProducts();
</script>

<template>
	<div class="header fw-bold d-flex align-items-center h-auto w-100">
		<div class="col d-flex justify-content-start"> Shopware listing </div>

		<div class="col d-flex justify-content-end">
			<PriceSort />
		</div>
	</div>

	<div class="content">
		<div class="mb-5 d-flex justify-content-center">
			<Search />
		</div>

		<div class="d-flex justify-content-center">
			<div v-if="products.length" class="row row-cols-3 d-flex justify-content-center">
				<ProductCard v-for="(product, index) in products" :key="index" :product="product" />
			</div>
			<div v-else> Brak wyników... </div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.header {
		position: absolute;
		top: 0;
		left: 0;
		padding: 10px 100px;
		background-color: #000000;
		color: #ffffff;
	}
	.content {
		margin-top: 80px;
		padding: 0 100px;
	}
</style>
