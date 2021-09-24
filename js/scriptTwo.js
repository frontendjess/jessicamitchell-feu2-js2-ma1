import fetchData from './libs/fetchData.js';
import renderHTMLToTheDom from './libs/displayHTML.js';
import { filteringAnArray } from './libs/filteringArray.js';

const data = await fetchData('https://fakestoreapi.com/products');
// let fakestoreResults = data.results;
// console.log(fakestoreResults);

let HTML = '';
const loading = document.querySelector('.loading');
data.forEach((product) => {
	loading.innerHTML = '';
	HTML += `<div class="product-info">
									<h2>${product.title}</h2>
									<p>${product.price}</p>
							</div>`;
});

renderHTMLToTheDom(HTML, '.products');

let search = document.querySelector('.search');
search.onkeyup = function () {
	console.log(search.value);

	document.querySelector('.products').innerHTML = ``;
	if (search.value === '') {
		document.querySelector('.products').innerHTML = ``;
		return;
	}

	let searchFilterPrice = filteringAnArray(data, search.value);
	console.log('searchFilterPrice', searchFilterPrice);

	for (let i = 0; i < searchFilterPrice.length; i++) {
		document.querySelector(
			'.products'
		).innerHTML += `<div>${searchFilterPrice[i].title} ${searchFilterPrice[i].price}</div>`;
	}
};
