

var dataUrl=window.location.href;

var my_script_play = document.createElement("script");

my_script_play.setAttribute("src","//pleer.videoplayers.club/get_player?w=610&h=370&type=widget&kp_id=&name=&players=apicollaps,videocdn,hdvb,bazon,alloha,ustore,kodik,trailer,torrent&r_id=videoplayers&ani=COLLAPS&ati=&adi=&vni=VIDEOCDN&vti=&vdi=&hni=HDVB&hti=&hdi=&bni=BAZON&bti=&bdi=&alni=ALLOHATV&alti=&aldi=&usni=USTOREBZ&usti=&usdi=&koni=KODIK&koti=&kodi=&tti=&ru="+dataUrl);

my_script_play.async = true;

document.head.appendChild(my_script_play);
