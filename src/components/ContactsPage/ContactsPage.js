import Developer from '../Developers/Developers';
import developers from './developers.json';
import s from './ContactPage.module.css';
import {useTranslation} from 'react-i18next';

export default function ContactsPage() {
    const { t } = useTranslation();
    return (
<div className={s.contactsPage}>
        <div className={s.mainBlock}>
        <h1 className={s.title}>{t('team-title')}</h1>
       <span className={s.line}></span>
    
            </div>
            
            
        <ul className={s.list}>
            
            {developers.map(developer => (
                <li className={s.link} key={developer.id}>
                    <Developer
                        
                        id={developer.id}
                    photo={developer.url}
                    developerName={developer.developerName}
                    role={developer.role}
                        text={developer.text}
                        link={developer.link}
                />
                </li>
                
            ))}
                
                </ul>
               
            </div>
    )
}