import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { addItem } from "./store"

const reviewArray = [
  {
    title: '수납이 좋은 침대',
    star: '★★★★★',
    desc: '조립 시간이 많이 걸렸지만. 견고하고. 수납공간이 꽤 넓어요. 프레임에서 잡음이 살짝 있네요. 소음완충재가 필수인것 같습니다',
    date: '2022.03.12'
  },
  {
    title: '만족 합니다~',
    star: '★★★★★',
    desc: '침대하단 서랍 보다 저렴하고 수납 공간도 더 넓고 좋습니다. 수납공간 열고 닫을때도 유압댐퍼 덕분에 손 쉽고요. 획기적이고 좋은 제품이라고 생각 됩니다.',
    date: '2022.02.27'
  },
  {
    title: '만족.공간활용 최고',
    star: '★★★★★',
    desc: '조립하는데 중간에 반대로 하는 실수로 4시간이나 걸렸지만 완성하니 좋네요. 안방 이불 수납할 때가 마땅히 없어 알아보다 샀는데 만족해요. 다만 열 때 손이 아파요. 여자가 혼자 열기 좀 힘들어요. 끈을 일자가 아니고 링모양으로 손가락을 넣고 걸어 당길 수 있으면 좋겠다 싶어요. 프레임 높이가 10cm정도가 더 깊으면 좋겠어요. 아이가 있는 경우 모서리가 많이 모 나있어 다칠위험이 있음',
    date: '2022.01.13'
  },
]

const Wrap = styled.div`
  width: 1420px;
  margin: 0 auto 100px;
  display: flex;
  gap: 20px;
`

const LeftArea = styled.div`
  flex: 6;

  .imgDiv {
    width: 100%;
    height: 620px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 90%;
      display: block;
    }
  }

  .exp {
    width: 100%;
    height: 80px;
    border: 1px solid #eee;box-sizing: border-box;
    padding: 16px;
    font-size: var(--font_size_small03);
    font-weight: 400;
    color: #666;
    margin: 0 0 50px;
  }
`

const Review = styled.div`
  margin: 0 0 100px;

  .section_name {
    font-size: var(--font_size_large03);
    font-weight: 700;
    margin: 0 0 20px;
  }

  .review_bar {
    display: flex;
    gap: 25px;
    align-items: center;
    padding: 0 0 15px;
    border-bottom: 1px solid #ccc;

    .star_point {
      height: 20px;
      position: relative;
      width: 100px;
      font-size: 20px;
      line-height: 20px;

      ::after {
        content: "";
        display: block;
        width: 1px;
        height: 16px;
        background: #999;
        position: absolute;
        top: 3px; right: -13px;
      }
    }
  }

  .review_list {
    padding: 25px 0;
    border-bottom: 1px solid #eee;

    .title {
      font-weight: 700;
      margin: 0 0 14px;
      letter-spacing: -0.025rem;

      .star {padding: 0 10px 0 0;}
    }

    .desc {
      font-size: var(--font_size_small03);
      letter-spacing: -0.025rem;
      color: #666;
      margin: 0 0 10px;
      max-height: 80px;
    }

    .date {font-size: var(--font_size_small03);}
  }
`

const RightArea = styled.div`
  flex: 4;
  position: sticky;
  top: 130px;
  right: 0;
  padding: 30px;
  height: 700px;
  border: 1px solid #ddd; box-sizing: border-box;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .detail_info .title_box {
    padding: 0 0 10px;
    border-bottom: 1px solid #eee;

    .product_title {
      font-size: var(--font_size_large03);
      font-weight: 700;
    }

    .product_sub {color: #666;}
  }

  .product_price {
    font-size: var(--font_size_large04);
    font-weight: 700;
    padding: 30px 0;
    color: #000;

    .simbol {font-size: var(--font_size_large02);}
  }

  .info_con01 {
    display: flex;
    align-items: center;
    gap: 25px;

    .star_point {
      font-size: 20px;
      height: 20px;
      position: relative;
      width: 100px;
      line-height: 20px;

      ::after {
        content: "";
        display: block;
        width: 1px;
        height: 16px;
        background: #999;
        position: absolute;
        top: 3px; right: -13px;
      }
    }
  }

  .notice {
    font-size: var(--font_size_small03);
    color: #999;
    padding: 20px 0;
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 0 0 30px;

    ::before {
      content: "i";
      display: block;
      width: 14px;
      height: 14px;
      border: 1px solid #999;
      border-radius: 50%;
      text-align: center;
      line-height: 14px;
    }
  }

  .info_con02 {
    display: flex;

    .category {
      width: 80px;
      border-right: 1px solid #eee;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 25px;
    }

    .cont {
      flex: 1;
      padding: 0 0 0 30px; box-sizing: border-box;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 25px;

      li {color: #777;}
    }
  }

  .info_btn {
    display: flex;
    justify-content: space-between;
    margin: auto 0 0 0;
    gap: 20px;

    .bag_btn,
    .buy_btn {
      flex: 1;
      font-weight: 700;
      padding: 10px 0;
      border-radius: 30px;
      cursor: pointer;
      text-align: center;
    }

    .bag_btn {
      border: 1px solid #333;

      :hover {
        background: #f2f2f2;
        border: 1px solid #999;
      }
    }

    .buy_btn {
      background: var(--point_color01);
      color: #fff;

      :hover {background: #3d6abe;}
    }
  }
`

export default function Detail (){

  let location = useLocation()
  let state = useSelector((state) => {return state})
  let dispatch = useDispatch()
  let navigate = useNavigate()

  return (
    <>
      <div style={{height: '200px'}}/>
      <Wrap>
        <LeftArea>
          <div className="imgDiv"><img src={location.state.img} alt="img" /></div>
          <p className="exp">{location.state.desc02}</p>
          <Review>
            <h3 className="section_name eng">REVIEWS</h3>
            <div className="review_bar">
              <span className="star_point">★★★★★</span>
              <a href="review_link">리뷰<span className="review_num">1,034</span></a>
            </div>
            {
              reviewArray.map((value, i)=>{
                return (
                  <div className="review_list" key={i}>
                    <p className="title">
                      <span className="star">{value.star}</span>
                      {value.title}
                    </p>
                    <p className="desc">{value.desc}</p>
                    <p className="date">{value.date}</p>
                  </div>
                )
              })
            }
          </Review>
        </LeftArea>
        <RightArea>
          <div className="title_box">
            <h2 className="product_title">{location.state.title}</h2>
            <p className="product_desc">{location.state.desc}</p>
          </div>
          <p className="product_price"><span className="simbol">￦ </span><span className="num_p">{location.state.price.toLocaleString()}</span></p>
          <div className="info_con01">
            <div className="star_point">★★★★★</div>
            <a href="review_link">리뷰<span className="review_num">1,034</span></a>
          </div>
          <p className="notice">구성품 외의 상품은 별도구매입니다.</p>
          <div className="info_con02">
            <ul className="category">
              <li>배송비</li>
              <li>제조국</li>
              <li>제조사</li>
              <li>디자이너</li>
              <li>재질</li>
            </ul>
            <ul className="cont">
              <li>￦ 4,000</li>
              <li>{location.state.origin}</li>
              <li>IKEA of Sweden AB</li>
              <li>{location.state.designer}</li>
              <li>{location.state.texture}</li>
            </ul>
          </div>
          <div className="info_btn">
            <div className="bag_btn" onClick={()=>{
              if(!state.cart.cartItems[0]){
                if(window.confirm('처음 장바구니에 아이템을 담았습니다. 지금 장바구니로 이동하시겠습니까?')){
                  navigate('/cart')
                }
              }
              dispatch(addItem({
                id: location.state.id, title: location.state.title, img: location.state.img, price: location.state.price, desc: location.state.desc, origin: location.state.origin, designer: location.state.designer, texture: location.state.texture, desc02: location.state.desc02, count: 1
              }))
            }}>장바구니</div>
            <div className="buy_btn">구매하기</div>
          </div>
        </RightArea>
      </Wrap>
    </>
  )
}