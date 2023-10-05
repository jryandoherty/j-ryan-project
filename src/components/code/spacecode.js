import * as React from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism';


const Outerspacecode = () => {
  const codeString = `
/* by J. Ryan Doherty 2023 */

  nav {
    font-family: bdr-mono, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size:1em;
    text-transform: uppercase;

    button {
      background:#000;
      box-shadow:none;
      border-top:4px solid #000;
    }

    ul ul li{
      font-size:.75em;
    }

    svg {
      margin-left:10px;
      @media (max-width:992px){
        margin:0 14px 0 0;
        width:32px!important;
      }
    }

    .top-item {
      border:1px solid #525252;
      margin-left:4px;
      padding:5px;
      display:inline-block;
    }
    .navbar-toggler {
      font-size:1.25rem;
    }

  }

  .home .navbar .container-fluid {
    justify-content: left;
  }

  .navbar-brand img{
    width:60px;
  }

  .home .navbar-brand {
    display:none;
  }

  canvas {
    background: #000;
    width:100%;
    z-index: 100;
  }

  @media (max-width:900px) {
    canvas {
      width:auto;
      height:auto;
      overflow:hidden;;
    }
  }

  .welcome {
    height:100%;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width:900px) {
      overflow-x:hidden;
    }

    h2.artist-name {
      display:inline-block;
      background:$gray-900;
      padding:.5rem;
      font-size:.9rem;
    }
  }

  .splash {
    z-index:553;
    position: absolute;
    color:#783838;
    color:#fff;
  }

  #insta svg  {
    fill:$white;
    width:20px;
    &:hover{
      fill: $spaceredlight;
    }
  }

  #email svg  {
    fill:$white;
    width:20px;
    &:hover {
      fill: $spaceredlight
    }

  }


  @media (max-width:575px){

    .navbar {
      margin-top:-1px;
    }

    .nav-item{
      margin-bottom:10px;
      &:first-child {

      }
    }
  }
    `;

return (
    <SyntaxHighlighter language="css" style={lucario}>
      {codeString}

    </SyntaxHighlighter>
  );
};

export default Outerspacecode
