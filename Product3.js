import React from 'react'
import'./Product.css'

function Product3() {
   return (
    <div className="Product1">
            <div className="Product_contents">
                <div className="Product_title">
                    <h1 className="Prod_heading">Adjustable Telescopic Span</h1>
                </div>
             <div className="Product_image">
                 <img className="img" height ="100"src="https://cpimg.tistatic.com/00161413/b/4/Adjustable-Telescopic-Span.jpg" alt=""/>
             </div>
             <div className="Prod_text">
             <div className="Product_desc">
               <h1 className="Prod_heading">Description</h1>
               <p>
                 The Adjustable telescopic span is an excellent mode of supporting platform made of concrete slabs. Its robust construction supports higher payload.
               </p>
             </div>
             <div className="Product_spec">
               <h1 className="Prod_heading">Specification </h1>
                  <div className="table" >
                 <div className="minimum" ><b>Minimum </b>2.50mtr<br/>
                  3.15mtr <br/>
                   3.15mtr</div>
                 <div className="maximum"> <b>Maximum </b> <br/>
                 4.15mtr<br/>
                  4.50mtr<br/> 
                  5.50mtr</div>
                 </div>
                 </div>

               
             </div>

            </div>
            
        </div>
    
      
      
    
  );
}

export default Product3
