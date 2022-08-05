import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import { getTotal } from '../pages/store'

const liGnbs = [
  {id: 'gnb_01', gnb: '매장안내', link: '/info'},
  {id: 'gnb_02', gnb: '온라인 쇼룸', link: '/onlineShow'},
  {id: 'gnb_03', gnb: '베스트셀러', link: '/bestSeller'},
]

const MainHeader = styled.header`
  width: 100%;
  position: fixed;
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
  box-sizing: border-box;
  z-index: 99;

  .top_header {
    background: var(--point_color01);
    height: 40px;
    position: relative;

    a {
      height: 100%;
      position: absolute;
      right: calc(50% - 710px);
      display: flex;
      align-items: center;
      gap: 10px;

      img {width: 24px; height: 24px;}
      span {
        color: #fff;
        font-weight: 300;
        font-size: var(--font_size_small02);
      }
    }
  }

  .logo_li {margin: 0 auto 0 0;}
`

const Gnb = styled.ul`
    width: 1420px;
    margin: 0 auto;
    display: flex;
    height: ${props=>props.isheight};
    gap: 60px;
    align-items: center;
    transition: height 0.6s;
`

const CartAmount = styled.div`
  width: 23px; height: 23px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: var(--point_color01);
`

export default function Header(){
  let state = useSelector((state) => {return state})
  let dispatch = useDispatch()

  let [isHeight, setIsHeight] = useState('110px')
  function toggleHeight (){
    if(window.scrollY > 100){
      setIsHeight('70px')
    }else{
      setIsHeight('110px')
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', toggleHeight)
    return ()=>{
      window.removeEventListener('scroll', toggleHeight)
    }
  }, [])

  useEffect(()=>{
    dispatch(getTotal())
  },[state.cart.cartItems, dispatch])

  return (
    <>
      <MainHeader>
        <div className="top_header">
          <Link to="/cart">
            <img src="img/bag_icon_white.png" alt="cart" />
            <CartAmount>{state.cart.cartTotalQuantity}</CartAmount>
            <span>장바구니</span>
          </Link>
        </div>
        <Gnb isheight={isHeight}>
          <li className="logo_li">
            <h1 className="logo">
              <Link to="/">
                <img src="img/logo_white.png" alt="logo" />
              </Link>
            </h1>
          </li>
          {
            liGnbs.map((liGnb)=>{
              return (
                <li key={liGnb.id} className="gnb_li">
                  <Link to={liGnb.link}>
                    {liGnb.gnb}
                  </Link>
                </li>
              )
            })
          }
        </Gnb>
      </MainHeader>
    </>
  )
}

