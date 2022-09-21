import React from 'react';
import s from './HW12.module.css';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import { changeThemeC, InitStateType } from './bll/themeReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from '../h10/bll/store';

const themes = ['dark', 'red', 'some'];

function HW12() {
  const theme = useSelector<AppStoreType, InitStateType>((state) => state.theme);
  const dispatch = useDispatch();
  // useDispatch, onChangeCallback
  const onChangeOption = (theme: InitStateType) => {
    dispatch(changeThemeC(theme));
  };
  return (
    <div className={s[theme]}>
      <hr />
      <span className={s[theme + '-text']}>homeworks 12</span>

      {/*should work (должно работать)*/}
      <div className={s.column}>
        <SuperRadio name={'radio-1'} options={themes} value={theme} onChangeOption={onChangeOption} />
      </div>
      <hr />
    </div>
  );
}

export default HW12;
