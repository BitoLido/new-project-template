/*import createStore use to create redux store*/
/*import applyMiddleware use to apply middleware */
import { legacy_createStore as createStore, applyMiddleware } from "redux";
/*import redux-thunk -- async action within middleware.*/
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
/*import reducers */
import reducers from "./reducers";

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
