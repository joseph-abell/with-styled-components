import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
v2.0 | 20110126
License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  font-family: Raleway, sans-serif;
  font-weight: 400;
  background-color: #103c50;
  font-size: 16px;
  line-height: 40px;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
br {
    margin-bottom: 15px;
}
h1, h2 {
  color: #14808f;
  font-weight: 600;
  line-height: 1.2em;
}

li {
    line-height: 1.5em;
}

h1 {
  font-size: 40px;
  margin: 0 0 20px 0;
}

h2 {
  font-size: 30px;
  line-height: 36px;
  margin: 0 0 20px 0;
}

strong {
    font-size: 20px;
    font-weight: bold;
    line-height: 20px;
    margin-bottom: 20px;
}

i, em {
    font-style: italic;
}

small {
    font-size: 0.9rem;
}

p {
    margin-bottom: 20px;
    line-height: 1.5em;
  }
  
a {
  text-decoration: none;
  color: #14808f;
}

main {
  width: 100vw;
  overflow-x: hidden;
}

.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  right: 10vw;
  top: 36px;
}

.bm-burger-bars {
  background-color: #165876;
}

.bm-burger-bars-hover {
  background-color: #14808f;
}

.bm-cross-button {
  height: 40px !important;
  width: 40px !important;

  .bm-cross {
    background: none;
  }
}

.bm-cross {
  background: #bdc3c7;
}

.bm-menu-wrap {
  position: fixed;
  height: 100vh !important;
  top: 0;
}

.bm-menu {
  background-color: #103c50;
  font-size: 1.15em;
}

.bm-item {
  display: inline-block;
  border-top: 60px solid #14808f;
  margin-top:0;
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  height: 100vh !important;
}

#outer-container {
  background: white;

  @media(min-width: 768px) {
    height: auto;
  }
}

:focus {
  outline: -webkit-focus-ring-color auto 0;
  border-radius: 0;
}

.bm-item:focus {
  border-top: 60px solid #14808f;
}

.bm-menu-wrap {
  width: 80vw !important;
  max-width: 300px;
}

@media(min-width: 768px) {
  .bm-burger-button {
    display: none;
  }
}
`;
