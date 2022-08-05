import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components";
import data from "../components/data";
import { addItem } from "./store"

const seriseArray = [
  'HAUGA', 'MALM', 'HEMNES', 'SONGESAND', 'BRIMNES', 'GURSKEN'
]

const MainSlide = styled.div`
  width: 1420px;
  height: 400px;
  margin: 0 auto 100px;
  padding: 150px 0 0;
  overflow: hidden;
  position: relative;
`

const SlideArrow = styled.div`
  position: absolute;
  top: calc(50% - 25px);
  left: ${(props)=>props.left||null};
  right: ${(props)=>props.right||null};
  width: 50px; height: 50px;
  z-index: 2;
  cursor: pointer;

  ::before,::after {
    content: '';
    display: block;
    width: 30px;
    height: 2px;
    background: #fff;
    position: absolute;
    left: calc(50% - 15px);
    }

  ::before {
    top: 13px;
    transform: ${(props)=>props.left?'rotate(135deg)':'rotate(45deg)'};
  }

  ::after {
    top: 33px;
    transform: ${(props)=>props.right?'rotate(135deg)':'rotate(45deg)'};
  }
`

const SlidePagination = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
  z-index: 2;

  span {
    width: 12px; height: 12px;
    background: #999;
    border-radius: 50%;
  }

  .swiper-pagination-bullet-active {
    background: #fff;
  }
`

const MainProducts = styled.div`
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
  :hover {
    background: #f2f2f2;
  }
  img {
    width: 20px; height: 20px;
  }
`
export default function Main (){

  let state = useSelector((state) => {return state})
  let dispatch = useDispatch()
  let navigate = useNavigate()
  return (
    <>
      <MainSlide>
        <Swiper 
          modules={[Navigation, Pagination, Autoplay]} 
          loop={true}
          autoplay={{
            delay: 4000
          }}
          slidesPerView={1}
          navigation={{
            nextEl: '.next',
            prevEl: '.prev'
          }}
          pagination={{ 
            el: '.pagination',
            clickable: true,
            type: 'bullets'
          }}
        >
         <SlideArrow className="prev" left='30px'/>
          <SwiperSlide>
            <img src="img/main_visual01.png" alt="slide"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/main_visual02.png" alt="slide"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/main_visual03.png" alt="slide"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/main_visual04.png" alt="slide"></img>
          </SwiperSlide>
          <SlideArrow className="next" right='30px'/>
          <SlidePagination className="pagination" />
        </Swiper>
      </MainSlide>
      {
        seriseArray.map((section, i)=>{
          return (
            <MainProducts key={i}>
              <h3>{section} Series</h3>
              <ProductWrap>
                {
                  data.filter((value)=>value.title.includes(section)).map((value, i)=>{
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
                  })
                }
              </ProductWrap>
            </MainProducts>
          )
        })
      }
    </>
  )
}