(this["webpackJsonpthunder-type"]=this["webpackJsonpthunder-type"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(7),s=a.n(r),i=(a(15),a(16),a(17),a(0)),l=function(){return Object(i.jsxs)("div",{className:"nav-container",children:[Object(i.jsx)("div",{className:"nav-left",children:Object(i.jsx)("p",{className:"flash-logo-text",children:"Thunder-Type"})}),Object(i.jsx)("div",{className:"nav-right",children:Object(i.jsx)("a",{target:"_blank",className:"nav-aam-link",href:"https://github.com/kaushalendra-pandey",rel:"noreferrer",children:Object(i.jsx)("i",{class:"fab fa-github"})})})]})},d=a(3),o=a(8),j=a.n(o),u=(a(19),function(){var e;return Object(i.jsxs)("div",{className:"landing-container bg-dark",children:[Object(i.jsxs)("div",{"data-aos":"fade-right",className:"landing-left",children:[Object(i.jsx)("h1",{className:"landing-header",children:"Can you type"}),Object(i.jsx)("div",{className:"typewriter-container text-danger",children:Object(i.jsx)(j.a,{options:{strings:["Fast?","Correct?","Quick?"],autoStart:!0,loop:!0}})})]}),Object(i.jsx)("div",{className:"landing-right",children:Object(i.jsx)("img",(e={className:"img-thumbnail","data-aos":"fade-left"},Object(d.a)(e,"className","flash-image"),Object(d.a)(e,"src","http://www.clker.com/cliparts/L/j/U/f/3/O/thunder-bolt-plain-hi.png"),Object(d.a)(e,"alt","flash"),e))})]})}),h=(a(20),function(){return Object(i.jsx)("div",{className:"footer-container",children:Object(i.jsx)("a",{target:"_blank",className:"footer-link",href:"https://www.linkedin.com/in/kaushalendra-pandey-47a971192/",rel:"noreferrer",children:"Contact Me"})})}),m=(a(21),Object(n.createContext)()),b=function(){var e=Object(n.useContext)(m),t=e.initial,a=e.type,c=t;return Object(i.jsxs)("div",{"data-aos":"fade-up",className:"try-again-container",children:[Object(i.jsx)("h1",{children:"Test Results"}),Object(i.jsxs)("div",{className:"result-container",children:[c.wpm<20?Object(i.jsx)("p",{className:"text-danger",children:"You need to Improve!! Keep Practicing.."}):Object(i.jsx)("p",{className:"text-success",children:"You are going Good!! Keep it up.."}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Characters:"})," ",c.characters]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Words:"})," ",c.words]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Speed"})," ",c.wpm," wpm"]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{className:"end-buttons start-again-btn",onClick:function(){return a.reStart()},children:"Re-try"}),Object(i.jsx)("button",{className:"end-buttons share-btn",children:"Share"}),Object(i.jsx)("button",{className:"end-buttons tweet-btn",children:"Tweet"})]})]})},p=(a(22),function(e){var t=e.cardName,a=e.cardValue;return Object(i.jsxs)("div",{className:"details-card-container",children:[Object(i.jsx)("div",{className:"card-name",children:t}),Object(i.jsx)("div",{className:"card-value",children:a})]})}),O=(a(23),a(24),a(25),function(e){var t=e.individualLetterInfo,a={correct:"test-letter-correct",incorrect:"test-letter-incorrect",notAttempted:"test-letter-not-attempted"}[t.status];return Object(i.jsx)("span",{className:"test-letter ".concat(a),children:t.testLetter})}),f=function(){var e=Object(n.useContext)(m),t=e.initial,a=e.type,c=t,r=c.timeRemaining,s=null;function l(){0===r?clearInterval(s):a.updateTimer()}return Object(n.useEffect)((function(){}),[]),Object(i.jsxs)("div",{className:"typing-challenge",children:[Object(i.jsx)("div",{className:"timer-container",children:c.timeStarted?Object(i.jsx)("p",{className:"timer",children:"00:".concat(c.timeRemaining>10?c.timeRemaining:"0".concat(c.timeRemaining))}):Object(i.jsx)("p",{className:"timer-info fs-3",children:"Keep Calm and write.."})}),Object(i.jsxs)("div",{className:"textarea-container",children:[Object(i.jsx)("div",{className:"textarea-left ",children:Object(i.jsx)("div",{className:"textarea test-paragraph",children:c.testInfo.map((function(e,t){return Object(i.jsx)(O,{individualLetterInfo:e},t)}))})}),Object(i.jsx)("div",{className:"textarea-right",children:Object(i.jsx)("textarea",{onChange:function(e){return function(e){var t=e.target.value;c.timeStarted||(a.startTimer(),s=setInterval(l,1e3),setTimeout((function(){return clearInterval(s)}),6e4));var n=t.length,r=t.split(" ").length,i=n-1;i<0?a.manageUnderflow({characters:n,words:r}):i>=c.selectedParagraph.length-1?a.manageOverflow({characters:n,words:r}):a.normalCase({characters:n,words:r,inputValue:t,index:i})}(e)},className:"textarea",placeholder:"write here.."})})]})]})},x=function(){var e=Object(n.useContext)(m).initial;return Object(i.jsxs)("div",{className:"typing-challenge-container",children:[Object(i.jsxs)("div",{className:"details-container",children:[Object(i.jsx)(p,{cardName:"Words",cardValue:e.words}),Object(i.jsx)(p,{cardName:"Characters",cardValue:e.characters}),Object(i.jsx)(p,{cardName:"WPM",cardValue:e.wpm})]}),Object(i.jsx)("div",{className:"typewriter-container",children:Object(i.jsx)(f,{})})]})},g=(a(26),function(){var e=Object(n.useContext)(m).initial.timeRemaining;return Object(i.jsx)("div",{className:"test-container",children:e?Object(i.jsx)("div",{"data-aos":"fade-up",className:"typing-challenge-cont",children:Object(i.jsx)(x,{})}):Object(i.jsx)("div",{className:"try-again-cont",children:Object(i.jsx)(b,{})})})}),v=(a(27),function(){var e=Object(n.useContext)(m),t=e.initial,a=e.type;return Object(n.useEffect)((function(){fetch("http://metaphorpsum.com/paragraphs/1/9").then((function(e){return e.text()})).then((function(e){a.updateParagraph(e),a.setTestInfo(e)}))}),[t.id]),Object(i.jsxs)("div",{className:"challenge-section-container bg-dark",children:[Object(i.jsx)("h1",{"data-aos":"fade-down",className:"challenge-section-header",children:"Take a Speed Test Now!"}),Object(i.jsx)(g,{})]})}),N=a(9),w=a(10),y=a(2),C=function(e,t){switch(t.type){case"update":return console.log(t.payload),Object(y.a)(Object(y.a)({},e),{},{selectedParagraph:t.payload});case"testInfo":var a=t.payload.split("").map((function(e){return{testLetter:e,status:"notAttempted"}}));return Object(y.a)(Object(y.a)({},e),{},{testInfo:a});case"startTimer":return Object(y.a)(Object(y.a)({},e),{},{timeStarted:!0});case"updateTimer":return Object(y.a)(Object(y.a)({},e),{},{timeRemaining:e.timeRemaining>0?e.timeRemaining-1:e.timeRemaining});case"manageUnderflow":var n=[{testLetter:e.testInfo[0].testLetter,status:"notAttempted"}].concat(Object(w.a)(e.testInfo.slice(1)));return Object(y.a)(Object(y.a)({},e),{},{testInfo:n,characters:t.payload.characters,words:t.payload.words});case"manageOverflow":return Object(y.a)(Object(y.a)({},e),{},{characters:t.payload.characters,words:t.payload.words});case"normalCase":var c=t.payload,r=c.index,s=c.inputValue,i=c.words,l=c.characters,d=e.testInfo;r!==e.selectedParagraph.length-1&&(d[r+1].status="notAttempted");var o=s[r]===d[r].testLetter;d[r].status=o?"correct":"incorrect";var j=parseInt(e.words/(60-e.timeRemaining+1)*60);return Object(y.a)(Object(y.a)({},e),{},{testInfo:d,words:i,characters:l,wpm:j});case"reStart":return Object(y.a)(Object(y.a)({},t.payload),{},{id:e.id+1})}},I=function(e){var t={id:0,selectedParagraph:"Hello World!!",words:0,characters:0,wpm:0,timeRemaining:60,timeStarted:!1,testInfo:[]},a=Object(n.useReducer)(C,t),c=Object(N.a)(a,2),r=c[0],s=c[1];return Object(i.jsx)(m.Provider,{value:{initial:r,type:{updateParagraph:function(e){s({type:"update",payload:e})},setTestInfo:function(e){s({type:"testInfo",payload:e})},startTimer:function(){s({type:"startTimer"})},updateTimer:function(){s({type:"updateTimer"})},manageUnderflow:function(e){s({type:"manageUnderflow",payload:e})},normalCase:function(e){s({type:"normalCase",payload:e})},manageOverflow:function(e){s({type:"manageOverflow",payload:e})},reStart:function(){s({type:"reStart",payload:t})}}},children:e.children})};var T=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsx)(u,{}),Object(i.jsx)(I,{children:Object(i.jsx)(v,{})}),Object(i.jsx)(h,{})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root")),k()}],[[28,1,2]]]);
//# sourceMappingURL=main.d979aa7b.chunk.js.map