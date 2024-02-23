import * as React from "react"
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { browserHistory } from 'react';
import { pureComponent } from 'react';
import { handleSelect } from 'react';
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

  

  return (

    <Tabs variant="pills"
      id="controlled-tab-example"
      activeKey={key}
      transition={true}
      onSelect={(k) => setKey(k)}

    >
      <Tab eventKey="home" title="websites">
        <Websites ref={ref} />
      </Tab>

      <Tab eventKey="conversion" title="conversion" >
        <Conversion ref={ref}/>
      </Tab>

      <Tab eventKey="email" title="email">
        <Email ref={ref} />
      </Tab>

      <Tab eventKey="print" title="print">
        <Print ref={ref}/>
      </Tab>

      <Tab eventKey="ads" title="ads">
        <Ads ref={ref}/>
      </Tab>

      <Tab eventKey="logos" title="logos">
        <Logos ref={ref}/>
      </Tab>

    </Tabs>

  );
}




export default ControlledTabsExample;
