import React, { useState } from 'react';
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../h4/common/c3-SuperCheckbox/SuperCheckbox';
import axios from 'axios';
import s from './Request.module.css';

type ResponseType<T> = {
  errorText: string;
  info: string;
  yourBody: { success: boolean };
  yourQuery: T;
};

const Request = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const callBack = () => {
    axios
      .post<ResponseType<{}>>('https://neko-cafe-back.herokuapp.com/auth/test', { success: success })
      .then((response) => {
        setText(response.data.errorText);
      })
      .catch((error) => {
        setText(error.response ? error.response.data.errorText : error.message);
      });
  };
  return (
    <div className={s.column}>
      <SuperCheckbox checked={success} onChangeChecked={setSuccess}>
        {success ? 'success' : 'fail'}
      </SuperCheckbox>
      <SuperButton onClick={callBack}>send</SuperButton>
      <div>{text}</div>
    </div>
  );
};

export default Request;
