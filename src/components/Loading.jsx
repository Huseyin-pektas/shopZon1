import React from 'react'
import { Circles } from 'react-loader-spinner'

const Loading = () => {


    return (
        <div style={{ display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'}}>
            <Circles
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loading