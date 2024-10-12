import { Link, NavLink } from 'react-router-dom'
import useStockDetails from '../hooks/useStockDetails'

const Navbar = () => {
  const { stockDetails } = useStockDetails()
  return (
    <nav className="w-full fixed top-0 left-0 right-0 bg-white">
      <div className="container mx-auto py-3 px-2 flex justify-between">
        <Link to={'/'}>
          <div className="flex gap-2 items-center">
            <img src="/icon.png" alt="logo" width={44} height={44} />
            <h1 className="font-bold">StockSight</h1>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive
                ? 'px-3 py-1 rounded-md text-sm bg-secondary text-white hover:opacity-75'
                : 'px-3 py-1 hover:bg-slate-100 rounded-md text-sm'
            }
          >
            Home
          </NavLink>
          <NavLink
            to={'/stocks'}
            className={({ isActive }) =>
              isActive
                ? 'px-3 py-1 rounded-md text-sm bg-secondary d text-white hover:opacity-75'
                : !stockDetails.length
                  ? 'pointer-events-none text-slate-400 '
                  : '' + ' px-3 py-1 hover:bg-slate-100 rounded-md text-sm '
            }
          >
            Stocks
          </NavLink>
          <NavLink
            to={'/agreement'}
            className={({ isActive }) =>
              isActive
                ? 'px-3 py-1 rounded-md text-sm bg-secondary text-white hover:opacity-75'
                : 'px-3 py-1 hover:bg-slate-100 rounded-md text-sm'
            }
          >
            Agreement
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
