import { createGlobalStyle } from "styled-components"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Main from "./pages/Main"
import Info from "./pages/Info"
import Cart from "./pages/Cart"
import TopNavi from "./components/TopNavi"
import Footer from "./components/Footer"
import OnlineShow from "./pages/OnlineShow"
import BestSeller from "./pages/BestSeller"
import Detail from "./pages/Detail"

const GlobalStyle = createGlobalStyle`
  * {margin: 0; padding: 0; color: #333;}
  a {text-decoration: none;}
  ul, ol {list-style: none;}
  html, body {font-family: 'Noto Sans KR', sans-serif;}

  :root {
    --main_color: #333;
    --sub_color01: #000;
    --sub_color02: #fff;
    --point_color01: #264989;
    --point_color02: #FECA15;

    --font_size_small01: 12px;
    --font_size_small02: 13px;
    --font_size_small03: 14px;
    --font_size_large01: 18px;
    --font_size_large02: 20px;
    --font_size_large03: 24px;
    --font_size_large04: 30px;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Info />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/onlineShow" element={<OnlineShow />} />
        <Route path="/bestSeller" element={<BestSeller />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <TopNavi />
      <Footer />
    </>
  )
}

export default App
