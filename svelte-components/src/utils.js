const headers = {
	'Content-Type': 'application/json',
	Authorization:
		'Bearer Fe26.2**06510099d08178d066b933da5c784db6f78d6aec9335d9013aac119aa96b7941*zVac28I3HMDNX5snZUV0QQ*uQPDz88-dD4XvQNKVrR1CYVUwG9tE7wtkhwP_gcS9WcE-r1Msn9A9Z3Y7Wq_WfpeJGmg5tsjOpEe91Ixev4e-UIdSeW0vgClaSqVtU8a5fA*1638918374870*1612b41b112274a2ad71852b4c8e247a8370766105534e708b763d2619abd263*yQoNNCDdonvzA5d-VBeo3NIj8A49C44iV8KRCdMvPuk'
};
/**
 * @description Send graphql request by providing a query string, an object containing any variables, and optionally you can pass a fetch if the environment switches between server and client.
 *
 * @param {string} query
 * @param {Object} variables
 * @param {?function()} fetchOrNull
 * @returns {({ data: object, res: Response}|{ error: object, res: Response})}
 */

export const send = (query = '', variables = {}, fetchOrNull) => {
	if (!fetchOrNull) {
		return fetch('http://localhost:3000/api/graphql', {
			method: 'POST',
			headers,
			body: JSON.stringify({
				query,
				variables
			})
		})
			.then(async (res) => {
				return { data: await res.json(), res };
			})
			.then((data) => {
				if (data.data.errors) {
					return { error: data.data.errors[0].message, res: data.res };
				}
				return { data: data.data.data, res: data.res };
			})
			.catch((err, res) => {
				console.error(err);
				return { error: err, res };
			});
	} else {
		return fetchOrNull('http://localhost:3000/api/graphql', {
			method: 'POST',
			headers,
			body: JSON.stringify({
				query,
				variables
			})
		})
			.then(async (res) => {
				return { data: await res.json(), res };
			})
			.then((data) => {
				if (data.data.errors) {
					return { error: data.data.errors[0].message, res: data.res };
				}
				return { data: data.data.data, res: data.res };
			})
			.catch((err, res) => {
				console.error(err);
				return { error: err, res };
			});
	}
};

/**
 * Load page level queryStrings and return the required props or an Error page
 *
 * @param {import('@sveltejs/kit').Page} page
 * @param {import('@sveltejs/kit').LoadInput} params
 */
export const loadPropsOrError = async (params, queryString, fetch) => {
	const query = await send(queryString, params, fetch);
	if (!query.data) {
		return {
			status: 400,
			error: query.error
		};
	}

	return {
		props: {
			...query.data
		}
	};
};

/**
 * 
 * @param {object} product
 * @returns {string} 
 */
export const computeCustomFields = (product) => {
	if (product.variants) {
		return product.variants
			.map(({ name, required, options, type }) => ({
				name,
				required,
				options,
				type
			}))
			.map((x, index) => {
				if (x.type === 'text') {
					return Object.entries(x).map(([key, value]) => {
						if (key === 'options' || key === 'type' || key === 'required') {
							return;
						}
						return {
							[`data-item-custom${index + 1}-${key.toString().toLowerCase()}`]: value
						};
					});
				}
				if (x.type === 'checkbox') {
					return Object.entries(x).map(([key, value]) => {
						if (key === 'options' || key === 'required') {
							return;
						}
						return {
							[`data-item-custom${index + 1}-${key.toString().toLowerCase()}`]: value
						};
					});
				}
				// if (x.type === 'select') {
				// 	const toOptionString = (value, i, length) =>
				// 		`${value.name}${value.price > 0 || value.price !== null ? `[+${(value.price / 100).toFixed(2)}]` : ''}${
				// 			i + 1 < length ? '|' : ''
				// 		}`;

				// 	return Object.entries(x).map(([key, value]) => {
				// 		let optionString = '';
				// 		if (typeof value === 'object') {
				// 			value.forEach((v, i) => {
				// 				const string = toOptionString(v, i, value.length);
				// 				optionString += string;
				// 				return optionString;
				// 			});
				// 		}
				// 		if (key === 'type' || key === 'required') {
				// 			return;
				// 		}
				// 		return {
				// 			[`data-item-custom${index + 1}-${key.toString().toLowerCase()}`]:
				// 				typeof value === 'object' ? optionString : value
				// 		};
				// 	});
				// }
			})
			.reduce((acc, curr) => acc.concat(curr), [])
			.reduce((acc, curr) => ({ ...acc, ...curr }));
	}
	return;
};

/**
 * 
 * @param {string} string 
 * @param {number} length 
 * @returns string or string with "..." appended
 */
export const showAllOrEllipsis = (string, length) =>
	string.length > length ? string.substring(0, length) + '...' : string;

export const currentYear = new Date().getFullYear()