import React from "react";
import "./ConN.css";
import "./Card.css";

const ProductsSection = ({setPage}) => {
  return (
    <div className="products-container">
      <h3>เสื้อเพื่อแฟนคลับ 9Choet</h3>
      <div className="products-grid">
      <div className="card1" onClick={() => setPage("pron1")}>
       <div className="first-content1">
           <img
            src="https://i4.cloudfable.net/styles/550x550/119.109/Black/funny-cat-meme-mewing-not-meowing-long-t-shirt-20240225030556-zhwenbq2-s1.jpg"
            alt="mewing"
            className="product-image"
          />
        </div>
        <div className="second-content1">
           <img
            src="https://i5.cloudfable.net/styles/550x550/119.110/Black/funny-cat-meme-meowing-looksmax-long-t-shirt-20241022110958-u2hrbveh-s4.jpg"
            alt="mewing"
            className="product-image"
          />
           </div>
          <div className="product-info">
            <h3>Mewing T-shirt</h3>
            <p>From 399.00 ฿ THB</p>
          </div>
        </div>
        <div className="card1"onClick={() => setPage("pron2")}>
       <div className="first-content1">
           <img
            src="https://ih1.redbubble.net/image.2678291824.9520/ssrco,active_tshirt,mens,101010:01c5ca27c6,front,square_product,600x600.jpg"
            alt="sigma"
            className="product-image"
          />
        </div>
        <div className="second-content1">
           <img
            src="https://ih1.redbubble.net/image.2678291824.9520/ssrco,active_tshirt,two_model,101010:01c5ca27c6,back,square_product,600x600.webp"
            alt="sigma"
            className="product-image"
          />
           </div>
          <div className="product-info">
            <h3>Sigma T-shirt</h3>
            <p>From 399.00 ฿ THB</p>
          </div>
        </div>
        <div className="card1"onClick={() => setPage("pron3")}>
       <div className="first-content1">
           <img
            src="https://i4.cloudfable.net/styles/550x550/576.240/Black/huh-cat-meme-mens-t-shirt-back-20231217120901-hbnc3n11.jpg"
            alt="HUH"
            className="product-image"
          />
        </div>
        <div className="second-content1">
           <img
            src="https://i4.cloudfable.net/styles/550x550/8.56/Black/meme-huh-cat-t-shirt-20231123050643-y4lbmskk.jpg"
            alt="HUH"
            className="product-image"
          />
           </div>
          <div className="product-info">
            <h3>HUH T-shirt</h3>
            <p>From 399.00 ฿ THB</p>
          </div>
        </div>
        <div className="card1"onClick={() => setPage("pron4")}>
       <div className="first-content1">
           <img
            src="https://ih1.redbubble.net/image.3561127664.0356/ssrco,slim_fit_t_shirt,mens,fafafa:ca443f4786,front,square_product,600x600.u1.webp"
            alt="CAT"
            className="product-image"
          />
        </div>
        <div className="second-content1">
           <img
            src="https://i.ebayimg.com/images/g/vZgAAOSw5jxk4lGW/s-l400.jpg"
            alt="CAT"
            className="product-image"
          />
           </div>
          <div className="product-info">
            <h3>CAT T-shirt</h3>
            <p>From 399.00 ฿ THB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;

