import Nikolai1 from './Nikolai270.jpg';
import Nikolai2 from './Nikolai354.jpg';
import Nikolai3 from './Nikolai450.jpg';
import Andrei1 from './Andrei270.jpg';
import Andrei2 from './Andrei354.jpg';
import Andrei3 from './Andrei450.jpg';

  const images = {
      id1: {
          sm: Nikolai1,
          xs: Nikolai2,
          xl: Nikolai3
      },
      id2: {
          sm: Andrei1,
          xs: Andrei2,
          xl: Andrei3
      },
      id3: {
          sm: Andrei1,
          xs: Andrei2,
          xl: Andrei3
      },
      id4: {
          sm: Andrei1,
          xs: Andrei2,
          xl: Andrei3
      },
      id5: {
          sm: Andrei1,
          xs: Andrei2,
          xl: Andrei3
      },
      id6: {
          sm: Andrei1,
          xs: Andrei2,
          xl: Andrei3
      },
      id7: {
          sm: Andrei1,
          xs: Andrei2,
          xl: Andrei3
      },
      id8: {
          sm: Andrei1,
          xs: Andrei2,
          xl: Andrei3
      }
}

const intViewportWidth = window.innerWidth

const getViewport = () => {

    if (intViewportWidth > 320 && intViewportWidth < 768) {
        
         return 'sm'
    }
    if (intViewportWidth > 768 && intViewportWidth < 1280) {
          return 'xs'
    }
    if (intViewportWidth > 1280) {
         return 'xl'
    }
}

const currentImages = id => {
    return images[id][getViewport()]
}



export default currentImages

