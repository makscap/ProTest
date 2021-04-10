import Maksym1 from './MaksymB280.jpg';
import Maksym2 from './MaksymB352.jpg';
import Maksym3 from './MaksymB295.jpg';
import Victoriia1 from './Victoriia280.jpg';
import Victoriia2 from './Victoriia352.jpg';
import Victoriia3 from './Victoriia295.jpg';
import VadymU1 from './VadymU280.jpg';
import VadymU2 from './VadymU352.jpg';
import VadymU3 from './VadymU295.jpg';
import Yulia1 from './Yulia280.jpg';
import Yulia2 from './Yulia352.jpg';
import Yulia3 from './Yulia295.jpg';
import Taras1 from './Taras280.jpg';
import Taras2 from './Taras352.jpg';
import Taras3 from './Taras295.jpg';
import Ivanna1 from './Ivanna280.jpg';
import Ivanna2 from './Ivanna352.jpg';
import Ivanna3 from './Ivanna295.jpg';
import AndriyK1 from './AndriyK280.jpg';
import AndriyK2 from './AndriyK352.jpg';
import AndriyK3 from './AndriyK295.jpg';
import AndriyM1 from './AndriyM280.jpg';
import AndriyM2 from './AndriyM352.jpg';
import AndriyM3 from './AndriyM295.jpg';
import Alexandr1 from './Alexandr280.jpg';
import Alexandr2 from './Alexandr352.jpg';
import Alexandr3 from './Alexandr295.jpg';



  const images = {
      id1: {
          sm: Maksym1,
          xs: Maksym2,
          xl: Maksym3
      },
      id2: {
          sm: Victoriia1,
          xs: Victoriia2,
          xl: Victoriia3
      },
      id3: {
          sm: VadymU1,
          xs: VadymU2,
          xl: VadymU3
      },
      id4: {
          sm: Yulia1,
          xs: Yulia2,
          xl: Yulia3
      },
      id5: {
          sm: Taras1,
          xs: Taras2,
          xl: Taras3
      },
      id6: {
          sm: Ivanna1,
          xs: Ivanna2,
          xl: Ivanna3
      },
      id7: {
          sm: AndriyK1,
          xs: AndriyK2,
          xl: AndriyK3
      },
      id8: {
          sm: AndriyM1,
          xs: AndriyM2,
          xl: AndriyM3
      },
      id9: {
          sm: Alexandr1,
          xs: Alexandr2,
          xl: Alexandr3
      }
}

// const intViewportWidth = window.innerWidth

// const getViewport = () => {

//     if (intViewportWidth > 320 && intViewportWidth < 768) {
        
//          return 'sm'
//     }
//     if (intViewportWidth > 768 && intViewportWidth < 1280) {
//           return 'xs'
//     }
//     if (intViewportWidth > 1280) {
//          return 'xl'
//     }
// }

const currentImages = (id, viewport) => {
    return images[id][viewport]
}



export default currentImages

