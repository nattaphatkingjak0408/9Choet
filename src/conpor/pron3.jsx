import React, { useState } from "react";
import "./Merc.css";

const Pron3 = () => {
  const [isExpanded, setIsExpanded] = useState(false); // สถานะการขยายข้อความ

  const handleReadMore = () => {
    setIsExpanded(true); // ขยายข้อความเมื่อคลิกที่ "อ่านเพิ่มเติม"
  };

  return (
    <div className="container4">
      <div className="image-section4">
        <img
          src="https://i4.cloudfable.net/styles/550x550/576.240/Black/huh-cat-meme-mens-t-shirt-back-20231217120901-hbnc3n11.jpg"
          alt="HUH"
          className="main-image4"
        />
      </div>
      <div className="details-section4">
        <h1 className="product-title4">HUH T-Shirt</h1>
        <p className="product-price4">399.00 ฿ THB</p>

        <p className="product-description4">
        💡 ไม่ต้องอธิบาย แค่ใส่แล้วเท่ก็พอ!
        </p>
        {!isExpanded && (
          <span className="read-more" onClick={handleReadMore}>
            อ่านเพิ่มเติม
          </span>
        )}
        {isExpanded && (
          <p className="expanded-text">
            สไตล์ที่ไม่ต้องพยายาม แต่โคตรมีเอกลักษณ์😎
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


export default Pron3;

