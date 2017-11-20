import {createStore} from 'redux';

const store = createStore((state = { count: 0}) => {
    return state;
});

console.log(store.getState());

// Actions - an object that gers sent to the store

// I'd like to increment the count

// I'd like to reset to count to zero