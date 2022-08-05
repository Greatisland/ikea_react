import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components";
import data from "../components/data";
import { addItem } from "./store"


const BestProducts = styled.div`
  width: 1420px;
  margin: 0 auto 150px;
  display: flex;
  flex-direction: column;
  gap: 50px;


  h3 {
    width: 100%;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: var(--font_size_large03);
  }
`

const ProductWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
`

const Product = styled.div`
  width: 280px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {transition: transform 0.4s;}
  
  a:hover {transform: translateY(-10px);}

  .product_img {
    display: block;
    width: 240px;
    overflow: hidden;
  }

  .icon_box {
    display: flex;
    justify-content: center;
    gap: 26px;
    margin: 0 0 10px 0;
  }

  .product_desc {
    font-size: var(--font_size_small03);
    font-weight: 300;
    margin: 0 0 16px 0;
  }

  .product_price {font-weight: 700;}
  .price_simbol {font-size: var(--font_size_small03);}
`
const CartBtn = styled.button`
  width: 40px; height: 40px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background: none;
  cursor: pointer;

  :hover {background: #f2f2f2;}

  img {width: 20px; height: 20px;}
`

export default function BestSeller (){

  let state = useSelector((state) => {return state})
  let dispatch = useDispatch()
  let navigate = useNavigate()

  return (
    <>
      <div style={{height: '200px'}} />
      <BestProducts>
        <h3>BEST SELLER</h3>
        <ProductWrap>
          {
            data.map((value, i)=>{
              if(i<16){
                return (
                  <Product key={value.id}>
                    <Link to="/detail" state={value}><img className="product_img" src={value.img} alt="product"/></Link>
                    <div className="icon_box">
                      <CartBtn onClick={()=>{
                        if(!state.cart.cartItems[0]){
                          if(window.confirm('처음 장바구니에 아이템을 담았습니다. 지금 장바구니로 이동하시겠습니까?')){
                            navigate('/cart')
                          }
                        }
                        dispatch(addItem({
                          id: value.id, title: value.title, img: value.img, price: value.price, desc: value.desc, origin: value.origin, designer: value.designer, texture: value.texture, desc02: value.desc02, count: 1
                        }))
                      }}><img src="img/bag_icon.png" alt="bag" /></CartBtn>
                    </div>
                    <p className="product_title">{value.title}</p>
                    <p className="product_desc">{value.desc}</p>
                    <p className="product_price">
                      <span className="price_simbol">￦</span>
                      <span className="num_p">{value.price.toLocaleString()}</span>
                    </p>
                  </Product>
                )
              }
            })
          }
        </ProductWrap>
      </BestProducts>
    </>
  )
}