import React from "react";
import "./App.css";

function App() {
  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#333', fontSize: '2rem' }}>9Choet</h1>
      <p style={{ color: '#666', fontSize: '1.2rem' }}>
        เว็บไซต์ E-commerce สำหรับแฟนคลับ
      </p>
      <div style={{ 
        marginTop: '20px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2>สินค้าแนะนำ</h2>
        <p>Mewing T-shirt - 399 ฿</p>
        <p>Sigma T-shirt - 399 ฿</p>
        <p>รองเท้า 9Choet - 590 ฿</p>
      </div>
      <div style={{ marginTop: '20px', color: '#888' }}>
        <p>เวลาปัจจุบัน: {new Date().toLocaleString('th-TH')}</p>
      </div>
    </div>
  );
}

export default App;
