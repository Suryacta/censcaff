import React from 'react'
import { Link } from 'react-router-dom'
import "./Products.css"

function Products() {
    return (
        
        <section id="product"  style={{
            backgroundSize: "cover",
            backgroundImage: `url("../prod_bg.jpeg")`,
            backgroundPosition: "center center",}}>
            <h1 className="Pro_head">Our Products</h1>
            <div className="Products" >
         <div className="Pro1">
                 <img className="Product_pic" src="../cuplock.jpg" alt=""/>
                  <div className="Pro1_title">  <Link className="nav-link" to = "/Cuplock scaffolding"><button className="clk">Click here to View</button></Link></div>
                <div className="Pro1_overlay Pro1_blur">
                   
                    <div className="Pro1_Specs">CUPLOCK SCAFFOLDING</div>
</div>
</div>

 <div className="Pro1">
                 <img className="Product_pic" src="../ap.jpg" alt=""/>
                  <div className="Pro1_title">  <Link className="nav-link" to = "/Adjustable props"><button className="clk">Click here to View</button></Link></div>
                <div className="Pro1_overlay Pro1_blur">
                   
                    <div className="Pro1_Specs">ADJUSTABLE  PROPS
</div>
</div>
</div>

 <div className="Pro1">
                 <img className="Product_pic" src="../cs.jpg" alt=""/>
                  <div className="Pro1_title">  <Link className="nav-link" to = "/Centering sheet"><button className="clk">Click here to View</button></Link></div>
                <div className="Pro1_overlay Pro1_blur">
   
                            <div className="Pro1_Specs">CENTERING SHEET
	
</div>
                   
</div>
</div>

 <div className="Pro1">
                 <img className="Product_pic" src="../ts.jpg" alt=""/>
                  <div className="Pro1_title">  <Link className="nav-link" to = "/Telescopic span"><button className="clk">Click here to View</button></Link></div>
                <div className="Pro1_overlay Pro1_blur">
                    <div className="Pro1_Specs">TELESCOPIC SPAN

</div>
                   
</div>
</div>


</div>
        </section>

        
    )
}

export default Products
