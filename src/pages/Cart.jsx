import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { addCount, minusCount, deleteItem, getTotal, allDelete } from "./store";
import { useEffect } from "react";

const ShoppingBasket = styled.div`
  display: flex;
  align-items: flex-start;
  width: 1420px;
  padding: 200px 0; box-sizing: border-box;
  margin: 0 auto;
  gap: 40px;
  background: #fff;
`

const LeftArea = styled.div`
  flex: 7;

  .section_name {font-size: var(--font_size_large03);}

  .del_notice {
    padding: 10px 0;
    font-size: var(--font_size_small03);
  }
  
  .bold {font-weight: 700;}
`

const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 3;
  position: sticky;
  top: 200px;
  left: calc(50% + 290px);

  .order_title {
    font-weight: 700;
    margin: 0 0 20px 0;
  }

  .con {
    display: flex;
    justify-content: space-between;
    font-size: var(--font_size_small03);
  }

  .result {
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #000;
    padding: 30px 0;

    .price {
      color: #000;
      font-weight: 700;
      font-size: var(--font_size_large04);
    }
  }

  .order_btn {
    width: 100%;
    background: var(--point_color01);
    color: #fff;
    padding: 30px 20px; box-sizing: border-box;
    cursor: pointer;
    border-radius: 6px;

    :hover {background: #3667c0;}
  }

  .back_btn {
    width: 100%;
    background: #fff;
    color: #333;
    padding: 30px 20px; box-sizing: border-box;
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid #333;
    :hover {
      background: #f2f2f2;
    }
  }
`

const AddList = styled.li`
  display: flex;
  gap: 40px;
  padding: 30px 0 10px 0;
  border-bottom: 1px solid #f2f2f2;

  .prod_img {
    width: 140px; height: 140px;
    overflow: hidden;

    img {
      max-width: 100%;
      display: block;
    }
  }

  .text_box {
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex-basis: 230px;

    .title {
      letter-spacing: -0.04rem;
      font-weight: 500;
    }

    .desc {
      font-size: var(--font_size_small03);
      letter-spacing: -0.04rem;
      font-weight: 300;
    }
  }

  .btn_box {
    margin: auto 0 0 0;
    display: flex;
    gap: 20px;
  }

  .price_simbol {
    margin: 0 0 0 auto;

    .price {
      margin: 0 10px 0 auto;
      font-size: var(--font_size_large02);
      font-weight: 700;
    }
  }

  .add_box {
    display: flex;
    cursor: pointer;

    .minus {
      width: 24px; height: 24px;
      border-top: 1px solid #ccc;
      border-left: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      text-align: center;
    }

    .num {
      width: 30px; height: 24px;
      border: 1px solid #ccc;
      text-align: center;
      font-size: var(--font_size_small02);
      color: #666;
      line-height: 24px;
    }

    .plus {
      width: 24px; height: 24px;
      border-top: 1px solid #ccc;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      text-align: center;
      margin: 0 20px 0 0;
    }

    .del {
      font-size: var(--font_size_small03);
      cursor: pointer;
      margin: 0 10px 0 0;
    }
  }
`

export default function Cart () {
  let state = useSelector((state) => {return state})
  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTotal())
  },[state.cart.cartItems, dispatch])
  //cartItems가 변화할 때마다 getTotal 함수를 실행.
  return (
    <>
      <ShoppingBasket>
        <LeftArea>
          <h2 className="section_name">장바구니</h2>
          <p className="del_notice">총 주문금액이 <span className="bold">₩ 1,000,000</span> 이상일 경우 배송비가 무료입니다.</p>
          <ul className="product_add">
            {
              state.cart.cartItems.map((value, i)=>{
                return (
                  <AddList key={value.id}>
                    <Link to="/detail" state={value} className="prod_img">
                      <img src={value.img} alt="product" />
                    </Link>
                    <div className="text_box">
                      <Link to="/detail" state={value} className="title">
                        {value.title}
                      </Link>
                      <p className="desc">{value.desc}</p>
                      <div className="btn_box">
                        <div className="add_box">
                          <span className="minus" onClick={()=>{
                            dispatch(minusCount(value.id))
                          }}>-</span>
                          <span className="num">{value.count}</span>
                          <span className="plus" onClick={()=>{
                            dispatch(addCount(value.id))
                          }}>+</span>
                          <span className="del" onClick={()=>{
                            dispatch(deleteItem(value.id))
                          }}>삭제</span>
                        </div>
                      </div>
                    </div>
                    <span className="price_simbol">￦ <span className="price">{value.price.toLocaleString()}</span></span>
                  </AddList>
                )
              })
            }
          </ul>
        </LeftArea>
        <RightArea>
          <span className="exit"></span>
          <p className="order_title">주문 내역</p>
          <ul className="con cond_01">
            <li className="name">전체 배송비</li>
            <li>₩ <span className="price">0</span></li>
          </ul>
          <ul className="con cond_02">
            <li className="name">총 할인 금액</li>
            <li className="price">- ₩ 0</li>
          </ul>
          <ul className="result">
            <li className="name">총 주문 금액</li>
            <li>₩ <span className="price">{state.cart.cartTotalPrice.toLocaleString()}</span></li>
            </ul>
          <span className="order_btn">
            결제하기
          </span>
          <span className="back_btn" onClick={()=>{
            dispatch(allDelete())
          }}>
            모두 비우기
          </span>
        </RightArea>
      </ShoppingBasket>
    </>
  )
}
