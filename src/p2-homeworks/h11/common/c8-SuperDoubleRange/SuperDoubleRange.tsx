import React from 'react';
import {Box, Slider} from '@mui/material';


type SuperDoubleRangePropsType = {
  onChangeDoubleRange: (newValue: number[]) => void;
  value: Array<number>;
  min: number;
  max: number;
  // min, max, step, disable, ...
};

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
  onChangeDoubleRange,
  value,
  min,
  max, // min, max, step, disable, ...
}) => {
  // сделать самому, можно подключать библиотеки
  const handleChange = (event: Event, newValue: number | number[]) => {
    debugger
    onChangeDoubleRange(newValue as number[]);
  };
  return (
    <>
      <Box sx={{ width: 300 }}>
        <Slider
          min={min}
          max={max}
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </Box>
    </>
  );
};

export default SuperDoubleRange;
