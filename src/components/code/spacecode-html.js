import * as React from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism';


const Outerspacecode2 = () => {
  const codeString = `
@@include('./header.html', {
    "title": "Home",
    "canonical": ""
  })

  <body class="home">

    <div class="welcome">
      <canvas id="starfield" width="900" height="300">
      your browser no goody
      </canvas>
      <div class="splash">
        <h1 class="name">OUTER SPACE</h1>
      </div>

    </div>

      @@include('./nav.html')

    <div class="container p-4" id="current-exhibition">

      <div class="row pt-4 text-center">

        <p class="fs-3">Matthew Fischer & William J. O'Brien</p>
        <p class="fs-4"><em>Duplex Magic</em></p>
        <p>August 5th - October 22nd 2023</p>
    </div>


        @@include('./current-ex.html')

    </div> <!-- end container -->


@@include('./footer.html')



    `;

return (
    <SyntaxHighlighter language="html" style={lucario}>
      {codeString}

    </SyntaxHighlighter>
  );
};

export default Outerspacecode2
