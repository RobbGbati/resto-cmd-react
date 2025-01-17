import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getQuantityProductPerName } from "../../app/selector";
import * as ProductList from "../../common/models"


export const cartSlice = createSlice({
    name: "list",
    initialState: {},
    reducers: {
        addProduct: (currentState, action) => {
            const listWithNewProduct = [...currentState, action.payload]
            return listWithNewProduct
        },
        removeProduct: (currentState, action) => {
            const list = currentState.list.filter(
                (item, index) => index !== action.payload
            )
            return list
        },
        applyVoucher: (currentState, action) => {
            const withVoucherList = currentState.list.map(
                item => item.title === 'Super Crémeux' ? ({...item, price: action.payload.price}) : item
            )
            return withVoucherList
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addProductThunk.fulfilled, (state) => {
            const specialOffer = ProductList.PouletCroquant
            const newPrice = Math.round((ProductList.PouletCroquant.price / 2) * 100) / 100
            return [...state, {...specialOffer, price: newPrice}]
        })
        builder.addCase(addProductThunk.rejected, (state) => {
            return [...state]
        }),
        builder.addCase(resetOrderThunk.rejected, () => {
            return []
        })
    }
})

export const addProductThunk = createAsyncThunk('cart/addProductThunk', async (product, thunkApi) => {
    thunkApi.dispatch(cartSlice.actions.addProduct(product))
    thunkApi.dispatch(resetOrderThunk())
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const state = thunkApi.getState()
            const nbrForSpecialOffer = getQuantityProductPerName('Poulet Croquant')(state)

            if (nbrForSpecialOffer && nbrForSpecialOffer === 2) {
                if (window.confirm("Voulez-vous ajouter une troisième fois ce produit à moitié prix ?")) {
                    resolve()
                } else {
                    reject()
                }
            } else {
                reject()
            }
        }, 5000)
    })
})

const TIME_TO_RESET_ORDER = 120000
let timeOutVar = null;

export const resetOrderThunk = createAsyncThunk('cart/resetOrderThunk', async () => {
    timeOutVar && clearTimeout(timeOutVar)

    return new Promise((resolve, reject) => {
        timeOutVar = setTimeout(() => {
            reject()
        }, TIME_TO_RESET_ORDER)
    })
} )