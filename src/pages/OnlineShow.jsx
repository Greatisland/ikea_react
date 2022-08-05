import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import data from "../components/data";

const DisplayItem = styled.div`
  width: 100%;
  height: 900px;
  margin: 0 0 150px 0;
  overflow: hidden;
  position: relative;

.back {display: block;}

.cut_img {
  display: block;
  position: absolute;
  opacity: 0;
  transition: all 0.2s;
  z-index: 2;

  :hover {opacity: 1;}
  &.img01 {top: 389px; left: 915px;}
  &.img02 {top: 507px; left: 524px;}
  &.img03 {top: 549px; left: 959px;}
  &.img04 {top: 46px; left: 848px;}
  &.img05 {top: 125px; left: 1559px;}
  &.img06 {top: 362px; left: 0px;}
}

.mark_point li {
  width: 40px; height: 40px;
  border: 1px solid #aaa;
  border-radius: 50%;
  position: absolute;
  background: rgba(244, 244, 244, 0.6);

  ::after {
    display: block;
    content: "";
    width: 10px; height: 10px;
    background: #fff;
    border-radius: 50%;
    transform: translate(15px, 15px);
  }

  &.img01_point {top: 439px; left: 1000px;}
  &.img02_point {top: 554px; left: 771px;}
  &.img03_point {top: 843px; left: 1125px;}
  &.img04_point {top: 249px; left: 913px;}
  &.img05_point {top: 220px; left: 1709px;}
  &.img06_point {top: 493px; left: 260px;}
}

.tag_card {
  position: absolute;
  display: flex;
  opacity: 0;
  background: #fff;
  gap: 30px;
  padding: 20px;
  border-radius: 20px;
  z-index: 3;
  transition: all 0.2s;

  img {
    width: 120px;
  }

  ::after {
    display: block;
    content: "";
    position: absolute;
    border-top: 30px solid #fff;
    border-left: 25px solid transparent;
    border-right: 6px solid transparent;
  }

  .text_box {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 15px 0;
  }

  .title {
    font-weight: 500;
    color: #000;
  }

  .sub {font-weight: 400;}

  .desc {
    color: #777;
    font-size: var(--font_size_small03);
  }

  .price {
    margin: auto 0 5px 0;
    font-size: var(--font_size_large01);
    font-weight: 700;
    color: var(--point_color01);
  }

  &.card01::after {
    top: 112px; left: -25px;
    transform: rotate(73deg);
  }

  &.card02::after {
    top: 166px; left: 258px;
    transform: rotate(347deg);
  }

  &.card03::after {
    top: 166px; left: 86px;
    transform: rotate(347deg);
  }

  &.card04::after {
    top: 100px; left: 264px;
    transform: rotate(285deg);
  }

  &.card05::after {
    top: -20px; left: 264px;
    transform: rotate(210deg);
  }

  &.card06::after {
    top: 158px; left: 249px;
    transform: rotate(28deg);
  }

  &.tag_card.card01 {top: 245px; left: 1164px;}
  &.tag_card.card02 {top: 337px; left: 400px;}
  &.tag_card.card03 {top: 600px; left: 997px;}
  &.tag_card.card04 {top: 156px; left: 597px;}
  &.tag_card.card05 {top: 300px; left: 1447px;}
  &.tag_card.card06 {top: 250px; left: 37px;}
}

.img01:hover~ .tag_info .card01 {opacity: 1;}
.img02:hover~ .tag_info .card02 {opacity: 1;}
.img03:hover~ .tag_info .card03 {opacity: 1;}
.img04:hover~ .tag_info .card04 {opacity: 1;}
.img05:hover~ .tag_info .card05 {opacity: 1;}
.img06:hover~ .tag_info .card06 {opacity: 1;}
`


export default function OnlineShow (){

  function rendering (thisLength){
    let result = []
      for(let i = 1; i <= thisLength; i++){
        result.push(
          <li key={i} className={`img0${i}_point`} />
        )
      }
    return result
  }


  return (
    <>
      <div style={{height:'150px'}}></div>
      <DisplayItem>
        {
          data.filter((value)=>value.id.includes('display')).map((value, i)=>{
            return (
              <Link to="/detail" key={value.id} state={value} className={`cut_img img0${i+1}`}>
                <img src={`img/cut_item0${i+1}.png`} alt="prod" />
              </Link>
            )
          })
        }
        <ul className="mark_point">
          {rendering(6)}
        </ul>
        <ul className="tag_info">
          {
            data.filter((value)=>value.id.includes('display')).map((value, i)=>{
              return (
                <li key={value.id}className={`tag_card card0${i+1}`}>
                  <img src={`img/item0${i+1}.avif`} alt="product" />
                  <div className="text_box">
                    <p className="title eng">{value.title.split(' ')[0]}</p>
                    <p className="sub">{value.title.split(' ')[1]}</p>
                    <p className="desc">{value.desc}</p>
                    <p className="price">{`￦ ${value.price.toLocaleString()}`}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <img className="back" src="img/main_showroom.png" alt="showroom" />
      </DisplayItem>
    </>
  )
}