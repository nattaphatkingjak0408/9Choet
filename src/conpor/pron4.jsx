import React, { useState } from "react";
import "./Merc.css";

const Pron4 = () => {
  const [isExpanded, setIsExpanded] = useState(false); // สถานะการขยายข้อความ

  const handleReadMore = () => {
    setIsExpanded(true); // ขยายข้อความเมื่อคลิกที่ "อ่านเพิ่มเติม"
  };

  return (
    <div className="container4">
      <div className="image-section4">
        <img
          src="https://ih1.redbubble.net/image.3561127664.0356/ssrco,slim_fit_t_shirt,mens,fafafa:ca443f4786,front,square_product,600x600.u1.webp"
          alt="CAT"
          className="main-image4"
        />
      </div>
      <div className="details-section4">
        <h1 className="product-title4">CAT T-Shirt</h1>
        <p className="product-price4">399.00 ฿ THB</p>

        <p className="product-description4">
        ✨ เพิ่มความน่ารักให้กับลุคของคุณด้วยเสื้อยืดลาย
        </p>
        {!isExpanded && (
          <span className="read-more" onClick={handleReadMore}>
            อ่านเพิ่มเติม
          </span>
        )}
        {isExpanded && (
          <p className="expanded-text">
            "แมวน้อยตาใส" ตัวนี้! ใส่แล้วน่ารักเกินต้าน <p>แถมยังนุ่มสบาย ระบายอากาศได้ดี เหมาะกับทุกโอกาส 🏡🎒</p>
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

export default Pron4;

