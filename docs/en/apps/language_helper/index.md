---
title: Language Helper
description: Language Helper – your personal language learning assistant
---

# 🌍 Language Helper

**Created: 2025-10-24**

**Language Helper** is an app for learning vocabulary and basic grammar in multiple languages.  
It enables quick translations with pronunciation (gTTS), flashcards per language, adding your own words, ABCD and writing exercises, as well as progress tracking and statistics.  
The project was built in **Python** using **Streamlit** (frontend + logic), **Altair** (charts), **Pandas** (analytics), and **Pillow** (graphics).  
The app runs online on **Streamlit Cloud**.

<div align="center" markdown>
[▶️ Open the app](https://language-assistant-damiandatax.streamlit.app){ .md-button .md-button--primary }
[💻 Repository](https://github.com/damiandatax/language_helper_app){ .md-button }
</div>

---

**🎯 Purpose**

A tool designed to effectively learn vocabulary and basic sentence structures.  
It supports daily practice — from quick translations with pronunciation, through language-specific flashcards, to exercises that test active recall.  
The project was built with the user in mind — offering a clean interface, statistics, and easy wordbase expansion.

---

**🚀 Key Features**

- 🧠 **Flashcards per language** (EN/DE/ES/IT): randomization, “Show translation”, mark as **Known / Unknown**, play pronunciation.
- 🌍 **Translator** (PL↔EN/DE/ES/IT) with **TTS** output and translation history.
- 🧱 **Vocabulary management**: add your own words (auto-translate if missing), filter, delete single or multiple entries.
- 📝 **Exercises**: **ABCD** mode (with distractors) and **Writing** mode (input normalization).
- 📊 **Dashboard**: session progress, activity chart (Altair), daily goal tracker, streak counter.
- ⚙️ **Settings**: choose interface language and learning language, set daily goal, sidebar branding.

---

**🧩 Technologies & Tools**

| 💡 Layer | 🛠️ Technologies |
|-----------|----------------|
| **Frontend / UI** | Streamlit, HTML/CSS, Material Design |
| **Backend / Logic** | Python 3.10+, Streamlit Session State |
| **Data & Analytics** | Pandas, Altair |
| **Audio (TTS)** | Google Text-to-Speech (gTTS) |
| **Other** | Pillow (images), Requests (API), JSON (local data) |
| **Hosting** | Streamlit Cloud |

---

**🧭 Architecture & Data**

- Structure: `app.py` (entry point, style, routing) + `src/ui.py` (views) + `src/storage.py` (file I/O, progress) + `src/translator.py` + `src/i18n.py`
- Local data: `data/words.json`, `data/progress.json`, `data/translations.json` (easily replaceable / versioned)
