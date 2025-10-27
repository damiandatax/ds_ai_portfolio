---
title: Iris Data Analysis (EDA)
description: Exploratory Data Analysis of the Iris dataset — feature insights, visualizations, and conclusions.
---

# Iris Data Analysis (EDA)

**Created: 2025-06-20**

This project focuses on an exploratory data analysis (EDA) of the classic **Iris dataset**, which includes three iris species: *setosa*, *versicolor*, and *virginica*.  
The analysis covered data structure and completeness, descriptive statistics, and a variety of visualizations such as histograms, boxplots, and violin plots.  
I examined outliers, variable correlations, and relationships between features using scatterplots and pairplots.  

The findings show that **petal features** provide the best separation between species, while **sepal features** are less significant.  
The project concludes with summarized insights presented as a report — forming a solid foundation for further classification modeling.

---

<div align="center">
<a href="iris.ipynb" class="md-button md-button--primary">📥 Download Notebook</a>
</div>

---

## 🔍 Data Analysis

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

## 📚 Libraries Used

* **pandas** → data loading, cleaning, and descriptive statistics  
* **numpy** → numerical operations  
* **matplotlib** → plots (histograms, scatterplots, boxplots)  
* **seaborn** → advanced visualizations (violin plots, correlation heatmaps, pairplots)  
* **sklearn.datasets** *(optional)* → loading the Iris dataset  
