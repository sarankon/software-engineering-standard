# Error Handling Standard

**Status:** Draft  
**Category:** Development

## Purpose

กำหนดหลักการสำหรับการตรวจจับ จัดการ ส่งต่อ และรายงาน error เพื่อให้ระบบมี behavior ที่ predictable, diagnosable และปลอดภัย

## Principles

### 1. Error ต้องถูกจัดการตามความหมาย

Implementation MUST แยกแยะ error ที่สามารถจัดการได้จาก error ที่ควรส่งต่อหรือทำให้ operation ล้มเหลว และไม่ควรกลบ error โดยไม่มีเหตุผล

### 2. Error handling ต้องรักษา contract

เมื่อเกิด error ระบบ SHOULD ให้ behavior และผลลัพธ์ที่สอดคล้องกับ interface หรือ contract ที่เกี่ยวข้อง รวมถึงข้อกำหนดด้าน security และ data integrity

### 3. ห้ามกลบความผิดพลาดโดยไม่มีเหตุผล

Implementation MUST NOT silently ignore error ที่มีผลต่อ correctness, security, data integrity หรือ operational behavior

### 4. Context ของ error ต้องเพียงพอ

Error SHOULD มี context ที่ช่วยระบุ operation และสาเหตุที่เกี่ยวข้อง โดยไม่เปิดเผยข้อมูลลับหรือข้อมูลที่ไม่ควรเปิดเผย

### 5. Error ต้องไม่ทำให้ระบบอยู่ใน state ที่ไม่ถูกต้อง

การจัดการ error MUST คำนึงถึง partial changes, resource cleanup และ consistency ของ state

### 6. Boundary ต้องแปลง error อย่างเหมาะสม

เมื่อ error ข้าม architectural หรือ external boundary ระบบ SHOULD แปลง error ให้เหมาะกับ contract ของ boundary นั้น และไม่เผย implementation detail ที่ไม่จำเป็น

### 7. Retry ต้องมีเหตุผล

ระบบ SHOULD retry เฉพาะ operation ที่มีโอกาสสำเร็จเมื่อทำซ้ำ และต้องคำนึงถึง idempotency, bounded attempts และผลกระทบต่อระบบปลายทาง

### 8. Error ที่คาดการณ์ได้ไม่ควรใช้กลไกเกินจำเป็น

Implementation SHOULD ใช้กลไกที่เหมาะสมกับลักษณะของ error และไม่สร้าง abstraction ที่ซับซ้อนเกินความจำเป็น

## Relationship to Other Standards

- **Architecture / Interfaces:** กำหนด boundary และ contract ที่ error handling ต้องเคารพ
- **Security:** กำหนดข้อจำกัดเรื่องข้อมูลที่ error สามารถเปิดเผยได้
- **Quality:** กำหนด verification ของ failure behavior
- **Operations:** กำหนด operational response และ diagnosis เมื่อ error เกิดขึ้น

## Exceptions

ข้อยกเว้น MUST มีเหตุผลและไม่ควรลดความสามารถในการตรวจพบ failure ที่มีนัยสำคัญ

## Verification

ตรวจสอบว่า:

- error สำคัญไม่ถูกกลบ
- contract และ state consistency ยังคงถูกต้อง
- error ที่ข้าม boundary ถูกแปลงอย่างเหมาะสม
- retry มีเงื่อนไขและขอบเขตที่เหมาะสม
- ไม่มี sensitive information ถูกเปิดเผยโดยไม่จำเป็น

## Migration

ปรับปรุง error handling ตามความเสี่ยง โดยเริ่มจาก error ที่กระทบ correctness, security, data integrity และ operational diagnosis ก่อน
