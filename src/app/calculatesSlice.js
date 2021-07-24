import { createSlice, createAction } from '@reduxjs/toolkit';

export const setCalculatesError = createAction('setCalculatesError');
export const newCalculateError = createAction('newCalculateError');
export const editCalculateError = createAction('editCalculateError');
export const deleteCalculateError = createAction('deleteCalculateError');

export const calculatesSlice = createSlice({
    name: 'calculates',
    initialState: {
        calculates: [],
    },
    reducers: {
        setCalculates: (state, action) => {
            return { ...state, calculates: [...action.payload] };
        },
        newCalculate: (state, action) => {
            return { ...state, calculates: [action.payload, ...state.calculates] };
        },
        editCalculate: (state, action) => {
            const calculates = state.calculates.map(calculate => {
                if (calculate.id === action.payload.id) {
                    calculate = action.payload;
                }
                return calculate;
            });
            return { ...state, calculates: [...calculates] };
        },
        deleteCalculate: (state, action) => {
            const calculates = state.calculates.filter(calculate =>
                calculate.id !== action.payload.id);
            return { ...state, calculates: [...calculates] };
        }
    }
});

export const { setCalculates, newCalculate, editCalculate, deleteCalculate } = calculatesSlice.actions;

export default calculatesSlice.reducer;
