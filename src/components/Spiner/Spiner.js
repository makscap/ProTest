import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Spiner.module.css'

export default function Spiner() {
  
 
    return (
      <Loader className={s.spiner} type="Puff" color="#FF6B09" height={80} width={80}
        
      />
    );
  }