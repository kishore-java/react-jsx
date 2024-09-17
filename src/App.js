import 'bulma/css/bulma.css';
import Profilecard from "./Profilecard";
import  alexa from './images/alexa.png';
import cortana from './images/cortana.png';
import siri from './images/siri.png';

//create a component
function App(){
    // const obj={border : '1px solid red'}
    return (
        <div>
         
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Process Digital Assitants</p>
                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                    <div className='column is-4'>
                    <Profilecard title = 'siri' handle ="@siri02" imageUrl = {siri} description="siri was made by apple" />
                        </div>
                        <div className='column is-4'>
                        <Profilecard  title = 'cortana' handle ="@cortana" imageUrl = {cortana} description="cortana was made by microsoft"/>
                    </div>
                    <div className='column is-4'>
                    <Profilecard  title = 'alexa' handle ="@alex05" imageUrl = {alexa} description="alexa was made by amazon"/>
                    </div>
                    </div>

                </section>
            </div>
          
            
           
        </div>
    )
}

export default App;