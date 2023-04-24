import { api } from './api.js';
import { ref, watch } from 'vue';

const products = ref([]);
const priceSortOrder = ref('price-asc');
const search = ref('');

export const useProductListing = () => {
	const loading = ref(false);
	function getProducts() {
		if (loading.value) return;
		loading.value = true;
		if (search.value) {
			searchForProducts();
		} else {
			fetchProductsByCategory();
		}
	}

	function searchForProducts() {
		const payload = {
			page: 1,
			limit: 10,
			order: priceSortOrder.value,
			search: search.value
		};

		api.post('search', payload)
			.then(({ data }) => {
				products.value = data.elements;
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => (loading.value = false));
	}

	function fetchProductsByCategory() {
		const payload = {
			page: 1,
			limit: 10,
			order: priceSortOrder.value
		};

		api.post('product-listing/e435c9763b0d44fcab67ea1c0fdb3fa0', payload)
			.then(({ data }) => {
				products.value = data.elements;
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => (loading.value = false));
	}

	watch(
		() => priceSortOrder.value,
		() => {
			getProducts();
		}
	);

	return { getProducts, products, priceSortOrder, search };
};
