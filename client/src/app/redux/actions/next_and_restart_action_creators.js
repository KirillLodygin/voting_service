export const next = () => {
	return {
		meta: { remote: true },
		type: 'NEXT',
	};
};

export const restart = () => {
	return {
		meta: { remote: true },
		type: 'RESTART',
	};
};
