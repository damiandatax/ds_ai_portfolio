---
title: Analiza Danych Titanic (EDA)
description: Analiza danych pasażerów Titanica — czynniki przeżycia, przygotowanie danych i wnioski.
---

# **Analiza Danych Titanic (EDA)**

**Utworzone: 2025-06-24**

Projekt eksploracyjno-analityczny oparty na klasycznym zbiorze danych Titanic.
Celem analizy było zbadanie czynników wpływających na przeżywalność pasażerów,
takich jak płeć, wiek, klasa podróży, cena biletu czy liczba członków rodziny na pokładzie.

W ramach projektu przeprowadzono analizę wstępną, oczyszczenie danych,
analizę szczegółową zmiennej celu oraz wizualizację zależności między kluczowymi cechami.

Wyniki potwierdziły, że największy wpływ na przeżycie miały:
płeć, klasa podróży, wiek oraz status społeczny pasażera.

Projekt został wykonany w języku Python z użyciem popularnych bibliotek do analizy danych i wizualizacji.

---

<div align="center">
<a href="titanic.ipynb" class="md-button md-button--primary">📥 Pobierz Notebook</a>
</div>

---

## 🔍 Analiza danych

<iframe
    id="content"
    src="titanic.html"
    width="100%"
    style="border:none;overflow:hidden;border-radius:10px;box-shadow:0 4px 20px rgba(0,0,0,.05);"
></iframe>

<script>
function resizeIframeToFitContent(iframe) {
    iframe.style.height = (iframe.contentWindow.document.documentElement.scrollHeight + 50) + "px";
    iframe.contentDocument.body.style["overflow"] = "hidden";
}
window.addEventListener("load", function() {
    var iframe = document.getElementById("content");
    resizeIframeToFitContent(iframe);
});
window.addEventListener("resize", function() {
    var iframe = document.getElementById("content");
    resizeIframeToFitContent(iframe);
});
</script>

---

## 📚 Wykorzystane biblioteki

* pandas – do pracy z danymi (wczytywanie, grupowanie, opisy statystyczne),
* numpy – pośrednio, bo pandas go używa (np. przy obliczeniach),
* matplotlib – do klasycznych wykresów (słupki, boxploty),
* seaborn – do bardziej estetycznych i zaawansowanych wizualizacji (heatmapa, FacetGrid, barploty).

