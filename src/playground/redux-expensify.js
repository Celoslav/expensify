import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE


//EXPENSES REDUCERS
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

// FILTER REDUCER

const filtersReducerDefaultState = {
    text: '', 
    sortBy: 'Date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

// STORE CREATION

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
console.log(store.getState());


const demoState = {
    expenses: [{
            id: 'alsdkjfl',
            description: 'January Rent',
            note: 'This was the final payment for the address',
            amount: 54500,
            createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};
 