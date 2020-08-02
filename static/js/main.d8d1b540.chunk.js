(this.webpackJsonpopat=this.webpackJsonpopat||[]).push([[0],{43:function(e,t,n){e.exports=n(52)},47:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n(0),r=n.n(i),s=n(27),o=n.n(s),c=(n(47),n(28)),l=n(7),u=n(13),d=n(1),m=n(15),p=n(29),f=n(39),h=n(16),v=n(10),g=n(20),y={keybindings:{KeyW:"translateUp",KeyS:"translateDown",KeyA:"translateLeft",KeyD:"translateRight",KeyZ:"translateForward",KeyX:"translateBackward",ArrowDown:"rotateMinusZ",ArrowUp:"rotatePlusZ",ArrowLeft:"rotateMinusY",ArrowRight:"rotatePlusY",Slash:"rotateMinusX",Period:"rotatePlusX",ShiftLeft:"decreaseSpeed"},opacity:.7,translate_speed:5,translate_speed_low:1,rotate_speed:20,rotate_speed_low:5,default_pose:{position:[0,0,50],rotation:[1,0,0,0]}},k=function(){function e(t,n){var i=this;Object(v.a)(this,e),this.ACTIONS=Object.fromEntries(Object.entries(y.keybindings).map((function(e){var t=Object(a.a)(e,2),n=t[0],r=t[1];return[n,i[r]?i[r].bind(i):r]}))),this.model=t,this.keyDownListener=this.handleKeyDown.bind(this),this.keyUpListener=this.handleKeyUp.bind(this),this.executingActions=new Set,this.translate_speed=y.translate_speed,this.rotate_speed=2*y.rotate_speed*Math.PI/180,this.setPose=n}return Object(g.a)(e,[{key:"register",value:function(){document.addEventListener("keydown",this.keyDownListener),document.addEventListener("keyup",this.keyUpListener)}},{key:"deregister",value:function(){document.removeEventListener("keydown",this.keyDownListener),document.removeEventListener("keyup",this.keyUpListener)}},{key:"handleKeyDown",value:function(e){if(!e.repeat)switch(this.ACTIONS[e.code]){case void 0:break;case"decreaseSpeed":this._decreaseSpeed();break;default:this.executingActions.add(this.ACTIONS[e.code])}}},{key:"handleKeyUp",value:function(e){switch(this.ACTIONS[e.code]){case void 0:break;case"decreaseSpeed":this._resetSpeed();break;default:this.executingActions.delete(this.ACTIONS[e.code])}var t=this.model.quaternion,n=t.x,a=t.y,i=t.z,r=t.w;this.setPose({position:this.model.position.toArray(),rotation:[r,n,a,i]})}},{key:"update",value:function(e){var t,n=Object(h.a)(this.executingActions);try{for(n.s();!(t=n.n()).done;){(0,t.value)(e)}}catch(a){n.e(a)}finally{n.f()}}},{key:"_decreaseSpeed",value:function(){this.translate_speed=y.translate_speed_low,this.rotate_speed=2*y.rotate_speed_low*Math.PI/180}},{key:"_resetSpeed",value:function(){this.translate_speed=y.translate_speed,this.rotate_speed=2*y.rotate_speed*Math.PI/180}},{key:"translateUp",value:function(e){this.model.position.y-=this.translate_speed*e}},{key:"translateDown",value:function(e){this.model.position.y+=this.translate_speed*e}},{key:"translateLeft",value:function(e){this.model.position.x-=this.translate_speed*e}},{key:"translateRight",value:function(e){this.model.position.x+=this.translate_speed*e}},{key:"translateForward",value:function(e){this.model.position.z+=this.translate_speed*e}},{key:"translateBackward",value:function(e){this.model.position.z-=this.translate_speed*e}},{key:"rotatePlusZ",value:function(e){this.model.rotateOnAxis(new d.Vector3(0,0,1),this.rotate_speed*e)}},{key:"rotateMinusZ",value:function(e){this.model.rotateOnAxis(new d.Vector3(0,0,1),-this.rotate_speed*e)}},{key:"rotatePlusY",value:function(e){this.model.rotateOnAxis(new d.Vector3(0,1,0),this.rotate_speed*e)}},{key:"rotateMinusY",value:function(e){this.model.rotateOnAxis(new d.Vector3(0,1,0),-this.rotate_speed*e)}},{key:"rotatePlusX",value:function(e){this.model.rotateOnAxis(new d.Vector3(1,0,0),this.rotate_speed*e)}},{key:"rotateMinusX",value:function(e){this.model.rotateOnAxis(new d.Vector3(1,0,0),-this.rotate_speed*e)}}]),e}();function b(e){var t=e.model,n=e.fov,i=e.setPose,s=e.initialPose;console.log("renderer re-render");var o=Object(u.d)(),c=o.camera,m=o.gl,p=o.scene,f=r.a.useMemo((function(){return new k(t,i)}),[t,i]);r.a.useEffect((function(){return f.register(),function(){return f.deregister()}}),[f]),r.a.useEffect((function(){var e,r;if(c.fov=n,c.up=new d.Vector3(0,-1,0),c.position.set(0,0,0),c.lookAt(0,0,100),c.updateProjectionMatrix(),s)r=s;else if(0===t.position.z)r={position:y.default_pose.position.slice(),rotation:y.default_pose.rotation.slice()};else{var o=t.quaternion,u=o.x,m=o.y,p=o.z,f=o.w;r={position:t.position.toArray(),rotation:[f,u,m,p]}}var h=Object(a.a)(r.rotation,4),v=h[0],g=h[1],k=h[2],b=h[3];(e=t.position).set.apply(e,Object(l.a)(r.position)),t.setRotationFromQuaternion(new d.Quaternion(g,k,b,v)),i(r)}));var h,v=r.a.useRef();return Object(u.c)((function(e,t){f.update(t),v.current.render()}),1),[r.a.createElement("primitive",{key:"object",object:t}),r.a.createElement("effectComposer",{key:"composer",ref:v,args:[m]},r.a.createElement("renderPass",{attachArray:"passes",scene:p,camera:c}),r.a.createElement("shaderPass",{attachArray:"passes",args:[(h=y.opacity,{uniforms:{tDiffuse:{value:null},opacity:{value:h}},vertexShader:["varying vec2 vUv;","void main() {","\tvUv = uv;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","\tvec4 texel = texture2D( tDiffuse, vUv );","\tgl_FragColor = opacity * texel;","}"].join("\n")})]}))]}Object(u.b)({ShaderPass:m.a,RenderPass:p.a,EffectComposer:f.a});var w=r.a.memo((function(e){var t=e.model,n=e.fov,a=e.position,i=e.setPose,s=e.initialPose;return console.log("viewer re-render"),r.a.createElement(u.a,{style:Object(c.a)({position:"absolute"},a)},r.a.createElement("pointLight",{position:[0,0,0],intensity:1}),t?r.a.createElement(b,{model:t,fov:n,setPose:i,initialPose:s}):null)})),E=n(40),O=n(54),_=n(34);function j(e){var t=r.a.useRef(),n=e.children,a=e.label,i=Object(E.a)(e,["children","label"]);return[r.a.createElement("input",Object.assign({key:"input",type:"file",ref:t,style:{display:"none"}},i)),r.a.createElement("div",{key:"button",className:"OpenFileButton"},r.a.createElement("div",{className:"OpenFileButton-label"},a),r.a.createElement(O.a,{size:"sm",variant:"light",onClick:function(){return t.current.click()}},n))]}function x(e){var t=e.currentImageIndex,n=e.setCurrentImageIndex,i=e.images,s=e.setImages,o=e.setModel,c=e.setIntrinsics,l=e.currentPose,u=e.setPoses,d=e.poses,m=r.a.useState(""),p=Object(a.a)(m,2),f=p[0],h=p[1],v=r.a.useState(""),g=Object(a.a)(v,2),y=g[0],k=g[1],b=r.a.useMemo((function(){return new _.a}),[]);return r.a.createElement("div",{className:"StatusBar"},l&&l.position&&l.rotation?[r.a.createElement("div",{key:"pos"},"position: (".concat(l.position.map((function(e){return e.toFixed(2)})),")")),r.a.createElement("div",{key:"rot"},"rotation: (".concat(l.rotation.map((function(e){return e.toFixed(2)})),")"))]:null,r.a.createElement("div",null,i.length>0?i[t].name:null),r.a.createElement("div",null,r.a.createElement(j,{label:i.length?"".concat(i.length," images "):null,multiple:!0,accept:"image/*",onChange:function(e){e.target.files.length>0&&(n(0),s(e.target.files))}},"Load images")),r.a.createElement("div",null,r.a.createElement(j,{label:y,accept:".glb",onChange:function(e){e.target.files.length>0&&(k(e.target.files[0].name),function(e,t,n){t.arrayBuffer().then((function(t){e.parse(t,"",(function(e){n(e.scenes[0].children[0])}))}))}(b,e.target.files[0],o))}},"Load model")),r.a.createElement("div",null,r.a.createElement(j,{label:f,accept:".json",onChange:function(e){e.target.files.length>0&&(h(e.target.files[0].name),function(e,t){e.text().then((function(e){return t(JSON.parse(e))}))}(e.target.files[0],c))}},"Load intrinsics")),r.a.createElement("div",null,r.a.createElement(j,{accept:".json",onChange:function(e){e.target.files.length>0&&function(e,t){e.text().then((function(e){return t(JSON.parse(e))}))}(e.target.files[0],u)}},"Load poses")),r.a.createElement("div",null,r.a.createElement(O.a,{size:"sm",variant:"light",onClick:function(){return function(e){if(0!==Object.keys(e).length){var t=document.createElement("a"),n=new Blob([JSON.stringify(e)],{type:"text/plain"});t.href=URL.createObjectURL(n),t.download="poses.json",t.click(),URL.revokeObjectURL(t.href)}}(d)}},"Save poses")))}var S=n(53);function P(e){var t=e.images,n=e.currentImageIndex,a=e.setCurrentImageIndex;return r.a.createElement(S.a,{variant:"flush",className:"SideBar"},Array.from(t).map((function(e,t){return r.a.createElement(S.a.Item,{active:n===t,key:t,onClick:function(){return a(t)}},e.name)})))}function I(e){var t=e.naturalHeight,n=e.naturalWidth,a=e.height,i=e.width,r=Math.min(a/t,i/n),s=t*r,o=n*r;return{height:s,width:o,left:(i-o)/2,top:(a-s)/2}}function L(){console.log("index re-render");var e=r.a.useState([]),t=Object(a.a)(e,2),n=t[0],i=t[1],s=r.a.useState(),o=Object(a.a)(s,2),c=o[0],l=o[1],u=r.a.useState(),d=Object(a.a)(u,2),m=d[0],p=d[1],f=r.a.useState(),h=Object(a.a)(f,2),v=h[0],g=h[1],y=r.a.useState(),k=Object(a.a)(y,2),b=k[0],E=k[1],O=r.a.useState({}),_=Object(a.a)(O,2),j=_[0],S=_[1],L=r.a.useState({}),A=Object(a.a)(L,2),C=A[0],M=A[1],U=r.a.useRef(),N=r.a.useMemo((function(){return n.length>0?URL.createObjectURL(n[v]):null}),[n,v]),D=r.a.useCallback((function(e){0===n.length||e.repeat||("PageDown"===e.code&&g((v+1)%n.length),"PageUp"===e.code&&g((v-1+n.length)%n.length))}),[n,v]);r.a.useEffect((function(){return document.addEventListener("keydown",D),function(){return document.removeEventListener("keydown",D)}}),[D]),r.a.useEffect((function(){window.addEventListener("resize",(function(){U.current&&E(I(U.current))}))}),[]);var R=r.a.useCallback((function(e){j[n[v].name]?Object.assign(j[n[v].name],e):j[n[v].name]=e,M(e)}),[j,n,v]);return r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(x,{currentImageIndex:v,setCurrentImageIndex:g,images:n,setImages:i,model:m,setModel:p,setIntrinsics:l,currentPose:C,setPoses:S,poses:j}),r.a.createElement("div",{className:"body-wrapper"},r.a.createElement("div",{className:"Viewer-wrapper"},n.length>0?[r.a.createElement("img",{className:"background-image",alt:"",key:"img",ref:U,src:N,onLoad:function(){E(I(U.current))}}),r.a.createElement(w,Object.assign({key:"viewer"},{images:n,fov:c?c[n[v].name].fov_y:40,model:m,position:b,initialPose:j[n[v].name],setPose:R}))]:null),r.a.createElement(P,{images:n,currentImageIndex:v,setCurrentImageIndex:g})))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d8d1b540.chunk.js.map