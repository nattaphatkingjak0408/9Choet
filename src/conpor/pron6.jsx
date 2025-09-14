import React, { useState } from "react";
import "./Merc.css";

const Pron6 = () => {
  const [isExpanded, setIsExpanded] = useState(false); // สถานะการขยายข้อความ

  const handleReadMore = () => {
    setIsExpanded(true); // ขยายข้อความเมื่อคลิกที่ "อ่านเพิ่มเติม"
  };

  return (
    <div className="container4">
      <div className="image-section4">
        <img
          src="https://i.etsystatic.com/35164154/r/il/eb5791/4420775720/il_570xN.4420775720_c2pw.jpg"
          alt="Sticker"
          className="main-image4"
        />
      </div>
      <div className="details-section4">
        <h1 className="product-title4">Sitcker นายเชิดเท่ๆ</h1>
        <p className="product-price4">100.00 ฿ THB</p>

        <p className="product-description4">
        😂 รวมความฮาระดับตำนานในแผ่นเดียว!
        </p>
        {!isExpanded && (
          <span className="read-more" onClick={handleReadMore}>
            อ่านเพิ่มเติม
          </span>
        )}
        {isExpanded && (
          <p className="expanded-text">
             ดีไซน์ชัด คม สวย แปะได้ทุกที่!&nbsp;1 เซ็ตมีหลายแบบ
             <p>ให้เลือกใช้ไม่ซ้ำเหมาะกับแล็ปท็อป, โทรศัพท์, สมุดโน้ต และอื่น ๆ🎨</p>
          </p>
        )}

        <div className="size-options4">
          <p>Size</p>
          <div>
          <button className="button1">สุ่มสติ๊กเกอร์</button>
          <button className="button1">ไม่มีสี</button>
          <button className="button1">มีสี</button>
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

export default Pron6;
