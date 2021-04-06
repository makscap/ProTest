import Developer from '../Developers/Developers';
import developers from './developers.json';
import s from './ContactPage.module.css';

export default function ContactsPage() {
    return (
        <ul className={s.list}>
            <div >
            {developers.map(developer => (
                <li className={s.link} key={developer.id}>
                    <Developer
                        
                        id={developer.id}
                    photo={developer.url}
                    developerName={developer.developerName}
                    role={developer.role}
    text={developer.text}
                />
                </li>
                
            ))}
                </div>
        </ul>
    )
}