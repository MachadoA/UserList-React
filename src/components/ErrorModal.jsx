import React from 'react';
import Button from './Button';

import style from './ErrorModal.module.css';

export default function ErrorModal({input, onClose}) {
 
  return (
    <div className={style.backdrop}>
        <section className={style.modal}>
            <article className={style.header}>
                <h2>Invalid input</h2>
            </article>
            <article className={style.content}>
                <p>Please enter a valide <span>{input}</span> !</p>
            </article>
            <article className={style.content}>
              <p className={style.align}><Button label='Okay' type='button' onClick={onClose}/></p>
            </article>
        </section>
    </div>
  )
}
