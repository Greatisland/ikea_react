import {configureStore, createSlice} from "@reduxjs/toolkit"

let cart = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],//장바구니에 담길 item
    cartTotalQuantity: 0, //장바구니에 담긴 합계 수량
    cartTotalPrice: 0,//장바구니에 담긴 합계 가격
  },
  reducers: {
    addCount(state, action){
      let number = state.cartItems.findIndex((findId)=>{return findId.id === action.payload})
      state.cartItems[number].count++//수량 증가
    },

    minusCount(state, action){
      let number = state.cartItems.findIndex((findId)=>{return findId.id === action.payload})
      if(state.cartItems[number].count > 1) state.cartItems[number].count--//수량 감소
    },

    addItem(state, action){
      let sameId = state.cartItems.findIndex((findId)=>{return findId.id === action.payload.id})//기존 state에 payload로 들어온 값과 같은 것이 있는지 확인
      if(sameId !== -1){//같은 값이 없을 경우 -1을 반환, -1이 아닐 경우 해당 index의 count 증가 
        state.cartItems[sameId].count++
      }else{
        state.cartItems.push(action.payload)//장바구니 배열에 추가
      }
    },

    deleteItem(state, action){
      let number = state.cartItems.findIndex((findId)=>{return findId.id === action.payload})
      state.cartItems.splice(number,1)//장바구니 배열에서 제거
    },

    getTotal(state, action){
      let total = state.cartItems.map(ele=>ele.price * ele.count).reduce((cartTotal, cartItem)=>{
        return cartTotal += cartItem
      }, 0)
      let quantity = state.cartItems.map(ele=>ele.count).reduce((cartTotal, cartItem)=>{
        return cartTotal += cartItem
      }, 0)
      state.cartTotalQuantity = quantity//장바구니 총합 수량
      state.cartTotalPrice = total//장바구니 총합 가격
    },

    allDelete(state, action){
      alert('ahf')
      state.cartItems = []
    }
  }
})

export let { addCount, minusCount, addItem, deleteItem, getTotal, allDelete } = cart.actions
export default configureStore({
  reducer : {
    cart: cart.reducer
  }
})