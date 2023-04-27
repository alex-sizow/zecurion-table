<template>
	<div class="table">
		<section class="table__header">
			<input
				type="text"
				v-model="inputTask" />

			<button @click="addTask">Add Task</button>

			<input
				type="date"
				v-model="inputData" />
			<button @click="addData">Add Data</button>

			<input
				type="text"
				v-model="inputStatus" />

			<button @click="addStatus">Add Status</button>
		</section>
		<section class="table__body">
			<table>
				<thead>
					<tr>
						<th>🧾 Tasks</th>
						<th
							v-for="(date, index) in dates"
							:key="index">
							📅 {{ date }}
						</th>
						<th>⚫ Status</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="(item, outerIndex) in tasks"
						:key="outerIndex">
						<th>✅ {{ item.task }}</th>
						<th
							v-for="(item, index) in dates"
							:key="index">
							<!-- <label
								v-for="(item, index) in events"
								:for="events"
								:key="index"></label> -->
							<label>
								<select :id="events">
									<option
										v-for="(item, index) in events"
										:key="index"
										:value="item"
										:selected="
											tasks[outerIndex].event === index
										">
										🔷 {{ item }}
									</option>
								</select>
							</label>
						</th>
						<th>
							<label>
								<select :id="statuses">
									<option
										v-for="(item, index) in statuses"
										:key="index"
										:value="item"
										:selected="
											tasks[outerIndex].status === index
										">
										{{ item }}
									</option>
								</select>
							</label>
						</th>
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
			inputData: '',
			inputEvent: '',
			inputStatus: '',

			tasks: [
				{ task: 'go', event: 0, status: 0 },
				{ task: 'went', event: 0, status: 0 },
				{ task: 'gone', event: 0, status: 0 },
				{ task: 'do', event: 1, status: 0 },
				{ task: 'did', event: 0, status: 1 },
				{ task: 'done', event: 0, status: 2 },
			],

			dates: ['07.04.2023', '08.04.2023', '09.04.2023'],

			events: ['🎂 Birthday', '⛳ Hollyday', '👩‍💻 Meeting'],

			statuses: ['🟡 In progress', '🟢 Done', '⚪ Stop'],
		};
	},
	methods: {
		addTask() {
			let inputTask = this.inputTask;
			this.tasks;
			if (inputTask.length > 0) {
				this.tasks.push({
					task: inputTask,
					status: '🟡 In progress',
				});
			}
			this.inputTask = '';
		},

		addData() {
			const date = new Date(this.inputData);
			const options = {
				month: 'numeric',
				day: 'numeric',
				year: 'numeric',
			};
			const formatter = new Intl.DateTimeFormat(
				'ru-RU',
				options,
			);
			if (this.inputData.length > 0) {
				this.dates.push(formatter.format(date));
			}
			this.inputData = '';
		},

		addStatus() {
			let inputStatus = this.inputStatus;
			this.tasks;
			if (inputStatus.length > 0) {
				this.statuses.push('🔵 ' + inputStatus);
			}
			this.inputStatus = '';
		},
	},
};
</script>

<style lang="scss">
select {
	width: 140px;
	height: 35px;
	padding: 4px;
	border-radius: 4px;
	box-shadow: 2px 2px 8px #999;
	background: #eee;
	border: none;
	outline: none;
	display: inline-block;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	cursor: pointer;
}
label {
	position: relative;
}
label:after {
	content: '<>';
	font: 11px 'Consolas', monospace;
	color: #666;
	-webkit-transform: rotate(90deg);
	-moz-transform: rotate(90deg);
	-ms-transform: rotate(90deg);
	transform: rotate(90deg);
	right: 8px;
	top: 2px;
	padding: 0 0 2px;
	border-bottom: 1px solid #ddd;
	position: absolute;
	pointer-events: none;
}
label:before {
	content: '';
	right: 6px;
	top: 0px;
	width: 20px;
	height: 20px;
	background: #eee;
	position: absolute;
	pointer-events: none;
	display: block;
}

table,
th,
tr {
	padding: 1rem;
	border-collapse: collapse;
	font-weight: 400;
	text-align: left;
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

/* Стили для option */

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
