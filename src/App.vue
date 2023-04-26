<script>
import Table from './components/Table.vue';

export default {
	name: 'App',
	components: { Table },
};
</script>

<template>
	<div class="container"><Table /></div>
</template>

<style scoped lang="scss">
.container {
	background: rgb(63, 94, 251);
	background: radial-gradient(
		circle,
		rgba(63, 94, 251, 1) 0%,
		rgba(70, 252, 175, 1) 100%
	);
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
