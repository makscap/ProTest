
import s from './Developers.module.css';
import currentImages from '../Photo/index';


const Developer = ({
  
  developerName,
    role,
  text,
  link,
    id,
}) => {
    return (
      <div>   
        <a className={s.link} href={link} target="blank">

          <picture>
    <source media="(min-width: 1280px)" srcSet={currentImages(id, 'xl')}/>
            <source media="(min-width: 768px)" srcSet={currentImages(id, 'xs')} />
            <source media="(min-width: 320px)" srcSet={currentImages(id, 'sm')}/>
    <img src={currentImages(id, 'sm')} alt=""/>
      </picture>                        
               
        <div className={s.sections}>
          <p className={s.name}>{developerName}</p>
          <p className={s.role}>{role}</p>
                      <p className={s.text}>{text}</p>
                    </div>
          
             </a>
             
          
            
            </div>

    )
}

export default Developer
