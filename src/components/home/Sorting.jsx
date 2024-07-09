import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='flex items-center justify-end p-3 my-5 bg-gray-200 rounded-md'>
        <select onChange={(e)=>setSort(e.target.value)} name='' id='' className='p-1 rounded-md bg-white-200'>
            <option disabled value="">Seçiniz</option>
            <option value="inc">Artan</option>
            <option value="dec">Azalan</option>
        </select>
    </div>
  )
}

export default Sorting