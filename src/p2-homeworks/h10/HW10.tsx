import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import { useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from './bll/store';
import { inetStateType, loadingAC } from './bll/loadingReducer';
import twirl from './assets/1476.gif';
import style from './HW10.module.css';

function HW10() {
  // useSelector, useDispatch
  const loading = useSelector<AppStoreType, inetStateType>((state) => state.loading);
  const dispatch = useDispatch();
  const setLoading = () => {
    dispatch(loadingAC(!loading.loading));
    setTimeout(() => {
      dispatch(loadingAC(loading.loading));
    }, 2000);
    // setTimeout
    console.log('loading...');
  };

  return (
    <div>
      <hr />
      homeworks 10
      {/*should work (должно работать)*/}
      <div className={style.column}>
        {loading.loading ? (
          <div>
            <img src={twirl} alt="twirl..." />
          </div>
        ) : (
          <div>
            <SuperButton style={{ width: '100px' }} onClick={setLoading}>
              set loading...
            </SuperButton>
          </div>
        )}
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr />
    </div>
  );
}

export default HW10;
