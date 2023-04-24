<script setup>
	import { useProductListing } from '../useProductListing.js';

	const { priceSortOrder } = useProductListing();

	const sortOptions = [
		{ label: 'Najtańsze', value: 'price-asc' },
		{ label: 'Najdroższe', value: 'price-desc' }
	];

	function onSortChange(e) {
		priceSortOrder.value = e.target.value;
	}
</script>

<template>
	<select class="form-select w-50" @change="onSortChange">
		<option v-for="(option, index) in sortOptions" :key="index" :value="option.value">{{ option.label }}</option>
	</select>
</template>

<style lang="scss" scoped>
	.form-select {
		background-color: transparent;
		color: #969696;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23969696' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");

		option {
			color: #000000;
		}
	}
</style>
