'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/
 { const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log('event: ', event);
    

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* add class 'active' to the clicked link */
  console.log('clickedElement: ', clickedElement);
  console.log('clickedElement (with plus): ' + clickedElement);
  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');
for(let activeArticle of activeArticles) {
  activeArticle.classList.remove('active')
}

  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log('articleSelector: ', articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log('targetArticle: ', targetArticle)
  
  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');

  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  
 }
 
  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(customSelector = ''){


  customSelector = customSelector.replace('#', '');

  /* remove contents of titleList */
  const titleList = document.querySelector(opt.titleListSelector); 
  titleList.innerHTML = '';
  console.log('titleList: usunięto listę linków');

  /* for each article */
const articles = document.querySelectorAll(opt.ArticleSelector + customSelector);
  console.log('opt.ArticleSelector + customSelector: ', opt.ArticleSelector + customSelector);    let html = '';

  for(let article of articles) {
    /* get the article id */
    const articleId = article.getAttribute('id');
    console.log('articleId: ', articleId);

    /* find the title element */

    const articleTitle = article.querySelector(opt.titleSelector).innerHTML;

    /* get the title from the title element */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('linkHTML: ', linkHTML);
    
    /* create HTML of the link */
  }
    titleList.innerHTML = titleList.innerHTML + linkHTML;

    /* insert link into titleList */
    titleList.insertAdjacentHTML('afterbegin', linkHTML);
    console.log('titleList: ', titleList); 
    
    html = html + linkHTML;
    console.log('htlm: ', html);
}
  
generateTitleLinks();
  
  }
