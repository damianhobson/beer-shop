import { useState, useEffect } from 'react'


function BuyButton(props) {
  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   fetch(`https://api.sampleapis.com/beers/ale`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       const cleanData = data.filter((item, index)=>{
  //         return item
  //       })
  //       setProducts(data.slice(0, 10)); // just 10 products for testing //
  //   });
  // }, []);

  return (
    <div key={props.product.id} className="my-5 text-slate-900 font-mono text-base max-w-40 text-center p-2 text-slate-300 border-solid border-2 border-slate-900" >
      Buy
    </div>
  )
}

export default BuyButton