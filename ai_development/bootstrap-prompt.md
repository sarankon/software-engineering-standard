# Software Engineering Standard — Bootstrap Prompt

> Copy the prompt below and paste it into the AI agent working in the target project.

```text
ติดตั้ง Software Engineering Standard ให้กับ Project นี้

Framework Repository:
https://github.com/sarankon/software-engineering-standard.git

ให้ดำเนินการด้วยตนเองโดยใช้ Repository ข้างต้นเป็นแหล่งอ้างอิงหลักของ Framework และไม่ต้องให้ฉันระบุชื่อไฟล์หรือขั้นตอนย่อยเพิ่มเติม

สิ่งที่ต้องทำ:
1. อ่านและทำความเข้าใจ Framework Repository ก่อนเริ่มแก้ไข Project
2. ค้นหาและอ่านจุดเริ่มต้นสำหรับ AI / Bootstrap / Installation Instructions ของ Framework
3. ตรวจสอบ Blueprint, Software Standards, Procedures และ Version ที่เกี่ยวข้อง
4. อ่าน Project Repository ปัจจุบันและ Project Instructions ที่มีอยู่ เช่น AGENTS.md, CLAUDE.md หรือไฟล์คำแนะนำอื่น ๆ
5. ตรวจสอบว่ามี Project Context อยู่แล้วหรือไม่
6. หากยังไม่มี Project Context ให้สร้างตาม Blueprint ปัจจุบัน
7. หากมี Project Context อยู่แล้ว ให้ตรวจสอบกับ Repository ปัจจุบัน และ Reconstruct/Update ให้ตรงกับ Blueprint ปัจจุบันตาม Procedure
8. วิเคราะห์ Project ก่อนสรุป Context โดยครอบคลุมอย่างน้อย Project Identity, Technology, Architecture, Requirements, Decisions, Problems, Work Management, Project Rules, History และ AI Handoff
9. แยกข้อมูลเป็น Facts, Decisions, Inferences และ Unknown ให้ถูกต้อง
10. บันทึก Provenance และ Evidence สำหรับข้อมูลสำคัญที่ตรวจสอบย้อนกลับได้
11. ห้ามเปลี่ยน AI Inference หรือข้อมูลที่คาดเดาให้เป็น User Decision หรือ Confirmed Fact โดยไม่มีหลักฐาน
12. หากมี User Decision ที่ยืนยันแล้วและ Repository มีข้อมูลขัดแย้งกัน ให้รายงาน Conflict และอย่าแก้ไข Decision เงียบ ๆ
13. บันทึก Blueprint และ Software Standard Versions ที่ Project ใช้งาน
14. สร้างหรือปรับปรุง AI Handoff ตาม Blueprint
15. Validate Project Context หลังดำเนินการเสร็จ

ข้อจำกัด:
- ห้ามแก้ไข Source Code เพียงเพื่อให้การติดตั้งเสร็จ เว้นแต่ Framework Procedure ระบุไว้อย่างชัดเจน
- ห้ามเดาข้อมูลที่ไม่มีหลักฐาน
- หากข้อมูลไม่เพียงพอ ให้บันทึกเป็น Unknown หรือ Proposed ตามความเหมาะสม
- ให้ Current Repository เป็นแหล่งอ้างอิงหลักสำหรับ Current Implementation Facts
- Git history ใช้เป็น Historical Evidence ไม่ใช่หลักฐานของ Current Work โดยอัตโนมัติ
- อย่าถือ README ที่เป็น boilerplate หรือข้อมูลที่ล้าสมัยว่าเป็นความจริงของ Project หาก Source Code / Configuration / Context ให้ข้อมูลที่น่าเชื่อถือกว่า
- อย่าลบข้อมูล Project Context เดิมเพียงเพราะโครงสร้างเปลี่ยน เว้นแต่ Procedure กำหนดให้ Re-onboarding; หาก Re-onboarding ให้ใช้ข้อมูลเดิมเป็น Evidence/Reference และให้ Current Repository เป็นแหล่งข้อมูลหลัก

หลังจากติดตั้งและตรวจสอบเสร็จแล้ว:
1. สรุปสิ่งที่ค้นพบเกี่ยวกับ Project
2. สรุป Project Context ที่สร้างหรือปรับปรุง
3. ระบุ Current Work, Next, Backlog และ Blocked แยกจากกัน
4. ระบุ Decisions สำคัญและ Conflict ที่พบ
5. ระบุข้อมูลที่ยัง Unknown / Proposed
6. ระบุ Blueprint และ Software Standard Versions ที่ใช้งาน
7. ระบุ Validation Result
8. หากไม่มีสิ่งที่ต้องให้ฉันตัดสินใจ ให้พร้อมทำงานต่อจาก Project Context และ AI Handoff ได้เลย
9. หากมีสิ่งที่ต้องให้ฉันตัดสินใจ ให้หยุดที่จุดนั้นและเสนอทางเลือกพร้อมผลกระทบให้ฉันตัดสินใจ

เมื่อขั้นตอนติดตั้งเสร็จแล้ว ให้ถือ Project Context ที่สร้างขึ้นเป็นแหล่งข้อมูลหลักสำหรับการทำความเข้าใจ Project ในการสนทนาครั้งต่อไป โดยต้องตรวจสอบข้อมูลสำคัญกับ Source of Truth ของ Project เมื่อจำเป็น
```

## Notes

- The URL above is the default public Framework Repository. If the Framework is hosted elsewhere, replace only the Repository URL.
- This is a bootstrap prompt, not the complete Framework procedure. The AI should discover the authoritative procedures and schemas from the Framework Repository itself.
- Do not copy this prompt into the target project's source code. It is intended to be pasted into the AI conversation when initializing the project.
