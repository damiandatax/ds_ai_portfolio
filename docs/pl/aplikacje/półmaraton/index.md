---
title: Półmaraton
description: Aplikacja do prognozowania czasu półmaratonu na podstawie danych biegacza
---

# 🏃 Aplikacja – Szacowanie czasu półmaratonu

**Utworzone: 2025-09-10**

Półmaraton to aplikacja webowa stworzona w Pythonie z wykorzystaniem **Streamlit** oraz **uczenia maszynowego**, która prognozuje czas ukończenia półmaratonu na podstawie wieku, płci i tempa biegu na 5 km.  
Projekt łączy elementy **analizy danych sportowych**, **modelowania ML** oraz **interakcji z modelem językowym (LLM)** w języku polskim.

<div align="center" markdown>
[💻 Repozytorium](https://github.com/damiandatax/halfmarathon-app){ .md-button }
</div>

---

**🎯 Cel aplikacji**

Celem projektu było opracowanie aplikacji, która umożliwia użytkownikowi w prosty sposób – poprzez podanie kilku danych lub swobodny opis w języku naturalnym – uzyskać **szacowany czas ukończenia półmaratonu** oraz **porównanie z wynikami innych biegaczy**.  
System automatycznie rozpoznaje dane z tekstu (np. *„Mam 29 lat, jestem kobietą i biegam 5 km po 4:50/km”*) dzięki wbudowanej integracji z GPT-4o lub lokalnemu parserowi regexowemu.

**Aplikacja pozwala:**

- przewidzieć czas ukończenia półmaratonu,  
- zobaczyć przewidywane miejsce OPEN i w kategorii wiekowej,  
- wygenerować plan międzyczasów (5, 10, 15 km, meta),  
- obejrzeć wykres tempa i rozkładu wyników,  
- przeliczyć tempo między formatami (min/km ↔ sek/km),  
- i oczywiście… zmotywować się do kolejnego biegu 💪  

---

**🚀 Kluczowe funkcje**

- wprowadzenie danych ręcznie lub poprzez opis w języku naturalnym (LLM),  
- automatyczna ekstrakcja danych przez **GPT-4o mini** lub lokalny parser,  
- predykcja czasu półmaratonu za pomocą modelu ML,  
- analiza pozycji użytkownika w klasyfikacji OPEN i wiekowej,  
- wizualizacje wyników – wykresy, histogramy, mediany, IQR,  
- generowanie i pobieranie planu międzyczasów w formacie CSV,  
- przelicznik tempa (min/km ↔ sek/km).  

---

**🧩 Technologie i narzędzia**

| 💡 Warstwa | 🛠️ Technologie |
|------------|--------------------------|
| **Język programowania** | Python 3.11 |
| **Frontend / UI** | Streamlit |
| **Uczenie maszynowe** | scikit-learn, joblib |
| **Analiza danych** | pandas, numpy |
| **Wizualizacje** | matplotlib |
| **Środowisko i konfiguracja** | python-dotenv (.env) |
| **AI / LLM** | OpenAI GPT-4o mini |
| **Monitoring LLM** | Langfuse |
| **Hosting i storage** | DigitalOcean App Platform, DigitalOcean Spaces |
| **Repozytorium kodu** | GitHub |
| **Eksperymenty i modelowanie** | Jupyter Notebook |

---

**🧠 Architektura i przepływ danych**

```text
Użytkownik → [Interfejs Streamlit]
          ↓
[Parser lokalny / LLM OpenAI GPT-4o-mini] → ekstrakcja danych (płeć, wiek, tempo)
          ↓
[Model ML (joblib)] → predykcja czasu półmaratonu (sekundy)
          ↓
[Warstwa prezentacji] → tabele, wykresy, rozkłady, komunikaty
          ↓
[DigitalOcean Spaces / App Platform] → przechowywanie i deploy
```

---
**📊 Podgląd aplikacji**

<div align="center"> <table> <tr> <td align="center" width="50%"> <img src="/assets/images/screan_halfmarathon.png" alt="Ekran główny aplikacji – dane i predykcja" width="100%"><br> <em>Ekran główny aplikacji – wprowadzanie danych i wynik predykcji</em> </td> <td align="center" width="50%"> <img src="/assets/images/screan_halfmarathon_1.png" alt="Wykres i rozkład wyników" width="100%"><br> <em>Wizualizacja rozkładu czasów i pozycji w klasyfikacji</em> </td> </tr> </table> </div>