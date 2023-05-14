import React from 'react'
import { DBConList } from './DBconlist'
import { SftpList } from './Sftplist'

const ConnectionList : React.FC = () => {
    return(
        <>
         <div className='row g-5 g-xl-8'>
        <DBConList className='card-xl-stretch mb-xl-8'></DBConList>
        </div>
        <div className='row g-5 g-xl-8'>
        <SftpList className='card-xl-stretch mb-xl-8'></SftpList>
        </div>
        </>
    )
}

export{ConnectionList}