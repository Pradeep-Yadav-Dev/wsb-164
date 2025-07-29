const { createSlice } = require("@reduxjs/toolkit");
const { productThunk } = require("./productThunk");


let initialState = {
    value: null,
    loading: false,
    error: null,
}
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productThunk.fulfilled, (state, action) => {
                state.value = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(productThunk.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(productThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }

})


export default productSlice.reducer