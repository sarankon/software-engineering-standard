# Implementation Standard

**Status:** Draft  
**Category:** Development

## Purpose

กำหนดหลักการสำหรับการเปลี่ยนความต้องการและการออกแบบให้เป็น implementation ที่ถูกต้อง เข้าใจได้ ดูแลรักษาได้ และสอดคล้องกับสถาปัตยกรรมของระบบ โดยไม่ผูกกับภาษา framework หรือเครื่องมือใดเป็นพิเศษ

## Principles

### 1. Implementation ต้องสอดคล้องกับ Intent

โค้ดต้องสะท้อน responsibility และ behavior ที่ระบบตั้งใจไว้ ไม่ควรใช้ implementation detail เพื่อเปลี่ยนความหมายของ design หรือ contract โดยไม่มีเหตุผลที่ชัดเจน

### 2. ความถูกต้องต้องมาก่อนความสั้นของโค้ด

Implementation MUST ให้ความสำคัญกับ correctness, clarity และ predictable behavior มากกว่าการลดจำนวนบรรทัดหรือความซับซ้อนเชิงรูปแบบ

### 3. โค้ดควรมีความรับผิดชอบที่ชัดเจน

แต่ละส่วนของ implementation SHOULD มี responsibility ที่เข้าใจได้ และไม่รวม behavior ที่ไม่เกี่ยวข้องกันโดยไม่มีเหตุผล

### 4. หลีกเลี่ยงความซับซ้อนที่ไม่จำเป็น

Implementation MUST NOT เพิ่ม abstraction, indirection หรือ mechanism ที่ไม่มีประโยชน์ต่อ requirement, boundary, changeability หรือคุณภาพของระบบอย่างชัดเจน

### 5. Behavior ที่สำคัญต้องชัดเจน

กฎทางธุรกิจ เงื่อนไขสำคัญ side effects และข้อจำกัดที่มีผลต่อ correctness SHOULD สามารถระบุและเข้าใจได้จาก implementation หรือเอกสารที่เป็น source of truth

### 6. Side effects ต้องควบคุมได้

การเปลี่ยนแปลง state, การเข้าถึง external system และ side effects อื่น ๆ SHOULD อยู่ในตำแหน่งที่เข้าใจได้และสามารถตรวจสอบผลกระทบได้

### 7. Implementation ต้องเคารพ Architecture

Implementation MUST ไม่สร้าง dependency, coupling หรือ boundary violation ที่ขัดกับ Architecture Standards เว้นแต่มี architectural decision ที่รองรับ

### 8. การเปลี่ยนแปลงควรจำกัดผลกระทบ

เมื่อเป็นไปได้ implementation SHOULD ทำให้การเปลี่ยนแปลง requirement หนึ่งส่วนไม่กระจายไปยังส่วนที่ไม่เกี่ยวข้องโดยไม่จำเป็น

### 9. Code duplication ต้องได้รับการพิจารณาอย่างมีเหตุผล

ทีม SHOULD พิจารณาความเหมือนของ behavior, ความเสี่ยงจาก divergence และความคุ้มค่าของ abstraction ก่อนรวม code ที่คล้ายกัน ไม่ควรสร้าง abstraction เพียงเพราะพบข้อความหรือโครงสร้างที่ซ้ำกัน

### 10. Implementation ที่ไม่ชัดเจนต้องมีเหตุผลรองรับ

เมื่อ implementation ต้องใช้วิธีที่ซับซ้อนหรือไม่เป็นธรรมชาติ SHOULD มีเหตุผลที่เพียงพอใน code, documentation หรือ Decision ที่เกี่ยวข้อง

## Relationship to Other Standards

- **Architecture Standards:** กำหนด intent, boundaries และ dependency direction ที่ implementation ต้องเคารพ
- **Foundation Standards:** กำหนด repository, configuration, environment, dependency และ documentation foundations
- **Quality Standards:** กำหนด quality outcomes และ verification ที่ implementation ต้องรองรับ
- **Security Standards:** กำหนด security constraints ที่ implementation ต้องปฏิบัติตาม

## Exceptions

ข้อยกเว้น MUST มีเหตุผลที่ชัดเจน และ SHOULD ระบุผลกระทบกับผู้ดูแลระบบหรือ codebase เมื่อเหมาะสม

## Verification

ตรวจสอบว่า implementation:

- ตรงกับ requirement และ architectural intent
- มี responsibility และ behavior ที่เข้าใจได้
- ไม่มี complexity หรือ abstraction ที่ไม่จำเป็น
- ไม่ละเมิด architectural boundaries
- ควบคุม side effects และ change impact ได้เหมาะสม
- มีเหตุผลรองรับสำหรับ implementation ที่ผิดจากแนวทางปกติ

## Migration

เมื่อ code เดิมไม่สอดคล้องกับมาตรฐาน ให้ปรับปรุงตามความเสี่ยงและความคุ้มค่า โดยไม่จำเป็นต้อง refactor ทั้งระบบในครั้งเดียว
