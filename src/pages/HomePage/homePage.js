import {createSlice} from 'redux-starter-kit';

const {actions, reducer} = createSlice({
    slice : 'Home',
    initialState : {
        counter: 0,
        resetLoading: false
    },
    reducers : {
        incrementCounter(state, action) {
            state.counter = action.payload + 1;
        },
        decrementCounter(state, action) {
            state.counter = action.payload - 1;
        },
        resetCounterLaunched(state, action) {
            state.resetLoading = true;
        },
        resetCounterSuccess(state, action) {
            state.counter = 0;
            state.resetLoading = false;
        },
        resetCounterFailure(state, action) {
            state.resetLoading = false;
        }
    }
});

export const {
    incrementCounter,
    decrementCounter,
    resetCounterLaunched,
    resetCounterSuccess,
    resetCounterFailure
} = actions;


export const resetCounter = () => async (dispatch, getState) => {
    try {
        dispatch(resetCounterLaunched());
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 500);
        });

        dispatch(resetCounterSuccess())
    } catch(error) {
        dispatch(resetCounterFailure());
    }
}


export default reducer;

