async function fetchData(url) {
	try {
		console.log(url);
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);

		let fakestoreResults = data;
		console.log(fakestoreResults);

		function renderHTMLToTheDom(html, domElm) {
			// create a check to test for strings
			// Clear HTML inside dom first because we are appending
			document.querySelector(domElm).innerHTML += html;
		}

		// let fakestoreResults = data.results;
		// console.log(fakestoreResults);

		let HTML = '';
		fakestoreResults.forEach((product) => {
			HTML += `<div class="product-info">
									<h2>${product.title}</h2>
									<p>${product.price}</p>
							</div>`;
		});

		renderHTMLToTheDom(HTML, '.products');

		return data;
	} catch (error) {}
}

fetchData('https://fakestoreapi.com/products');
