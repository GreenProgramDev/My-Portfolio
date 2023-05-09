import './dayPeriod.css'
import React, {useEffect, useState} from 'react'

const DayPeriod = () => {

    const [timeOfDay, setTimeOfDay] = useState<string>("")

    useEffect(() => {
      const now = new Date(); // recebe a data e hora atual
      const currentHour = now.getHours() // recebe a hora atual
  
      if (currentHour >= 6 && currentHour < 18) {
        setTimeOfDay("sun")
      } else {
        setTimeOfDay("moon")
      }
    }, [])
    
    return(
        
      <div className="containerDayPeriod">
        <div className="cloud front">
          <span className="left-front"></span>
          <span className="right-front"></span>
        </div>
        <span className={`${timeOfDay} sunshine`}></span>
        <span className={`${timeOfDay}`}></span>
        <div className="cloud back">
          <span className="left-back"></span>
          <span className="right-back"></span>
        </div>
        <div>
        </div>
      </div>
        
    ) 
}

export default DayPeriod