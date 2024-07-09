import { createSlice } from "@reduxjs/toolkit";


const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem("cart")
    if (cart) {
        return JSON.parse(localStorage.getItem("cart"))
    } else {
        return []
    }


}
const storeInLocaleStorage = (carts) => {
    localStorage.setItem("cart", JSON.stringify(carts))
}

const initialState = {
    carts: fetchFromLocalStorage(),
    itemCount: 0,
    totalAmount: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        // sepete ekleme işlemi
        addToCart: (state, action) => {
            const isItemCart = state.carts.find(item => item.id === action.payload.id)
            if (isItemCart) {
                const TempCart = state.carts.map(item => {
                    if (item.id === action.payload.id) {
                        let tempQty = item.quantity + action.payload.quantity;
                        let tempTotalPrice = tempQty + item.price;
                        return {
                            ...item, quantity: tempQty, totalPrice: tempTotalPrice
                        }
                    } else {
                        return item
                    }

                })
                state.carts = TempCart
                storeInLocaleStorage(state.carts)
            } else {
                state.carts.push(action.payload)
                storeInLocaleStorage(state.carts)
            }
        },

        removeFromCart: (state, action) => {
           const tempCart = state.carts.filter(item => item.id !== action.payload)
            state.carts = tempCart
            storeInLocaleStorage(state.carts)

        },
        clearCart: (state) => {
            state.carts =[],
            storeInLocaleStorage(state.carts)

        },
        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal += cartItem.price * cartItem.quantity
            }, 0)
            state.itemCount = state.carts.length
        }

    }
})

export const { addToCart, removeFromCart, clearCart, getCartTotal } = cartSlice.actions
export default cartSlice.reducer