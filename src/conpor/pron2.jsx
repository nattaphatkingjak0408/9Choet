import React, { useState } from "react";
import "./Merc.css";

const Pron2 = () => {
  const [isExpanded, setIsExpanded] = useState(false); // สถานะการขยายข้อความ

  const handleReadMore = () => {
    setIsExpanded(true); // ขยายข้อความเมื่อคลิกที่ "อ่านเพิ่มเติม"
  };

  return (
    <div className="container4">
      <div className="image-section4">
        <img
          src="https://ih1.redbubble.net/image.2678291824.9520/ssrco,active_tshirt,mens,101010:01c5ca27c6,front,square_product,600x600.jpg"
          alt="Sigma"
          className="main-image4"
        />
      </div>
      <div className="details-section4">
        <h1 className="product-title4">Sigma T-Shirt</h1>
        <p className="product-price4">399.00 ฿ THB</p>

        <p className="product-description4">
        💡 "Sigma" ไม่ใช่แค่เสื้อ แต่เป็นตัวแทนของคนที่มั่นใจ
        </p>
        {!isExpanded && (
          <span className="read-more" onClick={handleReadMore}>
            อ่านเพิ่มเติม
          </span>
        )}
        {isExpanded && (
          <p className="expanded-text">
           และมีเอกลักษณ์! เสื้อยืดที่ออกแบบมาเพื่อคนที่ไม่ตามใคร <p>แต่สร้างเส้นทางของตัวเอง 🌟</p>
          </p>
        )}

        <div className="size-options4">
          <p>Size</p>
          <div>
          <button className="button1">S</button>
          <button className="button1">M</button>
          <button className="button1">L</button>
          <button className="button1">XL</button>
          <button className="button1">2XL</button>
          <button className="button1">3XL</button>
          </div>
        </div>

        <div className="actions-section4">
          <button className="add-to-cart4">Add to cart</button>
          <button className="buy-now4">Buy it now</button>
        </div>
      </div>
    </div>
  );
};


export default Pron2;

