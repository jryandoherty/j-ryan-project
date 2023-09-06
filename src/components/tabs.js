import * as React from "react"
import { useState } from 'react';
import { useRef } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Websites from "../components/websites"
import Conversion from "../components/conversion"
import Email from "../components/email"
import Print from "../components/print"
import Ads from "../components/ads"
import Logos from "../components/logos"


function ControlledTabsExample() {
  const [key, setKey] = useState('home');

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (

    <Tabs variant="pills"
      id="controlled-tab-example"
      activeKey={key}
      transition={true}
      onSelect={(k) => setKey(k)}
      sticky="top"
    >
      <Tab eventKey="home" title="websites" onClick={handleClick}>
        <Websites ref={ref} />
      </Tab>

      <Tab eventKey="conversion" title="conversion" onClick={handleClick}>
        <Conversion/>
      </Tab>

      <Tab eventKey="email" title="email" >
        <Email/>
      </Tab>

      <Tab eventKey="print" title="print">
        <Print/>
      </Tab>

      <Tab eventKey="ads" title="ads">
        <Ads/>
      </Tab>

      <Tab eventKey="logos" title="logos">
        <Logos/>
      </Tab>


    </Tabs>


  );
}

export default ControlledTabsExample;
