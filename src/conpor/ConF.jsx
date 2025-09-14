import React from "react";
import "./ConN.css";
import "./Card.css";

const ProductsSection = ({setPage}) => {
  return (
    <div className="products-container">
      <h3 className="h3">The Collection</h3>
      <div className="products-grid">
      <div className="card1"onClick={() => setPage("pron5")}>
       <div className="first-content1">
           <img
            src="https://down-th.img.susercontent.com/file/th-11134207-7r98s-lzsh4xflh19l49"
            alt="รองเท้า"
            className="product-image"
          />
        </div>
        <div className="second-content1">
           <img
            src="https://th-test-11.slatic.net/p/32eea0e2d14b3dc738b914591efb4472.jpg"
            alt="รองเท้า"
            className="product-image"
          />
           </div>
          <div className="product-info">
            <h3>รองเท้า 9Choet</h3>
            <p>From 590.00 ฿ THB</p>
          </div>
        </div>
        <div className="card1"onClick={() => setPage("pron6")}>
       <div className="first-content1">
           <img
            src="https://i.etsystatic.com/35164154/r/il/eb5791/4420775720/il_570xN.4420775720_c2pw.jpg"
            alt="สติก"
            className="product-image"
          />
        </div>
        <div className="second-content1">
           <img
            src="https://image.spreadshirtmedia.com/image-server/v1/products/T1459A839PA3861PT28D1041287580W8888H10000/views/1,width=800,height=800,appearanceId=839,backgroundColor=F2F2F2/cases-of-cats-meme-meme-cats-lover-sticker.jpg"
            alt="สติก"
            className="product-image"
          />
           </div>
          <div className="product-info">
            <h3>Sticker นายเชิดเท่ๆ</h3>
            <p>From 100.00 ฿ THB</p>
          </div>
        </div>
        <div className="card1"onClick={() => setPage("pron7")}>
       <div className="first-content1">
           <img
            src="https://ae04.alicdn.com/kf/S0d7bc0681991495294321572adff61e6a.jpg"
            alt="ถุ้งผ้า"
            className="product-image"
          />
        </div>
        <div className="second-content1">
           <img
            src="https://down-th.img.susercontent.com/file/1713a0e47805bf807c75e143be106d11"
            alt="ถุงผ้า"
            className="product-image"
          />
           </div>
          <div className="product-info">
            <h3>ถุงผ้า 9Choet</h3>
            <p>From 490.00 ฿ THB</p>
          </div>
        </div>
        <div className="card1"onClick={() => setPage("pron8")}>
       <div className="first-content1">
           <img
            src="https://down-th.img.susercontent.com/file/87fde4f2b4c63168348ad8531c8a78eb"
            alt="แก้วน้ำ"
            className="product-image"
          />
        </div>
        <div className="second-content1">
           <img
            src="https://down-th.img.susercontent.com/file/7d64abfbadbb6a86dd8e641d4e976ed5"
            alt="แก้วน้ำ"
            className="product-image"
          />
           </div>
          <div className="product-info">
            <h3>แก้วร้อนเย็น</h3>
            <p>From 490.00 ฿ THB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;

