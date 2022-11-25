import React from 'react';
import {Tabs} from "antd";
import TabPane from "antd/es/tabs/TabPane";

interface TabProps {
  activeTabKey: string
  onChangeTabKey: (key: string) => void
}

interface ITab {
  tab: string;
  key: string;
}

const TopTabs = ({activeTabKey, onChangeTabKey }: TabProps) => {
  const tabs: ITab[] = [
    { tab: "Trending", key: "trending" },
    { tab: "Top", key: "top" }
  ]

  const onChange = (key: string) => {
    onChangeTabKey(key)
  };

  return (
    <Tabs
      defaultActiveKey={activeTabKey}
      onChange={onChange}
    >
      { tabs.map((tab: ITab) => <TabPane tab={tab.tab} key={tab.key} /> )}
    </Tabs>
  );
}

export default TopTabs;