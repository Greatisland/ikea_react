import React from "react";
import styled from "styled-components";
import KakaoMap from "../components/KakaoMap";

const InfoSection = styled.div`
  width: 1420px;
  height: 570px;
  margin: 0 auto 100px;
  padding: 200px 0 0;
  display: flex;
  gap: 20px;

  .text_area {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {font-size: var(--font_size_large04);}

    p.sub {
      font-size: var(--font_size_large02);
      font-weight: 700;
      margin: 0 0 20px;
    }
    
    p.main_txt {
      line-height: 50px;
    }
  }

`
export default function Info(){
  return (
    <>
      <InfoSection>
        <div className="text_area">
          <h2>매장 안내</h2>
          <p className="sub">
            뜻밖의 즐거움이 가득한 곳, IKEA
          </p>
          <p className="main_txt">
            너무 오랫동안 IKEA 매장의 즐거움을 잊고 살지 않았나요?<br/>
            우연한 발견, 뜻밖의 득템, 예상치 못한 즐거움은 매장으로 직접 나서야만 경험할 수 있죠.<br/>
            어디로든 떠나고 싶은 이번 5월, 전국 IKEA 매장에서 뜻밖의 즐거움과 마주해 보세요!
          </p>
        </div>
        <div className="img">
          <img src="img/info01.png" alt="img" />
        </div>
      </InfoSection>
      <KakaoMap />
    </>
  )
}