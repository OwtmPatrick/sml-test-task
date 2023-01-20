import { legacy_createStore as createStore, Store, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
});

const store: Store = createStore(rootReducer);

export default store;
