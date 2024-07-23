import { useDispatch } from 'react-redux'
import { add } from '../app/cartSlice'

function BuyButton(props) {
  const dispatch = useDispatch()
  return (
    <button 
      key={props.product.id} 
      className="my-5 text-slate-900 font-mono text-base max-w-40 text-center p-2 text-slate-300 border-solid border-2 border-slate-900" 
      onClick={() => dispatch(add(props.product))}
    >
      Buy
    </button>
  )
}

export default BuyButton