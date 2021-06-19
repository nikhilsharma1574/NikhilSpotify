var mysong = document.getElementById("autosong");
var playicon = document.getElementById("playbtn");
var stopicon = document.getElementById("stopbtn");

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

playicon.onclick = function () {
  mysong.play();
};
so1.onclick = function () {
  teresiva.play();
  document.getElementById("plai1").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Brown Munde";
  live.src = "2brownmunde.jpg";
};
 so2.onclick = function () {
   warr.play();
   document.getElementById("plai2").innerHTML = "Playing....";
   document.getElementById("live_name").innerHTML = "Control - Armaan Malik";
   live.src = "2control.jpg";
 };
so3.onclick = function () {
  sau.play();
  document.getElementById("plai3").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "  Dancing in My Room";
  live.src = "2dancinginroom.jpg";
};
so4.onclick = function () {
  levi.play();
  document.getElementById("plai4").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML =
    "  Dancing Monkey - Tones & i ";
  live.src = "2dance.jpg";
};
so5.onclick = function () {
  rabba.play();
  document.getElementById("plai5").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = " GalatFehimi";
  live.src = "2glatfehemi.jpg";
};
so6.onclick = function () {
  kinna.play();
  document.getElementById("plai6").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = " High On Life";
  live.src = "2highonlife.jpg";
};
so7.onclick = function () {
  watr.play();
  document.getElementById("plai7").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Hymm For the Weekend";
  live.src = "2hymmforweekend.jpg";
};
so8.onclick = function () {
  animals.play();
  document.getElementById("plai8").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "  Safarnama   ";
  live.src = "2safarnama.jpg";
};
so9.onclick = function () {
  just.play();
  document.getElementById("plai9").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = " Sketchers   ";
  live.src = "2skechers.jpg";
};
so10.onclick = function () {
  vac.play();
  document.getElementById("plai10").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "  Thandi Hawye - RITWIZ";
  live.src = "2thandihawaye.jpg";
};
so11.onclick = function () {
  stars.play();
  document.getElementById("plai11").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Counting Star";
  live.src = "";
};
so12.onclick = function () {
  gym.play();
  document.getElementById("plai12").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = " Trampholline";
  live.src = "2tramp.jpg";
};

// SONG PAUSE BUTTON

stopicon.onclick = function () {
  mysong.pause();
};
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
