import classes from './Home.module.css'
import macme from '/Users/sep037/Desktop/Mid-Term-Project/src/img/macme.png'

const Home = () => {
    return ( 
        <div className={classes.Home} id="home">
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hi, there</h1>
                <br></br>
                <h1>I am seungeun park</h1>
            </div>
            <img className={classes.macme} src={ macme } onLoad={(e) => e.target.style.opacity = 1}/>
        </div>
     );
}
 
export default Home;