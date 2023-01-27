import { Fragment, useState } from 'react'
import './App.css'

function App() {
  
  const imgURL = '/assets/images/image-product-desktop.jpg'

  return (
      <Fragment>



          <div className='perfume-box'>
     
            <img className='img-box' src={imgURL}></img>

            <div className='text-column'>

                <div>
                  <p className='monserrat-perfume'> P E R F U M E </p>
                  <p className='fraunces'> Gabrielle Essence Eau De Parfum </p>
                  <p className='monserrat'> A florar, solar, and voluptous interpretation composed by Olivier Polge,
                                 Perfumer-Creator for the House of CHANEL.</p>    
                </div>
            
                <div className='precios'>
                  <p1 className='fraunces-verde'> $149.99 </p1> 
                  <p1 className='monserrat-tachado'> $169.99 </p1>
                </div>
                
                <button>
                

                   <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF"/></svg>
                   <p className='chart'>Add to cart </p>    

                  
                  
                </button>

            </div>
         </div>
      </Fragment>
    
     
   
  )
}

export default App
