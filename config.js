// คัดลอกไฟล์นี้เป็น config.js แล้วแก้ค่า (ห้ามใส่ Channel secret / Access token ที่นี่ ไฟล์นี้เปิดเห็นได้จากหน้าเว็บ)
window.APP_CONFIG = {
  LIFF_ID: '2012324775-wLxisxjm',                                   // จาก LINE Developers > LINE Login channel > LIFF
  API_URL: 'https://script.google.com/macros/s/AKfycbxkqCkg-NsV63cVB_q8HscDP_DyIIZ0MtbpFvnc1fl18xoN0RtzQzJxeo89vfir_JmC/exec',      // URL Web App ที่ Deploy จาก Apps Script
  MAPS_API_KEY: '',                                                  // คีย์ Maps JavaScript API (จำกัด HTTP referrer เป็นโดเมนหน้านี้)
  DEFAULT_CENTER: { lat: 14.0705808, lng: 100.6056975 },                   // จุดกลางแผนที่เริ่มต้น (ตำแหน่งร้านของคุณ)
  SHOP_PHONE: ''                                                     // แสดงในข้อความช่วยเหลือ (ไม่บังคับ)
};
