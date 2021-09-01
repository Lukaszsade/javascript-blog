/* eslint-disable no-inner-declarations */
'use strict';

{
  const optArticleSelector = '.post';
  const optTitleSelector = '.post-title';
  const optTitleListSelector = '.titles';
  const optArticleTagsSelector = '.post-tags .list';
  const optTagsListSelector = '.tags.list';
  const optArticleAuthorSelector = '.post-author';

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);

    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
  };

  function generateTitleLinks(customSelector = '') {
    customSelector = customSelector.replace('#', '');
    console.log(generateTitleLinks);
    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    for (let article of articles) {
      /* get the article id */
      const articleId = article.getAttribute('id');

      /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* get the title from the title element */
      const linkHTML =
        '<li><a href="#' +
        articleId +
        '"><span>' +
        articleTitle +
        '</span></a></li>';

      /* insert link into titleList */
      titleList.insertAdjacentHTML('beforeend', linkHTML);
    }

    /* get all article link elements */
    const links = document.querySelectorAll('.titles a');

    /* for each link add on-click handler */
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }

  generateTitleLinks();

  function generateTags() {


    /* find all articles */

    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);


    /* START LOOP: for every article: */

    for (let article of articles) {

      /* find tags wrapper */

      const tagsWrapper = article.querySelector(optArticleTagsSelector);
      console.log(tagsWrapper);

      /* make html variable with empty string */

      let html = '';

      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);

      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);

      /* START LOOP: for each tag */
      for (let tag of articleTagsArray) {
        console.log(tag);
        /* generate HTML of the link */

        const taglinkHTML = '<li> <a href="#tags-' + tag + '">' + tag + '</a> </li>' + '   ';
        console.log(taglinkHTML);


        /* add generated code to html variable */

        tagsWrapper.insertAdjacentHTML("beforeend", taglinkHTML);
        html = html + taglinkHTML;

      }




      /* END LOOP: for each tag */

      /* insert HTML of all the links into the tags wrapper */

      /* END LOOP: for every article: */
    }
  }


  generateTags();


  function tagClickHandler(event) {

    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named 'clickedElement' and give it the value of 'this' */
    const clickedElement = this;

    /* make a new constant 'href' and read the attribute 'href' of the clicked element */
    const href = clickedElement.getAttribute('href');

    /* make a new constant 'tag' and extract tag from the 'href' constant */
    const tag = href.replace('#tag-', ' ');


    /* find all tag links with class active */
    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log('activeTagLinks: ', activeTagLinks);

    /* START LOOP: for each active tag link */

    /* remove class active */

    /* END LOOP: for each active tag link */

    /* find all tag links with 'href' attribute equal to the 'href' constant */

    /* START LOOP: for each found tag link */

    /* add class active */

    /* END LOOP: for each found tag link */

    /* execute function 'generateTitleLinks' with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');

  }


  function addClickListenersToTags() {
    /* find all links to tags */

    /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

    /* END LOOP: for each link */
  }

  addClickListenersToTags();




  function generateAuthors() {

    let allAuthors = {};

    const articles = document.querySelectorAll(optArticleSelector);

    for (let article of articles) {

      const authorWrapper = article.querySelector(optArticleAuthorSelector);

      const author = article.getAttribute('data-author');
      console.log('author:', author);

      let html = '';

      const linkHTML = '<a href="#author-' + author + '">' + author + '</a>';

      html = html + linkHTML;

      if (!allAuthors[author]) {
        allAuthors[author] = 1;
      } else {
        allAuthors[author]++;
      }

      authorWrapper.innerHTML = html;
    }
  }
  generateAuthors();
  function addClickListenersToAuthors() {

  }
  addClickListenersToAuthors();

  function autorClickHandler() {

  }
  autorClickHandler();

}

