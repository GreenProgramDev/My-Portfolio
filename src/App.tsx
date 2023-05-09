import './app.css'

import { Timeline} from './components'
import DayPeriod from './components/DayPeriod'
import headers from './components/headers.css'


function App() {
  
  return (
    
    <>
        <div className='dayTime'>
           <DayPeriod />
        </div>
      <header className='containerHeader'>
        <nav className='menu'>
          <ul className='navebar'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className='containerMain'>
      <Timeline />
      </main>

      <footer className="containerFooter">
        {Date()}

        <p>product by Green Program Dev</p>
      </footer> 
    </>

  )
}

export default App
