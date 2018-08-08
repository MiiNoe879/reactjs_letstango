import React, { Component } from "react";

import Contents from "./category/contents";
import FilterMenu from "./category/filtermenu";
import FilterMenuTest from "./category/filtermenutest";
import SortMenu from "./category/sortmenu";
import Pagination from "./category/pagination";

class Category extends Component {
	render() {
		return (
			<section id="category_list_page">
				<div className="row">
					<FilterMenuTest {...this.props}/>
					<Contents {...this.props}/>
				</div>
				<div className="clearfix"></div>
			</section>
		);
	}
}
export default Category;