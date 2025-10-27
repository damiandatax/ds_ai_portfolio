---
title: Titanic Data Analysis (EDA)
description: Passenger data analysis — survival factors, data preparation, and insights.
---

# **Titanic Data Analysis (EDA)**

**Created: 2025-06-24**

This exploratory analysis project is based on the classic **Titanic dataset**.  
The goal was to investigate the main factors influencing passenger survival,  
such as gender, age, travel class, ticket fare, and family size aboard the ship.

The project involved initial data exploration, cleaning, target variable analysis,  
and visualization of relationships between key features.

The findings confirmed that **gender, travel class, age, and social status**  
were the most significant factors affecting survival probability.

The analysis was performed in **Python**, using popular libraries for data processing and visualization.

---

<div align="center">
<a href="titanic.ipynb" class="md-button md-button--primary">📥 Download Notebook</a>
</div>

---

## 🔍 Data Analysis

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

## 📚 Libraries Used

* **pandas** – for data loading, cleaning, grouping, and statistical summaries  
* **numpy** – indirectly through pandas (used for numerical operations)  
* **matplotlib** – for basic plots (bar charts, boxplots)  
* **seaborn** – for advanced and aesthetic visualizations (heatmaps, FacetGrid, barplots)  
