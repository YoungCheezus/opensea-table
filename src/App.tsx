import React, {useMemo, useState} from 'react';
import './App.css';
import NftsTable, {DataType} from "./components/NftsTable/NftsTable";
import TopTabs from "./components/TopTabs";
import {Button} from "antd";
import ChainFilter from "./components/ChainFilter";
import TimeFilter from "./components/TimeFilter";

const data: DataType[] = require('./data/TableData.json');

const App: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState<string>("trending")
  const [isViewAll, setIsViewAll] = useState<boolean>(false)
  const [chain, setChain] = useState<string>('all')
  const [timeValue, setTimeValue] = useState<string>('24')

  const filteredData: DataType[] = useMemo(() => {
    return isViewAll ? data :
      data.filter((item: DataType) => item.position.includes(activeTabKey)) // filter Tab
          .filter((item: DataType) => chain !=='all' ? item.chain === chain : true) // filter chain
          .filter((item: DataType) => parseInt(item.passed) <= parseInt(timeValue)) // filter time
  }, [activeTabKey, isViewAll, chain, timeValue])

  const onChangeTab = (key: string) => {
    setActiveTabKey(key)
  };

  const onChangeChain = (symbol: string) => {
    setChain(symbol)
  }

  const onChangeTime = (time: string) => {
    setTimeValue(time)
  }

  return (
    <div className="App">

      <div className="TableContainer">
        <div className="TableFilters">
          { !isViewAll ? <TopTabs activeTabKey={activeTabKey} onChangeTabKey={onChangeTab} /> : <div></div> }

          <div className="rightFilter">

            { !isViewAll && <TimeFilter time={timeValue} onChangeTime={onChangeTime} /> }
            { !isViewAll && <ChainFilter chain={chain} onChangeChain={onChangeChain}/> }
            <Button
              type={isViewAll ? 'primary' : 'default'}
              onClick={() => setIsViewAll(!isViewAll)}
            >
              View all
            </Button>

          </div>
        </div>

        <NftsTable data={filteredData}/>

      </div>
    </div>
  );
}

export default App;
