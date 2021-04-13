import Developer from '../Developers/Developers';
import developers from './developers.json';
import s from './ContactPage.module.css';

export default function ContactsPage() {
    return (
<div className={s.contactsPage}>
        <div className={s.mainBlock}>
        <h1 className={s.title}>Our team</h1>
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