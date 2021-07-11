(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{20:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(15),r=n.n(s),i=n(7),o=(n(20),n(5)),l=n(4),u=n(0),p=function(e){var t=e.playlistStatus,n=e.setPlaylistStatus;return Object(u.jsxs)("nav",{children:[Object(u.jsx)("h1",{children:"Frequency"}),Object(u.jsx)("button",{onClick:function(){n(!t)},children:Object(u.jsx)(o.a,{icon:l.c,size:"2x"})})]})},d=function(e){var t=e.currentSong,n=e.isPlaying;return Object(u.jsxs)("div",{className:"song-container",children:[Object(u.jsxs)("div",{className:"cover-wrap",children:[Object(u.jsx)("img",{src:t.cover,alt:t.name,style:n?{animation:"circle 20s linear infinite"}:{}}),Object(u.jsx)("div",{className:"cover-core"})]}),Object(u.jsxs)("div",{className:"song-info",children:[Object(u.jsx)("h2",{className:"song-name",children:t.name}),Object(u.jsx)("h3",{className:"song-artist",children:t.artist})]})]})},j=n(6),h=n.n(j),b=n(10),m=n(9),g=function(e){var t=e.songs,n=e.currentSong,c=e.setCurrentSong,a=e.isPlaying,s=e.setIsPlaying,r=e.songInfo,i=e.setSongInfo,p=e.audioRef,d=function(e){var t=e.target.currentTime,n=e.target.duration;i(Object(m.a)(Object(m.a)({},r),{},{duration:n,currentTime:t}))},j=function(){var e=Object(b.a)(h.a.mark((function e(r){var i,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.indexOf(n),"forward"===r?o=t[(i+1)%t.length]:"backward"===r&&(o=(i-1)%t.length===-1?t[t.length-1]:t[(i-1)%t.length]),e.next=4,c(o);case 4:a||s(!0),p.current.play();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)};return Object(u.jsxs)("div",{className:"player-container",children:[Object(u.jsxs)("div",{className:"time-control",children:[Object(u.jsx)("p",{children:g(r.currentTime)}),Object(u.jsx)("input",{min:0,max:r.duration||0,value:r.currentTime,onChange:function(e){p.current.currentTime=e.target.value,i(Object(m.a)(Object(m.a)({},r),{},{currentTime:e.target.value}))},type:"range"}),Object(u.jsx)("p",{children:r.duration?g(r.duration):"0:00"})]}),Object(u.jsxs)("div",{className:"play-control",children:[Object(u.jsx)(o.a,{onClick:function(){return j("backward")},className:"backward",size:"2x",icon:l.a}),Object(u.jsx)(o.a,{onClick:function(){a?p.current.pause():p.current.play(),s(!a)},className:"play",size:"3x",icon:a?l.d:l.e}),Object(u.jsx)(o.a,{onClick:function(){return j("forward")},className:"forward",size:"2x",icon:l.b})]}),Object(u.jsx)("audio",{onTimeUpdate:d,onLoadedMetadata:d,ref:p,src:n.audio,onEnded:function(){return j("forward")}})]})},f=function(e){var t=e.song,n=e.currentSong,c=e.isPlaying,a=e.setIsPlaying,s=e.setCurrentSong,r=e.audioRef,i=function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t);case 2:c||a(!0),r.current.play();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{onClick:i,className:"playlist-song-container ".concat(t.id===n.id?"selected-song":""),children:[Object(u.jsx)("img",{src:t.cover,alt:t.name}),Object(u.jsxs)("div",{className:"playlist-song-info",children:[Object(u.jsx)("h3",{className:"playlist-song-name",children:t.name}),Object(u.jsx)("h4",{className:"playlist-song-artist",children:t.artist})]})]})},O=function(e){var t=e.songs,n=e.currentSong,c=e.setCurrentSong,a=e.isPlaying,s=e.setIsPlaying,r=e.audioRef,i=e.playlistStatus;return Object(u.jsxs)("div",{className:"playlist-container ".concat(i?"active-playlist":""),children:[Object(u.jsx)("h2",{children:"Playlist"}),t.map((function(e){return Object(u.jsx)(f,{song:e,currentSong:n,setCurrentSong:c,isPlaying:a,setIsPlaying:s,audioRef:r},e.id)}))]})},v=n(3),x=function(){return[{name:"Dreamstate",cover:"https://chillhop.com/wp-content/uploads/2021/05/8ef1fa972003495d1ecfba6292116174e9c5d940-1024x1024.jpg",artist:"Toonorth",audio:"https://mp3.chillhop.com/serve.php/?mp3=17947",color:["#A1ABF9","#2E435F"],id:Object(v.v4)()},{name:"Bliss",cover:"https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",artist:"Misha, Jussi Halme",audio:"https://mp3.chillhop.com/serve.php/?mp3=9248",color:["#F3A19A","#A89FB2"],id:Object(v.v4)()},{name:"On The Moon",cover:"https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",artist:"SwuM",audio:"https://mp3.chillhop.com/serve.php/?mp3=15237",color:["#263330","#964F2D"],id:Object(v.v4)()},{name:"Vintage",cover:"https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",artist:"Evil Needle",audio:"https://mp3.chillhop.com/serve.php/?mp3=17088",color:["#EBC77E","#ED544E"],id:Object(v.v4)()},{name:"Lost Soul",cover:"https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",artist:"C Y G N",audio:"https://mp3.chillhop.com/serve.php/?mp3=14989",color:["#E199DA","#89ACE8"],id:Object(v.v4)()},{name:"Ambleside",cover:"https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",artist:"Aarigod",audio:"https://mp3.chillhop.com/serve.php/?mp3=12999",color:["#B8CE7B","#495C2E"],id:Object(v.v4)()},{name:"1999",cover:"https://chillhop.com/wp-content/uploads/2020/05/299ed90790252c3b19e0b5ca350d1cf3a9c30436-1024x1024.jpg",artist:"sadtoi",audio:"https://mp3.chillhop.com/serve.php/?mp3=9454",color:["#C26F40","#869785"],id:Object(v.v4)()},{name:"Hibiscus",cover:"https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-1024x1024.jpg",artist:"G Mills, Felty",audio:"https://mp3.chillhop.com/serve.php/?mp3=8971",color:["#C26F40","#869785"],id:Object(v.v4)()}]};var y=function(){var e=Object(c.useState)(x()),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(n[0]),r=Object(i.a)(s,2),o=r[0],l=r[1],j=Object(c.useState)(!1),h=Object(i.a)(j,2),b=h[0],m=h[1],f=Object(c.useState)({duration:0,currentTime:0}),v=Object(i.a)(f,2),y=v[0],S=v[1],w=Object(c.useState)(!1),C=Object(i.a)(w,2),N=C[0],P=C[1],F=Object(c.useRef)(null);return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{playlistStatus:N,setPlaylistStatus:P}),Object(u.jsx)(d,{currentSong:o,isPlaying:b}),Object(u.jsx)(g,{audioRef:F,songs:n,setSongs:a,currentSong:o,setCurrentSong:l,isPlaying:b,setIsPlaying:m,songInfo:y,setSongInfo:S}),Object(u.jsx)(O,{songs:n,currentSong:o,setCurrentSong:l,isPlaying:b,setIsPlaying:m,audioRef:F,playlistStatus:N})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),S()}},[[30,1,2]]]);
//# sourceMappingURL=main.6f9ef522.chunk.js.map