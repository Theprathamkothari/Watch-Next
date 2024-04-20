import { WithStreamlitConnection } from "./streamlit";
import ImageGallery from "./ImageGallery.svelte";


const imageGallery = new WithStreamlitConnection({
  target: document.body,
  props: {
   
    component: ImageGallery,

  
    spreadArgs: true,
  },
});

export default ImageGallery;
