export const filteringAnArray = (array, price) => {
	return array.filter((arrayElement) => {
		return arrayElement.price <= parseFloat(price);
	});
};
