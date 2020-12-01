(this["webpackJsonpstarg-games"]=this["webpackJsonpstarg-games"]||[]).push([[0],{17:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),c=s(21),i=s.n(c),r=(s(28),s(29),s(7)),o=s(2),l=(s(30),function(){return Object(n.jsx)("div",{className:"starg_container",children:Object(n.jsx)("div",{className:"starg_logo",children:"STarG"})})}),u=(s(31),function(){return Object(n.jsx)(a.Fragment,{children:Object(n.jsxs)("div",{className:"home_container",children:[Object(n.jsx)("h1",{children:"Welcome to Game"}),Object(n.jsx)("p",{children:"Please press Get Started to select a game"}),Object(n.jsx)(r.b,{to:"/games",className:"btn_start",children:"GET STARTED"})]})})}),h=(s(37),s(38),function(e){return Object(n.jsx)(a.Fragment,{children:Object(n.jsx)(r.b,{to:"".concat(e.back),className:"btn_back",children:Object(n.jsx)("i",{className:"fas fa-arrow-left"})})})}),j=function(){return Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)(h,{back:"/"}),Object(n.jsxs)("nav",{className:"nav",children:[Object(n.jsx)("h2",{children:"Choice Game"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{className:"nav_item",children:Object(n.jsx)(r.b,{to:"/snake",className:"nav_link",children:"Snake"})}),Object(n.jsx)("li",{className:"nav_item",children:Object(n.jsx)(r.b,{to:"/coh",className:"nav_link",children:"Cold Or Hot"})}),Object(n.jsx)("li",{className:"nav_item",children:Object(n.jsx)(r.b,{to:"/speed",className:"nav_link",children:"Speed"})})]})]})]})},d=s(9),b=s(11),m=s(12),O=s(14),f=s(13),v=(s(39),function(e){return Object(n.jsx)("div",{children:e.snakeDots.map((function(e,t){var s={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return Object(n.jsx)("div",{className:"snake_dot",style:s},t)}))})}),p=function(e){var t={left:"".concat(e.dot[0],"%"),top:"".concat(e.dot[1],"%")};return Object(n.jsx)("div",{className:"snake_food",style:t})},x=function(){return[5*Math.floor((95*Math.random()+1)/5),5*Math.floor((95*Math.random()+1)/5)]},k={food:x(),speed:200,direction:"RIGHT",snakeDots:[[0,0],[5,0]]},g=function(e){Object(O.a)(s,e);var t=Object(f.a)(s);function s(){var e;Object(b.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state=k,e.onKeyDown=function(t){switch((t=t||window.event).keyCode){case 38:e.setState({direction:"UP"});break;case 40:e.setState({direction:"DOWN"});break;case 37:e.setState({direction:"LEFT"});break;case 39:e.setState({direction:"RIGHT"})}},e.moveSnake=function(){var t=Object(d.a)(e.state.snakeDots),s=t[t.length-1];switch(e.state.direction){case"RIGHT":s=[s[0]+5,s[1]];break;case"LEFT":s=[s[0]-5,s[1]];break;case"DOWN":s=[s[0],s[1]+5];break;case"UP":s=[s[0],s[1]-5]}t.push(s),t.shift(),e.setState({snakeDots:t})},e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){setInterval(this.moveSnake,this.state.speed),document.onkeydown=this.onKeyDown}},{key:"componentDidUpdate",value:function(){this.chekItOutOfBorders(),this.chekIfCollapsed(),this.chekIfEat()}},{key:"chekIfCollapsed",value:function(){var e=this,t=Object(d.a)(this.state.snakeDots),s=t[t.length-1];t.pop(),t.forEach((function(t){s[0]===t[0]&&s[1]===t[1]&&e.onGameOver()}))}},{key:"chekItOutOfBorders",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1];(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&this.onGameOver()}},{key:"chekIfEat",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1],t=this.state.food;e[0]===t[0]&&e[1]===t[1]&&(this.setState({food:x()}),this.enlargeSnake(),this.increaseSpeed(),this.playAudio())}},{key:"playAudio",value:function(){new Audio("audio/score.mp3").play()}},{key:"enlargeSnake",value:function(){var e=Object(d.a)(this.state.snakeDots);e.unshift([]),this.setState({snakeDots:e})}},{key:"increaseSpeed",value:function(){this.state.speed>10&&this.setState({speed:this.state.speed-10})}},{key:"onGameOver",value:function(){alert("GAME OVER. Your score: ".concat(this.state.snakeDots.length-2)),this.setState(k)}},{key:"up",value:function(e){e=e||window.event,this.setState((function(e){e.direction;return{direction:"UP"}}))}},{key:"down",value:function(e){e=e||window.event,this.setState((function(e){e.direction;return{direction:"DOWN"}}))}},{key:"left",value:function(e){e=e||window.event,this.setState((function(e){e.direction;return{direction:"LEFT"}}))}},{key:"right",value:function(e){e=e||window.event,this.setState((function(e){e.direction;return{direction:"RIGHT"}}))}},{key:"render",value:function(){var e=this,t=this.state.snakeDots.length-2;return Object(n.jsxs)("div",{className:"snake_container",children:[Object(n.jsx)(h,{back:"/games"}),Object(n.jsxs)("div",{className:"score",children:["Score: ",t]}),Object(n.jsxs)("div",{className:"snake_area",children:[Object(n.jsx)(v,{snakeDots:this.state.snakeDots}),Object(n.jsx)(p,{dot:this.state.food})]}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)("div",{className:"arrow_left",id:"left",onTouchStart:function(){return e.left()},children:Object(n.jsx)("i",{className:"fas fa-arrow-left"})}),Object(n.jsx)("div",{className:"arrow_up",id:"up",onTouchStart:function(){return e.up()},children:Object(n.jsx)("i",{className:"fas fa-arrow-up"})}),Object(n.jsx)("div",{className:"arrow_right",id:"right",onTouchStart:function(){return e.right()},children:Object(n.jsx)("i",{className:"fas fa-arrow-right"})}),Object(n.jsx)("div",{className:"arrow_down",id:"down",onTouchStart:function(){return e.down()},children:Object(n.jsx)("i",{className:"fas fa-arrow-down"})})]})]})}}]),s}(a.Component),N=(s(17),function(e){var t=e.returnGuess;return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{className:"coh_form",onSubmit:function(e){e.preventDefault();var s=e.target.elements.guess.value;t(s)},children:[Object(n.jsx)("input",{type:"number",name:"guess",placeholder:"\u0423\u0433\u0430\u0434\u0430\u0439 \u0446\u0438\u0444\u0440\u0443...",required:!0}),Object(n.jsx)("button",{type:"submit",children:"GUESS"})]})})}),S=Math.floor(100*Math.random())+1,w=function(e){var t=e.attempt,s=e.guessList;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"coh_progress",children:["Guess# ",t]}),Object(n.jsx)("ul",{className:"coh_progress_history",children:s})]})},y=function(e){Object(O.a)(s,e);var t=Object(f.a)(s);function s(){var e;Object(b.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={genNum:S,guess:null,allGuesses:[],attempt:0},e}return Object(m.a)(s,[{key:"updateState",value:function(e){this.setState((function(t){return{guess:e,allGuesses:[].concat(Object(d.a)(t.allGuesses),[{guess:e}]),attempt:t.attempt+1}}))}},{key:"toRestart",value:function(){window.location.reload(),this.setState({genNum:S,guess:null,allGuesses:[],attempt:0})}},{key:"render",value:function(){var e=this,t=this.state.allGuesses.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)("span",{children:e.guess})},t)})),s=Math.abs(this.state.guess-this.state.genNum);console.log(s);var a="";return s>=50?a="\u043e\u0447\u0435\u043d\u044c \u0445\u043e\u043b\u043e\u0434\u043d\u043e":s>=20&&s<50?a="\u0445\u043e\u043b\u043e\u0434\u043d\u043e":s>=5&&s<20?a="\u0442\u0435\u043f\u043b\u0435\u0435":s>=1&&s<5?a="\u0433\u0430\u0440\u044f\u0447\u0435":0===s&&(a="\u041f\u043e\u0431\u0435\u0434\u0430"),Object(n.jsxs)("div",{className:"coh_container",children:[Object(n.jsx)(h,{back:"/games"}),Object(n.jsx)("div",{className:"coh_wrapper",children:Object(n.jsxs)("div",{className:"coh_inner",children:[Object(n.jsxs)("div",{className:"coh_title",children:[Object(n.jsx)("span",{className:"coh_span_1",children:"COLD"})," OR ",Object(n.jsx)("span",{className:"coh_span_2",children:"HOT"})]}),Object(n.jsx)("div",{className:"slovo",children:a}),Object(n.jsx)(N,{returnGuess:function(t){return e.updateState(t)}}),Object(n.jsx)(w,{attempt:this.state.attempt,guessList:t}),Object(n.jsx)("div",{className:"res",onClick:this.toRestart.bind(this),children:"RESTART"})]})})]})}}]),s}(a.Component),_=(s(40),function(){return Object(n.jsxs)("div",{className:"speed_container",children:[Object(n.jsx)(h,{back:"/games"}),Object(n.jsx)("h1",{children:"Sorry, this game is in development"})]})});var D=function(){return Object(n.jsx)(r.a,{basename:"/starg",children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(l,{}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{path:"/",exact:!0,component:u}),Object(n.jsx)(o.a,{path:"/games",component:j}),Object(n.jsx)(o.a,{path:"/snake",component:g}),Object(n.jsx)(o.a,{path:"/coh",component:y}),Object(n.jsx)(o.a,{path:"/speed",component:_})]})]})})};i.a.render(Object(n.jsx)(D,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.2083c642.chunk.js.map