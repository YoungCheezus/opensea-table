import React from "react";
import {Select} from "antd";

interface TimeFilterProps {
  time: string
  onChangeTime: (value: string) => void
}

const dateOptions = [
  {
    value: '24',
    label: '24h',
  },
  {
    value: '12',
    label: '12h',
  },
  {
    value: '6',
    label: '6h',
  },
  {
    value: '2',
    label: '2h',
  },
]

const TimeFilter = ({time, onChangeTime }: TimeFilterProps) => {
  const handleChangeTime = (value: string) => {
    onChangeTime(value)
  };

  return (
    <div>
      <Select
        defaultValue={time}
        style={{ width: 70 }}
        onChange={handleChangeTime}
        options={dateOptions}
      />
    </div>
  )
}
export default TimeFilter