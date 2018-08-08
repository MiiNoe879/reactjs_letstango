import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PostsReducer from "./reducer_posts";
import MenuReducer from "./reducer_menu";
import HomepageReducer from "./reducer_homepage";
import CatalogReducer from "./reducer_catalog";

import { authentication } from './authentication.reducer';
const rootReducer = combineReducers({
  menu: MenuReducer,
  posts: PostsReducer,
  form: formReducer,
  homepage: HomepageReducer,
  catalog: CatalogReducer,
  authentication,
});

export default rootReducer;
