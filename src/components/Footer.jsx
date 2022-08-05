import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"



const footerTop = [
  {id: 'foogerTop_01', title: '개인정보처리방침'},
  {id: 'foogerTop_02', title: '쿠키 정책'},
  {id: 'foogerTop_03', title: '쿠키 설정'},
  {id: 'foogerTop_04', title: '웹사이트이용약관'},
  {id: 'foogerTop_05', title: 'Responsible disclosure'},
]

const footerGnb01 = [
  {id: 'footer_gnb01_01', title: '고객문의'},
  {id: 'footer_gnb01_02', title: '고객지원'},
  {id: 'footer_gnb01_03', title: '자주 묻는 질문'},
  {id: 'footer_gnb01_04', title: '문의하기'},
  {id: 'footer_gnb01_05', title: '배송조회'},
  {id: 'footer_gnb01_06', title: '교환환불'},
  {id: 'footer_gnb01_07', title: '품질보증'},
  {id: 'footer_gnb01_08', title: '제품리콜'},
  {id: 'footer_gnb01_09', title: '피드백'},
  {id: 'footer_gnb01_10', title: '부품 신청'},
]
const footerGnb02 = [
  {id: 'footer_gnb02_01', title: '쇼핑하기'},
  {id: 'footer_gnb02_02', title: '쇼핑하기'},
  {id: 'footer_gnb02_03', title: '전화 주문'},
  {id: 'footer_gnb02_04', title: 'IKEA for Business'},
  {id: 'footer_gnb02_05', title: '셀프 플래닝'},
  {id: 'footer_gnb02_06', title: 'IKEA 모바일 앱'},
  {id: 'footer_gnb02_07', title: '제품 사용 팁/가이드'},
  {id: 'footer_gnb02_08', title: '제품 구매 가이드'},
  {id: 'footer_gnb02_09', title: '결제 옵션'},
  {id: 'footer_gnb02_10', title: '기프트 카드'},
]

const footerGnb03 = [
  {id: 'footer_gnb03_01', title: '서비스'},
  {id: 'footer_gnb03_02', title: '배송 서비스'},
  {id: 'footer_gnb03_03', title: 'IKEA 서비스'},
  {id: 'footer_gnb03_04', title: '조립 서비스'},
  {id: 'footer_gnb03_05', title: '설치 서비스'},
  {id: 'footer_gnb03_06', title: '주방 서비스'},
  {id: 'footer_gnb03_07', title: '플래닝 서비스'},
  {id: 'footer_gnb03_08', title: '인테리어 디자인 서비스'},
  {id: 'footer_gnb03_09', title: '바이백 서비스'},
]

const footerGnb04 = [
  {id: 'footer_gnb04_01', title: 'IKEA 이야기'},
  {id: 'footer_gnb04_02', title: '브랜드 소개'},
  {id: 'footer_gnb04_03', title: '집에서의 삶'},
  {id: 'footer_gnb04_04', title: '지속가능한 생활'},
  {id: 'footer_gnb04_05', title: '내가 아끼는 집, 나를 아끼는 집'},
  {id: 'footer_gnb04_06', title: '뉴스룸'},
  {id: 'footer_gnb04_07', title: '채용정보'},
]

const footerGnb05 = [
  {id: 'footer_gnb05_01', title: 'IKEA Family'},
  {id: 'footer_gnb05_02', title: '지금 IKEA Family에 무료로 가입하고 다양한 멤버 전용 혜택을 누리세요.'},
]

const gnbArray = [
  footerGnb01, footerGnb02, footerGnb03, footerGnb04, footerGnb05
]

const MainFooter = styled.footer`
  width: 100%;
  height: 690px;
  background: #f6f6f6;

  .footer_top {
    width: 100%;
    height: 30px;
    background: #fff;
    border-top: 1px solid #f6f6f6;
  }

  .footer_gnb_top {
    width: 1420px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0 0 0 290px;box-sizing: border-box;
    gap: 50px;
  }

  .footer_gnb_top li {
    position: relative;
    font-size: var(--font_size_small03);
    font-weight: 500;
    letter-spacing: -0.08rem;
  }

  .footer_gnb_top li~li::before {
    content: "";
    display: block;
    width: 1px;
    height: 13px;
    background: #666;
    position: absolute;
    top: 5px; left: -25px;
  }
`

const InnerFooter = styled.div`
  width: 1420px;
  margin: 0 auto;
  font-size: var(--font_size_small02);
  .footer_top_menu {
    display: flex;
    align-items: flex-start;
    height: 440px;
    padding: 60px 0 0;
    border-bottom: 1px solid #ccc;

    .footer_menu {
      display: flex;
      flex-direction: column;
      gap: 22px;
      flex: 1;

      li:first-child {
        font-weight: 500;
        color: #000;
        font-size: var(--font_size_small03);
      }
    }

    .footer_menu05 {
      width: 220px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 22px;
    }

    .title{
      font-size: var(--font_size_small03);
      font-weight: 500;
      color: #000;
    }
  }

  .logo_box {width: 290px;}
`
const FooterCopyright = styled.div`
  width: 1420px;
  margin: 0 auto;
  padding: 36px 0 0; box-sizing: border-box;
  display: flex;

  .sns_box {
    width: 290px;
    display: flex;
    gap: 30px;

    a {
      width: 30px; height: 30px;
    }
  }
  .copyright01 {margin: 0 210px 0 0;}
  .copyright01, .copyright02 {
    font-size: var(--font_size_small01);
    color: #999;
    line-height: 30px;
  }
`

export default function Footer (){
  return (
    <>
      <MainFooter>
        <div className="footer_top">
          <ul className="footer_gnb_top">
            {
              footerTop.map(ele=>{
                return (
                  <li key={ele.id}>{ele.title}</li>
                )
              })
            }
          </ul>
        </div>
        <InnerFooter>
          <div className="footer_top_menu">
            <div className="logo_box">
              <Link to="/">
                <img src="img/footer_logo.png" alt="logo" />
              </Link>
            </div>
            {
              gnbArray.map((gnb, i)=>{
                return (
                  <ul key={i} className="footer_menu">
                    {
                      gnb.map((ele)=>{
                        return (
                          <li key={ele.id}>{ele.title}</li>
                        )
                      })
                    }
                  </ul>
                )
              })
            }
          </div>
        </InnerFooter>
        <FooterCopyright>
          <div className="sns_box">
            <a href="https://www.instagram.com/ikeakr/">
              <img src="img/sns_facebook.png" alt="sns"/>
            </a>
            <a href="https://www.instagram.com/ikeakr/">
              <img src="img/sns_instagram.png" alt="sns"/>
            </a>
            <a href="https://www.youtube.com/channel/UCvt32qJUh606U-W_hr-EF7A">
              <img src="img/sns_youtube.png" alt="sns"/>
            </a>
          </div>
          <p className="copyright01">
            IKEA 코리아<br/>
            주소 : (우) 14352 경기도 광명시 일직로 17 IKEA광명점<br/>
            사업자 등록번호 : 106-86-82871 사업자정보확인
          </p>
          <p className="copyright02">
            대표자 : 프레드릭 요한손<br/>
            통신판매업 신고 : 2018-경기광명-0209 / TEL : 1670-4532<br/>
            © Inter IKEA Systems B.V 1999-2022
          </p>
        </FooterCopyright>
      </MainFooter>
    </>
  )
}