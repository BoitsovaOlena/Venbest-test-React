import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { addInfo } from '../../actions/info'
import styles from './style.scss';
import Item from '../Item';

const List = () => {
    const dispatch = useDispatch();
    const listAll = useSelector(store => store.info);
    const [isLoading, setLoading] = useState(true);
    const search = useSelector(store => store.search);
    let list = [];
    if(search.name ===''&& search.lastname ===''&& search.age ===''&& search.sex ===''){
        list = listAll
    }
    if(search.name !=''){
         
         list = listAll.filter(item=>item.name.includes(search.name))
    }
    if(search.lastname !=''){
         
         list = listAll.filter(item=>item.lastname.includes(search.lastname))
    }
    if(search.age !=''){

        list = listAll.filter(item=>item.age==search.age)
    }
    if(search.sex !=''){
         console.log(listAll)
        list = listAll.filter(item=>item.sex==search.sex)
    }
    let Storage = localStorage.getItem('LIST');
    useEffect(() => {

        Storage && setLoading(false)
        !Storage && fetch('https://venbest-test.herokuapp.com/')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch(addInfo(data))
                localStorage.setItem('LIST', JSON.stringify(data)) 
                setLoading(false);
            })
            .catch(console.error);      
              
    }, []); 

    console.log('search', search)
    return (

                isLoading ? (
                    <div className={styles.loading}>
                        <p >Список загружается...</p>
                    </div>
                    
                ) : (
                    <ul className={styles.list}>
                        {
                            list        
                                .map((item, id) => (
                                    <Item 
                                    name = {item.name}
                                    lastname = {item.lastname}
                                    age = {item.age}
                                    sex = {item.sex}
                                    key = {id}></Item>
                                ))
                        }

                    </ul>
                )

            
        )
}


export default List;