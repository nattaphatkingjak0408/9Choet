import React, { useState } from "react";
import "./Merc.css";

const Pron1 = () => {
  const [isExpanded, setIsExpanded] = useState(false); // สถานะการขยายข้อความ

  const handleReadMore = () => {
    setIsExpanded(true); // ขยายข้อความเมื่อคลิกที่ "อ่านเพิ่มเติม"
  };

  return (
    <div className="container4">
      <div className="image-section4">
        <img
          src="https://i4.cloudfable.net/styles/550x550/119.109/Black/funny-cat-meme-mewing-not-meowing-long-t-shirt-20240225030556-zhwenbq2-s1.jpg"
          alt="Chat Shirt"
          className="main-image4"
        />
      </div>
      <div className="details-section4">
        <h1 className="product-title4">Mewing T-Shirt</h1>
        <p className="product-price4">399.00 ฿ THB</p>

        <p className="product-description4">
          💬 "มิว" หรือ "เหมียว" กับลุคสุดคูลที่บ่งบอกความเป็นคุณ!
        </p>
        {!isExpanded && (
          <span className="read-more" onClick={handleReadMore}>
            อ่านเพิ่มเติม
          </span>
        )}
        {isExpanded && (
          <p className="expanded-text">
            นี่คือเสื้อยืดที่ทั้งน่ารักและไม่ธรรมดา <p>ออกแบบมาเพื่อคนรักแมวและคนที่ชอบความมีสไตล์โดยเฉพาะ! 🌟</p>
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

export default Pron1;
