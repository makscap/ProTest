import Im1 from './Photo280.png';
import Im2 from './logo.png';


  const images = {
      id1: Im1
}

const intViewportWidth = window.innerWidth

console.log(intViewportWidth)


function currentImages (id) {
    

     if (intViewportWidth > 350 && intViewportWidth < 767) {
        
        return images[id] =  Im2
    }
    if (intViewportWidth > 768) {
          return images[id] = Im1
    }
    if (intViewportWidth => 1280) {
         return images[id] = Im1
    }
    
    
}

console.log(currentImages())

export default currentImages

