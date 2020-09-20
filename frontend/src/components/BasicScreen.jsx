import React from 'react';

const BasicScreen = ({ children }) => {

    const styles = {
        screen: {
            backgroundColor: 'white',
            width: '100%',
            height: '100vw'
        }
    }


    return (
        <div style={styles.screen} className='col-12 mx-auto '>
            {children}
        </div>

    );
}

export default BasicScreen;