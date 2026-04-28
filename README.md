# MERN Employee Salary Management  
### React Developer Hiring Assignment Submission

**Candidate:** Dharan Shetty  
**Repository:** `mern-employee-salary-management`

---

## 📌 Overview

This repository contains my submission for a **React Developer Hiring Assignment** based on an HRMS-style application.

I selected **MERN Employee Salary Management** because it already included core workflows such as employee management, payroll processing, and admin operations, making it a practical and relevant foundation for the requested assignment scope.

The assignment focused on:

- Building a new feature module
- Resolving multiple real-world product tickets
- Working within an existing codebase
- Preserving maintainability and consistency

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Redux Toolkit
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MySQL
- Sequelize ORM

---

## 🚀 Local Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/dharanshetty05/mern-employee-salary-management.git
cd mern-employee-salary-management
```

## 2. Create MySQL Database

```sql
CREATE DATABASE db_penggajian3;
```

## 3. Import Database Dump

Use the SQL file located at:

```bash
Backend/db/db_penggajian3.sql
```

## 4. Configure Environment Variables

Create a file:

```bash
Backend/.env
```

Add:

```env
APP_PORT=5000
SESS_SECRET=your_secret_key
```

## 5. Run Backend

```bash
cd Backend
npm install
npm start
```

Backend runs at: http://localhost:5000

## 6. Run Frontend

```bash
cd Fronted
npm install
npm run dev
```

Frontend runs at: http://localhost:5173

---

# ✅ Assignment Completion Summary

---

# PART 1: Feature Build

## Overtime Entry & Approval Module

Implemented an overtime request workflow with validation and persistence.

### Features Added

- Sidebar navigation link for overtime module
- Overtime entry screen
- Worker selection from existing employee records
- Date input field
- Overtime hours input
- Reason input
- Pending status submission flow
- Database persistence for overtime requests

---

## Frontend Validation

Implemented client-side validation for better UX:

- All fields required
- Overtime hours allowed only between **1 and 6**
- Future dates blocked
- Dates older than **7 days** blocked
- Reason must be at least **10 characters**

---

## Backend Validation

Implemented matching server-side validation for reliability:

- Same validation rules enforced server-side
- Worker must exist in database
- Duplicate request for same worker + date blocked
- Monthly overtime cap of **60 hours**
- Structured API error responses

---

# PART 2: Ticket Blitz

Resolved all requested product tickets.

---

## LF-101  
**Wrong date format on payslip**

✔ Standardized payslip date display to:

```text
DD/MM/YYYY
```

---

## LF-102  
**Negative salary values allowed**

✔ Prevented negative salary values in:

- Frontend forms
- Backend APIs

---

## LF-103  
**Designation field issue**

✔ Existing schema already used `jabatan` as designation.

Instead of creating duplicate columns, I:

- Reused the current domain model
- Converted field into controlled dropdown
- Fixed persistence/update handling

---

## LF-104  
**CSV Export**

✔ Added employee list CSV export including key payroll fields.

---

## LF-105  
**Mobile responsiveness**

✔ Improved employee list usability on smaller screens through better horizontal scrolling and layout handling.

---

# 🧠 AI Tool Usage

**Tool Used:** ChatGPT

Used for:

- Repository navigation strategy
- Debugging environment setup issues
- Discussing validation approaches
- Reviewing implementation options
- Improving documentation quality

> All final code changes were manually reviewed, adapted to the existing codebase, and tested locally.

---

# 📝 Important Implementation Notes

## LF-103 Design Choice

The project already represented designation using the `jabatan` field.  
To avoid unnecessary schema duplication, I reused the existing structure instead of introducing redundant columns.

## Legacy Dependency Note

The existing session-store package had compatibility issues with newer Node.js versions during local setup.

To keep the application runnable, session handling was adjusted locally while preserving intended behavior.

---

# 🔀 Commit / Pull Request Workflow

Development was completed on a feature branch with incremental commits after each task.

## Branch Workflow

- Created a dedicated working branch from `main`
- Implemented each assignment task in sequence
- Used atomic commits with clear ticket references
- Opened pull requests to merge reviewed work into `main`

## Pull Requests

### PR 1
**Ticket Blitz:** LF-101 to LF-105 fixes

### PR 2
**Feature Build:** Overtime Entry & Approval module

## Commit Strategy

Separate commits were maintained for:

- LF-101 Payslip date format fix
- LF-102 Negative salary validation
- LF-103 Designation dropdown enhancement
- LF-104 Employee CSV export
- LF-105 Mobile responsiveness fix
- Overtime feature module
- Navigation/sidebar integration
- Local environment compatibility setup

Work was completed on a dedicated branch using task-based commits, then merged into main through pull requests.

---

# 📊 Final Status

✅ All requested tickets completed  
✅ Feature build implemented  
✅ Tested locally  

---

# 🙌 Closing Note

This assignment was approached as a real production task: understanding an unfamiliar codebase, implementing features carefully, fixing issues cleanly, and maintaining consistency with the existing architecture.

Thank you for your time and review.
