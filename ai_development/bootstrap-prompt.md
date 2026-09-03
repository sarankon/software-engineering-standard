# Software Engineering Standard — Bootstrap Prompt

> Copy the prompt below and paste it into the AI agent working in the target project.

```text
ติดตั้ง Software Engineering Standard ให้กับ Project นี้

Framework Repository:
https://github.com/sarankon/software-engineering-standard.git

ให้ AI เป็นผู้ดำเนินการตาม Framework โดยใช้ Repository ข้างต้นเป็นแหล่งอ้างอิงหลักของ Framework และไม่ต้องให้ฉันระบุชื่อไฟล์หรือขั้นตอนย่อยเพิ่มเติม

สิ่งที่ต้องทำ:
1. อ่านและทำความเข้าใจ Framework Repository ก่อนเริ่มแก้ไข Project
2. ค้นหาและอ่าน AI Bootstrap entry point ของ Framework (AI_BOOTSTRAP.md) ก่อนอ่านรายละเอียดอื่น
3. อ่าน AI Development instructions, Bootstrap/Installation Procedure, Blueprint, Software Standards และ Version ที่เกี่ยวข้องตามที่ Framework ระบุ
4. อ่าน Project Repository ปัจจุบันและ Project Instructions ที่มีอยู่ เช่น AGENTS.md, CLAUDE.md หรือไฟล์คำแนะนำอื่น ๆ
5. ตรวจสอบว่ามี Project Context อยู่แล้วหรือไม่ และเลือก flow ที่เหมาะสมสำหรับ New Project, Existing Project หรือ Framework Update
6. วิเคราะห์สถานะปัจจุบันก่อนเปลี่ยนแปลงใด ๆ
7. สำหรับ Install, Upgrade, Migration และ Validation ให้ปฏิบัติตาม Procedure ที่เป็น authoritative โดย AI เป็นผู้ดำเนินการโดยตรง ไม่ต้องใช้ Automated Bootstrap Runner หรือ Framework Runtime Runner
8. ก่อนการเปลี่ยนแปลงที่มีผลต่อ Project ให้สรุปสิ่งที่จะทำ ผลกระทบ และสิ่งที่ต้องการให้ฉันตัดสินใจ
9. รอ Explicit User Approval ก่อน Apply Material Changes
10. หลังได้รับ Approval ให้ AI ดำเนินการเฉพาะสิ่งที่ได้รับอนุมัติ
11. Validate ผลลัพธ์จริงหลังดำเนินการ และบันทึก Evidence, Provenance, Version และผลการเปลี่ยนแปลง
12. สร้างหรือปรับปรุง Project Context และ AI Handoff ตาม Blueprint
13. หากเป็นการ Update/Migration ให้บันทึก Migration/Change Result และทำให้การทำงานซ้ำสามารถ Resume ได้โดยไม่ทำงานเดิมซ้ำ
14. หากเป็น Validation ให้ตรวจสอบและรายงาน PASS, FAIL, BLOCKED หรือ NOT_RUN ตามหลักฐานจริง

ข้อจำกัด:
- AI เป็น Execution Engine ของ Framework สำหรับ Install, Upgrade, Migration และ Validation
- ห้ามสร้างหรือพึ่งพา Automated Bootstrap Runner หรือ Framework Runtime Runner เป็นส่วนหนึ่งของ target project runtime architecture
- Test-only simulation runners อนุญาตเฉพาะเพื่อทดสอบ Framework และไม่ถือเป็น runtime component ของ Project
- ห้ามแก้ไข Source Code เพียงเพื่อให้การติดตั้งหรือ Migration ผ่าน เว้นแต่ Framework Procedure ระบุไว้อย่างชัดเจนและได้รับ Approval ที่จำเป็น
- ห้ามเดาข้อมูลที่ไม่มีหลักฐาน
- หากข้อมูลไม่เพียงพอ ให้บันทึกเป็น Unknown หรือ Proposed ตามความเหมาะสม
- ให้ Current Repository เป็นแหล่งอ้างอิงหลักสำหรับ Current Implementation Facts
- ห้ามใช้ Git history, commit messages, diffs, branches, tags หรือ blame เป็นหลักฐานในการ Onboarding หรือการ Reconstruct Project Context
- อย่าถือ README ที่เป็น boilerplate หรือข้อมูลที่ล้าสมัยว่าเป็นความจริงของ Project หาก Source Code / Configuration / Context ให้ข้อมูลที่น่าเชื่อถือกว่า
- อย่าลบข้อมูล Project Context เดิมเพียงเพราะโครงสร้างเปลี่ยน เว้นแต่ Procedure กำหนดให้ Re-onboarding/Migration
- AI ห้ามถือว่า Prompt, Proposal, Target Version หรือความตั้งใจของ User เป็น Approval
- หากมี User Decision ที่ยืนยันแล้วและ Repository มีข้อมูลขัดแย้งกัน ให้รายงาน Conflict และอย่าแก้ไข Decision เงียบ ๆ

State Flow ที่ต้องปฏิบัติตาม:
DISCOVER → INSPECT → ANALYZE → PROPOSE → WAIT_FOR_APPROVAL → APPLY → VALIDATE → RECORD

AI ห้ามข้าม WAIT_FOR_APPROVAL สำหรับ Material Changes

หลังจากดำเนินการ:
1. สรุปสิ่งที่ค้นพบเกี่ยวกับ Project
2. สรุปสิ่งที่สร้างหรือปรับปรุง
3. ระบุ Current Work, Next, Backlog และ Blocked แยกจากกัน
4. ระบุ Decisions สำคัญและ Conflict ที่พบ
5. ระบุข้อมูลที่ยัง Unknown / Proposed
6. ระบุ Framework, Blueprint และ Software Standard Versions ที่ใช้งาน
7. ระบุ Validation Result และ Evidence
8. หากมีสิ่งที่ต้องให้ฉันตัดสินใจ ให้หยุดที่จุดนั้นและเสนอทางเลือกพร้อมผลกระทบ
9. หากไม่มีสิ่งที่ต้องตัดสินใจเพิ่มเติม ให้พร้อมทำงานต่อจาก Project Context และ AI Handoff

เมื่อขั้นตอนเสร็จแล้ว ให้ถือ Project Context ที่สร้างขึ้นเป็นแหล่งข้อมูลหลักสำหรับการทำความเข้าใจ Project ในการสนทนาครั้งต่อไป โดยต้องตรวจสอบข้อมูลสำคัญกับ Source of Truth ของ Project เมื่อจำเป็น
```

## Notes

- The URL above is the default public Framework Repository. If the Framework is hosted elsewhere, replace only the Repository URL.
- This is a bootstrap prompt, not the complete Framework procedure. The AI should discover the authoritative procedures and schemas from the Framework Repository itself.
- The Framework does not require a separate Automated Bootstrap Runner or Framework Runtime Runner. AI is the execution engine for installation, upgrade, migration, and validation.
- Test-only simulation runners, if any, exist only for Framework testing and are not target-project runtime components.
- The prompt explicitly points the AI to the root `AI_BOOTSTRAP.md` entry point, while keeping the rest of the framework discoverable rather than hard-coded into the user workflow.
- Do not copy this prompt into the target project's source code. It is intended to be pasted into the AI conversation when initializing the project.
