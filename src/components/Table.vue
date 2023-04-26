<template>
	<div class="table">
		<section class="table__header">
			<h1>Customers hoho</h1>
		</section>
		<section class="table__body">
			<table>
				<thead>
					<tr>
						<th>№</th>
						<th>Tasks</th>
						<th>Dates</th>
						<th>Statuses</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="(item, index) in [
							1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
						]"
						:key="index">
						<th>{{ item }}</th>
						<th>Task</th>
						<th>23.04.2023</th>
						<th>later</th>
					</tr>
				</tbody>
			</table>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			columns: ['Name', 'Age', 'Gender'],
			rows: [],
		};
	},
	methods: {
		addRow() {
			this.rows.push();
		},
	},
};
</script>

<style lang="scss">
table,
th,
tr {
	padding: 1rem;
	border-collapse: collapse;
	font-weight: 400;
}

table {
	width: 100%;
}

thead {
	th {
		position: sticky;
		top: 0;
		left: 0;
		background-color: #d5d1defe;
	}
}

tbody {
	tr:nth-child(even) {
		background-color: #0000000b;
	}
	tr:hover {
		background-color: #fff6;
	}
}

.table {
	width: 82vw;
	height: 90vh;
	background-color: #fff5;
	backdrop-filter: blur(7px);
	box-shadow: 0 0.4rem 0.8rem #0005;
	border-radius: 0.8rem;
	overflow: hidden;

	.table__header {
		width: 100%;
		height: 10%;
		background-color: #fff4;
		padding: 0.8rem;
	}

	.table__body {
		width: 95%;
		max-height: calc(89% - 0.8rem);
		background-color: #fffb;
		margin: 0.8rem auto;
		border-radius: 0.6rem;
		overflow: auto;
	}
}

thead {
}

button {
	margin-top: 10px;
}
</style>
