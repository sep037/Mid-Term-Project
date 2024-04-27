import classes from './Developer.module.css'
import PageHeader from './../PageHeader/PageHeader'
import apple from '/Users/sep037/Desktop/Mid-Term-Project/src/img/apple.png'

const Developer = () => {
    return ( 
        <div className={classes.AboutDeveloper} id="developer">
            <PageHeader title={'Developer'}/>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>! iOS Developer !</h2>
                    <p>
                    저는 지금 프론트엔드 개발자가 되기 위해 노력을 하고 있습니다. <br/>
                    제가 프론트엔드로 입문을 하게 된 이유는 최종 목표가 iOS 앱 개발자가 되는 것이기 때문이에요.
                    <br />
                    <br/>
                    제가 단지 iOS 개발자가 되어보기로 한 이유는 간단한데요, <br/>그저 애플 기기들을 어렸을 때부터 사용했기 때문이에요.<br/>
                    그러다 대학을 컴퓨터 관련 학과로 진학하게 되면서, 일찍부터 확정하게 되었습니다.<br/><br/>
                    현재는 최종 목표를 정해두고 이것 저것 해보면서 지내고 있어요.<br/>
                    학기가 끝나고 방학 때는 본격적으로 swift에 정진해보려고 해요 !<br/>
                    
                    </p>
                </div>
                <div className={classes.Photo}>
                    
                </div>
            </div>
            <img className={classes.apple} src={apple}/>
        </div>
     );
}
 
export default Developer;