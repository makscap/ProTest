import defaultPhoto from '../../images/Photo280.png';
import s from './Developers.module.css';

const Developer = ({
    photo = defaultPhoto,
  developerName,
    role,
    text,
}) => {
    return (
      <div className={s.cards}>
                  
                    <div className={s.cardsOvarlay}>
                      <img
            className={s.mainImg}
                        src={photo}
                        alt=""
                        sizes=""
                      />
                    </div>

        <div className={s.sections}>
          <h2 className={s.sectionTitlep}>{developerName}</h2>
          <p className={s.sectionTextp}>{role}</p>
                      <p className={s.sectionTextp}>{text}</p>
                    </div>
            
            </div>

    )
}

export default Developer
