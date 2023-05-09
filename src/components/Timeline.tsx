import DayPeriod from './DayPeriod'
import './timeline.css'

const Timeline = () =>{
    return (
        <>
        <section className="home">
            <div className='alignIdentify'>
                <div className='logo'>
                    <h1 className='hiIm'>Hi, I'm </h1>
                    <div className='backgroundName'>
                        <h2 className='namePerfil'>Sidney L.</h2>
                    </div>
                    <p className='skill'>Front-End Development</p>
                </div>
                <div className='radiuLogo'>
                    <img className='imgNot' src="/img/not.png" alt="" />
                </div>
            </div>

        </section>
        <section className="about">
            <div className='teste'>
            <h1>About</h1>
            </div>
        </section>
        <section className="contact">
            <h1>Helo Contact</h1>
        </section>
        </>
    )
}

export default Timeline