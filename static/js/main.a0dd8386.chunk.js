(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{20:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(15),r=c.n(s),o=c(7),i=(c(20),c(5)),l=c(3),u=c(0),p=function(e){var t=e.playlistStatus,c=e.setPlaylistStatus;return Object(u.jsxs)("nav",{children:[Object(u.jsx)("h1",{children:"Frequency"}),Object(u.jsx)("button",{onClick:function(){c(!t)},children:Object(u.jsx)(i.a,{icon:l.c,size:"2x"})})]})},d=function(e){var t=e.currentSong,c=e.isPlaying;return Object(u.jsxs)("div",{className:"song-container",children:[Object(u.jsxs)("div",{className:"cover-wrap",children:[Object(u.jsx)("img",{src:t.cover,alt:t.name,className:c?"cover-active":""}),Object(u.jsx)("div",{className:"cover-core"})]}),Object(u.jsxs)("div",{className:"song-info",children:[Object(u.jsx)("h2",{className:"song-name",children:t.name}),Object(u.jsx)("h3",{className:"song-artist",children:t.artist})]})]})},j=c(6),h=c.n(j),b=c(8),m=c(10),f=(c.p,function(e){var t=e.songs,c=e.currentSong,n=e.setCurrentSong,a=e.isPlaying,s=e.setIsPlaying,r=e.songInfo,o=e.setSongInfo,p=e.audioRef,d=e.isRepeat,j=e.setIsRepeat,f=e.isShuffle,g=e.setIsShuffle,O=function(e){var t=e.target.currentTime,c=e.target.duration;o(Object(m.a)(Object(m.a)({},r),{},{duration:c,currentTime:t}))},v=function(e){"repeat"===e?(j(!d),f&&g(!1)):"shuffle"===e&&(g(!f),d&&j(!1))},x=function(){var e=Object(b.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d){e.next=6;break}return e.next=3,n(c);case 3:p.current.play(),e.next=14;break;case 6:if(!f){e.next=13;break}return a=t[Math.floor(Math.random()*t.length)],e.next=10,n(a);case 10:p.current.play(),e.next=14;break;case 13:y("forward");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(h.a.mark((function e(r){var o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.indexOf(c),"forward"===r?i=t[(o+1)%t.length]:"backward"===r&&(i=(o-1)%t.length===-1?t[t.length-1]:t[(o-1)%t.length]),e.next=4,n(i);case 4:a||s(!0),p.current.play();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},w=Math.round(r.currentTime/r.duration*100);console.log(w);var N={background:"linear-gradient(90deg, #d100d1 ".concat(w,"%, rgb(235, 235, 255) ").concat(w,"%)")};return Object(u.jsxs)("div",{className:"player-container",children:[Object(u.jsxs)("div",{className:"time-control",children:[Object(u.jsx)("p",{children:S(r.currentTime)}),Object(u.jsxs)("div",{style:N,className:"track",children:[Object(u.jsx)("input",{min:0,max:r.duration||0,value:r.currentTime,onChange:function(e){p.current.currentTime=e.target.value,o(Object(m.a)(Object(m.a)({},r),{},{currentTime:e.target.value}))},type:"range"}),Object(u.jsx)("div",{className:"animate-track"})]}),Object(u.jsx)("p",{children:r.duration?S(r.duration):"0:00"})]}),Object(u.jsxs)("div",{className:"play-control",children:[Object(u.jsx)(i.a,{icon:l.g,onClick:function(){return v("repeat")},className:d?"active-playmode":""}),Object(u.jsx)(i.a,{onClick:function(){return y("backward")},className:"backward",size:"2x",icon:l.a}),Object(u.jsx)(i.a,{onClick:function(){a?p.current.pause():p.current.play(),s(!a)},className:"play",size:"3x",icon:a?l.d:l.e}),Object(u.jsx)(i.a,{onClick:function(){return y("forward")},className:"forward",size:"2x",icon:l.b}),Object(u.jsx)(i.a,{icon:l.f,onClick:function(){return v("shuffle")},className:f?"active-playmode":""})]}),Object(u.jsx)("audio",{onTimeUpdate:O,onLoadedMetadata:O,ref:p,src:c.audio,onEnded:x})]})}),g=function(e){var t=e.song,c=e.currentSong,n=e.isPlaying,a=e.setIsPlaying,s=e.setCurrentSong,r=e.audioRef,o=function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t);case 2:n||a(!0),r.current.play();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{onClick:o,className:"playlist-song-container ".concat(t.id===c.id?"selected-song":""),children:[Object(u.jsx)("img",{src:t.cover,alt:t.name}),Object(u.jsxs)("div",{className:"playlist-song-info",children:[Object(u.jsx)("h3",{className:"playlist-song-name",children:t.name}),Object(u.jsx)("h4",{className:"playlist-song-artist",children:t.artist})]})]})},O=function(e){var t=e.songs,c=e.currentSong,n=e.setCurrentSong,a=e.isPlaying,s=e.setIsPlaying,r=e.audioRef,o=e.playlistStatus;return Object(u.jsxs)("div",{className:"playlist-container ".concat(o?"active-playlist":""),children:[Object(u.jsx)("h2",{children:"Playlist"}),t.map((function(e){return Object(u.jsx)(g,{song:e,currentSong:c,setCurrentSong:n,isPlaying:a,setIsPlaying:s,audioRef:r},e.id)}))]})},v=c(4),x=function(){return[{name:"Dreamstate",cover:"https://chillhop.com/wp-content/uploads/2021/05/8ef1fa972003495d1ecfba6292116174e9c5d940-1024x1024.jpg",artist:"Toonorth",audio:"https://mp3.chillhop.com/serve.php/?mp3=17947",color:["#A1ABF9","#2E435F"],id:Object(v.v4)()},{name:"Bliss",cover:"https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",artist:"Misha, Jussi Halme",audio:"https://mp3.chillhop.com/serve.php/?mp3=9248",color:["#F3A19A","#A89FB2"],id:Object(v.v4)()},{name:"On The Moon",cover:"https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",artist:"SwuM",audio:"https://mp3.chillhop.com/serve.php/?mp3=15237",color:["#263330","#964F2D"],id:Object(v.v4)()},{name:"Vintage",cover:"https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",artist:"Evil Needle",audio:"https://mp3.chillhop.com/serve.php/?mp3=17088",color:["#EBC77E","#ED544E"],id:Object(v.v4)()},{name:"Lost Soul",cover:"https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",artist:"C Y G N",audio:"https://mp3.chillhop.com/serve.php/?mp3=14989",color:["#E199DA","#89ACE8"],id:Object(v.v4)()},{name:"Ambleside",cover:"https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",artist:"Aarigod",audio:"https://mp3.chillhop.com/serve.php/?mp3=12999",color:["#B8CE7B","#495C2E"],id:Object(v.v4)()},{name:"1999",cover:"https://chillhop.com/wp-content/uploads/2020/05/299ed90790252c3b19e0b5ca350d1cf3a9c30436-1024x1024.jpg",artist:"sadtoi",audio:"https://mp3.chillhop.com/serve.php/?mp3=9454",color:["#C26F40","#869785"],id:Object(v.v4)()},{name:"Hibiscus",cover:"https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-1024x1024.jpg",artist:"G Mills, Felty",audio:"https://mp3.chillhop.com/serve.php/?mp3=8971",color:["#C26F40","#869785"],id:Object(v.v4)()}]};var y=function(){var e=Object(n.useState)(x()),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(c[0]),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(n.useState)(!1),h=Object(o.a)(j,2),b=h[0],m=h[1],g=Object(n.useState)({duration:0,currentTime:0}),v=Object(o.a)(g,2),y=v[0],S=v[1],w=Object(n.useState)(!1),N=Object(o.a)(w,2),C=N[0],k=N[1],P=Object(n.useState)(!1),I=Object(o.a)(P,2),F=I[0],T=I[1],E=Object(n.useState)(!1),M=Object(o.a)(E,2),R=M[0],A=M[1],B=Object(n.useRef)(null);return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{playlistStatus:C,setPlaylistStatus:k}),Object(u.jsx)(d,{currentSong:i,isPlaying:b}),Object(u.jsx)(f,{audioRef:B,songs:c,setSongs:a,currentSong:i,setCurrentSong:l,isPlaying:b,setIsPlaying:m,songInfo:y,setSongInfo:S,isRepeat:F,setIsRepeat:T,isShuffle:R,setIsShuffle:A}),Object(u.jsx)(O,{songs:c,currentSong:i,setCurrentSong:l,isPlaying:b,setIsPlaying:m,audioRef:B,playlistStatus:C})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),S()}},[[30,1,2]]]);
//# sourceMappingURL=main.a0dd8386.chunk.js.map