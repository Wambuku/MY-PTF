<template>
	<div class="text-red-800">Viewing the homeview</div>
	<Button
		class="mx-2 p-4 w-24 text-white"
		name="add"
		@onIncrease="inc"
		customized="red"
	/>
	<span>{{ count }}</span>

	<Button
		class="mx-2 p-4 w-24 text-white"
		name="minus"
		@onDecrease="dec"
		customized="green"
	/>
	<HelloWorld />
</template>

<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";
import HelloWorld from "../components/HelloWorld.vue";

const count = ref(0);
const inc = (n) => {
	count.value += n;
};
const dec = (n) => {
	count.value -= n;
};
</script>

<style lang="scss" scoped></style>
