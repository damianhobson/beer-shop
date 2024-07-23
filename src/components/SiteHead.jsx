import CartIcon from './CartIcon'
function SiteHead() {
  return (
    <div className='bg-slate-900 bg-[url("./assets/cans.jpg")] h-64 bg-cover'>
      <h1 className="text-3xl font-bold font-mono">
        The Beer Shop
      </h1>
      <CartIcon/>
    </div>
  )
}

export default SiteHead