import { Fragment } from "react";

function RedesSociales() {
    return (
        <>
          <div className="redes-sociales">
            <a href="https://wa.me/yourNumber" target="_blank" rel="noopener noreferrer">
              <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png" alt="" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img className="logo" src="https://images.vexels.com/content/137380/preview/instagram-icon-logo-748850.png" alt="" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img className="logo" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="" />
            </a>
         </div>
      </>
    );
  }
  
  export default RedesSociales;