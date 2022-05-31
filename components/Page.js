/* eslint-disable react/prop-types */
import styled, { createGlobalStyle } from "styled-components";
import Nav from "./Nav";
import Footer from "./Footer";

const GlobalStyles = createGlobalStyle`
html {
  --lightGray: #e1e1e1;
  --noise: url(data:image/png;base64,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);
  --black: rgb(3, 3, 3);
  --dark-color-1: #3e3838;
  --brownish-1: #ae7c7c;
  --teal-1: #6cbbb3;
  --yellow-1: #efe784;
  --gray-transparent-1: rgba(255, 255, 255, 0.5);
  --black-transparent-1: rgba(5, 5, 5, 0.5);
  --black-transparent-2: rgba(5, 5, 5, 0.8);
  --offWhite: #ededed;
  --mauve-1: hsl(15.6, 43.1%, 77.3%, 0.8);
  --maxWidth: 1040px;
}
*::selection {
  background-color: rgb(59, 51, 161);
  color: white;
}

.bold {font-weight:bold} 
#content-wrap{min-height:100vh;}
 
  body {
    font-family: acuta,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    line-height: 2;
      background-color: var(--mauve-1);

  }
  a {color: var(---black);}
 
  *, *:before, *:after{
    box-sizing: inherit;
  }
  p {
  font-family: acuta, serif;
  font-weight: 400;
  font-style: normal;
  color: #111;
}
.font-2 {
  font-family: filicudi-solid, sans-serif;
  font-weight: 400;
  font-style: normal;
}
.font-1 {
  font-family: flegrei, sans-serif;
  font-weight: 400;
  font-style: normal;
}
#h1-wrap a{
text-decoration: none;
}
  #submit-button {
 
        background: white;
        border: 0px;
        padding: 15px;
        border-radius: 20px;
        display: block;
        margin: .5rem auto 1rem;
        width: 50%;
        box-shadow: 0px 0px 15px #333;
    
    }
     #submit-button:hover {background: var(--teal-1);box-shadow:0px 0px 0px #111;cursor:pointer;margin-top:.5rem;}
     .hanging-indent {text-indent: -1.5em;
 list-style-type:none;}
      .hanging-indent-ul {margin-left:0rem; li{margin-bottom: 1.5rem;}}
#writing-page-content {h2 {
  margin-bottom:-12px;padding-bottom:0px;
}

ul {margin-bottom:2.1rem;}
ul li {
  margin-bottom:8px;
}}
.text-center {text-align:center;}
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 1.5rem 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      {/* <HamburgerMenu /> */}
      <Nav />
      <div id="content-wrap">
        <InnerStyles>{children}</InnerStyles>
      </div>
      <Footer />
    </div>
  );
}
