import React from 'react'
import { useEffect, useState } from 'react'

const ProductList = ({category}: {category: string}) => {
  const [products, setProducts] = useState<String[]>([])

  useEffect(() => {
   console.log("Fetching Products in ", category);
   setProducts(["Clothing", "HouseHold"]);
  }, [category]);
 
  return (
    <div>
      ProductList
    </div>
  )
}

export default ProductList;