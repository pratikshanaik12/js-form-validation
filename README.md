# 📝 JS Form Validation Project 🌟

Welcome to the **Basic JavaScript Form Validation** project! 
This tiny app helps ensure that users fill out a form correctly before submitting it! 🚀
---

## 🌟 Features:
- ✅ **Name Validation**:  
  - Ensures the name field is filled in.  
  - Displays `Name is required!` if left empty.  
 
- 🔐 **Password Validation**:  
  - Ensures the password length is **greater than 6** characters.  
    - ❌ Error: `"Passwords should be longer than 6 chars"` if too short.  
  - Ensures the password length is **less than 20** characters.  
    - ❌ Error: `"Passwords should be less than 20 chars"` if too long.  
  - Prevents using `"password"` as the actual password (for security reasons).  
    - ❌ Error: `"Passwords cannot be password"` if "password" is used as input.  

- 🚫 **Form Submission Prevention**:  
  - If any of the validation conditions fail, the form won’t submit until all issues are resolved.  
  - Displays all validation messages together, separated by commas!  
---

## 🛠️ Tech Stack:
- **HTML** 🧱
- **JavaScript** ⚙️

---

## 🚀 How to Run:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url.git
