import React from "react";
import {Radio, Tooltip} from "antd";

interface IChain {
  id: number;
  symbol: string;
  name: string
}

interface ChainFilterProps {
  chain: string
  onChangeChain: (chain: string) => void
}

const chains = require('../data/Chains.json')

const ChainFilter = ({chain, onChangeChain }: ChainFilterProps) => {

  const onChange = (symbol: string) => {
    onChangeChain(symbol)
  }

  return (
    <Radio.Group value={chain} onChange={(e) => onChange(e.target.value)} buttonStyle="solid">
      <Radio.Button value={'all'}>All chains</Radio.Button>
      {
        chains.map((chain: IChain) =>
          <Tooltip placement="top" title={chain.name}>
            <Radio.Button
              style={{paddingInline: '5px'}}
              value={chain.symbol}>
              {chain.symbol}
            </Radio.Button>
          </Tooltip>
        )
      }
    </Radio.Group>
  )
}
export default ChainFilter