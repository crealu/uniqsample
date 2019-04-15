// uniq-table.js
function clearContent(div) {
  while(div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function menu() {
  let bars = document.getElementsByClassName('bar');
  let dd = document.getElementById('dropdown-menu');
  let mnl = document.getElementById('mobile-list');

  if (bars[2].style.opacity == '0') {
    bars[0].style.transform = 'rotate(0deg)';
    bars[0].style.top = '0px';
    bars[1].style.transform = 'rotate(0deg)';
    bars[1].style.top = '0px';
    bars[2].style.opacity = '1';

    dd.style.top = '-125px';
    dd.style.opacity = '0';
    timedHide(dd);
    //dd.style.zIndex = '10';
    //dd.style.display = 'none';

  } else {
    bars[0].style.transform = 'rotate(45deg)';
    bars[0].style.top = '5px';
    bars[1].style.transform = 'rotate(-45deg)';
    bars[1].style.top = '-3px';
    bars[2].style.opacity = '0';

    //dd.style.zIndex = '401';
    dd.style.top = '-75px';
    dd.children[0].style.display = 'none';
    dd.style.display = 'block';
    timedHeight(dd);
    timedShow(dd);
  }
}

function timedHide(d) {
  let id = setInterval(frame, 100);
  let i = 0;
  function frame() {
    i++;
    if (i == 10) {
      clearInterval(id);
      d.style.display = 'none';
    }
  }
}

function assignActive() {
  if (document.getElementsByClassName('active-content')[0]) {
    let activeC = document.getElementsByClassName('active-content')[0];
    activeC.style.opacity = '0';
    activeC.classList.remove("active-content");
  }
}

/*
  seven secitons
  -   who we are
  -   company
  -   business
  -   people
  -   news
  -   uniqtable mag
  - contact
*/

function clearHomeContents() {
  let homeContents = document.getElementsByClassName('home-page-section');
  for (let i = 0; i < homeContents.length; i++) {
    homeContents[i].style.opacity = '0';
    timedHide(homeContents[i]);
  }
}

function clearOwnContent() {
  let ownContent = document.getElementsByClassName('own-content');
  for (let i = 0; i < ownContent.length; i++) {
    ownContent[i].style.display = 'none';
    if (ownContent[i].classList.contains('active-content')) {
      ownContent[i].style.display = 'block';
    }
  }
}

function changeContent(linkTo, isitMobile) {
  clearHomeContents();
  assignActive();
  clearOwnContent();

  if (isitMobile == 0) {
    menu();
  } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
  }

  let contentToDisplay = '';

  switch (linkTo) {
    case 'who-we-are':
        contentToDisplay = 'who-we-are-content';
      break;
    case 'company':
      contentToDisplay = 'company-content';

      break;
    case 'business':
      contentToDisplay = 'business-content';

      break;
    case 'people':
      contentToDisplay = 'people-content';

      break;
    case 'news':
      contentToDisplay = 'news-content';

      break;
    case 'magazine':
      contentToDisplay = 'magazine-content';

      break;
    case 'contact':
      contentToDisplay = 'contact-content';

      break;
  }

  let theContent = document.getElementById(contentToDisplay);
  theContent.setAttribute("class", "active-content");
  theContent.setAttribute("class", "own-content");
  theContent.style.display = 'block';

  let id = setInterval(frame, 1000);
  function frame() {
    var i = 0;
    i++;
    if (i == 1) {
      clearInterval(id);
      theContent.style.opacity = '1';
    }
  }
}

function showModal() {
  let mod = document.getElementById('modal');
  mod.style.display = 'block';
  scaleModal(mod);
}

function scaleModal(m) {
  let i = 0;
  let id = setInterval(frame, 75);
  function frame() {
    i++;
    if (i == 1) {
      clearInterval(id);
      m.style.transform = 'scale(1)';
    }
  }
}

function closeModal() {
  let mod = document.getElementById('modal');
  let packageHere = document.getElementById('gets-package');

  clearContent(packageHere);

  mod.style.tranform = 'scale(0)';
  mod.style.display = 'none';
}

function packageSelect(num) {
  let packageHere = document.getElementById('gets-package');
  let newH3 = document.createElement("h3");
  let packageInput = document.getElementById('package-input');
  let package = '';
  switch (num) {
    case 1:
      package = 'LIGHT PLAN';
      break;
    case 2:
      package = 'REGULAR PLAN';
      break;
    case 3:
      package = 'PREMIUM PLAN';
      break;
  }
  let packageTitle = document.createTextNode(package);
  newH3.appendChild(packageTitle);
  packageHere.appendChild(newH3);
  packageInput.value = package;
  showModal();
}
/*
function moreFormDetails() {
  let detailsHere = document.getElementById('more-details');
  let helpYou = document.getElementById('help-you');
  helpYou.opacity = '0';

  clearContent(detailsHere);

  let details = [
    'Product details',
    'Video look and feel',
    'Example videos',
    'Product shipping',
    'Branding details',
    'Where to publish you video'
  ];

  let newP = document.createElement("p");
  let pText = 'Providing details about your product and intent will helps us to to help you catch the right tide at the right time. Some things to consider are:';
  let newPText = document.createTextNode(pText);
  newP.appendChild(newPText);
  newP.classList.add('wwd-text');

  let detailsUL = document.createElement("ul");

  for (let x = 0; x < details.length; x++) {
    let detailsLI = document.createElement("li");
    let detailsText = document.createTextNode(details[x]);
    detailsLI.appendChild(detailsText);
    detailsUL.appendChild(detailsLI);
  }

  detailsUL.style.width = '85%';
  detailsHere.appendChild(newP);
  detailsHere.appendChild(detailsUL);

  detailsHere.style.height = '50px';
}*/

function loadHome() {
  let nav = document.getElementsByClassName('navigation-bar');
  nav[0].style.top = '0px';
}

function homeLoadFunctions() {
  let i = 0;
  let id = setInterval(frame, 250);
  function frame() {
    i++;
    if (i == '1') {
      clearInterval(id);
      loadHome();
    }
  }
}

function timedHeight(drop) {
  let i = 0;
  let id = setInterval(frame, 100);
  function frame() {
    i++;
    if (i == '1') {
      clearInterval(id);
      drop.style.opacity = '1';
      drop.style.left = '0px';
    }
  }
}

function timedShow(drop) {
  let i = 0;
  let id = setInterval(frame, 250);
  drop.children[0].style.display = 'block';
  function frame() {
    i++;
    if (i == '1') {
      clearInterval(id);
      drop.children[0].style.opacity = '1';
    }
  }
}

// 3/15/19
function giveIntroTransition() {
  let iw = document.getElementById('intro-wrapper');

  let i = 0;
  let id = setInterval(frame, 1000);
  function frame() {
    i++;
    if (i == 3) {
      clearInterval(id);
      iw.style.transition = '0.5s';
    }
  }
}

window.onload = homeLoadFunctions();

/* scroll animations */

function loadAnimations() {
  var yPos = window.scrollY;
  var viewY = Math.floor(yPos);
  if (viewY >= 850 && viewY < 1050) {
      var pers = document.getElementById('percent-row');
      pers.style.opacity = '1';
      pers.style.transform = 'translateY(-20px)';
  } else if (viewY >= 1300 && viewY < 1400) {
      var photo = document.getElementById('first-img-row');
      photo.style.opacity = '1';
      photo.style.transform = 'translateX(-25px)';
  } else if (viewY >= 1500 && viewY < 1600) {
      var photo2 = document.getElementById('second-img-row');
      photo2.style.opacity = '1';
      photo2.style.transform = 'translateX(25px)';
  }
}

function logScrollSection() {
  let windowY = window.scrollY;
  let floored = Math.floor(windowY);
  if (floored >= 500 && floored < 550) {
    giveScrollAnimation();
  } else if (floored >= 750 && floored < 800) {
    imgScrollAnimation();
  }
  console.log(floored);
}

function giveScrollAnimation() {
  let wwaTitle = document.getElementById('who-we-are-title');
  wwaTitle.style.animation = 'type 0.5s ease-out 0s forwards';

  let readMoreBtn = document.getElementById('wwa-read-more');
  readMoreBtn.style.animation = 'showReadMore 0.5s ease-out 0s forwards';

  let subText = document.getElementsByClassName('sub-text-container')[0];
  subText.style.animation = 'revealSub 0.75s ease-out 0.5s forwards';
}

function imgScrollAnimation() {
  let infoCols = document.getElementsByClassName('info-col');
  for (let i = 0; i < infoCols.length; i++) {
    infoCols[i].style.animation = 'fadeUp 1s ease-out 0s forwards';
  }
}

window.addEventListener('scroll', logScrollSection, true);
/*
$(window).bind('scroll', function(e){
  parallaxScroll();
});

function parallaxScroll() {
  var scrolled = $(window).scrollTop();
  $('#parallax-3').css('top', (0 - (scrolled * .15)) + ' px');
  $('#parallax-3').parallax({imageSrc: 'https://uniqtable.com/wp-content/uploads/2019/03/japanese-japanese-garden-tea-time-1576403.jpg'})

  $('#parallax-4').css('top', (0 - (scrolled * .15)) + ' px');
  $('#parallax-4').parallax({imageSrc: 'https://i.ytimg.com/vi_webp/dekUlY29sno/maxresdefault.webp'})
}
*/
