import React, { useEffect, useRef, useState } from 'react'
import ProdCard from '../components/ProdCard';

function Home() {

  const [localArray, setLocalArray] = useState([]);
  let [searchProd,setSearchProd] = useState('')

  let prodName = useRef(null)
  let prodPrice = useRef(null)

  const addProduct = (product) => {
    // Check if the product already exists in the local array
    const isDuplicate = localArray.some(item => item.prodName === product.prodName);

    if (!isDuplicate) {
      // If the product is not a duplicate, add it to the local array
      setLocalArray([...localArray, product]);
      // console.log('Product added:', product);
    } else {
      // console.log('Product already exists:', product);
    }
  };




let handleSubmit = (e)=>{
  e.preventDefault()

addProduct(
  {
    prodName:prodName.current.value, 
    prodPrice:prodPrice.current.value,
    id:Date.now()
  }
)

console.log( prodName )
console.log( prodPrice )

prodName.current.value = ''
prodPrice.current.value= ''

}





  return (
    <div>
    <h1 className='display-3'>HOME-PAGE</h1>

    <form onSubmit={handleSubmit} className='border border-warning w-100 m-auto rounded-4 d-flex justify-content-between p-3' >

<input type="text" 
className='form-control w-25  my-3'
placeholder='PRODUCT-NAME'
name='prodName'
ref={prodName}
/>
<input type="number" 
className='form-control w-25   my-3'
placeholder='PRODUCT-PRICE'
name='prodPrice'
ref={prodPrice}

/>

<button type='submit' className='my-3  w-25  rounded-3 fw-normal fs-4 '>SUBMIT</button>

</form>

{/* search bar */}
<input type="text" 
className='form-control w-75 m-auto p-2  my-3'
placeholder='SEARCH PRODUCT'
name=''
value={searchProd}
onChange={(e)=>setSearchProd(e.target.value)}
/>

<div className="d-flex justify-content-evenly align-content-center flex-wrap">
{
  localArray .length > 0 && 
  localArray.filter(ele=>{
    if(searchProd.length === 0){
        return ele
    }else{
        return ele.prodName.toLowerCase().includes(searchProd.toLowerCase())
    }
})
  .map((ele,index)=>{
    return <ProdCard key={ele.id} ele={ele} />
  })
}
</div>

    </div>
  )
}

export default Home