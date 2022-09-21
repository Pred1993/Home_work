import React, { useState } from 'react';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import SuperRange from './common/c7-SuperRange/SuperRange';
import s from './HW11.module.css';
function HW11() {
  const [value, setValue] = useState([0, 100]);
  const min = 0;
  const max = 200;
  // const step = Math.round((max - min) / 100)
  const onChangeRange = (num: number) => setValue(value.map((v, i) => (i === 0 ? num : v)));
  return (
    <div>
      <hr />
      homeworks 11
      {/*should work (должно работать)*/}
      <div className={s.column}>
        <div>
          <span>{value[0]}</span>
          <SuperRange value={value[0]} onChangeRange={onChangeRange} min={min} max={max} className={s.range} />
        </div>
        <div>
          {/*<span>{value[1]}</span>*/}
          <SuperDoubleRange
            max={max}
            min={min}
            onChangeDoubleRange={setValue}
            value={value}
            // сделать так чтоб value1 и value2 изменялось
          />
          {/*<span>{value[1]}</span>*/}
        </div>
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr />
    </div>
  );
}

export default HW11;
