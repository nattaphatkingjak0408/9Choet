import React, { useState } from "react";
import "./Merc.css";

const Pron8 = () => {
  const [isExpanded, setIsExpanded] = useState(false); // สถานะการขยายข้อความ

  const handleReadMore = () => {
    setIsExpanded(true); // ขยายข้อความเมื่อคลิกที่ "อ่านเพิ่มเติม"
  };

  return (
    <div className="container4">
      <div className="image-section4">
        <img
          src="https://down-th.img.susercontent.com/file/87fde4f2b4c63168348ad8531c8a78eb"
          alt="แก้วร้อนเย็น"
          className="main-image4"
        />
      </div>
      <div className="details-section4">
        <h1 className="product-title4">แก้วร้อนเย็น</h1>
        <p className="product-price4">490.00 ฿ THB</p>

        <p className="product-description4">
        แก้วเดียวที่เก็บทุกอุณหภูมิและสไตล์
        </p>
        {!isExpanded && (
          <span className="read-more" onClick={handleReadMore}>
            อ่านเพิ่มเติม
          </span>
        )}
        {isExpanded && (
          <p className="expanded-text">
          เติมเต็มทุกช่วงเวลาดื่มของคุณ!" ☕💖
          </p>
        )}

        <div className="size-options4">
          <p>Size</p>
          <div>
          <button className="button1">สีชมพู</button>
          <button className="button1">สีเขียว</button>
          <button className="button1">สีดำ</button>
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

export default Pron8;
