import React, { useState } from "react";
import "./Merc.css";

const Pron5 = () => {
  const [isExpanded, setIsExpanded] = useState(false); // สถานะการขยายข้อความ

  const handleReadMore = () => {
    setIsExpanded(true); // ขยายข้อความเมื่อคลิกที่ "อ่านเพิ่มเติม"
  };

  return (
    <div className="container4">
      <div className="image-section4">
        <img
          src="https://down-th.img.susercontent.com/file/th-11134207-7r98s-lzsh4xflh19l49"
          alt="รองเท้า"
          className="main-image4"
        />
      </div>
      <div className="details-section4">
        <h1 className="product-title4">รองเท้า 9Choet</h1>
        <p className="product-price4">590.00 ฿ THB</p>

        <p className="product-description4">
        👟 ดีไซน์โฉบเฉี่ยว ดุดัน พร้อมลุยทุกเส้นทาง!
        </p>
        {!isExpanded && (
          <span className="read-more" onClick={handleReadMore}>
            อ่านเพิ่มเติม
          </span>
        )}
        {isExpanded && (
          <p className="expanded-text">
             ลายไฟสุดเท่ เพิ่มความแรงให้ทุกย่างก้าว
             น้ำหนักเบา<p>ใส่สบาย เดินคล่องตัว เหมาะกับทุกกิจกรรม ทั้งลำลองและกีฬา🏆</p>
          </p>
        )}

        <div className="size-options4">
          <p>Size</p>
          <div>
          <button className="button1">38</button>
          <button className="button1">39</button>
          <button className="button1">40</button>
          <button className="button1">41</button>
          <button className="button1">42</button>
          <button className="button1">43</button>
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

export default Pron5;
