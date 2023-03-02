import React, { useRef, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import AboutMe from './AboutMe.jsx';
import Contact from './Contact.jsx';

export default function TabSection() {
  const tabRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabChange = (index) => {
    setActiveIndex(index);
    tabRef.current.children[index].focus();
  };

  return (
    <Tabs isLazy index={activeIndex} onChange={handleTabChange}>
      <TabList ref={tabRef} justifyContent="flex-end">
        <Tab>About Me</Tab>
        <Tab>Projects</Tab>
        <Tab>Contact Me!</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <AboutMe setActiveIndex={setActiveIndex} />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <Contact />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}