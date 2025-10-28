# 🌐 Damian Kuś — Data Science & AI Portfolio

> 🌍 A personal portfolio showcasing projects in Data Science, Machine Learning, and Artificial Intelligence.

---

📘 [Read this file in Polish 🇵🇱](./README.md)

---

## 🚀 About the project

This portfolio showcases selected projects in **Data Science, Data Analysis, Machine Learning, and AI**, created during my self-study and professional development journey.  
The site is built with **[MkDocs Material](https://squidfunk.github.io/mkdocs-material/)** and supports two languages: **Polish 🇵🇱 and English 🇬🇧**.

🔗 **Live version:**  
👉 [https://damian-kus.github.io/ds_ai_portfolio](https://damian-kus.github.io/ds_ai_portfolio)

---

## 🧭 Portfolio structure

| Section | Description |
|----------|--------------|
| 🏠 **Home** | Introduction page with description and contact links |
| 📊 **Analyses** | Exploratory data analysis (EDA) projects — e.g., Iris, Titanic |
| 💻 **Applications** | Streamlit-based web applications |
| 👨‍💻 **About Me** | Personal background, skills, and technologies |
| 🌐 **Languages** | Switch between 🇵🇱 Polish and 🇬🇧 English versions |

---

## 🛠️ Technologies

| Layer | Technologies |
|--------|--------------|
| **Static site** | MkDocs, Material for MkDocs |
| **Multilingual support** | mkdocs-static-i18n |
| **Styling / JS** | Custom CSS & JavaScript (animations, language switcher) |
| **Data & Visualization** | Altair, Pandas, Matplotlib *(within projects)* |
| **Web apps** | Streamlit |
| **Versioning & Hosting** | Git + GitHub Pages (deployment via `mkdocs gh-deploy`) |

---

## 🧠 Featured projects

### 🗣️ Language Helper  
> An interactive app for learning vocabulary and basic grammar in multiple languages.  
Includes flashcards, ABCD exercises, writing mode, pronunciation (gTTS), and progress tracking.

🔗 [Open app](https://language-assistant-damiandatax.streamlit.app)  
💻 [Repository](https://github.com/damiandatax/language-helper)

---

### 🏃 Half Marathon Predictor  
> A Streamlit app using machine learning to predict half-marathon finishing time  
based on age, gender, and 5K pace. Combines data analysis, ML modeling,  
and natural language input interpretation with LLM (GPT-4o mini).
 
💻 [Repository](https://github.com/damiandatax/halfmarathon-app)

---

## 📁 Project structure

```bash
ds_ai_portfolio/
│
├── docs/
│ ├── index.md # Home page (PL)
│ ├── about/ # About Me
│ ├── analizy/ # Data analyses (PL)
│ ├── aplikacje/ # Applications (PL)
│ ├── en/ # English version
│ └── assets/ # Images, JS, CSS
│
├── mkdocs.yml # MkDocs configuration
├── requirements.txt # Dependencies
└── README_en.md # English project overview
```


---

## ⚙️ Run locally

To run the site locally:

```bash
# Clone the repository
git clone https://github.com/damian-kus/ds_ai_portfolio.git
cd ds_ai_portfolio

# Install dependencies
pip install -r requirements.txt

# Start the local server
mkdocs serve
```

---

**🚀 Deployment**

The site is published on GitHub Pages using the built-in MkDocs command:

```bash
mkdocs gh-deploy
```

After deployment, it becomes available at:

```bash
https://damian-kus.github.io/ds_ai_portfolio/
```

MkDocs automatically creates a gh-pages branch containing the built site.

---

**📬 Contact**

📧 damian.kus.98@gmail.com

💼 LinkedIn

🐙 GitHub

---

**📝 License**

This project is released under the MIT License — you are free to use and adapt it for your own needs.

---

Created with ❤️ by Damian Kuś
Powered by Python, MkDocs, and Streamlit