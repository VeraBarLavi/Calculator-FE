import {
    setCalculates, newCalculate, editCalculate, deleteCalculate,
    setCalculatesError, editCalculateError, newCalculateError, deleteCalculateError
} from '../app/calculatesSlice';
import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/calculates',
})

export const GetCalculates = async (dispatch) => {
    try {
        // api call
        const { data } = await axiosInstance.get();
        dispatch(setCalculates(data));
    } catch {
        dispatch(setCalculatesError());
    }
}

export const NewCalculate = async (dispatch, calculate, onResult) => {
    try {
        // api call
        const { data }  = await axiosInstance.post('', calculate);
        dispatch(newCalculate(data));
        onResult(data.result);
    } catch {
        dispatch(newCalculateError());
    }
}

export const EditCalculate = async (dispatch, calculate) => {
    try {
        // api call
        const { data } = await axiosInstance.put('', calculate);
        dispatch(editCalculate(data));
    } catch {
        dispatch(editCalculateError());
    }
}

export const DeleteCalculate = async (dispatch, calculate) => {
    try {
        // api call
        await axiosInstance.delete('', { data: { ...calculate } });
        dispatch(deleteCalculate(calculate));
    } catch {
        dispatch(deleteCalculateError());
    }
}
