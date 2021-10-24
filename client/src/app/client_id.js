import { v4 as uuid } from 'uuid';

const getClientId = () => {
	let id = localStorage.getItem('clientId');
	if (!id) {
		id = uuid();
		localStorage.setItem('clientId', id);
	}
	return id;
};

export default getClientId;
