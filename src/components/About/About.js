import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import me from '/Users/sep037/Desktop/Mid-Term-Project/src/img/me.jpeg'

const About = () => { 
    return ( 
        <div className={classes.AboutMe} id="about">
            <PageHeader title={'About Me'}/>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>나 박승은 !</h2>
                    <p>
                    
                        제가 들어온 저의 첫인상은 차가운 모습이 다분하다는 것인데요,<br/>
                        하지만 친해지면 상대방을 항상 행복하게 할 수 있는 능력을 가지고 있는 것 같습니다.
                        <br/>
                        제가 생각해도 전 웃기기 때문이에요. ^^
                        <br/>
                        <br/>
                        MBTI는 ENFP로, 모든 사람을 편하게 해줄 수 있는 것 같습니다.<br/>
                        근데 말이 조금 많은 편인 것 같아 시끄러운 것 같아요. <br/>그치만 거슬릴 정도는 아니랍니다 !
                        <br/>
                        <br/>
                        성격은 꼼꼼하지 못 하지만,<br/> 욕심이 많아 원하는 것이 생기면 항상 쟁취하려고 하는 편이에요.<br/>
                        그래서 제가 얻어낸 결과물이 조금 있는 편입니다. <br/> 그것을 꼭 만족하지는 않아도요 !
                        <br/>
                        <br/>
                        저라는 사람을 짧게 설명 해보았어요. <br/>텍스트로 담아내기엔 조금 어려운 것 같아요 . .
                    </p>
                </div>
            </div>
            <img className={classes.me} src={me} onLoad={(e) => e.target.style.opacity = 1}/>
        </div>
     );
}
 
export default About;