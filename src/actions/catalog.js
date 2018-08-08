import axios from "axios";

const ROOT_URL = "https://test1.letstango.com/react/router/contents/";
const CATEGORY_URL = "https://test1.letstango.com/react/router/category/";
//const ROOT_URL = "http://127.0.0.1:8888/tango/react/router/contents/";

export function fetchCatalogContent(pathname) {	


	return function(dispatch) {
		//dispatch(requestAPI());
		var actualPathName = pathname.substring(1);
		let data = JSON.stringify({
	        url: pathname
	    })
		//return axios.get(`${ROOT_URL}`, { params: { url: actualPathName }})
		//console.log(data);
		return axios.post(`${ROOT_URL}`, data )
			.then(
				response => response,
				error => console.log('An error occurred.', error)
			)
			.then(response => {
				if(response.data.type == 'category'){
					dispatch(setCategoryContents(response));
				}
				else if(response.data.type == 'product'){
					dispatch(setProductContents(response));
				}
				else if(response.data.type == 'page'){
					dispatch(setPageContents(response));
				}
				else{
					dispatch(set404PageContents(response));
				}
			})
		}
	}

export function fetchCategory(categoryId,page,minprice,maxprice,filters){
return function(dispatch) {
		//dispatch(requestAPI());
			let data = JSON.stringify({
	        	category_id: categoryId,
	        	page,
	        	minprice,
	        	maxprice,
	        	filters:filters
	        	
	    })
		
		//return axios.get(`${ROOT_URL}`, { params: { url: actualPathName }})
		//console.log(data);
		return axios.post(`${CATEGORY_URL}`, data )
			.then(
				response => response,
				error => console.log('An error occurred.', error)
			)
			.then(response => {
				dispatch(setCategoryContents(response));
				
			})
		}
}


export function applayFilters(id){
	        console.log(id)
return function(dispatch) {
		//dispatch(requestAPI());
			let data = JSON.stringify({
	        category_id: categoryId,
	        page:page
	    })
		//return axios.get(`${ROOT_URL}`, { params: { url: actualPathName }})
		//console.log(data);
		return axios.post(`${CATEGORY_URL}`, data )
			.then(
				response => response,
				error => console.log('An error occurred.', error)
			)
			.then(response => {
				dispatch(setCategoryContents(response));
				
		})
	}
}




export const FETCH_CATEGORY = "fetch_category";
function setCategoryContents(response){
	return {
		type: FETCH_CATEGORY,
		payload: response
	};
}
export const FETCH_PRODUCT = "fetch_product";
function setProductContents(response){
	return {
		type: FETCH_PRODUCT,
		payload: response
	};
}
export const FETCH_PAGE = "fetch_page";
function setPageContents(response){
	return {
		type: FETCH_PAGE,
		payload: response
	};
}
export const FETCH_404 = "fetch_404";
function set404PageContents(response){
	return {
		type: FETCH_404,
		payload: response
	};
}

