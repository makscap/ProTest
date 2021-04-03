import { Link, useLocation } from 'react-router-dom';
import s from './MainPage.module.css';
import arrow from '../images/arrow.svg';

export default function MainPage() {
    const location = useLocation();

    return (
    <div className={s.mainPage}>
       <div className={s.mainBlock}>
        <p className={s.quotation}>“Regression testing. What is it?  <br></br>
        If the system compiles, that's good, if it boots, that's great!”</p>
       <span className={s.author}></span>
       <p className={s.authorName}>Linus Torvalds</p>
           <p className={s.authorInfo}>Linux kernel creator, hacker, 1969</p>
        </div> 

        <div className={s.buttons}>
        <Link 
        className={s.linkToTestPage}
        to={{
            pathname: `/test`,
            state: {
                from: location.pathname,
            },
        }}
        >
        <button type="button" className={s.buttonFirst}>
            <p className={s.buttonText}>QA technical training</p>
            <img src={arrow} alt="arrow" className={s.arrow} />
        </button>
        </Link>
        <Link
        className={s.linkToTestPage}
        to={{
            pathname: `/test`,
            state: {
                from: location.pathname,
            },
        }}
        >
        <button type="button" className={s.buttonSecond}>
            <p className={s.buttonText}>Testing theory</p>
            <img src={arrow} alt="arrow" className={s.arrow} />
        </button>
        </Link>
        </div>
    </div>
    )
}