"use strict";
{
  const optArticleSelector = ".post";
  const optTitleSelector = ".post-title";
  const optTitleListSelector = ".titles";

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll(".titles a.active");

    for (let activeLink of activeLinks) {
      activeLink.classList.remove("active");
    }

    /* add class 'active' to the clicked link */
    clickedElement.classList.add("active");

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll(".posts article.active");
    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove("active");
    }

    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute("href");

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);

    /* add class 'active' to the correct article */
    targetArticle.classList.add("active");
  };

  function generateTitleLinks(customSelector = "") {
    customSelector = customSelector.replace("#", "");

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = "";

    /* for each article */
    const articles = document.querySelectorAll(
      optArticleSelector + customSelector
    );

    for (let article of articles) {
      /* get the article id */
      const articleId = article.getAttribute("id");

      /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* get the title from the title element */
      const linkHTML =
        '<li><a href="#' +
        articleId +
        '"><span>' +
        articleTitle +
        "</span></a></li>";

      /* insert link into titleList */
      titleList.insertAdjacentHTML("beforeend", linkHTML);
      console.log("titleList: ", titleList);
    }
    
    /* insert "html" variable to titleList wrapper element */
    titleList.innerHTML = html;

    /* get all article link elements */
    const links = document.querySelectorAll(".titles a");

    /* for each link add on-click handler */
    for (let link of links) {
      link.addEventListener("click", titleClickHandler);
      let html = "";
    }
  }

  generateTitleLinks();
}