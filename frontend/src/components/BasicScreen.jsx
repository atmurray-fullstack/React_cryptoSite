import React from 'react';

const BasicScreen = ({ children }) => {

    const styles = {
        screen: {
            backgroundColor: 'red',
            width: '100vw',
            height: '100vw'
        }
    }


    return (
        <div style={styles.screen}>
            {children}
        </div>

    );
}

export default BasicScreen;