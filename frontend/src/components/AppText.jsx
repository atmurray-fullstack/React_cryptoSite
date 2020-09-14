import React from 'react';
import { } from 'materialize-css'


const AppText = ({ children, props, size }) => {
    const styles = {
        text: {
            color: 'black',
            fontSize: size
        }
    }

    return (
        <p style={styles.text}>
            {children}

        </p >

    );
}



export default AppText;