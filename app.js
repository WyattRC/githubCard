let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/WyattRC");
req.addEventListener("load", reqListener);
req.send();




function reqListener(){
  let info = JSON.parse(this.responseText);
  console.log(info);
  let indexInfo = document.querySelector(".Container")
  indexInfo.innerHTML = `
  <header>
  <h1>${info.name}</h1>
  </header>
 <div id="everythingToKnow">


 <div id="profileBasics">
 <h3>The Basics</h3>
 <p><span>Name:</span> ${info.name}</p>
 <p><span>Github Link:</span> <a href="${info.html_url}">WyattRC</a></p>
 <p><span>Email:</span> wcnd2016@gmail.com</p>
 <p><span>Enrolled @ </span>The Iron Yard</p>
 <p><span>Nice website:</span> <a href="http://www.pixelthoughts.co/">http://www.pixelthoughts.co/</a></p>


 </div>
 <div id="biography">
 <h3>The Story</h3>
 <p>${info.bio}</p>
 </div>


 <div id="profilePic">
 <img src=${info.avatar_url}>
</div>
</div>
  `;

}
