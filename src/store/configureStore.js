import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';


// if we are using the tools we're going to make sure that correctly get set up
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
export default () => {
	const store = createStore(
		combineReducers({
			auth: authReducer
		}), 

		// if we weren't using redux devtools this would be pretty easy
		// applyMiddleware(thunk);

		composeEnhancers(applyMiddleware(thunk))
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

	);
	return store;	
};

