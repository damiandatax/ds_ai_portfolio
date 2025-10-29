---
title: Analiza Danych Irysów (EDA)
description: Eksploracja danych irysów — analiza cech, wizualizacje i wnioski.
---

# Analiza Danych Irysów (EDA)

**Utworzone: 2025-06-20**

Projekt polegał na eksploracyjnej analizie klasycznego zbioru danych Iris dataset, obejmującego trzy gatunki irysów: setosa, versicolor oraz virginica. W ramach analizy sprawdziłem strukturę i kompletność danych, przeprowadziłem statystyki opisowe, zwizualizowałem rozkłady cech (histogramy, boxploty, violinploty), zbadałem wartości odstające oraz zależności między zmiennymi (korelacje, scatterploty, pairplot). Analiza wykazała, że cechy płatków najlepiej rozróżniają gatunki, podczas gdy cechy kielicha są mniej istotne. Projekt kończy się wnioskami przygotowanymi w formie raportu, stanowiąc solidną podstawę do dalszego modelowania klasyfikacyjnego.

---

<div align="center">
<a href="irysy.ipynb" class="md-button md-button--primary">📥 Pobierz Notebook</a>
</div>

---

## 🔍 Analiza danych

<iframe
    id="content"
    src="irysy.html"
    width="100%"
    style="border: none; overflow: hidden; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,.05);"
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

* pandas → wczytywanie i przetwarzanie danych, statystyki opisowe

* numpy → obliczenia numeryczne

* matplotlib → wykresy (histogramy, scatterploty, boxploty)

* seaborn → zaawansowane wizualizacje (violinploty, heatmapa korelacji, pairplot)

* sklearn.datasets (opcjonalnie, jeśli używałeś do wczytania Iris)
