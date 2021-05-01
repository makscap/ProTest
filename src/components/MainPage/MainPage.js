import { Link, useLocation } from 'react-router-dom';
import s from './MainPage.module.css';
import arrow from '../images/arrow.svg';
import { TypeTest } from '../../helpers/constant'
import {useTranslation ,Trans} from 'react-i18next';


export default function MainPage() {
    const location = useLocation();
    const { t } = useTranslation();

    return (
    <div className={s.mainPage}>
            <div className={s.mainBlock}>
                <p className={s.quotation}>“
                 <Trans i18nKey="mainPage-description">
                      Some newlines <br/> would be <br/> fine
                    </Trans>
                ”</p>
       <span className={s.author}></span>
       <p className={s.authorName}>{t('mainPage-author')}</p>
           <p className={s.authorInfo}>{t('mainPage-authorDescription')}</p>
        </div> 

        <div className={s.buttons}>
            <div className={s.buttonDiv}>
        <Link 
        className={s.linkToTestPage}
        to={{
            pathname: `/test`,
            state: {
                from: location.pathname,
                testName: TypeTest.TECHNICAL,
            },
        }}
        >
        <button type="button" className={s.buttonFirst}>
            <p className={s.buttonText}>{t('mainPage-techTest')}</p>
            <img src={arrow} alt="arrow" className={s.arrow} />
        </button>
        </Link>
        <Link
        className={s.linkToTestPage}
        to={{
            pathname: `/test`,
            state: {
                from: location.pathname,
                testName: TypeTest.THEORY,
            },
        }}
        >
        <button type="button" className={s.buttonSecond}>
            <p className={s.buttonText}>{t('mainPage-theoryTest')}</p>
            <img src={arrow} alt="arrow" className={s.arrow} />
        </button>
        </Link>
        </div>
        </div>
    </div>
    )
}