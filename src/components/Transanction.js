
import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Transanction = ({ transanction }) => {
  const { deleteTransanction } = useContext(GlobalContext);

  const sign = transanction.amount < 0 ? '-' : '+';

  return (
    <li className={transanction.amount < 0 ? 'minus' : 'plus'}>
      {transanction.text} <span>{sign}{moneyFormatter(transanction.amount)}</span><button onClick={() => deleteTransanction(transanction.id)} className="delete-btn">x</button>
    </li>
  )
}

