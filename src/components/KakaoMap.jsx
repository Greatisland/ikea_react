import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
const { kakao } = window;

const Map = styled.div`
  width: 1420px;
  height: 700px;
  margin: 0 auto 100px;

  .tag_title {
    display: block;
    padding: 2px 10px;
    border-radius: 25px;
    height: 30px;
    background: var(--point_color01);
    color: #fff;
    font-size: var(--font_size_small02);
    text-align: center;
    line-height: 30px;
    cursor: pointer;
     :hover {
      background: #3368be;
    }
  }
`
export default function KakaoMap () {

  useEffect(() => {

    const mapContainer = document.getElementById('map'),
          mapOption = {
            center: new kakao.maps.LatLng(36.46124490000014, 127.8488115999994),
            level: 12,
          }
        const map  = new kakao.maps.Map(mapContainer, mapOption)

    let positions = [
      {
        content: '<a href="https://www.ikea.com/kr/ko/stores/goyang/" target="_blank" class="tag_title">이케아 고양점</a>', 
        latlng: new kakao.maps.LatLng(37.62977107259527, 126.86312792965455)
      },
      {
        content: '<a href="https://www.ikea.com/kr/ko/stores/giheung/" target="_blank" class="tag_title">이케아 기흥점</a>', 
        latlng: new kakao.maps.LatLng(37.22224577089981, 127.1156797096456)
      },
      {
        content: '<a href="https://www.ikea.com/kr/ko/stores/gwangmyeong/" target="_blank" class="tag_title">이케아 광명점</a>', 
        latlng: new kakao.maps.LatLng(37.42432793800872, 126.88286680436907)
      },
      {
        content: '<a href="https://www.ikea.com/kr/ko/stores/dong-busan/" target="_blank" class="tag_title">이케아 동부산점</a>',
        latlng: new kakao.maps.LatLng(35.19078588850521, 129.21047020737677)
      }
    ]

    positions.forEach((position, i)=>{
      let marker = new kakao.maps.Marker({
          map: map, 
          position: positions[i].latlng,
      })
    })

    let ikea01 = new kakao.maps.CustomOverlay({
      position: positions[0].latlng,
      content: positions[0].content,
      xAnchor: -0.2,
      yAnchor: 1
    })

    let ikea02 = new kakao.maps.CustomOverlay({
      position: positions[1].latlng,
      content: positions[1].content,
      xAnchor: -0.2,
      yAnchor: 1
    })

    let ikea03 = new kakao.maps.CustomOverlay({
      position: positions[2].latlng,
      content: positions[2].content,
      xAnchor: -0.2,
      yAnchor: 1
    })

    let ikea04 = new kakao.maps.CustomOverlay({
      position: positions[3].latlng,
      content: positions[3].content,
      xAnchor: -0.2,
      yAnchor: 1
    })

    ikea01.setMap(map)
    ikea02.setMap(map)
    ikea03.setMap(map)
    ikea04.setMap(map)
    
  })  

  return (
    <>
      <Map id="map" />
    </>
  )
}