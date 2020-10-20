import React from 'react';
import styles from './style.scss';


const Item = ({name='', lastname ='', age ='', sex =''}) => (

        <li className={styles.item}>
            <p>{name} {lastname}</p>
            <p>Возраст: {age}</p>
            <p>Пол: {
                sex==='m' ?'мужской' : "женский"
                }</p>
        </li>
    )
 


export default Item;