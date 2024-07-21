import React from 'react'

function ProdCard({ele}) {
    // console.log(ele);
  return (
    <div className='border border-3 rounded-4 p-3 m-3 bg-info shadow-lg w-25 text-center'>
        <h4 >Productname ={ele?.prodName}</h4>
        <h3>Price = ${ele?.prodPrice}</h3>
    </div>
  )
}

export default ProdCard