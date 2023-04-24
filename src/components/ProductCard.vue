<script setup>
	import { computed } from 'vue';

	const props = defineProps({
		product: {
			type: Object,
			required: true
		}
	});

	const computedPrice = computed(() => props.product.calculatedPrice.unitPrice.toString().replace('.', ','));
</script>

<template>
	<div class="card p-0 m-3" style="width: 18rem">
		<div class="card-body d-flex flex-column justify-content-between">
			<div>
				<h6 class="card-title fw-bold">{{ product.translated.name }}</h6>
				<p class="card-text">{{ product.translated.description }}</p>
			</div>
			<p class="price mb-0"><strong>Cena </strong>{{ computedPrice }} zł</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card-text {
		font-size: 14px;
	}
</style>
