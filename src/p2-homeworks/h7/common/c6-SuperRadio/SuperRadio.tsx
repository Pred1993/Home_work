import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import s from './SuperRadio.module.css';

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  type,
  name,
  options,
  value,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // onChange, onChangeOption
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  const mappedOptions: any[] = options
    ? options.map((o, i) => (
        <label key={name + '-' + i}>
          <input
            className={s.radio}
            type={'radio'}
            name={name}
            value={o}
            checked={o === value}
            onChange={onChangeCallback}
            // name, checked, value, onChange
          />
          {o}
        </label>
      ))
    : [];

  return <div className={s.column}>{mappedOptions}</div>;
};

export default SuperRadio;
