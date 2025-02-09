import React from 'react'
import { Circles } from 'react-loader-spinner'

const Loading = () => {


    return (
        <div>
            <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loading