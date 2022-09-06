import React from 'react';
import Message, { MessagePropsType } from './Message';
import s from './HW1.module.css';

function HW1() {
  const messageData: MessagePropsType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Artem Ivchenko',
    message: 'Hello friends!',
    time: '22:00',
  };
  return (
    <div>
      <div className={s.column}>
        <Message
          avatar={messageData.avatar}
          name={messageData.name}
          message={messageData.message}
          time={messageData.time}
        />
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeMessage/>*/}
      <hr />
    </div>
  );
}

export default HW1;
