import {FaYoutube, FaInstagramSquare, FaGithub, FaLinkedin, FaMailBulk} from "react-icons/fa"
import classes from './Contact.module.css'

const handleURL = (url) => {
    return () => window.open(url, "_blank")
}

const Contact = () => {
    return ( 
        <div className={classes.Contact} id="contact">
          
            <div className={classes.ContactIcons}>
            <FaInstagramSquare color='white' size='30px' style={{padding: '1%'}}
            onClick={handleURL('https://www.instagram.com/se_p037/')} />
            <FaGithub color='white' size='30px' style={{padding: '1%'}}
            onClick={handleURL('https://github.com/sep037')} />
            <FaMailBulk color='white' size='30px' style={{padding: '1%'}}
            onClick={() => alert('E-mail : tmddms0307@dankook.ac.kr')}/>
            </div>
        </div>
     );
}
 
export default Contact;