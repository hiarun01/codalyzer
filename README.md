# Codalyzer

Codalyzer – A smart code reviewer powered by GenAI that helps you analyze, review, and improve your code with AI-driven insights.
https://codalyzer.vercel.app/

<div align="center">
  
![Screenshot 2025-06-22 231038](https://github.com/user-attachments/assets/fa07a79c-5fa4-4fcc-8d44-fb34a3b860a7)

  
</div>

<div align="center">

  
![Screenshot 2025-06-22 231048](https://github.com/user-attachments/assets/a7d82529-12d9-4d08-a146-84e91967e157)

  
</div>
<div align="center">

  
![Screenshot 2025-06-22 231059](https://github.com/user-attachments/assets/7b0b3282-2e35-4a0b-b382-949eac611696)

  
</div>


## 🛠 Tech Stack

**Frontend:**
- React
- Javascript
- Tailwind CSS
- ShadCN UI

**Backend:**
- Node.js
- Express.js
- OpenAI API (for code review logic)

**Other Tools:**
- Vite (Frontend bundler)
- Axios (API calls)
- ESLint + Prettier (Code formatting & linting)

---

## 🚀 Features

- 🔎 **Code Review with AI**: Paste any code and get an instant review powered by OpenAI.
- 📄 **Multiple Language Support**: Works with JS, TS, Python, etc.
- 💡 **Suggestions & Improvements**: Offers suggestions for refactoring and optimization.
- 🎨 **Clean UI**: Minimal and accessible interface.

---

## 📁 Project Structure

```bash
codalyzer/
├── client/               # Frontend app
│   ├── components/       # Reusable React components
│   ├── pages/            # Route-level components
│   ├── store/            # Zustand state logic
│   ├── utils/            # Helper functions
│   └── main.tsx          # App entry
│
├── server/               # Backend API
│   ├── routes/           # API routes
│   ├── controllers/      # Request logic
│   ├── utils/            # Helper functions
│   └── index.js          # Server entry
│
├── README.md
├── package.json
└── .env                  # API keys and environment variables
