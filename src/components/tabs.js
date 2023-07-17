import * as React from "react"
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Navbar from 'react-bootstrap/Navbar';
import Websites from "../components/websites"
import Conversion from "../components/conversion"
import Email from "../components/email"
import Print from "../components/print"
import Ads from "../components/ads"
import Logos from "../components/logos"
import { Link } from "gatsby"


function ControlledTabsExample() {
  const [key, setKey] = useState('home');

  return (

    <Tabs variant="pills"
      id="controlled-tab-example"
      activeKey={key}
      transition={true}
      onSelect={(k) => setKey(k)}
      sticky="top"
    >
      <Tab eventKey="home" title="Websites">
        <Websites/>
      </Tab>

      <Tab eventKey="conversion" title="conversion">
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

      <Tab eventKey="logos" title="logos" style={{color:`#333`}}>
        <Logos/>
      </Tab>


    </Tabs>


  );
}

export default ControlledTabsExample;
