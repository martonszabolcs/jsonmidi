(this.webpackJsonpjsonmidi=this.webpackJsonpjsonmidi||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),o=n(8),r=n.n(o),a=(n(16),n(11)),d=(n(17),n(9)),s=n(10),l=n(0);n(29),n(30);function u(){var e=Object(i.useState)(""),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{style:{paddingTop:40,flexDirection:"column"},className:"App",children:[Object(l.jsx)("p",{children:"TONE.JS Json"}),Object(l.jsx)("textarea",{placeholder:"MIDI JSON",rows:10,style:{width:"80%"},onChange:function(e){c(e.target.value),console.log(e.target.value)}}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{style:{marginTop:20},onClick:function(){return function(){var e=new s.Midi,t=e.addTrack();JSON.parse(n).tracks[0].notes.forEach((function(e){t.addNote({midi:e.midi,time:e.time,duration:e.duration,velocity:Number(e.velocity)})}));var i=new File([e.toArray()],"midi.mid");Object(d.saveAs)(i,"midi.mid")}()},children:"Download Midi"})})]})}var j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),o(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),j()}},[[32,1,2]]]);
//# sourceMappingURL=main.ccde6a0a.chunk.js.map