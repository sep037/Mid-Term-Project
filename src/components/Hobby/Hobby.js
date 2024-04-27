import classes from './Hobby.module.css'
import PageHeader from '../PageHeader/PageHeader'

const Hobby = () => {
    return (
        <div className={classes.AboutHobby} id="hobby">
            <PageHeader title={'Hobby'}/>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>My Hobby ?</h2>
                    <p>
                      특이한 저의 취미는 없지만 음악 들으며 걷는 것을 좋아합니다.<br/>
                      굉장히 동적인 저에게 정적인 취미를 가지고 있는 것 같아요. <br/>
                      항상 동적이기 때문에 생각 정리할 시간이 필요합니다.<br/>
                      <br/>
                      제가 가장 좋아하는 노래들을 영상으로 첨부해볼게요 !
                    </p>
                </div>
                
                <div className={classes.videoContainer}>
                    <div className={classes.video}>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                        <iframe width="460" height="300" src="https://www.youtube.com/embed/ft70sAYrFyY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <br/>
                        <iframe width="460" height="300" src="https://www.youtube.com/embed/LyuBK0Dp-0k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <br/>
                    </div>
                    <div className={classes.videomusic}>
                        <iframe width="460" height="300" src="https://www.youtube.com/embed/Svh_XX8MIrw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <br/>
                        <iframe width="460" height="300" src="https://www.youtube.com/embed/z9tifvQSu-g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Hobby;
