import { defineStore } from 'pinia';

export const useTableStore = defineStore('TableStore', {
	state: () => ({
		tasks: [
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
		],

		dates: ['07.04.2023', '08.04.2023', '09.04.2023'],

		events: ['', '🎂 Birthday', '⛳ Hollyday', '👩‍💻 Meeting'],

		statuses: ['🟡 In progress', '🟢 Done', '⚪ Stop'],
	}),
});
