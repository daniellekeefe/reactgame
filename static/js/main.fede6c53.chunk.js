(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Back To the Future","image":"https://img01.mgo-images.com/image/thumbnail/v2/content/1MV7df2fa6b9701b20d36d8079aaf32e950.jpeg","quote":"Great Scott!","year":"1985"},{"id":2,"name":"The Breakfast Club","image":"https://resizing.flixster.com/iI4xkmufQkFod2UlVBMbidvWNRk=/206x305/v1.bTsxMzAzNjM3ODtqOzE4MzMwOzEyMDA7NDUwOzYwMA","quote":"Can you explain the ruckus?","year":"1985"},{"id":3,"name":"Top Gun","image":"https://images-na.ssl-images-amazon.com/images/I/710nsn-AYoL._SL1140_.jpg","quote":"Sorry, Goose, but it\'s time to buzz the tower.","year":"1986"},{"id":4,"name":"Dirty Dancing","image":"https://www.gstatic.com/tv/thumb/v22vodart/10022/p10022_v_v8_ah.jpg","quote":"No Body Puts Baby in the corner","year":"1987"},{"id":5,"name":"The Karate Kid","image":"https://www.gstatic.com/tv/thumb/v22vodart/6526/p6526_v_v8_ab.jpg","quote":"Sweep the leg Johnny","year":"1984"},{"id":6,"name":"E.T","image":"https://images-na.ssl-images-amazon.com/images/I/919TdYMd3NL._SL1500_.jpg","quote":"Phone Home","year":"1982"},{"id":7,"name":"The Goonies","image":"https://www.gstatic.com/tv/thumb/v22vodart/9070/p9070_v_v8_ai.jpg","quote":"Goonies never say die!","year":"1985"},{"id":8,"name":"Youngblood","image":"https://i.pinimg.com/originals/f5/a8/c9/f5a8c9bdffd65a96cffa367a12b1e6da.jpg","quote":"The only thing better than a glass of beer, is tea with Miss McGill!","year":"1986"},{"id":9,"name":"Caddyshack","image":"https://www.gstatic.com/tv/thumb/v22vodart/45/p45_v_v8_ag.jpg","quote":"Don\'t sell yourself short Judge, you\'re a tremendous slouch.","year":"1980"},{"id":10,"name":"Field of Dreams","image":"https://www.gstatic.com/tv/thumb/v22vodart/11582/p11582_v_v8_ad.jpg","quote":"If you build it they will come.","year":"1989"},{"id":11,"name":"Major League","image":"https://www.gstatic.com/tv/thumb/v22vodart/11561/p11561_v_v8_af.jpg","quote":"Have to wake up bats","year":"1989"},{"id":12,"name":"The Terminator","image":"https://townsquare.media/site/295/files/2019/10/Terminator-Orion.jpg?w=980&q=75","quote":"I\'ll be back.","year":"1984"}]')},,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),i=a.n(o),s=a(2),c=a(3),l=a(5),m=a(4),u=a(6);a(15);var h=function(e){return r.a.createElement("div",{className:"card img-container hover",onClick:function(){return e.handler(e.id)}},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image})),r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Name:")," ",e.name),r.a.createElement("li",null,r.a.createElement("strong",null,"Quote:")," ",e.quote),r.a.createElement("li",null,r.a.createElement("strong",null,"Year:")," ",e.year))))};a(16);var d=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};a(17);var g=function(e){return r.a.createElement("h1",{className:"title"},e.children)},p=a(1),v=(a(18),function(e){return r.a.createElement("div",{className:"gameScore"},r.a.createElement("h3",{className:"score"},"Your Score ",e.total),r.a.createElement("h3",{className:"status"},e.status))}),f=a(9),y=a.n(f),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){navigator.geolocation.getCurrentPosition((function(e){return e}))}},{key:"render",value:function(){return r.a.createElement("h1",null,"Hi its ",y()().format("hh:mm"))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={movies:p,clickedMoviesIds:[],score:0,goal:8,status:""},a.shuffleScoreCard=function(e){var t=a.state.clickedMoviesIds;if(t.includes(e))a.setState({clickedMoviesIds:[],score:0,status:"Game Over! You lost. Click to play again!"});else{if(t.push(e),8===t.length)return a.setState({score:8,status:"You Won! Great Job, Smartie! Click to play again!",clickedMoviesIds:[]}),void console.log("You Win");a.setState({movies:p,clickedMoviesIds:t,score:t.length,status:" "});for(var n=p.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),o=[p[r],p[n]];p[n]=o[0],p[r]=o[1]}}},a.handleClick=function(e){},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-title"},"Clicky-Game"),r.a.createElement("p",{className:"App-intro"},"Try not to click the same movie twice!"),r.a.createElement(b,null)),r.a.createElement(v,{total:this.state.score,goal:8,status:this.state.status}),r.a.createElement(d,null,r.a.createElement(g,null,"Movies List"),this.state.movies.map((function(t){return r.a.createElement(h,{handler:e.shuffleScoreCard,id:t.id,key:t.id,name:t.name,image:t.image,quote:t.quote,year:t.year})}))),r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement("a",{href:"",target:"_blank",rel:"noopener noreferrer"}," here"),".")))}}]),t}(n.Component);a(20);i.a.render(r.a.createElement(w,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.fede6c53.chunk.js.map