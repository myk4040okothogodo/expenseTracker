import React, { useContext } from 'react';
import { Transanction } from './Transanction';

import { GlobalContext } from '../context/GlobalState';

export const TransanctionList = () => {
  const { transanctions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transanctions.map(transanction => (<Transanction key={transanction.id} transanction={transanction} />))}
      </ul>
    </>
  )
}

