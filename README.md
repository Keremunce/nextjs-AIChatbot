# 🧠 Next.js AI Chatbot

A modern **ChatGPT-style AI assistant** built with **Next.js 14**, **OpenAI API**, and **Material UI**.  
The app delivers real-time AI conversations through a sleek, responsive UI and server-side rendering for optimal performance.

---

## 🧐 Overview — What, How, and Why

### 🟢 What
This project is a web-based AI chatbot that allows users to have natural language conversations powered by OpenAI’s GPT models.  
It mimics ChatGPT’s core experience while being lightweight, fast, and easy to deploy.

### ⚙️ How
Built using **Next.js 14 (App Router)** for scalability, **Material UI** + **TailwindCSS** for responsive styling, and the **OpenAI Node.js SDK** for streaming responses.  
The backend API routes handle message processing securely, while the front-end manages conversation state efficiently with React hooks.

### 💡 Why
The goal is to create a **personalizable, production-ready AI assistant** for indie developers and learners who want to understand how to integrate LLMs into real apps — without relying on closed-source products.

---

## ✨ Features
- ⚡ Real-time chat with OpenAI GPT models  
- 🎨 Beautiful Material UI + TailwindCSS hybrid styling  
- 🧩 Modular codebase using Next.js App Router  
- 💬 Streaming responses via serverless functions  
- 🌐 Deployed on Vercel with environment variables  
- 🔒 Secure API key management using `.env`  

---

## 🧰 Tech Stack
![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=white)
![Material UI](https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-black?logo=vercel)

---

## 🚀 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/Keremunce/nextjs-AIChatbot.git

# 2. Navigate into the project
cd nextjs-AIChatbot

# 3. Install dependencies
npm install

# 4. Create your environment file
touch .env.local
# Add your OpenAI API key:
# OPENAI_API_KEY=your_openai_api_key_here

# 5. Run the development server
npm run dev

# 6. Open in your browser
http://localhost:3000
```

---

## 🎥 Demo / Screenshots

| Chat Interface | Streaming Response |
|----------------|--------------------|
| ![Chat UI](assets/demo1.png) | ![Typing Effect](assets/demo2.gif) |

> 💡 Tip: You can deploy instantly using [Vercel](https://vercel.com/) by connecting this repo.

---

## 📚 Lessons Learned
- Implementing **streaming AI responses** in Next.js requires async iteration (`for await ... of`) and SSE handling.  
- Combining **Material UI** with **Tailwind** demands careful class management to avoid conflicts.  
- Managing environment variables securely across build stages is essential when deploying to Vercel.

---

## 🔮 Future Improvements
- Add chat history persistence using **Supabase** or **MongoDB Atlas**  
- Integrate voice input/output with **Web Speech API**  
- Implement custom prompt templates and role-based personalities  
- Introduce authentication (NextAuth.js) for multi-user chat sessions  

---

## 🧑‍💻 Author
Developed by **[Kerem ÜNCE](https://github.com/Keremunce)** — Indie app developer & UI-focused engineer.

---

## 🪪 License
This project is licensed under the **MIT License**.  
You’re free to use, modify, and distribute it with attribution.

---
