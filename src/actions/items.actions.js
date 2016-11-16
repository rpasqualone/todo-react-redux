import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';

export function fetchItems() {
	const request = axios.get(`${process.env.API_URI}/todos/`).then(() => {
		return [
			{
				id: 1,
				title: 'Full Event Pass',
				details: '4-Day Festival Pass',
				date: 'June 25, 2017',
				location: 'Seaside Park, Bridgeport CT',
				price: 215
			},
			{
				id: 2,
				title: 'Full Event Pass 2',
				details: '4-Day Festival Pass',
				date: 'June 25, 2017',
				location: 'Seaside Park, Bridgeport CT',
				price: 12.54
			}
		];
	});

	return {
		type: FETCH_ITEMS,
		payload: request
	};
}

