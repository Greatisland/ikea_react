import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TopButton = styled.div`
  width: 50px; height:  50px;
  border: 1px solid #ccc;
  background: #fff;
  position: fixed;
  bottom: 100px; right: 100px;
  padding: 10px 10px 13px 10px; box-sizing: border-box;
  z-index: 99;
  opacity: ${(props)=>props.visible?'1':'0'};
  cursor: pointer;

  span {
    height: 100%;
    display: block;
    position: relative;
  }

  span::before,
  span::after {
    content: "";
    display: block;
    position: absolute;
    width: 17px;
    height: 3px;
    background: #333;
    top: 12px;
  }

  span::before {
    transform: rotate(135deg);
    left: 0;
  }

  span::after {
    transform: rotate(45deg);
    left: 10px;
  }

  @keyframes navi_arrow {
    0% {
      top: 8px;
    }
    100% {
      top: -8px;
    }
  }

  :hover span {
    animation: navi_arrow 1s ease-in-out infinite;
  }
`

export default function TopNavi (){

  let [isVisible, setIsVisible] = useState(false)

  function toggleVisible (){
    if(window.scrollY > 300){
      setIsVisible(true)
    }else{
      setIsVisible(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', toggleVisible)
    return ()=>{
      window.removeEventListener('scroll', toggleVisible)
    }
  }, [])

  return (
    <>
      <TopButton 
      visible={isVisible}
      onClick={()=>{
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }}>
        <span></span>
      </TopButton>
    </>
  )
}