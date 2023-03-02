import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import AboutMe from './AboutMe.jsx';
import Contact from './Contact.jsx';

export default function TabSection() {
  return (
    <Tabs>
      <TabList justifyContent="flex-end">
        <Tab>About Me</Tab>
        <Tab>Projects</Tab>
        <Tab>Contact Me!</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <AboutMe />
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