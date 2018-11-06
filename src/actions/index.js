import * as types from './../constants/ActionTypes';

export const actionAddToCart = (product, quantity) => {
    return {
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actionChangeMessage = (message) => {
    return {
        type : types.CHANGE_MESSAGE,
        message
    }
}

export const deleteProductInCart = (id) => {
    return {
        type : types.DELETE_PRODUCT_IN_CART,
        id
    }
}

export const updateProductInCart = (product, quantity) => {
    return {
        type : types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}