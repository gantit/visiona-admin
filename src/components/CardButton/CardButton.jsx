import React from 'react';
import scanner from '../../assets/img/icons/scanner.svg';

import s from './CardButton.module.scss';


const CardButton = ({ img = scanner, text = 'Lorem', handeClick }) => (
  <button
    className={s.button}
    onClick={handeClick}
    type="button"
  >
    <figure>
      <img src={img} className={s.img} alt={text} />
      <figcaption className={s.text}>{text}</figcaption>
    </figure>
  </button>
);

export default CardButton;
