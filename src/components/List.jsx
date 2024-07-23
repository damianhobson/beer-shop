import { useState, useEffect } from 'react'
import Rating from './Rating';
import BuyButton from './BuyButton';

function List() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch(`https://api.sampleapis.com/beers/ale`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        // const cleanData = data.filter((item, index)=>{
        //   return item
        // })
        setProducts(data.slice(0, 20)); // just 10 products for testing //
    });
  }, []);
  const handleImageError = (ev) => {
    ev.target.src = "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png";
  }
  return (

      <div className='flex flex-row max-w-6xl flex-wrap'>
        {products.map(product => (
          <div key={product.id} id={'product_num_' + product.id} className="basis-1/3 my-5 bg-slate-100 text-zinc-800 font-mono text-base" >
            <div className="p-1 flex justify-center">
              <img src={product.image} onError={handleImageError} />
            </div>
            <div className='p-2'>
              <div className='text-xl'>{product.name}</div>
              <div className="flex justify-center">
                <Rating stars={product.rating.average} id={product.id} />
              </div>
            </div>
            <div className="flex justify-center">
              <span className='text-xl text-green-700'>{product.price}</span>
            </div>
            <div className="flex justify-center">
              <BuyButton product={product} />
            </div>
          </div>
        ))}

      </div> 

  )
}

export default List