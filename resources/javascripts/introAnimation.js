function intro(){
  var introAnimation = document.getElementById("introAnimation");
  var website = document.getElementById("website");

  introAnimation.style.display = "block";

  if(introAnimation.style.display === "block"){
    introAnimation.style.display = "none";
    website.style.display = "block";

  }
  // if (introAnimation.style.display === "none") {
  //   introAnimation.style.display = "block";
  //   website.style.display = "none";
  // } else {
  //   introAnimation.style.display = "none";
  //   website.style.display = "block";
  // }
}
