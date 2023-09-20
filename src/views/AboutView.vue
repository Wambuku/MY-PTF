<template>
	<div id="calculator" class="pt-8">
		<div class="display">
			<input class="border" type="text" v-model="showResult" readonly />
		</div>
		<div class="buttons">
			<div class="row">
				<button @click="appendToDisplay('7')">7</button>
				<button @click="appendToDisplay('8')">8</button>
				<button @click="appendToDisplay('9')">9</button>
				<button @click="clearDisplay">C</button>
			</div>
			<div class="row">
				<button @click="appendToDisplay('4')">4</button>
				<button @click="appendToDisplay('5')">5</button>
				<button @click="appendToDisplay('6')">6</button>
				<button @click="appendToDisplay('+')">+</button>
			</div>
			<div class="row">
				<button @click="appendToDisplay('1')">1</button>
				<button @click="appendToDisplay('2')">2</button>
				<button @click="appendToDisplay('3')">3</button>
				<button @click="appendToDisplay('-')">-</button>
			</div>
			<div class="row">
				<button @click="appendToDisplay('0')">0</button>
				<button @click="appendToDisplay('.')">.</button>
				<button @click="calculateResult">=</button>
				<button @click="appendToDisplay('*')">*</button>
			</div>
			<div class="row">
				<button @click="appendToDisplay('/')">/</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showResult: "",
		};
	},
	methods: {
		appendToDisplay(value) {
			this.displayValue += value;
		},
		clearDisplay() {
			this.displayValue = "";
		},
		calculateResult() {
			try {
				this.displayValue = eval(this.displayValue);
			} catch (error) {
				this.displayValue = "Error";
			}
		},
	},
};
</script>

<style scoped>
#calculator {
	width: 200px;
	margin: 0 auto;
}

.display {
	text-align: right;
	margin-bottom: 10px;
}

.buttons {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 5px;
}

button {
	padding: 10px;
	font-size: 18px;
}
</style>
