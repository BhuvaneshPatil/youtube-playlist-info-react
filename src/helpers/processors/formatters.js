export const suffixValue = (num) => {
	num = Number(num);
	if (num >= 1000 && num < 1000000) {
		return `${(num / 1000).toFixed(2)}K`;
	} else {
		return `${(num / 1000000).toFixed(2)}M`;
	}
};
