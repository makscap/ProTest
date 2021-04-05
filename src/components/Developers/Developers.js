import defaultPhoto from '../../images/Photo280.png';
import s from './Developers.module.css';
import currentImages from '../../images/index';



const Developer = ({
    photo = defaultPhoto,
  developerName,
    role,
  text,
    id,
}) => {
    return (
      <div className={s.cards}>
                  
                    <div className={s.cardsOvarlay}>
                      <img
            className={s.mainImg}
                        src={currentImages(id)}
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
