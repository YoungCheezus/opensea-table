import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './style.css'

export interface DataType {
  key: string;
  name: string;
  img: string;
  floorPrice: string;
  volume: string;
  currency: string;
  chain: string;
  position: string[],
  passed: string
}

interface NftsTableProps  {
  data: DataType[]
}

const columns: ColumnsType<DataType> = [
  {
    width: 50,
    render:(item, record, index)=>(<>{index+1}</>)
  },
  {
    dataIndex: 'img',
    width: 100,
    render: (text) => <img src={text} className="NftTable__img" />,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 500,
    render: text => <p className="NftTable__title">{text}</p>
  },
  {
    title: 'Volume',
    dataIndex: 'volume',
    key: 'volume',
    width: 200,

  },
  {
    title: 'Floor Price',
    dataIndex: 'floorPrice',
    key: 'floorPrice',
    width: 200,
  },
];

const NftsTable = ({data}: NftsTableProps ) => <Table columns={columns} dataSource={data} pagination={false}/>
export default NftsTable;