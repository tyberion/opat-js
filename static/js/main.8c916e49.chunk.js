(this.webpackJsonpopat=this.webpackJsonpopat||[]).push([[0],{50:function(e,t,n){e.exports=n.p+"static/media/image_000.1d777ccf.png"},51:function(e,t,n){e.exports=n.p+"static/media/image_240.097c432e.png"},52:function(e,t,n){e.exports=n.p+"static/media/image_480.90688ae9.png"},53:function(e,t,n){e.exports=n.p+"static/media/cygnus.7bb66b61.glb"},54:function(e){e.exports=JSON.parse('{"image_000.png":{"fov_y":19.8},"image_240.png":{"fov_y":19.8},"image_480.png":{"fov_y":19.8}}')},62:function(e,t,n){e.exports=n(73)},66:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(0),o=n.n(r),i=n(16),s=n.n(i),c=(n(66),n(18)),l=n(9),u=n(22),d=n(1),f=(new d.Quaternion).setFromRotationMatrix((new d.Matrix4).makeRotationX(Math.PI/2)),m=(new d.Quaternion).setFromRotationMatrix((new d.Matrix4).makeRotationX(-Math.PI/2));function p(e){var t=e.clone().multiply(m),n=t.x,a=t.y,r=t.z;return[t.w,n,a,r]}var h=n(24),v=n(42),g=n(60),y=n(25),b=n(17),w=n(30),E=function(){function e(t,n,r){var o=this;Object(b.a)(this,e),this.config=r,this.actions=Object.fromEntries(Object.entries(r.keybindings).map((function(e){var t=Object(a.a)(e,2),n=t[0];return[t[1],o[n]?o[n].bind(o):n]}))),this.model=t,this.keyDownListener=this.handleKeyDown.bind(this),this.keyUpListener=this.handleKeyUp.bind(this),this.executingActions=new Set,this.translate_speed=r.translate_speed,this.rotate_speed=2*r.rotate_speed*Math.PI/180,this.setPose=n}return Object(w.a)(e,[{key:"register",value:function(){document.addEventListener("keydown",this.keyDownListener),document.addEventListener("keyup",this.keyUpListener)}},{key:"deregister",value:function(){document.removeEventListener("keydown",this.keyDownListener),document.removeEventListener("keyup",this.keyUpListener)}},{key:"handleKeyDown",value:function(e){if(!e.repeat)switch(this.actions[e.code]){case void 0:break;case"decreaseSpeed":this._decreaseSpeed();break;case"savePose":e.preventDefault();break;default:this.executingActions.add(this.actions[e.code])}}},{key:"handleKeyUp",value:function(e){switch(this.actions[e.code]){case void 0:break;case"decreaseSpeed":this._resetSpeed();break;case"savePose":e.preventDefault(),this._recordPose(!0);break;default:this.executingActions.delete(this.actions[e.code]),this._recordPose(!1)}}},{key:"update",value:function(e){var t,n=Object(y.a)(this.executingActions);try{for(n.s();!(t=n.n()).done;){(0,t.value)(e)}}catch(a){n.e(a)}finally{n.f()}}},{key:"_recordPose",value:function(e){this.setPose({position:this.model.position.toArray(),rotation:p(this.model.quaternion)},e)}},{key:"_decreaseSpeed",value:function(){this.translate_speed=this.config.translate_speed_low,this.rotate_speed=2*this.config.rotate_speed_low*Math.PI/180}},{key:"_resetSpeed",value:function(){this.translate_speed=this.config.translate_speed,this.rotate_speed=2*this.config.rotate_speed*Math.PI/180}},{key:"translateUp",value:function(e){this.model.position.y-=this.translate_speed*e}},{key:"translateDown",value:function(e){this.model.position.y+=this.translate_speed*e}},{key:"translateLeft",value:function(e){this.model.position.x-=this.translate_speed*e}},{key:"translateRight",value:function(e){this.model.position.x+=this.translate_speed*e}},{key:"translateForward",value:function(e){this.model.position.z+=this.translate_speed*e}},{key:"translateBackward",value:function(e){this.model.position.z-=this.translate_speed*e}},{key:"rotatePlusZ",value:function(e){this.model.rotateOnAxis(new d.Vector3(0,0,1),this.rotate_speed*e)}},{key:"rotateMinusZ",value:function(e){this.model.rotateOnAxis(new d.Vector3(0,0,1),-this.rotate_speed*e)}},{key:"rotatePlusY",value:function(e){this.model.rotateOnAxis(new d.Vector3(0,1,0),this.rotate_speed*e)}},{key:"rotateMinusY",value:function(e){this.model.rotateOnAxis(new d.Vector3(0,1,0),-this.rotate_speed*e)}},{key:"rotatePlusX",value:function(e){this.model.rotateOnAxis(new d.Vector3(1,0,0),this.rotate_speed*e)}},{key:"rotateMinusX",value:function(e){this.model.rotateOnAxis(new d.Vector3(1,0,0),-this.rotate_speed*e)}}]),e}();function k(e){var t,n=e.model,r=e.fov,i=e.setPose,s=e.initialPose,c=e.config;console.log("renderer re-render");var m,h=Object(u.d)(),v=h.camera,g=h.gl,y=h.scene,b=o.a.useMemo((function(){return new E(n,i,c)}),[n,i,c]);o.a.useLayoutEffect((function(){return b.register(),function(){return b.deregister()}}),[b]),v.fov=r,v.up=new d.Vector3(0,-1,0),v.position.set(0,0,0),v.lookAt(0,0,100),v.far=1e5,v.updateProjectionMatrix(),m=s||(0===n.position.z?{position:c.default_pose.position.slice(),rotation:c.default_pose.rotation.slice()}:{position:n.position.toArray(),rotation:p(n.quaternion)}),(t=n.position).set.apply(t,Object(l.a)(m.position)),n.setRotationFromQuaternion(function(e){var t=Object(a.a)(e,4),n=t[0],r=t[1],o=t[2],i=t[3];return new d.Quaternion(r,o,i,n).multiply(f)}(m.rotation)),i(m,!1);var w,k=o.a.useRef();return Object(u.c)((function(e,t){b.update(t),k.current.render()}),1),[o.a.createElement("primitive",{key:"object",object:n}),o.a.createElement("effectComposer",{key:"composer",ref:k,args:[g]},o.a.createElement("renderPass",{attachArray:"passes",scene:y,camera:v}),o.a.createElement("shaderPass",{attachArray:"passes",args:[(w=c.opacity,{uniforms:{tDiffuse:{value:null},opacity:{value:w}},vertexShader:["varying vec2 vUv;","void main() {","\tvUv = uv;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","\tvec4 texel = texture2D( tDiffuse, vUv );","\tgl_FragColor = opacity * texel;","}"].join("\n")})]}))]}Object(u.b)({ShaderPass:h.a,RenderPass:v.a,EffectComposer:g.a});var _=o.a.memo((function(e){var t=e.model,n=e.fov,a=e.position,r=e.setPose,i=e.initialPose,s=e.config;return console.log("viewer re-render"),o.a.createElement(u.a,{style:Object(c.a)({position:"absolute"},a)},o.a.createElement("pointLight",{position:[0,0,0],intensity:1}),t?o.a.createElement(k,{model:t,fov:n,setPose:r,initialPose:i,config:s}):null)})),O=n(61),j=n(79),x=n(33),P=n(47);function S(e){var t=o.a.useRef(),n=e.children,a=e.label,r=e.disabled,i=e.onChoose,s=Object(O.a)(e,["children","label","disabled","onChoose"]);return[o.a.createElement("input",Object.assign({key:"input",type:"file",ref:t,style:{display:"none"},onChange:function(e){i(Object(l.a)(e.target.files)),t.current.value=""}},s)),o.a.createElement("div",{key:"button",className:"OpenFileButton"},o.a.createElement("div",{className:"OpenFileButton-label"},a),o.a.createElement(j.a,{size:"sm",variant:"light",disabled:void 0!==r&&r,onClick:function(){return t.current.click()}},n))]}function L(e){var t=e.setCurrentImageIndex,n=e.currentImageIndex,r=e.images,i=e.fov,s=e.setImages,c=e.model,l=e.setModel,u=e.setIntrinsics,f=e.currentPose,m=e.setPoses,p=e.poses,h=o.a.useState(""),v=Object(a.a)(h,2),g=v[0],y=v[1],b=o.a.useState(""),w=Object(a.a)(b,2),E=w[0],k=w[1],_=o.a.useState(null),O=Object(a.a)(_,2),L=O[0],I=O[1],C=o.a.useMemo((function(){return new x.a}),[]),M=o.a.useMemo((function(){if(f&&f.rotation){var e=Object(a.a)(f.rotation,4),t=e[0],n=e[1],r=e[2],o=e[3],i=(new d.Euler).setFromQuaternion(new d.Quaternion(n,r,o,t),"ZYX");return[i.x,i.y,i.z]}}),[f]),A=o.a.useMemo((function(){return!!(f&&f.position&&M)&&P(f,p[r[n].name])}),[p,f,n,r,M]);return o.a.createElement("div",{className:"StatusBar"},f&&f.position&&M&&!L?o.a.createElement("div",{className:"pose ".concat(A?"saved":"")},o.a.createElement("div",null,"position: (".concat(f.position.map((function(e){return e.toFixed(2)})),")")),o.a.createElement("div",null,"rotation: (".concat(M.map((function(e){return(180*e/Math.PI).toFixed(2)})),")"))):null,L?o.a.createElement("div",{className:"error"},L):null,o.a.createElement("div",null,i?"fov: (".concat(i.x.toFixed(2),", ").concat(i.y.toFixed(2),")"):null),o.a.createElement("div",null,o.a.createElement(S,{label:r.length?"".concat(r.length," images "):null,multiple:!0,accept:"image/*",onChoose:function(e){e.length>0&&(t(0),s(e),u(void 0),m({}),I(null))}},"Load images")),o.a.createElement("div",null,o.a.createElement(S,{label:E,accept:".glb",onChoose:function(e){e.length>0&&(k(e[0].name),function(e,t,n,a){t.arrayBuffer().then((function(t){try{e.parse(t,"",(function(e){n(e.scenes[0].children[0]),a(null)}))}catch(r){a("Error loading model. Please try again.")}}))}(C,e[0],l,I))}},"Load model")),o.a.createElement("div",null,o.a.createElement(S,{label:g,accept:".json",disabled:!(c&&r),onChoose:function(e){e.length>0&&function(e,t,n,a,r){e.text().then((function(o){var i;try{i=JSON.parse(o)}catch(c){return void n("Error parsing intrinsics file. Please try again.")}var s=new Set(Object.keys(i));Array.from(r).every((function(e){return s.has(e.name)}))?Object.values(i).every((function(e){return"number"===typeof e.fov_y}))?(t(i),a(e.name),n(null)):n("Intrinsics file has incorrect format."):n("Missing entry in intrinsics file for image.")}))}(e[0],u,I,y,r)}},"Load intrinsics")),o.a.createElement("div",null,o.a.createElement(S,{accept:".json",disabled:!(c&&r),onChoose:function(e){e.length>0&&function(e,t,n,a){e.text().then((function(e){var a;try{a=JSON.parse(e)}catch(r){n("Error parsing poses file. Please try again.")}Object.values(a).every((function(e){return Array.isArray(e.position)&&Array.isArray(e.rotation)&&3===e.position.length&&4===e.rotation.length&&e.position.concat(e.rotation).every((function(e){return"number"===typeof e}))}))?(t(a),n(null)):n("Poses file has incorrect format.")}))}(e[0],m,I)}},"Load poses")),o.a.createElement("div",null,o.a.createElement(j.a,{size:"sm",variant:"light",disabled:0===Object.keys(p).length,onClick:function(){return function(e){if(0!==Object.keys(e).length){var t=document.createElement("a"),n=new Blob([JSON.stringify(e)],{type:"text/plain"});t.href=URL.createObjectURL(n),t.download="poses.json",t.click(),URL.revokeObjectURL(t.href)}}(p)}},"Download poses")))}var I=n(78);var C=o.a.memo((function(e){var t=e.images,n=e.currentImageIndex,a=e.setCurrentImageIndex;return o.a.createElement(I.a,{variant:"flush",className:"SideBar"},Array.from(t).map((function(e,t){return o.a.createElement(I.a.Item,{active:n===t,key:t,onClick:function(){return a(t)}},e.name)})))})),M=n(50),A=n.n(M),R=n(51),U=n.n(R),D=n(52),N=n.n(D),F=n(53),B=n.n(F),K=n(54),z=["image_000.png","image_240.png","image_480.png"];var V=n(5),X=n(77),J=["opacity","translate_speed","translate_speed_low","rotate_speed","rotate_speed_low"];function Q(e){var t=e.subConfig,n=e.setSubConfig,a=e.configKey,r=o.a.useRef();return o.a.createElement(I.a.Item,null,a,":"," ",o.a.createElement("input",{type:"number",step:.01,min:0,defaultValue:t[a],ref:r,onChange:function(){return n(Object(c.a)(Object(c.a)({},t),{},Object(V.a)({},a,parseFloat(r.current.value))))}}))}function Z(e){var t=e.isSettingsShown,n=e.setIsSettingsShown,r=e.config,i=e.setConfig,s=o.a.useState(Object.fromEntries(J.map((function(e){return[e,r[e]]})))),l=Object(a.a)(s,2),u=l[0],d=l[1];return o.a.createElement(X.a,{show:t,onHide:function(){return n(!1)}},o.a.createElement(X.a.Header,{closeButton:!0},o.a.createElement(X.a.Title,null,"Settings")),o.a.createElement(X.a.Body,null,o.a.createElement(I.a,null,J.map((function(e){return o.a.createElement(Q,{subConfig:u,setSubConfig:d,configKey:e,key:e})})))),o.a.createElement(X.a.Footer,null,o.a.createElement(j.a,{variant:"primary",onClick:function(){i(Object(c.a)(Object(c.a)({},r),u)),n(!1)}},"Save Changes")))}var Y={keybindings:{translateUp:"KeyW",translateDown:"KeyS",translateLeft:"KeyA",translateRight:"KeyD",translateForward:"KeyZ",translateBackward:"KeyX",rotateMinusZ:"ArrowDown",rotatePlusZ:"ArrowUp",rotateMinusY:"ArrowLeft",rotatePlusY:"ArrowRight",rotateMinusX:"Slash",rotatePlusX:"Period",decreaseSpeed:"ShiftLeft",savePose:"Enter"},opacity:.7,translate_speed:5,translate_speed_low:.5,rotate_speed:20,rotate_speed_low:2,default_pose:{position:[0,0,50],rotation:[1,0,0,0]}},H=n(76);function q(e){var t=e.naturalHeight,n=e.naturalWidth,a=e.height,r=e.width,o=Math.min(a/t,r/n),i=t*o,s=n*o;return{height:i,width:s,left:(r-s)/2,top:(a-i)/2}}function W(){console.log("index re-render");var e=o.a.useState([]),t=Object(a.a)(e,2),n=t[0],r=t[1],i=o.a.useState(),s=Object(a.a)(i,2),c=s[0],l=s[1],u=o.a.useState(),d=Object(a.a)(u,2),f=d[0],m=d[1],p=o.a.useState(),h=Object(a.a)(p,2),v=h[0],g=h[1],y=o.a.useState({}),b=Object(a.a)(y,2),w=b[0],E=b[1],k=o.a.useState(),O=Object(a.a)(k,2),j=O[0],P=O[1],S=o.a.useState(0),I=Object(a.a)(S,2),M=I[0],R=I[1],D=o.a.useState(!1),F=Object(a.a)(D,2),V=F[0],X=F[1],J=o.a.useState(Y),Q=Object(a.a)(J,2),W=Q[0],T=Q[1];o.a.useEffect((function(){return function(e,t,n){var r=Promise.all([A.a,U.a,N.a].map((function(e,t){return window.fetch(e).then((function(e){return e.blob()})).then((function(e){return e.name=z[t],e}))}))),o=new x.a,i=window.fetch(B.a).then((function(e){return e.arrayBuffer()})).then((function(e){return new Promise((function(t){return o.parse(e,"",(function(e){return t(e.scenes[0].children[0])}))}))}));Promise.all([r,i]).then((function(r){var o=Object(a.a)(r,2),i=o[0],s=o[1];e(i),n(s),t(K)}))}(r,l,m)}),[]);var G=o.a.useRef(),$=o.a.useRef(),ee=o.a.useMemo((function(){return $.current&&URL.revokeObjectURL($.current),$.current=n.length>0?URL.createObjectURL(n[M]):void 0,$.current}),[n,M]),te=o.a.useCallback((function(e){if(!(0===n.length||e.repeat||"PageDown"!==e.code&&"PageUp"!==e.code)){e.preventDefault();var t="PageDown"===e.code?(M+1)%n.length:(M-1+n.length)%n.length;R(t)}}),[n,M]);o.a.useEffect((function(){return document.addEventListener("keydown",te),function(){return document.removeEventListener("keydown",te)}}),[te]);var ne=o.a.useCallback((function(){G.current&&g(q(G.current))}),[]);o.a.useEffect((function(){return window.addEventListener("resize",ne),function(){return window.removeEventListener("resize",ne)}}),[ne]);var ae=o.a.useCallback((function(e,t){P(e),0!==n.length&&t&&(w[n[M].name]?Object.assign(w[n[M].name],e):w[n[M].name]=e,R((M+1)%n.length))}),[w,n,M]),re=c&&n.length>0?c[n[M].name].fov_y:40;return o.a.createElement("div",{className:"main-wrapper"},o.a.createElement(L,{fov:v?{y:re,x:re*v.width/v.height}:void 0,setCurrentImageIndex:R,images:n,setImages:r,model:f,setModel:m,setIntrinsics:l,currentPose:j,setPoses:E,poses:w,currentImageIndex:M}),o.a.createElement("div",{className:"body-wrapper"},o.a.createElement("div",{className:"Viewer-wrapper"},ee?o.a.createElement("img",{className:"background-image",alt:"",key:"img",ref:G,src:ee,onLoad:function(){g(q(G.current))}}):o.a.createElement("div",{className:"loading"},"Loading sample data..."),o.a.createElement(_,Object.assign({key:"viewer"},{fov:re,model:f,position:v,initialPose:n.length>0?w[n[M].name]:void 0,setPose:ae,config:W})),o.a.createElement(H.a,{size:24,className:"settings-gear",onClick:function(){return X(!0)}})),o.a.createElement(C,{images:n,currentImageIndex:M,setCurrentImageIndex:R})),o.a.createElement(Z,{isSettingsShown:V,setIsSettingsShown:X,config:W,setConfig:T}))}s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(W,null)),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.8c916e49.chunk.js.map