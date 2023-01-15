
 gapi.load('auth2', function() {
      gapi.auth2.init({
        client_id: '705584317099-ch8ugrkfaurq309vfrhblc8nli36desb.apps.googleusercontent.com',
        plugin_name: "hello"
      });
      gapi.signin2.render('my-signin2', {
        'scope': 'https://www.googleapis.com/auth/plus.login',
        'width': 175,
        'height': 40,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
      });
    });

    function onSuccess(googleUser) {
  var profile = googleUser.getBasicProfile();
  var userData = {
    name: profile.getName(),
    email: profile.getEmail(),
    imageUrl: profile.getImageUrl()
  };
  // this to save user data in localStorage
  localStorage.setItem("user", JSON.stringify(userData));

  // this UI to show the user's information
  document.getElementById('menu-button').style.backgroundImage = 'url(' + profile.getImageUrl() + ')';
  document.getElementById('name').innerText = profile.getName();
  document.getElementById('menu-container').style.display = 'block';
  document.getElementById('my-signin2').style.display = 'none';
}
window.onload = function() {
    let user = JSON.parse(localStorage.getItem("user"));
    if(user){
        console.log("User already logged in");
    }else{
        console.log("User not logged in");
    }
};




    function onFailure(error) {
      console.log(error);
    }

    document.getElementById('menu-button').addEventListener('click', function() {
      var menu = document.getElementById('menu');
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
    });

    document.getElementById('logout-button').addEventListener('click', function() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function() {
        document.getElementById('my-signin2').style.display = 'block';
        document.getElementById('menu-container').style.display = 'none';
        document.getElementById("message").style.display = "block";
    setTimeout(function() {
        document.getElementById("message").style.display = "none";
    }, 2000);
        
      });
    });


function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  
  burger.addEventListener("click", () => {
      //Toggle Nav
      nav.classList.toggle("nav-active");
      
      //Animate Links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ""
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
      });
      //Burger Animation
      burger.classList.toggle("toggle");
  });
  
}

navSlide();


const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});


function reload(){
  location.reload();
}

function login(){
  location.href="/login.html"
}

function logout(){
  location.href="/index.html"
}

function trnds(){
  scroll({
    left:0,
    top:300,
    behavior:'smooth'
    
})
}

function movie(){
  location.href="main.html"
  scroll({
    left:0,
    top:920,
    behavior:'smooth'
})

}

function Popular(){
  scroll({
    left:0,
    top:2250,
    behavior:'smooth'
    
})
}


function tvshows(){
  location.href="tvshows.html"
}



let send = document.querySelector('#send')

send.onclick= function(){
  alert("you have sent your message succfuly")
}

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("goUpBtn").style.display = "block";
  } else {
    document.getElementById("goUpBtn").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


