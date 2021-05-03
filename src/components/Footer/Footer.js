import { Link, useLocation } from 'react-router-dom';
import s from './Footer.module.css';
import copyright from '../images/copyright.svg';
import heart from '../images/heart.svg';

export default function Footer () {
    const location = useLocation();
    return (
        <div className={s.footerDiv}>
        <div className={s.footer}>
            <div className={s.footerInfo}>
                <span>
                    <img src={copyright} alt="copyright" className={s.copyright}/>
                    2021 | All Rights Reserved | Developed with
                    <img src={heart} alt="" className={s.heart}/>
 
                    <Link 
        className={s.link}
        to={{
            pathname: `/contacts`,
            state: {
                from: location.pathname,
            },
        }}
        >
            by GoIt Students
        </Link>
                </span>
            </div>
        </div>
        </div>
    )
}
