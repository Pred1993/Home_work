import React, { useState } from 'react';
import Affairs from './Affairs';

// types
export type AffairPriorityType = 'low' | 'high' | 'middle';
export type AffairType = {
  _id: number;
  name: string;
  priority: AffairPriorityType;
};
export type FilterType = 'all' | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
  { _id: 1, name: 'React', priority: 'high' },
  { _id: 2, name: 'anime', priority: 'low' },
  { _id: 3, name: 'games', priority: 'low' },
  { _id: 4, name: 'work', priority: 'high' },
  { _id: 5, name: 'html & css', priority: 'middle' },
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
  if (filter === 'high') {
    affairs = affairs.filter((t) => t.priority === 'high');
    return affairs;
  } else if (filter === 'low') {
    affairs = affairs.filter((t) => t.priority === 'low');
    return affairs;
  } else if (filter === 'middle') {
    affairs = affairs.filter((t) => t.priority === 'middle');
    return affairs;
  } else return affairs;
};
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
  affairs = affairs.filter((t) => t._id !== _id);
  return affairs;
};

function HW2() {
  const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

  return (
    <div>
      <hr />
      homeworks 2{/*should work (должно работать)*/}
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
        filter={filter}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr />
    </div>
  );
}

export default HW2;
