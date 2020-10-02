import { createStore } from 'redux';
import { UserReducer } from './reducers/user_reducer';

export const store = createStore(
    UserReducer,
    
);