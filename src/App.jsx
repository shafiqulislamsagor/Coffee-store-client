import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'

function App() {

  const CoffeeData = useLoaderData()

  return (
    <div className='w-4/5 mx-auto mt-4'>
      <Link className='btn mr-3' to='/'>Home</Link>
      <Link className='btn mr-3' to='/addCoffee'>AddCard</Link>
      <Link className='btn mr-3' to='/updateCoffee'>Update</Link>
      <h2 className='text-2xl font-bold font-mono mt-4'>Coffee Available :- {CoffeeData.length}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-4'>
        {
          CoffeeData.map(card => <CoffeeCard key={card._id} card={card}/>)
        }
      </div>
    </div>
  )
}

export default App
