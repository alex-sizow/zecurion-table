<script setup>
import { ref } from 'vue';

const title = ref('');
const inputTask = ref('');
const inputData = ref('');
const inputEvent = ref('');
const inputStatus = ref('');
const tasks = ref([
	{
		task: 'go',
		event: ['', '🎂 Birthday', '⛳ Hollyday'],
		status: '🟡 In progress',
	},
	{
		task: 'went',
		event: ['⛳ Hollyday', '⛳ Hollyday', '👩‍💻 Meeting'],
		status: '🟡 In progress',
	},
	{
		task: 'gone',
		event: ['', '🎂 Birthday', '⛳ Hollyday'],
		status: '🟡 In progress',
	},
	{
		task: 'do',
		event: ['', '⛳ Hollyday', '🎂 Birthday'],
		status: '🟡 In progress',
	},
	{
		task: 'did',
		event: ['', '🎂 Birthday', ''],
		status: '⚪ Stop',
	},
	{
		task: 'done',
		event: ['', '🎂 Birthday', '⛳ Hollyday'],
		status: '🟢 Done',
	},
]);

const dates = ref(['07.04.2023', '08.04.2023', '09.04.2023']);

const events = ref([
	'',
	'🎂 Birthday',
	'⛳ Hollyday',
	'👩‍💻 Meeting',
]);

const statuses = ref([
	'🟡 In progress',
	'🟢 Done',
	'⚪ Stop',
]);

const titleDisplay = (task, date, event, status) => {
	console.log(task, date, event, status);
	if (event.length > 0) {
		title.value = `${date} task ${task} in status "${status}" event ${event} occurs.`;
	} else {
		title.value = `${date} task ${task} in status "${status}" no events . `;
	}
};

const addTask = () => {
	let input = inputTask.value;
	let events = dates.value.map((event) => 0);

	if (input.length > 0) {
		tasks.value.push({
			task: input,
			event: events,
			status: '🟡 In progress',
		});
	}

	inputTask.value = '';
};

const deleteTask = (indexToRemove) => {
	tasks.value.splice(indexToRemove, 1);
};

const addData = () => {
	const date = new Date(inputData.value);
	const options = {
		month: 'numeric',
		day: 'numeric',
		year: 'numeric',
	};
	const formatter = new Intl.DateTimeFormat('ru-RU', options);

	if (inputData.value.length > 0) {
		dates.value.push(formatter.format(date));
		tasks.value.map((item) => item.event.push(''));
	}
	inputData.value = '';
};

const addStatus = () => {
	let input = inputStatus.value;

	if (input.length > 0) {
		statuses.value.push('🔵 ' + input);
	}

	inputStatus.value = '';
};

const addEvent = () => {
	let input = inputEvent.value;

	if (input.length > 0) {
		events.value.push('🔶 ' + input);
	}
	inputEvent.value = '';
};
</script>

<template>
	<div class="table">
		<section class="table__header">
			<input
				class="table__header_input"
				type="text"
				v-model="inputTask" />

			<button
				class="table__header_button"
				@click="addTask">
				✅ Add Task
			</button>
			{{ TableStore }}
			<input
				class="table__header_input"
				type="date"
				v-model="inputData" />
			<button
				class="table__header_button"
				@click="addData">
				📅 Add Data
			</button>
			<input
				class="table__header_input"
				type="text"
				v-model="inputEvent" />

			<button
				class="table__header_button"
				@click="addEvent">
				🔷 Add Event
			</button>
			<input
				class="table__header_input"
				type="text"
				v-model="inputStatus" />

			<button
				class="table__header_button"
				@click="addStatus">
				⚫ Add Status
			</button>
		</section>
		<section class="table__body">
			<div class="table__body_title">{{ title }}</div>
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
							v-for="(date, dataIndex) in dates"
							:key="dataIndex">
							<label>
								<select
									:id="events"
									v-model="tasks[outerIndex].event[dataIndex]"
									v-on:mouseover="
										titleDisplay(
											item.task,
											date,
											tasks[outerIndex].event[dataIndex],
											tasks[outerIndex].status,
										)
									">
									<option
										v-for="(item, index) in events"
										:key="index"
										:value="item"
										:selected="
											tasks[outerIndex].event[dataIndex] ===
											item
										">
										🔷
										{{ item }}
									</option>
								</select>
							</label>
						</th>
						<th class="status">
							<label>
								<select
									:id="statuses"
									v-model="tasks[outerIndex].status">
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
							<button
								class="status__delete"
								@click="deleteTask(outerIndex)">
								❌
							</button>
						</th>
					</tr>
				</tbody>
			</table>
		</section>
	</div>
</template>

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

th {
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
		min-height: 10%;
		background-color: #fff4;
		padding: 0.8rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 15px;

		.table__header_input {
			width: 160px;
			height: 36px;
			border-radius: 6px;
			background: #a5d1ef;
			box-shadow: inset -5px -5px 10px #9ec9e5,
				inset 5px 5px 10px #acd9f9;
			padding: 10px;
			display: flex;

			text-align: center;
			cursor: pointer;
			font-weight: 400;
			font-size: 14px;
		}

		.table__header_button {
			height: 36px;
			border-radius: 6px;
			background: #a5d1ef;
			box-shadow: -5px -5px 10px #9ec9e5, 5px 5px 10px #acd9f9;
			padding: 10px;
			display: flex;

			align-items: center;
		}
	}

	.table__body {
		width: 95%;
		max-height: calc(89% - 0.8rem);
		background-color: #fffb;
		margin: 0.8rem auto;
		border-radius: 0.6rem;
		overflow: auto;

		.table__body_title {
			min-height: 56px;
			padding: 0.9rem 1.2rem;
			display: flex;
			font-size: 20px;
		}
	}
}

.status {
	.status__delete {
		transition: 0.5s;
		margin-left: 1rem;
	}
	.status__delete:hover {
		transition: 0.5s;
		text-shadow: -1px -1px 2px #d32b52, 1px 1px 2px #ff3b70;
	}
}
</style>
