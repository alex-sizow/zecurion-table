<template>
	<div class="table">
		<section class="table__header">
			<input
				type="text"
				v-model="inputTask" />

			<button @click="addTask">Add Task</button>
		</section>
		<section class="table__body">
			<table>
				<thead>
					<tr>
						<th>Tasks</th>
						<th
							v-for="(date, index) in dates"
							:key="index">
							{{ date }}
						</th>
						<th>status</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="(item, index) in tasks"
						:key="index">
						<th>{{ item.task }}</th>
						<th
							v-for="(item, index) in dates"
							:key="index">
							{{ item }}
						</th>
						<th>{{ status }}</th>
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
			inputTask: '',
			dates: [23.03, 24.04, 2.05, 5],
			tasks: [
				{ task: 'go', status: '' },
				{ task: 'went', status: '' },
				{ task: 'gone', status: '' },
				{ task: 'do', status: '' },
				{ task: 'did', status: '' },
				{ task: 'done', status: '' },
			],

			rows: [],
		};
	},
	methods: {
		addTask() {
			let inputTask = this.inputTask;
			this.tasks;
			if (inputTask.length > 0) {
				this.tasks.push({ task: inputTask, status: '' });
			}
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
	tr {
		background-color: #d5d1defe;
	}
	th {
		position: sticky;
		top: 0;
		left: 0;
		background-color: #d5d1defe;
	}
}

tbody {
	tr {
		transition: 0.2s;
	}
	tr:nth-child(even) {
		background-color: #0000000b;
	}
	tr:hover {
		background-color: #fff6;
		transition: 0.3s;
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
