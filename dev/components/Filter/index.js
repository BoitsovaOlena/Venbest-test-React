import React, { useState } from 'react';
import styles from './style.scss';
import {  useDispatch } from "react-redux";
import { addSearch } from '../../actions/search'

const Filter = () => {
    const dispatch = useDispatch();

    const [show, changeShow] = useState(false);
    const [showLast, changeShowLast] = useState(false);
    const [showAge, changeShowAge] = useState(false);

    const [firstname, changeName] = useState('');
    const [lastname, changeLastname] = useState('');
    const [age, changeAge] = useState('');
    const [sex, changeSex] = useState('');
    const handleChange = (e) => {
        const {name, value } = e.target;

        if (name === 'name') {
            let regexp = /^[A-zА-яЁё]+$|^\s?$/;
            if(regexp.test(value)){
                changeName(value)
                changeShow(false)
                
            }
            if(!regexp.test(value)){
                
                changeShow(true)
                
            }

            
        } 
         if(name === 'lastname'){
            let regexp = /^[A-zА-яЁё]+$|^\s?$/;
            if(regexp.test(value)){
                changeLastname(value)
                changeShowLast(false)
                
            }
            if(!regexp.test(value)){
                
                changeShowLast(true)
                
            }
            
        }
        if(name === 'age'){
            let regexp = /^[0-9]+$|^\s?$/;
            if(regexp.test(value)){
                changeAge(value)
                changeShowAge(false)
                
            }
            if(!regexp.test(value)){
                
                changeShowAge(true)
                
            }
            
        }
        if(name === 'sex'){
            changeSex(value)
            dispatch(addSearch({'name':e.target.name,'value':e.target.value}))
            changeName('')
            changeLastname('')
            changeAge('')
        }

    }
    const blurChange = (e) =>{
        dispatch(addSearch({'name':e.target.name,'value':e.target.value}))
        
    }
    const focusChange = (e) =>{
        const {name, value } = e.target;
        let sx = document.querySelectorAll('input[type="radio"]');
        sx.forEach(element => {
            element.checked=false
        });
        if (name === 'name') {
            changeLastname('')
            changeAge('')
            changeSex('')
        
        } 
         if(name === 'lastname'){
            changeName('')
            changeAge('')
            changeSex('')
            
        }
        if(name === 'age'){
            changeName('')
            changeLastname('')
            changeSex('')
            
        }
        
    }
    console.log(show )
    return (
        <div className={styles.filter}>
            <h2>Чтобы отфильтровать список, введите данные в форму ниже</h2>
            <form >
                <div className={styles.filter__input}>
                    <p>Имя</p>
                    <input
                        className={`${show ? styles.error: ''}`}
                        type="text"
                        name="name"
                        placeholder="Иван"
                        value={firstname}
                        onChange={handleChange}
                        onBlur={blurChange}
                        onFocus={focusChange}
                    />
                    <div className={styles.note}></div>
                    
                </div>
                <div className={styles.filter__input}>
                    <p>Фамилия</p>
                    <input
                        className={`${showLast ? styles.error: ''}`}
                        type="text"
                        name="lastname"
                        placeholder="Иванов"
                        value={lastname}
                        onChange={handleChange}
                        onBlur={blurChange}
                        onFocus={focusChange}
                    />
                    <div className={styles.note}></div>
                </div>
                <div className={styles.filter__input}>
                    <p>Возраст</p>
                    <input
                        className={`${showAge ? styles.error: ''}`}
                        type="text"
                        name="age"
                        placeholder="99"
                        value={age}
                        onChange={handleChange}
                        onBlur={blurChange}
                        onFocus={focusChange}
                    />
                    <div className={styles.note}></div>
                </div>
                <div className={styles.filter__radio}>
                    <p>Пол:</p>
                    <input
                        id="male"
                        type="radio"
                        name="sex"
                        value="m" 
                        onChange={handleChange}
                    />
                    <label className={styles.filter__sex} htmlFor="male">Мужчина</label>
                    <input
                        id= "female"
                        type="radio"
                        name="sex"
                        value="f" 
                        onChange={handleChange}
                    />
                    <label className={styles.filter__sex} htmlFor="female">Женщина</label>
                </div>
            </form>

        </div>
    )
}


export default Filter;