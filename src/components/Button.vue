<template>
	<button @click="handleButtonClick" :style="{ backgroundColor: customized }">
		{{ name }}
	</button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const { name, customized } = defineProps(["name", "customized"]);
const emit = defineEmits(["onIncrease", "onDecrease"]);

const handleButtonClick = () => {
	emit("onIncrease", 2);
	emit("onDecrease", 2);
};
</script>

<!-- <style lang="scss" scoped>
/* Your scoped CSS styles go here */
</style> -->
