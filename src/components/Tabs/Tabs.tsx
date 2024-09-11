import { useState } from 'react';
import { Box as MuiBox, Tabs as MuiTabs, Tab as MuiTab } from '@mui/material';

import "./Tabs.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export type TabProps = {
  description:string
  tabs:Array<{label:string, content:React.ReactElement}>
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={"pds-wds-tab"}
      {...other}
    >
      {value === index && <MuiBox sx={{ p: 3 }}>{children}</MuiBox>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const Tabs = ({
  description,
  tabs
}:TabProps) => {

  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return <>
    <MuiBox className="pds-wds-tabs">
      <MuiTabs value={value} onChange={handleChange} aria-label={description}>
      {/* <MuiTabs value={value} onChange={handleChange} aria-label={description} variant="scrollable" scrollButtons={"auto"} allowScrollButtonsMobile> */}
        {
          tabs.map((tab, tabIndex) => {
            return <MuiTab label={tab.label} {...a11yProps(tabIndex)} disableRipple disableTouchRipple key={tabIndex}/>
          })
        }
      </MuiTabs>
      {
        tabs.map( (tab, tabIndex) => {
          return <CustomTabPanel value={value} index={tabIndex} key={tabIndex}>{tab.content}</CustomTabPanel>
        })
      }
    </MuiBox>
  </>
}