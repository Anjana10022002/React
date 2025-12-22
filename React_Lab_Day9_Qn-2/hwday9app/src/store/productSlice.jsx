import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        setproducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { setproducts } = productSlice.actions;    
export default productSlice.reducer;
