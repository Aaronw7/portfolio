import React, { useRef, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';
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
      <TabList ref={tabRef} justifyContent='flex-end' style={{ position: 'sticky', top: '0' }}>
        <Tab>About Me</Tab>
        <Tab>Projects</Tab>
        <Tab bg='#bbdff1'>Contact Me!</Tab>
      </TabList>

      <TabPanels bg='#e6f3fa'>
        <TabPanel>
          <AboutMe setActiveIndex={setActiveIndex} />
        </TabPanel>
        <TabPanel>
          <Projects />
        </TabPanel>
        <TabPanel>
          <Contact />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}