// IMAGE CHANGER

var live = document.getElementById("current_song_image");

// SONGS

var teresiva = document.getElementById("s11");
var warr = document.getElementById("s22");
var sau = document.getElementById("s33");
var levi = document.getElementById("s44");
var rabba = document.getElementById("s55");
var kinna = document.getElementById("s66");
var watr = document.getElementById("s77");
var animals = document.getElementById("s88");
var just = document.getElementById("s99");
var vac = document.getElementById("s100");
var stars = document.getElementById("s111");
var gym = document.getElementById("s112");

// SONG NAME LINKS FOR ONN

var so1 = document.getElementById("s1");
var so2 = document.getElementById("s2");
var so3 = document.getElementById("s3");
var so4 = document.getElementById("s4");
var so5 = document.getElementById("s5");
var so6 = document.getElementById("s6");
var so7 = document.getElementById("s7");
var so8 = document.getElementById("s8");
var so9 = document.getElementById("s9");
var so10 = document.getElementById("s10");
var so11 = document.getElementById("s11");
var so12 = document.getElementById("s12");

//  BUTTON FOR PAUSE INDV SONGS

var st1 = document.getElementById("stop1");
var st2 = document.getElementById("stop2");
var st3 = document.getElementById("stop3");
var st4 = document.getElementById("stop4");
var st5 = document.getElementById("stop5");
var st6 = document.getElementById("stop6");
var st7 = document.getElementById("stop7");
var st8 = document.getElementById("stop8");
var st9 = document.getElementById("stop9");
var st10 = document.getElementById("stop10");
var st11 = document.getElementById("stop11");
var st12 = document.getElementById("stop12");

// Songs Play Button

so1.onclick = function () {
  teresiva.play();
  warr.pause();
  sau.pause();
  levi.pause();
  rabba.pause();
  kinna.pause();
  watr.pause();
  animals.pause();
  just.pause();
  vac.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai1").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Head And Heart";
  live.src = "head and heart.jpg";
};
so2.onclick = function () {
warr.play();
teresiva.pause();
sau.pause();
levi.pause();
rabba.pause();
kinna.pause();
watr.pause();
animals.pause();
just.pause();
vac.pause();
stars.pause();
gym.pause();warr.play();
  document.getElementById("plai2").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Beliver";
  live.src = "beliver.jpg";
};
so3.onclick = function () {
  sau.play();
  teresiva.pause();
  warr.pause();
  levi.pause();
  rabba.pause();
  kinna.pause();
  watr.pause();
  animals.pause();
  just.pause();
  vac.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai3").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Thunder";
  live.src = "thunder.jpg";
};
so4.onclick = function () {
  levi.play();
  teresiva.pause();
  warr.pause();
  sau.pause();
  rabba.pause();
  kinna.pause();
  watr.pause();
  animals.pause();
  just.pause();
  vac.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai4").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "darkside";
  live.src = "darkside.jpg";
};
so5.onclick = function () {
  rabba.play();
  teresiva.pause();
  warr.pause();
  sau.pause();
  levi.pause();
  kinna.pause();
  watr.pause();
  animals.pause();
  just.pause();
  vac.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai5").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "On My Way";
  live.src = "onmyway.jpg";
};
so6.onclick = function () {
  kinna.play();
  teresiva.pause();
  warr.pause();
  sau.pause();
  levi.pause();
  rabba.pause();
  watr.pause();
  animals.pause();
  just.pause();
  vac.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai6").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Wolves";
  live.src = "wolves.jpg";
};
so7.onclick = function () {
  watr.play();
  teresiva.pause();
  warr.pause();
  sau.pause();
  levi.pause();
  rabba.pause();
  kinna.pause();
  animals.pause();
  just.pause();
  vac.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai7").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Dynamite";
  live.src = "dynamite.jpg";
};
so8.onclick = function () {
  animals.play();
  teresiva.pause();
  warr.pause();
  sau.pause();
  levi.pause();
  rabba.pause();
  kinna.pause();
  watr.pause();
  just.pause();
  vac.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai8").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "ILY";
  live.src = "ily.jpg";
};
so9.onclick = function () {
  just.play();
  teresiva.pause();
  warr.pause();
  sau.pause();
  levi.pause();
  rabba.pause();
  kinna.pause();
  watr.pause();
  animals.pause();
  vac.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai9").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Rain On Me";
  live.src = "rain =onme.jpg";
};
so10.onclick = function () {
  vac.play();
  teresiva.pause();
  warr.pause();
  sau.pause();
  levi.pause();
  rabba.pause();
  kinna.pause();
  watr.pause();
  animals.pause();
  just.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai10").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Bad guy";
  live.src = "badguy.jpg";
};
so11.onclick = function () {
  stars.play();
  teresiva.pause();
  warr.pause();
  sau.pause();
  levi.pause();
  rabba.pause();
  kinna.pause();
  watr.pause();
  animals.pause();
  just.pause();
  vac.pause();
  gym.pause();
  document.getElementById("plai11").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Astranout";
  live.src = "astranout.jpg";
};
so12.onclick = function () {
   gym.play();
   teresiva.pause();
   warr.pause();
   sau.pause();
   levi.pause();
   rabba.pause();
   kinna.pause();
   watr.pause();
   animals.pause();
   just.pause();
   vac.pause();
   stars.pause();
  document.getElementById("plai12").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Hey Brother";
  live.src = "heybrother.jpg";
};

// SONG PAUSE BUTTON
st1.onclick = function () {
  teresiva.pause();
  document.getElementById("plai1").innerHTML = "";
};

st2.onclick = function () {
  warr.pause();
  document.getElementById("plai2").innerHTML = "";
};
st3.onclick = function () {
  sau.pause();
  document.getElementById("plai3").innerHTML = "";
};
st4.onclick = function () {
  levi.pause();
  document.getElementById("plai4").innerHTML = "";
};
st5.onclick = function () {
  rabba.pause();
  document.getElementById("plai5").innerHTML = "";
};
st6.onclick = function () {
  kinna.pause();
  document.getElementById("plai6").innerHTML = "";
};
st7.onclick = function () {
  watr.pause();
  document.getElementById("plai7").innerHTML = "";
};
st8.onclick = function () {
  animals.pause();
  document.getElementById("plai8").innerHTML = "";
};
st9.onclick = function () {
  just.pause();
  document.getElementById("plai9").innerHTML = "";
};
st10.onclick = function () {
  vac.pause();
  document.getElementById("plai10").innerHTML = "";
};
st11.onclick = function () {
  stars.pause();
  document.getElementById("plai11").innerHTML = "";
};
st12.onclick = function () {
  gym.pause();
  document.getElementById("plai12").innerHTML = "";
};

// Songs play list onclick functions

