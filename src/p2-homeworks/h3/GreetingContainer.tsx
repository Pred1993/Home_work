import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import Greeting from './Greeting';
import { UserType } from './HW3';

type GreetingContainerPropsType = {
  users: Array<UserType>;
  addUserCallback: (name: string) => void; // need to fix any
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>(''); // need to fix any
  const [error, setError] = useState<string | null>(null); // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // need to fix any
    setName(e.currentTarget.value); // need to fix
  };
  const addUser = () => {
    if (name.trim() === '') {
      setName('');
      setError('Title is required');
      return;
    }
    addUserCallback(name.trim());
    alert(`Hello ${name} !`); // need to fix
    setName('');
  };
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.key === 'Enter') {
      addUser();
    }
  };
  const totalUsers = users.length; // need to fix

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
      onKeyPressHandler={onKeyPressHandler}
    />
  );
};

export default GreetingContainer;
