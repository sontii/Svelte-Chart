import { faker } from '@faker-js/faker';
import { writable } from 'svelte/store';

//data for components
const label2 = ['Rd', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
export const labels = writable(label2);
const data2 = label2.map(() => faker.datatype.number({max:100}));
export const data = writable(data2);