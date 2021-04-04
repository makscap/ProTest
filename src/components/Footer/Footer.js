import s from './Footer.module.css';
import copyright from '../images/copyright.svg';
import heart from '../images/heart.svg';

export default function Footer () {
    return (
        <div className={s.footer}>
            <div className={s.footerInfo}>
                <p>
                    <img src={copyright} alt="copyright" className={s.copyright}/>
                    2021 | All Rights Reserved | Developed with
                    <img src={heart} alt="" className={s.heart}/>
                    by <a href="/" className={s.link}>GoIT Students</a>
                </p>
            </div>
        </div>
    )
}
