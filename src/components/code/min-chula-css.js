import * as React from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism';


const Mincode2 = () => {
  const codeString = `
/* by J. Ryan Doherty 2023 */

header {
  background:url(../images/stars-moon-2.png)no-repeat 10%/400px,url(../images/stars.png)no-repeat 90%/400px, linear-gradient(#1b4f6f 70%, #905cc5) ;
  padding:10px 0;
}

@media (max-width:480px){
  header {
    background-position: 5% top, 100% top;
  }
}

.top-section{
  display: flex;
  flex-direction: row;
  margin:4rem 0;
}

.top-section-text{
  padding: 0 0 0 1.45rem;
  display: flex;
  flex-direction: column;
  width:75%;
}

@media (max-width:920px){
  .top-section {
    flex-direction:column-reverse;
    margin:1.5rem 0;
  }

  .top-section-text {
    width:100%;
    padding:0 1.45rem;
  }

  .book-cover {
    margin: 0 auto;
  }

}

.fixed-image {
  background:url(../images/Page_26.jpg)fixed;
  background-size:cover;
  background-position:-50%;
  height:400px;
  width:100%;
  border-top:4px solid #234f4c;
  border-bottom:6px solid #234f4c;
}

.fixed-image-2 {
  background:url(../images/Page_22.jpg)fixed;
  background-size:cover;
  background-position:-50%;
  height:400px;
  width:100%;
  border-top:4px solid #234f4c;
  border-bottom:6px solid #234f4c;
}

@media (max-width:1025px){
  .fixed-image, .fixed-image-2 {
    background-attachment: initial;
  }
}

@media (max-width:670px){
  .fixed-image, .fixed-image-2 {
    background-position:2%;
  }
}

.nps-section {
  display: flex;
  padding: 0 1.0875rem 1.45rem;
  margin: 2rem auto;
  justify-content:center;
  align-items: center;
}

.nps-logo {
  margin-right:3rem;
}

@media (max-width:860px){
  .nps-section{
    flex-direction: column-reverse;
    text-align: center;
  }
  .nps-logo {
    margin:1rem 0 0 0;
  }
}

.rei {
  width:76px;
  height:48px;
}

.link-section a:link {
  color: #1b4f6f;
  text-decoration: none;
}

.link-section a:hover {
 color: #318cba;
}

.link-section a:visited {
  color:transparent;
}

.link-sub {
  display:flex;
  padding: 0 1.0875rem 1.45rem;
  margin: 0 auto 2rem;
  justify-content:center;
  text-align:center;
}

.link-sub a {
  margin:0 3rem 0 0;
}

.link-sub a:last-child {
  margin:0;
}


.smaller {
  font-size:.5em;
  margin-top:-30px;
}

h1  {
  color:#234f4c;
  text-align:center;
  font-size: 3.75rem;
  font-family: "canvas-script", sans-serif;
  font-weight: 200;
}

@media (max-width:480px){
  h1 {
    font-size: 3rem;
  }
}

h2, h3 {
  margin-top:0;
  color:#2e2916;
  text-align:center;
}

h3 {
  margin-top:-20px;
}

nav {
  max-width:1170px;
  margin:0 auto;
  text-align: center;
}

nav a {
  font-size:1.8em;
  text-decoration:none;
  color: #ffffff;
  padding:0 1rem;
  background: url(../images/diary.png)no-repeat;
  background-size:40px;
  background-position:-50px;
}

@media (max-width:430px){
  nav a {
    display:block;
    padding:1rem .5rem;
    width:70%;
    margin:0 auto;
  }
}

nav a:hover, nav a:active {

}

nav a:first-child:hover {
  background: url(../images/diary-white.png)no-repeat #28bcf9;
  background-size:30px;
  border-radius:44px;
  transition: .4s ease-in ;
  padding-left:60px;
  animation-direction: normal;
  background-position:12px;
}

nav a:last-child:hover {
  background: url(../images/cactus-nav.png)no-repeat #28bcf9;
  background-size:40px;
  border-radius:44px;
  transition: .4s ease-in ;
  padding-left:60px;
  animation-direction: normal;
  background-position:12px;
}

.gatsby-image-wrapper img {
  height:auto!important;
  margin:auto!important;
}



#bio {
  background:url(../images/cactus.svg)no-repeat center bottom;
}

.bio-photos img{
  border:4px solid #000;
}

@media (max-width:990px){

.bio-photos img {
  margin-bottom:1rem!important;
}
  .bio-photos {
    text-align:center;
  }
}

.sticker {
  width:180px;
  height:180px;
  float:right;
  margin-left:10px;
}

.sticker:hover {
  transform: rotate(-10deg);
  transition:.5s ease-out;
  filter:brightness(1.3);
}

@media (max-width:415px){
  .sticker {
    width:110px;
    height:110px;
  }
}

.cls-1{
  fill:#ff9906;
}

.sunset {
  background:linear-gradient(to top,#fe7001,
  #ff8b01,
  #feab40,
  #feb081,
  #ebacaf,
  #d8a4bb,
  #b894c4,
  #aa8ec7);
}

.family {
  margin: 20px 0 20px 40px;
  border:4px solid #000;
  padding:0;
}

@media (max-width:990px){
  #bio {
    padding:0 10%
  }
  .amazonLink {
    text-align: center;
  }
}


@media (max-width:860px){

  .family{
    float:none!important;
    margin:0 auto 2rem;
    display:block;
  }

  .link-sub {
    flex-direction: column;
  }

  .link-sub .gatsby-image-wrapper img {
    height:45px!important;
  }

  .link-sub a {
    margin:0 auto 2rem;
  }

  .link-sub img {
    margin:0 auto;
  }

}

footer {
  font-size: .95em;
}

footer a:link {
  color:#234f4c;
  text-decoration:none;
}

footer a:hover {
  color: #318cba;
}

footer a:visited {
  color:transparent;
}
    `;

return (
    <SyntaxHighlighter language="css" style={lucario}>
      {codeString}

    </SyntaxHighlighter>
  );
};

export default Mincode2
