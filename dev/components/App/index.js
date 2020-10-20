import React from 'react';
import styles from './style.scss';

import List from '../List';
import Filter from '../Filter';


const App = () => (
        <div className={styles.wrapp}>
            <Filter></Filter>
            <List></List>
        </div>
    )
 


export default App;