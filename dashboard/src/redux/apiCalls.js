import { publicRequest, userRequest } from '../requestMethod';
import {
    addProductFail,
    addProductStart,
    addProductSuccess,
    deleteProductFail,
    deleteProductStart,
    deleteProductSuccess,
    getProductFail,
    getProductStart,
    getProductSuccess,
    updateProductFail,
    updateProductStart,
    updateProductSuccess,
} from './productRedux';
import { loginFailure, loginSuccess, loginStart } from './userRedux';

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get('/products');
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFail());
    }
};

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        // const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (err) {
        dispatch(deleteProductFail());
    }
};

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        dispatch(
            updateProductSuccess({
                id,
                product,
            }),
        );
    } catch (err) {
        dispatch(updateProductFail());
    }
};

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await userRequest.post(`/products`, product);
        dispatch(addProductSuccess(res.data));
    } catch (err) {
        dispatch(addProductFail());
    }
};
