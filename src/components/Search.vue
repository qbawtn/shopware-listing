<script setup>
	import { useProductListing } from '../useProductListing.js';
	import _ from 'lodash';

	const { search, getProducts } = useProductListing();

	function onInput() {
		const debounceInput = _.debounce(() => {
			getProducts();
		}, 300);

		debounceInput();
	}

	function clearSearch() {
		search.value = '';
		getProducts();
	}
</script>

<template>
	<div class="position-relative w-50">
		<input class="form-control" placeholder="Szukaj..." v-model="search" @input="onInput" />
		<div v-if="search" class="clear-btn" @click="clearSearch">x</div>
	</div>
</template>

<style lang="scss" scoped>
	.clear-btn {
		position: absolute;
		top: 1px;
		right: 15px;
		font-size: 20px;
		font-weight: bold;
		cursor: pointer;
	}
</style>
