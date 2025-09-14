import React, { useState } from "react";
import "./Merc.css";

const Pron7 = () => {
  const [isExpanded, setIsExpanded] = useState(false); // สถานะการขยายข้อความ

  const handleReadMore = () => {
    setIsExpanded(true); // ขยายข้อความเมื่อคลิกที่ "อ่านเพิ่มเติม"
  };

  return (
    <div className="container4">
      <div className="image-section4">
        <img
          src="https://down-th.img.susercontent.com/file/81c9d673e0677084d365d77743ede7ea"
          alt="ถุงผ้า"
          className="main-image4"
        />
      </div>
      <div className="details-section4">
        <h1 className="product-title4">ถุงผ้า 9Choet</h1>
        <p className="product-price4">490.00 ฿ THB</p>

        <p className="product-description4">
        😂 ดีไซน์สุดกวน ที่จะทำให้ทุกคนจำคุณได้!
        </p>
        {!isExpanded && (
          <span className="read-more" onClick={handleReadMore}>
            อ่านเพิ่มเติม
          </span>
        )}
        {isExpanded && (
          <p className="expanded-text">
           น้ำหนักเบา แต่จุของได้เยอะ ใช้งานสะดวก 
           <p> พิมพ์ลายคมชัด ติดทนนาน ไม่ซ้ำใครแน่นอน💪 </p>
          </p>
        )}

        <div className="size-options4">
          <p>Size</p>
          <div>
          <button className="button1">หลายหน้า</button>
          <button className="button1">เฉพาะหน้า</button>
          <button className="button1">สีดำ</button>
          <button className="button1">สีขาว</button>
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

export default Pron7;
