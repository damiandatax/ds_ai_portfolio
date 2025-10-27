---
title: Language helper
description: Language helper - pomocnik językowy
---

# 🌍 Language Helper

**Utworzone: 2025-10-24**

Language Helper to aplikacja do nauki słownictwa i podstaw gramatyki w kilku językach. Umożliwia szybkie tłumaczenia z wymową (gTTS), naukę poprzez fiszki per język, dodawanie własnych słówek, ćwiczenia w trybie ABCD i pisemnym, a także podgląd postępów i statystyk. Projekt powstał w Pythonie z wykorzystaniem Streamlit (frontend + logika), Altair (wykresy), Pandas (prosta analityka) i Pillow (grafika). Aplikacja działa online na Streamlit Cloud.

<div align="center" markdown>
[▶️ Otwórz aplikację](https://language-assistant-damiandatax.streamlit.app){ .md-button .md-button--primary }
[💻 Repozytorium](https://github.com/damiandatax/language_helper_app){ .md-button }
</div>

---

**🎯 Cel aplikacji**

Narzędzie do skutecznej nauki słownictwa i podstawowych struktur językowych. Ułatwia codzienną praktykę: od szybkich tłumaczeń z wymową, przez fiszki per język, po ćwiczenia sprawdzające pamięć aktywną. Projekt zaprojektowany „pod użytkownika” — z czytelnym interfejsem, statystykami i możliwością łatwego rozszerzania bazy słów.

---

**🚀 Kluczowe funkcje**

- 🧠 **Fiszki per język** (EN/DE/ES/IT): losowanie, „Pokaż tłumaczenie”, oznaczanie **Znam / Nie znam**, odtwarzanie wymowy.
- 🌍 **Tłumacz** (PL↔EN/DE/ES/IT) z **TTS** wyniku; historia tłumaczeń.
- 🧱 **Słownictwo**: dodawanie własnych słówek (auto-tłumaczenie, jeśli brak), filtr, kasowanie pojedyncze i zbiorcze.
- 📝 **Ćwiczenia**: tryb **ABCD** (z dystraktorami) i **Pisanie** (normalizacja odpowiedzi).
- 📊 **Panel**: postęp sesji, wykres aktywności (Altair), licznik celu dziennego, streak.
- ⚙️ **Ustawienia**: wybór języka bazowego (UI) i języka nauki, cel dzienny, branding w sidebarze.

---

**🧩 Technologie i narzędzia**

| 💡 Warstwa | 🛠️ Technologie |
|-------------|----------------|
| **Frontend / UI** | Streamlit, HTML/CSS, Material Design |
| **Backend / Logika** | Python 3.10+, Streamlit Session State |
| **Dane i analityka** | Pandas, Altair |
| **Audio (TTS)** | Google Text-to-Speech (gTTS) |
| **Inne** | Pillow (obrazy), Requests (API), JSON (lokalne dane) |
| **Hosting** | Streamlit Cloud |

---

**🧭 Architektura & dane**

- Struktura: `app.py` (wejście, styl, routing) + `src/ui.py` (widoki) + `src/storage.py` (IO plików, postęp) + `src/translator.py` + `src/i18n.py`.
- Dane lokalne w `data/words.json`, `data/progress.json`, `data/translations.json` (łatwo wymienialne / wersjonowane).




