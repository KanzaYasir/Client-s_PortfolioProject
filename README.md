

```markdown
# Khubaib Ahmad Portfolio

Welcome to my personal portfolio web app!  
This project is a **React + Node.js application** deployed on **Hugging Face Spaces** with an integrated AI chat feature powered by a client-provided Hugging Face API.

---

## 🚀 Live Demo

Check out the live portfolio here:  
[Khubaib Ahmad Portfolio](https://huggingface.co/spaces/KanzaYasir/KhubaibAhmad_Portfolio)

---

## 🖼 Screenshot

![Portfolio Screenshot](./e48416dc-d5ba-4ad1-9b53-3c626b8db423.png)

---

## 💡 Features

- **Interactive Portfolio**: Showcases skills, experience, and projects.  
- **AI Chatbot**: Ask questions about me using a trained AI model (client-provided).  
- **Responsive Design**: Works on desktop, tablet, and mobile devices.  
- **Social Links**: Direct links to LinkedIn, GitHub, and Kaggle profiles.  
- **Neon Gradient & Modern UI**: Sleek, modern UI with smooth animations.

---

## 🛠 Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS  
- **Backend**: Node.js, Express  
- **AI Integration**: Hugging Face API (client-provided)  
- **Deployment**: Hugging Face Spaces (Docker-enabled)  

---

## 📁 Project Structure

```

root
├── client/        # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/        # Node.js backend
│   └── server.js
├── data/          # JSON data for About section
├── Dockerfile
├── e48416dc-d5ba-4ad1-9b53-3c626b8db423.png  # Screenshot
└── README.md

````

---

## ⚡ Getting Started

### Prerequisites

- Node.js >= 18  
- npm >= 9  
- (Optional) Docker for containerized deployment  

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/KhubaibAhmad_Portfolio.git
cd KhubaibAhmad_Portfolio
````

2. Install backend dependencies:

```bash
cd server
npm install
```

3. Install frontend dependencies:

```bash
cd ../client
npm install
```

4. Create a `.env` file in the `server` folder and add your Hugging Face API key:

```
CLIENT_API_KEY= huggingface_token
```

5. Start development server:

```bash
# Backend
cd ../server
npm start

# Frontend
cd ../client
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗 Build for Production

```bash
# Build frontend
cd client
npm run build

# Start backend (serves React build)
cd ../server
node server.js
```

---

## 🐳 Deploy with Docker

Hugging Face Spaces supports Docker:

```bash
docker build -t khubaib-portfolio .
docker run -p 7860:7860 khubaib-portfolio
```

---

## 📌 Usage

1. Visit the live demo or your deployed instance.
2. Navigate through the portfolio sections.
3. Open the chat widget at the bottom-right corner.
4. Ask any question about Khubaib Ahmad — the AI chatbot will respond using the client-provided model.

---

## 🔗 Social Links

* [LinkedIn](https://www.linkedin.com/in/muhammad-khubaib-ahmad-/)
* [GitHub](https://github.com/Khubaib8281/)
* [Kaggle](https://www.kaggle.com/)

---

## 📝 Notes

* The chat feature uses a **private client-provided Hugging Face API key**.
* All API calls are routed through the backend (`/chat`) for security.
* Make sure to **keep your API key private** and do not commit it to GitHub.
* API endpoint: `https://Khubaib01-khubaib-portfolio.hf.space/api/predict/`

---

## 📚 Learn More

* [React Documentation](https://reactjs.org/)
* [Node.js Documentation](https://nodejs.org/en/docs/)
* [TailwindCSS Documentation](https://tailwindcss.com/docs)
* [Hugging Face API](https://huggingface.co/docs/api-inference/index)

---

## 🎨 License

This project is licensed under the MIT License.
Feel free to use it as a reference or fork it for your own portfolio.



