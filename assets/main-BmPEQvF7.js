import{U as Vn,W as ko,d as Vr,A as hm,L as ju,b as zo,E as um,a as Ic,S as dm,e as fm,P as Dc,H as Bo,K as Uc,F as Zu}from"./content-DhPX4BgE.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nu="170",pm=0,Ku=1,mm=2,yp=1,Mp=2,Ri=3,gi=0,fn=1,me=2,fi=0,Ts=1,ei=2,Ju=3,Qu=4,wp=5,ys=100,gm=101,vm=102,xm=103,_m=104,Sp=200,fc=201,ym=202,Mm=203,ql=204,$l=205,wm=206,Sm=207,bm=208,Em=209,Tm=210,Am=211,Cm=212,Rm=213,Pm=214,Yl=0,jl=1,Zl=2,yo=3,Kl=4,Jl=5,Ql=6,th=7,bp=0,Lm=1,Im=2,ns=0,Ep=1,Tp=2,Ap=3,iu=4,Dm=5,Cp=6,Rp=7,Pp=300,Mo=301,wo=302,eh=303,nh=304,pc=306,Fi=1e3,bs=1001,ih=1002,Pn=1003,Um=1004,Wr=1005,hi=1006,Nc=1007,Es=1008,Oi=1009,Lp=1010,Ip=1011,Mr=1012,su=1013,Cs=1014,ui=1015,pi=1016,ou=1017,ru=1018,So=1020,Dp=35902,Up=1021,Np=1022,Qn=1023,Fp=1024,Op=1025,po=1026,bo=1027,au=1028,cu=1029,kp=1030,lu=1031,hu=1033,Ba=33776,Ha=33777,Ga=33778,Va=33779,sh=35840,oh=35841,rh=35842,ah=35843,ch=36196,lh=37492,hh=37496,uh=37808,dh=37809,fh=37810,ph=37811,mh=37812,gh=37813,vh=37814,xh=37815,_h=37816,yh=37817,Mh=37818,wh=37819,Sh=37820,bh=37821,Wa=36492,Eh=36494,Th=36495,zp=36283,Ah=36284,Ch=36285,Rh=36286,Nm=3200,Fm=3201,Bp=0,Om=1,Ji="",ie="srgb",Io="srgb-linear",mc="linear",_e="srgb",Ns=7680,td=519,km=512,zm=513,Bm=514,Hp=515,Hm=516,Gm=517,Vm=518,Wm=519,Ph=35044,ed="300 es",Li=2e3,Ja=2001;class Do{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nd=1234567;const fr=Math.PI/180,wr=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function qe(i,t,e){return Math.max(t,Math.min(e,i))}function uu(i,t){return(i%t+t)%t}function Xm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function qm(i,t,e){return i!==t?(e-i)/(t-i):0}function pr(i,t,e){return(1-e)*i+e*t}function $m(i,t,e,n){return pr(i,t,1-Math.exp(-e*n))}function Ym(i,t=1){return t-Math.abs(uu(i,t*2)-t)}function jm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Zm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Km(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Jm(i,t){return i+Math.random()*(t-i)}function Qm(i){return i*(.5-Math.random())}function tg(i){i!==void 0&&(nd=i);let t=nd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function eg(i){return i*fr}function ng(i){return i*wr}function ig(i){return(i&i-1)===0&&i!==0}function sg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function og(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rg(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+n)/2),h=r((t+n)/2),u=o((t-n)/2),d=r((t-n)/2),p=o((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Bn={DEG2RAD:fr,RAD2DEG:wr,generateUUID:mi,clamp:qe,euclideanModulo:uu,mapLinear:Xm,inverseLerp:qm,lerp:pr,damp:$m,pingpong:Ym,smoothstep:jm,smootherstep:Zm,randInt:Km,randFloat:Jm,randFloatSpread:Qm,seededRandom:tg,degToRad:eg,radToDeg:ng,isPowerOfTwo:ig,ceilPowerOfTwo:sg,floorPowerOfTwo:og,setQuaternionFromProperEuler:rg,normalize:ye,denormalize:Kn};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,s,o,r,a,c,l){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],x=s[1],_=s[4],y=s[7],T=s[2],w=s[5],R=s[8];return o[0]=r*v+a*x+c*T,o[3]=r*m+a*_+c*w,o[6]=r*f+a*y+c*R,o[1]=l*v+h*x+u*T,o[4]=l*m+h*_+u*w,o[7]=l*f+h*y+u*R,o[2]=d*v+p*x+g*T,o[5]=d*m+p*_+g*w,o[8]=d*f+p*y+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*o,p=l*o-r*c,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(a*n-s*r)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*o-a*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(r*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fc.makeScale(t,e)),this}rotate(t){return this.premultiply(Fc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fc=new Jt;function Gp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ag(){const i=Sr("canvas");return i.style.display="block",i}const id={};function rr(i){i in id||(id[i]=!0,console.warn(i))}function cg(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function lg(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hg(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ce={enabled:!0,workingColorSpace:Io,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===_e&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===_e&&(i.r=mo(i.r),i.g=mo(i.g),i.b=mo(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ji?mc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const sd=[.64,.33,.3,.6,.15,.06],od=[.2126,.7152,.0722],rd=[.3127,.329],ad=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cd=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ce.define({[Io]:{primaries:sd,whitePoint:rd,transfer:mc,toXYZ:ad,fromXYZ:cd,luminanceCoefficients:od,workingColorSpaceConfig:{unpackColorSpace:ie},outputColorSpaceConfig:{drawingBufferColorSpace:ie}},[ie]:{primaries:sd,whitePoint:rd,transfer:_e,toXYZ:ad,fromXYZ:cd,luminanceCoefficients:od,outputColorSpaceConfig:{drawingBufferColorSpace:ie}}});let Fs;class ug{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fs===void 0&&(Fs=Sr("canvas")),Fs.width=t.width,Fs.height=t.height;const n=Fs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Ui(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dg=0;class Vp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Oc(s[r].image)):o.push(Oc(s[r]))}else o=Oc(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Oc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ug.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fg=0;class rn extends Do{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=bs,s=bs,o=hi,r=Es,a=Qn,c=Oi,l=rn.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=mi(),this.name="",this.source=new Vp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fi:t.x=t.x-Math.floor(t.x);break;case bs:t.x=t.x<0?0:1;break;case ih:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fi:t.y=t.y-Math.floor(t.y);break;case bs:t.y=t.y<0?0:1;break;case ih:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Pp;rn.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,y=(p+1)/2,T=(f+1)/2,w=(h+d)/4,R=(u+v)/4,C=(g+m)/4;return _>y&&_>T?_<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(_),s=w/n,o=R/n):y>T?y<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(y),n=w/s,o=C/s):T<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(T),n=R/o,s=C/o),this.set(n,s,o,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pg extends Do{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends pg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wp extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mg extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class as{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=o[r+0],p=o[r+1],g=o[r+2],v=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==p||h!==g){let m=1-a;const f=c*d+l*p+h*g+u*v,x=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const T=Math.sqrt(_),w=Math.atan2(T,f*x);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const y=a*x;if(c=c*m+d*y,l=l*m+p*y,h=h*m+g*y,u=u*m+v*y,m===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=o[r],d=o[r+1],p=o[r+2],g=o[r+3];return t[e]=a*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-a*p,t[e+2]=l*g+h*p+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(o/2),d=c(n/2),p=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(o-l)*p,this._z=(r-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(o-l)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(r-s)/p,this._x=(o+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-s*a,this._w=r*h-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ld.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ld.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*h,this.y=n+c*h+a*l-o*u,this.z=s+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kc.copy(this).projectOnVector(t),this.sub(kc)}reflect(t){return this.sub(kc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kc=new b,ld=new as;class cs{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Wn):Wn.fromBufferAttribute(o,r),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(t.matrixWorld),this.union(Xr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ho),qr.subVectors(this.max,Ho),Os.subVectors(t.a,Ho),ks.subVectors(t.b,Ho),zs.subVectors(t.c,Ho),Vi.subVectors(ks,Os),Wi.subVectors(zs,ks),us.subVectors(Os,zs);let e=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-us.z,us.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,us.z,0,-us.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-us.y,us.x,0];return!zc(e,Os,ks,zs,qr)||(e=[1,0,0,0,1,0,0,0,1],!zc(e,Os,ks,zs,qr))?!1:($r.crossVectors(Vi,Wi),e=[$r.x,$r.y,$r.z],zc(e,Os,ks,zs,qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bi=[new b,new b,new b,new b,new b,new b,new b,new b],Wn=new b,Xr=new cs,Os=new b,ks=new b,zs=new b,Vi=new b,Wi=new b,us=new b,Ho=new b,qr=new b,$r=new b,ds=new b;function zc(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){ds.fromArray(i,o);const a=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),c=t.dot(ds),l=e.dot(ds),h=n.dot(ds);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const gg=new cs,Go=new b,Bc=new b;class Ls{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gg.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Go.subVectors(t,this.center);const e=Go.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Go,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Go.copy(t.center).add(Bc)),this.expandByPoint(Go.copy(t.center).sub(Bc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new b,Hc=new b,Yr=new b,Xi=new b,Gc=new b,jr=new b,Vc=new b;class gc{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Hc.copy(t).add(e).multiplyScalar(.5),Yr.copy(e).sub(t).normalize(),Xi.copy(this.origin).sub(Hc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Yr),a=Xi.dot(this.direction),c=-Xi.dot(Yr),l=Xi.lengthSq(),h=Math.abs(1-r*r);let u,d,p,g;if(h>0)if(u=r*c-a,d=r*a-c,g=o*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*c)+l;else d=-o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-c),o),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-o,-c),o),p=d*(d+2*c)+l):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-c),o),p=-u*u+d*(d+2*c)+l);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Hc).addScaledVector(Yr,d),p}intersectSphere(t,e){Ei.subVectors(t.center,this.origin);const n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,n,s,o){Gc.subVectors(e,t),jr.subVectors(n,t),Vc.crossVectors(Gc,jr);let r=this.direction.dot(Vc),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Xi.subVectors(this.origin,t);const c=a*this.direction.dot(jr.crossVectors(Xi,jr));if(c<0)return null;const l=a*this.direction.dot(Gc.cross(Xi));if(l<0||c+l>r)return null;const h=-a*Xi.dot(Vc);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,o,r,a,c,l,h,u,d,p,g,v,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,h,u,d,p,g,v,m)}set(t,e,n,s,o,r,a,c,l,h,u,d,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=o,f[5]=r,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Bs.setFromMatrixColumn(t,0).length(),o=1/Bs.setFromMatrixColumn(t,1).length(),r=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,p=r*u,g=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=g+p*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,g=l*h,v=l*u;e[0]=d+v*a,e[4]=g*a-p,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=p*a-g,e[6]=v+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,g=l*h,v=l*u;e[0]=d-v*a,e[4]=-r*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=r*h,e[9]=v-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,p=r*u,g=a*h,v=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,p=r*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+p,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=r*c,p=r*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=r*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vg,t,xg)}lookAt(t,e,n){const s=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),qi.crossVectors(n,bn),qi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),qi.crossVectors(n,bn)),qi.normalize(),Zr.crossVectors(bn,qi),s[0]=qi.x,s[4]=Zr.x,s[8]=bn.x,s[1]=qi.y,s[5]=Zr.y,s[9]=bn.y,s[2]=qi.z,s[6]=Zr.z,s[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],x=n[3],_=n[7],y=n[11],T=n[15],w=s[0],R=s[4],C=s[8],S=s[12],M=s[1],P=s[5],F=s[9],O=s[13],V=s[2],Z=s[6],U=s[10],k=s[14],N=s[3],G=s[7],W=s[11],Q=s[15];return o[0]=r*w+a*M+c*V+l*N,o[4]=r*R+a*P+c*Z+l*G,o[8]=r*C+a*F+c*U+l*W,o[12]=r*S+a*O+c*k+l*Q,o[1]=h*w+u*M+d*V+p*N,o[5]=h*R+u*P+d*Z+p*G,o[9]=h*C+u*F+d*U+p*W,o[13]=h*S+u*O+d*k+p*Q,o[2]=g*w+v*M+m*V+f*N,o[6]=g*R+v*P+m*Z+f*G,o[10]=g*C+v*F+m*U+f*W,o[14]=g*S+v*O+m*k+f*Q,o[3]=x*w+_*M+y*V+T*N,o[7]=x*R+_*P+y*Z+T*G,o[11]=x*C+_*F+y*U+T*W,o[15]=x*S+_*O+y*k+T*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+o*c*u-s*l*u-o*a*d+n*l*d+s*a*p-n*c*p)+v*(+e*c*p-e*l*d+o*r*d-s*r*p+s*l*h-o*c*h)+m*(+e*l*u-e*a*p-o*r*u+n*r*p+o*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*r*u-n*r*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],x=u*m*l-v*d*l+v*c*p-a*m*p-u*c*f+a*d*f,_=g*d*l-h*m*l-g*c*p+r*m*p+h*c*f-r*d*f,y=h*v*l-g*u*l+g*a*p-r*v*p-h*a*f+r*u*f,T=g*u*c-h*v*c-g*a*d+r*v*d+h*a*m-r*u*m,w=e*x+n*_+s*y+o*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=x*R,t[1]=(v*d*o-u*m*o-v*s*p+n*m*p+u*s*f-n*d*f)*R,t[2]=(a*m*o-v*c*o+v*s*l-n*m*l-a*s*f+n*c*f)*R,t[3]=(u*c*o-a*d*o-u*s*l+n*d*l+a*s*p-n*c*p)*R,t[4]=_*R,t[5]=(h*m*o-g*d*o+g*s*p-e*m*p-h*s*f+e*d*f)*R,t[6]=(g*c*o-r*m*o-g*s*l+e*m*l+r*s*f-e*c*f)*R,t[7]=(r*d*o-h*c*o+h*s*l-e*d*l-r*s*p+e*c*p)*R,t[8]=y*R,t[9]=(g*u*o-h*v*o-g*n*p+e*v*p+h*n*f-e*u*f)*R,t[10]=(r*v*o-g*a*o+g*n*l-e*v*l-r*n*f+e*a*f)*R,t[11]=(h*a*o-r*u*o-h*n*l+e*u*l+r*n*p-e*a*p)*R,t[12]=T*R,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*R,t[14]=(g*a*s-r*v*s-g*n*c+e*v*c+r*n*m-e*a*m)*R,t[15]=(r*u*s-h*a*s+h*n*c-e*u*c-r*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,d=o*l,p=o*h,g=o*u,v=r*h,m=r*u,f=a*u,x=c*l,_=c*h,y=c*u,T=n.x,w=n.y,R=n.z;return s[0]=(1-(v+f))*T,s[1]=(p+y)*T,s[2]=(g-_)*T,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(d+f))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(g+_)*R,s[9]=(m-x)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Bs.set(s[0],s[1],s[2]).length();const r=Bs.set(s[4],s[5],s[6]).length(),a=Bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Xn.copy(this);const l=1/o,h=1/r,u=1/a;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,e.setFromRotationMatrix(Xn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Li){const c=this.elements,l=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===Li)p=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Ja)p=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Li){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(r-o),d=(e+t)*l,p=(n+s)*h;let g,v;if(a===Li)g=(r+o)*u,v=-2*u;else if(a===Ja)g=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bs=new b,Xn=new se,vg=new b(0,0,0),xg=new b(1,1,1),qi=new b,Zr=new b,bn=new b,hd=new se,ud=new as;class vi{constructor(t=0,e=0,n=0,s=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ud.setFromEuler(this),this.setFromQuaternion(ud,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class du{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _g=0;const dd=new b,Hs=new as,Ti=new se,Kr=new b,Vo=new b,yg=new b,Mg=new as,fd=new b(1,0,0),pd=new b(0,1,0),md=new b(0,0,1),gd={type:"added"},wg={type:"removed"},Gs={type:"childadded",child:null},Wc={type:"childremoved",child:null};class Me extends Do{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new b,e=new vi,n=new as,s=new b(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Jt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(fd,t)}rotateY(t){return this.rotateOnAxis(pd,t)}rotateZ(t){return this.rotateOnAxis(md,t)}translateOnAxis(t,e){return dd.copy(t).applyQuaternion(this.quaternion),this.position.add(dd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fd,t)}translateY(t){return this.translateOnAxis(pd,t)}translateZ(t){return this.translateOnAxis(md,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Kr.copy(t):Kr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Vo,Kr,this.up):Ti.lookAt(Kr,Vo,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(Ti),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gd),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wg),Wc.child=t,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gd),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,t,yg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,Mg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),p=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new b(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new b,Ai=new b,Xc=new b,Ci=new b,Vs=new b,Ws=new b,vd=new b,qc=new b,$c=new b,Yc=new b,jc=new pe,Zc=new pe,Kc=new pe;class zn{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),qn.subVectors(t,e),s.cross(qn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){qn.subVectors(s,e),Ai.subVectors(n,e),Xc.subVectors(t,e);const r=qn.dot(qn),a=qn.dot(Ai),c=qn.dot(Xc),l=Ai.dot(Ai),h=Ai.dot(Xc),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,g=(r*h-a*c)*d;return o.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,Ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Ci.x),c.addScaledVector(r,Ci.y),c.addScaledVector(a,Ci.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return jc.setScalar(0),Zc.setScalar(0),Kc.setScalar(0),jc.fromBufferAttribute(t,e),Zc.fromBufferAttribute(t,n),Kc.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(jc,o.x),r.addScaledVector(Zc,o.y),r.addScaledVector(Kc,o.z),r}static isFrontFacing(t,e,n,s){return qn.subVectors(n,e),Ai.subVectors(t,e),qn.cross(Ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),qn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return zn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return zn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Vs.subVectors(s,n),Ws.subVectors(o,n),qc.subVectors(t,n);const c=Vs.dot(qc),l=Ws.dot(qc);if(c<=0&&l<=0)return e.copy(n);$c.subVectors(t,s);const h=Vs.dot($c),u=Ws.dot($c);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Vs,r);Yc.subVectors(t,o);const p=Vs.dot(Yc),g=Ws.dot(Yc);if(g>=0&&p<=g)return e.copy(o);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ws,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return vd.subVectors(o,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(vd,a);const f=1/(m+v+d);return r=v*f,a=d*f,e.copy(n).addScaledVector(Vs,r).addScaledVector(Ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Jc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=uu(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Jc(r,o,t+1/3),this.g=Jc(r,o,t),this.b=Jc(r,o,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=ie){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ie){const n=Xp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=mo(t.r),this.g=mo(t.g),this.b=mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ie){return ce.fromWorkingColorSpace(ln.copy(this),t),Math.round(qe(ln.r*255,0,255))*65536+Math.round(qe(ln.g*255,0,255))*256+Math.round(qe(ln.b*255,0,255))}getHexString(t=ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(ln.copy(this),e);const n=ln.r,s=ln.g,o=ln.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-n)/u+2;break;case o:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=ie){ce.fromWorkingColorSpace(ln.copy(this),t);const e=ln.r,n=ln.g,s=ln.b;return t!==ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(Jr);const n=pr($i.h,Jr.h,e),s=pr($i.s,Jr.s,e),o=pr($i.l,Jr.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new gt;gt.NAMES=Xp;let Sg=0;class Bi extends Do{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=mi(),this.name="",this.blending=Ts,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=$l,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ql&&(n.blendSrc=this.blendSrc),this.blendDst!==$l&&(n.blendDst=this.blendDst),this.blendEquation!==ys&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==td&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $e extends Bi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const He=new b,Qr=new st;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ph,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),o=ye(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ph&&(t.usage=this.usage),t}}class qp extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $p extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Bt extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bg=0;const Nn=new se,Qc=new Me,Xs=new b,En=new cs,Wo=new cs,Ke=new b;class ge extends Do{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gp(t)?$p:qp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Jt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,n){return Nn.makeTranslation(t,e,n),this.applyMatrix4(Nn),this}scale(t,e,n){return Nn.makeScale(t,e,n),this.applyMatrix4(Nn),this}lookAt(t){return Qc.lookAt(t),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Bt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];En.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Wo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(En.min,Wo.min),En.expandByPoint(Ke),Ke.addVectors(En.max,Wo.max),En.expandByPoint(Ke)):(En.expandByPoint(Wo.min),En.expandByPoint(Wo.max))}En.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Ke.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Ke));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ke.fromBufferAttribute(a,l),c&&(Xs.fromBufferAttribute(t,l),Ke.add(Xs)),s=Math.max(s,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new b,c[C]=new b;const l=new b,h=new b,u=new b,d=new st,p=new st,g=new st,v=new b,m=new b;function f(C,S,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(o,C),p.fromBufferAttribute(o,S),g.fromBufferAttribute(o,M),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(v),a[S].add(v),a[M].add(v),c[C].add(m),c[S].add(m),c[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,S=x.length;C<S;++C){const M=x[C],P=M.start,F=M.count;for(let O=P,V=P+F;O<V;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const _=new b,y=new b,T=new b,w=new b;function R(C){T.fromBufferAttribute(s,C),w.copy(T);const S=a[C];_.copy(S),_.sub(T.multiplyScalar(T.dot(S))).normalize(),y.crossVectors(w,S);const P=y.dot(c[C])<0?-1:1;r.setXYZW(C,_.x,_.y,_.z,P)}for(let C=0,S=x.length;C<S;++C){const M=x[C],P=M.start,F=M.count;for(let O=P,V=P+F;O<V;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new b,o=new b,r=new b,a=new b,c=new b,l=new b,h=new b,u=new b;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Be(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xd=new se,fs=new gc,ta=new Ls,_d=new b,ea=new b,na=new b,ia=new b,tl=new b,sa=new b,yd=new b,oa=new b;class I extends Me{constructor(t=new ge,e=new $e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){sa.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(tl.fromBufferAttribute(u,t),r?sa.addScaledVector(tl,h):sa.addScaledVector(tl.sub(e),h))}e.add(sa)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(o),fs.copy(t.ray).recast(t.near),!(ta.containsPoint(fs.origin)===!1&&(fs.intersectSphere(ta,_d)===null||fs.origin.distanceToSquared(_d)>(t.far-t.near)**2))&&(xd.copy(o).invert(),fs.copy(t.ray).applyMatrix4(xd),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=r[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,T=_;y<T;y+=3){const w=a.getX(y),R=a.getX(y+1),C=a.getX(y+2);s=ra(this,f,t,n,l,h,u,w,R,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const x=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=ra(this,r,t,n,l,h,u,x,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=r[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,T=_;y<T;y+=3){const w=y,R=y+1,C=y+2;s=ra(this,f,t,n,l,h,u,w,R,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const x=m,_=m+1,y=m+2;s=ra(this,r,t,n,l,h,u,x,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Eg(i,t,e,n,s,o,r,a){let c;if(t.side===fn?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===gi,a),c===null)return null;oa.copy(a),oa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(oa);return l<e.near||l>e.far?null:{distance:l,point:oa.clone(),object:i}}function ra(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,ea),i.getVertexPosition(c,na),i.getVertexPosition(l,ia);const h=Eg(i,t,e,n,ea,na,ia,yd);if(h){const u=new b;zn.getBarycoord(yd,ea,na,ia,u),s&&(h.uv=zn.getInterpolatedAttribute(s,a,c,l,u,new st)),o&&(h.uv1=zn.getInterpolatedAttribute(o,a,c,l,u,new st)),r&&(h.normal=zn.getInterpolatedAttribute(r,a,c,l,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new b,materialIndex:0};zn.getNormal(ea,na,ia,d.normal),h.face=d,h.barycoord=u}return h}class $t extends ge{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(u,2));function g(v,m,f,x,_,y,T,w,R,C,S){const M=y/R,P=T/C,F=y/2,O=T/2,V=w/2,Z=R+1,U=C+1;let k=0,N=0;const G=new b;for(let W=0;W<U;W++){const Q=W*P-O;for(let et=0;et<Z;et++){const ht=et*M-F;G[v]=ht*x,G[m]=Q*_,G[f]=V,l.push(G.x,G.y,G.z),G[v]=0,G[m]=0,G[f]=w>0?1:-1,h.push(G.x,G.y,G.z),u.push(et/R),u.push(1-W/C),k+=1}}for(let W=0;W<C;W++)for(let Q=0;Q<R;Q++){const et=d+Q+Z*W,ht=d+Q+Z*(W+1),$=d+(Q+1)+Z*(W+1),q=d+(Q+1)+Z*W;c.push(et,ht,q),c.push(ht,$,q),N+=6}a.addGroup(p,N,S),p+=N,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $t(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Eo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function xn(i){const t={};for(let e=0;e<i.length;e++){const n=Eo(i[e]);for(const s in n)t[s]=n[s]}return t}function Tg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const Rs={clone:Eo,merge:xn};var Ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ye extends Bi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ag,this.fragmentShader=Cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Eo(t.uniforms),this.uniformsGroups=Tg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class jp extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new b,Md=new st,wd=new st;class wn extends jp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,Md,wd),e.subVectors(wd,Md)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qs=-90,$s=1;class Rg extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(qs,$s,t,e);s.layers=this.layers,this.add(s);const o=new wn(qs,$s,t,e);o.layers=this.layers,this.add(o);const r=new wn(qs,$s,t,e);r.layers=this.layers,this.add(r);const a=new wn(qs,$s,t,e);a.layers=this.layers,this.add(a);const c=new wn(qs,$s,t,e);c.layers=this.layers,this.add(c);const l=new wn(qs,$s,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zp extends rn{constructor(t,e,n,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Mo,super(t,e,n,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pg extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Zp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $t(5,5,5),o=new Ye({name:"CubemapFromEquirect",uniforms:Eo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:fi});o.uniforms.tEquirect.value=e;const r=new I(s,o),a=e.minFilter;return e.minFilter===Es&&(e.minFilter=hi),new Rg(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const el=new b,Lg=new b,Ig=new Jt;class Ki{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=el.subVectors(n,e).cross(Lg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(el),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ig.getNormalMatrix(t),s=this.coplanarPoint(el).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Ls,aa=new b;class fu{constructor(t=new Ki,e=new Ki,n=new Ki,s=new Ki,o=new Ki,r=new Ki){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Li){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],x=s[13],_=s[14],y=s[15];if(n[0].setComponents(c-o,d-l,m-p,y-f).normalize(),n[1].setComponents(c+o,d+l,m+p,y+f).normalize(),n[2].setComponents(c+r,d+h,m+g,y+x).normalize(),n[3].setComponents(c-r,d-h,m-g,y-x).normalize(),n[4].setComponents(c-a,d-u,m-v,y-_).normalize(),e===Li)n[5].setComponents(c+a,d+u,m+v,y+_).normalize();else if(e===Ja)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(aa.x=s.normal.x>0?t.max.x:t.min.x,aa.y=s.normal.y>0?t.max.y:t.min.y,aa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(aa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kp(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Dg(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class Re extends ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const x=f*d-r;for(let _=0;_<l;_++){const y=_*u-o;g.push(y,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<a;x++){const _=x+l*f,y=x+l*(f+1),T=x+1+l*(f+1),w=x+1+l*f;p.push(_,y,w),p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ng=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Og=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$g=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ov=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,av=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hv="gl_FragColor = linearToOutputTexel( gl_FragColor );",uv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_v=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ev=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Av=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Iv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ov=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$v=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ux=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ax=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ux=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$x=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,t_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,e_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,s_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,c_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,u_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:Ug,alphahash_pars_fragment:Ng,alphamap_fragment:Fg,alphamap_pars_fragment:Og,alphatest_fragment:kg,alphatest_pars_fragment:zg,aomap_fragment:Bg,aomap_pars_fragment:Hg,batching_pars_vertex:Gg,batching_vertex:Vg,begin_vertex:Wg,beginnormal_vertex:Xg,bsdfs:qg,iridescence_fragment:$g,bumpmap_pars_fragment:Yg,clipping_planes_fragment:jg,clipping_planes_pars_fragment:Zg,clipping_planes_pars_vertex:Kg,clipping_planes_vertex:Jg,color_fragment:Qg,color_pars_fragment:tv,color_pars_vertex:ev,color_vertex:nv,common:iv,cube_uv_reflection_fragment:sv,defaultnormal_vertex:ov,displacementmap_pars_vertex:rv,displacementmap_vertex:av,emissivemap_fragment:cv,emissivemap_pars_fragment:lv,colorspace_fragment:hv,colorspace_pars_fragment:uv,envmap_fragment:dv,envmap_common_pars_fragment:fv,envmap_pars_fragment:pv,envmap_pars_vertex:mv,envmap_physical_pars_fragment:Tv,envmap_vertex:gv,fog_vertex:vv,fog_pars_vertex:xv,fog_fragment:_v,fog_pars_fragment:yv,gradientmap_pars_fragment:Mv,lightmap_pars_fragment:wv,lights_lambert_fragment:Sv,lights_lambert_pars_fragment:bv,lights_pars_begin:Ev,lights_toon_fragment:Av,lights_toon_pars_fragment:Cv,lights_phong_fragment:Rv,lights_phong_pars_fragment:Pv,lights_physical_fragment:Lv,lights_physical_pars_fragment:Iv,lights_fragment_begin:Dv,lights_fragment_maps:Uv,lights_fragment_end:Nv,logdepthbuf_fragment:Fv,logdepthbuf_pars_fragment:Ov,logdepthbuf_pars_vertex:kv,logdepthbuf_vertex:zv,map_fragment:Bv,map_pars_fragment:Hv,map_particle_fragment:Gv,map_particle_pars_fragment:Vv,metalnessmap_fragment:Wv,metalnessmap_pars_fragment:Xv,morphinstance_vertex:qv,morphcolor_vertex:$v,morphnormal_vertex:Yv,morphtarget_pars_vertex:jv,morphtarget_vertex:Zv,normal_fragment_begin:Kv,normal_fragment_maps:Jv,normal_pars_fragment:Qv,normal_pars_vertex:tx,normal_vertex:ex,normalmap_pars_fragment:nx,clearcoat_normal_fragment_begin:ix,clearcoat_normal_fragment_maps:sx,clearcoat_pars_fragment:ox,iridescence_pars_fragment:rx,opaque_fragment:ax,packing:cx,premultiplied_alpha_fragment:lx,project_vertex:hx,dithering_fragment:ux,dithering_pars_fragment:dx,roughnessmap_fragment:fx,roughnessmap_pars_fragment:px,shadowmap_pars_fragment:mx,shadowmap_pars_vertex:gx,shadowmap_vertex:vx,shadowmask_pars_fragment:xx,skinbase_vertex:_x,skinning_pars_vertex:yx,skinning_vertex:Mx,skinnormal_vertex:wx,specularmap_fragment:Sx,specularmap_pars_fragment:bx,tonemapping_fragment:Ex,tonemapping_pars_fragment:Tx,transmission_fragment:Ax,transmission_pars_fragment:Cx,uv_pars_fragment:Rx,uv_pars_vertex:Px,uv_vertex:Lx,worldpos_vertex:Ix,background_vert:Dx,background_frag:Ux,backgroundCube_vert:Nx,backgroundCube_frag:Fx,cube_vert:Ox,cube_frag:kx,depth_vert:zx,depth_frag:Bx,distanceRGBA_vert:Hx,distanceRGBA_frag:Gx,equirect_vert:Vx,equirect_frag:Wx,linedashed_vert:Xx,linedashed_frag:qx,meshbasic_vert:$x,meshbasic_frag:Yx,meshlambert_vert:jx,meshlambert_frag:Zx,meshmatcap_vert:Kx,meshmatcap_frag:Jx,meshnormal_vert:Qx,meshnormal_frag:t_,meshphong_vert:e_,meshphong_frag:n_,meshphysical_vert:i_,meshphysical_frag:s_,meshtoon_vert:o_,meshtoon_frag:r_,points_vert:a_,points_frag:c_,shadow_vert:l_,shadow_frag:h_,sprite_vert:u_,sprite_frag:d_},xt={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},li={basic:{uniforms:xn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:xn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new gt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:xn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:xn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:xn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new gt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:xn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:xn([xt.points,xt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:xn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:xn([xt.common,xt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:xn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:xn([xt.sprite,xt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:xn([xt.common,xt.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:xn([xt.lights,xt.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};li.physical={uniforms:xn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const ca={r:0,b:0,g:0},ms=new vi,f_=new se;function p_(i,t,e,n,s,o,r){const a=new gt(0);let c=o===!0?0:1,l,h,u=null,d=0,p=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const y=g(x);y===null?f(a,c):y&&y.isColor&&(f(y,1),_=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,_){const y=g(_);y&&(y.isCubeTexture||y.mapping===pc)?(h===void 0&&(h=new I(new $t(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:Eo(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ms.copy(_.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(f_.makeRotationFromEuler(ms)),h.material.toneMapped=ce.getTransfer(y.colorSpace)!==_e,(u!==y||d!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new I(new Re(2,2),new Ye({name:"BackgroundMaterial",uniforms:Eo(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ce.getTransfer(y.colorSpace)!==_e,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function f(x,_){x.getRGB(ca,Yp(i)),n.buffers.color.setClear(ca.r,ca.g,ca.b,_,r)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),c=_,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,f(a,c)},render:v,addToRenderList:m}}function m_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(M,P,F,O,V){let Z=!1;const U=u(O,F,P);o!==U&&(o=U,l(o.object)),Z=p(M,O,F,V),Z&&g(M,O,F,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,y(M,P,F,O),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,P,F){const O=F.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let Z=V[P.id];Z===void 0&&(Z={},V[P.id]=Z);let U=Z[O];return U===void 0&&(U=d(c()),Z[O]=U),U}function d(M){const P=[],F=[],O=[];for(let V=0;V<e;V++)P[V]=0,F[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,P,F,O){const V=o.attributes,Z=P.attributes;let U=0;const k=F.getAttributes();for(const N in k)if(k[N].location>=0){const W=V[N];let Q=Z[N];if(Q===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),W===void 0||W.attribute!==Q||Q&&W.data!==Q.data)return!0;U++}return o.attributesNum!==U||o.index!==O}function g(M,P,F,O){const V={},Z=P.attributes;let U=0;const k=F.getAttributes();for(const N in k)if(k[N].location>=0){let W=Z[N];W===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(W=M.instanceColor));const Q={};Q.attribute=W,W&&W.data&&(Q.data=W.data),V[N]=Q,U++}o.attributes=V,o.attributesNum=U,o.index=O}function v(){const M=o.newAttributes;for(let P=0,F=M.length;P<F;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const F=o.newAttributes,O=o.enabledAttributes,V=o.attributeDivisors;F[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),V[M]!==P&&(i.vertexAttribDivisor(M,P),V[M]=P)}function x(){const M=o.newAttributes,P=o.enabledAttributes;for(let F=0,O=P.length;F<O;F++)P[F]!==M[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function _(M,P,F,O,V,Z,U){U===!0?i.vertexAttribIPointer(M,P,F,V,Z):i.vertexAttribPointer(M,P,F,O,V,Z)}function y(M,P,F,O){v();const V=O.attributes,Z=F.getAttributes(),U=P.defaultAttributeValues;for(const k in Z){const N=Z[k];if(N.location>=0){let G=V[k];if(G===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(G=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(G=M.instanceColor)),G!==void 0){const W=G.normalized,Q=G.itemSize,et=t.get(G);if(et===void 0)continue;const ht=et.buffer,$=et.type,q=et.bytesPerElement,at=$===i.INT||$===i.UNSIGNED_INT||G.gpuType===su;if(G.isInterleavedBufferAttribute){const tt=G.data,vt=tt.stride,At=G.offset;if(tt.isInstancedInterleavedBuffer){for(let It=0;It<N.locationSize;It++)f(N.location+It,tt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let It=0;It<N.locationSize;It++)m(N.location+It);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let It=0;It<N.locationSize;It++)_(N.location+It,Q/N.locationSize,$,W,vt*q,(At+Q/N.locationSize*It)*q,at)}else{if(G.isInstancedBufferAttribute){for(let tt=0;tt<N.locationSize;tt++)f(N.location+tt,G.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let tt=0;tt<N.locationSize;tt++)m(N.location+tt);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let tt=0;tt<N.locationSize;tt++)_(N.location+tt,Q/N.locationSize,$,W,Q*q,Q/N.locationSize*tt*q,at)}}else if(U!==void 0){const W=U[k];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(N.location,W);break;case 3:i.vertexAttrib3fv(N.location,W);break;case 4:i.vertexAttrib4fv(N.location,W);break;default:i.vertexAttrib1fv(N.location,W)}}}}x()}function T(){C();for(const M in n){const P=n[M];for(const F in P){const O=P[F];for(const V in O)h(O[V].object),delete O[V];delete P[F]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const F in P){const O=P[F];for(const V in O)h(O[V].object),delete O[V];delete P[F]}delete n[M.id]}function R(M){for(const P in n){const F=n[P];if(F[M.id]===void 0)continue;const O=F[M.id];for(const V in O)h(O[V].object),delete O[V];delete F[M.id]}}function C(){S(),r=!0,o!==s&&(o=s,l(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function g_(i,t,e){let n;function s(l){n=l}function o(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)r(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function v_(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==Qn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Oi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ui&&!C)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:T,maxSamples:w}}function x_(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Ki,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||o&&!m)o?h(null):l();else{const x=o?0:n,_=x*4;let y=f.clippingState||null;c.value=y,y=h(g,d,_,p);for(let T=0;T!==_;++T)y[T]=e[T];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const f=p+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=p;_!==v;++_,y+=4)r.copy(u[_]).applyMatrix4(x,a),r.normal.toArray(m,y),m[y+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function __(i){let t=new WeakMap;function e(r,a){return a===eh?r.mapping=Mo:a===nh&&(r.mapping=wo),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===eh||a===nh)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Pg(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class pu extends jp{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const co=4,Sd=[.125,.215,.35,.446,.526,.582],Ms=20,nl=new pu,bd=new gt;let il=null,sl=0,ol=0,rl=!1;const xs=(1+Math.sqrt(5))/2,Ys=1/xs,Ed=[new b(-xs,Ys,0),new b(xs,Ys,0),new b(-Ys,0,xs),new b(Ys,0,xs),new b(0,xs,-Ys),new b(0,xs,Ys),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class Lh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(il,sl,ol),this._renderer.xr.enabled=rl,t.scissorTest=!1,la(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mo||t.mapping===wo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:pi,format:Qn,colorSpace:Io,depthBuffer:!1},s=Td(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Td(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y_(o)),this._blurMaterial=M_(o,t,e)}return s}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,nl)}_sceneToCubeUV(t,e,n,s){const a=new wn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(bd),h.toneMapping=ns,h.autoClear=!1;const p=new $e({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new I(new $t,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(bd),v=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):x===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const _=this._cubeSize;la(s,x*_,f>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Mo||t.mapping===wo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ad());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new I(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;la(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,nl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Ed[(s-o-1)%Ed.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new I(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Ms-1),v=o/g,m=isFinite(o)?1+Math.floor(h*v):Ms;m>Ms&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);const f=[];let x=0;for(let R=0;R<Ms;++R){const C=R/v,S=Math.exp(-C*C/2);f.push(S),R===0?x+=S:R<m&&(x+=2*S)}for(let R=0;R<f.length;R++)f[R]=f[R]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const y=this._sizeLods[s],T=3*y*(s>_-co?s-_+co:0),w=4*(this._cubeSize-y);la(e,T,w,3*y,2*y),c.setRenderTarget(e),c.render(u,nl)}}function y_(i){const t=[],e=[],n=[];let s=i;const o=i-co+1+Sd.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>i-co?c=Sd[r-i+co-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,x=new Float32Array(v*g*p),_=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,C=w>2?0:-1,S=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];x.set(S,v*g*w),_.set(d,m*g*w);const M=[w,w,w,w,w,w];y.set(M,f*g*w)}const T=new ge;T.setAttribute("position",new Be(x,v)),T.setAttribute("uv",new Be(_,m)),T.setAttribute("faceIndex",new Be(y,f)),t.push(T),s>co&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Td(i,t,e){const n=new Ln(i,t,e);return n.texture.mapping=pc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function M_(i,t,e){const n=new Float32Array(Ms),s=new b(0,1,0);return new Ye({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ad(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Cd(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function w_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===eh||c===nh,h=c===Mo||c===wo;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Lh(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Lh(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function S_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function b_(i,t,e,n){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",r),delete s[d.id];const p=o.get(d);p&&(t.remove(p),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let _=0,y=x.length;_<y;_+=3){const T=x[_+0],w=x[_+1],R=x[_+2];d.push(T,w,w,R,R,T)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const T=_+0,w=_+1,R=_+2;d.push(T,w,w,R,R,T)}}else return;const m=new(Gp(d)?$p:qp)(d,1);m.version=v;const f=o.get(u);f&&t.remove(f),o.set(u,m)}function h(u){const d=o.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function E_(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,p){i.drawElements(n,p,o,d*r),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,o,d*r,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/r,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,o,d,0,v,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x]*v[x];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function T_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function A_(i,t,e){const n=new WeakMap,s=new pe;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;p===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let y=a.attributes.position.count*_,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const w=new Float32Array(y*T*4*u),R=new Wp(w,y,T,u);R.type=ui,R.needsUpdate=!0;const C=_*4;for(let M=0;M<u;M++){const P=m[M],F=f[M],O=x[M],V=y*T*4*M;for(let Z=0;Z<P.count;Z++){const U=Z*C;p===!0&&(s.fromBufferAttribute(P,Z),w[V+U+0]=s.x,w[V+U+1]=s.y,w[V+U+2]=s.z,w[V+U+3]=0),g===!0&&(s.fromBufferAttribute(F,Z),w[V+U+4]=s.x,w[V+U+5]=s.y,w[V+U+6]=s.z,w[V+U+7]=0),v===!0&&(s.fromBufferAttribute(O,Z),w[V+U+8]=s.x,w[V+U+9]=s.y,w[V+U+10]=s.z,w[V+U+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new st(y,T)},n.set(a,d),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function C_(i,t,e,n){let s=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class Jp extends rn{constructor(t,e,n,s,o,r,a,c,l,h=po){if(h!==po&&h!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===po&&(n=Cs),n===void 0&&h===bo&&(n=So),super(null,s,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pn,this.minFilter=c!==void 0?c:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qp=new rn,Rd=new Jp(1,1),t0=new Wp,e0=new mg,n0=new Zp,Pd=[],Ld=[],Id=new Float32Array(16),Dd=new Float32Array(9),Ud=new Float32Array(4);function Uo(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Pd[s];if(o===void 0&&(o=new Float32Array(s),Pd[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vc(i,t){let e=Ld[t];e===void 0&&(e=new Int32Array(t),Ld[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function R_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function P_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2fv(this.addr,t),Ze(e,t)}}function L_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;i.uniform3fv(this.addr,t),Ze(e,t)}}function I_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4fv(this.addr,t),Ze(e,t)}}function D_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(je(e,n))return;Ud.set(n),i.uniformMatrix2fv(this.addr,!1,Ud),Ze(e,n)}}function U_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(je(e,n))return;Dd.set(n),i.uniformMatrix3fv(this.addr,!1,Dd),Ze(e,n)}}function N_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(je(e,n))return;Id.set(n),i.uniformMatrix4fv(this.addr,!1,Id),Ze(e,n)}}function F_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function O_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2iv(this.addr,t),Ze(e,t)}}function k_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3iv(this.addr,t),Ze(e,t)}}function z_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4iv(this.addr,t),Ze(e,t)}}function B_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function H_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2uiv(this.addr,t),Ze(e,t)}}function G_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3uiv(this.addr,t),Ze(e,t)}}function V_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4uiv(this.addr,t),Ze(e,t)}}function W_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Rd.compareFunction=Hp,o=Rd):o=Qp,e.setTexture2D(t||o,s)}function X_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||e0,s)}function q_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||n0,s)}function $_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||t0,s)}function Y_(i){switch(i){case 5126:return R_;case 35664:return P_;case 35665:return L_;case 35666:return I_;case 35674:return D_;case 35675:return U_;case 35676:return N_;case 5124:case 35670:return F_;case 35667:case 35671:return O_;case 35668:case 35672:return k_;case 35669:case 35673:return z_;case 5125:return B_;case 36294:return H_;case 36295:return G_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return $_}}function j_(i,t){i.uniform1fv(this.addr,t)}function Z_(i,t){const e=Uo(t,this.size,2);i.uniform2fv(this.addr,e)}function K_(i,t){const e=Uo(t,this.size,3);i.uniform3fv(this.addr,e)}function J_(i,t){const e=Uo(t,this.size,4);i.uniform4fv(this.addr,e)}function Q_(i,t){const e=Uo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ty(i,t){const e=Uo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ey(i,t){const e=Uo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ny(i,t){i.uniform1iv(this.addr,t)}function iy(i,t){i.uniform2iv(this.addr,t)}function sy(i,t){i.uniform3iv(this.addr,t)}function oy(i,t){i.uniform4iv(this.addr,t)}function ry(i,t){i.uniform1uiv(this.addr,t)}function ay(i,t){i.uniform2uiv(this.addr,t)}function cy(i,t){i.uniform3uiv(this.addr,t)}function ly(i,t){i.uniform4uiv(this.addr,t)}function hy(i,t,e){const n=this.cache,s=t.length,o=vc(e,s);je(n,o)||(i.uniform1iv(this.addr,o),Ze(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Qp,o[r])}function uy(i,t,e){const n=this.cache,s=t.length,o=vc(e,s);je(n,o)||(i.uniform1iv(this.addr,o),Ze(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||e0,o[r])}function dy(i,t,e){const n=this.cache,s=t.length,o=vc(e,s);je(n,o)||(i.uniform1iv(this.addr,o),Ze(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||n0,o[r])}function fy(i,t,e){const n=this.cache,s=t.length,o=vc(e,s);je(n,o)||(i.uniform1iv(this.addr,o),Ze(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||t0,o[r])}function py(i){switch(i){case 5126:return j_;case 35664:return Z_;case 35665:return K_;case 35666:return J_;case 35674:return Q_;case 35675:return ty;case 35676:return ey;case 5124:case 35670:return ny;case 35667:case 35671:return iy;case 35668:case 35672:return sy;case 35669:case 35673:return oy;case 5125:return ry;case 36294:return ay;case 36295:return cy;case 36296:return ly;case 35678:case 36198:case 36298:case 36306:case 35682:return hy;case 35679:case 36299:case 36307:return uy;case 35680:case 36300:case 36308:case 36293:return dy;case 36289:case 36303:case 36311:case 36292:return fy}}class my{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Y_(e.type)}}class gy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=py(e.type)}}class vy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const al=/(\w+)(\])?(\[|\.)?/g;function Nd(i,t){i.seq.push(t),i.map[t.id]=t}function xy(i,t,e){const n=i.name,s=n.length;for(al.lastIndex=0;;){const o=al.exec(n),r=al.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){Nd(e,l===void 0?new my(a,i,t):new gy(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new vy(a),Nd(e,u)),e=u}}}class Xa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);xy(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Fd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const _y=37297;let yy=0;function My(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Od=new Jt;function wy(i){ce._getMatrix(Od,ce.workingColorSpace,i);const t=`mat3( ${Od.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case mc:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+My(i.getShaderSource(t),r)}else return s}function Sy(i,t){const e=wy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function by(i,t){let e;switch(t){case Ep:e="Linear";break;case Tp:e="Reinhard";break;case Ap:e="Cineon";break;case iu:e="ACESFilmic";break;case Cp:e="AgX";break;case Rp:e="Neutral";break;case Dm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ha=new b;function Ey(){ce.getLuminanceCoefficients(ha);const i=ha.x.toFixed(4),t=ha.y.toFixed(4),e=ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ty(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function Ay(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cy(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function ar(i){return i!==""}function zd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(i){return i.replace(Ry,Ly)}const Py=new Map;function Ly(i,t){let e=ee[t];if(e===void 0){const n=Py.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ih(e)}const Iy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(i){return i.replace(Iy,Dy)}function Dy(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Gd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Uy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ri&&(t="SHADOWMAP_TYPE_VSM"),t}function Ny(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Mo:case wo:t="ENVMAP_TYPE_CUBE";break;case pc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fy(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wo:t="ENVMAP_MODE_REFRACTION";break}return t}function Oy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bp:t="ENVMAP_BLENDING_MULTIPLY";break;case Lm:t="ENVMAP_BLENDING_MIX";break;case Im:t="ENVMAP_BLENDING_ADD";break}return t}function ky(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function zy(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=Uy(e),l=Ny(e),h=Fy(e),u=Oy(e),d=ky(e),p=Ty(e),g=Ay(o),v=s.createProgram();let m,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ar).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ar).join(`
`),f.length>0&&(f+=`
`)):(m=[Gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),f=[Gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ns?"#define TONE_MAPPING":"",e.toneMapping!==ns?ee.tonemapping_pars_fragment:"",e.toneMapping!==ns?by("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Sy("linearToOutputTexel",e.outputColorSpace),Ey(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),r=Ih(r),r=zd(r,e),r=Bd(r,e),a=Ih(a),a=zd(a,e),a=Bd(a,e),r=Hd(r),a=Hd(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=x+m+r,y=x+f+a,T=Fd(s,s.VERTEX_SHADER,_),w=Fd(s,s.FRAGMENT_SHADER,y);s.attachShader(v,T),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(P){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(T).trim(),V=s.getShaderInfoLog(w).trim();let Z=!0,U=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,w);else{const k=kd(s,T,"vertex"),N=kd(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+k+`
`+N)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||V==="")&&(U=!1);U&&(P.diagnostics={runnable:Z,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:f}})}s.deleteShader(T),s.deleteShader(w),C=new Xa(s,v),S=Cy(s,v)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,_y)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yy++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=w,this}let By=0;class Hy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Gy(t),e.set(t,n)),n}}class Gy{constructor(t){this.id=By++,this.code=t,this.usedTimes=0}}function Vy(i,t,e,n,s,o,r){const a=new du,c=new Hy,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,F,O){const V=F.fog,Z=O.geometry,U=S.isMeshStandardMaterial?F.environment:null,k=(S.isMeshStandardMaterial?e:t).get(S.envMap||U),N=k&&k.mapping===pc?k.image.height:null,G=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const W=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Q=W!==void 0?W.length:0;let et=0;Z.morphAttributes.position!==void 0&&(et=1),Z.morphAttributes.normal!==void 0&&(et=2),Z.morphAttributes.color!==void 0&&(et=3);let ht,$,q,at;if(G){const xe=li[G];ht=xe.vertexShader,$=xe.fragmentShader}else ht=S.vertexShader,$=S.fragmentShader,c.update(S),q=c.getVertexShaderID(S),at=c.getFragmentShaderID(S);const tt=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),At=O.isInstancedMesh===!0,It=O.isBatchedMesh===!0,Yt=!!S.map,ot=!!S.matcap,K=!!k,D=!!S.aoMap,Pt=!!S.lightMap,lt=!!S.bumpMap,bt=!!S.normalMap,ut=!!S.displacementMap,Gt=!!S.emissiveMap,Et=!!S.metalnessMap,L=!!S.roughnessMap,E=S.anisotropy>0,X=S.clearcoat>0,nt=S.dispersion>0,ct=S.iridescence>0,it=S.sheen>0,Lt=S.transmission>0,_t=E&&!!S.anisotropyMap,Tt=X&&!!S.clearcoatMap,oe=X&&!!S.clearcoatNormalMap,dt=X&&!!S.clearcoatRoughnessMap,Ct=ct&&!!S.iridescenceMap,Vt=ct&&!!S.iridescenceThicknessMap,Xt=it&&!!S.sheenColorMap,Rt=it&&!!S.sheenRoughnessMap,ae=!!S.specularMap,te=!!S.specularColorMap,be=!!S.specularIntensityMap,z=Lt&&!!S.transmissionMap,yt=Lt&&!!S.thicknessMap,J=!!S.gradientMap,rt=!!S.alphaMap,St=S.alphaTest>0,Mt=!!S.alphaHash,jt=!!S.extensions;let Ie=ns;S.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const an={shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:ht,fragmentShader:$,defines:S.defines,customVertexShaderID:q,customFragmentShaderID:at,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:It,batchingColor:It&&O._colorsTexture!==null,instancing:At,instancingColor:At&&O.instanceColor!==null,instancingMorph:At&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Io,alphaToCoverage:!!S.alphaToCoverage,map:Yt,matcap:ot,envMap:K,envMapMode:K&&k.mapping,envMapCubeUVHeight:N,aoMap:D,lightMap:Pt,bumpMap:lt,normalMap:bt,displacementMap:d&&ut,emissiveMap:Gt,normalMapObjectSpace:bt&&S.normalMapType===Om,normalMapTangentSpace:bt&&S.normalMapType===Bp,metalnessMap:Et,roughnessMap:L,anisotropy:E,anisotropyMap:_t,clearcoat:X,clearcoatMap:Tt,clearcoatNormalMap:oe,clearcoatRoughnessMap:dt,dispersion:nt,iridescence:ct,iridescenceMap:Ct,iridescenceThicknessMap:Vt,sheen:it,sheenColorMap:Xt,sheenRoughnessMap:Rt,specularMap:ae,specularColorMap:te,specularIntensityMap:be,transmission:Lt,transmissionMap:z,thicknessMap:yt,gradientMap:J,opaque:S.transparent===!1&&S.blending===Ts&&S.alphaToCoverage===!1,alphaMap:rt,alphaTest:St,alphaHash:Mt,combine:S.combine,mapUv:Yt&&v(S.map.channel),aoMapUv:D&&v(S.aoMap.channel),lightMapUv:Pt&&v(S.lightMap.channel),bumpMapUv:lt&&v(S.bumpMap.channel),normalMapUv:bt&&v(S.normalMap.channel),displacementMapUv:ut&&v(S.displacementMap.channel),emissiveMapUv:Gt&&v(S.emissiveMap.channel),metalnessMapUv:Et&&v(S.metalnessMap.channel),roughnessMapUv:L&&v(S.roughnessMap.channel),anisotropyMapUv:_t&&v(S.anisotropyMap.channel),clearcoatMapUv:Tt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&v(S.sheenRoughnessMap.channel),specularMapUv:ae&&v(S.specularMap.channel),specularColorMapUv:te&&v(S.specularColorMap.channel),specularIntensityMapUv:be&&v(S.specularIntensityMap.channel),transmissionMapUv:z&&v(S.transmissionMap.channel),thicknessMapUv:yt&&v(S.thicknessMap.channel),alphaMapUv:rt&&v(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(bt||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(Yt||rt),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:vt,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:et,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Yt&&S.map.isVideoTexture===!0&&ce.getTransfer(S.map.colorSpace)===_e,decodeVideoTextureEmissive:Gt&&S.emissiveMap.isVideoTexture===!0&&ce.getTransfer(S.emissiveMap.colorSpace)===_e,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===me,flipSided:S.side===fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:jt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&S.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return an.vertexUv1s=l.has(1),an.vertexUv2s=l.has(2),an.vertexUv3s=l.has(3),l.clear(),an}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(M,S),_(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const M=g[S.type];let P;if(M){const F=li[M];P=Rs.clone(F.uniforms)}else P=S.uniforms;return P}function T(S,M){let P;for(let F=0,O=h.length;F<O;F++){const V=h[F];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new zy(i,M,S,o),h.push(P)),P}function w(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function R(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:T,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:C}}function Wy(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Xy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Vd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wd(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,d,p,g,v,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function a(u,d,p,g,v,m){const f=r(u,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,g,v,m){const f=r(u,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||Xy),n.length>1&&n.sort(d||Vd),s.length>1&&s.sort(d||Vd)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function qy(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Wd,i.set(n,[r])):s>=o.length?(r=new Wd,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function $y(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new gt};break;case"SpotLight":e={position:new b,direction:new b,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":e={color:new gt,position:new b,halfWidth:new b,halfHeight:new b};break}return i[t.id]=e,e}}}function Yy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let jy=0;function Zy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ky(i){const t=new $y,e=Yy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new b);const s=new b,o=new se,r=new se;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,x=0,_=0,y=0,T=0,w=0,R=0;l.sort(Zy);for(let S=0,M=l.length;S<M;S++){const P=l[S],F=P.color,O=P.intensity,V=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*O,u+=F.g*O,d+=F.b*O;else if(P.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(P.sh.coefficients[U],O);R++}else if(P.isDirectionalLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,N=e.get(P);N.shadowIntensity=k.intensity,N.shadowBias=k.bias,N.shadowNormalBias=k.normalBias,N.shadowRadius=k.radius,N.shadowMapSize=k.mapSize,n.directionalShadow[p]=N,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=P.shadow.matrix,x++}n.directional[p]=U,p++}else if(P.isSpotLight){const U=t.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(F).multiplyScalar(O),U.distance=V,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,n.spot[v]=U;const k=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,k.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[v]=k.matrix,P.castShadow){const N=e.get(P);N.shadowIntensity=k.intensity,N.shadowBias=k.bias,N.shadowNormalBias=k.normalBias,N.shadowRadius=k.radius,N.shadowMapSize=k.mapSize,n.spotShadow[v]=N,n.spotShadowMap[v]=Z,y++}v++}else if(P.isRectAreaLight){const U=t.get(P);U.color.copy(F).multiplyScalar(O),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=U,m++}else if(P.isPointLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){const k=P.shadow,N=e.get(P);N.shadowIntensity=k.intensity,N.shadowBias=k.bias,N.shadowNormalBias=k.normalBias,N.shadowRadius=k.radius,N.shadowMapSize=k.mapSize,N.shadowCameraNear=k.camera.near,N.shadowCameraFar=k.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=P.shadow.matrix,_++}n.point[g]=U,g++}else if(P.isHemisphereLight){const U=t.get(P);U.skyColor.copy(P.color).multiplyScalar(O),U.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[f]=U,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==x||C.numPointShadows!==_||C.numSpotShadows!==y||C.numSpotMaps!==T||C.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,C.directionalLength=p,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=x,C.numPointShadows=_,C.numSpotShadows=y,C.numSpotMaps=T,C.numLightProbes=R,n.version=jy++)}function c(l,h){let u=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,x=l.length;f<x;f++){const _=l[f];if(_.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(_.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),r.identity(),o.copy(_.matrixWorld),o.premultiply(m),r.extractRotation(o),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Xd(i){const t=new Ky(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Jy(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Xd(i),t.set(s,[a])):o>=r.length?(a=new Xd(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Qy extends Bi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class t1 extends Bi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const e1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function i1(i,t,e){let n=new fu;const s=new st,o=new st,r=new pe,a=new Qy({depthPacking:Fm}),c=new t1,l={},h=e.maxTextureSize,u={[gi]:fn,[fn]:gi,[me]:me},d=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:e1,fragmentShader:n1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ge;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new I(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yp;let f=this.type;this.render=function(w,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(fi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=f!==Ri&&this.type===Ri,V=f===Ri&&this.type!==Ri;for(let Z=0,U=w.length;Z<U;Z++){const k=w[Z],N=k.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const G=N.getFrameExtents();if(s.multiply(G),o.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/G.x),s.x=o.x*G.x,N.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/G.y),s.y=o.y*G.y,N.mapSize.y=o.y)),N.map===null||O===!0||V===!0){const Q=this.type!==Ri?{minFilter:Pn,magFilter:Pn}:{};N.map!==null&&N.map.dispose(),N.map=new Ln(s.x,s.y,Q),N.map.texture.name=k.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const W=N.getViewportCount();for(let Q=0;Q<W;Q++){const et=N.getViewport(Q);r.set(o.x*et.x,o.y*et.y,o.x*et.z,o.y*et.w),F.viewport(r),N.updateMatrices(k,Q),n=N.getFrustum(),y(R,C,N.camera,k,this.type)}N.isPointLightShadow!==!0&&this.type===Ri&&x(N,C),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,P)};function x(w,R){const C=t.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ln(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,C,d,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,C,p,v,null)}function _(w,R,C,S){let M=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const F=M.uuid,O=R.uuid;let V=l[F];V===void 0&&(V={},l[F]=V);let Z=V[O];Z===void 0&&(Z=M.clone(),V[O]=Z,R.addEventListener("dispose",T)),M=Z}if(M.visible=R.visible,M.wireframe=R.wireframe,S===Ri?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=i.properties.get(M);F.light=C}return M}function y(w,R,C,S,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Ri)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const O=t.update(w),V=w.material;if(Array.isArray(V)){const Z=O.groups;for(let U=0,k=Z.length;U<k;U++){const N=Z[U],G=V[N.materialIndex];if(G&&G.visible){const W=_(w,G,S,M);w.onBeforeShadow(i,w,R,C,O,W,N),i.renderBufferDirect(C,null,O,W,w,N),w.onAfterShadow(i,w,R,C,O,W,N)}}}else if(V.visible){const Z=_(w,V,S,M);w.onBeforeShadow(i,w,R,C,O,Z,null),i.renderBufferDirect(C,null,O,Z,w,null),w.onAfterShadow(i,w,R,C,O,Z,null)}}const F=w.children;for(let O=0,V=F.length;O<V;O++)y(F[O],R,C,S,M)}function T(w){w.target.removeEventListener("dispose",T);for(const C in l){const S=l[C],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const s1={[Yl]:jl,[Zl]:Ql,[Kl]:th,[yo]:Jl,[jl]:Yl,[Ql]:Zl,[th]:Kl,[Jl]:yo};function o1(i,t){function e(){let z=!1;const yt=new pe;let J=null;const rt=new pe(0,0,0,0);return{setMask:function(St){J!==St&&!z&&(i.colorMask(St,St,St,St),J=St)},setLocked:function(St){z=St},setClear:function(St,Mt,jt,Ie,an){an===!0&&(St*=Ie,Mt*=Ie,jt*=Ie),yt.set(St,Mt,jt,Ie),rt.equals(yt)===!1&&(i.clearColor(St,Mt,jt,Ie),rt.copy(yt))},reset:function(){z=!1,J=null,rt.set(-1,0,0,0)}}}function n(){let z=!1,yt=!1,J=null,rt=null,St=null;return{setReversed:function(Mt){if(yt!==Mt){const jt=t.get("EXT_clip_control");yt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const Ie=St;St=null,this.setClear(Ie)}yt=Mt},getReversed:function(){return yt},setTest:function(Mt){Mt?tt(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(Mt){J!==Mt&&!z&&(i.depthMask(Mt),J=Mt)},setFunc:function(Mt){if(yt&&(Mt=s1[Mt]),rt!==Mt){switch(Mt){case Yl:i.depthFunc(i.NEVER);break;case jl:i.depthFunc(i.ALWAYS);break;case Zl:i.depthFunc(i.LESS);break;case yo:i.depthFunc(i.LEQUAL);break;case Kl:i.depthFunc(i.EQUAL);break;case Jl:i.depthFunc(i.GEQUAL);break;case Ql:i.depthFunc(i.GREATER);break;case th:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=Mt}},setLocked:function(Mt){z=Mt},setClear:function(Mt){St!==Mt&&(yt&&(Mt=1-Mt),i.clearDepth(Mt),St=Mt)},reset:function(){z=!1,J=null,rt=null,St=null,yt=!1}}}function s(){let z=!1,yt=null,J=null,rt=null,St=null,Mt=null,jt=null,Ie=null,an=null;return{setTest:function(xe){z||(xe?tt(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(xe){yt!==xe&&!z&&(i.stencilMask(xe),yt=xe)},setFunc:function(xe,Hn,wi){(J!==xe||rt!==Hn||St!==wi)&&(i.stencilFunc(xe,Hn,wi),J=xe,rt=Hn,St=wi)},setOp:function(xe,Hn,wi){(Mt!==xe||jt!==Hn||Ie!==wi)&&(i.stencilOp(xe,Hn,wi),Mt=xe,jt=Hn,Ie=wi)},setLocked:function(xe){z=xe},setClear:function(xe){an!==xe&&(i.clearStencil(xe),an=xe)},reset:function(){z=!1,yt=null,J=null,rt=null,St=null,Mt=null,jt=null,Ie=null,an=null}}}const o=new e,r=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,x=null,_=null,y=null,T=null,w=null,R=new gt(0,0,0),C=0,S=!1,M=null,P=null,F=null,O=null,V=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,k=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(N)[1]),U=k>=1):N.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),U=k>=2);let G=null,W={};const Q=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),ht=new pe().fromArray(Q),$=new pe().fromArray(et);function q(z,yt,J,rt){const St=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(z,Mt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<J;jt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(yt+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return Mt}const at={};at[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),tt(i.DEPTH_TEST),r.setFunc(yo),lt(!1),bt(Ku),tt(i.CULL_FACE),D(fi);function tt(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function vt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function At(z,yt){return u[z]!==yt?(i.bindFramebuffer(z,yt),u[z]=yt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=yt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function It(z,yt){let J=p,rt=!1;if(z){J=d.get(yt),J===void 0&&(J=[],d.set(yt,J));const St=z.textures;if(J.length!==St.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,jt=St.length;Mt<jt;Mt++)J[Mt]=i.COLOR_ATTACHMENT0+Mt;J.length=St.length,rt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,rt=!0);rt&&i.drawBuffers(J)}function Yt(z){return g!==z?(i.useProgram(z),g=z,!0):!1}const ot={[ys]:i.FUNC_ADD,[gm]:i.FUNC_SUBTRACT,[vm]:i.FUNC_REVERSE_SUBTRACT};ot[xm]=i.MIN,ot[_m]=i.MAX;const K={[Sp]:i.ZERO,[fc]:i.ONE,[ym]:i.SRC_COLOR,[ql]:i.SRC_ALPHA,[Tm]:i.SRC_ALPHA_SATURATE,[bm]:i.DST_COLOR,[wm]:i.DST_ALPHA,[Mm]:i.ONE_MINUS_SRC_COLOR,[$l]:i.ONE_MINUS_SRC_ALPHA,[Em]:i.ONE_MINUS_DST_COLOR,[Sm]:i.ONE_MINUS_DST_ALPHA,[Am]:i.CONSTANT_COLOR,[Cm]:i.ONE_MINUS_CONSTANT_COLOR,[Rm]:i.CONSTANT_ALPHA,[Pm]:i.ONE_MINUS_CONSTANT_ALPHA};function D(z,yt,J,rt,St,Mt,jt,Ie,an,xe){if(z===fi){v===!0&&(vt(i.BLEND),v=!1);return}if(v===!1&&(tt(i.BLEND),v=!0),z!==wp){if(z!==m||xe!==S){if((f!==ys||y!==ys)&&(i.blendEquation(i.FUNC_ADD),f=ys,y=ys),xe)switch(z){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ei:i.blendFunc(i.ONE,i.ONE);break;case Ju:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ei:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ju:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}x=null,_=null,T=null,w=null,R.set(0,0,0),C=0,m=z,S=xe}return}St=St||yt,Mt=Mt||J,jt=jt||rt,(yt!==f||St!==y)&&(i.blendEquationSeparate(ot[yt],ot[St]),f=yt,y=St),(J!==x||rt!==_||Mt!==T||jt!==w)&&(i.blendFuncSeparate(K[J],K[rt],K[Mt],K[jt]),x=J,_=rt,T=Mt,w=jt),(Ie.equals(R)===!1||an!==C)&&(i.blendColor(Ie.r,Ie.g,Ie.b,an),R.copy(Ie),C=an),m=z,S=!1}function Pt(z,yt){z.side===me?vt(i.CULL_FACE):tt(i.CULL_FACE);let J=z.side===fn;yt&&(J=!J),lt(J),z.blending===Ts&&z.transparent===!1?D(fi):D(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),o.setMask(z.colorWrite);const rt=z.stencilWrite;a.setTest(rt),rt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Gt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(z){M!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),M=z)}function bt(z){z!==pm?(tt(i.CULL_FACE),z!==P&&(z===Ku?i.cullFace(i.BACK):z===mm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),P=z}function ut(z){z!==F&&(U&&i.lineWidth(z),F=z)}function Gt(z,yt,J){z?(tt(i.POLYGON_OFFSET_FILL),(O!==yt||V!==J)&&(i.polygonOffset(yt,J),O=yt,V=J)):vt(i.POLYGON_OFFSET_FILL)}function Et(z){z?tt(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function L(z){z===void 0&&(z=i.TEXTURE0+Z-1),G!==z&&(i.activeTexture(z),G=z)}function E(z,yt,J){J===void 0&&(G===null?J=i.TEXTURE0+Z-1:J=G);let rt=W[J];rt===void 0&&(rt={type:void 0,texture:void 0},W[J]=rt),(rt.type!==z||rt.texture!==yt)&&(G!==J&&(i.activeTexture(J),G=J),i.bindTexture(z,yt||at[z]),rt.type=z,rt.texture=yt)}function X(){const z=W[G];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Xt(z){ht.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ht.copy(z))}function Rt(z){$.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),$.copy(z))}function ae(z,yt){let J=l.get(yt);J===void 0&&(J=new WeakMap,l.set(yt,J));let rt=J.get(z);rt===void 0&&(rt=i.getUniformBlockIndex(yt,z.name),J.set(z,rt))}function te(z,yt){const rt=l.get(yt).get(z);c.get(yt)!==rt&&(i.uniformBlockBinding(yt,rt,z.__bindingPointIndex),c.set(yt,rt))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},G=null,W={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,x=null,_=null,y=null,T=null,w=null,R=new gt(0,0,0),C=0,S=!1,M=null,P=null,F=null,O=null,V=null,ht.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:tt,disable:vt,bindFramebuffer:At,drawBuffers:It,useProgram:Yt,setBlending:D,setMaterial:Pt,setFlipSided:lt,setCullFace:bt,setLineWidth:ut,setPolygonOffset:Gt,setScissorTest:Et,activeTexture:L,bindTexture:E,unbindTexture:X,compressedTexImage2D:nt,compressedTexImage3D:ct,texImage2D:Ct,texImage3D:Vt,updateUBOMapping:ae,uniformBlockBinding:te,texStorage2D:oe,texStorage3D:dt,texSubImage2D:it,texSubImage3D:Lt,compressedTexSubImage2D:_t,compressedTexSubImage3D:Tt,scissor:Xt,viewport:Rt,reset:be}}function qd(i,t,e,n){const s=r1(n);switch(e){case Up:return i*t;case Fp:return i*t;case Op:return i*t*2;case au:return i*t/s.components*s.byteLength;case cu:return i*t/s.components*s.byteLength;case kp:return i*t*2/s.components*s.byteLength;case lu:return i*t*2/s.components*s.byteLength;case Np:return i*t*3/s.components*s.byteLength;case Qn:return i*t*4/s.components*s.byteLength;case hu:return i*t*4/s.components*s.byteLength;case Ba:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oh:case ah:return Math.max(i,16)*Math.max(t,8)/4;case sh:case rh:return Math.max(i,8)*Math.max(t,8)/2;case ch:case lh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ph:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case mh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case gh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case vh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _h:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case yh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Mh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case bh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Wa:case Eh:case Th:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zp:case Ah:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ch:case Rh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function r1(i){switch(i){case Oi:case Lp:return{byteLength:1,components:1};case Mr:case Ip:case pi:return{byteLength:2,components:1};case ou:case ru:return{byteLength:2,components:4};case Cs:case su:case ui:return{byteLength:4,components:1};case Dp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function a1(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new st,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,E){return p?new OffscreenCanvas(L,E):Sr("canvas")}function v(L,E,X){let nt=1;const ct=Et(L);if((ct.width>X||ct.height>X)&&(nt=X/Math.max(ct.width,ct.height)),nt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const it=Math.floor(nt*ct.width),Lt=Math.floor(nt*ct.height);u===void 0&&(u=g(it,Lt));const _t=E?g(it,Lt):u;return _t.width=it,_t.height=Lt,_t.getContext("2d").drawImage(L,0,0,it,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+it+"x"+Lt+")."),_t}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),L;return L}function m(L){return L.generateMipmaps}function f(L){i.generateMipmap(L)}function x(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(L,E,X,nt,ct=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let it=E;if(E===i.RED&&(X===i.FLOAT&&(it=i.R32F),X===i.HALF_FLOAT&&(it=i.R16F),X===i.UNSIGNED_BYTE&&(it=i.R8)),E===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.R8UI),X===i.UNSIGNED_SHORT&&(it=i.R16UI),X===i.UNSIGNED_INT&&(it=i.R32UI),X===i.BYTE&&(it=i.R8I),X===i.SHORT&&(it=i.R16I),X===i.INT&&(it=i.R32I)),E===i.RG&&(X===i.FLOAT&&(it=i.RG32F),X===i.HALF_FLOAT&&(it=i.RG16F),X===i.UNSIGNED_BYTE&&(it=i.RG8)),E===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.RG8UI),X===i.UNSIGNED_SHORT&&(it=i.RG16UI),X===i.UNSIGNED_INT&&(it=i.RG32UI),X===i.BYTE&&(it=i.RG8I),X===i.SHORT&&(it=i.RG16I),X===i.INT&&(it=i.RG32I)),E===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.RGB8UI),X===i.UNSIGNED_SHORT&&(it=i.RGB16UI),X===i.UNSIGNED_INT&&(it=i.RGB32UI),X===i.BYTE&&(it=i.RGB8I),X===i.SHORT&&(it=i.RGB16I),X===i.INT&&(it=i.RGB32I)),E===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),X===i.UNSIGNED_INT&&(it=i.RGBA32UI),X===i.BYTE&&(it=i.RGBA8I),X===i.SHORT&&(it=i.RGBA16I),X===i.INT&&(it=i.RGBA32I)),E===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),E===i.RGBA){const Lt=ct?mc:ce.getTransfer(nt);X===i.FLOAT&&(it=i.RGBA32F),X===i.HALF_FLOAT&&(it=i.RGBA16F),X===i.UNSIGNED_BYTE&&(it=Lt===_e?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function y(L,E){let X;return L?E===null||E===Cs||E===So?X=i.DEPTH24_STENCIL8:E===ui?X=i.DEPTH32F_STENCIL8:E===Mr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Cs||E===So?X=i.DEPTH_COMPONENT24:E===ui?X=i.DEPTH_COMPONENT32F:E===Mr&&(X=i.DEPTH_COMPONENT16),X}function T(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Pn&&L.minFilter!==hi?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function w(L){const E=L.target;E.removeEventListener("dispose",w),C(E),E.isVideoTexture&&h.delete(E)}function R(L){const E=L.target;E.removeEventListener("dispose",R),M(E)}function C(L){const E=n.get(L);if(E.__webglInit===void 0)return;const X=L.source,nt=d.get(X);if(nt){const ct=nt[E.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&S(L),Object.keys(nt).length===0&&d.delete(X)}n.remove(L)}function S(L){const E=n.get(L);i.deleteTexture(E.__webglTexture);const X=L.source,nt=d.get(X);delete nt[E.__cacheKey],r.memory.textures--}function M(L){const E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(E.__webglFramebuffer[nt]))for(let ct=0;ct<E.__webglFramebuffer[nt].length;ct++)i.deleteFramebuffer(E.__webglFramebuffer[nt][ct]);else i.deleteFramebuffer(E.__webglFramebuffer[nt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[nt])}else{if(Array.isArray(E.__webglFramebuffer))for(let nt=0;nt<E.__webglFramebuffer.length;nt++)i.deleteFramebuffer(E.__webglFramebuffer[nt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let nt=0;nt<E.__webglColorRenderbuffer.length;nt++)E.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[nt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=L.textures;for(let nt=0,ct=X.length;nt<ct;nt++){const it=n.get(X[nt]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),r.memory.textures--),n.remove(X[nt])}n.remove(L)}let P=0;function F(){P=0}function O(){const L=P;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),P+=1,L}function V(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function Z(L,E){const X=n.get(L);if(L.isVideoTexture&&ut(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const nt=L.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(X,L,E);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+E)}function U(L,E){const X=n.get(L);if(L.version>0&&X.__version!==L.version){$(X,L,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+E)}function k(L,E){const X=n.get(L);if(L.version>0&&X.__version!==L.version){$(X,L,E);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+E)}function N(L,E){const X=n.get(L);if(L.version>0&&X.__version!==L.version){q(X,L,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+E)}const G={[Fi]:i.REPEAT,[bs]:i.CLAMP_TO_EDGE,[ih]:i.MIRRORED_REPEAT},W={[Pn]:i.NEAREST,[Um]:i.NEAREST_MIPMAP_NEAREST,[Wr]:i.NEAREST_MIPMAP_LINEAR,[hi]:i.LINEAR,[Nc]:i.LINEAR_MIPMAP_NEAREST,[Es]:i.LINEAR_MIPMAP_LINEAR},Q={[km]:i.NEVER,[Wm]:i.ALWAYS,[zm]:i.LESS,[Hp]:i.LEQUAL,[Bm]:i.EQUAL,[Vm]:i.GEQUAL,[Hm]:i.GREATER,[Gm]:i.NOTEQUAL};function et(L,E){if(E.type===ui&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===hi||E.magFilter===Nc||E.magFilter===Wr||E.magFilter===Es||E.minFilter===hi||E.minFilter===Nc||E.minFilter===Wr||E.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,G[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,G[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,G[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,W[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,W[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Q[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Pn||E.minFilter!==Wr&&E.minFilter!==Es||E.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ht(L,E){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",w));const nt=E.source;let ct=d.get(nt);ct===void 0&&(ct={},d.set(nt,ct));const it=V(E);if(it!==L.__cacheKey){ct[it]===void 0&&(ct[it]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,X=!0),ct[it].usedTimes++;const Lt=ct[L.__cacheKey];Lt!==void 0&&(ct[L.__cacheKey].usedTimes--,Lt.usedTimes===0&&S(E)),L.__cacheKey=it,L.__webglTexture=ct[it].texture}return X}function $(L,E,X){let nt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(nt=i.TEXTURE_3D);const ct=ht(L,E),it=E.source;e.bindTexture(nt,L.__webglTexture,i.TEXTURE0+X);const Lt=n.get(it);if(it.version!==Lt.__version||ct===!0){e.activeTexture(i.TEXTURE0+X);const _t=ce.getPrimaries(ce.workingColorSpace),Tt=E.colorSpace===Ji?null:ce.getPrimaries(E.colorSpace),oe=E.colorSpace===Ji||_t===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let dt=v(E.image,!1,s.maxTextureSize);dt=Gt(E,dt);const Ct=o.convert(E.format,E.colorSpace),Vt=o.convert(E.type);let Xt=_(E.internalFormat,Ct,Vt,E.colorSpace,E.isVideoTexture);et(nt,E);let Rt;const ae=E.mipmaps,te=E.isVideoTexture!==!0,be=Lt.__version===void 0||ct===!0,z=it.dataReady,yt=T(E,dt);if(E.isDepthTexture)Xt=y(E.format===bo,E.type),be&&(te?e.texStorage2D(i.TEXTURE_2D,1,Xt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Xt,dt.width,dt.height,0,Ct,Vt,null));else if(E.isDataTexture)if(ae.length>0){te&&be&&e.texStorage2D(i.TEXTURE_2D,yt,Xt,ae[0].width,ae[0].height);for(let J=0,rt=ae.length;J<rt;J++)Rt=ae[J],te?z&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Rt.width,Rt.height,Ct,Vt,Rt.data):e.texImage2D(i.TEXTURE_2D,J,Xt,Rt.width,Rt.height,0,Ct,Vt,Rt.data);E.generateMipmaps=!1}else te?(be&&e.texStorage2D(i.TEXTURE_2D,yt,Xt,dt.width,dt.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Ct,Vt,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Xt,dt.width,dt.height,0,Ct,Vt,dt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){te&&be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Xt,ae[0].width,ae[0].height,dt.depth);for(let J=0,rt=ae.length;J<rt;J++)if(Rt=ae[J],E.format!==Qn)if(Ct!==null)if(te){if(z)if(E.layerUpdates.size>0){const St=qd(Rt.width,Rt.height,E.format,E.type);for(const Mt of E.layerUpdates){const jt=Rt.data.subarray(Mt*St/Rt.data.BYTES_PER_ELEMENT,(Mt+1)*St/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Mt,Rt.width,Rt.height,1,Ct,jt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Rt.width,Rt.height,dt.depth,Ct,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Xt,Rt.width,Rt.height,dt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Rt.width,Rt.height,dt.depth,Ct,Vt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Xt,Rt.width,Rt.height,dt.depth,0,Ct,Vt,Rt.data)}else{te&&be&&e.texStorage2D(i.TEXTURE_2D,yt,Xt,ae[0].width,ae[0].height);for(let J=0,rt=ae.length;J<rt;J++)Rt=ae[J],E.format!==Qn?Ct!==null?te?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Rt.width,Rt.height,Ct,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Xt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?z&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Rt.width,Rt.height,Ct,Vt,Rt.data):e.texImage2D(i.TEXTURE_2D,J,Xt,Rt.width,Rt.height,0,Ct,Vt,Rt.data)}else if(E.isDataArrayTexture)if(te){if(be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Xt,dt.width,dt.height,dt.depth),z)if(E.layerUpdates.size>0){const J=qd(dt.width,dt.height,E.format,E.type);for(const rt of E.layerUpdates){const St=dt.data.subarray(rt*J/dt.data.BYTES_PER_ELEMENT,(rt+1)*J/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,dt.width,dt.height,1,Ct,Vt,St)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ct,Vt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,dt.width,dt.height,dt.depth,0,Ct,Vt,dt.data);else if(E.isData3DTexture)te?(be&&e.texStorage3D(i.TEXTURE_3D,yt,Xt,dt.width,dt.height,dt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ct,Vt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,dt.width,dt.height,dt.depth,0,Ct,Vt,dt.data);else if(E.isFramebufferTexture){if(be)if(te)e.texStorage2D(i.TEXTURE_2D,yt,Xt,dt.width,dt.height);else{let J=dt.width,rt=dt.height;for(let St=0;St<yt;St++)e.texImage2D(i.TEXTURE_2D,St,Xt,J,rt,0,Ct,Vt,null),J>>=1,rt>>=1}}else if(ae.length>0){if(te&&be){const J=Et(ae[0]);e.texStorage2D(i.TEXTURE_2D,yt,Xt,J.width,J.height)}for(let J=0,rt=ae.length;J<rt;J++)Rt=ae[J],te?z&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Ct,Vt,Rt):e.texImage2D(i.TEXTURE_2D,J,Xt,Ct,Vt,Rt);E.generateMipmaps=!1}else if(te){if(be){const J=Et(dt);e.texStorage2D(i.TEXTURE_2D,yt,Xt,J.width,J.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Vt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Xt,Ct,Vt,dt);m(E)&&f(nt),Lt.__version=it.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function q(L,E,X){if(E.image.length!==6)return;const nt=ht(L,E),ct=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+X);const it=n.get(ct);if(ct.version!==it.__version||nt===!0){e.activeTexture(i.TEXTURE0+X);const Lt=ce.getPrimaries(ce.workingColorSpace),_t=E.colorSpace===Ji?null:ce.getPrimaries(E.colorSpace),Tt=E.colorSpace===Ji||Lt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const oe=E.isCompressedTexture||E.image[0].isCompressedTexture,dt=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let rt=0;rt<6;rt++)!oe&&!dt?Ct[rt]=v(E.image[rt],!0,s.maxCubemapSize):Ct[rt]=dt?E.image[rt].image:E.image[rt],Ct[rt]=Gt(E,Ct[rt]);const Vt=Ct[0],Xt=o.convert(E.format,E.colorSpace),Rt=o.convert(E.type),ae=_(E.internalFormat,Xt,Rt,E.colorSpace),te=E.isVideoTexture!==!0,be=it.__version===void 0||nt===!0,z=ct.dataReady;let yt=T(E,Vt);et(i.TEXTURE_CUBE_MAP,E);let J;if(oe){te&&be&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,ae,Vt.width,Vt.height);for(let rt=0;rt<6;rt++){J=Ct[rt].mipmaps;for(let St=0;St<J.length;St++){const Mt=J[St];E.format!==Qn?Xt!==null?te?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,0,0,Mt.width,Mt.height,Xt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,ae,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,0,0,Mt.width,Mt.height,Xt,Rt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,ae,Mt.width,Mt.height,0,Xt,Rt,Mt.data)}}}else{if(J=E.mipmaps,te&&be){J.length>0&&yt++;const rt=Et(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,ae,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(dt){te?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ct[rt].width,Ct[rt].height,Xt,Rt,Ct[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ae,Ct[rt].width,Ct[rt].height,0,Xt,Rt,Ct[rt].data);for(let St=0;St<J.length;St++){const jt=J[St].image[rt].image;te?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,0,0,jt.width,jt.height,Xt,Rt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,ae,jt.width,jt.height,0,Xt,Rt,jt.data)}}else{te?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Xt,Rt,Ct[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ae,Xt,Rt,Ct[rt]);for(let St=0;St<J.length;St++){const Mt=J[St];te?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,0,0,Xt,Rt,Mt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,ae,Xt,Rt,Mt.image[rt])}}}m(E)&&f(i.TEXTURE_CUBE_MAP),it.__version=ct.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function at(L,E,X,nt,ct,it){const Lt=o.convert(X.format,X.colorSpace),_t=o.convert(X.type),Tt=_(X.internalFormat,Lt,_t,X.colorSpace),oe=n.get(E),dt=n.get(X);if(dt.__renderTarget=E,!oe.__hasExternalTextures){const Ct=Math.max(1,E.width>>it),Vt=Math.max(1,E.height>>it);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,it,Tt,Ct,Vt,E.depth,0,Lt,_t,null):e.texImage2D(ct,it,Tt,Ct,Vt,0,Lt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),bt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,ct,dt.__webglTexture,0,lt(E)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,ct,dt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(L,E,X){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){const nt=E.depthTexture,ct=nt&&nt.isDepthTexture?nt.type:null,it=y(E.stencilBuffer,ct),Lt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=lt(E);bt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,it,E.width,E.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,it,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,it,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,L)}else{const nt=E.textures;for(let ct=0;ct<nt.length;ct++){const it=nt[ct],Lt=o.convert(it.format,it.colorSpace),_t=o.convert(it.type),Tt=_(it.internalFormat,Lt,_t,it.colorSpace),oe=lt(E);X&&bt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Tt,E.width,E.height):bt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Tt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(E.depthTexture);nt.__renderTarget=E,(!nt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);const ct=nt.__webglTexture,it=lt(E);if(E.depthTexture.format===po)bt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(E.depthTexture.format===bo)bt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function At(L){const E=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const nt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),nt){const ct=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,nt.removeEventListener("dispose",ct)};nt.addEventListener("dispose",ct),E.__depthDisposeCallback=ct}E.__boundDepthTexture=nt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");vt(E.__webglFramebuffer,L)}else if(X){E.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[nt]),E.__webglDepthbuffer[nt]===void 0)E.__webglDepthbuffer[nt]=i.createRenderbuffer(),tt(E.__webglDepthbuffer[nt],L,!1);else{const ct=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=E.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),tt(E.__webglDepthbuffer,L,!1);else{const nt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(L,E,X){const nt=n.get(L);E!==void 0&&at(nt.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&At(L)}function Yt(L){const E=L.texture,X=n.get(L),nt=n.get(E);L.addEventListener("dispose",R);const ct=L.textures,it=L.isWebGLCubeRenderTarget===!0,Lt=ct.length>1;if(Lt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=E.version,r.memory.textures++),it){X.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[_t]=[];for(let Tt=0;Tt<E.mipmaps.length;Tt++)X.__webglFramebuffer[_t][Tt]=i.createFramebuffer()}else X.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let _t=0;_t<E.mipmaps.length;_t++)X.__webglFramebuffer[_t]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let _t=0,Tt=ct.length;_t<Tt;_t++){const oe=n.get(ct[_t]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),r.memory.textures++)}if(L.samples>0&&bt(L)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let _t=0;_t<ct.length;_t++){const Tt=ct[_t];X.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[_t]);const oe=o.convert(Tt.format,Tt.colorSpace),dt=o.convert(Tt.type),Ct=_(Tt.internalFormat,oe,dt,Tt.colorSpace,L.isXRRenderTarget===!0),Vt=lt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Ct,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,X.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),et(i.TEXTURE_CUBE_MAP,E);for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0)for(let Tt=0;Tt<E.mipmaps.length;Tt++)at(X.__webglFramebuffer[_t][Tt],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt);else at(X.__webglFramebuffer[_t],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(E)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let _t=0,Tt=ct.length;_t<Tt;_t++){const oe=ct[_t],dt=n.get(oe);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),et(i.TEXTURE_2D,oe),at(X.__webglFramebuffer,L,oe,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),m(oe)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_t=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,nt.__webglTexture),et(_t,E),E.mipmaps&&E.mipmaps.length>0)for(let Tt=0;Tt<E.mipmaps.length;Tt++)at(X.__webglFramebuffer[Tt],L,E,i.COLOR_ATTACHMENT0,_t,Tt);else at(X.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,_t,0);m(E)&&f(_t),e.unbindTexture()}L.depthBuffer&&At(L)}function ot(L){const E=L.textures;for(let X=0,nt=E.length;X<nt;X++){const ct=E[X];if(m(ct)){const it=x(L),Lt=n.get(ct).__webglTexture;e.bindTexture(it,Lt),f(it),e.unbindTexture()}}}const K=[],D=[];function Pt(L){if(L.samples>0){if(bt(L)===!1){const E=L.textures,X=L.width,nt=L.height;let ct=i.COLOR_BUFFER_BIT;const it=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(L),_t=E.length>1;if(_t)for(let Tt=0;Tt<E.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Tt=0;Tt<E.length;Tt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);const oe=n.get(E[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,X,nt,0,0,X,nt,ct,i.NEAREST),c===!0&&(K.length=0,D.length=0,K.push(i.COLOR_ATTACHMENT0+Tt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(K.push(it),D.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Tt=0;Tt<E.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);const oe=n.get(E[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function lt(L){return Math.min(s.maxSamples,L.samples)}function bt(L){const E=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ut(L){const E=r.render.frame;h.get(L)!==E&&(h.set(L,E),L.update())}function Gt(L,E){const X=L.colorSpace,nt=L.format,ct=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Io&&X!==Ji&&(ce.getTransfer(X)===_e?(nt!==Qn||ct!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function Et(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=U,this.setTexture3D=k,this.setTextureCube=N,this.rebindTextures=It,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=at,this.useMultisampledRTT=bt}function c1(i,t){function e(n,s=Ji){let o;const r=ce.getTransfer(s);if(n===Oi)return i.UNSIGNED_BYTE;if(n===ou)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ru)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lp)return i.BYTE;if(n===Ip)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===su)return i.INT;if(n===Cs)return i.UNSIGNED_INT;if(n===ui)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===Up)return i.ALPHA;if(n===Np)return i.RGB;if(n===Qn)return i.RGBA;if(n===Fp)return i.LUMINANCE;if(n===Op)return i.LUMINANCE_ALPHA;if(n===po)return i.DEPTH_COMPONENT;if(n===bo)return i.DEPTH_STENCIL;if(n===au)return i.RED;if(n===cu)return i.RED_INTEGER;if(n===kp)return i.RG;if(n===lu)return i.RG_INTEGER;if(n===hu)return i.RGBA_INTEGER;if(n===Ba||n===Ha||n===Ga||n===Va)if(r===_e)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ba)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ba)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ha)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sh||n===oh||n===rh||n===ah)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===sh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ah)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ch||n===lh||n===hh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ch||n===lh)return r===_e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===hh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uh||n===dh||n===fh||n===ph||n===mh||n===gh||n===vh||n===xh||n===_h||n===yh||n===Mh||n===wh||n===Sh||n===bh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===uh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ph)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_h)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wa||n===Eh||n===Th)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Wa)return r===_e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Th)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zp||n===Ah||n===Ch||n===Rh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Wa)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Ah)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ch)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===So?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class l1 extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pt extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h1={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(h1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const u1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class f1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new rn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ye({vertexShader:u1,fragmentShader:d1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new Re(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p1 extends Do{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const v=new f1,m=e.getContextAttributes();let f=null,x=null;const _=[],y=[],T=new st;let w=null;const R=new wn;R.viewport=new pe;const C=new wn;C.viewport=new pe;const S=[R,C],M=new l1;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let q=_[$];return q===void 0&&(q=new cl,_[$]=q),q.getTargetRaySpace()},this.getControllerGrip=function($){let q=_[$];return q===void 0&&(q=new cl,_[$]=q),q.getGripSpace()},this.getHand=function($){let q=_[$];return q===void 0&&(q=new cl,_[$]=q),q.getHandSpace()};function O($){const q=y.indexOf($.inputSource);if(q===-1)return;const at=_[q];at!==void 0&&(at.update($.inputSource,$.frame,l||r),at.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Z);for(let $=0;$<_.length;$++){const q=y[$];q!==null&&(y[$]=null,_[$].disconnect(q))}P=null,F=null,v.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,x=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Ln(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,at=null,tt=null;m.depth&&(tt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=m.stencil?bo:po,at=m.stencil?So:Cs);const vt={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Ln(d.textureWidth,d.textureHeight,{format:Qn,type:Oi,depthTexture:new Jp(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),ht.setContext(s),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z($){for(let q=0;q<$.removed.length;q++){const at=$.removed[q],tt=y.indexOf(at);tt>=0&&(y[tt]=null,_[tt].disconnect(at))}for(let q=0;q<$.added.length;q++){const at=$.added[q];let tt=y.indexOf(at);if(tt===-1){for(let At=0;At<_.length;At++)if(At>=y.length){y.push(at),tt=At;break}else if(y[At]===null){y[At]=at,tt=At;break}if(tt===-1)break}const vt=_[tt];vt&&vt.connect(at)}}const U=new b,k=new b;function N($,q,at){U.setFromMatrixPosition(q.matrixWorld),k.setFromMatrixPosition(at.matrixWorld);const tt=U.distanceTo(k),vt=q.projectionMatrix.elements,At=at.projectionMatrix.elements,It=vt[14]/(vt[10]-1),Yt=vt[14]/(vt[10]+1),ot=(vt[9]+1)/vt[5],K=(vt[9]-1)/vt[5],D=(vt[8]-1)/vt[0],Pt=(At[8]+1)/At[0],lt=It*D,bt=It*Pt,ut=tt/(-D+Pt),Gt=ut*-D;if(q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Gt),$.translateZ(ut),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),vt[10]===-1)$.projectionMatrix.copy(q.projectionMatrix),$.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Et=It+ut,L=Yt+ut,E=lt-Gt,X=bt+(tt-Gt),nt=ot*Yt/L*Et,ct=K*Yt/L*Et;$.projectionMatrix.makePerspective(E,X,nt,ct,Et,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function G($,q){q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let q=$.near,at=$.far;v.texture!==null&&(v.depthNear>0&&(q=v.depthNear),v.depthFar>0&&(at=v.depthFar)),M.near=C.near=R.near=q,M.far=C.far=R.far=at,(P!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,F=M.far),R.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,M.layers.mask=R.layers.mask|C.layers.mask;const tt=$.parent,vt=M.cameras;G(M,tt);for(let At=0;At<vt.length;At++)G(vt[At],tt);vt.length===2?N(M,R,C):M.projectionMatrix.copy(R.projectionMatrix),W($,M,tt)};function W($,q,at){at===null?$.matrix.copy(q.matrixWorld):($.matrix.copy(at.matrixWorld),$.matrix.invert(),$.matrix.multiply(q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(q.projectionMatrix),$.projectionMatrixInverse.copy(q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=wr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Q=null;function et($,q){if(h=q.getViewerPose(l||r),g=q,h!==null){const at=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let tt=!1;at.length!==M.cameras.length&&(M.cameras.length=0,tt=!0);for(let At=0;At<at.length;At++){const It=at[At];let Yt=null;if(p!==null)Yt=p.getViewport(It);else{const K=u.getViewSubImage(d,It);Yt=K.viewport,At===0&&(t.setRenderTargetTextures(x,K.colorTexture,d.ignoreDepthValues?void 0:K.depthStencilTexture),t.setRenderTarget(x))}let ot=S[At];ot===void 0&&(ot=new wn,ot.layers.enable(At),ot.viewport=new pe,S[At]=ot),ot.matrix.fromArray(It.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(It.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),At===0&&(M.matrix.copy(ot.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),tt===!0&&M.cameras.push(ot)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")){const At=u.getDepthInformation(at[0]);At&&At.isValid&&At.texture&&v.init(t,At,s.renderState)}}for(let at=0;at<_.length;at++){const tt=y[at],vt=_[at];tt!==null&&vt!==void 0&&vt.update(tt,q,l||r)}Q&&Q($,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const ht=new Kp;ht.setAnimationLoop(et),this.setAnimationLoop=function($){Q=$},this.dispose=function(){}}}const gs=new vi,m1=new se;function g1(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Yp(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),u(m,f)):f.isMeshPhongMaterial?(o(m,f),h(m,f)):f.isMeshStandardMaterial?(o(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(o(m,f),g(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),v(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,x,_):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===fn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===fn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f),_=x.envMap,y=x.envMapRotation;_&&(m.envMap.value=_,gs.copy(y),gs.x*=-1,gs.y*=-1,gs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.envMapRotation.value.setFromMatrix4(m1.makeRotationFromEuler(gs)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,x,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function v1(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,_){const y=_.program;n.uniformBlockBinding(x,y)}function l(x,_){let y=s[x.id];y===void 0&&(g(x),y=h(x),s[x.id]=y,x.addEventListener("dispose",m));const T=_.program;n.updateUBOMapping(x,T);const w=t.render.frame;o[x.id]!==w&&(d(x),o[x.id]=w)}function h(x){const _=u();x.__bindingPointIndex=_;const y=i.createBuffer(),T=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function u(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=s[x.id],y=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,R=y.length;w<R;w++){const C=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,M=C.length;S<M;S++){const P=C[S];if(p(P,w,S,T)===!0){const F=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let Z=0;Z<O.length;Z++){const U=O[Z],k=v(U);typeof U=="number"||typeof U=="boolean"?(P.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,F+V,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=0,P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=0,P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=0):(U.toArray(P.__data,V),V+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,_,y,T){const w=x.value,R=_+"_"+y;if(T[R]===void 0)return typeof w=="number"||typeof w=="boolean"?T[R]=w:T[R]=w.clone(),!0;{const C=T[R];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[R]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(x){const _=x.uniforms;let y=0;const T=16;for(let R=0,C=_.length;R<C;R++){const S=Array.isArray(_[R])?_[R]:[_[R]];for(let M=0,P=S.length;M<P;M++){const F=S[M],O=Array.isArray(F.value)?F.value:[F.value];for(let V=0,Z=O.length;V<Z;V++){const U=O[V],k=v(U),N=y%T,G=N%k.boundary,W=N+G;y+=G,W!==0&&T-W<k.storage&&(y+=T-W),F.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=k.storage}}}const w=y%T;return w>0&&(y+=T-w),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const y=r.indexOf(_.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete o[_.id]}function f(){for(const x in s)i.deleteBuffer(s[x]);r=[],s={},o={}}return{bind:c,update:l,dispose:f}}class x1{constructor(t={}){const{canvas:e=ag(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const x=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ie,this.toneMapping=ns,this.toneMappingExposure=1;const y=this;let T=!1,w=0,R=0,C=null,S=-1,M=null;const P=new pe,F=new pe;let O=null;const V=new gt(0);let Z=0,U=e.width,k=e.height,N=1,G=null,W=null;const Q=new pe(0,0,U,k),et=new pe(0,0,U,k);let ht=!1;const $=new fu;let q=!1,at=!1;const tt=new se,vt=new se,At=new b,It=new pe,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function K(){return C===null?N:1}let D=n;function Pt(A,B){return e.getContext(A,B)}try{const A={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nu}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),D===null){const B="webgl2";if(D=Pt(B,A),D===null)throw Pt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let lt,bt,ut,Gt,Et,L,E,X,nt,ct,it,Lt,_t,Tt,oe,dt,Ct,Vt,Xt,Rt,ae,te,be,z;function yt(){lt=new S_(D),lt.init(),te=new c1(D,lt),bt=new v_(D,lt,t,te),ut=new o1(D,lt),bt.reverseDepthBuffer&&d&&ut.buffers.depth.setReversed(!0),Gt=new T_(D),Et=new Wy,L=new a1(D,lt,ut,Et,bt,te,Gt),E=new __(y),X=new w_(y),nt=new Dg(D),be=new m_(D,nt),ct=new b_(D,nt,Gt,be),it=new C_(D,ct,nt,Gt),Xt=new A_(D,bt,L),dt=new x_(Et),Lt=new Vy(y,E,X,lt,bt,be,dt),_t=new g1(y,Et),Tt=new qy,oe=new Jy(lt),Vt=new p_(y,E,X,ut,it,p,c),Ct=new i1(y,it,bt),z=new v1(D,Gt,bt,ut),Rt=new g_(D,lt,Gt),ae=new E_(D,lt,Gt),Gt.programs=Lt.programs,y.capabilities=bt,y.extensions=lt,y.properties=Et,y.renderLists=Tt,y.shadowMap=Ct,y.state=ut,y.info=Gt}yt();const J=new p1(y,D);this.xr=J,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=lt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=lt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(A){A!==void 0&&(N=A,this.setSize(U,k,!1))},this.getSize=function(A){return A.set(U,k)},this.setSize=function(A,B,Y=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,k=B,e.width=Math.floor(A*N),e.height=Math.floor(B*N),Y===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(U*N,k*N).floor()},this.setDrawingBufferSize=function(A,B,Y){U=A,k=B,N=Y,e.width=Math.floor(A*Y),e.height=Math.floor(B*Y),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,B,Y,j){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,B,Y,j),ut.viewport(P.copy(Q).multiplyScalar(N).round())},this.getScissor=function(A){return A.copy(et)},this.setScissor=function(A,B,Y,j){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,B,Y,j),ut.scissor(F.copy(et).multiplyScalar(N).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(A){ut.setScissorTest(ht=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){W=A},this.getClearColor=function(A){return A.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(A=!0,B=!0,Y=!0){let j=0;if(A){let H=!1;if(C!==null){const ft=C.texture.format;H=ft===hu||ft===lu||ft===cu}if(H){const ft=C.texture.type,wt=ft===Oi||ft===Cs||ft===Mr||ft===So||ft===ou||ft===ru,Dt=Vt.getClearColor(),Ut=Vt.getClearAlpha(),qt=Dt.r,Zt=Dt.g,Nt=Dt.b;wt?(g[0]=qt,g[1]=Zt,g[2]=Nt,g[3]=Ut,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=qt,v[1]=Zt,v[2]=Nt,v[3]=Ut,D.clearBufferiv(D.COLOR,0,v))}else j|=D.COLOR_BUFFER_BIT}B&&(j|=D.DEPTH_BUFFER_BIT),Y&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Tt.dispose(),oe.dispose(),Et.dispose(),E.dispose(),X.dispose(),it.dispose(),be.dispose(),z.dispose(),Lt.dispose(),J.dispose(),J.removeEventListener("sessionstart",Hu),J.removeEventListener("sessionend",Gu),hs.stop()};function rt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=Gt.autoReset,B=Ct.enabled,Y=Ct.autoUpdate,j=Ct.needsUpdate,H=Ct.type;yt(),Gt.autoReset=A,Ct.enabled=B,Ct.autoUpdate=Y,Ct.needsUpdate=j,Ct.type=H}function Mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function jt(A){const B=A.target;B.removeEventListener("dispose",jt),Ie(B)}function Ie(A){an(A),Et.remove(A)}function an(A){const B=Et.get(A).programs;B!==void 0&&(B.forEach(function(Y){Lt.releaseProgram(Y)}),A.isShaderMaterial&&Lt.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,Y,j,H,ft){B===null&&(B=Yt);const wt=H.isMesh&&H.matrixWorld.determinant()<0,Dt=am(A,B,Y,j,H);ut.setMaterial(j,wt);let Ut=Y.index,qt=1;if(j.wireframe===!0){if(Ut=ct.getWireframeAttribute(Y),Ut===void 0)return;qt=2}const Zt=Y.drawRange,Nt=Y.attributes.position;let le=Zt.start*qt,Ee=(Zt.start+Zt.count)*qt;ft!==null&&(le=Math.max(le,ft.start*qt),Ee=Math.min(Ee,(ft.start+ft.count)*qt)),Ut!==null?(le=Math.max(le,0),Ee=Math.min(Ee,Ut.count)):Nt!=null&&(le=Math.max(le,0),Ee=Math.min(Ee,Nt.count));const Ae=Ee-le;if(Ae<0||Ae===1/0)return;be.setup(H,j,Dt,Y,Ut);let yn,ue=Rt;if(Ut!==null&&(yn=nt.get(Ut),ue=ae,ue.setIndex(yn)),H.isMesh)j.wireframe===!0?(ut.setLineWidth(j.wireframeLinewidth*K()),ue.setMode(D.LINES)):ue.setMode(D.TRIANGLES);else if(H.isLine){let Ot=j.linewidth;Ot===void 0&&(Ot=1),ut.setLineWidth(Ot*K()),H.isLineSegments?ue.setMode(D.LINES):H.isLineLoop?ue.setMode(D.LINE_LOOP):ue.setMode(D.LINE_STRIP)}else H.isPoints?ue.setMode(D.POINTS):H.isSprite&&ue.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ue.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))ue.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ot=H._multiDrawStarts,Si=H._multiDrawCounts,de=H._multiDrawCount,Gn=Ut?nt.get(Ut).bytesPerElement:1,Us=Et.get(j).currentProgram.getUniforms();for(let Sn=0;Sn<de;Sn++)Us.setValue(D,"_gl_DrawID",Sn),ue.render(Ot[Sn]/Gn,Si[Sn])}else if(H.isInstancedMesh)ue.renderInstances(le,Ae,H.count);else if(Y.isInstancedBufferGeometry){const Ot=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Si=Math.min(Y.instanceCount,Ot);ue.renderInstances(le,Ae,Si)}else ue.render(le,Ae)};function xe(A,B,Y){A.transparent===!0&&A.side===me&&A.forceSinglePass===!1?(A.side=fn,A.needsUpdate=!0,Gr(A,B,Y),A.side=gi,A.needsUpdate=!0,Gr(A,B,Y),A.side=me):Gr(A,B,Y)}this.compile=function(A,B,Y=null){Y===null&&(Y=A),f=oe.get(Y),f.init(B),_.push(f),Y.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),A!==Y&&A.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights();const j=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ft=H.material;if(ft)if(Array.isArray(ft))for(let wt=0;wt<ft.length;wt++){const Dt=ft[wt];xe(Dt,Y,H),j.add(Dt)}else xe(ft,Y,H),j.add(ft)}),_.pop(),f=null,j},this.compileAsync=function(A,B,Y=null){const j=this.compile(A,B,Y);return new Promise(H=>{function ft(){if(j.forEach(function(wt){Et.get(wt).currentProgram.isReady()&&j.delete(wt)}),j.size===0){H(A);return}setTimeout(ft,10)}lt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Hn=null;function wi(A){Hn&&Hn(A)}function Hu(){hs.stop()}function Gu(){hs.start()}const hs=new Kp;hs.setAnimationLoop(wi),typeof self<"u"&&hs.setContext(self),this.setAnimationLoop=function(A){Hn=A,J.setAnimationLoop(A),A===null?hs.stop():hs.start()},J.addEventListener("sessionstart",Hu),J.addEventListener("sessionend",Gu),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(B),B=J.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,B,C),f=oe.get(A,_.length),f.init(B),_.push(f),vt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(vt),at=this.localClippingEnabled,q=dt.init(this.clippingPlanes,at),m=Tt.get(A,x.length),m.init(),x.push(m),J.enabled===!0&&J.isPresenting===!0){const ft=y.xr.getDepthSensingMesh();ft!==null&&Lc(ft,B,-1/0,y.sortObjects)}Lc(A,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(G,W),ot=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,ot&&Vt.addToRenderList(m,A),this.info.render.frame++,q===!0&&dt.beginShadows();const Y=f.state.shadowsArray;Ct.render(Y,A,B),q===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,H=m.transmissive;if(f.setupLights(),B.isArrayCamera){const ft=B.cameras;if(H.length>0)for(let wt=0,Dt=ft.length;wt<Dt;wt++){const Ut=ft[wt];Wu(j,H,A,Ut)}ot&&Vt.render(A);for(let wt=0,Dt=ft.length;wt<Dt;wt++){const Ut=ft[wt];Vu(m,A,Ut,Ut.viewport)}}else H.length>0&&Wu(j,H,A,B),ot&&Vt.render(A),Vu(m,A,B);C!==null&&(L.updateMultisampleRenderTarget(C),L.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(y,A,B),be.resetDefaultState(),S=-1,M=null,_.pop(),_.length>0?(f=_[_.length-1],q===!0&&dt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Lc(A,B,Y,j){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){j&&It.setFromMatrixPosition(A.matrixWorld).applyMatrix4(vt);const wt=it.update(A),Dt=A.material;Dt.visible&&m.push(A,wt,Dt,Y,It.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$.intersectsObject(A))){const wt=it.update(A),Dt=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),It.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),It.copy(wt.boundingSphere.center)),It.applyMatrix4(A.matrixWorld).applyMatrix4(vt)),Array.isArray(Dt)){const Ut=wt.groups;for(let qt=0,Zt=Ut.length;qt<Zt;qt++){const Nt=Ut[qt],le=Dt[Nt.materialIndex];le&&le.visible&&m.push(A,wt,le,Y,It.z,Nt)}}else Dt.visible&&m.push(A,wt,Dt,Y,It.z,null)}}const ft=A.children;for(let wt=0,Dt=ft.length;wt<Dt;wt++)Lc(ft[wt],B,Y,j)}function Vu(A,B,Y,j){const H=A.opaque,ft=A.transmissive,wt=A.transparent;f.setupLightsView(Y),q===!0&&dt.setGlobalState(y.clippingPlanes,Y),j&&ut.viewport(P.copy(j)),H.length>0&&Hr(H,B,Y),ft.length>0&&Hr(ft,B,Y),wt.length>0&&Hr(wt,B,Y),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Wu(A,B,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[j.id]===void 0&&(f.state.transmissionRenderTarget[j.id]=new Ln(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?pi:Oi,minFilter:Es,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const ft=f.state.transmissionRenderTarget[j.id],wt=j.viewport||P;ft.setSize(wt.z,wt.w);const Dt=y.getRenderTarget();y.setRenderTarget(ft),y.getClearColor(V),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),ot&&Vt.render(Y);const Ut=y.toneMapping;y.toneMapping=ns;const qt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),f.setupLightsView(j),q===!0&&dt.setGlobalState(y.clippingPlanes,j),Hr(A,Y,j),L.updateMultisampleRenderTarget(ft),L.updateRenderTargetMipmap(ft),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Nt=0,le=B.length;Nt<le;Nt++){const Ee=B[Nt],Ae=Ee.object,yn=Ee.geometry,ue=Ee.material,Ot=Ee.group;if(ue.side===me&&Ae.layers.test(j.layers)){const Si=ue.side;ue.side=fn,ue.needsUpdate=!0,Xu(Ae,Y,j,yn,ue,Ot),ue.side=Si,ue.needsUpdate=!0,Zt=!0}}Zt===!0&&(L.updateMultisampleRenderTarget(ft),L.updateRenderTargetMipmap(ft))}y.setRenderTarget(Dt),y.setClearColor(V,Z),qt!==void 0&&(j.viewport=qt),y.toneMapping=Ut}function Hr(A,B,Y){const j=B.isScene===!0?B.overrideMaterial:null;for(let H=0,ft=A.length;H<ft;H++){const wt=A[H],Dt=wt.object,Ut=wt.geometry,qt=j===null?wt.material:j,Zt=wt.group;Dt.layers.test(Y.layers)&&Xu(Dt,B,Y,Ut,qt,Zt)}}function Xu(A,B,Y,j,H,ft){A.onBeforeRender(y,B,Y,j,H,ft),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(y,B,Y,j,A,ft),H.transparent===!0&&H.side===me&&H.forceSinglePass===!1?(H.side=fn,H.needsUpdate=!0,y.renderBufferDirect(Y,B,j,H,A,ft),H.side=gi,H.needsUpdate=!0,y.renderBufferDirect(Y,B,j,H,A,ft),H.side=me):y.renderBufferDirect(Y,B,j,H,A,ft),A.onAfterRender(y,B,Y,j,H,ft)}function Gr(A,B,Y){B.isScene!==!0&&(B=Yt);const j=Et.get(A),H=f.state.lights,ft=f.state.shadowsArray,wt=H.state.version,Dt=Lt.getParameters(A,H.state,ft,B,Y),Ut=Lt.getProgramCacheKey(Dt);let qt=j.programs;j.environment=A.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(A.isMeshStandardMaterial?X:E).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,qt===void 0&&(A.addEventListener("dispose",jt),qt=new Map,j.programs=qt);let Zt=qt.get(Ut);if(Zt!==void 0){if(j.currentProgram===Zt&&j.lightsStateVersion===wt)return $u(A,Dt),Zt}else Dt.uniforms=Lt.getUniforms(A),A.onBeforeCompile(Dt,y),Zt=Lt.acquireProgram(Dt,Ut),qt.set(Ut,Zt),j.uniforms=Dt.uniforms;const Nt=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Nt.clippingPlanes=dt.uniform),$u(A,Dt),j.needsLights=lm(A),j.lightsStateVersion=wt,j.needsLights&&(Nt.ambientLightColor.value=H.state.ambient,Nt.lightProbe.value=H.state.probe,Nt.directionalLights.value=H.state.directional,Nt.directionalLightShadows.value=H.state.directionalShadow,Nt.spotLights.value=H.state.spot,Nt.spotLightShadows.value=H.state.spotShadow,Nt.rectAreaLights.value=H.state.rectArea,Nt.ltc_1.value=H.state.rectAreaLTC1,Nt.ltc_2.value=H.state.rectAreaLTC2,Nt.pointLights.value=H.state.point,Nt.pointLightShadows.value=H.state.pointShadow,Nt.hemisphereLights.value=H.state.hemi,Nt.directionalShadowMap.value=H.state.directionalShadowMap,Nt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Nt.spotShadowMap.value=H.state.spotShadowMap,Nt.spotLightMatrix.value=H.state.spotLightMatrix,Nt.spotLightMap.value=H.state.spotLightMap,Nt.pointShadowMap.value=H.state.pointShadowMap,Nt.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=Zt,j.uniformsList=null,Zt}function qu(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Xa.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function $u(A,B){const Y=Et.get(A);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function am(A,B,Y,j,H){B.isScene!==!0&&(B=Yt),L.resetTextureUnits();const ft=B.fog,wt=j.isMeshStandardMaterial?B.environment:null,Dt=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Io,Ut=(j.isMeshStandardMaterial?X:E).get(j.envMap||wt),qt=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Zt=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Nt=!!Y.morphAttributes.position,le=!!Y.morphAttributes.normal,Ee=!!Y.morphAttributes.color;let Ae=ns;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ae=y.toneMapping);const yn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ue=yn!==void 0?yn.length:0,Ot=Et.get(j),Si=f.state.lights;if(q===!0&&(at===!0||A!==M)){const Un=A===M&&j.id===S;dt.setState(j,A,Un)}let de=!1;j.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Si.state.version||Ot.outputColorSpace!==Dt||H.isBatchedMesh&&Ot.batching===!1||!H.isBatchedMesh&&Ot.batching===!0||H.isBatchedMesh&&Ot.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ot.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ot.instancing===!1||!H.isInstancedMesh&&Ot.instancing===!0||H.isSkinnedMesh&&Ot.skinning===!1||!H.isSkinnedMesh&&Ot.skinning===!0||H.isInstancedMesh&&Ot.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ot.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ot.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ot.instancingMorph===!1&&H.morphTexture!==null||Ot.envMap!==Ut||j.fog===!0&&Ot.fog!==ft||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==dt.numPlanes||Ot.numIntersection!==dt.numIntersection)||Ot.vertexAlphas!==qt||Ot.vertexTangents!==Zt||Ot.morphTargets!==Nt||Ot.morphNormals!==le||Ot.morphColors!==Ee||Ot.toneMapping!==Ae||Ot.morphTargetsCount!==ue)&&(de=!0):(de=!0,Ot.__version=j.version);let Gn=Ot.currentProgram;de===!0&&(Gn=Gr(j,B,H));let Us=!1,Sn=!1,Fo=!1;const Ce=Gn.getUniforms(),si=Ot.uniforms;if(ut.useProgram(Gn.program)&&(Us=!0,Sn=!0,Fo=!0),j.id!==S&&(S=j.id,Sn=!0),Us||M!==A){ut.buffers.depth.getReversed()?(tt.copy(A.projectionMatrix),lg(tt),hg(tt),Ce.setValue(D,"projectionMatrix",tt)):Ce.setValue(D,"projectionMatrix",A.projectionMatrix),Ce.setValue(D,"viewMatrix",A.matrixWorldInverse);const Hi=Ce.map.cameraPosition;Hi!==void 0&&Hi.setValue(D,At.setFromMatrixPosition(A.matrixWorld)),bt.logarithmicDepthBuffer&&Ce.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ce.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Sn=!0,Fo=!0)}if(H.isSkinnedMesh){Ce.setOptional(D,H,"bindMatrix"),Ce.setOptional(D,H,"bindMatrixInverse");const Un=H.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Ce.setValue(D,"boneTexture",Un.boneTexture,L))}H.isBatchedMesh&&(Ce.setOptional(D,H,"batchingTexture"),Ce.setValue(D,"batchingTexture",H._matricesTexture,L),Ce.setOptional(D,H,"batchingIdTexture"),Ce.setValue(D,"batchingIdTexture",H._indirectTexture,L),Ce.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&Ce.setValue(D,"batchingColorTexture",H._colorsTexture,L));const Oo=Y.morphAttributes;if((Oo.position!==void 0||Oo.normal!==void 0||Oo.color!==void 0)&&Xt.update(H,Y,Gn),(Sn||Ot.receiveShadow!==H.receiveShadow)&&(Ot.receiveShadow=H.receiveShadow,Ce.setValue(D,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(si.envMap.value=Ut,si.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&B.environment!==null&&(si.envMapIntensity.value=B.environmentIntensity),Sn&&(Ce.setValue(D,"toneMappingExposure",y.toneMappingExposure),Ot.needsLights&&cm(si,Fo),ft&&j.fog===!0&&_t.refreshFogUniforms(si,ft),_t.refreshMaterialUniforms(si,j,N,k,f.state.transmissionRenderTarget[A.id]),Xa.upload(D,qu(Ot),si,L)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Xa.upload(D,qu(Ot),si,L),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ce.setValue(D,"center",H.center),Ce.setValue(D,"modelViewMatrix",H.modelViewMatrix),Ce.setValue(D,"normalMatrix",H.normalMatrix),Ce.setValue(D,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Un=j.uniformsGroups;for(let Hi=0,Gi=Un.length;Hi<Gi;Hi++){const Yu=Un[Hi];z.update(Yu,Gn),z.bind(Yu,Gn)}}return Gn}function cm(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function lm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,B,Y){Et.get(A.texture).__webglTexture=B,Et.get(A.depthTexture).__webglTexture=Y;const j=Et.get(A);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Y===void 0,j.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){const Y=Et.get(A);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,Y=0){C=A,w=B,R=Y;let j=!0,H=null,ft=!1,wt=!1;if(A){const Ut=Et.get(A);if(Ut.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(Ut.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Ut.__hasExternalTextures)L.rebindTextures(A,Et.get(A.texture).__webglTexture,Et.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Nt=A.depthTexture;if(Ut.__boundDepthTexture!==Nt){if(Nt!==null&&Et.has(Nt)&&(A.width!==Nt.image.width||A.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const qt=A.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(wt=!0);const Zt=Et.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Zt[B])?H=Zt[B][Y]:H=Zt[B],ft=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?H=Et.get(A).__webglMultisampledFramebuffer:Array.isArray(Zt)?H=Zt[Y]:H=Zt,P.copy(A.viewport),F.copy(A.scissor),O=A.scissorTest}else P.copy(Q).multiplyScalar(N).floor(),F.copy(et).multiplyScalar(N).floor(),O=ht;if(ut.bindFramebuffer(D.FRAMEBUFFER,H)&&j&&ut.drawBuffers(A,H),ut.viewport(P),ut.scissor(F),ut.setScissorTest(O),ft){const Ut=Et.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ut.__webglTexture,Y)}else if(wt){const Ut=Et.get(A.texture),qt=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ut.__webglTexture,Y||0,qt)}S=-1},this.readRenderTargetPixels=function(A,B,Y,j,H,ft,wt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){ut.bindFramebuffer(D.FRAMEBUFFER,Dt);try{const Ut=A.texture,qt=Ut.format,Zt=Ut.type;if(!bt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-j&&Y>=0&&Y<=A.height-H&&D.readPixels(B,Y,j,H,te.convert(qt),te.convert(Zt),ft)}finally{const Ut=C!==null?Et.get(C).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(A,B,Y,j,H,ft,wt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){const Ut=A.texture,qt=Ut.format,Zt=Ut.type;if(!bt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-j&&Y>=0&&Y<=A.height-H){ut.bindFramebuffer(D.FRAMEBUFFER,Dt);const Nt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Nt),D.bufferData(D.PIXEL_PACK_BUFFER,ft.byteLength,D.STREAM_READ),D.readPixels(B,Y,j,H,te.convert(qt),te.convert(Zt),0);const le=C!==null?Et.get(C).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,le);const Ee=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await cg(D,Ee,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Nt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ft),D.deleteBuffer(Nt),D.deleteSync(Ee),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,Y=0){A.isTexture!==!0&&(rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);const j=Math.pow(2,-Y),H=Math.floor(A.image.width*j),ft=Math.floor(A.image.height*j),wt=B!==null?B.x:0,Dt=B!==null?B.y:0;L.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,wt,Dt,H,ft),ut.unbindTexture()},this.copyTextureToTexture=function(A,B,Y=null,j=null,H=0){A.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1],B=arguments[2],H=arguments[3]||0,Y=null);let ft,wt,Dt,Ut,qt,Zt,Nt,le,Ee;const Ae=A.isCompressedTexture?A.mipmaps[H]:A.image;Y!==null?(ft=Y.max.x-Y.min.x,wt=Y.max.y-Y.min.y,Dt=Y.isBox3?Y.max.z-Y.min.z:1,Ut=Y.min.x,qt=Y.min.y,Zt=Y.isBox3?Y.min.z:0):(ft=Ae.width,wt=Ae.height,Dt=Ae.depth||1,Ut=0,qt=0,Zt=0),j!==null?(Nt=j.x,le=j.y,Ee=j.z):(Nt=0,le=0,Ee=0);const yn=te.convert(B.format),ue=te.convert(B.type);let Ot;B.isData3DTexture?(L.setTexture3D(B,0),Ot=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(L.setTexture2DArray(B,0),Ot=D.TEXTURE_2D_ARRAY):(L.setTexture2D(B,0),Ot=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const Si=D.getParameter(D.UNPACK_ROW_LENGTH),de=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Gn=D.getParameter(D.UNPACK_SKIP_PIXELS),Us=D.getParameter(D.UNPACK_SKIP_ROWS),Sn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ut),D.pixelStorei(D.UNPACK_SKIP_ROWS,qt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Zt);const Fo=A.isDataArrayTexture||A.isData3DTexture,Ce=B.isDataArrayTexture||B.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const si=Et.get(A),Oo=Et.get(B),Un=Et.get(si.__renderTarget),Hi=Et.get(Oo.__renderTarget);ut.bindFramebuffer(D.READ_FRAMEBUFFER,Un.__webglFramebuffer),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Gi=0;Gi<Dt;Gi++)Fo&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.get(A).__webglTexture,H,Zt+Gi),A.isDepthTexture?(Ce&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.get(B).__webglTexture,H,Ee+Gi),D.blitFramebuffer(Ut,qt,ft,wt,Nt,le,ft,wt,D.DEPTH_BUFFER_BIT,D.NEAREST)):Ce?D.copyTexSubImage3D(Ot,H,Nt,le,Ee+Gi,Ut,qt,ft,wt):D.copyTexSubImage2D(Ot,H,Nt,le,Ee+Gi,Ut,qt,ft,wt);ut.bindFramebuffer(D.READ_FRAMEBUFFER,null),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ce?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Ot,H,Nt,le,Ee,ft,wt,Dt,yn,ue,Ae.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Ot,H,Nt,le,Ee,ft,wt,Dt,yn,Ae.data):D.texSubImage3D(Ot,H,Nt,le,Ee,ft,wt,Dt,yn,ue,Ae):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,H,Nt,le,ft,wt,yn,ue,Ae.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,H,Nt,le,Ae.width,Ae.height,yn,Ae.data):D.texSubImage2D(D.TEXTURE_2D,H,Nt,le,ft,wt,yn,ue,Ae);D.pixelStorei(D.UNPACK_ROW_LENGTH,Si),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Gn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Us),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Sn),H===0&&B.generateMipmaps&&D.generateMipmap(Ot),ut.unbindTexture()},this.copyTextureToTexture3D=function(A,B,Y=null,j=null,H=0){return A.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,j=arguments[1]||null,A=arguments[2],B=arguments[3],H=arguments[4]||0),rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,B,Y,j,H)},this.initRenderTarget=function(A){Et.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),ut.unbindTexture()},this.resetState=function(){w=0,R=0,C=null,ut.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}class gu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new gt(t),this.near=e,this.far=n}clone(){return new gu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class i0 extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class _1{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ph,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new b;class Qa{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Kn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),o=ye(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ir extends Bi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let js;const Xo=new b,Zs=new b,Ks=new b,Js=new st,qo=new st,s0=new se,ua=new b,$o=new b,da=new b,$d=new st,ll=new st,Yd=new st;class xc extends Me{constructor(t=new Ir){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new ge;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _1(e,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new Qa(n,3,0,!1)),js.setAttribute("uv",new Qa(n,2,3,!1))}this.geometry=js,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),s0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-Ks.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;fa(ua.set(-.5,-.5,0),Ks,r,Zs,s,o),fa($o.set(.5,-.5,0),Ks,r,Zs,s,o),fa(da.set(.5,.5,0),Ks,r,Zs,s,o),$d.set(0,0),ll.set(1,0),Yd.set(1,1);let a=t.ray.intersectTriangle(ua,$o,da,!1,Xo);if(a===null&&(fa($o.set(-.5,.5,0),Ks,r,Zs,s,o),ll.set(0,1),a=t.ray.intersectTriangle(ua,da,$o,!1,Xo),a===null))return;const c=t.ray.origin.distanceTo(Xo);c<t.near||c>t.far||e.push({distance:c,point:Xo.clone(),uv:zn.getInterpolation(Xo,ua,$o,da,$d,ll,Yd,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function fa(i,t,e,n,s,o){Js.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(qo.x=o*Js.x-s*Js.y,qo.y=s*Js.x+o*Js.y):qo.copy(Js),i.copy(t),i.x+=qo.x,i.y+=qo.y,i.applyMatrix4(s0)}class y1 extends rn{constructor(t=null,e=1,n=1,s,o,r,a,c,l=Pn,h=Pn,u,d){super(null,r,a,c,l,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tc extends Be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Qs=new se,jd=new se,pa=[],Zd=new cs,M1=new se,Yo=new I,jo=new Ls;class os extends I{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new tc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,M1)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new cs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),Zd.copy(t.boundingBox).applyMatrix4(Qs),this.boundingBox.union(Zd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ls),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),jo.copy(t.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(jo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Yo.geometry=this.geometry,Yo.material=this.material,Yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jo.copy(this.boundingSphere),jo.applyMatrix4(n),t.ray.intersectsSphere(jo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Qs),jd.multiplyMatrices(n,Qs),Yo.matrixWorld=jd,Yo.raycast(t,pa);for(let r=0,a=pa.length;r<a;r++){const c=pa[r];c.instanceId=o,c.object=this,e.push(c)}pa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new tc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new y1(new Float32Array(s*this.count),s,this.count,au,ui));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class o0 extends Bi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ec=new b,nc=new b,Kd=new se,Zo=new gc,ma=new Ls,hl=new b,Jd=new b;class w1 extends Me{constructor(t=new ge,e=new o0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)ec.fromBufferAttribute(e,s-1),nc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ec.distanceTo(nc);t.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),ma.radius+=o,t.ray.intersectsSphere(ma)===!1)return;Kd.copy(s).invert(),Zo.copy(t.ray).applyMatrix4(Kd);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=p,m=g-1;v<m;v+=l){const f=h.getX(v),x=h.getX(v+1),_=ga(this,t,Zo,c,f,x);_&&e.push(_)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),f=ga(this,t,Zo,c,v,m);f&&e.push(f)}}else{const p=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let v=p,m=g-1;v<m;v+=l){const f=ga(this,t,Zo,c,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=ga(this,t,Zo,c,g-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function ga(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(ec.fromBufferAttribute(r,s),nc.fromBufferAttribute(r,o),e.distanceSqToSegment(ec,nc,hl,Jd)>n)return;hl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(hl);if(!(c<t.near||c>t.far))return{distance:c,point:Jd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Qd=new b,tf=new b;class S1 extends w1{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)Qd.fromBufferAttribute(e,s),tf.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Qd.distanceTo(tf);t.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dh extends Bi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ef=new se,Uh=new gc,va=new Ls,xa=new b;class Nh extends Me{constructor(t=new ge,e=new Dh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),va.radius+=o,t.ray.intersectsSphere(va)===!1)return;ef.copy(s).invert(),Uh.copy(t.ray).applyMatrix4(ef);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let g=d,v=p;g<v;g++){const m=l.getX(g);xa.fromBufferAttribute(u,m),nf(xa,m,c,s,t,e,this)}}else{const d=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let g=d,v=p;g<v;g++)xa.fromBufferAttribute(u,g),nf(xa,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function nf(i,t,e,n,s,o,r){const a=Uh.distanceSqToPoint(i);if(a<e){const c=new b;Uh.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Te extends rn{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _i{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);const h=n[s],d=n[s+1]-h,p=(r-h)/d;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new st:new b);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new b,s=[],o=[],r=[],a=new b,c=new se;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new b)}o[0]=new b,r[0]=new b;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(qe(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(a,g))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos(qe(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vu extends _i{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new st){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class b1 extends vu{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function xu(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let d=(r-o)/l-(a-o)/(l+h)+(a-r)/h,p=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,p*=h,s(r,a,d,p)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const _a=new b,ul=new xu,dl=new xu,fl=new xu;class xi extends _i{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new b){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(_a.subVectors(s[0],s[1]).add(s[0]),l=_a);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(_a.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=_a),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ul.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),dl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),fl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ul.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),dl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),fl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ul.calc(c),dl.calc(c),fl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new b().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function sf(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function E1(i,t){const e=1-i;return e*e*t}function T1(i,t){return 2*(1-i)*i*t}function A1(i,t){return i*i*t}function mr(i,t,e,n){return E1(i,t)+T1(i,e)+A1(i,n)}function C1(i,t){const e=1-i;return e*e*e*t}function R1(i,t){const e=1-i;return 3*e*e*i*t}function P1(i,t){return 3*(1-i)*i*i*t}function L1(i,t){return i*i*i*t}function gr(i,t,e,n,s){return C1(i,t)+R1(i,e)+P1(i,n)+L1(i,s)}class r0 extends _i{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(gr(t,s.x,o.x,r.x,a.x),gr(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class I1 extends _i{constructor(t=new b,e=new b,n=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new b){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(gr(t,s.x,o.x,r.x,a.x),gr(t,s.y,o.y,r.y,a.y),gr(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class a0 extends _i{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class D1 extends _i{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class c0 extends _i{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(mr(t,s.x,o.x,r.x),mr(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _c extends _i{constructor(t=new b,e=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new b){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(mr(t,s.x,o.x,r.x),mr(t,s.y,o.y,r.y),mr(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class l0 extends _i{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(sf(a,c.x,l.x,h.x,u.x),sf(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this}}var ic=Object.freeze({__proto__:null,ArcCurve:b1,CatmullRomCurve3:xi,CubicBezierCurve:r0,CubicBezierCurve3:I1,EllipseCurve:vu,LineCurve:a0,LineCurve3:D1,QuadraticBezierCurve:c0,QuadraticBezierCurve3:_c,SplineCurve:l0});class U1 extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ic[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ic[s.type]().fromJSON(s))}return this}}class Fh extends U1{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new a0(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new c0(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new r0(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new l0(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){const l=new vu(t,e,n,s,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ls extends ge{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=qe(s,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],h=1/e,u=new b,d=new st,p=new b,g=new b,v=new b;let m=0,f=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(g)}for(let x=0;x<=e;x++){const _=n+x*h*s,y=Math.sin(_),T=Math.cos(_);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*y,u.y=t[w].y,u.z=t[w].x*T,r.push(u.x,u.y,u.z),d.x=x/e,d.y=w/(t.length-1),a.push(d.x,d.y);const R=c[3*w+0]*y,C=c[3*w+1],S=c[3*w+0]*T;l.push(R,C,S)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){const y=_+x*t.length,T=y,w=y+t.length,R=y+t.length+1,C=y+1;o.push(T,w,C),o.push(R,C,w)}this.setIndex(o),this.setAttribute("position",new Bt(r,3)),this.setAttribute("uv",new Bt(a,2)),this.setAttribute("normal",new Bt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.points,t.segments,t.phiStart,t.phiLength)}}class _u extends ls{constructor(t=1,e=1,n=4,s=8){const o=new Fh;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new _u(t.radius,t.length,t.capSegments,t.radialSegments)}}class Dn extends ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new b,h=new st;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Bt(r,3)),this.setAttribute("normal",new Bt(a,3)),this.setAttribute("uv",new Bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class kt extends ge{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],p=[];let g=0;const v=[],m=n/2;let f=0;x(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(d,3)),this.setAttribute("uv",new Bt(p,2));function x(){const y=new b,T=new b;let w=0;const R=(e-t)/n;for(let C=0;C<=o;C++){const S=[],M=C/o,P=M*(e-t)+t;for(let F=0;F<=s;F++){const O=F/s,V=O*c+a,Z=Math.sin(V),U=Math.cos(V);T.x=P*Z,T.y=-M*n+m,T.z=P*U,u.push(T.x,T.y,T.z),y.set(Z,R,U).normalize(),d.push(y.x,y.y,y.z),p.push(O,1-M),S.push(g++)}v.push(S)}for(let C=0;C<s;C++)for(let S=0;S<o;S++){const M=v[S][C],P=v[S+1][C],F=v[S+1][C+1],O=v[S][C+1];(t>0||S!==0)&&(h.push(M,P,O),w+=3),(e>0||S!==o-1)&&(h.push(P,F,O),w+=3)}l.addGroup(f,w,0),f+=w}function _(y){const T=g,w=new st,R=new b;let C=0;const S=y===!0?t:e,M=y===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let F=0;F<=s;F++){const V=F/s*c+a,Z=Math.cos(V),U=Math.sin(V);R.x=S*U,R.y=m*M,R.z=S*Z,u.push(R.x,R.y,R.z),d.push(0,M,0),w.x=Z*.5+.5,w.y=U*.5*M+.5,p.push(w.x,w.y),g++}for(let F=0;F<s;F++){const O=T+F,V=P+F;y===!0?h.push(V,V+1,O):h.push(V+1,V,O),C+=3}l.addGroup(f,C,y===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cn extends kt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Cn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yu extends ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),l(n),h(),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(o.slice(),3)),this.setAttribute("uv",new Bt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const _=new b,y=new b,T=new b;for(let w=0;w<e.length;w+=3)p(e[w+0],_),p(e[w+1],y),p(e[w+2],T),c(_,y,T,x)}function c(x,_,y,T){const w=T+1,R=[];for(let C=0;C<=w;C++){R[C]=[];const S=x.clone().lerp(y,C/w),M=_.clone().lerp(y,C/w),P=w-C;for(let F=0;F<=P;F++)F===0&&C===w?R[C][F]=S:R[C][F]=S.clone().lerp(M,F/P)}for(let C=0;C<w;C++)for(let S=0;S<2*(w-C)-1;S++){const M=Math.floor(S/2);S%2===0?(d(R[C][M+1]),d(R[C+1][M]),d(R[C][M])):(d(R[C][M+1]),d(R[C+1][M+1]),d(R[C+1][M]))}}function l(x){const _=new b;for(let y=0;y<o.length;y+=3)_.x=o[y+0],_.y=o[y+1],_.z=o[y+2],_.normalize().multiplyScalar(x),o[y+0]=_.x,o[y+1]=_.y,o[y+2]=_.z}function h(){const x=new b;for(let _=0;_<o.length;_+=3){x.x=o[_+0],x.y=o[_+1],x.z=o[_+2];const y=m(x)/2/Math.PI+.5,T=f(x)/Math.PI+.5;r.push(y,1-T)}g(),u()}function u(){for(let x=0;x<r.length;x+=6){const _=r[x+0],y=r[x+2],T=r[x+4],w=Math.max(_,y,T),R=Math.min(_,y,T);w>.9&&R<.1&&(_<.2&&(r[x+0]+=1),y<.2&&(r[x+2]+=1),T<.2&&(r[x+4]+=1))}}function d(x){o.push(x.x,x.y,x.z)}function p(x,_){const y=x*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function g(){const x=new b,_=new b,y=new b,T=new b,w=new st,R=new st,C=new st;for(let S=0,M=0;S<o.length;S+=9,M+=6){x.set(o[S+0],o[S+1],o[S+2]),_.set(o[S+3],o[S+4],o[S+5]),y.set(o[S+6],o[S+7],o[S+8]),w.set(r[M+0],r[M+1]),R.set(r[M+2],r[M+3]),C.set(r[M+4],r[M+5]),T.copy(x).add(_).add(y).divideScalar(3);const P=m(T);v(w,M+0,x,P),v(R,M+2,_,P),v(C,M+4,y,P)}}function v(x,_,y,T){T<0&&x.x===1&&(r[_]=x.x-1),y.x===0&&y.z===0&&(r[_]=T/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yu(t.vertices,t.indices,t.radius,t.details)}}class Dr extends Fh{constructor(t){super(t),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Fh().fromJSON(s))}return this}}const N1={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=h0(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,d,p;if(n&&(o=B1(i,t,o,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return br(o,r,e,a,c,p,0),r}};function h0(i,t,e,n,s){let o,r;if(s===K1(i,t,e,n)>0)for(o=t;o<e;o+=n)r=of(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=of(o,i[o],i[o+1],r);return r&&yc(r,r.next)&&(Tr(r),r=r.next),r}function Ps(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(yc(e,e.next)||Pe(e.prev,e,e.next)===0)){if(Tr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function br(i,t,e,n,s,o,r){if(!i)return;!r&&o&&X1(i,n,s,o);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,o?O1(i,n,s,o):F1(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Tr(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=k1(Ps(i),t,e),br(i,t,e,n,s,o,2)):r===2&&z1(i,t,e,n,s,o):br(Ps(i),t,e,n,s,o,1);break}}}function F1(i){const t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=s<o?s<r?s:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,d=s>o?s>r?s:r:o>r?o:r,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&lo(s,a,o,c,r,l,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function O1(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Pe(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,u=o.y,d=r.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=Oh(p,g,t,e,n),x=Oh(v,m,t,e,n);let _=i.prevZ,y=i.nextZ;for(;_&&_.z>=f&&y&&y.z<=x;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==r&&lo(a,h,c,u,l,d,_.x,_.y)&&Pe(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&lo(a,h,c,u,l,d,y.x,y.y)&&Pe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==r&&lo(a,h,c,u,l,d,_.x,_.y)&&Pe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&lo(a,h,c,u,l,d,y.x,y.y)&&Pe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function k1(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!yc(s,o)&&u0(s,n,n.next,o)&&Er(s,o)&&Er(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Tr(n),Tr(n.next),n=i=o),n=n.next}while(n!==i);return Ps(n)}function z1(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Y1(r,a)){let c=d0(r,a);r=Ps(r,r.next),c=Ps(c,c.next),br(r,t,e,n,s,o,0),br(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function B1(i,t,e,n){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,l=h0(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push($1(l));for(s.sort(H1),o=0;o<s.length;o++)e=G1(s[o],e);return e}function H1(i,t){return i.x-t.x}function G1(i,t){const e=V1(i,t);if(!e)return t;const n=d0(e,i);return Ps(n,n.next),Ps(e,e.next)}function V1(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&lo(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),Er(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&W1(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function W1(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function X1(i,t,e,n){let s=i;do s.z===0&&(s.z=Oh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,q1(s)}function q1(i){let t,e,n,s,o,r,a,c,l=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,l*=2}while(r>1);return i}function Oh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function $1(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function lo(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Y1(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!j1(i,t)&&(Er(i,t)&&Er(t,i)&&Z1(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||yc(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function yc(i,t){return i.x===t.x&&i.y===t.y}function u0(i,t,e,n){const s=Ma(Pe(i,t,e)),o=Ma(Pe(i,t,n)),r=Ma(Pe(e,n,i)),a=Ma(Pe(e,n,t));return!!(s!==o&&r!==a||s===0&&ya(i,e,t)||o===0&&ya(i,n,t)||r===0&&ya(e,i,n)||a===0&&ya(e,t,n))}function ya(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ma(i){return i>0?1:i<0?-1:0}function j1(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&u0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Er(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function Z1(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function d0(i,t){const e=new kh(i.i,i.x,i.y),n=new kh(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function of(i,t,e,n){const s=new kh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function K1(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class is{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return is.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];rf(t),af(n,t);let r=t.length;e.forEach(rf);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,af(n,e[c]);const a=N1.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function rf(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function af(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Mc extends ge{constructor(t=new Dr([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new Bt(s,3)),this.setAttribute("uv",new Bt(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:J1;let _,y=!1,T,w,R,C;f&&(_=f.getSpacedPoints(h),y=!0,d=!1,T=f.computeFrenetFrames(h,!1),w=new b,R=new b,C=new b),d||(m=0,p=0,g=0,v=0);const S=a.extractPoints(l);let M=S.shape;const P=S.holes;if(!is.isClockWise(M)){M=M.reverse();for(let ot=0,K=P.length;ot<K;ot++){const D=P[ot];is.isClockWise(D)&&(P[ot]=D.reverse())}}const O=is.triangulateShape(M,P),V=M;for(let ot=0,K=P.length;ot<K;ot++){const D=P[ot];M=M.concat(D)}function Z(ot,K,D){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(K,D)}const U=M.length,k=O.length;function N(ot,K,D){let Pt,lt,bt;const ut=ot.x-K.x,Gt=ot.y-K.y,Et=D.x-ot.x,L=D.y-ot.y,E=ut*ut+Gt*Gt,X=ut*L-Gt*Et;if(Math.abs(X)>Number.EPSILON){const nt=Math.sqrt(E),ct=Math.sqrt(Et*Et+L*L),it=K.x-Gt/nt,Lt=K.y+ut/nt,_t=D.x-L/ct,Tt=D.y+Et/ct,oe=((_t-it)*L-(Tt-Lt)*Et)/(ut*L-Gt*Et);Pt=it+ut*oe-ot.x,lt=Lt+Gt*oe-ot.y;const dt=Pt*Pt+lt*lt;if(dt<=2)return new st(Pt,lt);bt=Math.sqrt(dt/2)}else{let nt=!1;ut>Number.EPSILON?Et>Number.EPSILON&&(nt=!0):ut<-Number.EPSILON?Et<-Number.EPSILON&&(nt=!0):Math.sign(Gt)===Math.sign(L)&&(nt=!0),nt?(Pt=-Gt,lt=ut,bt=Math.sqrt(E)):(Pt=ut,lt=Gt,bt=Math.sqrt(E/2))}return new st(Pt/bt,lt/bt)}const G=[];for(let ot=0,K=V.length,D=K-1,Pt=ot+1;ot<K;ot++,D++,Pt++)D===K&&(D=0),Pt===K&&(Pt=0),G[ot]=N(V[ot],V[D],V[Pt]);const W=[];let Q,et=G.concat();for(let ot=0,K=P.length;ot<K;ot++){const D=P[ot];Q=[];for(let Pt=0,lt=D.length,bt=lt-1,ut=Pt+1;Pt<lt;Pt++,bt++,ut++)bt===lt&&(bt=0),ut===lt&&(ut=0),Q[Pt]=N(D[Pt],D[bt],D[ut]);W.push(Q),et=et.concat(Q)}for(let ot=0;ot<m;ot++){const K=ot/m,D=p*Math.cos(K*Math.PI/2),Pt=g*Math.sin(K*Math.PI/2)+v;for(let lt=0,bt=V.length;lt<bt;lt++){const ut=Z(V[lt],G[lt],Pt);tt(ut.x,ut.y,-D)}for(let lt=0,bt=P.length;lt<bt;lt++){const ut=P[lt];Q=W[lt];for(let Gt=0,Et=ut.length;Gt<Et;Gt++){const L=Z(ut[Gt],Q[Gt],Pt);tt(L.x,L.y,-D)}}}const ht=g+v;for(let ot=0;ot<U;ot++){const K=d?Z(M[ot],et[ot],ht):M[ot];y?(R.copy(T.normals[0]).multiplyScalar(K.x),w.copy(T.binormals[0]).multiplyScalar(K.y),C.copy(_[0]).add(R).add(w),tt(C.x,C.y,C.z)):tt(K.x,K.y,0)}for(let ot=1;ot<=h;ot++)for(let K=0;K<U;K++){const D=d?Z(M[K],et[K],ht):M[K];y?(R.copy(T.normals[ot]).multiplyScalar(D.x),w.copy(T.binormals[ot]).multiplyScalar(D.y),C.copy(_[ot]).add(R).add(w),tt(C.x,C.y,C.z)):tt(D.x,D.y,u/h*ot)}for(let ot=m-1;ot>=0;ot--){const K=ot/m,D=p*Math.cos(K*Math.PI/2),Pt=g*Math.sin(K*Math.PI/2)+v;for(let lt=0,bt=V.length;lt<bt;lt++){const ut=Z(V[lt],G[lt],Pt);tt(ut.x,ut.y,u+D)}for(let lt=0,bt=P.length;lt<bt;lt++){const ut=P[lt];Q=W[lt];for(let Gt=0,Et=ut.length;Gt<Et;Gt++){const L=Z(ut[Gt],Q[Gt],Pt);y?tt(L.x,L.y+_[h-1].y,_[h-1].x+D):tt(L.x,L.y,u+D)}}}$(),q();function $(){const ot=s.length/3;if(d){let K=0,D=U*K;for(let Pt=0;Pt<k;Pt++){const lt=O[Pt];vt(lt[2]+D,lt[1]+D,lt[0]+D)}K=h+m*2,D=U*K;for(let Pt=0;Pt<k;Pt++){const lt=O[Pt];vt(lt[0]+D,lt[1]+D,lt[2]+D)}}else{for(let K=0;K<k;K++){const D=O[K];vt(D[2],D[1],D[0])}for(let K=0;K<k;K++){const D=O[K];vt(D[0]+U*h,D[1]+U*h,D[2]+U*h)}}n.addGroup(ot,s.length/3-ot,0)}function q(){const ot=s.length/3;let K=0;at(V,K),K+=V.length;for(let D=0,Pt=P.length;D<Pt;D++){const lt=P[D];at(lt,K),K+=lt.length}n.addGroup(ot,s.length/3-ot,1)}function at(ot,K){let D=ot.length;for(;--D>=0;){const Pt=D;let lt=D-1;lt<0&&(lt=ot.length-1);for(let bt=0,ut=h+m*2;bt<ut;bt++){const Gt=U*bt,Et=U*(bt+1),L=K+Pt+Gt,E=K+lt+Gt,X=K+lt+Et,nt=K+Pt+Et;At(L,E,X,nt)}}}function tt(ot,K,D){c.push(ot),c.push(K),c.push(D)}function vt(ot,K,D){It(ot),It(K),It(D);const Pt=s.length/3,lt=x.generateTopUV(n,s,Pt-3,Pt-2,Pt-1);Yt(lt[0]),Yt(lt[1]),Yt(lt[2])}function At(ot,K,D,Pt){It(ot),It(K),It(Pt),It(K),It(D),It(Pt);const lt=s.length/3,bt=x.generateSideWallUV(n,s,lt-6,lt-3,lt-2,lt-1);Yt(bt[0]),Yt(bt[1]),Yt(bt[3]),Yt(bt[1]),Yt(bt[2]),Yt(bt[3])}function It(ot){s.push(c[ot*3+0]),s.push(c[ot*3+1]),s.push(c[ot*3+2])}function Yt(ot){o.push(ot.x),o.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Q1(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ic[s.type]().fromJSON(s)),new Mc(n,t.options)}}const J1={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new st(o,r),new st(a,c),new st(l,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],v=t[o*3],m=t[o*3+1],f=t[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new st(r,1-c),new st(l,1-u),new st(d,1-g),new st(v,1-f)]:[new st(a,1-c),new st(h,1-u),new st(p,1-g),new st(m,1-f)]}};function Q1(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class wc extends yu{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wc(t.radius,t.detail)}}class Mu extends ge{constructor(t=new Dr([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Bt(s,3)),this.setAttribute("normal",new Bt(o,3)),this.setAttribute("uv",new Bt(r,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let p=d.shape;const g=d.holes;is.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){const x=g[m];is.isClockWise(x)===!0&&(g[m]=x.reverse())}const v=is.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){const x=g[m];p=p.concat(x)}for(let m=0,f=p.length;m<f;m++){const x=p[m];s.push(x.x,x.y,0),o.push(0,0,1),r.push(x.x,x.y)}for(let m=0,f=v.length;m<f;m++){const x=v[m],_=x[0]+u,y=x[1]+u,T=x[2]+u;n.push(_,y,T),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return tM(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new Mu(n,t.curveSegments)}}function tM(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Wt extends ge{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new b,d=new b,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const x=[],_=f/n;let y=0;f===0&&r===0?y=.5/e:f===n&&c===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const w=T/e;u.x=-t*Math.cos(s+w*o)*Math.sin(r+_*a),u.y=t*Math.cos(r+_*a),u.z=t*Math.sin(s+w*o)*Math.sin(r+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(w+y,1-_),x.push(l++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const _=h[f][x+1],y=h[f][x],T=h[f+1][x],w=h[f+1][x+1];(f!==0||r>0)&&p.push(_,y,w),(f!==n-1||c<Math.PI)&&p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Le extends ge{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new b,u=new b,d=new b;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const v=g/s*o,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,x=(s+1)*p+g;r.push(v,m,x),r.push(m,f,x)}this.setIndex(r),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ki extends ge{constructor(t=new _c(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new b,c=new b,l=new st;let h=new b;const u=[],d=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(d,3)),this.setAttribute("uv",new Bt(p,2));function v(){for(let _=0;_<e;_++)m(_);m(o===!1?e:0),x(),f()}function m(_){h=t.getPointAt(_/e,h);const y=r.normals[_],T=r.binormals[_];for(let w=0;w<=s;w++){const R=w/s*Math.PI*2,C=Math.sin(R),S=-Math.cos(R);c.x=S*y.x+C*T.x,c.y=S*y.y+C*T.y,c.z=S*y.z+C*T.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let _=1;_<=e;_++)for(let y=1;y<=s;y++){const T=(s+1)*(_-1)+(y-1),w=(s+1)*_+(y-1),R=(s+1)*_+y,C=(s+1)*(_-1)+y;g.push(T,w,C),g.push(w,R,C)}}function x(){for(let _=0;_<=e;_++)for(let y=0;y<=s;y++)l.x=_/e,l.y=y/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ki(new ic[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class eM extends Ye{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class mt extends Bi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bp,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ht extends mt{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const cf={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class nM{constructor(t,e,n){const s=this;let o=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const iM=new nM;class wu{constructor(t){this.manager=t!==void 0?t:iM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}wu.DEFAULT_MATERIAL_NAME="__DEFAULT";class sM extends wu{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=cf.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;const a=Sr("img");function c(){h(),cf.add(t,this),e&&e(this),o.manager.itemEnd(t)}function l(u){h(),s&&s(u),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}}class oM extends wu{constructor(t){super(t)}load(t,e,n,s){const o=new rn,r=new sM(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,s),o}}class Su extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class rM extends Su{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const pl=new se,lf=new b,hf=new b;class f0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fu,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;lf.setFromMatrixPosition(t.matrixWorld),e.position.copy(lf),hf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hf),e.updateMatrixWorld(),pl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const uf=new se,Ko=new b,ml=new b;class aM extends f0{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Ko.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ko),ml.copy(n.position),ml.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ml),n.updateMatrixWorld(),s.makeTranslation(-Ko.x,-Ko.y,-Ko.z),uf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uf)}}class bu extends Su{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new aM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class cM extends f0{constructor(){super(new pu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class df extends Su{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new cM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lM extends ge{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class p0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ff(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ff();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ff(){return performance.now()}const pf=new se;class hM{constructor(t,e,n=0,s=1/0){this.ray=new gc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new du,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return pf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pf),this}intersectObject(t,e=!0,n=[]){return zh(t,this,n,e),n.sort(mf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)zh(t[s],this,n,e);return n.sort(mf),n}}function mf(i,t){return i.distance-t.distance}function zh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)zh(o[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nu);const gf=new b,uM=new as,vf=new b;class dM extends Me{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}}const oi=new se,fM=new se;class pM{constructor(t={}){const e=this;let n,s,o,r;const a={camera:{style:""},objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",c.appendChild(l);const h=document.createElement("div");h.style.transformStyle="preserve-3d",l.appendChild(h),this.getSize=function(){return{width:n,height:s}},this.render=function(m,f){const x=f.projectionMatrix.elements[5]*r;f.view&&f.view.enabled?(l.style.transform=`translate( ${-f.view.offsetX*(n/f.view.width)}px, ${-f.view.offsetY*(s/f.view.height)}px )`,l.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):l.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let _,y;f.isOrthographicCamera&&(_=-(f.right+f.left)/2,y=(f.top+f.bottom)/2);const T=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,w=f.isOrthographicCamera?`scale( ${T} )scale(`+x+")translate("+u(_)+"px,"+u(y)+"px)"+d(f.matrixWorldInverse):`scale( ${T} )translateZ(`+x+"px)"+d(f.matrixWorldInverse),C=(f.isPerspectiveCamera?"perspective("+x+"px) ":"")+w+"translate("+o+"px,"+r+"px)";a.camera.style!==C&&(h.style.transform=C,a.camera.style=C),v(m,m,f)},this.setSize=function(m,f){n=m,s=f,o=n/2,r=s/2,c.style.width=m+"px",c.style.height=f+"px",l.style.width=m+"px",l.style.height=f+"px",h.style.width=m+"px",h.style.height=f+"px"};function u(m){return Math.abs(m)<1e-10?0:m}function d(m){const f=m.elements;return"matrix3d("+u(f[0])+","+u(-f[1])+","+u(f[2])+","+u(f[3])+","+u(f[4])+","+u(-f[5])+","+u(f[6])+","+u(f[7])+","+u(f[8])+","+u(-f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(-f[13])+","+u(f[14])+","+u(f[15])+")"}function p(m){const f=m.elements;return"translate(-50%,-50%)"+("matrix3d("+u(f[0])+","+u(f[1])+","+u(f[2])+","+u(f[3])+","+u(-f[4])+","+u(-f[5])+","+u(-f[6])+","+u(-f[7])+","+u(f[8])+","+u(f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(f[13])+","+u(f[14])+","+u(f[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let f=0,x=m.children.length;f<x;f++)g(m.children[f])}function v(m,f,x,_){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){const y=m.layers.test(x.layers)===!0,T=m.element;if(T.style.display=y===!0?"":"none",y===!0){m.onBeforeRender(e,f,x);let w;m.isCSS3DSprite?(oi.copy(x.matrixWorldInverse),oi.transpose(),m.rotation2D!==0&&oi.multiply(fM.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(gf,uM,vf),oi.setPosition(gf),oi.scale(vf),oi.elements[3]=0,oi.elements[7]=0,oi.elements[11]=0,oi.elements[15]=1,w=p(oi)):w=p(m.matrixWorld);const R=a.objects.get(m);if(R===void 0||R.style!==w){T.style.transform=w;const C={style:w};a.objects.set(m,C)}T.parentNode!==h&&h.appendChild(T),m.onAfterRender(e,f,x)}}for(let y=0,T=m.children.length;y<T;y++)v(m.children[y],f,x)}}}const m0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class No{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const mM=new pu(-1,1,1,-1,0,1);class gM extends ge{constructor(){super(),this.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bt([0,2,0,0,2,0],2))}}const vM=new gM;class Eu{constructor(t){this._mesh=new I(vM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,mM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class g0 extends No{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Rs.clone(t.uniforms),this.material=new Ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Eu(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class xf extends No{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class xM extends No{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class _M{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new st);this._width=n.width,this._height=n.height,e=new Ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new g0(m0),this.copyPass.material.blending=fi,this.clock=new p0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}xf!==void 0&&(r instanceof xf?n=!0:r instanceof xM&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class yM extends No{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new gt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const MM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new gt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class To extends No{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new gt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ln(o,r,{type:pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Ln(o,r,{type:pi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new Ln(o,r,{type:pi});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),r=Math.round(r/2)}const a=MM;this.highPassUniforms=Rs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ye({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new st(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=m0;this.copyUniforms=Rs.clone(h.uniforms),this.blendMaterial=new Ye({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ei,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new gt,this.oldClearAlpha=1,this.basic=new $e,this.fsQuad=new Eu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new st(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=To.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=To.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ye({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ye({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}To.BlurDirectionX=new st(1,0);To.BlurDirectionY=new st(0,1);const wM={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class SM extends No{constructor(){super();const t=wM;this.uniforms=Rs.clone(t.uniforms),this.material=new eM({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Eu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ce.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ep?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Tp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ap?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===iu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Cp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rp&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Tu="0xsurgeon:theme";function bM(){try{const i=new URLSearchParams(location.search).get("theme");if(i==="day"||i==="night")return i;const t=localStorage.getItem(Tu);if(t==="day"||t==="night")return t}catch{}return window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"night":"day"}const qa=bM(),re={name:qa,k:qa==="night"?1:0,target:qa==="night"?1:0,chosen:(()=>{try{return!!localStorage.getItem(Tu)}catch{return!1}})()},sc=new Set;function Ur(i){return sc.add(i),i(re.k,!0),()=>sc.delete(i)}function _f(i,t=!1){re.name=i,re.target=i==="night"?1:0,re.chosen=!0;try{localStorage.setItem(Tu,i)}catch{}if(document.documentElement.classList.toggle("night",i==="night"),t){re.k=re.target;for(const e of sc)e(re.k,!0)}}function EM(i){if(re.k===re.target)return;const t=i/3;re.k=re.target>re.k?Math.min(re.target,re.k+t):Math.max(re.target,re.k-t);for(const e of sc)e(re.k,!1)}document.documentElement.classList.toggle("night",qa==="night");function $n(i,t,e,n){return n.set(i).lerp(TM.set(t),e)}const TM=new gt;function Zi(i,t,e){const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)}function Ve(i,t){const e=1.4*Math.sin(i*.11)*Math.cos(t*.09)+.7*Math.sin(i*.29+t*.21)+.35*Math.sin(t*.47+i*.08)+2.2*Math.sin(i*.045-1.2)*Math.sin(t*.05+.4),n=.09*Math.sin(i*1.7+t*.9)*Math.cos(t*1.3-i*.4)+.05*Math.sin(i*3.1)*Math.sin(t*2.7),s=Math.hypot(i,t);let o=(e+n)*Zi(4,11,s);const r=Math.hypot(i-19,t-9),a=-1.05;if(r<22){const u=o+Math.max(0,a+.3-o)*Zi(22,16,r),d=Math.min(o,a-.5-2.4*Zi(12,4,r));o=r<=12?d:r>=13?u:d+(u-d)*Zi(12,13,r)}const c=Zi(44,56,s)*Zi(78,62,s);o+=9*c*(.75+.25*Math.sin(i*.13)*Math.cos(t*.11));const l=Math.hypot(i*.8,t+95),h=Zi(52,34,l);return o=o*(1-h)+-1.5*h,o}function Ar(i,t,e=0){return Math.hypot(i-19,t-9)<14+e}function v0(i,t){return Math.abs(t-2)<1.25&&i>7.1&&i<30.9}function ve(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function AM(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d"),e=ve(77);t.fillStyle="#5ac648",t.fillRect(0,0,512,512);for(let s=0;s<9e4;s++){const o=120+e()*90,r=40+e()*60;t.fillStyle=`rgba(${r|0},${o|0},${30+e()*40|0},${.25+e()*.5})`;const a=e()*512,c=e()*512;t.fillRect(a,c,1+e()*2,2+e()*5)}const n=new Te(i);return n.colorSpace=ie,n.wrapS=n.wrapT=Fi,n.repeat.set(60,60),n.anisotropy=8,n}function CM(){const e=new Re(220,220,300,300);e.rotateX(-Math.PI/2);const n=e.attributes.position,s=new Float32Array(n.count*3),o=ve(3),r=new gt("#3fb238"),a=new gt("#a6ea58"),c=new gt;for(let d=0;d<n.count;d++){const p=n.getX(d),g=n.getZ(d),v=Ve(p,g);n.setY(d,v);const m=Bn.clamp((v+2.5)/7,0,1);c.copy(r).lerp(a,m*m);const f=Math.hypot(p-19,g-9);f<14.5&&c.lerp(new gt("#d6c48e"),Zi(14.5,10.5,f));const x=(o()-.5)*.05;s[d*3]=c.r+x,s[d*3+1]=c.g+x,s[d*3+2]=c.b+x*.5}e.setAttribute("color",new Be(s,3)),e.computeVertexNormals();const l=new mt({map:AM(),vertexColors:!0,roughness:.95,metalness:0}),h=new gt("#1f3a4a");Ur(d=>{l.color.set("#ffffff").lerp(h,d*.85)});const u=new I(e,l);return u.receiveShadow=!0,u.name="terrain",u}function RM(i=7e4,t=42){const s=[],o=[],r=[];for(let m=0;m<=3;m++){const f=m/3,x=.06*(1-f)*.5;s.push(-x,f*1,0,x,f*1,0),o.push(0,f,1,f)}for(let m=0;m<3;m++){const f=m*2;r.push(f,f+1,f+2,f+1,f+3,f+2)}const c=new lM;c.setAttribute("position",new Bt(s,3)),c.setAttribute("uv",new Bt(o,2)),c.setIndex(r);const l=new Float32Array(i*3),h=new Float32Array(i*3),u=ve(99);let d=0;for(let m=0;m<i;m++){const f=u()*Math.PI*2,x=Math.sqrt(u())*t,_=Math.cos(f)*x,y=Math.sin(f)*x;Math.hypot(_,y)<3.1||Ar(_,y,-.7)||v0(_,y)||(l[d*3]=_,l[d*3+1]=Ve(_,y),l[d*3+2]=y,h[d*3]=.18+u()*.3,h[d*3+1]=u()*Math.PI,h[d*3+2]=u()*Math.PI*2,d++)}c.instanceCount=d,c.setAttribute("offset",new tc(l.subarray(0,d*3),3)),c.setAttribute("params",new tc(h.subarray(0,d*3),3));const p={time:{value:0},player:{value:new b(0,0,99)},night:{value:0}},g=new Ye({uniforms:p,side:me,vertexShader:`
      attribute vec3 offset; attribute vec3 params;
      uniform float time; uniform vec3 player;
      varying float vT; varying float vShade;
      void main() {
        float s = params.x, rot = params.y, ph = params.z;
        float t = uv.y;
        vec3 p = position * s;
        float c = cos(rot), sn = sin(rot);
        p = vec3(p.x * c - p.z * sn, p.y, p.x * sn + p.z * c);
        // wind
        float wind = sin(time * 1.6 + offset.x * 0.35 + offset.z * 0.2 + ph) * 0.12 + sin(time * 3.1 + ph * 2.0) * 0.04;
        p.x += wind * t * t * s * 2.0;
        p.z += wind * 0.4 * t * t * s * 2.0;
        // bend away from the player
        vec2 away = offset.xz - player.xz;
        float dist = length(away);
        float push = smoothstep(1.1, 0.0, dist) * t * t * 0.5;
        p.xz += normalize(away + 0.001) * push;
        p.y -= push * 0.35 * t;
        vec3 world = p + offset;
        vT = t;
        vShade = 0.85 + 0.15 * sin(ph);
        gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
      }`,fragmentShader:`
      varying float vT; varying float vShade; uniform float night;
      void main() {
        vec3 low = vec3(0.16, 0.42, 0.14);
        vec3 high = vec3(0.47, 0.80, 0.30);
        // at night: deep teal blades with a faint moonlit cyan on the tips
        vec3 nlow = vec3(0.02, 0.07, 0.08);
        vec3 nhigh = vec3(0.10, 0.30, 0.34);
        vec3 c = mix(mix(low, nlow, night), mix(high, nhigh, night), vT) * vShade;
        gl_FragColor = vec4(c, 1.0);
      }`}),v=new I(c,g);return v.frustumCulled=!1,v.name="grass",v.userData.uniforms=p,v}function PM(i=900,t=40){const e=new Dn(.05,6),n=new mt({color:"#ffffff",roughness:.9,side:me}),s=new mt({color:"#ffd84a",roughness:.9,side:me}),o=new pt,r=ve(123),a=new Me,c=new os(e,n,i),l=new os(e,s,i);let h=0,u=0;for(let d=0;d<i*2;d++){const p=r()*Math.PI*2,g=3.5+Math.sqrt(r())*t,v=Math.cos(p)*g,m=Math.sin(p)*g;Ar(v,m,-.7)||v0(v,m)||(a.position.set(v,Ve(v,m)+.12+r()*.1,m),a.rotation.set(-Math.PI/2+(r()-.5)*.6,0,r()*Math.PI),a.scale.setScalar(.7+r()*.8),a.updateMatrix(),d%2?h<i&&c.setMatrixAt(h++,a.matrix):u<i&&l.setMatrixAt(u++,a.matrix))}return o.add(c,l),o}function x0(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,c=new ge;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in o){const u=yf(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const p=[];for(let v=0;v<r[h].length;++v)p.push(r[h][v][d]);const g=yf(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function yf(i){let t,e,n,s=-1,o=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new Be(r,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<e;g++){const v=h.getComponent(d,g);a.setComponent(d+u,g,v)}}else r.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function LM(i){const t=new Set;return i.traverse(e=>{const n=e.material?Array.isArray(e.material)?e.material:[e.material]:[];for(const s of n){if(t.has(s)||!(s.transmission>0))continue;if(t.add(s),s.iridescence>0){IM(s);continue}const o=s.userData.solidity??(s.opacity<1?s.opacity:Math.max(.22,1-s.transmission*.8));s.transmission=0,s.transparent=!0,s.opacity=o,o<.5&&(s.depthWrite=!1),s.envMapIntensity=Math.max(s.envMapIntensity??1,1.3),s.needsUpdate=!0}}),t.size}function IM(i){i.transmission=0,i.transparent=!0,i.opacity=1,i.depthWrite=!1,i.roughness=0,i.color.set("#eaf6ff"),i.envMapIntensity=2.2,i.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      float bubbleFres = pow(clamp(1.0 - abs(dot(normalize(vNormal), normalize(vViewPosition))), 0.0, 1.0), 2.2); // clamped: a negative base made NaN (black) on D3D
      gl_FragColor.a *= mix(0.05, 0.95, bubbleFres);`)},i.customProgramCacheKey=()=>"bubble",i.needsUpdate=!0}function yi(i,t=()=>!0){i.updateMatrixWorld(!0);const e=new Set;i.traverse(a=>{if(a!==i&&a.name){a.traverse(l=>e.add(l));let c=a.parent;for(;c&&c!==i;)e.add(c),c=c.parent}});const n=new Map,s=[];i.traverse(a=>{if(!a.isMesh||a.isInstancedMesh||e.has(a)||Array.isArray(a.material)||!t(a))return;let c=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();const l=!!a.material.vertexColors;for(const d of Object.keys(c.attributes))["position","normal","uv",...l?["color"]:[]].includes(d)||c.deleteAttribute(d);l&&!c.attributes.color&&c.setAttribute("color",new Bt(new Float32Array(c.attributes.position.count*3).fill(1),3)),l&&c.attributes.color.itemSize!==3&&(c.deleteAttribute("color"),c.setAttribute("color",new Bt(new Float32Array(c.attributes.position.count*3).fill(1),3))),c.attributes.uv||c.setAttribute("uv",new Bt(new Float32Array(c.attributes.position.count*2),2)),c.attributes.normal||c.computeVertexNormals(),c.applyMatrix4(a.matrixWorld);const h=a.material;if(h.map&&(h.map.repeat.x!==1||h.map.repeat.y!==1)){const d=c.attributes.uv;for(let p=0;p<d.count;p++)d.setXY(p,d.getX(p)*h.map.repeat.x,d.getY(p)*h.map.repeat.y)}const u=[h.type,h.map?h.map.source.uuid:"-",h.emissiveMap?h.emissiveMap.uuid:"-",h.color.getHex(),h.emissive?h.emissive.getHex():0,h.emissiveIntensity,h.roughness,h.metalness,h.opacity,h.transparent,h.side,h.clearcoat??0,h.userData.keep?h.uuid:"",l,a.castShadow,a.receiveShadow,h.onBeforeCompile&&h.onBeforeCompile.toString()!==Bi.prototype.onBeforeCompile.toString()?h.uuid:""].join("|");if(!n.has(u)){let d=h;h.map&&(h.map.repeat.x!==1||h.map.repeat.y!==1)&&(d=h.clone(),d.map=h.map.clone(),d.map.repeat.set(1,1),d.map.needsUpdate=!0,h.emissiveMap&&(d.emissiveMap=h.emissiveMap.clone(),d.emissiveMap.repeat.set(1,1),d.emissiveMap.needsUpdate=!0)),n.set(u,{mat:d,geos:[],cast:a.castShadow,receive:a.receiveShadow})}n.get(u).geos.push(c),s.push(a)});for(const a of s)a.parent.remove(a);const o=new se().copy(i.matrixWorld).invert();let r=0;for(const{mat:a,geos:c,cast:l,receive:h}of n.values()){const u=x0(c,!1);if(!u){console.warn("mergeStatic: could not merge a bucket");continue}u.applyMatrix4(o);const d=new I(u,a);d.matrixAutoUpdate=!1,d.castShadow=l,d.receiveShadow=h,i.add(d),r++}return{merged:s.length,calls:r}}function _0(i){const t=new Set;i.traverse(n=>{if(n!==i&&n.name){n.traverse(o=>t.add(o));let s=n.parent;for(;s;)t.add(s),s=s.parent}});let e=0;return i.traverse(n=>{t.has(n)||!n.matrixAutoUpdate||(n.updateMatrix(),n.matrixAutoUpdate=!1,e++)}),i.updateMatrixWorld(!0),e}function y0(i){const t=new Map;i.traverse(n=>{if(n.isMesh)for(const s of[].concat(n.material))t.has(s)||t.set(s,[]),t.get(s).push(n)});let e=0;for(const n of t.keys())n.transparent&&n.side===me&&!n.forceSinglePass&&(n.forceSinglePass=!0,e++);for(const[n,s]of t){if(s.length<2)continue;if(s.some(r=>r.receiveShadow)&&s.some(r=>!r.receiveShadow)){for(const r of s)r.receiveShadow=!0;e++}const o=s.filter(r=>r.isInstancedMesh);if(o.length&&o.length<s.length&&!Array.isArray(o[0].material)){const r=n.clone();for(const a of o)a.material=r;e++}}return e}function DM(i){const t=i.prototype.getObjectByName,e=new WeakMap;i.prototype.getObjectByName=function(n){let s=e.get(this);s||(s=new Map,e.set(this,s));const o=s.get(n);if(o&&o.name===n){let a=o;for(;a&&a!==this;)a=a.parent;if(a===this)return o}const r=t.call(this,n);return r&&s.set(n,r),r}}const M0=[],w0=new gt("#5a7aa0"),S0=new gt("#ffffff");Ur(i=>{for(const t of M0)t.color.copy(S0).lerp(w0,i*.75)});function UM(){const i=document.createElement("canvas");i.width=128,i.height=256;const t=i.getContext("2d"),e=ve(13);t.fillStyle="#7a5a40",t.fillRect(0,0,128,256);for(let s=0;s<260;s++)t.fillStyle=e()>.5?"rgba(40,24,12,0.32)":"rgba(255,230,200,0.12)",t.fillRect(e()*128,e()*256,1.5+e()*3,14+e()*50);const n=new Te(i);return n.colorSpace=ie,n.wrapS=n.wrapT=Fi,n}const NM=new mt({map:UM(),roughness:.9,color:"#c9b8a6"});function gl(i,t){const n=document.createElement("canvas");n.width=n.height=256;const s=n.getContext("2d"),o=ve(i);for(let a=0;a<34;a++){const c=o()*Math.PI*2,l=Math.sqrt(o())*86,h=128+Math.cos(c)*l,u=128+Math.sin(c)*l,d=c+(o()-.5)*1.2,p=34+o()*22,g=p*.42,v=(128-u)/128*.5+(128-h)/256+o()*.35,m=Math.round(30+t*10+v*14);s.save(),s.translate(h,u),s.rotate(d),s.fillStyle=`hsl(${100+o()*22}, ${58+o()*14}%, ${m}%)`,s.beginPath(),s.moveTo(-p/2,0),s.quadraticCurveTo(0,-g,p/2,0),s.quadraticCurveTo(0,g,-p/2,0),s.fill(),s.strokeStyle=`hsla(95, 50%, ${m+14}%, 0.55)`,s.lineWidth=1.5,s.beginPath(),s.moveTo(-p/2+3,0),s.lineTo(p/2-3,0),s.stroke(),s.restore()}const r=new Te(n);return r.colorSpace=ie,r.anisotropy=4,r}const FM=[gl(5,0),gl(6,1),gl(7,2)];function OM(i,t){const e=new mt({map:i,alphaTest:.45,side:me,roughness:.8});return e.onBeforeCompile=n=>{n.uniforms.uCentre={value:t},n.vertexShader=`uniform vec3 uCentre;
`+n.vertexShader.replace("#include <defaultnormal_vertex>",`
      vec3 instPos = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
      vec3 outward = normalize(instPos - uCentre + vec3(0.0, 0.25, 0.0));
      vec3 transformedNormal = normalMatrix * outward;
      #ifdef FLIP_SIDED
        transformedNormal = - transformedNormal;
      #endif
    `)},e.customProgramCacheKey=()=>"foliage",M0.push(e),e.color.copy(S0).lerp(w0,re.k*.75),e}function b0(i,t,e,n,s){const o=ve(n),r=new os(new Re(1,1),OM(FM[n%3],s),t),a=new Me,c=new b,l=new gt;let h=-1/0,u=1/0;for(const d of i)h=Math.max(h,d.c.y+d.r*d.sy),u=Math.min(u,d.c.y-d.r*d.sy);for(let d=0;d<t;d++){const p=i[Math.floor(o()*i.length)];do c.set(o()*2-1,o()*2-1,o()*2-1);while(c.lengthSq()>1||c.lengthSq()<.01);c.normalize().multiplyScalar(p.r*(.55+.45*Math.pow(o(),.5))),c.y*=p.sy,a.position.copy(p.c).add(c),a.rotation.set(o()*Math.PI,o()*Math.PI,o()*Math.PI),a.scale.setScalar(e*(.75+o()*.5)),a.updateMatrix(),r.setMatrixAt(d,a.matrix);const g=(a.position.y-u)/Math.max(.01,h-u);l.setHSL(.28-g*.03,.35,.62+g*.3),r.setColorAt(d,l)}return r.castShadow=!0,r.receiveShadow=!0,r}function vl(i,t,e,n){const s=t.clone().sub(i),o=s.length(),r=new kt(n,e,o,8,3);return r.translate(0,o/2,0),r.applyQuaternion(new as().setFromUnitVectors(new b(0,1,0),s.normalize())),r.translate(i.x,i.y,i.z),r}function kM(i,t=1){const e=ve(i),n=new pt,s=(2.4+e()*1.2)*t,o=new b((e()-.5)*.25,0,(e()-.5)*.25).multiplyScalar(t),r=new b(o.x,s,o.z),a=[vl(new b(0,-.1,0),r,.2*t,.11*t)];for(let p=0;p<4;p++){const g=p/4*Math.PI*2+e();a.push(vl(new b(0,.25*t,0),new b(Math.cos(g)*.45*t,-.05,Math.sin(g)*.45*t),.1*t,.03*t))}const c=[],l=s+.6*t,h=(1.25+e()*.35)*t;c.push({c:new b(o.x,l,o.z),r:h,sy:.85});for(let p=0;p<3;p++){const g=p/3*Math.PI*2+e()*.8,v=new b(o.x+Math.cos(g)*h*.75,s+(.2+e()*.6)*t,o.z+Math.sin(g)*h*.75);a.push(vl(new b(o.x*.8,s*.72,o.z*.8),v,.08*t,.03*t)),c.push({c:v.clone().add(new b(0,.25*t,0)),r:h*(.62+e()*.2),sy:.8})}const u=new I(x0(a),NM);u.castShadow=!0,n.add(u);const d=new I(new wc(h*.72,2),new mt({color:"#2f6e2a",roughness:1}));return d.position.copy(c[0].c),d.scale.set(1,.8,1),n.add(d),n.add(b0(c,Math.round(260*t),.95*t,i,c[0].c.clone())),n}function zM(i,t=1){const e=ve(i),n=new pt,s=[],o=2+Math.floor(e()*3);for(let a=0;a<o;a++){const c=e()*Math.PI*2,l=(a?.3:0)*t,h=(.42+e()*.2)*t;s.push({c:new b(Math.cos(c)*l,h*.62,Math.sin(c)*l),r:h,sy:.75})}const r=new I(new wc(s[0].r*.7,2),new mt({color:"#2f6e2a",roughness:1}));return r.position.copy(s[0].c),r.scale.set(1.1,.7,1.1),n.add(r),n.add(b0(s,Math.round(70*t),.55*t,i+1,new b(0,s[0].r*.3,0))),n}function BM(i){const t=ve(45),e=new pt,n=[],s=(o,r,a)=>{for(let c=0;c<20;c++){const l=t()*Math.PI*2,h=o+t()*(r-o),u=Math.cos(l)*h,d=Math.sin(l)*h;if(!(Math.abs(u)<2.2&&d>0&&d<12)&&!Ar(u,d,2)&&!(Math.hypot(u+22,d+8)<10)&&!(Math.hypot(u+12,d-17)<4.5)){{const p=u-19,g=d-2;if(g<0&&Math.abs(Math.atan2(p,-g))<.75)continue}if(n.every(p=>Math.hypot(p[0]-u,p[1]-d)>a))return n.push([u,d]),[u,d]}}return null};for(let o=0;o<12;o++){const r=s(9,38,7);if(!r)continue;const a=kM(100+o,.8+t()*.7);a.position.set(r[0],Ve(r[0],r[1])-.05,r[1]),a.rotation.y=t()*Math.PI*2,e.add(a)}for(let o=0;o<18;o++){const r=s(4,36,2.5);if(!r)continue;const a=zM(300+o,.8+t()*.8);a.position.set(r[0],Ve(r[0],r[1])-.05,r[1]),a.rotation.y=t()*Math.PI*2,e.add(a)}return yi(e),i.add(e),e}const Jo=new b;function Fn(i,t,e,n,s,o){const r=2*Math.PI*s/4,a=Math.max(o-2*s,0),c=Math.PI/4;Jo.copy(t),Jo[n]=0,Jo.normalize();const l=.5*r/(r+a),h=1-Jo.angleTo(i)/c;return Math.sign(Jo[e])===1?h*l:a/(r+a)+l+l*(1-h)}class Se extends $t{constructor(t=1,e=1,n=1,s=2,o=.1){if(s=s*2+1,o=Math.min(t/2,e/2,n/2,o),super(1,1,1,s,s,s),s===1)return;const r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;const a=new b,c=new b,l=new b(t,e,n).divideScalar(2).subScalar(o),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new b,v=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*o,h[m+1]=l.y*Math.sign(a.y)+c.y*o,h[m+2]=l.z*Math.sign(a.z)+c.z*o,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=Fn(g,c,"z","y",o,n),d[f+1]=1-Fn(g,c,"y","z",o,e);break;case 1:g.set(-1,0,0),d[f+0]=1-Fn(g,c,"z","y",o,n),d[f+1]=1-Fn(g,c,"y","z",o,e);break;case 2:g.set(0,1,0),d[f+0]=1-Fn(g,c,"x","z",o,t),d[f+1]=Fn(g,c,"z","x",o,n);break;case 3:g.set(0,-1,0),d[f+0]=1-Fn(g,c,"x","z",o,t),d[f+1]=1-Fn(g,c,"z","x",o,n);break;case 4:g.set(0,0,1),d[f+0]=1-Fn(g,c,"x","y",o,t),d[f+1]=1-Fn(g,c,"y","x",o,e);break;case 5:g.set(0,0,-1),d[f+0]=Fn(g,c,"x","y",o,t),d[f+1]=1-Fn(g,c,"y","x",o,e);break}}}const _n=.74,Ii=.4,to=.25,ss=[1280,800],Je={};function en(){return Je.white||(Je.white=new Ht({color:"#f6f7f9",roughness:.22,metalness:0,clearcoat:1,clearcoatRoughness:.06}),Je.whiteMatte=new mt({color:"#eceef1",roughness:.55}),Je.chrome=new mt({color:"#e8ecf2",roughness:.08,metalness:1}),Je.chromeDark=new mt({color:"#9aa3b0",roughness:.2,metalness:1}),Je.glass=new Ht({color:"#d8f0ff",roughness:.03,metalness:0,transmission:.92,thickness:.4,ior:1.45,transparent:!0,clearcoat:1,attenuationColor:new gt("#9fe0d0"),attenuationDistance:1.2}),Je.glassThin=new Ht({color:"#ffffff",roughness:.02,metalness:0,transmission:.95,thickness:.05,ior:1.4,transparent:!0}),Je.aeroBlue=new Ht({color:"#1f7fe8",roughness:.06,metalness:.05,clearcoat:1,clearcoatRoughness:.02,emissive:"#0a3a8a",emissiveIntensity:.3}),Je.dark=new mt({color:"#1a1f2b",roughness:.5}),Je.leaf=new mt({color:"#3fbf3a",roughness:.6,side:me}),Je.leafDark=new mt({color:"#2a8f2a",roughness:.6,side:me}),Je.soil=new mt({color:"#3a2a1c",roughness:1}),Je.ceramic=new Ht({color:"#ffffff",roughness:.25,clearcoat:.6}),Je.coffee=new mt({color:"#2b170a",roughness:.1}),Je.paper=new mt({color:"#f4f1ea",roughness:.95}),Je.stone=new Ht({color:"#f4f6f8",roughness:.25,clearcoat:.8})),Je}function Cr(i,t,e,n,s=.006,o=4){const r=s>0?new Se(i,t,e,o,s):new $t(i,t,e),a=new I(r,n);return a.castShadow=!0,a.receiveShadow=!0,a}function HM(){const i=en(),t=new pt,e=new I(new kt(2.6,2.85,.18,96),i.white);e.position.y=.09,e.receiveShadow=!0,e.castShadow=!0,t.add(e);const n=new I(new Le(2.6,.02,12,128),i.chrome);n.rotation.x=Math.PI/2,n.position.y=.18,t.add(n);const s=new I(new kt(2.45,2.45,.05,96),i.glass);s.position.y=.205,t.add(s);const o=new I(new Le(2.47,.018,12,128),new mt({color:"#5fb6ff",emissive:"#4aa8ff",emissiveIntensity:2.2}));return o.rotation.x=Math.PI/2,o.position.y=.185,t.add(o),t}function GM(){const i=en(),t=new pt,e=new I(new Se(1.75,.075,.85,6,.035),i.white);e.position.y=_n-.0375,e.castShadow=!0,e.receiveShadow=!0,t.add(e);const n=new Ht({color:"#7fd0ff",emissive:"#3aa8ff",emissiveIntensity:1.6,roughness:.2,transmission:.3,transparent:!0,opacity:.9}),s=new I(new Se(1.76,.012,.86,3,.006),n);s.position.y=_n-.072,t.add(s);const o=new I(new Se(.62,.02,.26,3,.01),i.glass);o.position.set(0,_n-.004,.16),t.add(o);const r=[[0,0],[.42,0],[.44,.03],[.36,.08],[.22,.2],[.16,.36],[.17,.5],[.26,.62],[.42,.68],[.42,.7],[0,.7]].map(([u,d])=>new st(u,d)),a=new I(new ls(r,64),i.white);a.scale.set(1,(_n-.075)/.7,.75),a.castShadow=!0,a.receiveShadow=!0,t.add(a);const c=new I(new Le(.43,.012,12,96),n);c.rotation.x=Math.PI/2,c.position.y=.03,c.scale.z=.75,t.add(c);const l=new I(new Se(.42,.14,.5,4,.03),new Ht({color:"#5fb8ff",roughness:.05,transmission:.7,thickness:.3,ior:1.4,transparent:!0,clearcoat:1,emissive:"#1f6fd0",emissiveIntensity:.15}));l.position.set(.55,_n-.15,-.05),l.castShadow=!0,t.add(l);const h=new I(new Se(.14,.016,.02,2,.006),i.white);return h.position.set(.55,_n-.12,.21),t.add(h),t}function VM(){const i=en(),t=new pt,e=new Ht({color:"#59c6ea",roughness:.08,metalness:0,transmission:.55,thickness:.25,ior:1.45,transparent:!0,clearcoat:1,clearcoatRoughness:.04,attenuationColor:new gt("#2a9cc8"),attenuationDistance:.5}),n=new Ht({color:"#f3f8fb",roughness:.15,transmission:.25,thickness:.1,transparent:!0,clearcoat:1,clearcoatRoughness:.06});e.userData.solidity=.8,n.userData.solidity=.95,n.userData.bezel=!0;const s=new mt({color:"#8fa9b8",roughness:.7}),o=0,r=.27,a=0,c=new I(new Wt(.22,48,32),e);c.scale.set(1.1,.92,1),c.position.set(o,r,a-.1),c.castShadow=!0,t.add(c);const l=new I(new kt(.07,.15,.2,24),s);l.rotation.x=Math.PI/2,l.position.set(o,r,a-.09),t.add(l);const h=new I(new Se(Ii+.1,to+.15,.06,6,.03),n);h.position.set(o,r,a+.13),h.castShadow=!0,t.add(h);const u=new I(new Se(Ii+.012,to+.012,.01,3,.004),i.dark);u.position.set(o,r+.02,a+.158),t.add(u);const d=new I(new Re(Ii,to),new $e({color:0,opacity:0,blending:fi,side:me}));d.position.set(o,r+.02,a+.164),d.name="screen",t.add(d);const p=new I(new Re(Ii,to),new Ht({color:16777215,transparent:!0,opacity:.045,roughness:.02,clearcoat:1,depthWrite:!1}));p.position.set(o,r+.02,a+.1645),t.add(p);for(const x of[-.15,.15]){const _=new I(new Dn(.03,32),new mt({color:"#b9d7e6",roughness:.9}));_.position.set(o+x,r-to/2-.03,a+.161),t.add(_)}const g=Cr(.1,.005,.006,i.dark,.001);g.position.set(o,r-to/2-.03,a+.161),t.add(g);const v=new I(new Le(.075,.016,12,32,Math.PI),e);v.position.set(o,r+.22,a-.06),v.rotation.y=Math.PI/2,v.rotation.z=0,v.castShadow=!0,t.add(v);const m=new I(new Se(.3,.03,.1,3,.012),e);m.position.set(o,.015,a+.08),t.add(m);const f=new I(new Se(.34,.03,.2,3,.012),e);return f.position.set(o,.015,a-.1),t.add(f),t}function WM(){const i=en(),t=new pt,e=new Ht({color:"#59c6ea",roughness:.08,transmission:.5,thickness:.1,ior:1.45,transparent:!0,clearcoat:1}),n=new I(new Se(.46,.014,.15,3,.006),e);n.position.set(0,.007,0),n.castShadow=!0,t.add(n);const s=Cr(.43,.01,.125,i.white,.004);s.position.set(0,.011,0),t.add(s);const o=new Se(.019,.007,.019,2,.0025),r=[16,16,15,14,9],a=r.reduce((v,m)=>v+m,0),c=new os(o,i.whiteMatte,a),l=new Me;let h=0;r.forEach((v,m)=>{const f=(v-1)*.0235;for(let x=0;x<v;x++)l.position.set(-f/2+x*.0235+(m===4?.04:0),.02,-.048+m*.024),l.updateMatrix(),c.setMatrixAt(h++,l.matrix)}),c.castShadow=!0,t.add(c);const u=Cr(.14,.007,.019,i.whiteMatte,.0025);u.position.set(-.08,.02,.048),t.add(u);const d=new pt,p=new I(new Wt(.03,32,16),i.white);p.scale.set(.98,.5,.98),p.position.y=.012,p.castShadow=!0,d.add(p);const g=new I(new Wt(.034,32,16,0,Math.PI*2,0,Math.PI/2),e);return g.scale.set(1,.55,1),g.position.y=.004,d.add(g),d.position.set(.36,0,.02),d.rotation.y=-.25,t.add(d),t}function XM(){const i=en(),t=new pt,e=new Ht({color:"#f6f7f9",roughness:.62,clearcoat:.25,clearcoatRoughness:.4,envMapIntensity:.35,side:me}),n=new Wt(.3,48,32,Math.PI*.15,Math.PI*.7,Math.PI*.22,Math.PI*.5),s=new I(n,e);s.scale.set(1,1.35,1),s.position.set(0,.55,0),s.castShadow=!0,s.receiveShadow=!0,t.add(s);const o=new I(new kt(.235,.21,.05,48),e);o.position.set(0,.49,-.03),o.castShadow=!0,t.add(o);const r=new I(new kt(.02,.024,.34,16),i.chrome);r.position.y=.3,t.add(r);const a=new I(new kt(.05,.05,.03,24),i.chrome);a.position.y=.13,t.add(a);for(let c=0;c<5;c++){const l=c/5*Math.PI*2,h=new I(new kt(.012,.012,.3,10),i.chrome);h.position.set(Math.cos(l)*.15,.08,Math.sin(l)*.15),h.rotation.z=Math.cos(l)*1.2,h.rotation.x=-Math.sin(l)*1.2,t.add(h);const u=new I(new Wt(.028,16,12),i.whiteMatte);u.position.set(Math.cos(l)*.29,.028,Math.sin(l)*.29),t.add(u)}return t}function qM(){const i=document.createElement("canvas");i.width=128,i.height=256;const t=i.getContext("2d");t.fillStyle="#3fbf3a",t.beginPath(),t.moveTo(64,0),t.bezierCurveTo(128,60,120,200,64,256),t.bezierCurveTo(8,200,0,60,64,0),t.fill(),t.strokeStyle="rgba(20,90,20,0.5)",t.lineWidth=3,t.beginPath(),t.moveTo(64,10),t.lineTo(64,246),t.stroke();const e=new Te(i);return e.colorSpace=ie,e}function $M(){const i=en(),t=new pt,e=new I(new kt(.07,.05,.12,48),i.white);e.position.y=.06,e.castShadow=!0,t.add(e);const n=new I(new Dn(.065,32),i.soil);n.rotation.x=-Math.PI/2,n.position.y=.115,t.add(n);const s=new mt({map:qM(),transparent:!0,alphaTest:.5,side:me,roughness:.6}),o=ve(23);for(let r=0;r<14;r++){const a=r/14*Math.PI*2+o()*.4,c=.14+o()*.12,l=new I(new kt(.003,.004,c,6),i.leafDark),h=.5+o()*.6;l.position.set(Math.cos(a)*Math.sin(h)*c/2,.115+Math.cos(h)*c/2,Math.sin(a)*Math.sin(h)*c/2),l.rotation.z=-Math.cos(a)*h,l.rotation.x=Math.sin(a)*h,t.add(l);const u=new I(new Re(.07+o()*.03,.13+o()*.05),s);u.position.set(Math.cos(a)*Math.sin(h)*c,.115+Math.cos(h)*c+.05,Math.sin(a)*Math.sin(h)*c),u.rotation.y=-a+Math.PI/2,u.rotation.x=-.4-o()*.5,u.castShadow=!0,t.add(u)}return t}function YM(){const i=en(),t=new pt,e=new I(new kt(.04,.035,.095,48,1,!0),i.ceramic.clone());e.material.side=me,e.position.y=.0475,e.castShadow=!0,t.add(e);const n=new I(new Dn(.035,48),i.ceramic);n.rotation.x=-Math.PI/2,n.position.y=.001,t.add(n);const s=new I(new Dn(.038,48),i.coffee);s.rotation.x=-Math.PI/2,s.position.y=.078,t.add(s);const o=new I(new Le(.022,.006,12,32,Math.PI),i.ceramic);return o.position.set(.04,.05,0),o.rotation.z=-Math.PI/2,o.rotation.y=Math.PI/2,t.add(o),t}function jM(){const i=en(),t=new pt,e=Cr(.16,.012,.21,new mt({color:"#2b5fb8",roughness:.7}),.003);e.position.y=.006,t.add(e);const n=Cr(.155,.009,.2,i.paper,.001);n.position.set(.004,.0065,0),t.add(n);const s=new I(new kt(.004,.004,.14,12),i.chrome);return s.rotation.z=Math.PI/2,s.rotation.y=.4,s.position.set(0,.016,.06),t.add(s),t}function ZM(i=.07){const t=en(),e=new pt,n=new I(new kt(i*.5,i*.75,.016,32),t.chrome);n.position.y=.008,e.add(n);const s=new I(new Wt(i,48,32),t.aeroBlue);s.position.y=i+.012,s.castShadow=!0,e.add(s);const o=new bu("#5fb3ff",.5,1.2,2);return o.position.y=i+.012,e.add(o),e}function KM(){const i=document.createElement("canvas");i.width=256,i.height=96;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,96);e.addColorStop(0,"#fff4cf"),e.addColorStop(1,"#d9a93f"),t.fillStyle=e,t.fillRect(0,0,256,96),t.fillStyle="#5a3a08",t.textAlign="center",t.textBaseline="middle",t.font="bold 34px Arial, sans-serif",t.fillText("1ST PLACE",128,34),t.font="22px Arial, sans-serif",t.fillText("SPLUNK BOTS v10",128,70);const n=new Te(i);return n.colorSpace=ie,n.anisotropy=4,n}function JM(){const i=en(),t=new pt,e=new Ht({color:"#ffc63d",metalness:.7,roughness:.2,clearcoat:1,clearcoatRoughness:.05,emissive:"#a86a00",emissiveIntensity:.35,envMapIntensity:.6}),n=new I(new Se(.11,.05,.11,4,.012),i.white);n.position.y=.025,n.castShadow=!0,n.receiveShadow=!0,t.add(n);const s=new I(new Re(.085,.032),new mt({map:KM(),metalness:.6,roughness:.25}));s.position.set(0,.025,.0555),t.add(s);const o=[[0,.05],[.032,.05],[.03,.056],[.012,.064],[.008,.1],[.012,.11],[.03,.116],[.05,.135],[.058,.165],[.056,.19],[.052,.19],[.053,.166],[.045,.138],[0,.124]].map(([a,c])=>new st(a,c)),r=new I(new ls(o,64),e);r.material.side=me,r.castShadow=!0,t.add(r);for(const a of[-1,1]){const c=new I(new Le(.02,.004,12,32,Math.PI),e);c.position.set(a*.052,.16,0),c.rotation.z=-a*Math.PI/2,t.add(c)}return t.scale.setScalar(1.3),t}function QM(i){const t=en(),e=new pt,n=.2,s=.15,o=.014,r=new pt;r.rotation.x=-.18,r.position.y=.006,e.add(r);const a=new I(new Se(n+.03,s+.03,o,4,.006),t.white);a.position.y=(s+.03)/2,a.castShadow=!0,r.add(a);const c=new oM().load(i);c.colorSpace=ie,c.anisotropy=8;const l=new I(new Re(n,s),new $e({map:c,toneMapped:!1,color:"#e8e8e8"}));l.position.set(0,(s+.03)/2,o/2+8e-4),r.add(l);const h=new I(new Re(n,s),new Ht({color:"#ffffff",roughness:.02,transparent:!0,opacity:.08,clearcoat:1}));h.position.set(0,(s+.03)/2,o/2+.002),r.add(h);const u=new I(new Se(.03,.15,.008,2,.003),t.white);return u.position.set(0,.075,-.045),u.rotation.x=.42,u.castShadow=!0,e.add(u),e}const tw={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_SITE_URL:"https://stongeren.github.io/"};let Qo=null;function E0(){return Qo||(Qo=new(window.AudioContext||window.webkitAudioContext)),Qo.state==="suspended"&&Qo.resume(),Qo}const De=i=>440*Math.pow(2,(i-69)/12),ew=tw&&"/"||"/",nw={startup:"startup",logoff:"logoff",open:"ding",error:"chord",notify:"balloon",click:"start",minimize:"minimize",restore:"restore"},Bh={};for(const[i,t]of Object.entries(nw)){const e=new Audio(`${ew}sounds/${t}.wav`);e.preload="auto",e.addEventListener("canplaythrough",()=>{Bh[i]=e},{once:!0}),e.addEventListener("error",()=>{delete Bh[i]},{once:!0})}function ri(i,t=.7){const e=Bh[i];if(!e)return!1;const n=e.cloneNode();return n.volume=t,n.play().catch(()=>{}),!0}function Qe(i,t,e="sine",n=.08,s=0,o=.01){const r=E0(),a=r.createOscillator(),c=r.createGain();a.type=e,a.frequency.value=i;const l=r.currentTime+s;c.gain.setValueAtTime(0,l),c.gain.linearRampToValueAtTime(n,l+o),c.gain.exponentialRampToValueAtTime(1e-4,l+t),a.connect(c).connect(r.destination),a.start(l),a.stop(l+t+.02)}function mn(i,t,e=.07,n=0){Qe(i,t,"sine",e,n),Qe(i*2,t*.6,"sine",e*.35,n),Qe(i*3.01,t*.35,"sine",e*.18,n)}function wa(i,t,e=.05,n=0){const s=E0(),o=s.createBiquadFilter();o.type="lowpass",o.frequency.value=1400;const r=s.createGain(),a=s.currentTime+n;r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(e,a+t*.4),r.gain.linearRampToValueAtTime(0,a+t),o.connect(r).connect(s.destination);for(const c of[-6,5]){const l=s.createOscillator();l.type="triangle",l.frequency.value=i,l.detune.value=c,l.connect(o),l.start(a),l.stop(a+t+.05)}}const ne={click(){ri("click",.5)||Qe(1800,.03,"square",.025)},key(){Qe(2400+Math.random()*400,.02,"square",.02)},open(){ri("open")||mn(De(88),.7,.06)},close(){ri("open",.5)||mn(De(81),.5,.045)},minimize(){ri("minimize")||mn(De(76),.3,.04)},restore(){ri("restore")||mn(De(83),.3,.04)},error(){ri("error")||(Qe(De(66),.22,"triangle",.07),Qe(De(60),.3,"triangle",.06,.02))},notify(){ri("notify")||(Qe(520,.05,"triangle",.05),mn(De(93),.5,.045,.06))},startup(){ri("startup",.8)||(wa(De(52),3.2,.045),wa(De(59),3.2,.04,.1),wa(De(64),3,.035,.2),[[64,.3],[71,.75],[76,1.2],[80,1.65],[83,2.1]].forEach(([i,t])=>mn(De(i),1.4,.05,t)))},logoff(){ri("logoff",.8)||([[76,0],[71,.28],[64,.56]].forEach(([i,t])=>mn(De(i),.9,.05,t)),wa(De(52),1.8,.03,.3))},sit(){Qe(300,.2,"triangle",.04)},found(){[74,78,81,86].forEach((i,t)=>mn(De(i),.9-t*.1,.06,t*.09)),mn(De(93),1.2,.035,.38)},checkpoint(){mn(De(81),.6,.06),mn(De(86),.8,.06,.11),mn(De(93),1,.035,.22)},alchemy(){for(let i=0;i<18;i++)Qe(900+Math.random()*2400,.03,"square",.018,i*.045);mn(De(74),1.2,.05,.5),mn(De(81),1.2,.045,.56),mn(De(86),1.4,.04,.62)},thump(){Qe(70,.35,"sine",.12),Qe(110,.2,"triangle",.05,.02)},tick(){Qe(De(98),.025,"sine",.018)},pop(){ri("notify",.5)||(Qe(900+Math.random()*500,.06,"sine",.07),Qe(420,.05,"triangle",.03,.01))},jump(){Qe(380,.08,"triangle",.04),Qe(520,.1,"triangle",.03,.06)},land(){Qe(160,.07,"triangle",.05)}};class iw extends I{constructor(t,e={}){super(t),this.isWater=!0;const n=this,s=e.textureWidth!==void 0?e.textureWidth:512,o=e.textureHeight!==void 0?e.textureHeight:512,r=e.clipBias!==void 0?e.clipBias:0,a=e.alpha!==void 0?e.alpha:1,c=e.time!==void 0?e.time:0,l=e.waterNormals!==void 0?e.waterNormals:null,h=e.sunDirection!==void 0?e.sunDirection:new b(.70707,.70707,0),u=new gt(e.sunColor!==void 0?e.sunColor:16777215),d=new gt(e.waterColor!==void 0?e.waterColor:8355711),p=e.eye!==void 0?e.eye:new b(0,0,0),g=e.distortionScale!==void 0?e.distortionScale:20,v=e.side!==void 0?e.side:gi,m=e.fog!==void 0?e.fog:!1,f=new Ki,x=new b,_=new b,y=new b,T=new se,w=new b(0,0,-1),R=new pe,C=new b,S=new b,M=new pe,P=new se,F=new wn,O=new Ln(s,o),V={name:"MirrorShader",uniforms:Rs.merge([xt.fog,xt.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new se},sunColor:{value:new gt(8355711)},sunDirection:{value:new b(.70707,.70707,0)},eye:{value:new b},waterColor:{value:new gt(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},Z=new Ye({name:V.name,uniforms:Rs.clone(V.uniforms),vertexShader:V.vertexShader,fragmentShader:V.fragmentShader,lights:!0,side:v,fog:m});Z.uniforms.mirrorSampler.value=O.texture,Z.uniforms.textureMatrix.value=P,Z.uniforms.alpha.value=a,Z.uniforms.time.value=c,Z.uniforms.normalSampler.value=l,Z.uniforms.sunColor.value=u,Z.uniforms.waterColor.value=d,Z.uniforms.sunDirection.value=h,Z.uniforms.distortionScale.value=g,Z.uniforms.eye.value=p,n.material=Z,n.onBeforeRender=function(U,k,N){if(_.setFromMatrixPosition(n.matrixWorld),y.setFromMatrixPosition(N.matrixWorld),T.extractRotation(n.matrixWorld),x.set(0,0,1),x.applyMatrix4(T),C.subVectors(_,y),C.dot(x)>0)return;C.reflect(x).negate(),C.add(_),T.extractRotation(N.matrixWorld),w.set(0,0,-1),w.applyMatrix4(T),w.add(y),S.subVectors(_,w),S.reflect(x).negate(),S.add(_),F.position.copy(C),F.up.set(0,1,0),F.up.applyMatrix4(T),F.up.reflect(x),F.lookAt(S),F.far=N.far,F.updateMatrixWorld(),F.projectionMatrix.copy(N.projectionMatrix),P.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),P.multiply(F.projectionMatrix),P.multiply(F.matrixWorldInverse),f.setFromNormalAndCoplanarPoint(x,_),f.applyMatrix4(F.matrixWorldInverse),R.set(f.normal.x,f.normal.y,f.normal.z,f.constant);const G=F.projectionMatrix;M.x=(Math.sign(R.x)+G.elements[8])/G.elements[0],M.y=(Math.sign(R.y)+G.elements[9])/G.elements[5],M.z=-1,M.w=(1+G.elements[10])/G.elements[14],R.multiplyScalar(2/R.dot(M)),G.elements[2]=R.x,G.elements[6]=R.y,G.elements[10]=R.z+1-r,G.elements[14]=R.w,p.setFromMatrixPosition(N.matrixWorld);const W=U.getRenderTarget(),Q=U.xr.enabled,et=U.shadowMap.autoUpdate;n.visible=!1,U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(O),U.state.buffers.depth.setMask(!0),U.autoClear===!1&&U.clear(),U.render(k,F),n.visible=!0,U.xr.enabled=Q,U.shadowMap.autoUpdate=et,U.setRenderTarget(W);const ht=N.viewport;ht!==void 0&&U.state.viewport(ht)}}}const hn={x:19,z:9,y:-1.05};function sw(){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d"),n=ve(5),s=new Float32Array(512*512);for(let a=0;a<512;a++)for(let c=0;c<512;c++){const l=c/512*Math.PI*2,h=a/512*Math.PI*2;s[a*512+c]=Math.sin(l*3+Math.cos(h*2)*1.5)*.5+Math.sin(h*5+l*2)*.3+Math.sin(l*9-h*7)*.15+(n()-.5)*.08}const o=e.createImageData(512,512);for(let a=0;a<512;a++)for(let c=0;c<512;c++){const l=s[a*512+(c-1+512)%512],h=s[a*512+(c+1)%512],u=s[(a-1+512)%512*512+c],d=s[(a+1)%512*512+c],p=(l-h)*2,g=(u-d)*2,v=Math.hypot(p,g,1),m=(a*512+c)*4;o.data[m]=(p/v*.5+.5)*255,o.data[m+1]=(g/v*.5+.5)*255,o.data[m+2]=(1/v*.5+.5)*255,o.data[m+3]=255}e.putImageData(o,0,0);const r=new Te(t);return r.wrapS=r.wrapT=Fi,r}function ow(i){const t=new Dn(13,128),e=new iw(t,{textureWidth:512,textureHeight:512,waterNormals:sw(),sunDirection:i.clone().normalize(),sunColor:16773840,waterColor:2854384,distortionScale:2.2,fog:!0,alpha:1});e.rotation.x=-Math.PI/2,e.position.set(hn.x,hn.y,hn.z),e.material.uniforms.size.value=6,e.material.fragmentShader=e.material.fragmentShader.replace("float rf0 = 0.3;","float rf0 = 0.10;").replace("pow( ( 1.0 - theta ), 5.0 )","pow( max( 1.0 - theta, 0.0 ), 3.0 ) * 0.7"),e.material.needsUpdate=!0,e.name="lake";const n=e.onBeforeRender;let s=0;e.onBeforeRender=function(a,c,l){s++%(e.userData.every||2)===0&&n.call(this,a,c,l)};const o=new I(new Dn(12.6,128),new mt({color:"#1a6fd6",roughness:.4,metalness:.1,emissive:"#0b3f8a",emissiveIntensity:.25}));o.rotation.x=-Math.PI/2,o.position.set(hn.x,hn.y-.03,hn.z),e.userData.bed=o;const r=new I(new kt(12.6,8,3,96,1,!1),new Ht({color:"#2f8ae8",roughness:.3,transmission:.45,thickness:2,ior:1.33,transparent:!0,opacity:.85,side:me,depthWrite:!1}));return r.position.set(hn.x,hn.y-1.62,hn.z),e.userData.volume=r,e}let oc=null;function rw(){return oc}function aw(i,t){if(!oc)return null;const e=oc;if(Math.abs(t-e.z)>1||i<e.x0-.8||i>e.x1+.8)return null;const n=Math.min(1,Math.max(0,(i-e.x0)/(e.x1-e.x0)));return e.curve.getPoint(n).y+.06}function cw(i,t){const e=t(),n=new pt,s=hn.z-7,o=v=>{let m=hn.x;for(;i(m,s)<hn.y+.15&&Math.abs(m-hn.x)<20;)m+=v*.25;return m+v*.6},r=o(-1),a=o(1),c=i(r,s),l=i(a,s),h=Math.max(c,l)+1.6,u=new _c(new b(r,c,s),new b((r+a)/2,h+(h-Math.min(c,l)),s),new b(a,l,s)),d=36,p=u.getPoints(d);for(let v=0;v<d;v++){const m=p[v],f=p[v+1],x=m.distanceTo(f)+.02,_=new I(new Se(x,.12,2.2,2,.04),e.white);_.position.copy(m).lerp(f,.5),_.rotation.z=Math.atan2(f.y-m.y,f.x-m.x),_.castShadow=!0,_.receiveShadow=!0,n.add(_)}for(const v of[-1,1]){const m=p.map(x=>new b(x.x,x.y+1,x.z+v*1)),f=new I(new ki(new xi(m),72,.04,10),e.chrome);f.castShadow=!0,n.add(f);for(let x=0;x<=d;x+=4){const _=p[x],y=new I(new kt(.03,.03,1,10),e.chrome);y.position.set(_.x,_.y+.55,_.z+v*1),n.add(y)}for(let x=0;x<d;x++){const _=p[x],y=p[x+1],T=_.distanceTo(y),w=new I(new $t(T,.8,.02),e.glassThin);w.position.copy(_).lerp(y,.5),w.position.y+=.5,w.position.z+=v*1,w.rotation.z=Math.atan2(y.y-_.y,y.x-_.x),n.add(w)}}for(const[v,m,f]of[[r,c,-1],[a,l,1]]){const x=new Se(1.4,2.2,2.3,2,.06),_=new I(x,e.white);_.position.set(v+f*.25,m-1.13,s);const y=_;y.castShadow=!0,y.receiveShadow=!0,n.add(y)}const g=new bu("#5fb3ff",.8,10,2);return g.position.set((r+a)/2,h-.5,s),n.add(g),yi(n),n.name="lakeBridge",n.userData.top=new b((r+a)/2,u.getPoint(.5).y,s),oc={x0:r,x1:a,z:s,curve:u},n}function lw(i,t){i.material.uniforms.time.value+=t*.35}function T0(i,t=28){const e=i.length,n=[],s=[],o=[];for(let a=0;a<e;a++){const c=i[a];for(let l=0;l<=t;l++){const h=l/t*Math.PI*2,u=Math.cos(h);n.push(c.x,(c.y||0)+u*(u>=0?c.h:c.hb||c.h),Math.sin(h)*c.w),s.push(a/(e-1),l/t)}}for(let a=0;a<e-1;a++)for(let c=0;c<t;c++){const l=a*(t+1)+c,h=l+t+1;o.push(l,l+1,h,h,l+1,h+1)}for(const[a,c]of[[0,!0],[e-1,!1]]){const l=i[a],h=n.length/3,u=((l.h||0)-(l.hb||l.h||0))/2;n.push(l.x+(c?-.004:.004),(l.y||0)+u,0),s.push(a/(e-1),.5);const d=a*(t+1);for(let p=0;p<t;p++)c?o.push(h,d+p,d+p+1):o.push(h,d+p+1,d+p)}const r=new ge;return r.setAttribute("position",new Bt(n,3)),r.setAttribute("uv",new Bt(s,2)),r.setIndex(o),r.computeVertexNormals(),r}function Sa(i){const t=new Dr;t.moveTo(i[0][0],i[0][1]);for(let e=1;e<i.length;e++){const n=i[e];n.length===4?t.quadraticCurveTo(n[0],n[1],n[2],n[3]):t.lineTo(n[0],n[1])}return t.closePath(),new Mu(t,12)}function A0(){const i=document.createElement("canvas");i.width=512,i.height=128;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,128);e.addColorStop(0,"#ff7a14"),e.addColorStop(.35,"#ff9a2e"),e.addColorStop(.5,"#ffd9a0"),e.addColorStop(.65,"#ff9a2e"),e.addColorStop(1,"#ff7a14"),t.fillStyle=e,t.fillRect(0,0,512,128);for(const[s,o]of[[150,22],[290,34],[410,26]])t.fillStyle="#1a1a1a",t.beginPath(),t.moveTo(s-o-6,0),t.quadraticCurveTo(s-o-18,64,s-o-6,128),t.lineTo(s+o+6,128),t.quadraticCurveTo(s+o+18,64,s+o+6,0),t.closePath(),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.moveTo(s-o,0),t.quadraticCurveTo(s-o-12,64,s-o,128),t.lineTo(s+o,128),t.quadraticCurveTo(s+o+12,64,s+o,0),t.closePath(),t.fill();const n=new Te(i);return n.colorSpace=ie,n.anisotropy=8,n}function xl(i){let t=.21*Math.pow(Math.sin(Math.PI*Math.pow(i,.85)),.8);i<.12&&(t=Math.max(t,.035+i*.3)),t=Math.max(t,.03);const e=t*(.48+.12*Math.sin(Math.PI*i));return{h:t,w:e}}function C0(i,t,e){const n=new pt,s=[],o=30;for(let f=0;f<=o;f++){const x=f/o,{h:_,w:y}=xl(x);s.push({x:-.5+x,h:_,w:y,y:0})}s[s.length-1].h=.01,s[s.length-1].w=.01;const r=new I(T0(s),i);r.castShadow=!0,r.name="body",r.userData.base=r.geometry.attributes.position.array.slice(),n.add(r);const a=new pt;a.position.x=-.47,a.name="tail";const c=new I(Sa([[0,-.035],[-.16,-.19,-.26,-.17],[-.19,0,-.16,0],[-.26,.17,-.16,.19],[0,.035]]),t);a.add(c),n.add(a);const l=new I(Sa([[-.24,.15],[-.05,.4,.16,.18],[.16,.18]]),t);n.add(l);const h=new I(Sa([[-.24,-.13],[-.1,-.33,.02,-.15],[.02,-.15]]),t);n.add(h);const u=.62,d=xl(u);for(const f of[-1,1]){const x=new I(Sa([[.02,0],[-.1,-.08,-.15,-.02],[-.02,.025]]),t);x.position.set(-.5+u,-.25*d.h,f*d.w*.8),x.rotation.y=f*.9,x.rotation.x=f*.3,x.name=f<0?"pecL":"pecR",n.add(x)}const p=.84,g=xl(p),v=.3*g.h,m=new mt({color:"#fff7e8",roughness:.5});for(const f of[-1,1]){const x=f*(v/g.h)*0+f*Math.sqrt(1-Math.pow(v/g.h,2)),_=new b(0,v/g.h*(g.w/g.h),x).normalize(),y=new b(-.5+p,v,f*g.w*Math.sqrt(1-Math.pow(v/g.h,2))),T=new I(new Wt(.03,16,12),m);T.scale.set(1,1,.35),T.position.copy(y).addScaledVector(_,.004),T.lookAt(T.position.clone().add(_)),n.add(T);const w=new I(new Wt(.017,16,12),e);w.position.copy(y).addScaledVector(_,.012),n.add(w);const R=new I(new Wt(.006,8,6),new $e({color:"#fff"}));R.position.copy(y).addScaledVector(_,.027).add(new b(.006,.006,0)),n.add(R)}return n}function hw(){const i=new Ht({map:A0(),roughness:.3,clearcoat:.9,clearcoatRoughness:.15,emissive:"#ff6a10",emissiveIntensity:.18}),t=new Ht({color:"#ff9a3c",roughness:.4,side:me,emissive:"#ff5a00",emissiveIntensity:.15}),e=new mt({color:"#111",roughness:.2});return C0(i,t,e)}function uw(i=9){const t=new pt,e=new Ht({map:A0(),roughness:.3,clearcoat:.9,clearcoatRoughness:.15,emissive:"#ff6a10",emissiveIntensity:.18}),n=new Ht({color:"#ff9a3c",roughness:.4,side:me,emissive:"#ff5a00",emissiveIntensity:.15}),s=new mt({color:"#111",roughness:.2}),o=new Ht({color:16777215,roughness:.02,transmission:.96,thickness:.15,ior:1.12,iridescence:.8,transparent:!0,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.3}),r=ve(88);for(let a=0;a<i;a++){const c=C0(e,n,s);yi(c);const l=1.2+r()*1;if(c.scale.setScalar(l),c.userData={cx:(r()-.5)*36,cz:(r()-.5)*36+6,rx:4+r()*10,rz:3+r()*8,h:2.5+r()*5,speed:.12+r()*.18,phase:r()*Math.PI*2,bob:r()*5,dir:r()>.5?1:-1},a%3===0){const h=new I(new Wt(.86,32,24),o);c.add(h)}t.add(c)}return t.name="fishes",t}const vr=[],tr=new b;function dw(i){vr.length=0,vr.push(...i)}let Mf=0;const fw=new b,pw=new b;function mw(i,t){Mf++;let e=0;for(const n of i.children){e++;const s=n.userData;if(s.frozen){n.position.set(s.cx,s.h,s.cz),n.rotation.set(0,0,0),n.getObjectByName("tail").rotation.y=Math.sin(t*7)*.45,Hh(n.getObjectByName("body"),t*7,"z",.035,5.5);continue}const o=t*s.speed*s.dir+s.phase,r=s.cx+Math.cos(o)*s.rx,a=s.cz+Math.sin(o)*s.rz,c=Math.max(Ve(r,a)+1.4,s.h+Math.sin(t*.7+s.bob)*.6),l=fw.copy(n.position);n.position.set(r,c,a),s.off||(s.off=new b);const h=1.05*n.scale.x+.7;n.position.add(s.off);let u=!1;for(const m of vr){tr.subVectors(n.position,m);const f=tr.length();f<h&&(tr.multiplyScalar(f>1e-4?(h-f)/f:0),tr.y+=(h-f)*.3,s.off.add(tr.multiplyScalar(.25)),f<h*.55&&(u=!0))}if(s.off.multiplyScalar(.985),n.visible=!u,l.lengthSq()>0){const m=pw.subVectors(n.position,l);if(m.lengthSq()>1e-6){const f=Math.atan2(-m.z,m.x);n.rotation.set(s.dir*.25,f,Math.atan2(m.y,Math.hypot(m.x,m.z))*.6)}}const d=Math.sin(t*7+s.phase);n.getObjectByName("tail").rotation.y=d*.45,(!(vr.length&&n.position.distanceToSquared(vr[0])>625)||(Mf+e)%3===0)&&Hh(n.getObjectByName("body"),t*7+s.phase,"z",.035,5.5);const g=n.getObjectByName("pecL"),v=n.getObjectByName("pecR");g.rotation.y=-.9+Math.sin(t*4+s.phase)*.3,v.rotation.y=.9-Math.sin(t*4+s.phase)*.3}}function Hh(i,t,e,n,s){const o=i.geometry.attributes.position,r=i.userData.base,a=e==="z"?2:1;for(let c=0;c<o.count;c++){const l=r[c*3],h=Math.max(0,.3-l)/.8;o.array[c*3+a]=r[c*3+a]+Math.sin(l*s-t)*n*h}o.needsUpdate=!0}function gw(i){return t=>{if(t<=i[0][0])return i[0][1];for(let e=1;e<i.length;e++)if(t<=i[e][0]){const[n,s]=i[e-1],[o,r]=i[e],a=(t-n)/(o-n),c=a*a*(3-2*a);return s+(r-s)*c}return i[i.length-1][1]}}const eo=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},er=new gt("#1b1f29"),wf=new gt("#f5f7fb"),vw=new gt("#ffc861");new gt("#ff8a1e");let ba=null;function xw(){return ba||(ba={skin:new Ht({vertexColors:!0,roughness:.38,clearcoat:.7,clearcoatRoughness:.25}),beak:new Ht({color:"#ff8a1e",roughness:.35,clearcoat:.6,emissive:"#7a3000",emissiveIntensity:.15}),eyeWhite:new mt({color:"#ffffff",roughness:.25}),pupil:new mt({color:"#0a0a0e",roughness:.15}),glint:new $e({color:"#ffffff"})},ba)}function _w(){const i=xw(),t=new pt,e=gw([[-.54,0],[-.47,.09],[-.32,.19],[-.1,.24],[.08,.23],[.22,.185],[.3,.165],[.38,.17],[.47,.13],[.53,.06],[.555,0]]),n=48,s=48,o=[],r=[],a=[],c=new gt,l=(g,v)=>{const m=Math.max(.004,e(g)),f=Math.cos(v),x=Math.sin(v);return[g,f*m*(f<0?1.08:.95),x*m*.92]};for(let g=0;g<=n;g++){const v=-.54+1.095*g/n;for(let m=0;m<=s;m++){const f=m/s*Math.PI*2-Math.PI,x=Math.abs(f);o.push(...l(v,f));const _=1.95-eo(.24,.5,v)*.85;c.copy(er).lerp(wf,eo(_-.22,_+.22,x)),c.lerp(vw,eo(.12,.24,v)*(1-eo(.3,.36,v))*eo(1.7,2.3,x)*.75),r.push(c.r,c.g,c.b)}}for(let g=0;g<n;g++)for(let v=0;v<s;v++){const m=g*(s+1)+v,f=m+s+1;a.push(m,m+1,f,f,m+1,f+1)}const h=new ge;h.setAttribute("position",new Bt(o,3)),h.setAttribute("color",new Bt(r,3)),h.setIndex(a),h.computeVertexNormals();const u=new I(h,i.skin);u.castShadow=!0,t.add(u);const d=new I(new Cn(.045,.17,14),i.beak);d.scale.set(1,1,.8),d.rotation.z=-Math.PI/2-.12,d.position.set(.6,.035,0),t.add(d);const p=new I(new Cn(.03,.12,12),i.beak);p.scale.set(1,1,.8),p.rotation.z=-Math.PI/2+.05,p.position.set(.58,0,0),t.add(p);for(const g of[-1,1]){const[v,m,f]=l(.44,g*1.05),x=new I(new Wt(.036,16,12),i.eyeWhite);x.position.set(v-.005,m,f*.97),x.scale.set(.8,1,.55),t.add(x);const _=new I(new Wt(.024,14,10),i.pupil);_.position.set(v+.006,m-.002,f*.97+g*.012),_.scale.set(.8,1,.5),t.add(_);const y=new I(new Wt(.007,8,6),i.glint);y.position.set(v+.014,m+.01,f*.97+g*.022),t.add(y)}for(const g of[-1,1]){const v=new pt;v.position.set(.1,.02,g*.19);const m=new Wt(1,20,10),f=[],x=m.attributes.position,_=m.attributes.normal;for(let T=0;T<x.count;T++){const w=eo(-.3,.3,_.getY(T));c.copy(wf).lerp(er,w),f.push(c.r,c.g,c.b)}m.setAttribute("color",new Bt(f,3)),m.scale(.085,.02,.21),m.translate(-.03,0,g*.19);const y=new I(m,i.skin);y.rotation.y=g*.45,y.castShadow=!0,v.add(y),v.name=g<0?"flL":"flR",t.add(v)}for(const g of[-1,1]){const v=new pt;v.position.set(-.43,-.13,g*.07),v.rotation.z=.5;const m=new I(new Wt(1,12,8),i.beak);m.scale.set(.07,.015,.05),v.add(m);for(let f=-1;f<=1;f++){const x=new I(new Cn(.014,.07,6),i.beak);x.rotation.z=Math.PI/2,x.position.set(-.09,0,f*.03),v.add(x)}t.add(v)}for(let g=-1;g<=1;g++){const v=new I(new Cn(.03,.12,6),i.skin),m=v.geometry,f=m.attributes.position.count;m.setAttribute("color",new Bt(new Array(f*3).fill(0).map((x,_)=>[er.r,er.g,er.b][_%3]),3)),v.rotation.z=Math.PI/2,v.rotation.y=g*.35,v.position.set(-.56,.02,g*.04),t.add(v)}return t}function yw(i=5){const t=new pt;for(let e=0;e<i;e++){const n=_w();yi(n),n.scale.setScalar(1.6);const s=Math.ceil(e/2),o=e===0?0:e%2?-1:1;n.userData={back:s*2.4,side:o*s*1.8,flap:e*.7},t.add(n)}return t.userData={radius:30,height:10,speed:.07},t.name="penguins",t}const nr=new b,Sf=new b,bf=new b,Ef=new b;function Mw(i,t){const e=i.userData,n=t*e.speed;nr.set(-Math.sin(n),0,Math.cos(n)),Sf.set(nr.z,0,-nr.x),bf.set(Math.cos(n)*e.radius,e.height+Math.sin(t*.5)*1.2,Math.sin(n)*e.radius);for(const s of i.children){const o=s.userData;if(e.frozen){s.position.set(o.side,e.height,-o.back),s.rotation.set(0,0,-.15);const a=Math.sin(t*5+o.flap)*.45;s.getObjectByName("flL").rotation.x=a,s.getObjectByName("flR").rotation.x=-a;continue}s.position.copy(bf).addScaledVector(nr,-o.back).addScaledVector(Sf,o.side),s.position.y+=Math.sin(t*1.3+o.flap)*.3,Ef.copy(s.position).add(nr),s.lookAt(Ef),s.rotateY(-Math.PI/2),s.rotateZ(-.15);const r=Math.sin(t*5+o.flap)*.45;s.getObjectByName("flL").rotation.x=r,s.getObjectByName("flR").rotation.x=-r}}function ww(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(230,255,220,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),t.fillStyle="rgba(255,255,255,0.95)",t.beginPath(),t.moveTo(32,2),t.lineTo(36,28),t.lineTo(62,32),t.lineTo(36,36),t.lineTo(32,62),t.lineTo(28,36),t.lineTo(2,32),t.lineTo(28,28),t.closePath(),t.fill();const n=new Te(i);return n.colorSpace=ie,n}function Sw(i=220){const t=new pt,e=ve(31),n=new Float32Array(i*3),s=new Float32Array(i*4);for(let c=0;c<i;c++){const l=e()*Math.PI*2,h=2+Math.sqrt(e())*34,u=Math.cos(l)*h,d=Math.sin(l)*h,p=e()>.5?1:0;n.set([u,Ve(u,d)+.2+e()*2.2,d],c*3);const g=.05+e()*.1;s.set([e()*Math.PI*2,1.5+e()*3,g,p],c*4)}const o=new ge;o.setAttribute("position",new Be(n,3)),o.setAttribute("info",new Be(s,4));const r=new Ye({uniforms:{map:{value:ww()},time:{value:0},scale:{value:400}},transparent:!0,depthWrite:!1,blending:ei,vertexShader:`attribute vec4 info; uniform float time; uniform float scale; varying float vA; varying float vRot; varying vec3 vCol;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float v = max(0.0, sin(time * info.y + info.x));
        vA = v * v * 0.8; vRot = time * 0.5 + info.x;
        vCol = mix(vec3(1.0), vec3(0.918, 1.0, 0.918), info.w);
        gl_PointSize = info.z * scale / max(0.1, -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`uniform sampler2D map; varying float vA; varying float vRot; varying vec3 vCol;
      void main() {
        vec2 c = gl_PointCoord - 0.5; float cs = cos(vRot), sn = sin(vRot);
        vec2 uv = vec2(c.x * cs - c.y * sn, c.x * sn + c.y * cs) + 0.5;
        vec4 t = texture2D(map, uv);
        gl_FragColor = vec4(t.rgb * vCol, t.a * vA);
      }`}),a=new Nh(o,r);return a.frustumCulled=!1,t.add(a),t.userData.mat=r,t.name="sparkles",t}function bw(i,t,e){const n=i.userData.mat;n.uniforms.time.value=t,n.uniforms.scale.value=window.innerHeight*(i.userData.pixelRatio||1)*.5/Math.tan(50*Math.PI/360)}const Gh=1.8,Tf=1.2,Ea=4.6;function Ew(){const i=document.createElement("canvas");i.width=300,i.height=200;const t=i.getContext("2d");t.fillStyle="#ae1c28",t.fillRect(0,0,300,67),t.fillStyle="#ffffff",t.fillRect(0,67,300,66),t.fillStyle="#21468b",t.fillRect(0,133,300,67);const e=new Te(i);return e.colorSpace=ie,e}function Tw(){const i=en(),t=new pt;t.name="flag";const e=new I(new kt(.22,.28,.12,32),i.white);e.position.y=.06,e.castShadow=!0,t.add(e);const n=new I(new kt(.035,.05,Ea,16),i.chrome);n.position.y=Ea/2,n.castShadow=!0,t.add(n);const s=new I(new Wt(.08,20,14),i.chrome);s.position.y=Ea+.06,t.add(s);const o=new Re(Gh,Tf,24,12);o.translate(Gh/2,0,0);const r=new I(o,(()=>{const a=Ew();return new mt({map:a,emissiveMap:a,emissive:"#ffffff",emissiveIntensity:.28,side:me,roughness:.75})})());return r.position.set(.04,Ea-Tf/2-.08,0),r.castShadow=!0,t.add(r),t.userData={cloth:r,rest:Float32Array.from(o.attributes.position.array)},t}function Aw(i,t){const{cloth:e,rest:n}=i.userData,s=e.geometry.attributes.position;for(let o=0;o<s.count;o++){const r=n[o*3],a=n[o*3+1],c=r/Gh;s.setZ(o,Math.sin(r*3.2-t*4.2+a*.6)*.16*c+Math.sin(r*1.3-t*1.7)*.08*c),s.setY(o,a-c*c*.12)}s.needsUpdate=!0,e.geometry.computeVertexNormals(),e.rotation.y=.5+Math.sin(t*.25)*.25}const _l=-95;function Cw(i){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=ve(i);e.fillStyle="#9fcff2",e.fillRect(0,0,256,256);for(let o=0;o<256;o+=32){for(let r=0;r<256;r+=32){const a=n();e.fillStyle=a>.93?"#eaf6ff":a>.08?"#b7dcf7":"#8dc2ec",e.fillRect(r+2,o+2,28,22),e.fillStyle="rgba(255,255,255,0.35)",e.fillRect(r+2,o+2,28,5)}e.fillStyle="#eef6fc",e.fillRect(0,o+24,256,8),e.fillStyle="rgba(70,120,170,0.35)",e.fillRect(0,o+31,256,1)}for(let o=0;o<256;o+=32)e.fillStyle="#eef6fc",e.fillRect(o,0,2,256);const s=new Te(t);return s.colorSpace=ie,s.wrapS=s.wrapT=Fi,s.anisotropy=8,s}function Rw(i){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=ve(i);e.fillStyle="#0a0d1c",e.fillRect(0,0,256,256);for(let o=0;o<256;o+=32)for(let r=0;r<256;r+=32){const a=n();e.fillStyle=a<.15?"#ffc98a":a<.185?"#5fe8ff":a<.21?"#ff6fd8":a<.34?"#1c2450":"#0b0f22",e.fillRect(r+2,o+2,28,22)}const s=new Te(t);return s.colorSpace=ie,s.wrapS=s.wrapT=Fi,s}const Pw=Rw(11),xr=[],go=["#ff3fbf","#28e0ff","#ffb347"].map(i=>{const t=new mt({color:"#8fd0ff",emissive:"#8fd0ff",emissiveIntensity:1.4});return t.userData.night=i,t.userData.keep=!0,t}),R0=new gt("#8fd0ff"),Ao=new gt;function Au(i,t){i.emissive.set("#3b8fe0").lerp(Ao.set("#ffffff"),t),i.emissiveIntensity=.3*(1-t)+t*.7,i.color.set("#f4faff").lerp(Ao.set("#2e3860"),t)}Ur(i=>{for(const t of xr)Au(t,i);for(const t of go)Ao.set(t.userData.night),t.color.copy(R0).lerp(Ao,i),t.emissive.copy(t.color),t.emissiveIntensity=1.4+i*1.2});function Lw(i){const t=new Set,e=new Set;i.traverse(n=>{if(!n.isMesh)return;const s=n.material;s.userData.nightGlass?t.add(s):s.userData.night&&e.add(s)}),xr.length=0,xr.push(...t),go.length=0,go.push(...e);for(const n of xr)Au(n,re.k);for(const n of go)Ao.set(n.userData.night),n.color.copy(R0).lerp(Ao,re.k),n.emissive.copy(n.color),n.emissiveIntensity=1.4+re.k*1.2}function no(i,t="#ffffff",e="#1f7fe8",n=512,s=128){const o=document.createElement("canvas");o.width=n,o.height=s;const r=o.getContext("2d");r.fillStyle=e,r.fillRect(0,0,n,s);const a=r.createLinearGradient(0,0,0,s);a.addColorStop(0,"rgba(255,255,255,0.28)"),a.addColorStop(.5,"rgba(255,255,255,0.06)"),a.addColorStop(.51,"rgba(0,0,0,0)"),r.fillStyle=a,r.fillRect(0,0,n,s),r.strokeStyle="rgba(255,255,255,0.7)",r.lineWidth=4,r.strokeRect(2,2,n-4,s-4);let c=Math.round(s*.42);for(r.textAlign="center",r.textBaseline="middle";c>10&&(r.font=`bold ${c}px "Silkscreen", monospace`,!(r.measureText(i).width<=n-48));c-=2);r.fillStyle="rgba(0,20,60,0.35)",r.fillText(i,n/2+2,s/2+3),r.fillStyle=t,r.fillText(i,n/2,s/2);const l=new Te(o);return l.colorSpace=ie,l.anisotropy=8,l}const yl=new Map;function Mn(i,t,e){const n=Math.max(.25,Math.round(t/20*4)/4),s=Math.max(.25,Math.round(e/28*4)/4),o=i.uuid+":"+n+":"+s;if(yl.has(o))return yl.get(o);const r=new Ht({map:i.clone(),color:"#f4faff",roughness:.1,metalness:.25,clearcoat:1,clearcoatRoughness:.04,emissive:"#3b8fe0",emissiveIntensity:.12,envMapIntensity:1.3,emissiveMap:Pw.clone()});return r.map.needsUpdate=!0,r.map.repeat.set(n,s),r.emissiveMap.needsUpdate=!0,r.emissiveMap.repeat.set(n,s),r.userData.nightGlass=!0,xr.push(r),Au(r,re.k),yl.set(o,r),r}function Iw(){const i=new pt,t=new Ht({color:"#1d2b44",roughness:.25,clearcoat:1,clearcoatRoughness:.08}),e=new Ht({color:"#fbfcff",roughness:.3,clearcoat:.8,envMapIntensity:.4,emissive:"#ffffff",emissiveIntensity:.28}),n=new Ht({color:"#ff9a1f",roughness:.3,clearcoat:.8,emissive:"#7a3a00",emissiveIntensity:.15}),s=new Ht({color:"#0b1020",roughness:.1,clearcoat:1}),o=new mt({color:"#ff9fb0",roughness:.6,transparent:!0,opacity:.75}),r=new Ht({color:"#f3f6fa",roughness:.25,clearcoat:1}),a=(u,d,p,g,v,m,f,x)=>{const _=new I(new Wt(u,40,28),v);return _.scale.set(d,p,g),_.position.set(m,f,x),_.castShadow=!0,i.add(_),_},c=new I(new kt(.62,.68,.16,48),r);c.position.y=.08,i.add(c);const l=.16;a(.5,.86,1,.78,t,0,l+.5,0),a(.5,.64,.78,.42,e,0,l+.44,.2),a(.33,1,.95,.95,t,0,l+1.06,.02),a(.33,.78,.66,.5,e,0,l+1.02,.16);for(const u of[-1,1])a(.075,1,1.1,.7,e,u*.105,l+1.08,.305),a(.05,1,1.15,.7,s,u*.105,l+1.075,.345),a(.016,1,1,.6,e,u*.105+.018,l+1.1,.375),a(.05,1.3,.7,.3,o,u*.19,l+.98,.26);const h=new I(new Cn(.055,.12,24),n);h.rotation.x=Math.PI/2,h.position.set(0,l+.99,.36),i.add(h);for(const u of[-1,1]){const d=a(.3,.22,1,.42,t,u*.43,l+.58,0);d.rotation.z=u*.42}for(const u of[-1,1])a(.13,1,.38,1.35,n,u*.15,l+.04,.16);return i}function Dw(){const i=new pt,t=ve(202),e=Cw(7),n=new Ht({color:"#f2f6fa",roughness:.32,metalness:.75,clearcoat:1,clearcoatRoughness:.15}),s=[],o=(u,d,p=30)=>{for(let g=0;g<p;g++){const v=(t()-.5)*200,m=_l-26+t()*36;if(!(m>_l+2&&Math.abs(v)<125)&&!s.some(f=>Math.abs(f.x-v)<(f.w+u)/2+2&&Math.abs(f.z-m)<(f.d+d)/2+2))return s.push({x:v,z:m,w:u,d}),[v,m]}return null},r=(u,d)=>Ve(u,d)-.5;let a=0;const c=(u,d)=>{const p=-112+a*25,g=_l+12+a%2*12;return a++,s.push({x:p,z:g,w:u,d}),[p,g]};{const u=c(10,10),[d,p]=u,g=62,v=new pt,m=new I(new kt(3.2,5,g*.75,8),Mn(e,8,g));m.position.y=g*.375,v.add(m);const f=new I(new Wt(5.5,24,16),Mn(e,6,6));f.position.y=g*.78,f.scale.y=.55,v.add(f);const x=new I(new kt(.15,.8,16,8),n);x.position.y=g*.78+10,v.add(x);const _=new I(new Re(7,1.8),new mt({map:no("0x","#ffffff","#0b3f9c"),emissive:"#5fb3ff",emissiveIntensity:.6,emissiveMap:no("0x","#ffffff","#0b3f9c")}));_.position.set(0,g*.78,5.6),v.add(_),v.position.set(d,r(d,p),p),v.userData.secret="the needle: 0x at the top",i.add(v)}{const u=c(26,10),[d,p]=u,g=42,v=new pt;for(const _ of[-8,8]){const y=new I(new $t(9,g,9),Mn(e,9,g));y.position.set(_,g/2,0),v.add(y);const T=new I(new $t(9.6,.6,9.6),n);T.position.set(_,g+.3,0),v.add(T)}const m=new I(new $t(8,3,4),Mn(e,8,3));m.position.set(0,g*.7,0),v.add(m);const f=Tw();f.scale.setScalar(3.2),f.position.set(-8,g+.6,0),v.add(f);const x=Iw();x.scale.setScalar(6),x.position.set(8,g+.6,0),v.add(x),v.position.set(d,r(d,p),p),v.userData.secret="a penguin on the roof of the twins",i.add(v)}{const u=c(24,24),[d,p]=u,g=new pt,v=new I(new Wt(11,32,16,0,Math.PI*2,0,Math.PI/2),Mn(e,12,8));v.scale.y=.7,g.add(v);const m=new I(new Le(11,.5,10,48),n);m.rotation.x=Math.PI/2,m.position.y=.3,g.add(m);const f=new I(new kt(.05,.05,18,6),n);f.position.y=7.7+9,g.add(f);const x=hw();x.scale.setScalar(9),x.position.y=7.7+18+2,x.name="balloon",g.add(x),g.position.set(d,r(d,p),p),g.userData.secret="a clownfish balloon over the dome",i.add(g)}{const u=c(12,8),[d,p]=u,g=36,v=new pt,m=new I(new $t(12,g,8),Mn(e,12,g));m.position.y=g/2,v.add(m);const f=new I(new Re(11,2.75),new mt({map:no("HIRE 0xSURGEON","#0b2a4f","#ffffff")}));f.position.set(0,g-3,4.05),v.add(f);const x=new I(new Re(11,2.75),new mt({map:no("DETECT. RESPOND.","#ffffff","#1f7fe8")}));x.position.set(0,g-6.2,4.05),v.add(x),v.position.set(d,r(d,p),p),v.userData.secret="the billboard",i.add(v)}{const u=c(16,8),[d,p]=u,g=40,v=new pt,m=new I(new Le(7,3.2,12,40),Mn(e,10,20));m.position.y=g-10,v.add(m);const f=new I(new $t(14,g-10,6),Mn(e,14,g-10));f.position.y=(g-10)/2-3,v.add(f);const x=new I(new Wt(2.4,24,16),new Ht({color:16777215,roughness:.02,transmission:.95,thickness:.3,ior:1.12,iridescence:1,transparent:!0,clearcoat:1}));x.position.y=g-10,x.name="ringBubble",v.add(x),v.position.set(d,r(d,p),p),v.userData.secret="a bubble caught in the ring",i.add(v)}const l=new Ht({color:"#f2f6fa",roughness:.32,metalness:.75,clearcoat:1,clearcoatRoughness:.15}),h=(()=>{const u=document.createElement("canvas");u.width=256,u.height=1024;const d=u.getContext("2d");d.fillStyle="#4f93d8",d.fillRect(0,0,256,1024);for(let v=0;v<1024;v+=32)d.fillStyle="rgba(255,255,255,0.08)",d.fillRect(0,v,256,24),d.fillStyle="rgba(20,60,110,0.3)",d.fillRect(0,v+30,256,2);const p=["0x1337",":)","SOC","KQL","443"];d.fillStyle="#ffffff",d.textAlign="center",d.textBaseline="middle",p.forEach((v,m)=>{let f=72;for(;f>12&&(d.font=`bold ${f}px "Silkscreen", monospace`,!(d.measureText(v).width<=216));f-=2);d.fillText(v,128,120+m*190)});const g=new Te(u);return g.colorSpace=ie,g.anisotropy=8,g})();{const u=c(14,12),[d,p]=u,g=new pt,v=22,m=new I(new $t(14,v,10),Mn(e,14,v));m.position.y=v/2,g.add(m);const f=new I(new kt(3,3,1.2,32),l);f.rotation.x=Math.PI/2,f.position.set(0,v*.55,5.4),g.add(f);const x=new I(new Dn(2.6,32),new mt({color:"#ffffff",roughness:.4}));x.position.set(0,v*.55,6.02),g.add(x);for(let T=0;T<12;T++){const w=new I(new $t(.15,.6,.05),new mt({color:"#0b2a4f"})),R=T/12*Math.PI*2;w.position.set(Math.sin(R)*2.1,v*.55+Math.cos(R)*2.1,6.05),w.rotation.z=-R,g.add(w)}const _=new I(new kt(.5,.5,.3,24),new mt({color:"#0b2a4f"}));_.rotation.x=Math.PI/2,_.position.set(0,v*.55,6.1),g.add(_);const y=new I(new Le(4.2,1.1,16,48,Math.PI),l);y.position.y=v,g.add(y);for(const T of[-4.2,4.2]){const w=new I(new kt(1.1,1.1,5,16),l);w.position.set(T,v-2.5,0),g.add(w)}g.position.set(d,r(d,p),p),g.userData.secret="the vault: a padlock tower",i.add(g)}{const u=c(12,12),[d,p]=u,g=new pt,v=34,m=new I(new kt(5,5.6,v,28),Mn(e,10,v));m.position.y=v/2,g.add(m);const f=new I(new kt(5.8,5.8,.8,28),l);f.position.y=v+.4,g.add(f);const x=new I(new kt(0,9,.2,3,1,!1,0,Math.PI/5),new $e({color:"#5fb3ff",transparent:!0,opacity:.35,side:me}));x.position.y=v+1,x.name="radar",g.add(x);const _=new I(new Wt(2.4,24,12,0,Math.PI*2,0,Math.PI/3),l);_.rotation.x=-Math.PI/2+.9,_.position.set(0,v+3,-2),_.name="dish",g.add(_);const y=no("NIGHTWATCH SOC","#ffffff","#1f7fe8"),T=new I(new Re(9,2.25),new mt({map:y,emissive:"#5fb3ff",emissiveIntensity:.5,emissiveMap:y}));T.position.set(0,v-4,5.7),g.add(T),g.position.set(d,r(d,p),p),g.userData.secret="the SOC with its radar",i.add(g)}{const u=c(30,10),[d,p]=u,g=new pt,v=38;for(const T of[-10,10]){const w=new I(new $t(8,v,8),Mn(e,8,v));w.position.set(T,v/2,0),g.add(w)}const m=new I(new $t(12,3,4),Mn(e,12,3));m.position.set(0,v*.6,0),g.add(m);const f=(()=>{const T=document.createElement("canvas");T.width=256,T.height=128;const w=T.getContext("2d");w.fillStyle="#ffd7a8",w.fillRect(0,0,256,128);for(let C=0;C<4;C++)for(let S=-1;S<5;S++){const M=S*64+(C%2?32:0),P=C*32,F=w.createLinearGradient(0,P,0,P+28);F.addColorStop(0,"#ffb04a"),F.addColorStop(1,"#ff6a00"),w.fillStyle=F,w.fillRect(M+3,P+3,58,26),w.fillStyle="rgba(255,255,255,0.35)",w.fillRect(M+3,P+3,58,6)}const R=new Te(T);return R.colorSpace=ie,R})(),x=new I(new $t(11,3.6,.5),new mt({map:f,emissive:"#ff7a10",emissiveMap:f,emissiveIntensity:1.2,roughness:.4}));x.position.set(0,v*.6,2.3),x.name="firewall",g.add(x);const _=no("FIREWALL","#ffffff","#ff6a00"),y=new I(new Re(9,2.25),new mt({map:_,emissive:"#ff9a3c",emissiveIntensity:.4,emissiveMap:_}));y.position.set(0,v*.6+3.4,2.6),g.add(y),g.position.set(d,r(d,p),p),g.userData.secret="the firewall on the sky bridge",i.add(g)}{const u=c(10,10),[d,p]=u,g=new pt,v=46,m=new Ht({map:h,color:"#ffffff",roughness:.1,metalness:.1,clearcoat:1,emissive:"#ffffff",emissiveIntensity:.35,emissiveMap:h}),f=new I(new $t(10,v,10),m);f.position.y=v/2,g.add(f);const x=new I(new $t(11,.6,11),l);x.position.y=v+.3,g.add(x),g.position.set(d,r(d,p),p),g.userData.secret="the hex tower",i.add(g)}{const u=c(12,12),[d,p]=u,g=new pt,v=28,m=new I(new $t(12,v,12),Mn(e,12,v));m.position.y=v/2,g.add(m);const f=new I(new $t(3,9,1.6),new Ht({color:"#59c6ea",roughness:.1,transmission:.4,thickness:.5,transparent:!0,clearcoat:1}));f.position.set(0,v+7.5,0),g.add(f);const x=new I(new $t(1.8,3,.9),l);x.position.set(0,v+1.5,0),g.add(x);const _=new I(new Wt(.35,12,8),new mt({color:"#5fff8a",emissive:"#39ff5a",emissiveIntensity:2}));_.position.set(.9,v+11,.9),_.name="usbLed",g.add(_),g.position.set(d,r(d,p),p),g.userData.secret="a USB stick plugged into a roof",i.add(g)}for(let u=0;u<80;u++){const d=4+t()*6,p=4+t()*6,g=o(d,p,12);if(!g)continue;const[v,m]=g,f=14+t()*34,x=t(),_=new pt,y=Mn(e,d,f);if(x<.5){let T=f,w=d,R=p,C=0;for(let M=0;M<2+Math.floor(t()*2);M++){const P=new I(new $t(w,T,R),y);P.position.y=C+T/2,_.add(P),C+=T,T*=.55,w*=.75,R*=.75}const S=new I(new $t(w*1.1,.6,R*1.1),n);S.position.y=C+.3,_.add(S)}else if(x<.72){const T=new kt(Math.min(d,p)*.45,Math.max(d,p)*.5,f,4,1);T.rotateY(Math.PI/4);const w=new I(T,y);w.position.y=f/2,_.add(w);const R=new I(new kt(.08,.35,6+t()*6,8),n);R.position.y=f+3,_.add(R)}else if(x<.88){const T=new I(new kt(d*.45,d*.5,f,28),y);T.position.y=f/2,_.add(T);const w=new I(new kt(d*.3,d*.5,1.2,28),n);w.position.y=f+.6,_.add(w)}else{const T=new $t(d,f,p),w=T.attributes.position;for(let C=0;C<w.count;C++){const S=w.getY(C);w.setX(C,w.getX(C)*(1-(S+f/2)/f*.5)+(S+f/2)/f*d*.4)}T.computeVertexNormals();const R=new I(T,y);R.position.y=f/2,_.add(R)}for(const T of[-1,1]){const w=new I(new $t(.25,f,.25),go[u%3]);w.position.set(T*d/2,f/2,p/2),_.add(w)}if(x<.5){const T=new I(new $t(d,.22,.22),go[u%3]);T.position.set(0,f-.2,p/2+.02),_.add(T)}_.position.set(v,r(v,m),m),_.rotation.y=(t()-.5)*.2,i.add(_)}return i.traverse(u=>{u.isMesh&&(u.castShadow=!1,u.receiveShadow=!1)}),i.name="city",i}function Uw(i,t){const e=i.getObjectByName("balloon");e&&(e.position.y=27.7+Math.sin(t*.5)*.8);const n=i.getObjectByName("ringBubble");n&&(n.position.x=Math.sin(t*.3)*3,n.position.y=30+Math.cos(t*.4)*2);const s=i.getObjectByName("radar");s&&(s.rotation.y=t*.9);const o=i.getObjectByName("dish");o&&(o.rotation.y=Math.sin(t*.3)*.8);const r=i.getObjectByName("firewall");r&&(r.material.emissiveIntensity=1+Math.sin(t*3)*.4);const a=i.getObjectByName("usbLed");a&&(a.material.emissiveIntensity=Math.sin(t*6)>.6?2.5:.4)}function Vh(i,t,e=48){const n=new I(new ls(i.map(([s,o])=>new st(s,o)),e),t);return n.castShadow=!0,n}function Ml(i,t){const e=Vh(i,t),n=new pt;return e.rotation.x=-Math.PI/2,n.add(e),n}function Nw(){const i=en(),t=new pt,e=new Ht({color:"#1f6fd0",roughness:.12,clearcoat:1,clearcoatRoughness:.05,metalness:.1,side:me}),n=i.white.clone();n.side=me;const s=new mt({color:"#7fd0ff",emissive:"#3aa8ff",emissiveIntensity:1.6}),o=new Ht({color:"#7fb8ff",roughness:.02,metalness:.2,clearcoat:1,emissive:"#1a3f80",emissiveIntensity:.35,envMapIntensity:1.4});t.add(Vh([[0,0],[.34,0],[.36,.03],[.3,.07],[.16,.16],[.1,.3],[0,.3]],i.white,64));const r=new I(new Le(.33,.012,8,64),s);r.rotation.x=Math.PI/2,r.position.y=.045,t.add(r);const a=new I(new kt(.045,.06,.78,24),new mt({color:"#dfe4ec",metalness:.55,roughness:.32,envMapIntensity:.45}));a.position.y=.68,a.castShadow=!0,t.add(a),t.add(Vh([[0,1.04],[.1,1.04],[.11,1.07],[.08,1.1],[0,1.1]],i.white));const c=new pt;c.position.y=1.2,c.name="head";const l=new I(new kt(.11,.11,.05,32),i.chromeDark);l.position.y=-.08,c.add(l);for(const _ of[-1,1]){const y=new I(new Se(.035,.18,.09,2,.015),i.white);y.position.set(_*.12,0,0),y.castShadow=!0,c.add(y);const T=new I(new kt(.035,.035,.03,20),i.chrome);T.rotation.z=Math.PI/2,T.position.set(_*.15,.05,0),c.add(T)}const h=new pt;h.name="tilt",h.position.y=.05,c.add(h);const u=Ml([[0,-.36],[.06,-.36],[.075,-.3],[.085,.1],[.095,.5],[0,.5]],n);u.position.y=0,h.add(u);for(const[_,y]of[[-.18,.081],[.1,.089],[.42,.098]]){const T=new I(new Le(y,.009,8,40),i.chrome);T.position.set(0,0,-_),h.add(T)}const d=Ml([[.1,.5],[.113,.5],[.119,.74],[.108,.74],[.102,.52]],e);d.position.y=0,h.add(d);const p=new I(new Le(.114,.01,8,48),s);p.position.set(0,0,-.74),h.add(p);const g=new I(new Dn(.1,40),o);g.position.set(0,0,-.56),g.rotation.y=Math.PI,h.add(g);const v=new I(new kt(.04,.045,.1,20),i.chromeDark);v.rotation.x=Math.PI/2,v.position.set(0,0,.41),h.add(v);for(const _ of[-1,1]){const y=new I(new kt(.022,.022,.03,16),i.chrome);y.rotation.z=Math.PI/2,y.position.set(_*.06,-.02,.41),h.add(y)}const m=new I(new Se(.06,.06,.06,2,.015),i.chromeDark);m.position.set(0,0,.48),h.add(m);const f=new I(new kt(.022,.028,.09,16),i.dark);f.position.set(0,.07,.49),f.rotation.x=-.35,h.add(f);const x=Ml([[0,-.12],[.022,-.12],[.026,.14],[0,.14]],n);x.position.set(.045,.12,-.1),h.add(x);for(const _ of[-.06,.06]){const y=new I(new Se(.02,.04,.03,1,.005),i.chromeDark);y.position.set(.045,.085,-.1+_),h.add(y)}return t.add(c),t.name="telescope",t}function Fw(i,t,e){const n=i.getObjectByName("head");if(i.userData.inUse)return;const s=t*.16,o=Math.sin(s),a=Math.sign(o)*Math.pow(Math.abs(o),.55)*.38,c=.08+Math.sin(t*.23)*.05,l=Math.min(1,e*2.5);n.rotation.y+=(a-n.rotation.y)*l;const h=i.getObjectByName("tilt");h.rotation.x+=(c-h.rotation.x)*l}function vs(i,t,e){const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)}function Ow(){const i=document.createElement("canvas");i.width=1024,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#355f93"),e.addColorStop(.3,"#4a7db5"),e.addColorStop(.4,"#c7d9ea"),e.addColorStop(.5,"#f6f9fc"),e.addColorStop(.6,"#c7d9ea"),e.addColorStop(.7,"#4a7db5"),e.addColorStop(1,"#355f93"),t.fillStyle=e,t.fillRect(0,0,1024,256),t.strokeStyle="rgba(110,140,170,0.55)",t.lineWidth=2;for(let s=104;s<=152;s+=4)t.beginPath(),t.moveTo(470,s),t.lineTo(985,s),t.stroke();t.strokeStyle="rgba(20,40,70,0.75)",t.lineWidth=3;for(const s of[96,160])t.beginPath(),t.moveTo(1010,128+(s-128)*.15),t.quadraticCurveTo(880,s,700,s+(s<128?6:-6)),t.stroke();for(let s=0;s<2600;s++){const o=Math.random()*1024,r=Math.random()*256;t.fillStyle=Math.random()>.5?"rgba(255,255,255,0.06)":"rgba(0,20,60,0.07)",t.fillRect(o,r,2+Math.random()*6,1+Math.random()*3)}for(let s=0;s<40;s++){t.fillStyle="rgba(230,235,240,0.7)";const o=760+Math.random()*240,r=Math.random()*256;t.beginPath(),t.arc(o,r,1.5+Math.random()*2,0,7),t.fill()}const n=new Te(i);return n.colorSpace=ie,n.anisotropy=8,n}function wl(i,t,e=null){const n=new Dr;n.moveTo(i[0][0],i[0][1]);for(let r=1;r<i.length;r++){const a=i[r];a.length===4?n.quadraticCurveTo(a[0],a[1],a[2],a[3]):n.lineTo(a[0],a[1])}n.closePath();const s=new Mc(n,{depth:.01,bevelEnabled:!0,bevelThickness:.014,bevelSize:.012,bevelSegments:5,curveSegments:20});if(s.translate(0,0,-.006),e){const r=s.attributes.position;for(let a=0;a<r.count;a++)r.setZ(a,r.getZ(a)*e(r.getX(a),r.getY(a)));s.computeVertexNormals()}const o=new I(s,t);return o.castShadow=!0,o}function kw(){const i=new pt,t=new Ht({map:Ow(),roughness:.45,clearcoat:.7,clearcoatRoughness:.25,emissive:"#5d86b8",emissiveIntensity:.3,envMapIntensity:1.4}),e=new Ht({color:"#7aa3cf",roughness:.45,clearcoat:.7,clearcoatRoughness:.25,emissive:"#5d86b8",emissiveIntensity:.3,envMapIntensity:1.2}),n=[],s=56;for(let g=0;g<=s;g++){const v=g/s,m=-.5+v,f=.02+.11*vs(.02,.5,v)*(1-.45*vs(.7,.98,v)),x=.03+.14*vs(.02,.45,v)*(1-.3*vs(.55,.98,v));let _=.02+.105*vs(.03,.55,v)*(1-.25*vs(.8,1,v)),y=f,T=x;if(v>.95){const w=Math.sqrt(Math.max(0,1-Math.pow((v-.95)/.05,2)));y*=.3+.7*w,T*=.3+.7*w,_*=.3+.7*w}{const w=1-vs(0,.12,v);_=Math.max(_,.02+.055*w),y*=1-.45*w,T*=1-.55*w}n.push({x:m,h:y,hb:T,w:_,y:0})}n[s].h=.008,n[s].hb=.012,n[s].w=.02;const o=new I(T0(n,48),t);o.castShadow=!0,o.name="body",o.userData.base=o.geometry.attributes.position.array.slice(),i.add(o);const r=g=>n[Math.round(g*s)],a=new pt;a.position.x=-.5,a.name="tail";const c=wl([[.07,0],[-.02,.1,-.12,.185],[-.16,.215,-.165,.18],[-.12,.13,-.115,.08],[-.125,.03,-.085,0],[-.125,-.03,-.115,-.08],[-.12,-.13,-.165,-.18],[-.16,-.215,-.12,-.185],[-.02,-.1,.07,0]],e,(g,v)=>1-.7*Math.min(1,Math.abs(v)/.2)-.3*Math.min(1,Math.max(0,-g-.02)/.12));c.rotation.x=-Math.PI/2,a.add(c),i.add(a);for(const g of[-1,1]){const v=r(.62),m=new pt;m.position.set(.12,-v.hb*.38,g*(v.w*.92-.028));const f=-g,x=[[0,0],[.02,f*.1,0,f*.2],[.02,f*.26,0,f*.32],[.01,f*.37,-.03,f*.4],[-.09,f*.34,-.07,f*.1],[-.08,0]],_=wl(x,e);_.rotation.x=-Math.PI/2,m.add(_),m.rotation.x=g*.12,m.rotation.y=-g*.28,m.name=g<0?"flL":"flR",i.add(m)}const l=r(.3),h=new Ht({color:"#4f79a8",roughness:.45,clearcoat:.7,clearcoatRoughness:.25,emissive:"#5d86b8",emissiveIntensity:.25}),u=wl([[-.06,-.02],[-.045,0,-.01,.022],[.018,.03,.03,.02],[.045,0,.055,-.02]],h,(g,v)=>1-.6*Math.min(1,Math.max(0,v)/.03));u.position.set(l.x,l.h-.004,0),i.add(u);const d=r(.8);for(const g of[-1,1]){const v=new I(new Wt(.009,12,8),new mt({color:"#0a0a0a",roughness:.3}));v.position.set(d.x,-d.hb*.45,g*d.w*.97),i.add(v)}const p=r(.85);for(const g of[-1,1]){const v=new I(new Wt(.006,8,6),new mt({color:"#1a2a40"}));v.position.set(p.x,p.h*.98,g*.012),i.add(v)}return i.scale.setScalar(44),i.userData={radius:60,height:31,speed:.022,phase:1.2},i.name="whale",i}const Af=new b;function zw(i,t){const e=i.userData,n=()=>{Hh(i.getObjectByName("body"),t*.9,"y",.03,4);const c=h=>Math.sin(h*4-t*.9)*.03*Math.max(0,.3-h)/.8,l=i.getObjectByName("tail");l.position.y=c(-.5),l.rotation.z=Math.atan2(c(-.5)-c(-.47),-.03)+Math.PI,i.getObjectByName("flL").rotation.x=-.12+Math.sin(t*.6)*.08,i.getObjectByName("flR").rotation.x=.12-Math.sin(t*.6)*.08};if(e.frozen){i.position.set(0,e.height,0),i.rotation.set(0,0,0),n();return}const s=t*e.speed+e.phase,o=Math.cos(s)*e.radius,r=Math.sin(s)*e.radius,a=e.height+Math.sin(t*.18)*4;i.position.set(o,a,r),Af.set(o-Math.sin(s),a+Math.cos(t*.18)*.7,r+Math.cos(s)),i.lookAt(Af),i.rotateY(-Math.PI/2),i.rotateX(.25),n()}const Qi={x:-4,y:23,z:-20,swing:14,period:140};function Sl(i){if(i<.22)return Math.sqrt(1-Math.pow((.22-i)/.22,2));if(i>.985)return .24*Math.sqrt(Math.max(0,1-Math.pow((i-.985)/.015,2)));const t=(i-.22)/.765;return 1-.76*Math.pow(t,1.8)}function Cf(i=!1){const n=document.createElement("canvas");n.width=2048,n.height=560;const s=n.getContext("2d"),o=s.createLinearGradient(0,0,0,560);if(i)o.addColorStop(0,"#141238"),o.addColorStop(1,"#07081c"),s.fillStyle=o,s.fillRect(0,0,2048,560),s.shadowColor="#ff3fbf",s.shadowBlur=28,s.strokeStyle="#ff5fcf",s.lineWidth=14,s.strokeRect(16,16,2016,528),s.shadowBlur=0;else{o.addColorStop(0,"#2a78d6"),o.addColorStop(.55,"#0f4fae"),o.addColorStop(1,"#0a3a86"),s.fillStyle=o,s.fillRect(0,0,2048,560);const c=s.createLinearGradient(0,0,0,560*.48);c.addColorStop(0,"rgba(255,255,255,0.22)"),c.addColorStop(1,"rgba(255,255,255,0.02)"),s.fillStyle=c,s.fillRect(0,0,2048,560*.48),s.strokeStyle="#ffffff",s.lineWidth=18,s.strokeRect(9,9,2030,542)}s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle",i?(s.shadowColor="rgba(40,224,255,0.9)",s.shadowBlur=22,s.shadowOffsetY=0):(s.shadowColor="rgba(0,30,90,0.55)",s.shadowBlur=14,s.shadowOffsetY=6);const r=(c,l,h,u)=>{let d=l;do s.font=`${u} ${d}px "Segoe UI", Arial, sans-serif`,d-=4;while(s.measureText(c).width>h&&d>20)};r("LOOKING FOR AN INTERNSHIP",190,1888,800),s.fillText("LOOKING FOR AN INTERNSHIP",2048/2,560*.4),r("CYBER SECURITY  |  SOC  |  FEB - JUL 2027",96,1788,600),i&&(s.fillStyle="#9ff0ff",s.shadowBlur=12),s.fillText("CYBER SECURITY  |  SOC  |  FEB - JUL 2027",2048/2,560*.76);const a=new Te(n);return a.colorSpace=ie,a.anisotropy=8,a}function Bw(){const i=en(),t=new pt;t.name="zeppelin";const e=new pt;t.add(e);const n=26,s=4.2,o=[];for(let R=0;R<=40;R++){const C=R/40,S=Sl(C);o.push(new st(Math.max(S*s,.001),C*n-n/2))}const r=new Ht({color:"#f6f9ff",roughness:.32,clearcoat:.8,clearcoatRoughness:.12,envMapIntensity:.15,emissive:"#e8f0fb",emissiveIntensity:.55}),a=new I(new ls(o,64),r);a.rotation.z=Math.PI/2,a.castShadow=!0,e.add(a);const c=new mt({color:"#7fd0ff",emissive:"#3aa8ff",emissiveIntensity:1.4});for(const[R,C]of[[n/2-6.5,.99],[-2,.93]]){const S=(n/2-R)/n,M=Sl(S)*s*C+.02,P=new I(new Le(M,.09,10,64),c);P.rotation.y=Math.PI/2,P.position.x=R,e.add(P)}for(let R=0;R<4;R++){const C=new I(new Se(4.6,3.4,.32,3,.14),i.aeroBlue),S=R/4*Math.PI*2;C.position.set(-n/2+2.6,Math.cos(S)*2.4,Math.sin(S)*2.4),C.rotation.x=S,C.castShadow=!0,e.add(C)}const l=new I(new Se(5.5,1.3,1.7,4,.5),i.white);l.position.set(2.5,-s-.35,0),e.add(l);const h=new I(new Se(4.4,.45,1.76,2,.15),new mt({color:"#bfe8ff",emissive:"#5fc0ff",emissiveIntensity:.9,roughness:.1}));h.position.copy(l.position).y+=.12,e.add(h);const u=[],d=new Ht({color:"#ffffff",roughness:.2,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:.3,emissive:"#e8f0fb",emissiveIntensity:.3}),p=(()=>{const R=new Dr;R.moveTo(-.09,0),R.quadraticCurveTo(-.2,.55,-.08,1.05),R.quadraticCurveTo(0,1.15,.08,1.05),R.quadraticCurveTo(.16,.5,.09,0);const C=new Mc(R,{depth:.04,bevelEnabled:!0,bevelThickness:.015,bevelSize:.015,bevelSegments:2});return C.translate(0,.18,-.02),C.rotateY(Math.PI/2),C})();for(const R of[-1,1]){const C=new b(-1.2,-s*.74,R*s*.98),S=new b(0,C.y,C.z).normalize(),M=Sl((n/2-C.x)/n)*s,P=new b(C.x,S.y*(M-.2),S.z*(M-.2)),F=C.clone().sub(P),O=new I(new kt(.11,.15,F.length(),12),i.chrome);O.position.copy(P).addScaledVector(F,.5),O.quaternion.setFromUnitVectors(new b(0,1,0),F.clone().normalize()),e.add(O);const V=new I(new _u(.48,1.5,8,24),d);V.rotation.z=Math.PI/2,V.position.copy(C),V.castShadow=!0,e.add(V);const Z=new I(new Le(.5,.05,8,32),c);Z.rotation.y=Math.PI/2,Z.position.copy(C),Z.position.x+=.35,e.add(Z);const U=new pt;U.position.set(C.x-1.3,C.y,C.z);const k=new I(new Cn(.2,.42,20),i.chrome);k.rotation.z=Math.PI/2,k.position.x=-.1,U.add(k);for(let N=0;N<3;N++){const G=new pt;G.rotation.x=N/3*Math.PI*2;const W=new I(p,i.aeroBlue);W.rotation.y=.35,G.add(W),U.add(G)}e.add(U),u.push(U)}const g=20,v=5.5,m=new pt;m.position.set(0,-s-3.6-v/2,0);const f=Cf(),x=Cf(!0),_=new mt({map:f,emissiveMap:f,emissive:"#ffffff",emissiveIntensity:0,roughness:.85,envMapIntensity:.3,side:gi}),y=new I(new Re(g,v),_);y.position.z=.03;const T=new I(new Re(g,v),_);T.rotation.y=Math.PI,T.position.z=-.03,m.add(y,T);const w=new I(new kt(.12,.12,g+.6,12),i.chrome);w.rotation.z=Math.PI/2,w.position.y=v/2+.05,m.add(w);for(const R of[-1,1]){const C=new I(new kt(.04,.04,3.9,6),i.chrome);C.position.set(R*(g/2-1.5),v/2+2,0),m.add(C)}return e.add(m),t.userData={ship:e,banner:m,props:u,faceMat:_,skin:r,podMat:d,tex:f,texNight:x,heading:0,highlight:0},t.position.set(Qi.x,Qi.y,Qi.z),t}const ws={r:25,y:58,period:170,rise:9,blend:26},Rf=new b,Pf=new b;function Hw(i,t){const e=i/Qi.period*Math.PI*2;return t.set(Qi.x+Math.sin(e)*Qi.swing,Qi.y+Math.sin(i*.35)*.6,Qi.z)}function Gw(i,t){const e=(i-ws.rise)/ws.period*Math.PI*2;return t.set(Math.sin(e)*ws.r,ws.y+Math.sin(i*.3)*.8,-Math.cos(e)*ws.r)}function Vw(i){return i=Math.min(1,Math.max(0,i)),i*i*(3-2*i)}function Lf(i,t,e){const n=Math.atan2(Math.sin(t-i),Math.cos(t-i));return i+n*e}const Ww=new b;function Xw(i,t,e){const n=i.userData,s=Vw((t-ws.rise)/ws.blend);Hw(t,Rf),Gw(t,Pf);const o=Ww.copy(i.position);i.position.lerpVectors(Rf,Pf,s);const r=i.position.x-o.x,a=i.position.z-o.z;if(r*r+a*a>1e-8){const p=Math.atan2(-a,r);n.heading=Lf(n.heading,p,Math.min(1,e*.6))}n.ship.rotation.y=n.heading;const c=0,l=Math.atan2(-i.position.x,-i.position.z),h=Lf(c,l,s);n.banner.rotation.y=h-n.heading,n.banner.rotation.x=Math.sin(t*.8)*.04;for(const p of n.props)p.rotation.x+=e*6;n.highlight=Math.max(0,n.highlight-e*.5);const u=re.k,d=u>.5?n.texNight:n.tex;n.faceMat.map!==d&&(n.faceMat.map=d,n.faceMat.emissiveMap=d,n.faceMat.needsUpdate=!0),n.faceMat.emissiveIntensity=(u>.5?.45:0)+n.highlight*(u>.5?.12+.06*Math.sin(t*6):.05),n.skin.emissiveIntensity=.55-u*.43,n.podMat.emissiveIntensity=.3-u*.22}function qw(i,t=new b){return t.set(i.position.x,i.position.y-4.2-3.6-2.75+1.5,i.position.z)}const _r=8,Ta=3,io={x0:-24,x1:20,z:-28,y:80,sag:2};function $w(i,t){const e=document.createElement("canvas");e.width=e.height=256;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,256);s.addColorStop(0,"#bff0ff"),s.addColorStop(.5,"#4fb6f0"),s.addColorStop(1,"#1a6fd0"),n.fillStyle=s,n.fillRect(0,0,256,256);const o=n.createLinearGradient(0,0,0,120);o.addColorStop(0,"rgba(255,255,255,0.65)"),o.addColorStop(1,"rgba(255,255,255,0.05)"),n.fillStyle=o,n.fillRect(0,0,256,120),n.strokeStyle="rgba(255,255,255,0.9)",n.lineWidth=8,n.strokeRect(10,10,236,236),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",n.shadowColor="rgba(0,30,90,0.6)",n.shadowBlur=6,n.font='bold 44px "Segoe UI", Arial, sans-serif',n.fillText(`BLOCK ${i+1}`,128,92),n.font="26px Consolas, monospace",n.fillText(t.slice(0,8),128,150),n.fillText(t.slice(8,16),128,184);const r=new Te(e);return r.colorSpace=ie,r.anisotropy=4,r}function Yw(){const i=en(),t=new pt;t.name="blockchain";const e=ve(77),n=[],s=r=>{const a=r/(_r-1);return new b(io.x0+(io.x1-io.x0)*a,io.y-Math.sin(a*Math.PI)*io.sag,io.z+Math.sin(a*Math.PI)*6)};for(let r=0;r<_r;r++){let a="0x";for(let d=0;d<14;d++)a+="0123456789abcdef"[Math.floor(e()*16)];const c=$w(r,a),l=new Ht({map:c,emissiveMap:c,emissive:"#ffffff",emissiveIntensity:.3,roughness:.15,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:.4}),h=new I(new Se(Ta,Ta,Ta,4,.35),l),u=s(r);h.position.copy(u),h.rotation.set(e()*.3,e()*Math.PI,e()*.2),t.add(h),n.push({mesh:h,mat:l,base:u.clone(),spin:(e()-.5)*.12,bob:e()*6})}const o=[];for(let r=0;r<_r-1;r++){const a=n[r].base,c=n[r+1].base,l=a.clone().lerp(c,.5),h=c.clone().sub(a),u=h.length()-Ta,d=new pt;for(const[p,g]of[[-u*.22,0],[u*.22,Math.PI/2]]){const v=new I(new Le(u*.3,.18,10,32),i.chrome);v.scale.set(1,.55,1),v.position.x=p,v.rotation.x=g,d.add(v)}d.position.copy(l),d.rotation.y=-Math.atan2(h.z,h.x),d.rotation.z=Math.atan2(h.y,Math.hypot(h.x,h.z)),t.add(d),o.push({link:d,i:r})}return t.userData={blocks:n,links:o},t}function jw(i,t){const{blocks:e,links:n}=i.userData,s=7,o=t%s/s*(_r+2)-1;e.forEach((r,a)=>{const c=Math.sin(t*.5+r.bob)*.4;r.mesh.position.set(r.base.x,r.base.y+c,r.base.z),r.mesh.rotation.y+=r.spin*.016;const l=Math.max(0,1-Math.abs(o-a)),h=a===_r-1?Math.max(0,1-Math.abs(o-a)*.5):0;r.mat.emissiveIntensity=.3+re.k*.55+l*.9+h*.6});for(const r of n){const a=e[r.i].mesh.position,c=e[r.i+1].mesh.position;r.link.position.set((a.x+c.x)/2,(a.y+c.y)/2,(a.z+c.z)/2)}}const If=330;function Nr(i){const t=document.createElement("canvas");return t.width=t.height=i,[t,t.getContext("2d")]}function Fr(i){const t=new Te(i);return t.colorSpace=ie,t}function Zw(){const[i,t]=Nr(512),e=t.createRadialGradient(256,256,0,256,256,256);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.24,"rgba(255,252,236,1)"),e.addColorStop(.3,"rgba(255,236,170,1)"),e.addColorStop(.335,"rgba(255,214,120,0.55)"),e.addColorStop(.5,"rgba(255,200,110,0.2)"),e.addColorStop(.72,"rgba(255,190,110,0.06)"),e.addColorStop(1,"rgba(255,180,100,0)"),t.fillStyle=e,t.fillRect(0,0,512,512),Fr(i)}function Kw(){const[i,t]=Nr(1024),e=ve(31);t.translate(512,512),t.globalCompositeOperation="lighter";for(let n=0;n<28;n++){const s=n/28*Math.PI*2+(e()-.5)*.08,o=(n%2?300:470)*(.8+e()*.3),r=(n%2?.035:.055)*(.8+e()*.4),a=t.createLinearGradient(0,0,Math.cos(s)*o,Math.sin(s)*o);a.addColorStop(0,"rgba(255,244,210,0.55)"),a.addColorStop(.5,"rgba(255,230,170,0.16)"),a.addColorStop(1,"rgba(255,220,160,0)"),t.fillStyle=a,t.beginPath(),t.moveTo(0,0),t.lineTo(Math.cos(s-r)*o*.3,Math.sin(s-r)*o*.3),t.lineTo(Math.cos(s)*o,Math.sin(s)*o),t.lineTo(Math.cos(s+r)*o*.3,Math.sin(s+r)*o*.3),t.closePath(),t.fill()}return Fr(i)}function Jw(){const[i,t]=Nr(1024);["rgba(255,80,80,","rgba(255,180,60,","rgba(255,240,90,","rgba(90,230,120,","rgba(70,170,255,","rgba(150,90,255,"].forEach((s,o)=>{t.strokeStyle=s+"0.16)",t.lineWidth=7,t.beginPath(),t.arc(512,512,420+o*7,0,Math.PI*2),t.stroke()});const n=t.createRadialGradient(512,512,300,512,512,512);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.75,"rgba(255,255,255,0.05)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,1024,1024),Fr(i)}function Qw(){const[e,n]=Nr(1024),s=ve(77);n.save(),n.beginPath(),n.arc(1024/2,1024/2,470,0,Math.PI*2),n.clip();const o=n.createRadialGradient(1024/2-40,1024/2-50,20,1024/2,1024/2,470);o.addColorStop(0,"#fbfcff"),o.addColorStop(.7,"#e3e8f8"),o.addColorStop(1,"#b8c2e2"),n.fillStyle=o,n.fillRect(0,0,1024,1024);const r=[[.36,.34,.2],[.55,.3,.15],[.62,.46,.12],[.42,.52,.13],[.3,.55,.09],[.7,.62,.08],[.5,.66,.07]];for(const[h,u,d]of r)for(let p=0;p<5;p++){const g=(h+(s()-.5)*.06)*1024,v=(u+(s()-.5)*.06)*1024,m=d*1024*(.6+s()*.5),f=n.createRadialGradient(g,v,0,g,v,m);f.addColorStop(0,"rgba(120,132,170,0.32)"),f.addColorStop(.7,"rgba(130,142,180,0.16)"),f.addColorStop(1,"rgba(140,150,190,0)"),n.fillStyle=f,n.beginPath(),n.arc(g,v,m,0,Math.PI*2),n.fill()}for(let h=0;h<70;h++){const u=s()*Math.PI*2,d=Math.sqrt(s())*470*.92,p=1024/2+Math.cos(u)*d,g=1024/2+Math.sin(u)*d,v=6+Math.pow(s(),3)*46;n.fillStyle="rgba(110,120,160,0.22)",n.beginPath(),n.arc(p+v*.12,g+v*.12,v,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255,255,255,0.45)",n.lineWidth=Math.max(1.5,v*.16),n.beginPath(),n.arc(p,g,v,Math.PI*.75,Math.PI*1.75),n.stroke()}const a=1024*.47,c=1024*.8;for(let h=0;h<22;h++){const u=s()*Math.PI*2,d=80+s()*260,p=n.createLinearGradient(a,c,a+Math.cos(u)*d,c+Math.sin(u)*d);p.addColorStop(0,"rgba(255,255,255,0.35)"),p.addColorStop(1,"rgba(255,255,255,0)"),n.strokeStyle=p,n.lineWidth=3+s()*4,n.beginPath(),n.moveTo(a,c),n.lineTo(a+Math.cos(u)*d,c+Math.sin(u)*d),n.stroke()}n.fillStyle="#ffffff",n.beginPath(),n.arc(a,c,13,0,Math.PI*2),n.fill();const l=n.createRadialGradient(1024/2-470*.35,1024/2-470*.3,470*.3,1024/2,1024/2,470*1.05);return l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(.8,"rgba(20,30,70,0.12)"),l.addColorStop(1,"rgba(20,30,70,0.4)"),n.fillStyle=l,n.fillRect(0,0,1024,1024),n.restore(),Fr(e)}function Df(i,t){const[e,n]=Nr(512),s=n.createRadialGradient(256,256,0,256,256,256);return s.addColorStop(0,i),s.addColorStop(.25,i.replace(/[\d.]+\)$/,"0.35)")),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,512,512),Fr(e)}function so(i,t,e={}){const n=new Ir({map:i,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,...e}),s=new xc(n);return s.scale.setScalar(t),s}function tS(){const i=new pt;i.name="sun";const t=so(Kw(),190,{opacity:.55,blending:ei}),e=so(Jw(),150,{opacity:.85}),n=so(Df("rgba(255,236,190,0.75)","rgba(255,220,170,0)"),120,{blending:ei}),s=so(Zw(),58);i.add(e,t,n,s);const o=new pt;o.name="moon";const r=so(Df("rgba(190,205,255,0.7)","rgba(120,140,255,0)"),170,{blending:ei}),a=so(Qw(),46);o.add(r,a);for(const l of[...i.children,...o.children])l.renderOrder=-1;const c=new pt;return c.name="celestial",c.add(i,o),c.userData={sun:i,moon:o,rays:t,halo:e,corona:n,core:s,mGlow:r,mFace:a},c}const eS=new gt("#ff9a5a"),nS=new gt("#ffffff"),bl=new gt;function iS(i,t,e,n,s){const o=i.userData;o.sun.position.copy(t).multiplyScalar(If),o.moon.position.copy(e).multiplyScalar(If);const r=Bn.smoothstep(t.y,-.06,.08);bl.copy(nS).lerp(eS,Math.min(1,s*1.2)),o.core.material.color.copy(bl),o.corona.material.color.copy(bl),o.core.material.opacity=r,o.corona.material.opacity=r,o.rays.material.opacity=.55*r*(1-s*.7),o.halo.material.opacity=.85*r*(1-s),o.core.scale.setScalar(58*(1+s*.25)),o.corona.scale.setScalar(120*(1+s*.35)),o.sun.visible=r>.001;const a=Bn.smoothstep(e.y,-.04,.1)*Bn.smoothstep(n,.35,.8);o.mFace.material.opacity=a,o.mGlow.material.opacity=a,o.moon.visible=a>.001}function sS(i,t){i.userData.rays.material.rotation=t*.012,i.userData.halo.material.rotation=-t*.004}function Sc(i,t){try{return JSON.parse(localStorage.getItem(i))??t}catch{return t}}function bc(i,t){try{localStorage.setItem(i,JSON.stringify(t))}catch{}}let ai=null,Uf=0;function Rr(i,t){ai||(ai=document.createElement("div"),ai.className="balloon hidden",document.body.appendChild(ai)),ai.innerHTML="<b></b><span></span>",ai.querySelector("b").textContent=i,ai.querySelector("span").textContent=t,ai.offsetWidth,ai.classList.remove("hidden"),ne.notify(),clearTimeout(Uf),Uf=setTimeout(()=>ai.classList.add("hidden"),4200)}const Wh=new Set;function oS(i){return Wh.add(i),()=>Wh.delete(i)}function Cu(){for(const i of Wh)i()}const Ni=["The needle and its 0x","A penguin on the twins","A clownfish over the dome","The billboard","A bubble in the ring","The padlock vault","The Nightwatch SOC radar","The firewall bridge","The hex tower","A USB stick in a roof"];let cr=new Set(Sc("0xsurgeon:secrets",[]));function Ec(){return cr}function rS(i,t=!1){return cr.has(i)?!1:(cr.add(i),bc("0xsurgeon:secrets",[...cr]),t||Rr("Secret found",`${Ni[i]} (${cr.size}/${Ni.length})`),Cu(),!0)}const aS=["The alchemist's circle","A promise about the moon"],cS=["Something is drawn in chalk in the grass.","Wait for the night, up high, on a bench."];let $a=new Set(Sc("0xsurgeon:eggs",[]));function P0(){return $a}function L0(i){return $a.has(i)?!1:($a.add(i),bc("0xsurgeon:eggs",[...$a]),Cu(),!0)}const lS={"challenges.txt":["three flags are hidden on this machine. submit them with: submit flag{...}","","1. something on this desk is hidden. it is also encoded.","2. auth.log: someone hammered ssh and then got in. which account did they get? flag{<account>}","3. wallet.log: one withdrawal went to an address that only looks like the usual one.","   flag{<tx id of that withdrawal>}","","tools: ls -a, cat, grep, awk '{print $N}', sort, uniq -c, wc -l, head, base64 -d, and pipes ( | )"].join(`
`),"auth.log":(()=>{const i=[],t=(n,s)=>`Nov 21 03:${String(n).padStart(2,"0")}:${String(s).padStart(2,"0")} desk sshd[${4100+n*7+s}]:`;return i.push(`${t(10,2)} Accepted publickey for surgeon from 192.168.1.20 port 51022 ssh2`),["admin","root","test","oracle","ubuntu","admin","root","guest","pi","admin","root","deploy"].forEach((n,s)=>i.push(`${t(14,s*4)} Failed password for invalid user ${n} from 203.0.113.66 port ${40100+s} ssh2`)),i.push(`${t(15,1)} Failed password for svc_backup from 203.0.113.66 port 40212 ssh2`),i.push(`${t(15,9)} Failed password for svc_backup from 203.0.113.66 port 40213 ssh2`),i.push(`${t(15,30)} Accepted password for svc_backup from 203.0.113.66 port 40214 ssh2`),i.push(`${t(16,2)} Accepted publickey for surgeon from 192.168.1.20 port 51090 ssh2`),i.push(`${t(17,44)} Failed password for invalid user admin from 198.51.100.9 port 33001 ssh2`),i.join(`
`)})(),"wallet.log":(()=>{const i="0x7a3f9c2e1b44d0a8e6f5c3b2a1d0e9f8c7b691ce",t="0x7a3f9c5d2e8b1f04a7c6e3d9b0f2a5c8e14d91ce";return[["tx-5518","u1042","withdraw","0.40 ETH",i],["tx-5519","u2210","deposit","1.20 ETH","0x51be00c2d7a4e9f13b6c8d0e2f4a6b8c0d2e4f61"],["tx-5522","u1042","withdraw","0.25 ETH",i],["tx-5524","u1042","receive","0.00 ETH",t],["tx-5527","u3307","withdraw","2.00 ETH","0x9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d"],["tx-5529","u1042","withdraw","0.30 ETH",i],["tx-5531","u1042","withdraw","3.10 ETH",t],["tx-5533","u2210","withdraw","0.75 ETH","0x51be00c2d7a4e9f13b6c8d0e2f4a6b8c0d2e4f61"]].map(n=>n.join("  ")).join(`
`)})()},Nf={".secret":"ZmxhZ3t3ZWxjb21lX3RvX3RoZV9kZXNrfQ=="},El=["flag{welcome_to_the_desk}","flag{svc_backup}","flag{tx-5531}"],Ff=["The hidden note","The brute force that worked","The poisoned address"];let ro=new Set(Sc("0xsurgeon:flags",[]));function hS(){return ro}function uS(i){const t=El.indexOf(String(i).trim());if(t<0)return{ok:!1};const e=!ro.has(t);return e&&(ro.add(t),bc("0xsurgeon:flags",[...ro]),Rr("Flag captured",`${Ff[t]} (${ro.size}/${El.length})`),Cu()),{ok:!0,fresh:e,name:Ff[t],count:ro.size,total:El.length}}const Of=[{from:"IT Service Desk",addr:"helpdesk@nightwatch-support.co",subject:"Your password expires in 2 hours",body:`Your Nightwatch password will expire today. To keep your current password, sign in below before 17:00.

[ Keep my password ]`,phish:!0,tell:'The company is nightwatch.com, the sender is nightwatch-support.co. Real expiry notices never ask you to sign in from the mail, and "keep your current password" is the hook.'},{from:"Harbor Health HR",addr:"hr@harborhealth.org",subject:"Holiday request approved",body:`Hi, your holiday request for 23 to 27 December is approved. You can see it in the HR portal as usual.

Harbor Health HR`,phish:!1,tell:"No link, no attachment, no pressure, nothing to do. It tells you something you expected and points to a place you already use."},{from:"Dana Cole",addr:"dana.cole.ceo@outlook-mail.net",subject:"Quick favour",body:"Are you at your desk? I need five gift cards for a client today, I will pay you back. I am in meetings so do not call, just send me the codes.",phish:!0,tell:'CEO fraud: a boss on a private address, urgency, secrecy ("do not call") and something that cannot be taken back. Always confirm on a known number.'},{from:"Exchange Security",addr:"security@exchange-verify.app",subject:"New login from Lagos, NG",body:`We noticed a new login to your account. If this was not you, secure your account within 30 minutes or withdrawals will be paused.

[ Secure my account ]`,phish:!0,tell:"Fear and a clock. The domain is not your exchange. Open the exchange the way you always do and check the sessions there."},{from:"Forgebase",addr:"noreply@forgebase.dev",subject:"A new SSH key was added",body:`A new SSH key "laptop-2026" was added to your account.
If this was you, there is nothing to do. If not, review the keys under Settings and remove it.`,phish:!1,tell:"It reports an action, asks for nothing and tells you to go to settings yourself instead of clicking. If you did not add a key, that is your incident."},{from:"Parcel Service",addr:"track@parcel-redelivery.info",subject:"We could not deliver your parcel",body:`Your parcel is on hold. Pay the 1.99 EUR redelivery fee to choose a new date.

[ Pay and reschedule ]`,phish:!0,tell:"A tiny payment is the bait: the form collects your full card details. Carriers do not ask for fees by mail link."},{from:"Priya Shah",addr:"priya.shah@meridianresponse.com",subject:"Invitation: incident review, Thursday 10:00",body:`Hi, as discussed in standup: review of Tuesday's alert storm, Thursday 10:00, room 3.
Attachment: invite.ics`,phish:!1,tell:"Expected, from the company domain, from someone you work with, about something already discussed. A calendar file is normal here."},{from:"DocShare",addr:"share@docshare-files.net",subject:'Dana shared "Q4 bonuses.xlsx" with you',body:`Dana Cole shared a file with you.

Q4 bonuses.xlsx

[ Sign in to view ]`,phish:!0,tell:"The file name is chosen to make you curious, the sharing service is not one your company uses, and it wants your login before you see anything."}];function I0(){return Sc("0xsurgeon:inbox-best",0)}function dS(i){i>I0()&&bc("0xsurgeon:inbox-best",i)}const An={x:-12,z:17,r:2.3},es={x:An.x-3.4,z:An.z+.6};function fS(){const t=document.createElement("canvas");t.width=t.height=1024;const e=t.getContext("2d"),n=ve(5);e.translate(1024/2,1024/2),e.lineCap="round",e.lineJoin="round";const s=(c,l=7)=>{for(const[h,u,d]of[[0,0,.9],[1.5,-1,.35]])e.save(),e.translate(h,u),e.strokeStyle=`rgba(255,255,255,${d})`,e.lineWidth=l,e.beginPath(),c(),e.stroke(),e.restore()},o=c=>()=>e.arc(0,0,c,0,Math.PI*2);s(o(486),8),s(o(452),6),s(o(300),7),s(o(78),6);for(const c of[-Math.PI/2,Math.PI/2])s(()=>{for(let l=0;l<=3;l++){const h=c+l/3*Math.PI*2;l?e.lineTo(Math.cos(h)*300,Math.sin(h)*300):e.moveTo(Math.cos(h)*300,Math.sin(h)*300)}});for(let c=0;c<72;c++){const l=c/72*Math.PI*2,h=c%3===0?26:14;s(()=>{e.moveTo(Math.cos(l)*(469-h/2),Math.sin(l)*(469-h/2)),e.lineTo(Math.cos(l)*(469+h/2),Math.sin(l)*(469+h/2))},4)}const r=[()=>{e.arc(0,0,14,0,Math.PI*2),e.moveTo(4,0),e.arc(0,0,4,0,Math.PI*2)},()=>{e.arc(0,0,22,Math.PI*.3,Math.PI*1.7),e.arc(8,0,18,Math.PI*1.6,Math.PI*.4,!0)},()=>{e.moveTo(0,-22),e.lineTo(19,12),e.lineTo(-19,12),e.closePath()},()=>{e.moveTo(0,22),e.lineTo(19,-12),e.lineTo(-19,-12),e.closePath()},()=>{e.moveTo(0,-24),e.lineTo(0,24),e.moveTo(-18,0),e.lineTo(18,0)},()=>{for(let c=0;c<40;c++){const l=c/39*Math.PI*3.2,h=3+l*6;c?e.lineTo(Math.cos(l)*h,Math.sin(l)*h):e.moveTo(h,0)}}];for(let c=0;c<6;c++){const l=-Math.PI/2+c/6*Math.PI*2;e.save(),e.translate(Math.cos(l)*376,Math.sin(l)*376),s(o(46),6),s(r[c],5),e.restore()}s(()=>{for(let c=0;c<=3;c++){const l=-Math.PI/2+c/3*Math.PI*2;c?e.lineTo(Math.cos(l)*60,Math.sin(l)*60):e.moveTo(Math.cos(l)*60,Math.sin(l)*60)}},5);for(let c=0;c<900;c++){e.fillStyle=`rgba(255,255,255,${n()*.12})`;const l=n()*Math.PI*2,h=Math.sqrt(n())*490;e.fillRect(Math.cos(l)*h,Math.sin(l)*h,2,2)}const a=new Te(t);return a.colorSpace=ie,a.anisotropy=8,a}function kf(i,t,e){const n=new Re(i,i,t,t);n.rotateX(-Math.PI/2);const s=n.attributes.position;for(let o=0;o<s.count;o++)s.setY(o,Ve(An.x+s.getX(o),An.z+s.getZ(o))+e);return n.computeVertexNormals(),n}function pS(i){const t=new pt;t.name="alchemy";const e=fS(),n=An.r*2,s=new I(kf(n,32,.05),new $e({map:e,transparent:!0,depthWrite:!1,color:"#eef4ff"}));s.position.set(An.x,0,An.z),s.renderOrder=1;const o=new $e({map:e,transparent:!0,depthWrite:!1,blending:ei,color:"#4fc8ff",opacity:0}),r=new I(kf(n,32,.07),o);r.position.copy(s.position),r.renderOrder=2,t.add(s,r);const a=140,c=new ge;c.setAttribute("position",new Bt(new Float32Array(a*2*3),3));const l=new S1(c,new o0({color:"#a8ecff",transparent:!0,blending:ei,depthWrite:!1}));l.frustumCulled=!1,l.visible=!1,t.add(l);const h=new mt({color:"#cbc4b6",roughness:.92,flatShading:!0}),u=new pt,d=new I(new kt(.32,.62,3.3,6,3),h);d.position.y=1.65,d.castShadow=!0;const p=d.geometry.attributes.position,g=ve(9);for(let f=0;f<p.count;f++)p.setX(f,p.getX(f)*(.9+g()*.2)),p.setZ(f,p.getZ(f)*(.9+g()*.2));d.geometry.computeVertexNormals(),u.add(d);for(const[f,x,_,y]of[[.7,.2,1.4,.3],[-.5,.6,1,-.4],[.1,-.7,1.7,.15]]){const T=new I(new kt(.08,.3,_,5),h);T.position.set(f,_/2-.1,x),T.rotation.z=y,T.castShadow=!0,u.add(T)}const v=Ve(es.x,es.z)-.15;u.position.set(es.x,v-3.6,es.z),t.add(u);const m=P0().has(0);return m&&(u.position.y=v),t.userData={glowMat:o,sparks:l,pillar:u,groundY:v,state:m?"done":"idle",t:0},i.add(t),t}const ir=new b;function mS(i,t,e,n){const s=i.userData,o=n.position;if(s.pillar.position.y>s.groundY-2.5){const r=o.x-es.x,a=o.z-es.z,c=Math.hypot(r,a),l=.95;c<l&&c>1e-4&&(o.x=es.x+r/c*l,o.z=es.z+a/c*l)}if(s.state==="idle"){s.glowMat.opacity=0,Math.hypot(o.x-An.x,o.z-An.z)<An.r*.6&&n.grounded&&(s.state="charge",s.t=0,ne.alchemy());return}if(s.state==="charge"){s.t+=e,s.glowMat.opacity=Math.min(1,s.t*1.6)*(.75+.25*Math.sin(t*40));const r=s.sparks.geometry.attributes.position;let a=0;s.sparks.visible=!0;for(let c=0;c<14;c++){const l=[.95,.62,.16][c%3]*An.r;let h=Math.random()*Math.PI*2,u=null;for(let d=0;d<11;d++){h+=.09+Math.random()*.05;const p=An.x+Math.cos(h)*l,g=An.z+Math.sin(h)*l;ir.set(p,Ve(p,g)+.08+Math.random()*.25,g),u&&a<140&&(r.setXYZ(a*2,u.x,u.y,u.z),r.setXYZ(a*2+1,ir.x,ir.y,ir.z),a++),u=ir.clone()}}for(let c=a;c<140;c++)r.setXYZ(c*2,0,-99,0),r.setXYZ(c*2+1,0,-99,0);if(r.needsUpdate=!0,s.t>.5){const c=Math.min(1,(s.t-.5)/.7),l=1-Math.pow(1-c,3);s.pillar.position.y=s.groundY-3.6*(1-l)+(c<1?(Math.random()-.5)*.04:0),c>=1&&!s.landed&&(s.landed=!0,ne.thump())}s.t>1.6&&(s.state="done",s.sparks.visible=!1,L0(0)&&Rr("Equivalent exchange","To get something, you give something. You found the alchemist's circle (easter egg 1 of 2)."));return}s.glowMat.opacity=.12+.05*Math.sin(t*1.5)}const Aa={x:-80,z:62};function zf(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,250,220,1)"),e.addColorStop(.25,"rgba(255,214,110,0.85)"),e.addColorStop(.6,"rgba(255,170,40,0.25)"),e.addColorStop(1,"rgba(255,150,20,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new Te(i);return n.colorSpace=ie,n}function gS(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),e=t.createRadialGradient(128,128,0,128,128,128);e.addColorStop(0,"rgba(255,226,140,0.55)"),e.addColorStop(.45,"rgba(255,190,70,0.16)"),e.addColorStop(1,"rgba(255,170,40,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);const n=new Te(i);return n.colorSpace=ie,n}function vS(i){const t=ve(1618),e=new pt;e.name="goldtree";const n=Ve(Aa.x,Aa.z)-2;e.position.set(Aa.x,n,Aa.z);const s=new mt({color:"#b07818",emissive:"#e8961a",emissiveIntensity:.45,roughness:.5,metalness:.35,fog:!0}),o=46,r=16;for(let T=0;T<r;T++){const w=T/r*Math.PI*2+t()*.2,R=1.35+t()*.3,C=[],S=15+t()*9;C.push(new b(Math.cos(w)*S*1.25,-3,Math.sin(w)*S*1.25));for(let W=0;W<=8;W++){const Q=W/8,et=Q*o,ht=3.2+(S-3.2)*Math.pow(1-Q,2.4),$=w+Q*R;C.push(new b(Math.cos($)*ht,et,Math.sin($)*ht))}const M=w+R+(t()-.5)*.6,P=22+t()*16,F=82+t()*22;for(let W=1;W<=5;W++){const Q=W/5,et=3.2+P*Math.pow(Q,1.25),ht=o+(F-o)*Math.sin(Q*Math.PI/2),$=M+Q*.5;C.push(new b(Math.cos($)*et,ht,Math.sin($)*et))}const O=new xi(C),V=new ki(O,90,1,8,!1),Z=V.attributes.position,U=V.attributes.normal,k=90,N=8;for(let W=0;W<=k;W++){const Q=W/k,et=2.2*(1-Math.pow(Q,1.5))+.25+(Q<.06?(.06-Q)*18:0),ht=O.getPointAt(Q);for(let $=0;$<=N;$++){const q=W*(N+1)+$;Z.setXYZ(q,ht.x+U.getX(q)*et,ht.y+U.getY(q)*et,ht.z+U.getZ(q)*et)}}V.computeVertexNormals();const G=new I(V,s);e.add(G);for(let W=0;W<3;W++){const Q=.72+t()*.22,et=O.getPointAt(Q),ht=new b(et.x,0,et.z).normalize().multiplyScalar(8+t()*8),$=et.clone().add(ht).add(new b((t()-.5)*6,6+t()*10,(t()-.5)*6)),q=new ki(new _c(et,et.clone().lerp($,.5).add(new b(0,3,0)),$),12,.45,6,!1);e.add(new I(q,s))}}const a=9e3,c=new Float32Array(a*3),l=new Float32Array(a);for(let T=0;T<a;T++){const w=t()*Math.PI*2,R=Math.pow(t(),.7)*52,C=86+(1-Math.pow(R/52,2))*24*(.5+t()*.5)+(t()-.5)*10;c[T*3]=Math.cos(w)*R,c[T*3+1]=C,c[T*3+2]=Math.sin(w)*R*.92,l[T]=t()*Math.PI*2}const h=new ge;h.setAttribute("position",new Be(c,3));const u=new Dh({map:zf(),size:3.8,sizeAttenuation:!0,transparent:!0,depthWrite:!1,color:"#ffb020",fog:!1}),d=new Nh(h,u);e.add(d);const p=gS(),g=[];for(const[T,w,R,C]of[[0,98,0,120],[-24,92,10,70],[26,94,-8,72],[6,106,18,64],[-10,88,-22,60],[0,40,0,46]]){const S=new xc(new Ir({map:p,transparent:!0,depthWrite:!1,color:"#ffc040",fog:!1}));S.position.set(T,w,R),S.scale.setScalar(C),e.add(S),g.push(S)}const v=260,m=new Float32Array(v*3),f=new Float32Array(v*4);for(let T=0;T<v;T++)f[T*4]=t()*Math.PI*2,f[T*4+1]=10+t()*46,f[T*4+2]=t(),f[T*4+3]=.6+t()*.8;const x=new ge;x.setAttribute("position",new Be(m,3));const _=new Dh({map:zf(),size:1.6,sizeAttenuation:!0,transparent:!0,depthWrite:!1,blending:ei,color:"#ffe39a",fog:!1}),y=new Nh(x,_);return y.frustumCulled=!1,e.add(y),yi(e,T=>T.material===s),e.userData={bark:s,motes:u,glows:g,leaves:y,lseed:f},i.add(e),e}function xS(i,t){const e=i.userData,n=re.k;e.bark.emissiveIntensity=.45+n*.8,e.motes.opacity=.85+Math.sin(t*.8)*.05,e.motes.size=3.8+n*.6;const s=n>.5?ei:Ts;if(e.motes.blending!==s){e.motes.blending=s,e.motes.needsUpdate=!0;for(const a of e.glows)a.material.blending=s,a.material.needsUpdate=!0}for(const a of e.glows)a.material.opacity=.28+n*.62;e.motes.color.set(n>.5?"#ffb020":"#ffcc33");const o=e.leaves.geometry.attributes.position,r=e.lseed;for(let a=0;a<o.count;a++){const c=r[a*4],l=r[a*4+1],h=r[a*4+2],u=r[a*4+3],d=(t*.018*u+h)%1,p=96-d*92,g=c+d*3.5;o.setXYZ(a,Math.cos(g)*(l+d*8)+Math.sin(t*.7+c)*1.5,p,Math.sin(g)*(l+d*8))}o.needsUpdate=!0}const Xh=72,Ss=150,Yn=16,qh=Math.PI*2;function _S(){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,512),o=[[0,"#145c2a"],[.18,"#228a3c"],[.3,"#36ab50"],[.33,"#8fbf5e"],[.37,"#e6d38c"],[.5,"#f2e2a4"],[.63,"#e6d38c"],[.67,"#8fbf5e"],[.7,"#36ab50"],[.82,"#228a3c"],[1,"#145c2a"]];for(const[c,l]of o)s.addColorStop(c,l);n.fillStyle=s,n.fillRect(0,0,512,512);const r=32;for(let c=-1;c<512/(r*.55)+1;c++){const l=c*r*.55;if(!(l>512*.37&&l<512*.63))for(let h=-1;h<512/r+1;h++){const u=h*r+(c%2?r/2:0),d=n.createRadialGradient(u,l-r*.15,1,u,l,r*.6);d.addColorStop(0,"rgba(255,255,210,0.16)"),d.addColorStop(1,"rgba(0,30,10,0.0)"),n.fillStyle=d,n.beginPath(),n.arc(u,l,r*.52,0,Math.PI),n.fill(),n.strokeStyle="rgba(6,40,16,0.5)",n.lineWidth=2.5,n.beginPath(),n.arc(u,l,r*.52,.15,Math.PI-.15),n.stroke()}}for(let c=0;c<512/24;c++)n.strokeStyle="rgba(150,115,45,0.6)",n.lineWidth=3,n.beginPath(),n.moveTo(c*24,512*.39),n.quadraticCurveTo(c*24+8,512*.5,c*24,512*.61),n.stroke();const a=new Te(e);return a.colorSpace=ie,a.wrapS=Fi,a.anisotropy=4,a}const D0=(i,t,e,n=12,s=7)=>new I(new ki(new xi(i),n,t,s),e),Kt=(i,t,e)=>new b(i,t,e);function Bf(i){return t=>{if(t<=i[0][0])return i[0].slice(1);for(let e=1;e<i.length;e++)if(t<=i[e][0]){const n=i[e-1],s=i[e],o=(t-n[0])/(s[0]-n[0]),r=o*o*(3-2*o);return n.slice(1).map((a,c)=>a+(s[c+1]-a)*r)}return i[i.length-1].slice(1)}}const nn=(i,t)=>Math.exp(-(i/t)*(i/t)),oo=(i,t)=>{let e=i-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},Hf=(i,t,e)=>i.clone().lerp(t,Math.min(1,Math.max(0,e)));function Gf(i,t,e,n,s=96,o=56,r=.31){const a=[],c=[],l=[],h=[],u=new gt,d=(g,v)=>{const[m,f,x]=t(g),_=Math.cos(v),y=Math.sin(v),T=2.7,w=Math.sign(_)*Math.pow(Math.abs(_),2/T),R=Math.sign(y)*Math.pow(Math.abs(y),2/T),C=w*(w>0?f:x),S=R*m,M=e(g,v),P=Math.hypot(w,R)||1;return[g,C+w/P*M,S+R/P*M]};for(let g=0;g<=s;g++){const v=i[0]+(i[1]-i[0])*(g/s);for(let m=0;m<=o;m++){const f=m/o*Math.PI*2-Math.PI;a.push(...d(v,f)),n(v,f,u),c.push(u.r,u.g,u.b),l.push(v*r,Math.abs(f)/(Math.PI*2))}}for(let g=0;g<s;g++)for(let v=0;v<o;v++){const m=g*(o+1)+v,f=m+o+1;h.push(m,m+1,f,f,m+1,f+1)}const p=new ge;return p.setAttribute("position",new Bt(a,3)),p.setAttribute("color",new Bt(c,3)),p.setAttribute("uv",new Bt(l,2)),p.setIndex(h),p.computeVertexNormals(),{geo:p,surf:d}}const Is=i=>new gt(i),yS=Is("#f2e2a4"),MS=Is("#d9c27a"),wS=Is("#6e1616"),SS=Is("#36ab50"),Vf=Is("#e6d38c"),bS=Is("#f0e6c0"),ES=Is("#8a1c1c");function TS(i){const t=new pt,e=new mt({map:i.scales,vertexColors:!0,roughness:.4,metalness:.15,emissive:"#262214",emissiveIntensity:.25}),n=new mt({vertexColors:!0,roughness:.42,metalness:.12,emissive:"#10200e",emissiveIntensity:.25}),s=Bf([[-1.4,.03,.03,.03],[-1.25,.48,.52,.42],[-.95,.74,.84,.62],[-.4,.84,.96,.68],[.2,.86,.92,.58],[.8,.7,.78,.44],[1.35,.54,.54,.34],[2,.53,.46,.3],[2.65,.5,.45,.29],[3.15,.54,.5,.29],[3.5,.44,.42,.25],[3.7,.22,.22,.14],[3.8,.03,.03,.03]]),a=Gf([-1.4,3.8],s,(p,g)=>{let v=0;for(const m of[-1,1])v+=.26*nn(p-.85,.42)*nn(oo(g,m*.72),.32),v-=.13*nn(p-1.2,.22)*nn(oo(g,m*1.2),.3),v+=.16*nn(p-.05,.4)*nn(oo(g,m*1.75),.35),v+=.13*nn(p-3.25,.2)*nn(oo(g,m*.62),.28),v+=.05*nn(p-2.3,.9)*nn(oo(g,m*.45),.2);return p>1.3&&p<3.1&&(v+=.006*Math.sin(p*26)*nn(g,.9)),v+=.12*nn(p-.1,.7)*nn(g,.22),v-=.06*nn(p-1.6,.5)*nn(Math.abs(g)-1.6,.5),v},(p,g,v)=>{const m=Math.abs(g);v.setRGB(1,1,1),m>2.05&&p>.55&&p<3.4&&v.copy(m<2.35?bS:ES)});t.add(new I(a.geo,e));const c=Bf([[0,.03,.03,.03],[.15,.55,.12,.42],[.6,.6,.12,.4],[1.5,.48,.1,.3],[2.5,.4,.1,.24],[3.05,.37,.1,.24],[3.3,.24,.08,.16],[3.42,.03,.03,.03]]),h=Gf([0,3.42],c,(p,g)=>.08*nn(p-3.05,.25)*nn(oo(g,Math.PI),.6),(p,g,v)=>{const m=Math.abs(g);v.copy(m<.95?wS:m<1.25?MS:m<1.9?Hf(SS,Vf,(m-1.25)/.65):Hf(Vf,yS,(m-1.9)/.5))},64,40),u=new pt;u.position.set(.15,-.3,0),u.rotation.z=-.3,t.add(u),u.add(new I(h.geo,n)),u.add(D0([Kt(.5,.1,0),Kt(1.6,.12,0),Kt(2.5,.2,0),Kt(3,.3,0)],.1,i.mouth,10,6));for(let p=1;p<=3.25;p+=.27)for(const g of[-1,1]){const v=Math.abs(p-2.89)<.1,[m,,f]=s(p),[x]=c(p-.15),_=new I(new Cn(v?.075:.05,v?.5:.2,7),i.tooth);_.rotation.x=Math.PI,_.position.set(p,-f*.92-(v?.2:.07),g*m*.78),t.add(_);const y=new I(new Cn(v?.065:.045,v?.4:.17,7),i.tooth);y.position.set(p-.35,.1+(v?.17:.06),g*x*.78),u.add(y)}for(let p=0;p<5;p++){const g=(p-2)*.1;u.add(jn([Kt(2.9-p*.05,-.15,g),Kt(2.6-p*.1,-.7,g*1.6),Kt(2.1-p*.15,-1.15-p%2*.2,g*2.2)],v=>.08*(1-v*.8),i.whisk,10,6))}for(const p of[-1,1]){const[g,v,m]=a.surf(1.2,p*1.2),f=new I(new Wt(1,20,14),i.pupil);f.position.set(g-.02,v,m-p*.06),f.scale.set(.34,.19,.1),f.rotation.z=-.15,t.add(f);const x=new I(new Wt(1,20,14),i.eye);x.position.set(g,v,m-p*.03),x.scale.set(.28,.155,.1),x.rotation.z=-.15,t.add(x);const _=new I(new Wt(1,10,8),i.pupil);_.position.set(g+.02,v,m+p*.05),_.scale.set(.035,.135,.03),t.add(_);const[y,T,w]=a.surf(3.42,p*.75),R=new I(new Wt(1,10,8),i.nostril);R.position.set(y,T,w),R.scale.set(.07,.025,.045),R.rotation.y=p*.5,t.add(R),t.add(jn([Kt(.2,.65,p*.45),Kt(-.6,1.4,p*.6),Kt(-1.9,2,p*.85),Kt(-3.3,2.15,p*1.05)],C=>.2*(1-C*.75),i.horn,20,8)),t.add(jn([Kt(-.95,1.65,p*.66),Kt(-1.1,2.4,p*.8),Kt(-1.55,3,p*.95)],C=>.11*(1-C*.7),i.horn,10,7)),t.add(jn([Kt(-2.2,2.05,p*.9),Kt(-2.35,2.7,p*1.02),Kt(-2.8,3.1,p*1.12)],C=>.09*(1-C*.7),i.horn,10,7));for(let C=0;C<5;C++)t.add(jn([Kt(-.4,-.1+C*.14,p*.95),Kt(-1-C*.05,C*.2,p*(1.2+C*.03)),Kt(-1.7-C*.1,-.1+C*.32,p*(1.35+C*.05))],S=>.12*(1-S*.9),C%2?i.whisk:i.belly,10,6));t.add(jn([Kt(.85,.85,p*.62),Kt(.1,1.3,p*.95),Kt(-.8,1.4,p*1.45),Kt(-1.5,1.1,p*1.95)],C=>.05*(1-C*.6),i.whisk,14,6))}for(let p=0;p<15;p++){const g=p%2?1:-1,v=-.3-p*.26,m=.8-p*.04,f=1.7-p*.05;t.add(jn([Kt(v,m,g*.15),Kt(v-f*.45,m+f*.45,g*.38),Kt(v-f,m+f*.28,g*.6)],x=>(.16-p*.004)*(1-x*.8),i.mane,10,6))}const d=[];for(const p of[-1,1]){const g=Array.from({length:9},(f,x)=>Kt(3.25-x/8*5.7,-(x/8)*.6,p*(.45+x/8*2.4))),v=new xi(g),m=new I(new ki(v,Ya,.075,ja),i.whisk);m.name="whisker",m.frustumCulled=!1,t.add(m),d.push({mesh:m,s:p,pts:g,curve:v})}return yi(t),t.userData={whiskers:d},t}function jn(i,t,e,n=20,s=10){const o=new xi(i),r=new ki(o,n,1,s,!1),a=r.attributes.position,c=new b;for(let l=0;l<=n;l++){o.getPointAt(l/n,c);const h=t(l/n);for(let u=0;u<=s;u++){const d=l*(s+1)+u;a.setXYZ(d,c.x+(a.getX(d)-c.x)*h,c.y+(a.getY(d)-c.y)*h,c.z+(a.getZ(d)-c.z)*h)}}return r.computeVertexNormals(),new I(r,e)}function AS(i,t){const e=new pt,n=h=>h*t,s=Kt(0,0,n(-.15)),o=Kt(-1.1,-1.25,n(.95)),r=Kt(.15,-2.05,n(1.15)),a=new I(new Wt(1,16,12),i.limb);a.scale.set(.85,.62,.55),a.position.set(-.15,-.12,n(.05)),e.add(a),e.add(jn([s,Kt(-.45,-.55,n(.6)),o,Kt(-.5,-1.8,n(1.1)),r],h=>h<.45?.62-h*.62:.34-(h-.45)*.3,i.limb,28,12));for(let h=0;h<4;h++)e.add(jn([Kt(-1.1,-1.2-h*.12,n(.95)),Kt(-1.7,-1.1-h*.2,n(1+h*.05)),Kt(-2.3-h*.15,-.85-h*.3,n(1.05+h*.08))],u=>.11*(1-u*.85),i.whisk,10,6));const c=new I(new Wt(1,14,10),i.limb);c.position.copy(r).add(Kt(.15,-.08,0)),c.scale.set(.32,.15,.3),e.add(c);const l=[[.35,1],[.05,1],[-.28,.95],[Math.PI-.5,.6]];for(const[h,u]of l){const d=Math.cos(h),p=n(Math.sin(h)),g=(f,x)=>Kt(r.x+.15+d*f,r.y-.1+x,r.z+p*f),v=g(.45*u,.06),m=g(.85*u,-.2);e.add(jn([g(.1,0),v,m],f=>.1-f*.035,i.limb,10,7)),e.add(jn([m,g(1.05*u,-.32),g(1.18*u,-.58),g(1.12*u,-.78)],f=>.07*(1-f)+.004,i.tooth,12,7))}return yi(e),e}function CS(i=1){const t=new pt,e={skin:new mt({color:"#2f9e47",roughness:.38,metalness:.18,emissive:"#0b3a14",emissiveIntensity:.25}),belly:new mt({color:"#ecd896",roughness:.55,emissive:"#3a2e10",emissiveIntensity:.15}),horn:new mt({color:"#efe4c0",roughness:.45}),whisk:new mt({color:"#e9dc9a",roughness:.5,emissive:"#8a7a40",emissiveIntensity:.45}),mane:new mt({color:"#174d24",roughness:.7}),tooth:new mt({color:"#fbf6e6",roughness:.3}),mouth:new mt({color:"#8a1c1c",roughness:.6}),white:new mt({color:"#fff1c8",emissive:"#ffcf60",emissiveIntensity:.4}),eye:new mt({color:"#ff3a1a",emissive:"#ff2a0a",emissiveIntensity:2.2}),pupil:new mt({color:"#0a0a0a",roughness:.3}),nostril:new mt({color:"#0f3d1c",roughness:.8})};e.scales=_S();const n=e.scales.clone();n.repeat.set(4,1),n.needsUpdate=!0,e.limb=new mt({map:n,roughness:.4,metalness:.15,emissive:"#262214",emissiveIntensity:.25});const s=new mt({map:e.scales,roughness:.4,metalness:.15,emissive:"#262214",emissiveIntensity:.25}),o=new ge,r=new Float32Array((Ss+1)*(Yn+1)*3),a=new Float32Array((Ss+1)*(Yn+1)*2),c=[];for(let v=0;v<=Ss;v++)for(let m=0;m<=Yn;m++){const f=v*(Yn+1)+m;a[f*2]=v/Ss*9,a[f*2+1]=m/Yn}for(let v=0;v<Ss;v++)for(let m=0;m<Yn;m++){const f=v*(Yn+1)+m,x=f+Yn+1;c.push(f,x,f+1,x,x+1,f+1)}o.setAttribute("position",new Be(r,3)),o.setAttribute("uv",new Be(a,2)),o.setAttribute("normal",new Be(new Float32Array(r.length),3)),o.setIndex(c);const l=new I(o,s);l.frustumCulled=!1,t.add(l);const h=TS(e);t.add(h);const u=[0,1,2,3].map(v=>{const m=AS(e,v%2?1:-1);return t.add(m),m}),d=new Cn(.3,1.5,7);d.translate(0,.6,0);const p=new os(d,e.belly,40);p.frustumCulled=!1,t.add(p);const g=new pt;for(let v=0;v<9;v++){const m=v/9*qh,f=.35;g.add(D0([Kt(0,0,0),Kt(-1.2,Math.cos(m)*f*2,Math.sin(m)*f*2),Kt(-2.6,Math.cos(m)*f*3.2+.3,Math.sin(m)*f*3.2)],.16,v%2?e.whisk:e.mane,10,6))}return yi(g),t.add(g),t.scale.setScalar(i),t.userData={body:l,head:h,legs:u,spines:p,tuft:g,pts:Array.from({length:Xh},()=>new b),frame:0,ready:!1},t}function Tl(i){return i<.05?.6+i*6:i<.22?.9+(i-.05)*2.4:Math.max(.1,1.31*(1-Math.pow((i-.22)/.78,1.4)))}const RS=new b(0,1,0),Wf=new se,Xf=new b;function sr(i,t,e,n,s,o){i.getPoint(t,e),i.getTangent(t,n).negate(),o.crossVectors(n,RS),o.lengthSq()<1e-6&&o.set(0,0,1),o.normalize(),s.crossVectors(o,n).normalize()}function Ca(i,t,e,n){Xf.crossVectors(e,n),Wf.makeBasis(e,n,Xf),i.quaternion.setFromRotationMatrix(Wf),i.position.copy(t)}const Ya=24,ja=6,Ra=new b,Al=new b,or=new b,Pa=new b,Tn=new b,ci=new b,Ge=new b,gn=new b,PS=new Me;function LS(i,t,e){const n=i.userData;for(let o=0;o<Xh;o++)e(o/(Xh-1),t,n.pts[o]);const s=n.curve||(n.curve=new xi(n.pts));if((n.frame++&1)===0||!n.ready){const o=n.body.geometry.attributes.position,r=n.body.geometry.attributes.normal;for(let a=0;a<=Ss;a++){const c=a/Ss,l=Tl(c);sr(s,c,Tn,ci,Ge,gn);for(let h=0;h<=Yn;h++){const u=h/Yn*qh,d=Math.cos(u),p=Math.sin(u),g=d<0?.88:1,v=Ge.x*d*g+gn.x*p,m=Ge.y*d*g+gn.y*p,f=Ge.z*d*g+gn.z*p,x=a*(Yn+1)+h;o.setXYZ(x,Tn.x+v*l,Tn.y+m*l,Tn.z+f*l);const _=Math.hypot(Ge.x*d/g+gn.x*p,Ge.y*d/g+gn.y*p,Ge.z*d/g+gn.z*p)||1;r.setXYZ(x,(Ge.x*d/g+gn.x*p)/_,(Ge.y*d/g+gn.y*p)/_,(Ge.z*d/g+gn.z*p)/_)}}o.needsUpdate=!0,r.needsUpdate=!0,n.ready=!0}if(sr(s,0,Tn,ci,Ge,gn),Ca(n.head,Tn.addScaledVector(ci,.5),ci,Ge),(n.frame&1)===0)for(const o of n.head.userData.whiskers){for(let c=0;c<=8;c++){const l=c/8;o.pts[c].set(3.25-l*5.7,0-l*.6+Math.sin(t*1.8+l*5)*.55*l,o.s*(.45+l*2.4+Math.sin(t*1.4+l*4)*.5*l))}const r=o.mesh.geometry.attributes.position,a=o.mesh.geometry.attributes.normal;for(let c=0;c<=Ya;c++){o.curve.getPoint(c/Ya,Ra),o.curve.getTangent(c/Ya,Al),or.set(0,1,0).cross(Al).normalize(),Pa.crossVectors(Al,or).normalize();for(let l=0;l<=ja;l++){const h=l/ja*qh,u=Math.cos(h),d=Math.sin(h),p=c*(ja+1)+l,g=or.x*u+Pa.x*d,v=or.y*u+Pa.y*d,m=or.z*u+Pa.z*d;r.setXYZ(p,Ra.x+g*.075,Ra.y+v*.075,Ra.z+m*.075),a.setXYZ(p,g,v,m)}}r.needsUpdate=!0,a.needsUpdate=!0}n.legs.forEach((o,r)=>{const a=r<2?.17:.48,c=r%2?1:-1,l=Tl(a);sr(s,a,Tn,ci,Ge,gn),Tn.addScaledVector(gn,c*l*.62).addScaledVector(Ge,-l*.18),Ca(o,Tn,ci,Ge),o.scale.setScalar(r<2?1.1:.9),o.rotateZ(Math.sin(t*1.4+r*1.9)*.22)});for(let o=0;o<n.spines.count;o++){const r=.03+o*.0235,a=Tl(r),c=PS;sr(s,Math.min(.98,r),Tn,ci,Ge,gn),Ca(c,Tn.addScaledVector(Ge,a*.85),ci,Ge),c.rotateZ(.65),c.scale.setScalar(Math.max(.25,r<.12?.75+r*2:1-(r-.12)*.9)),c.updateMatrix(),n.spines.setMatrixAt(o,c.matrix)}n.spines.instanceMatrix.needsUpdate=!0,sr(s,1,Tn,ci,Ge,gn),Ca(n.tuft,Tn,ci,Ge)}const La={x:140,y:34,z:72};function U0(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"));const s=new Te(n);return s.colorSpace=ie,s}const IS=()=>U0(256,256,i=>{const t=ve(3);for(let e=0;e<14;e++){const n=70+t()*116,s=90+t()*90,o=40+t()*50,r=i.createRadialGradient(n,s-o*.2,0,n,s,o);r.addColorStop(0,"rgba(255,255,255,0.95)"),r.addColorStop(.6,"rgba(255,255,255,0.5)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.fillRect(0,0,256,256)}}),DS=()=>U0(512,512,i=>{const t=i.createRadialGradient(256,256,60,256,256,256);t.addColorStop(0,"#8ff0e6"),t.addColorStop(.35,"#3fc9d6"),t.addColorStop(.75,"#1f8fd0"),t.addColorStop(1,"rgba(31,143,208,0)"),i.fillStyle=t,i.fillRect(0,0,512,512);const e=ve(8);for(let n=0;n<260;n++){const s=e()*Math.PI*2,o=90+e()*140;i.fillStyle=`rgba(255,255,255,${.3+e()*.5})`,i.fillRect(256+Math.cos(s)*o,256+Math.sin(s)*o,2+e()*5,1.5)}});function Cl(i,t,e){const n=new pt,s=new mt({color:"#8a6a44",roughness:.95}),o=new mt({color:"#2f9a3a",roughness:.8,side:me}),r=[];for(let l=0;l<=8;l++){const h=l/8;r.push(new b(Math.sin(h*1.2)*e,h*t,0))}const a=new xi(r);n.add(new I(new ki(a,24,.32,10),s));for(let l=1;l<8;l++){const h=a.getPointAt(l/8),u=new I(new Le(.34,.06,6,16),s);u.rotation.x=Math.PI/2,u.position.copy(h),n.add(u)}const c=a.getPointAt(1);for(let l=0;l<9;l++){const h=l/9*Math.PI*2+i()*.3,u=4.2+i()*1.2,d=new Re(u,.9,12,1),p=d.attributes.position;for(let v=0;v<p.count;v++){const m=p.getX(v)+u/2,f=m/u;p.setXYZ(v,m,-f*f*2.2+.4*f,p.getY(v)*(1-f*.85))}d.computeVertexNormals();const g=new I(d,o);g.position.copy(c),g.rotation.y=h,n.add(g)}for(let l=0;l<3;l++){const h=new I(new Wt(.28,10,8),s);h.position.set(c.x+Math.cos(l*2)*.35,c.y-.35,Math.sin(l*2)*.35),n.add(h)}return n}function qf(i,t,e,n){const s=new Cn(Math.SQRT1_2,1,4,1);return s.rotateY(Math.PI/4),s.scale(i,e,t),s.translate(0,e/2,0),new I(s,n)}function US(){const i=new pt,t=new mt({color:"#f4b3bd",roughness:.8}),e=new mt({color:"#d8323c",roughness:.6}),n=new mt({color:"#ffffff",roughness:.7}),s=new mt({color:"#7fc4ff",roughness:.2,emissive:"#1f5fa0",emissiveIntensity:.25}),o=6,r=5,a=4,c=new I(new $t(o,a,r),t);c.position.y=a/2,i.add(c);const l=qf(o*1.15,r*1.15,1.6,e);l.position.y=a,i.add(l);const h=new I(new $t(o*1.16,.18,r*1.16),n);h.position.y=a+.05,i.add(h);const u=new I(new $t(o*.6,2.2,r*.65),t);u.position.set(-.6,a+1,-.3),i.add(u);const d=qf(o*.72,r*.78,1.4,e);d.position.set(-.6,a+2.1,-.3),i.add(d);const p=new I(new $t(o*.73,.16,r*.79),n);p.position.set(-.6,a+2.15,-.3),i.add(p);const g=new I(new $t(1.2,2.2,.12),e);g.position.set(1.4,1.1,r/2+.06),i.add(g);const v=(T,w,R,C)=>{const S=new I(new $t(1.5,1.3,.08),n),M=new I(new $t(1.2,1,.1),s),P=new pt;P.add(S,M),M.position.z=.02,P.position.set(T,w,R),P.rotation.y=C,i.add(P)};v(-1.5,2.2,r/2+.04,0),v(o/2+.04,2.2,-1,Math.PI/2),v(o/2+.04,2.2,1.2,Math.PI/2),v(-.6,a+1.1,r*.325-.3+.05,0);const m=new I(new $t(2.4,.8,.12),n);m.position.set(-1.3,3.5,r/2+.07),i.add(m);const f=new I(new $t(1.8,.3,.8),n);f.position.set(1.4,.15,r/2+.4),i.add(f);for(let T=0;T<5;T++){const w=new I(new $t(o*1.05-T*1.1,.06,.12),new mt({color:"#b52630"}));w.position.set(0,a+.3+T*.28,r*.5-T*.5),i.add(w)}const x=new I(new $t(.6,1.6,.6),n);x.position.set(1.8,a+1.3,-1),i.add(x);const _=new I(new kt(.05,.05,2.2,6),n);_.position.set(-1.6,a+4.2,-.6),i.add(_);for(const T of[.3,.7]){const w=new I(new $t(1.2-T,.05,.05),n);w.position.set(-1.6,a+4.2+T,-.6),i.add(w)}for(let T=0;T<7;T++){const w=new I(new $t(.1,.8,.1),n);w.position.set(-o/2+.2+T*.75,.4,r/2+1),Math.abs(w.position.x-1.4)>.8&&i.add(w)}const y=new I(new $t(o-.2,.08,.08),n);return y.position.set(0,.82,r/2+1),i.add(y),i}function NS(i){const t=ve(808),e=new pt;e.name="skyisland",e.position.set(La.x,La.y,La.z),e.rotation.y=Math.atan2(-140,-72)-.35;const n=new pt;n.rotation.x=.42,e.add(n);const s=new I(new Dn(26,64),new $e({map:DS(),transparent:!0,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.05,n.add(s);const o=new Wt(11,48,16,0,Math.PI*2,0,Math.PI/2);o.scale(1,.12,.85),n.add(new I(o,new mt({color:"#f2dca0",roughness:1})));const r=new I(new Dn(5.5,32),new mt({color:"#5fb84a",roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(-.5,1.31,-.5),r.scale.set(1.25,1,1),n.add(r);const a=US();a.position.set(-.5,1.3,-1),a.rotation.y=.15,n.add(a);const c=Cl(t,9,1.6);c.position.set(-7.5,.6,-2),c.rotation.y=.6,n.add(c);const l=Cl(t,10.5,-1.8);l.position.set(6.5,.6,-3.5),l.rotation.y=-.4,n.add(l);const h=Cl(t,7,1.2);h.position.set(-5,.6,5),h.rotation.y=2.2,n.add(h);const u=new mt({color:"#ffffff",roughness:.6}),d=new pt,p=new I(new $t(2.2,.15,.9),u);p.position.y=.45,d.add(p);const g=new I(new $t(.9,.15,.9),u);g.position.set(-1.2,.75,0),g.rotation.z=.7,d.add(g),d.position.set(6.2,.9,3.2),d.rotation.y=-.5,n.add(d);const v=new mt({color:"#a7845a",roughness:1,flatShading:!0}),m=new mt({color:"#7d6a58",roughness:1,flatShading:!0});for(let T=0;T<9;T++){const w=T/9*Math.PI*2+t()*.4,R=T===0?0:3+t()*5,C=T===0?11:4+t()*6,S=T===0?7:2.4+t()*2.2,M=new Cn(S,C,7,3);M.rotateX(Math.PI);const P=M.attributes.position;for(let O=0;O<P.count;O++)P.setXYZ(O,P.getX(O)*(.8+.4*Math.sin(O*1.7+T)),P.getY(O),P.getZ(O)*(.8+.4*Math.cos(O*1.3+T)));M.computeVertexNormals();const F=new I(M,T%3?v:m);F.position.set(Math.cos(w)*R,.3-C/2,Math.sin(w)*R*.85),n.add(F)}const f=IS(),x=new Ir({map:f,transparent:!0,depthWrite:!1,opacity:.9}),_=[];for(let T=0;T<22;T++){const w=t()*Math.PI*2,R=4+t()*14,C=new xc(x);C.position.set(Math.cos(w)*R,-11-t()*5,Math.sin(w)*R);const S=12+t()*10;C.scale.set(S,S*.55,1),n.add(C),_.push(C)}const y=CS(1.2);return e.add(y),e.traverse(T=>{if(T.isMesh||T.isSprite){T.castShadow=!1,T.receiveShadow=!1;for(const w of[].concat(T.material))w.fog=!1}}),yi(n),_0(n),e.scale.setScalar(2),e.userData={clouds:_,dragon:y,base:La.y},i.add(e),e}function FS(i,t){const e=i.userData,n=re.k;i.position.y=e.base+Math.sin(t*.15)*.8;for(const s of e.clouds)s.material.color.setRGB(1-n*.72,1-n*.7,1-n*.55);LS(e.dragon,t,(s,o,r)=>{const a=o*.055-s*1.5,c=28+Math.sin(a*2+s*6)*3;return r.set(Math.cos(a)*c,15+Math.sin(a*3+1)*4+Math.sin(s*14-o*1.3)*1.4,Math.sin(a)*c-30)})}const Ne={x:-22,z:-8},$f=5,OS=.52,kS=.48,Yf=28,Di=[];let Pr=null,_s=null,Za=null;function zS(i){const t=document.createElement("canvas");t.width=512,t.height=256;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#5fb3ff"),n.addColorStop(1,"#1a5fc8"),e.fillStyle=n,e.fillRect(0,0,512,256),e.fillStyle="rgba(255,255,255,0.25)",e.fillRect(0,0,512,90),e.strokeStyle="rgba(255,255,255,0.85)",e.lineWidth=6,e.strokeRect(4,4,504,248),e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.font='bold 64px "Silkscreen", monospace',e.fillText(i[0],256,96),e.font='30px "Silkscreen", monospace',e.fillText(i[1],256,176);const s=new Te(t);return s.colorSpace=ie,s}function BS(i){const t=en(),e=new pt;e.name="parkour";const n=Ve(Ne.x,Ne.z),s=F=>new mt({color:F,emissive:F,emissiveIntensity:1.4}),o=s("#5fd0ff"),r=s("#7dff8a"),a=s("#3b8fff"),c=s("#ffd27a"),l=new Ht({color:"#f6f8fb",roughness:.38,clearcoat:.6,clearcoatRoughness:.2,envMapIntensity:.35}),h=new Ht({color:"#4fa8ff",roughness:.05,clearcoat:1,clearcoatRoughness:.03,emissive:"#1f6fd0",emissiveIntensity:.25});let u=n+.35;for(let F=0;F<Yf;F++){const O=F*OS,V=F===9||F===18?"checkpoint":F%9===5?"spring":F%6===2?"mover":"pad";F>0&&(u+=Di[F-1].kind==="spring"?1.25:kS);const Z=V==="checkpoint"?.95:.75,U=Ne.x+Math.cos(O)*$f,k=Ne.z+Math.sin(O)*$f,N=new pt,G=new I(new kt(Z,Z*.92,.22,40),l);G.position.y=-.11,G.castShadow=!1,G.receiveShadow=!0,N.add(G);const W=new I(new Le(Z,.035,10,48),V==="checkpoint"?r:V==="mover"?a:o);if(W.rotation.x=Math.PI/2,W.position.y=-.02,N.add(W),V==="spring"){const Q=new I(new Wt(Z*.7,32,16,0,Math.PI*2,0,Math.PI/2),h);Q.scale.y=.45,Q.castShadow=!0,N.add(Q)}if(V==="checkpoint"){const Q=new I(new Le(.55,.05,12,48),t.chrome.clone());Q.position.y=1.4,Q.name="spin",N.add(Q),W.material=W.material.clone()}N.position.set(U,u,k),e.add(N),Di.push({x:U,z:k,r:Z,baseTop:u,top:u,kind:V,index:F,mesh:N,bob:F*1.7})}const d=u+.3,p=d-n-.2,g=new Ht({color:"#cfefff",roughness:.08,metalness:0,clearcoat:1,transparent:!0,opacity:.55,emissive:"#3b8fe0",emissiveIntensity:.12});Za=new I(new kt(1.4,1.6,p,48,1,!0),g),Za.position.set(Ne.x,n+p/2,Ne.z),e.add(Za);for(let F=1;F<8;F++){const O=new I(new Le(1.42+.2*(1-F/8),.03,8,48),o);O.rotation.x=Math.PI/2,O.position.set(Ne.x,n+p*F/8,Ne.z),e.add(O)}const v=new I(new kt(2.6,2.4,.3,64),l);v.position.set(Ne.x,d-.15,Ne.z),v.castShadow=!0,v.receiveShadow=!0,e.add(v);const m=new I(new Le(2.6,.05,12,96),c);m.rotation.x=Math.PI/2,m.position.set(Ne.x,d-.02,Ne.z),e.add(m),Pr={x:Ne.x,z:Ne.z,r:2.6,top:d,kind:"summit",index:Yf},Di.push({...Pr,baseTop:d,mesh:v,bob:0}),_s=new pt;const f=new I(new Se(1.6,.1,.5,3,.04),t.white);f.position.y=.45,f.castShadow=!0,_s.add(f);const x=new I(new Se(1.6,.5,.08,3,.03),t.white);x.position.set(0,.78,.22),x.rotation.x=-.12,x.castShadow=!0,_s.add(x);for(const F of[-.65,.65]){const O=new I(new kt(.03,.03,.45,12),t.chrome);O.position.set(F,.225,0),_s.add(O)}_s.position.set(Ne.x,d,Ne.z+.9),e.add(_s);const _=zS(["SKY STEPS","jump: space"]),y=new mt({map:_,emissive:"#ffffff",emissiveIntensity:.15,emissiveMap:_}),T=new I(new Se(2.2,1.1,.07,2,.02),[t.white,t.white,t.white,t.white,y,t.white]),w=Di[0],R=w.x+1.8,C=w.z+1.2,S=Ve(R,C),M=new pt;M.position.set(R,S,C),M.lookAt(0,S,0),T.position.set(0,1.4,.06),T.castShadow=!0,M.add(T);const P=new I(new kt(.045,.055,1.95,12),t.chrome);return P.position.set(0,.975,-.04),M.add(P),e.add(M),i.add(e),e}function HS(i){for(const t of Di){t.kind==="mover"&&(t.top=t.baseTop+Math.sin(i*1.1+t.bob)*.18,t.mesh.position.y=t.top);const e=t.mesh.getObjectByName&&t.mesh.getObjectByName("spin");if(e){e.rotation.y=i*(t.reached?2.2:1.2),e.position.y=1.4+Math.sin(i*2+t.bob)*.08,t.pulse>0&&(t.pulse=Math.max(0,t.pulse-.016*1.6));const n=1+Math.sin((1-(t.pulse||0))*Math.PI)*(t.pulse>0?.55:0);e.scale.setScalar(n)}}}function GS(i,t,e,n,s){let o=null;for(const r of Di){if(Math.hypot(i-r.x,t-r.z)>r.r+.12)continue;(n?r.top<=e+.2&&r.top>=e-.7:s>=r.top-.05&&e<=r.top+.05)&&(!o||r.top>o.top)&&(o=r)}return o}function VS(i){if(!Za||!Pr||i.y>Pr.top-.4)return;const t=i.x-Ne.x,e=i.z-Ne.z,n=Math.hypot(t,e),s=1.6+.3;n<s&&n>1e-4&&(i.x=Ne.x+t/n*s,i.z=Ne.z+e/n*s)}function Ru(){return _s}function WS(){return Pr}const N0="0xsurgeon:sky";function Or(){try{return JSON.parse(localStorage.getItem(N0))??null}catch{return null}}function XS(i){try{localStorage.setItem(N0,JSON.stringify(i))}catch{}}function F0(){return Di.filter(i=>i.kind==="checkpoint"||i.kind==="summit")}const Ia=new gt("#ffc94a");function O0(i,t=!0){const e=Di.find(o=>o.index===i&&o.kind==="checkpoint");if(!e)return;const n=e.mesh.getObjectByName("spin");n.material.color.copy(Ia),n.material.metalness=.35,n.material.roughness=.2,n.material.envMapIntensity=.4,n.material.emissive=Ia.clone(),n.material.emissiveIntensity=1.3;const s=e.mesh.children.find(o=>o.geometry&&o.geometry.type==="TorusGeometry"&&o!==n);s&&(s.material.color.copy(Ia),s.material.emissive.copy(Ia),s.material.emissiveIntensity=1.8),e.reached=!0,t&&(e.pulse=1)}function qS(){const i=Or();if(i!=null)for(const t of Di)t.kind==="checkpoint"&&t.index<=i&&O0(t.index,!1)}function $S(){const i=new Ye({side:fn,depthWrite:!1,fog:!1,uniforms:{top:{value:new gt("#0a48c4")},mid:{value:new gt("#3d97f6")},horizon:{value:new gt("#b9e0ff")},sunDir:{value:new b(-.4,.5,-.75).normalize()},night:{value:0},nTop:{value:new gt("#04051a")},nMid:{value:new gt("#14103a")},nHorizon:{value:new gt("#2a1450")},moonDir:{value:new b(.42,.66,-.62).normalize()},dusk:{value:0}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 top; uniform vec3 mid; uniform vec3 horizon; uniform vec3 sunDir;
      uniform float night; uniform vec3 nTop; uniform vec3 nMid; uniform vec3 nHorizon; uniform vec3 moonDir; uniform float dusk;
      varying vec3 vDir;
      float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      void main() {
        vec3 d = normalize(vDir);
        float h = clamp(d.y, 0.0, 1.0);
        vec3 c = mix(horizon, mid, smoothstep(0.0, 0.09, h));
        c = mix(c, top, smoothstep(0.09, 0.5, h));
        float s = max(dot(d, sunDir), 0.0);
        c += vec3(1.0, 0.92, 0.75) * pow(s, 10.0) * 0.22;
        // night: violet haze at the horizon, deep navy above, stars and a soft moon
        vec3 n = mix(nHorizon, nMid, smoothstep(0.0, 0.16, h));
        n = mix(n, nTop, smoothstep(0.16, 0.65, h));
        // a magenta glow low over the city (north) and a cyan one to the east
        n += vec3(0.55, 0.08, 0.45) * pow(max(dot(d, normalize(vec3(-0.2, 0.04, -1.0))), 0.0), 6.0) * 0.2 * (1.0 - h);
        n += vec3(0.05, 0.35, 0.5) * pow(max(dot(d, normalize(vec3(1.0, 0.04, 0.2))), 0.0), 6.0) * 0.22 * (1.0 - h);
        vec3 cell = floor(d * 420.0);
        float st = step(0.9972, hash(cell)) * smoothstep(0.05, 0.3, h);
        float tw = 0.6 + 0.4 * hash(cell + 7.0);
        n += vec3(0.85, 0.9, 1.0) * st * tw;
        float m = max(dot(d, moonDir), 0.0);
        n += vec3(0.45, 0.5, 0.85) * pow(m, 60.0) * 0.3;
        vec3 col = mix(c, n, night);
        // sunset and sunrise: an orange band low on the horizon, pink above it, strongest toward the sun
        vec3 duskCol = mix(vec3(1.0, 0.46, 0.18), vec3(0.85, 0.32, 0.58), smoothstep(0.0, 0.22, h));
        float band = 1.0 - smoothstep(0.0, 0.42, h);
        band *= 0.45 + 0.55 * pow(max(dot(d, normalize(vec3(sunDir.x, 0.0, sunDir.z))), 0.0), 2.0);
        col = mix(col, duskCol, band * dusk * 0.95);
        gl_FragColor = vec4(col, 1.0);
      }`}),t=new I(new Wt(400,48,24),i);return t.name="sky",t}function Da(i){const t=document.createElement("canvas");t.width=512,t.height=256;const e=t.getContext("2d"),n=ve(i);for(let r=0;r<40;r++){const a=70+n()*370,c=90+n()*90,l=26+n()*70,h=e.createRadialGradient(a,c-l*.2,0,a,c,l);h.addColorStop(0,"rgba(255,255,255,0.9)"),h.addColorStop(.55,"rgba(255,255,255,0.45)"),h.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=h,e.fillRect(0,0,512,256)}const s=e.createLinearGradient(0,120,0,256);s.addColorStop(0,"rgba(120,170,230,0)"),s.addColorStop(1,"rgba(120,170,230,0.25)"),e.globalCompositeOperation="source-atop",e.fillStyle=s,e.fillRect(0,0,512,256);const o=new Te(t);return o.colorSpace=ie,o}function YS(){const i=new pt,t=ve(9),e=[Da(1),Da(2),Da(3),Da(4)];for(let n=0;n<24;n++){const s=new Ir({map:e[n%4],transparent:!0,depthWrite:!1,opacity:1,fog:!1}),o=new xc(s),r=t()*Math.PI*2,a=150+t()*120;o.position.set(Math.cos(r)*a,48+t()*30,Math.sin(r)*a);const c=60+t()*80;o.scale.set(c,c*.5,1),o.userData.speed=.3+t()*.5,i.add(o)}return i.name="clouds",i}function jS(){const i=new pt,t=ve(17),e=new Wt(1,32,24),n=new Ht({color:16777215,roughness:.02,metalness:0,transmission:.97,thickness:.15,ior:1.12,iridescence:1,iridescenceIOR:1.3,iridescenceThicknessRange:[120,520],transparent:!0,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.4}),s=new os(e,n,40);s.frustumCulled=!1;const o=[];for(let r=0;r<40;r++){const a=new Me,c=.14+t()*.5;a.scale.setScalar(c);const l=t()*Math.PI*2,h=1.5+t()*16;a.position.set(Math.cos(l)*h,.4+t()*7,Math.sin(l)*h),a.userData={rise:.1+t()*.22,sway:t()*Math.PI*2,swayAmp:.1+t()*.3,base:a.position.clone(),r:c,pop:0},o.push(a),a.updateMatrix(),s.setMatrixAt(r,a.matrix)}return i.add(s),i.userData={list:o,inst:s},i.name="bubbles",i}function ZS(){const t=new Wt(.02,8,6),e=new $e({color:"#eaf6ff",transparent:!0,opacity:.9}),n=new os(t,e,14);return n.visible=!1,n.userData={t:1,vel:Array.from({length:14},()=>new b),origin:new b},n}function KS(){const i=en(),t=new pt,e=ve(33);for(let n=0;n<7;n++){const s=3.6+n*1.2,o=new I(new kt(.42+e()*.1,.46+e()*.1,.06,48),i.stone);o.position.set((e()-.5)*.6,Ve(0,s)+.03,s),o.receiveShadow=!0,o.castShadow=!0,t.add(o)}return t}function JS(i){i.fog=new gu("#bfe0ff",70,320),i.add($S());const t=YS();i.add(t),i.add(CM());const e=RM();i.add(e),i.add(PM()),i.add(KS());const n=BM(i),s=jS();i.add(s);const o=ZS();i.add(o);const r=new b(-.4,.5,-.75).normalize(),a=ow(r);i.add(a),i.add(a.userData.bed),i.add(a.userData.volume);const c=cw(Ve,en);i.add(c);const l=Nw();l.position.copy(c.userData.top),l.position.y+=.06,l.position.z-=.3,l.rotation.y=Math.atan2(-(0-l.position.x),-(-95-l.position.z)),i.add(l);const h=uw();i.add(h);const u=yw();i.add(u);const d=kw();i.add(d);const p=Bw();i.add(p);const g=Yw();i.add(g),BS(i);const v=Sw();i.add(v);const m=Dw();i.add(m);const f=m.getObjectByName("flag");i.add(HM()),i.add(GM());const x=VM();x.position.set(0,_n,-.14),i.add(x);const _=WM();_.position.set(0,_n+.006,.16),i.add(_);const y=$M();y.position.set(-.68,_n,-.05),i.add(y);const T=YM();T.position.set(.56,_n,.12),T.rotation.y=.6,i.add(T);const w=jM();w.position.set(-.5,_n,.2),w.rotation.y=.2,i.add(w);const R=ZM(.06);R.position.set(.66,_n,-.22),i.add(R);const C=JM();C.position.set(-.44,_n,-.24),C.rotation.y=.35,i.add(C);const S=QM("/os/bots.jpg");S.position.set(.45,_n,-.2),S.rotation.y=-.5,i.add(S);const M=XM();M.position.set(.05,.21,.78),M.rotation.y=.25,i.add(M);const P=new df("#fff3dc",2);P.position.set(-14,22,-20),P.castShadow=!0,P.shadow.mapSize.set(2048,2048),P.shadow.camera.left=-16,P.shadow.camera.right=16,P.shadow.camera.top=16,P.shadow.camera.bottom=-16,P.shadow.camera.near=1,P.shadow.camera.far=90,P.shadow.bias=-4e-4,P.shadow.normalBias=.03,P.shadow.radius=3,P.shadow.intensity=.62,i.add(P),i.add(P.target),i.add(new rM("#cfe8ff","#4f9a3a",.55));const F=new df("#e8f2ff",.55);F.position.set(6,8,14),i.add(F);const O=new bu("#9cc8ff",.7,1.8,2);O.position.set(0,_n+.3,.35),i.add(O);const V=pS(i),Z=vS(i),U=NS(i),k=tS();i.add(k);const N=i.children.find(K=>K.isHemisphereLight),G=i.getObjectByName("sky").material,W=i.children.find(K=>K.isLensflare),Q=new gt,et=new b(-14,22,-20).normalize();P.userData.dir=et.clone();const ht=new b(-.4,.5,-.75).normalize(),$=new b(-.55,-.28,-.8).normalize(),q=new b(.42,.66,-.62).normalize(),at=new b(.62,-.25,-.74).normalize(),tt=(K,D,Pt)=>{const lt=Math.min(1,Math.max(0,(Pt-K)/(D-K)));return lt*lt*(3-2*lt)},vt=K=>Math.pow(Math.sin(Math.PI*Math.min(1,K*1.15)),1.4),At=new b,It=new b,Yt=[];x.traverse(K=>{K.isMesh&&K.material.userData.bezel&&!Yt.includes(K.material)&&Yt.push(K.material)});for(const K of Yt)K.userData.dayColor=K.color.clone();Ur(K=>{for(const ut of Yt)ut.color.copy(ut.userData.dayColor).lerp(Q.set("#1c1f3a"),K*.92),ut.envMapIntensity=1-K*.85,ut.clearcoat=1-K*.8;At.lerpVectors(ht,$,tt(0,.6,K)).normalize(),It.lerpVectors(at,q,tt(.4,1,K)).normalize();const D=vt(K);G.uniforms.sunDir.value.copy(At),G.uniforms.moonDir.value.copy(It),G.uniforms.dusk.value=D,iS(k,At,It,K,D),G.uniforms.night.value=tt(.15,.95,K),K<.5?P.userData.dir.lerpVectors(et,$,tt(0,.6,K)).normalize():P.userData.dir.copy(It),$n("#bfe0ff","#100b26",K,i.fog.color),i.fog.color.lerp(Q.set("#c9707a"),D*.45),i.fog.near=70-K*10,i.fog.far=320-K*40,$n("#fff3dc","#9fb4ff",K,P.color),P.color.lerp(Q.set("#ff8a4a"),D*.75),P.intensity=(2-K*1.05)*(1-.55*D),P.shadow.intensity=.62-K*.25,$n("#cfe8ff","#5a62c0",K,N.color),$n("#4f9a3a","#1c3238",K,N.groundColor),N.intensity=.55+K*.45,$n("#e8f2ff","#c06cff",K,F.color),F.intensity=.55+K*.05,W&&(W.visible=K<.25);for(const ut of t.children)$n("#ffffff","#5a4a8c",K,ut.material.color),ut.material.color.lerp(Q.set("#ffa98a"),D*.7),ut.userData.base=1-K*.45,ut.material.opacity=ut.userData.base*(ut.userData.clear??1);e.material.uniforms.night.value=K;const Pt=a.material.uniforms;$n("#2b8df0","#0c1638",K,Pt.waterColor.value),$n("#fff2d0","#4a5aa8",K,Pt.sunColor.value);const lt=a.userData.bed.material,bt=a.userData.volume.material;$n("#1a6fd6","#0a1230",K,lt.color),$n("#0b3f8a","#1a0f40",K,lt.emissive),$n("#2f8ae8","#101a44",K,bt.color)});const ot=x.getObjectByName("screen");return{forest:n,screen:ot,computer:x,sun:P,clouds:t,bubbles:s,grass:e,pop:o,glow:O,lake:a,fishes:h,sparkles:v,penguins:u,whale:d,zeppelin:p,blockchain:g,flag:f,celestial:k,alchemy:V,goldtree:Z,skyisland:U,city:m,telescope:l}}const Rl=new b,jf=new b,Zf=new b,Pl=new b,Ll=new b;function QS(i,t,e,n,s){const o=n.position,r=i.skyisland&&i.skyisland.userData.dragon;if(Rl.copy(s?s.position:o),r){r.userData.head.getWorldPosition(jf);const h=r.userData.body.geometry.attributes.position;Zf.fromBufferAttribute(h,Math.floor(h.count/2)).applyMatrix4(r.userData.body.matrixWorld)}for(const h of i.clouds.children){h.position.x+=h.userData.speed*e,h.position.x>280&&(h.position.x=-280);const u=h.userData;let d=1;if(r){Pl.subVectors(h.position,Rl);const p=Pl.length(),g=h.scale.x*.45/p;for(const v of[jf,Zf])if(Ll.subVectors(v,Rl),Ll.length()>p-h.scale.x*.3&&Pl.angleTo(Ll)<g){d=.12;break}}u.clear=(u.clear??1)+(d-(u.clear??1))*Math.min(1,e*1.2),h.material.opacity=(u.base??1)*u.clear}const a=i.pop,c=i.bubbles.userData;for(const h of c.list){const u=h.userData;if(u.pop>0){u.pop-=e,u.pop<=0&&(h.visible=!0,h.position.y=Ve(u.base.x,u.base.z)+.3,h.scale.setScalar(.001));continue}h.scale.x<u.r&&h.scale.setScalar(Math.min(u.r,h.scale.x+e*.4)),h.position.y+=u.rise*e,h.position.x=u.base.x+Math.sin(t*.6+u.sway)*u.swayAmp,h.position.z=u.base.z+Math.cos(t*.45+u.sway)*u.swayAmp,h.position.y>14&&(h.position.y=Ve(u.base.x,u.base.z)+.3);const d=h.position.x-o.x,p=h.position.z-o.z,g=h.position.y-(o.y+.8);if(d*d+p*p+g*g<(u.r+.45)**2){h.visible=!1,u.pop=6+Math.random()*6,ne.pop(),a.visible=!0,a.userData.t=0,a.userData.origin.copy(h.position);for(const v of a.userData.vel)v.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).normalize().multiplyScalar(1.2+Math.random()*1.5)}}for(let h=0;h<c.list.length;h++){const u=c.list[h];u.visible?u.updateMatrix():u.matrix.makeScale(0,0,0),c.inst.setMatrixAt(h,u.matrix)}if(c.inst.instanceMatrix.needsUpdate=!0,a.visible){const h=a.userData;h.t+=e;const u=new Me;h.vel.forEach((d,p)=>{u.position.copy(h.origin).addScaledVector(d,h.t).add(new b(0,-2.5*h.t*h.t,0)),u.scale.setScalar(Math.max(.01,1-h.t*1.6)),u.updateMatrix(),a.setMatrixAt(p,u.matrix)}),a.instanceMatrix.needsUpdate=!0,h.t>.7&&(a.visible=!1)}lw(i.lake,e),mw(i.fishes,t),Mw(i.penguins,t),zw(i.whale,t),Xw(i.zeppelin,t,e),jw(i.blockchain,t),Aw(i.flag,t),sS(i.celestial,t),mS(i.alchemy,t,e,n),xS(i.goldtree,t),FS(i.skyisland,t),Fw(i.telescope,t,e),HS(t),Uw(i.city,t),bw(i.sparkles,t),i.grass.userData.uniforms.time.value=t,i.grass.userData.uniforms.player.value.copy(o);const l=i.sun.userData.dir;i.sun.position.set(o.x+l.x*31.4,Math.max(2,l.y*31.4),o.z+l.z*31.4),i.sun.target.position.copy(o),i.glow.intensity=(.65+Math.sin(t*7.3)*.04+Math.sin(t*1.7)*.05)*(1-re.k*.6)}const t2=3.4,Kf=14,e2=4.6,n2=10;function i2(){const i=new pt,t=new Ht({color:"#5db0ff",roughness:.04,metalness:0,transmission:.55,thickness:.5,ior:1.35,clearcoat:1,clearcoatRoughness:.02,attenuationColor:new gt("#8fd0ff"),attenuationDistance:1.6,emissive:"#1a5fc8",emissiveIntensity:.22,envMapIntensity:1.4});t.userData.solidity=.93;const e=new $e({color:"#ffffff",transparent:!0,opacity:.75,depthWrite:!1}),n=new Ht({color:"#1456b8",roughness:.2,metalness:0,clearcoat:1,transparent:!0,opacity:.25,side:fn}),s=[],o=[[0,0],[.22,0],[.3,.06],[.33,.2],[.3,.4],[.22,.56],[.12,.66],[0,.7]];for(const[x,_]of o)s.push(new st(x,_));const r=new ls(s,48);r.computeVertexNormals();const a=new I(r,t);a.position.y=0,a.castShadow=!0,a.name="body",i.add(a);const c=new I(r,n);c.scale.setScalar(1.02),i.add(c);const l=new I(new Wt(.11,24,16),e);l.scale.set(1,.55,.3),l.position.set(-.12,.5,.26),l.rotation.z=.5,i.add(l);const h=new I(new Wt(.25,48,32),t);h.position.y=.93,h.castShadow=!0,h.name="head",i.add(h);const u=new I(new Wt(.255,48,32),n);u.position.y=.93,i.add(u);const d=new I(new Wt(.09,24,16),e);d.scale.set(1,.6,.3),d.position.set(-.1,1.04,.2),d.rotation.z=.6,i.add(d);const p=new I(new Wt(.03,16,12),e);p.scale.set(1,1,.3),p.position.set(.1,.82,.21),i.add(p);const g=document.createElement("canvas");g.width=g.height=128;const v=g.getContext("2d"),m=v.createRadialGradient(64,64,0,64,64,64);m.addColorStop(0,"rgba(0,20,60,0.45)"),m.addColorStop(1,"rgba(0,20,60,0)"),v.fillStyle=m,v.fillRect(0,0,128,128);const f=new I(new Re(.9,.9),new $e({map:new Te(g),transparent:!0,depthWrite:!1}));return f.rotation.x=-Math.PI/2,f.position.y=.01,f.name="blob",i.add(f),i}function s2(i){const t=new Ht({color:"#4fa8ff",roughness:.05,clearcoat:1,transparent:!0,opacity:.8,emissive:"#1f6fd0",emissiveIntensity:.4,side:me,depthWrite:!1}),e=new I(new Le(.3,.05,10,40),t);e.rotation.x=Math.PI/2,e.visible=!1,i.add(e);const n=new os(new Wt(.045,10,8),t,8);return n.visible=!1,i.add(n),{ring:e,drops:n,t:1,vel:Array.from({length:8},()=>new b),origin:new b}}class o2{constructor(t,e,n){this.scene=t,this.splat=s2(t),this.camera=e,this.mesh=i2(),this.mesh.position.set(0,0,9.5),this.mesh.rotation.y=Math.PI,t.add(this.mesh),this.vel=new b,this.keys=new Set,this.yaw=0,this.pitch=.32,this.walkT=0,this.enabled=!0,this.dragging=!1,this.touch=null,this.moveVec=new st,this.vy=0,this.grounded=!0,this.squash=0,window.addEventListener("keydown",o=>{this.enabled&&(o.code==="Space"&&(o.preventDefault(),this.grounded&&!o.repeat&&(this.vy=e2,this.grounded=!1,ne.jump())),this.keys.add(o.code))}),window.addEventListener("keyup",o=>this.keys.delete(o.code)),this.fingers=new Map,n.addEventListener("pointerdown",o=>{if(this.enabled){if(o.pointerType==="touch"){const r=[...this.fingers.values()].some(c=>c.role==="move"),a=o.clientX<window.innerWidth*.5&&!r?"move":"look";this.fingers.set(o.pointerId,{role:a,x:o.clientX,y:o.clientY,lastX:o.clientX,lastY:o.clientY});return}this.dragging=!0,this.lastX=o.clientX,this.lastY=o.clientY}}),window.addEventListener("pointermove",o=>{const r=this.fingers.get(o.pointerId);if(r){r.role==="move"?this.moveVec.set((o.clientX-r.x)/70,(o.clientY-r.y)/70).clampLength(0,1):(this.yaw-=(o.clientX-r.lastX)*.007,this.pitch=Bn.clamp(this.pitch+(o.clientY-r.lastY)*.006,-.75,1.15)),r.lastX=o.clientX,r.lastY=o.clientY;return}this.dragging&&(this.yaw-=(o.clientX-this.lastX)*.005,this.pitch=Bn.clamp(this.pitch+(o.clientY-this.lastY)*.004,-.75,1.15),this.lastX=o.clientX,this.lastY=o.clientY)});const s=o=>{const r=this.fingers.get(o.pointerId);if(r){r.role==="move"&&this.moveVec.set(0,0),this.fingers.delete(o.pointerId);return}this.dragging=!1};window.addEventListener("pointerup",s),window.addEventListener("pointercancel",s),window.addEventListener("blur",()=>this.keys.clear())}get position(){return this.mesh.position}update(t,e){if(this.seated)return;const n=this.keys;let s=0,o=0;this.enabled&&((n.has("KeyW")||n.has("ArrowUp"))&&(o-=1),(n.has("KeyS")||n.has("ArrowDown"))&&(o+=1),(n.has("KeyA")||n.has("ArrowLeft"))&&(s-=1),(n.has("KeyD")||n.has("ArrowRight"))&&(s+=1),s+=this.moveVec.x,o+=this.moveVec.y);const r=Math.hypot(s,o),a=r>.05,c=new b(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),l=new b(c.z,0,-c.x),h=new b;a&&h.addScaledVector(c,-o/Math.max(1,r)).addScaledVector(l,-s/Math.max(1,r)).normalize();const u=h.clone().multiplyScalar(t2*Math.min(1,r));this.vel.lerp(u,1-Math.exp(-t*10));const d=this.mesh.position,p=d.z;d.x+=this.vel.x*t,d.z+=this.vel.z*t;const g=rw();if(g&&d.x>g.x0+.4&&d.x<g.x1-.4){const V=Math.abs(p-g.z)<1,Z=g.curve.getPoint(Math.min(1,Math.max(0,(d.x-g.x0)/(g.x1-g.x0)))).y;d.y<Z+1.1&&(V?d.z=Math.min(g.z+1-.3,Math.max(g.z-1+.3,d.z)):Math.abs(d.z-g.z)<1+.3&&(d.z=g.z+Math.sign(p-g.z||1)*(1+.3)))}const v=Math.hypot(d.x,d.z);v<1.25&&(d.x*=1.25/v,d.z*=1.25/v);const m=Math.hypot(d.x,d.z);m>41&&(d.x*=41/m,d.z*=41/m),VS(d);let f=Math.max(Ve(d.x,d.z),v<2.5?.23:-1/0);this.swimming=Ar(d.x,d.z)&&f<hn.y-.35,this.swimming&&(f=hn.y-.35+Math.sin(e*2.2)*.03);const x=aw(d.x,d.z);x!==null&&(d.y>x-.6||this.grounded&&!this.swimming)&&(f=Math.max(f,x),this.swimming=!1);const _=this.grounded?d.y:d.y+(this.vy-Kf*t)*t,y=GS(d.x,d.z,_,this.grounded,d.y);if(this.onPad=null,y&&y.top>f&&(f=y.top,this.swimming=!1,this.onPad=y),this.grounded?(this.onPad?d.y=f:d.y+=(f-d.y)*(1-Math.exp(-t*14)),d.y-f>.6&&(this.grounded=!1)):(this.vy-=Kf*t,d.y+=this.vy*t,d.y<=f&&this.vy<=0&&(d.y=f,this.grounded=!0,this.squash=1,ne.land(),this.landSplat(Math.min(1,-this.vy/6)),this.vy=0,this.onPad&&this.onPad.kind==="spring"&&(this.vy=7.6,this.grounded=!1,ne.jump()))),this.vel.lengthSq()>.05){let O=Math.atan2(this.vel.x,this.vel.z)-this.mesh.rotation.y;O=Math.atan2(Math.sin(O),Math.cos(O)),this.mesh.rotation.y+=O*Math.min(1,t*n2)}const T=this.vel.length();this.walkT+=t*T*3.4,this.squash=Math.max(0,this.squash-t*4);const w=Math.abs(Math.sin(this.walkT))*.06*Math.min(1,T/1.5),R=1-this.squash*.25+(this.grounded?0:.12),C=this.mesh.getObjectByName("body"),S=this.mesh.getObjectByName("head");C.scale.set(1/Math.sqrt(R),R,1/Math.sqrt(R)),C.position.y=w,S.position.y=.93*R+w+(this.grounded?0:.05);const M=Math.min(.25,T*.08);this.mesh.rotation.x=M;const P=this.mesh.getObjectByName("blob");P.position.y=-(d.y-f)+.01,P.material.opacity=Bn.clamp(1-(d.y-f)*.6,.2,1),this.tickSplat(t)}landSplat(t){const e=this.splat;e.t=0,e.strength=.5+t,e.origin.copy(this.mesh.position),e.ring.visible=!0,e.drops.visible=!0;for(const n of e.vel)n.set(Math.random()-.5,.8+Math.random()*.8,Math.random()-.5).normalize().multiplyScalar((1.5+Math.random()*1.5)*e.strength)}tickSplat(t){const e=this.splat;if(e.t>=.8)return;e.t+=t;const n=e.t/.8;e.ring.position.copy(e.origin),e.ring.position.y+=.02,e.ring.scale.setScalar((.4+n*2.2)*e.strength),e.ring.scale.z=.4,e.ring.material.opacity=.8*(1-n);const s=new Me;e.vel.forEach((o,r)=>{const a=e.t;s.position.copy(e.origin).addScaledVector(o,a),s.position.y+=-6*a*a,s.position.y<e.origin.y+.02&&(s.position.y=e.origin.y+.02),s.scale.setScalar(Math.max(.05,1-n*.8)),s.updateMatrix(),e.drops.setMatrixAt(r,s.matrix)}),e.drops.instanceMatrix.needsUpdate=!0,e.t>=.8&&(e.ring.visible=!1,e.drops.visible=!1)}cameraPose(t){const e=this.mesh.position,n=4.2;t.position.set(e.x+Math.sin(this.yaw)*n*Math.cos(this.pitch),e.y+1.4+Math.sin(this.pitch)*n,e.z+Math.cos(this.yaw)*n*Math.cos(this.pitch));const o=Math.max(Ve(t.position.x,t.position.z),Ar(t.position.x,t.position.z)?hn.y:-1/0)+.4;return t.position.y<o&&(t.position.y=o),t.target.set(e.x,e.y+1+Math.max(0,-this.pitch)*9,e.z),t}}const r2={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_SITE_URL:"https://stongeren.github.io/"},k0=r2&&"/"||"/",Jf={title:"desk on a hill",artist:"0xsurgeon",synth:!0};let Xe=[],kn=0,tn=!1,ts=.55,Rn=null,Co=!1;const $h=new Set;function ni(){for(const i of $h)i(Fe)}function Qf(i){return i==null?0:typeof i=="number"?i:String(i).split(":").map(Number).reduce((t,e)=>t*60+e,0)}function a2(i){const t=Array.isArray(i)?null:i.youtube||null,e=(Array.isArray(i)?i:i.tracks||[]).map(n=>({...n,youtube:n.youtube||t||null,start:Qf(n.start),end:n.end!=null?Qf(n.end):null})).filter(n=>n.youtube||n.file);return e.forEach((n,s)=>{const o=e[s+1];n.end==null&&o&&o.youtube===n.youtube&&o.start>n.start&&(n.end=o.start)}),e}const tp=i=>fetch(`${k0}music/${i}`).then(t=>t.ok?t.json():[]).then(a2).catch(()=>[]),yr={day:[],night:[]};let Ka=document.documentElement.classList.contains("night")?"night":"day";const Ua=Promise.all([tp("playlist.json"),tp("night-playlist.json")]).then(([i,t])=>{yr.day=i,yr.night=t.length?t:i,Xe=yr[Ka],kn=Xe.length?Math.floor(Math.random()*Xe.length):0,ni()});let ke=null,Na=null,Yh=null,vo=!1,ep=0,rc=null;function jh(){vo||(vo=!0,clearTimeout(rc),Co=!1,tn&&Rn==="yt"&&(z0(),Rn="synth",Kh()),ni())}function c2(){return Na||(Na=new Promise(i=>{const t=document.createElement("div");t.style.cssText="position:fixed;left:0;bottom:0;width:2px;height:2px;opacity:0.01;pointer-events:none;z-index:-1";const e=document.createElement("div");e.id="yt-music",t.appendChild(e),document.body.appendChild(t),window.onYouTubeIframeAPIReady=()=>{ke=new window.YT.Player("yt-music",{width:2,height:2,playerVars:{autoplay:0,controls:0,disablekb:1,playsinline:1,rel:0},events:{onReady:()=>i(ke),onStateChange:s=>{s.data===window.YT.PlayerState.PLAYING&&(Co=!1,ep=0,clearTimeout(rc)),s.data===window.YT.PlayerState.ENDED&&tn&&Rn==="yt"&&Fe.next(),ni()},onError:()=>{++ep>=3?jh():tn&&Fe.next()}}})};const n=document.createElement("script");n.src="https://www.youtube.com/iframe_api",n.onerror=jh,document.head.appendChild(n)}),Na)}async function l2(i){Co=!0,ni(),clearTimeout(rc),rc=setTimeout(()=>{tn&&Rn==="yt"&&Co&&jh()},15e3),await c2(),ke.setVolume(Math.round(ts*100)),ke.loadVideoById({videoId:i.youtube,startSeconds:i.start||0,endSeconds:i.end||void 0}),ke.playVideo(),clearInterval(Yh),Yh=setInterval(()=>{if(!ke||Rn!=="yt")return;const t=Xe[kn];if(tn&&t&&t.end&&ke.getCurrentTime()>=t.end-.25){Fe.next();return}ni()},500)}function z0(){clearInterval(Yh),Co=!1,ke&&ke.pauseVideo&&ke.pauseVideo()}let un=null;function h2(){if(!un)return;const i=un;un=null;const t=i.volume,e=performance.now(),n=()=>{const s=Math.min(1,(performance.now()-e)/900);i.volume=t*(1-s),s<1?requestAnimationFrame(n):i.pause()};n()}function u2(i){const t=new Audio(`${k0}music/${i.file}`);un=t,t.volume=0,t.addEventListener("ended",()=>{tn&&un===t&&Fe.next()}),t.addEventListener("error",()=>{tn&&un===t&&Fe.next()}),t.addEventListener("timeupdate",ni),t.play().catch(()=>{});const e=performance.now(),n=()=>{if(un!==t)return;const s=Math.min(1,(performance.now()-e)/1500);t.volume=ts*s,s<1&&tn&&requestAnimationFrame(n)};n()}let fe=null,on=null,Zh=null,ac=!1,ao=0,Fa=0;const d2=88,Il=60/d2,Dl=[[48,55,59,62,67,71],[45,52,55,60,64,71],[41,48,52,57,60,64],[43,50,55,59,62,64]],f2=[[72,76,79,83,86,83,79,76],[69,72,76,79,83,79,76,72],[65,69,72,76,81,76,72,69],[67,71,74,79,81,79,74,71]],cc=i=>440*Math.pow(2,(i-69)/12);function p2(i,t){const e=fe.sampleRate,n=e*i,s=fe.createBuffer(2,n,e);for(let o=0;o<2;o++){const r=s.getChannelData(o);for(let a=0;a<n;a++)r[a]=(Math.random()*2-1)*Math.pow(1-a/n,t)}return s}function m2(){fe=new(window.AudioContext||window.webkitAudioContext),on=fe.createGain(),on.gain.value=0;const i=fe.createConvolver();i.buffer=p2(3.2,2.6);const t=fe.createGain();t.gain.value=.42;const e=fe.createGain();e.gain.value=.8,on.connect(e).connect(fe.destination),on.connect(i).connect(t).connect(fe.destination)}function g2(i,t,e){const n=fe.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(600,t),n.frequency.linearRampToValueAtTime(1800,t+e*.5),n.frequency.linearRampToValueAtTime(700,t+e);const s=fe.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.05,t+1.2),s.gain.setValueAtTime(.05,t+e-1),s.gain.linearRampToValueAtTime(0,t+e+.4),n.connect(s).connect(on);for(const o of i)for(const r of[-7,6]){const a=fe.createOscillator();a.type="sawtooth",a.frequency.value=cc(o),a.detune.value=r,a.connect(n),a.start(t),a.stop(t+e+.5)}}function v2(i,t){const e=fe.createOscillator();e.type="triangle",e.frequency.value=cc(i);const n=fe.createOscillator();n.type="sine",n.frequency.value=cc(i)*2;const s=fe.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.07,t+.012),s.gain.exponentialRampToValueAtTime(8e-4,t+.9);const o=fe.createGain();o.gain.value=.25,e.connect(s),n.connect(o).connect(s),s.connect(on),e.start(t),n.start(t),e.stop(t+1),n.stop(t+1)}function x2(i,t,e){const n=fe.createOscillator();n.type="sine",n.frequency.value=cc(i-12);const s=fe.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.09,t+.05),s.gain.setValueAtTime(.09,t+e-.2),s.gain.linearRampToValueAtTime(0,t+e),n.connect(s).connect(on),n.start(t),n.stop(t+e+.1)}function np(){for(;ao<fe.currentTime+.4;){const i=Math.floor(Fa/8),t=Math.floor(i/2)%Dl.length,e=Fa%8;Fa%16===0&&(g2(Dl[t],ao,Il*8),x2(Dl[t][0],ao,Il*8)),i%4===3&&e>3||v2(f2[t][e],ao+(e%2?.015:0)),ao+=Il/2,Fa++}}function Kh(){fe||m2(),fe.state==="suspended"&&fe.resume(),ac=!0,ao=fe.currentTime+.1,on.gain.cancelScheduledValues(fe.currentTime),on.gain.setValueAtTime(on.gain.value,fe.currentTime),on.gain.linearRampToValueAtTime(ts*1.6,fe.currentTime+2),clearInterval(Zh),Zh=setInterval(np,120),np()}function _2(){ac&&(ac=!1,clearInterval(Zh),on.gain.cancelScheduledValues(fe.currentTime),on.gain.setValueAtTime(on.gain.value,fe.currentTime),on.gain.linearRampToValueAtTime(0,fe.currentTime+1.2))}function B0(){z0(),h2(),_2()}function Oa(i){if(B0(),!Xe.length){Rn="synth",Kh(),ni();return}kn=(i+Xe.length)%Xe.length;const t=Xe[kn];t.youtube&&vo?(Rn="synth",Kh()):t.youtube?(Rn="yt",l2(t)):(Rn="file",u2(t)),ni()}const Fe={get playing(){return tn},get loading(){return tn&&Co},get list(){return Xe.length&&!vo?Xe:[Jf]},get index(){return Xe.length&&!vo?kn:0},get track(){return Xe.length&&Rn!=="synth"?Xe[kn]:Jf},get blocked(){return vo},get time(){const i=this.track;return Rn==="yt"&&ke&&ke.getCurrentTime?Math.max(0,ke.getCurrentTime()-(i.start||0)):un?un.currentTime:0},get duration(){const i=this.track;return Rn==="yt"&&ke&&ke.getDuration?Math.max(0,(i.end||ke.getDuration())-(i.start||0)):un&&isFinite(un.duration)?un.duration:0},get volume(){return ts},set volume(i){ts=Math.max(0,Math.min(1,i)),ke&&ke.setVolume&&ke.setVolume(Math.round(ts*100)),un&&(un.volume=ts),ac&&on&&on.gain.setTargetAtTime(ts*1.6,fe.currentTime,.05),ni()},subscribe(i){return $h.add(i),i(this),()=>$h.delete(i)},get mode(){return Ka},async playId(i){await Ua;const t=Xe.findIndex(e=>e.youtube===i);return t<0?!1:(tn&&kn===t||(tn=!0,Oa(t)),!0)},async setMode(i){await Ua,!(i===Ka||!yr[i])&&(Ka=i,Xe=yr[i],kn=Xe.length?Math.floor(Math.random()*Xe.length):0,tn?Oa(kn):ni())},toggle(){return tn?this.stop():this.start(),tn},async start(){await Ua,tn=!0,Oa(kn)},async play(i){await Ua,tn=!0,Oa(i)},next(){Xe.length&&this.play(kn+1)},prev(){Xe.length&&this.play(kn-1)},seek(i){const t=this.track;Rn==="yt"&&ke?ke.seekTo((t.start||0)+i*this.duration,!0):un&&this.duration&&(un.currentTime=i*this.duration)},stop(){tn=!1,B0(),ni()}},y2={chain:'<svg viewBox="0 0 48 48"><defs><linearGradient id="gH" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe08a"/><stop offset="1" stop-color="#e09a12"/></linearGradient></defs><path d="M13 24h6M29 24h6" stroke="#fff" stroke-width="3" stroke-linecap="round"/><rect x="2" y="17" width="13" height="14" rx="3" fill="url(#gH)" stroke="#fff" stroke-opacity=".85" stroke-width="1.5"/><rect x="17.5" y="14" width="13" height="20" rx="3" fill="url(#gH)" stroke="#fff" stroke-opacity=".85" stroke-width="1.5"/><rect x="33" y="17" width="13" height="14" rx="3" fill="url(#gH)" stroke="#fff" stroke-opacity=".85" stroke-width="1.5"/><path d="M20 18h8M20 22h6" stroke="#fff" stroke-opacity=".8" stroke-width="2" stroke-linecap="round"/></svg>',about:'<svg viewBox="0 0 48 48"><defs><linearGradient id="gA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fd1ff"/><stop offset="1" stop-color="#1a6fd6"/></linearGradient></defs><circle cx="24" cy="24" r="21" fill="url(#gA)" stroke="#fff" stroke-opacity=".8" stroke-width="1.5"/><circle cx="24" cy="18" r="7" fill="#fff"/><path d="M10 38c2-8 8-11 14-11s12 3 14 11" fill="#fff"/><ellipse cx="24" cy="12" rx="14" ry="6" fill="#fff" opacity=".35"/></svg>',projects:'<svg viewBox="0 0 48 48"><defs><linearGradient id="gP" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe08a"/><stop offset="1" stop-color="#e59a1c"/></linearGradient></defs><path d="M5 12h14l4 4h20v22a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" fill="url(#gP)" stroke="#fff" stroke-opacity=".8" stroke-width="1.5"/><path d="M5 20h38v4H5z" fill="#fff" opacity=".35"/></svg>',trace:'<svg viewBox="0 0 48 48"><defs><linearGradient id="gQ" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#cfe3f7"/></linearGradient><linearGradient id="gR" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd27a"/><stop offset="1" stop-color="#e8890c"/></linearGradient></defs><path d="M8 4h20l10 10v30H8z" fill="url(#gQ)" stroke="#6f9ac8" stroke-width="1.5"/><path d="M28 4v10h10" fill="#a9c8ea"/><circle cx="15" cy="22" r="3" fill="#7d55d6"/><circle cx="27" cy="28" r="3" fill="#2f6fd8"/><circle cx="17" cy="36" r="3" fill="#e8890c"/><path d="M15 22l12 6-10 8" stroke="#6f9ac8" stroke-width="1.5" fill="none"/><circle cx="33" cy="35" r="7" fill="url(#gR)" stroke="#fff" stroke-width="1.5"/><path d="M37.5 39.5l5 5" stroke="#8a5300" stroke-width="3" stroke-linecap="round"/></svg>',writeups:'<svg viewBox="0 0 48 48"><defs><linearGradient id="gW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#cfe3f7"/></linearGradient></defs><path d="M10 4h20l10 10v30H10z" fill="url(#gW)" stroke="#6f9ac8" stroke-width="1.5"/><path d="M30 4v10h10" fill="#a9c8ea"/><path d="M15 22h18M15 28h18M15 34h12" stroke="#2f6fb5" stroke-width="2.2" stroke-linecap="round"/></svg>',terminal:'<svg viewBox="0 0 48 48"><defs><linearGradient id="gT" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a5260"/><stop offset="1" stop-color="#15181e"/></linearGradient></defs><rect x="4" y="8" width="40" height="32" rx="4" fill="url(#gT)" stroke="#fff" stroke-opacity=".6" stroke-width="1.5"/><path d="M11 17l7 6-7 6" stroke="#7CFF8A" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 30h12" stroke="#7CFF8A" stroke-width="3" stroke-linecap="round"/></svg>',contact:'<svg viewBox="0 0 48 48"><defs><linearGradient id="gC" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b9f0a3"/><stop offset="1" stop-color="#3aa832"/></linearGradient></defs><rect x="4" y="10" width="40" height="28" rx="4" fill="url(#gC)" stroke="#fff" stroke-opacity=".8" stroke-width="1.5"/><path d="M6 13l18 13 18-13" fill="none" stroke="#fff" stroke-width="2.5" stroke-linejoin="round"/></svg>',experience:'<svg viewBox="0 0 48 48"><defs><linearGradient id="gE" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c9a27a"/><stop offset="1" stop-color="#7a4f2a"/></linearGradient></defs><rect x="4" y="14" width="40" height="26" rx="4" fill="url(#gE)" stroke="#fff" stroke-opacity=".7" stroke-width="1.5"/><path d="M17 14v-4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4" fill="none" stroke="#fff" stroke-width="2.5"/><path d="M4 24h40" stroke="#fff" stroke-opacity=".5" stroke-width="2"/><rect x="20" y="21" width="8" height="6" rx="1.5" fill="#fff"/></svg>',skills:'<svg viewBox="0 0 48 48"><defs><linearGradient id="gK" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b9f0a3"/><stop offset="1" stop-color="#2f9a2c"/></linearGradient></defs><path d="M24 4l17 6v12c0 11-7 18-17 22C14 40 7 33 7 22V10z" fill="url(#gK)" stroke="#fff" stroke-opacity=".85" stroke-width="1.5"/><path d="M16 24l6 6 11-12" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="24" cy="12" rx="12" ry="4" fill="#fff" opacity=".35"/></svg>',passion:'<svg viewBox="0 0 48 48"><defs><linearGradient id="gB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fd1ff"/><stop offset="1" stop-color="#1a4fb6"/></linearGradient></defs><rect x="6" y="6" width="15" height="15" rx="3" fill="url(#gB)" stroke="#fff" stroke-opacity=".8" stroke-width="1.5"/><rect x="27" y="6" width="15" height="15" rx="3" fill="url(#gB)" stroke="#fff" stroke-opacity=".8" stroke-width="1.5"/><rect x="6" y="27" width="15" height="15" rx="3" fill="url(#gB)" stroke="#fff" stroke-opacity=".8" stroke-width="1.5"/><rect x="27" y="27" width="15" height="15" rx="3" fill="#ff9a3c" stroke="#fff" stroke-opacity=".8" stroke-width="1.5"/><path d="M21 13h6M13 21v6M34 21v6M21 34h6" stroke="#fff" stroke-width="2.5"/></svg>',secrets:'<svg viewBox="0 0 48 48"><defs><radialGradient id="gS" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#e8fbff"/><stop offset=".6" stop-color="#5fb3ff"/><stop offset="1" stop-color="#1a5fc8"/></radialGradient></defs><circle cx="20" cy="20" r="14" fill="url(#gS)" stroke="#fff" stroke-width="2"/><path d="M30 30l12 12" stroke="#9aa3b0" stroke-width="6" stroke-linecap="round"/><path d="M30 30l12 12" stroke="#eef3f8" stroke-width="3" stroke-linecap="round"/><ellipse cx="16" cy="14" rx="6" ry="3.5" fill="#fff" opacity=".7"/></svg>',inbox:'<svg viewBox="0 0 48 48"><defs><linearGradient id="gI" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd38a"/><stop offset="1" stop-color="#ff8c2a"/></linearGradient></defs><rect x="4" y="10" width="40" height="28" rx="4" fill="url(#gI)" stroke="#fff" stroke-opacity=".85" stroke-width="1.5"/><path d="M6 13l18 13 18-13" fill="none" stroke="#fff" stroke-width="2.5" stroke-linejoin="round"/><path d="M26 2l3 7h7l-6 4 2 7-6-4-6 4 2-7-6-4h7z" fill="#fff3b0" stroke="#e0a020" stroke-width="1" transform="translate(10 -1) scale(.55)"/></svg>',player:'<svg viewBox="0 0 48 48"><defs><radialGradient id="gM" cx="50%" cy="35%" r="65%"><stop offset="0" stop-color="#9fdcff"/><stop offset="0.6" stop-color="#2a86ea"/><stop offset="1" stop-color="#0b3f9c"/></radialGradient></defs><circle cx="24" cy="24" r="21" fill="url(#gM)" stroke="#fff" stroke-opacity=".8" stroke-width="1.5"/><path d="M19 15l14 9-14 9z" fill="#fff"/><ellipse cx="24" cy="13" rx="13" ry="6" fill="#fff" opacity=".35"/></svg>',leave:'<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" fill="#e9eef5" stroke="#9fb3c8" stroke-width="1.5"/><path d="M28 14l-10 10 10 10" fill="none" stroke="#2f6fb5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>'};let M2=0;function On(i){const t=++M2;return y2[i].replace(/id="(g[A-Z])"/g,(e,n)=>`id="${n}${t}"`).replace(/url\(#(g[A-Z])\)/g,(e,n)=>`url(#${n}${t})`)}const ip='<svg class="logo-orb" viewBox="0 0 64 64"><defs><radialGradient id="lgA" cx="50%" cy="38%" r="60%"><stop offset="0" stop-color="#9fdcff"/><stop offset="0.55" stop-color="#2a86ea"/><stop offset="1" stop-color="#0b3f9c"/></radialGradient><linearGradient id="lgB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0.95"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><circle cx="32" cy="32" r="30" fill="url(#lgA)"/><ellipse cx="32" cy="20" rx="20" ry="11" fill="url(#lgB)"/><text x="32" y="43" text-anchor="middle" font-family="Silkscreen, monospace" font-size="24" fill="#fff">0x</text></svg>',sp='<svg class="nl-flag" viewBox="0 0 9 6" aria-label="Dutch flag"><rect width="9" height="2" fill="#ae1c28"/><rect y="2" width="9" height="2" fill="#fff"/><rect y="4" width="9" height="2" fill="#21468b"/></svg>',ka={about:{title:"About me",w:860,h:640},experience:{title:"Experience",w:1040,h:690},projects:{title:"Projects",w:780,h:540},skills:{title:"Skills",w:820,h:690},passion:{title:"Passion",w:680,h:560},chain:{title:"Chain Watch",w:980,h:640},writeups:{title:"Writeups",w:580,h:480},terminal:{title:"Command Prompt",w:640,h:400},player:{title:"Media Player",w:540,h:720},secrets:{title:"Secrets",w:560,h:700},inbox:{title:"Phish or Not",w:700,h:560},contact:{title:"Contact",w:480,h:330}};function Ue(i){const t=document.createElement("template");return t.innerHTML=i.trim(),t.content.firstElementChild}function ji(i){return i.replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t])}function w2({onExit:i}){const t=Ue(`<div class="os">
    <div class="boot"><pre class="boot-log"></pre></div>
    <div class="login hidden">
      <div class="login-top"></div>
      <div class="login-main">
        <div class="login-left">
          <div class="logo">${ip}<span class="logo-word">surgeon<b>OS</b></span></div>
          <div class="login-msg">To begin, click your user name</div>
        </div>
        <div class="login-divider"></div>
        <div class="login-right">
          <div class="login-title">Welcome</div>
          <button class="login-user">
            <span class="login-avatar">${On("about")}</span>
            <span class="login-name">${Vn.handle}<small>${Vn.title}</small></span>
          </button>
        </div>
      </div>
      <div class="login-bottom"><span class="login-off">${On("leave")}<i>Leave desk</i></span><span class="login-tip">After you log on, you can look through my projects, read about me and poke at the terminal.</span></div>
    </div>
    <div class="desktop hidden">
      <div class="wallpaper"><div class="wp-sun"></div><div class="wp-hill"></div><div class="wp-b b1"></div><div class="wp-b b2"></div><div class="wp-b b3"></div></div>
      <div class="icons"></div>
      <div class="windows"></div>
      <div class="startmenu hidden">
        <div class="sm-user">${On("about")}<div><b>${Vn.handle}</b><small>${Vn.title}</small></div></div>
        <div class="sm-list"></div>
        <div class="sm-foot"><button class="sm-leave">${On("leave")}<span>Leave desk</span></button></div>
      </div>
      <div class="taskbar">
        <button class="start"><span>0x</span></button>
        <div class="tasks"></div>
        <div class="tray"><span class="lang" title="Dutch, based in the Netherlands">${sp}NL</span><span class="clock">00:00</span></div>
      </div>
    </div>
  </div>`),e=t.querySelector(".boot"),n=t.querySelector(".login"),s=t.querySelector(".desktop"),o=t.querySelector(".icons"),r=t.querySelector(".windows"),a=t.querySelector(".tasks"),c=t.querySelector(".startmenu"),l=t.querySelector(".sm-list");let h=!1,u="off",d=10;const p=new Map;{const U=ko.articles[0],k=Ue(`<a class="icon icon-new" href="${U.url}" target="_blank" rel="noopener"><span class="icon-img">${On("trace")}</span><span class="icon-label">Ansem trace</span><span class="icon-badge">new</span></a>`);k.addEventListener("click",()=>ne.click()),o.appendChild(k);const N=Ue(`<a class="sm-item" href="${U.url}" target="_blank" rel="noopener">${On("trace")}<span>Ansem trace (new)</span></a>`);l.appendChild(N)}const g=["about","experience","projects","skills","chain","passion","writeups","player","inbox","secrets","terminal","contact"];for(const U of g){const k=Ue(`<button class="icon" data-app="${U}"><span class="icon-img">${On(U)}</span><span class="icon-label">${ka[U].title}</span></button>`);k.addEventListener("click",()=>{o.querySelectorAll(".icon").forEach(G=>G.classList.remove("sel")),k.classList.add("sel"),f(U)}),o.appendChild(k);const N=Ue(`<button class="sm-item">${On(U)}<span>${ka[U].title}</span></button>`);N.addEventListener("click",()=>{v(!1),f(U)}),l.appendChild(N)}t.querySelector(".start").addEventListener("click",()=>{ne.click(),v()}),t.querySelector(".sm-leave").addEventListener("click",()=>{v(!1),i()}),t.querySelector(".login-off").addEventListener("click",()=>i()),s.addEventListener("pointerdown",U=>{!U.target.closest(".startmenu")&&!U.target.closest(".start")&&v(!1),U.target.closest(".icon")||o.querySelectorAll(".icon").forEach(k=>k.classList.remove("sel"))});function v(U){const k=U===void 0?c.classList.contains("hidden"):U;c.classList.toggle("hidden",!k)}function m(){const U=new Date;t.querySelector(".clock").textContent=`${String(U.getHours()).padStart(2,"0")}:${String(U.getMinutes()).padStart(2,"0")}`}m(),setInterval(m,1e4);function f(U){if(p.has(U)){const W=p.get(U);W.el.classList.remove("min"),_(W);return}const k=ka[U],N=p.size,G={id:U,el:Ue(`<div class="win" style="width:${k.w}px;height:${k.h}px;left:${120+N*36}px;top:${24+N*26}px">
      <div class="titlebar"><span class="t-icon">${On(U)}</span><span class="t-title">${k.title}</span>
        <span class="t-btns"><button class="t-min" title="Minimize"><i></i></button><button class="t-max" title="Maximize"><i></i></button><button class="t-close" title="Close"><i></i></button></span></div>
      <div class="content"></div></div>`)};G.el.querySelector(".content").appendChild(w(U,G)),G.el.querySelector(".t-close").addEventListener("click",()=>x(U)),G.el.querySelector(".t-min").addEventListener("click",()=>{G.el.classList.add("min"),ne.click()}),G.el.querySelector(".t-max").addEventListener("click",()=>{G.el.classList.toggle("max"),ne.click()}),G.el.addEventListener("pointerdown",()=>_(G)),y(G),r.appendChild(G.el),G.task=Ue(`<button class="task">${On(U)}<span>${k.title}</span></button>`),G.task.addEventListener("click",()=>{G.el.classList.contains("min")?(G.el.classList.remove("min"),_(G)):G.el.classList.contains("active")?G.el.classList.add("min"):_(G)}),a.appendChild(G.task),p.set(U,G),_(G),ne.open(),requestAnimationFrame(()=>G.el.classList.add("in")),U==="terminal"&&setTimeout(()=>{var W;return(W=G.el.querySelector(".term-in"))==null?void 0:W.focus({preventScroll:!0})},50)}function x(U){const k=p.get(U);k&&(k.el.classList.remove("in"),k.onClose&&k.onClose(),setTimeout(()=>{k.el.remove(),k.task.remove()},160),p.delete(U),ne.close())}function _(U){U.el.style.zIndex=++d,p.forEach(k=>{k.el.classList.toggle("active",k===U),k.task.classList.toggle("active",k===U)})}function y(U){const k=U.el.querySelector(".titlebar");let N,G,W,Q,et=!1;k.addEventListener("pointerdown",ht=>{ht.target.closest("button")||U.el.classList.contains("max")||(et=!0,N=ht.clientX,G=ht.clientY,W=U.el.offsetLeft,Q=U.el.offsetTop,k.setPointerCapture(ht.pointerId))}),k.addEventListener("pointermove",ht=>{if(!et)return;const $=T();U.el.style.left=`${W+(ht.clientX-N)/$}px`,U.el.style.top=`${Math.max(0,Q+(ht.clientY-G)/$)}px`}),k.addEventListener("pointerup",()=>{et=!1}),k.addEventListener("dblclick",()=>U.el.classList.toggle("max"))}function T(){return t.getBoundingClientRect().width/1280||1}function w(U,k){if(U==="about")return Ue(`<div class="pane about">
      <div class="about-head">${On("about")}<div><h1>${Vn.name}</h1><p>${Vn.title}</p></div></div>
      <div class="status-card"><div><span>Looking for</span><b>${Vr.looking}</b></div><div><span>Focus</span><b>${Vr.focus}</b></div><div><span>Where</span><b class="where">${sp}${Vr.where}</b></div><div class="latest-win"><span>Latest win</span><b>${Vr.latest}</b></div></div>
      ${hm.map(N=>`<p>${N}</p>`).join("")}
      <div class="about-foot">${ju.map(N=>`<a href="${N.url}" target="_blank" rel="noopener">${N.label}</a>`).join("")}</div>
    </div>`);if(U==="experience")return Ue(`<div class="pane experience">
      <h1>Where I have been</h1>
      <div class="award"><img src="/${zo.photo}" alt="${zo.alt}"><div><span class="award-tag">Award</span><b>${zo.title}</b><span>${zo.where}</span><p>${zo.note}</p></div></div>
      <div class="timeline">${um.map(N=>`<div class="tl-item"><div class="tl-when">${N.when}</div><div class="tl-body"><b>${N.what}</b><span>${N.where}</span><p>${N.note}</p></div></div>`).join("")}</div>
    </div>`);if(U==="skills")return Ue(`<div class="pane skills">
      <h1>What I work with</h1>
      <div class="skill-grid">${dm.map(N=>`<div class="skill-group"><b>${N.group}</b><ul>${N.items.map(G=>`<li>${ji(G)}</li>`).join("")}</ul></div>`).join("")}</div>
      <div class="labs"><b>${Ic.platform}</b>${Ic.facts.map(N=>`<span>${N}</span>`).join("")}<a class="btn" href="${Ic.url}" target="_blank" rel="noopener">Open profile</a></div>
    </div>`);if(U==="passion")return Ue(`<div class="pane passion">
      <h1>What keeps me up</h1>
      <div class="cards">${fm.map(N=>`<div class="card"><b>${N.title}</b><p>${N.text}</p></div>`).join("")}</div>
    </div>`);if(U==="projects"){const N=Ue('<div class="pane projects"><div class="p-list"></div><div class="p-detail"></div></div>'),G=N.querySelector(".p-list"),W=N.querySelector(".p-detail"),Q=et=>{G.querySelectorAll(".p-item").forEach(ht=>ht.classList.toggle("sel",ht.dataset.id===et.id)),W.innerHTML=`<h1>${et.name}</h1><div class="p-meta"><span>${et.tag}</span><span>${et.year}</span><span class="p-status">${et.status}</span></div>
          ${et.body.map(ht=>`<p>${ht}</p>`).join("")}
          <div class="p-stack">${et.stack}</div>
          ${et.url?`<a class="btn" href="${et.url}" target="_blank" rel="noopener">${et.urlLabel||"Open on GitHub"}</a>`:""}`};for(const et of Dc){const ht=Ue(`<button class="p-item" data-id="${et.id}">${On("projects")}<span><b>${et.name}</b><small>${et.short}</small></span></button>`);ht.addEventListener("click",()=>{ne.click(),Q(et)}),G.appendChild(ht)}return Q(Dc[0]),N}return U==="writeups"?Ue(`<div class="pane writeups">
      <h1>Investigations</h1>
      ${ko.articles.map(N=>`<a class="article" href="${N.url}" target="_blank" rel="noopener"><span class="a-date">${N.date}</span><b>${N.title}</b><span class="a-sum">${N.summary}</span><span class="a-go">Read the write-up</span></a>`).join("")}
      <h1>Road to crypto security</h1><p>${ko.intro}</p>
      <ol>${ko.episodes.map(N=>`<li>${N}</li>`).join("")}</ol>
      <p class="note">${ko.note}</p>
    </div>`):U==="contact"?Ue(`<div class="pane contact">
      <p>No form, no inbox to leak. Find me here:</p>
      <div class="c-links">${ju.map(N=>`<a href="${N.url}" target="_blank" rel="noopener"><b>${N.label}</b><span>${N.text}</span></a>`).join("")}</div>
    </div>`):U==="terminal"?P():U==="player"?R(k):U==="chain"?C():U==="secrets"?S(k):U==="inbox"?M():Ue('<div class="pane"></div>')}function R(U){const k=Ue(`<div class="pane mp">
      <div class="mp-top">
        <div class="mp-art">${ip}</div>
        <div class="mp-now"><div class="mp-title">-</div><div class="mp-artist">-</div>
          <div class="mp-bar"><div class="mp-fill"></div></div>
          <div class="mp-time"><span class="mp-cur">0:00</span><span class="mp-dur">0:00</span></div>
        </div>
      </div>
      <div class="mp-ctl">
        <button class="mp-prev" title="Previous"><svg viewBox="0 0 24 24"><path d="M6 5h2v14H6zM20 5l-11 7 11 7z"/></svg></button>
        <button class="mp-play" title="Play"><svg class="i-play" viewBox="0 0 24 24"><path d="M7 4l14 8-14 8z"/></svg><svg class="i-pause" viewBox="0 0 24 24"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg></button>
        <button class="mp-next" title="Next"><svg viewBox="0 0 24 24"><path d="M16 5h2v14h-2zM4 5l11 7-11 7z"/></svg></button>
        <div class="mp-vol"><svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 8a5 5 0 0 1 0 8" fill="none" stroke="currentColor" stroke-width="2"/></svg><input class="mp-volume" type="range" min="0" max="100" value="${Math.round(Fe.volume*100)}" /></div>
      </div>
      <ol class="mp-list"></ol>
    </div>`),N=et=>`${Math.floor(et/60)}:${String(Math.floor(et%60)).padStart(2,"0")}`,G=k.querySelector(".mp-list"),W=et=>{const ht=et.track;k.querySelector(".mp-title").textContent=ht.title;const $=k.querySelector(".mp-art"),q=ht.youtube?`https://i.ytimg.com/vi/${ht.youtube}/hqdefault.jpg`:"";$.dataset.thumb!==q&&($.dataset.thumb=q,$.style.backgroundImage=q?`url(${q})`:"",$.classList.toggle("has-art",!!q)),k.querySelector(".mp-artist").textContent=ht.artist,k.querySelector(".mp-fill").style.width=`${et.duration?et.time/et.duration*100:et.playing&&ht.synth?100:0}%`,k.querySelector(".mp-cur").textContent=N(et.time),k.querySelector(".mp-dur").textContent=et.duration?N(et.duration):ht.synth?"live":"0:00",k.classList.toggle("playing",et.playing),G.children.length!==et.list.length&&(G.innerHTML="",et.list.forEach((at,tt)=>{const vt=Ue(`<li><span class="mp-n">${String(tt+1).padStart(2,"0")}</span><span class="mp-t">${ji(at.title)}</span><span class="mp-a">${ji(at.artist)}</span></li>`);vt.addEventListener("click",()=>{ne.click(),Fe.play(tt)}),G.appendChild(vt)})),[...G.children].forEach((at,tt)=>at.classList.toggle("on",tt===et.index&&et.playing))},Q=Fe.subscribe(W);return U.onClose=Q,k.querySelector(".mp-play").addEventListener("click",()=>{ne.click(),Fe.toggle()}),k.querySelector(".mp-prev").addEventListener("click",()=>{ne.click(),Fe.prev()}),k.querySelector(".mp-next").addEventListener("click",()=>{ne.click(),Fe.next()}),k.querySelector(".mp-bar").addEventListener("click",et=>{const ht=et.currentTarget.getBoundingClientRect();Fe.seek((et.clientX-ht.left)/ht.width)}),k.querySelector(".mp-volume").addEventListener("input",et=>{Fe.volume=et.target.value/100}),k}function C(){const U=Bo.filter(W=>W.start==="person").length,k=Ue(`<div class="pane chain">
      <h1>Chain Watch</h1>
      <p class="note">The biggest crypto hacks, one block each. Pick a block: how it started, and where I would have looked for it in the logs.</p>
      <div class="chain-row">${Bo.map((W,Q)=>`${Q?'<span class="chain-link"></span>':""}<button class="block ${W.start}" data-i="${Q}"><span class="b-year">${W.date.slice(-4)}</span><b>${W.name}</b><span class="b-amt">${W.amount}</span></button>`).join("")}</div>
      <div class="chain-detail"></div>
      <p class="chain-foot"><b>${U} of ${Bo.length} started with a person, not a bug.</b> That is why I want to work on detection, not only on code. Amounts: rekt.news leaderboard; Coinbase: its own filing.</p>
    </div>`),N=k.querySelector(".chain-detail"),G=W=>{const Q=Bo[W];k.querySelectorAll(".block").forEach(et=>et.classList.toggle("sel",+et.dataset.i===W)),N.innerHTML=`<div class="cd-head"><h2>${Q.name}</h2><span>${Q.date}</span><span>${Q.amount}</span><span class="cd-start ${Q.start}">Started with ${Q.start==="person"?"a person":"a bug"}: ${Q.how.toLowerCase()}</span></div>
        <div class="cd-cols"><div><b>What happened</b><p>${Q.story}</p></div><div class="cd-look"><b>Where I would look</b><p>${Q.look}</p></div></div>`,ne.click&&ne.click()};return k.querySelectorAll(".block").forEach(W=>W.addEventListener("click",()=>G(+W.dataset.i))),G(Bo.length-1),k}function S(U){const k=Ue('<div class="pane secrets"><h1>Secrets</h1><p class="note">Ten things are hidden in the city. Walk onto the bridge, look through the telescope (E) and hold one in the middle of the lens.</p><ol class="sec-list"></ol><h1 class="ctf-h">Flags</h1><p class="note">Three flags hide on this computer. Open the terminal and type <b>cat challenges.txt</b>.</p><ol class="flag-list"></ol><h1 class="ctf-h">Easter eggs</h1><p class="note">Two small nods to two favourite series. They are out in the world, not on this computer.</p><ol class="egg-list"></ol></div>'),N=()=>{const G=Ec();k.querySelector(".sec-list").innerHTML=Ni.map((et,ht)=>`<li class="${G.has(ht)?"got":""}">${G.has(ht)?et:"? ? ?"}</li>`).join("");const W=hS();k.querySelector(".flag-list").innerHTML=["The hidden note","The brute force that worked","The poisoned address"].map((et,ht)=>`<li class="${W.has(ht)?"got":""}">${W.has(ht)?et:"? ? ?"}</li>`).join("");const Q=P0();k.querySelector(".egg-list").innerHTML=aS.map((et,ht)=>`<li class="${Q.has(ht)?"got":""}">${Q.has(ht)?et:"? ? ? <small>"+cS[ht]+"</small>"}</li>`).join("")};return N(),U.onClose=oS(N),k}function M(U){const k=Ue('<div class="pane inbox"></div>');let N=[],G=0,W=0;const Q=()=>{N=Of.map((ht,$)=>$).sort(()=>Math.random()-.5),G=0,W=0,et()},et=()=>{if(G>=N.length){dS(W),k.innerHTML=`<div class="ib-end"><h1>${W} out of ${N.length}</h1><p>${W===N.length?"Clean sweep. You would make a good L1.":W>=N.length-2?"Solid. The ones you missed are the ones that work on busy people.":"Phishing works because it is good at it. Read the tells and try again."}</p><p class="note">Best so far: ${I0()} / ${N.length}</p><button class="btn ib-again">Play again</button></div>`,k.querySelector(".ib-again").addEventListener("click",()=>{ne.click(),Q()});return}const ht=Of[N[G]];k.innerHTML=`<div class="ib-top"><span>Mail ${G+1} of ${N.length}</span><span>Score ${W}</span></div>
        <div class="ib-mail"><div class="ib-from"><b>${ji(ht.from)}</b> &lt;${ji(ht.addr)}&gt;</div><div class="ib-subj">${ji(ht.subject)}</div><div class="ib-body">${ji(ht.body).replace(/\n/g,"<br>")}</div></div>
        <div class="ib-actions"><button class="btn ib-phish">Report phish</button><button class="btn ib-legit">Looks legit</button></div>
        <div class="ib-verdict hidden"></div>`;const $=q=>{const at=q===ht.phish;at?(W++,ne.open()):ne.error();const tt=k.querySelector(".ib-verdict");tt.classList.remove("hidden"),tt.classList.toggle("right",at),tt.innerHTML=`<b>${at?"Right":"Not this time"}: ${ht.phish?"phishing":"legitimate"}.</b> ${ji(ht.tell)} <button class="btn ib-next">Next</button>`,k.querySelectorAll(".ib-actions button").forEach(vt=>{vt.disabled=!0}),tt.querySelector(".ib-next").addEventListener("click",()=>{ne.click(),G++,et()})};k.querySelector(".ib-phish").addEventListener("click",()=>$(!0)),k.querySelector(".ib-legit").addEventListener("click",()=>$(!1))};return Q(),k}function P(U){const k=Ue(`<div class="pane term"><div class="term-out"></div><div class="term-line"><span class="term-ps">C:\\Users\\${Vn.handle}&gt;</span><input class="term-in" spellcheck="false" autocomplete="off" /></div></div>`),N=k.querySelector(".term-out"),G=k.querySelector(".term-in"),W=(q,at="")=>{const tt=document.createElement("div");tt.className=at,tt.textContent=q,N.appendChild(tt),N.scrollTop=N.scrollHeight};W("SURGEON OS [Version 1.0.2007]"),W("(c) 0xsurgeon. Type help."),W("");const Q={help:()=>["help        this list","whoami      who is behind this desk","projects    list projects","open <app>  about | experience | projects | skills | chain | passion | writeups | player | contact","hire        why you should","ls [-a]     list files","cat <file>  read a file","grep, sort, uniq -c, wc -l, head, awk, base64 -d  and pipes","submit <flag>  hand in a CTF flag (cat challenges.txt)","neofetch    system info","clear       clear screen","exit        leave the desk"].forEach(q=>W(q)),whoami:()=>W(`${Vn.handle} - ${Vn.name}, ${Vn.title}`),projects:()=>Dc.forEach(q=>W(`${q.name.padEnd(26)} ${q.tag.padEnd(24)} ${q.status}`)),submit:q=>{const at=uS(q);at.ok?W(at.fresh?`correct: ${at.name}. ${at.count}/${at.total} flags.`:`already have that one. ${at.count}/${at.total} flags.`):(ne.error(),W("wrong flag. keep digging.","err"))},open:q=>ka[q]?f(q):W(`open: unknown app "${q||""}"`,"err"),hire:()=>Zu["hire.txt"].split(`
`).forEach(q=>W(q)),uname:()=>W("Linux desk 6.12.4-surgeon #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux"),dmesg:()=>Uc.forEach((q,at)=>W(`[${(at*.137).toFixed(6).padStart(12)}] ${q}`)),clear:()=>{N.innerHTML=""},neofetch:()=>["      ____        OS: SURGEON OS 1.0 (Aero edition)","     / __ \\__  __ Host: desk on a hill","    / / / / |/_/ Shell: cmd","   / /_/ />  <   Resolution: 1280x800","   \\____/_/|_|   Uptime: since you sat down","                 Theme: blue sky, glass, bubbles"].forEach(q=>W(q)),exit:()=>i(),leave:()=>i(),sudo:()=>{ne.error(),W("nice try.","err")}},et={...Zu,...lS},ht=q=>et[q]??Nf[q]??null,$={ls:q=>[...Object.keys(et),...q.includes("-a")?Object.keys(Nf):[]].sort(),cat:(q,at)=>{if(!q.length)return at;const tt=ht(q[0]);if(tt==null)throw new Error(`cat: ${q[0]}: no such file`);return tt.split(`
`)},grep:(q,at)=>{const tt=q[0]==="-v",vt=tt?q.slice(1):q,At=(vt[0]||"").toLowerCase();return(vt[1]?(ht(vt[1])??"").split(`
`):at).filter(Yt=>Yt.toLowerCase().includes(At)!==tt)},sort:(q,at)=>[...at].sort(),uniq:(q,at)=>{const tt=[];for(const vt of at){const At=tt[tt.length-1];At&&At.l===vt?At.n++:tt.push({l:vt,n:1})}return tt.map(vt=>q.includes("-c")?`${String(vt.n).padStart(4)} ${vt.l}`:vt.l)},wc:(q,at)=>[String(at.length)],head:(q,at)=>at.slice(0,Number(q[1]||10)),base64:(q,at)=>{if(!q.includes("-d"))throw new Error("base64: only -d is supported here");const tt=q.filter(vt=>vt!=="-d").join("")||at.join("");try{return[atob(tt.trim())]}catch{throw new Error("base64: invalid input")}},awk:(q,at)=>{const tt=/^'?\{print \$(\d+)\}'?$/.exec(q.join(" "));if(!tt)throw new Error("awk: only '{print $N}' is supported here");const vt=Number(tt[1]);return at.map(At=>At.trim().split(/\s+/)[vt-1]||"")}};return G.addEventListener("keydown",q=>{if(q.stopPropagation(),q.key==="Escape"){i();return}if(q.key!=="Enter"){ne.key();return}const at=G.value.trim();if(G.value="",W(`C:\\Users\\${Vn.handle}>${at}`,"echo"),!at)return;const tt=at.split("|").map(At=>At.trim().split(/\s+/)),vt=tt[0][0].toLowerCase();if(tt.length===1&&Q[vt]){Q[vt](tt[0].slice(1).join(" ")),W("");return}try{let At=[];for(const[It,...Yt]of tt){const ot=$[It.toLowerCase()];if(!ot)throw new Error(`'${It}' is not recognized as an internal or external command.`);At=ot(Yt,At)}At.forEach(It=>W(It))}catch(At){ne.error(),W(At.message,"err")}W("")}),k.addEventListener("click",()=>G.focus({preventScroll:!0})),k}function F(){u="login",e.classList.add("hidden"),n.classList.remove("hidden")}function O(){u!=="login"&&n.classList.contains("hidden")||u!=="desktop"&&(u="desktop",ne.startup(),s.classList.remove("hidden"),requestAnimationFrame(()=>{s.classList.add("in"),n.classList.add("out")}),setTimeout(()=>n.classList.add("hidden"),650))}t.querySelector(".login-user").addEventListener("click",O),window.addEventListener("keydown",U=>{h&&u==="login"&&U.code!=="Escape"&&O()});function V(){const U=t.querySelector(".boot-log");U.textContent="";let k=0,N=0;const G=Q=>{U.textContent+=Q+`
`,e.scrollTop=e.scrollHeight},W=()=>{if(k<Uc.length){N+=.02+Math.random()*.09,G(`[${N.toFixed(6).padStart(12)}] ${Uc[k++]}`),setTimeout(W,18+Math.random()*55+(k===12||k===24?260:0));return}setTimeout(()=>G(`
Arch Linux 6.12.4-surgeon (tty1)
`),300),setTimeout(()=>G("desk login: "),700),Z(U,"surgeon",1e3,()=>{G(""),setTimeout(()=>G("Password: "),300),setTimeout(()=>G(""),900),setTimeout(()=>G("Last login: Sun Jul 22 09:41:07 2007 on tty1"),1100),setTimeout(()=>G("[surgeon@desk ~]$ "),1500),Z(U,"startx",1900,()=>{G(""),setTimeout(F,500)})})};W()}function Z(U,k,N,G){let W=0;setTimeout(function Q(){U.textContent+=k[W++],e.scrollTop=e.scrollHeight,W<k.length?setTimeout(Q,60+Math.random()*90):G()},N)}return{element:t,boot(){u="boot",e.classList.remove("hidden"),V()},resume(){F()},focus(){h=!0,t.classList.add("focused")},blur(){h=!1,t.classList.remove("focused"),v(!1)}}}const Ro=[{name:"high",maxPixels:36e5,ratio:1.5,samples:4,grass:1,shadow:2048,shadowEvery:1,waterEvery:2,bloomHalf:!1},{name:"medium",maxPixels:24e5,ratio:1,samples:2,grass:.7,shadow:1024,shadowEvery:2,waterEvery:3,bloomHalf:!1},{name:"low",maxPixels:15e5,ratio:1,samples:2,grass:.5,shadow:1024,shadowEvery:3,waterEvery:4,bloomHalf:!0}];function H0(i){try{const t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info");return String(e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER))}catch{return""}}const S2=i=>/swiftshader|llvmpipe|software|basic render/i.test(H0(i));function b2(i){const t=new URLSearchParams(location.search).get("quality"),e=Ro.findIndex(r=>r.name===t);if(e>=0)return{level:e,forced:!0};const n=H0(i);if(/swiftshader|llvmpipe|software|basic render/i.test(n))return{level:2,forced:!1};const s=matchMedia("(pointer: coarse)").matches,o=/intel|hd graphics|uhd|iris|mali|adreno|powervr|apple gpu|videocore/i.test(n)||(navigator.hardwareConcurrency||8)<=4;return{level:s?2:o?1:0,forced:!1}}function E2(i,{target:t=48,window:e=2.5,settle:n=2}={}){let s=0,o=0,r=n,a=!1;return{start(){a=!0,s=0,o=0,r=n},tick(c){if(!a||document.hidden)return;if(c>.25){s=0,o=0;return}if(r>0){r-=c;return}if(s+=c,o++,s<e)return;const l=o/s;s=0,o=0,l<t&&i(l)&&(r=n)}}}DM(Me);const kr=document.getElementById("gl"),Oe=new x1({canvas:kr,antialias:!0,alpha:!0,powerPreference:"high-performance"});Oe.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Oe.setSize(window.innerWidth,window.innerHeight);Oe.setClearColor(12574975,0);Oe.shadowMap.enabled=!0;Oe.shadowMap.type=Mp;Oe.toneMapping=iu;Oe.toneMappingExposure=1;Oe.outputColorSpace=ie;const ze=new i0,Ft=new wn(50,window.innerWidth/window.innerHeight,.12,500);Ft.position.set(0,3,14);const Zn=new pM;Zn.setSize(window.innerWidth,window.innerHeight);document.getElementById("css3d").appendChild(Zn.domElement);const he=JS(ze);qS();const G0=he.city.children.filter(i=>i.userData.secret).map(i=>{const t=new cs().setFromObject(i),e=t.getSize(new b);return{point:new b((t.min.x+t.max.x)/2,t.max.y-e.y*.22,(t.min.z+t.max.z)/2),dwell:0}});yi(he.city);Lw(he.city);for(const i of[he.city,he.forest,he.goldtree,ze.getObjectByName("lakeBridge"),ze.getObjectByName("terrain")])i&&_0(i);y0(ze);const ho={};{const i=new Lh(Oe),t=ze.getObjectByName("sky"),e=n=>{const s=new i0,o=t.clone();o.material=t.material.clone(),o.material.uniforms.night.value=n?1:0,s.add(o),n||s.add(ze.getObjectByName("clouds").clone());const r=new I(new kt(380,380,1,48),new $e({color:n?"#06121a":"#3f9f36"}));if(r.position.y=-6,s.add(r),n){const a=[["#ff3fbf",-.3,-1],["#28e0ff",1,.15],["#ffb347",-1,.4],["#8a5cff",.4,1]];for(const[l,h,u]of a){const d=new I(new Wt(40,16,12),new $e({color:l}));d.position.set(h,.05,u).normalize().multiplyScalar(340),d.position.y=20,d.scale.y=.35,s.add(d)}const c=new I(new Wt(10,16,12),new $e({color:"#e8ecff"}));c.position.set(.42,.66,-.62).normalize().multiplyScalar(360),s.add(c)}else{const a=new I(new Wt(14,16,12),new $e({color:"#fff6d8"}));a.position.set(-.4,.5,-.75).normalize().multiplyScalar(360),s.add(a)}return i.fromScene(s,.03).texture};ho.day=e(!1),ho.night=e(!0),i.dispose(),ze.environment=re.k>.5?ho.night:ho.day,ze.environmentIntensity=.75}const T2=new Ln(window.innerWidth,window.innerHeight,{type:pi,samples:4}),ti=new _M(Oe,T2);ti.addPass(new yM(ze,Ft));ti.addPass(new g0({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      if (!(c.r < 1e4 && c.g < 1e4 && c.b < 1e4 && c.r >= 0.0 && c.g >= 0.0 && c.b >= 0.0)) c.rgb = vec3(1.0);
      if (!(c.a >= 0.0 && c.a <= 1.0)) c.a = 1.0;
      gl_FragColor = vec4(min(c.rgb, vec3(24.0)), c.a);
    }`}));const In=new To(new st(window.innerWidth,window.innerHeight),.32,.7,.86);In.blendMaterial.blending=wp;In.blendMaterial.blendSrc=fc;In.blendMaterial.blendDst=fc;In.blendMaterial.blendSrcAlpha=Sp;In.blendMaterial.blendDstAlpha=fc;ti.addPass(In);const A2=he.grass.geometry.instanceCount;let Jn=b2(Oe);function Pu(i){const t=Ro[i],e=Math.sqrt(t.maxPixels/Math.max(1,window.innerWidth*window.innerHeight)),n=Math.max(.5,Math.min(window.devicePixelRatio,t.ratio,e));Oe.setPixelRatio(n),Oe.setSize(window.innerWidth,window.innerHeight);for(const o of[ti.renderTarget1,ti.renderTarget2])o.samples!==t.samples&&(o.samples=t.samples,o.dispose());ti.setPixelRatio(n),ti.setSize(window.innerWidth,window.innerHeight),document.documentElement.dataset.quality=t.name,he.grass.geometry.instanceCount=Math.round(A2*t.grass),he.lake.userData.every=t.waterEvery,he.sparkles.userData.pixelRatio=n,C2();const s=he.sun.shadow;s.mapSize.x!==t.shadow&&(s.mapSize.set(t.shadow,t.shadow),s.map&&(s.map.dispose(),s.map=null))}function C2(){if(!Ro[Jn.level].bloomHalf)return;const i=Oe.getPixelRatio();In.setSize(Math.round(window.innerWidth*i/2),Math.round(window.innerHeight*i/2))}Pu(Jn.level);Oe.shadowMap.autoUpdate=!1;let op=0,rp=!1;function V0(i){const t=document.getElementById("perf-note");try{if(sessionStorage.getItem("0xsurgeon:perfnote"))return;sessionStorage.setItem("0xsurgeon:perfnote",i)}catch{}t&&(t.querySelector("p").textContent=i==="software"?"Your browser is drawing this 3D world without the graphics card (hardware acceleration is off), so it will be slow. Turn it on in the browser settings, or read the one-page version.":"This computer is struggling with the 3D world, even on the lowest settings. The one-page version has everything on it, without the lag.",t.classList.remove("hidden"),t.querySelector(".pn-stay").onclick=()=>t.classList.add("hidden"))}const W0=E2(i=>{if(Jn.level>=Ro.length-1&&i<25&&!rp){rp=!0;const t=document.getElementById("quick");t&&(t.classList.add("slow"),t.textContent="running slow? quick view"),V0("slow")}return Jn.forced||Jn.level>=Ro.length-1?!1:(Jn.level++,Pu(Jn.level),om(),!0)});In.materialHighPassFilter.fragmentShader=In.materialHighPassFilter.fragmentShader.replace("vec4 texel = texture2D( tDiffuse, vUv );","vec4 texel = texture2D( tDiffuse, vUv ); texel = any(isnan(texel)) ? vec4(0.0) : clamp(texel, 0.0, 64.0);");In.materialHighPassFilter.needsUpdate=!0;Ur(i=>{Oe.toneMappingExposure=1-i*.04,In.strength=.24+i*.46,In.threshold=.92-i*.2,In.radius=.7+i*.1,ze.environment=i>.5?ho.night:ho.day,ze.environmentIntensity=.75-i*.1});ti.addPass(new SM);const Qt=new o2(ze,Ft,kr);LM(ze);const ii=w2({onExit:()=>Uu()}),Lr=document.createElement("div");Lr.style.cssText=`width:${ss[0]}px;height:${ss[1]}px;overflow:hidden;background:transparent`;Lr.appendChild(ii.element);ii.element.inert=!0;const lr=document.getElementById("os-overlay"),Tc=new dM(Lr),zi=new b,zr=new as;he.screen.getWorldPosition(zi);he.screen.getWorldQuaternion(zr);Tc.position.copy(zi);Tc.quaternion.copy(zr);Tc.scale.setScalar(Ii/ss[0]);ze.add(Tc);const Lu=new b(0,0,1).applyQuaternion(zr),R2=he.screen.material,P2=new $e({color:"#0c1530"}),Ul=new b;let hr=!0;const L2=new b(1,0,0).applyQuaternion(zr),I2=new b(0,1,0).applyQuaternion(zr);function X0(){Ft.updateMatrixWorld();const i=window.innerWidth,t=window.innerHeight;let e=1/0,n=1/0,s=-1/0;for(const[r,a]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const c=zi.clone().addScaledVector(L2,r*Ii/2).addScaledVector(I2,a*Ii*ss[1]/ss[0]/2).project(Ft),l=(c.x+1)/2*i,h=(1-c.y)/2*t;e=Math.min(e,l),n=Math.min(n,h),s=Math.max(s,l)}const o=(s-e)/ss[0];lr.style.transform=`translate(${e}px, ${n}px) scale(${o})`,ii.element.parentElement!==lr&&lr.appendChild(ii.element),ii.element.inert=!1,lr.classList.add("on")}function D2(){lr.classList.remove("on"),ii.element.parentElement!==Lr&&Lr.appendChild(ii.element),ii.element.inert=!0}const Mi=document.getElementById("hint"),Ac=document.getElementById("back"),rs=document.getElementById("scope-back"),Cc=window.matchMedia("(pointer: coarse)").matches,za=i=>Cc?`<span class="hint-key">tap</span> ${i}`:`<span class="hint-key">E</span> ${i}`;Cc&&(Ac.innerHTML='<span class="hint-key">tap</span> lean back',rs.innerHTML='<span class="hint-key">tap</span> step back',document.getElementById("scope-hint").innerHTML='<span class="hint-key">drag</span> aim');Ac.addEventListener("click",()=>Uu());rs.addEventListener("click",()=>{zt==="chill"?K0():Q0()});const sn=document.getElementById("prompt"),ur=document.getElementById("music"),U2=window.matchMedia("(pointer: coarse)").matches;U2&&(Mi.innerHTML='<span class="hint-key">left</span> walk &nbsp; <span class="hint-key">right</span> look',document.getElementById("jump").classList.remove("hidden"),document.getElementById("jump").addEventListener("pointerdown",i=>{i.preventDefault(),Qt.enabled&&Qt.grounded&&(Qt.vy=4.6,Qt.grounded=!1,ne.jump())}));sn.addEventListener("click",()=>{zt==="walk"&&(Nu()?Z0():Fu()?Jh():ku()?J0():Pc()&&Du())});function Iu(){const i=window.innerWidth<window.innerHeight&&window.innerWidth<700;document.getElementById("rotate").classList.toggle("hidden",!(i&&zt==="focus"))}window.addEventListener("resize",Iu);Fe.subscribe(i=>{ur.classList.toggle("loading",i.loading),ur.innerHTML=(i.loading?'<span class="m-spin"></span>':"")+(i.playing?`${i.track.title} - ${i.track.artist}`.replace(/</g,"&lt;"):"music off"),ur.classList.toggle("on",i.playing),ur.parentElement.classList.toggle("on",i.playing&&i.list.length>1)});ur.addEventListener("click",()=>Fe.toggle());document.getElementById("music-next").addEventListener("click",()=>Fe.next());let zt="walk",we=null,vn=null,ap=!1;const dn={position:new b,target:new b},Po=new b,Lo=new b;function q0(){const i=Bn.degToRad(Ft.fov),t=2*Math.atan(Math.tan(i/2)*Ft.aspect),e=Ii/2/Math.tan(t/2)/.9,n=Ii*ss[1]/ss[0]/2/Math.tan(i/2)/.9;return Math.max(e,n)}function Br(i,t,e,n){const s=Ft.position.clone(),o=Ft.quaternion.clone(),r=Ft.clone();r.position.copy(i),r.lookAt(t),r.updateMatrixWorld();const a=r.quaternion.clone();vn={fromPos:s,toPos:i.clone(),fromQ:o,toQ:a,t:0,dur:e,done:n}}function Du(){if(zt!=="walk")return;zt="tween",Qt.enabled=!1,Qt.keys.clear(),sn.classList.add("hidden"),Mi.classList.add("hidden"),ne.sit();const i=zi.clone().addScaledVector(Lu,q0());Br(i,zi.clone(),1.5,()=>{zt="focus",document.body.classList.add("focused"),Ac.classList.remove("hidden"),X0(),Iu(),ap||(ap=!0,ii.boot()),ii.focus()})}function Uu(){zt==="focus"&&(zt="tween",document.body.classList.remove("focused"),Ac.classList.add("hidden"),ii.blur(),D2(),Iu(),ne.logoff(),Qt.cameraPose(dn),Br(dn.position,dn.target,1.3,()=>{zt="walk",Qt.enabled=!0,Po.copy(Ft.position),Lo.copy(dn.target),Mi.classList.remove("hidden")}))}window.addEventListener("keydown",i=>{if(i.code==="Escape"&&zt==="focus"&&Uu(),i.code==="Escape"&&zt==="scope"&&Q0(),(i.code==="Escape"||i.code==="KeyE")&&zt==="chill"){K0();return}if(i.code==="KeyE"&&zt==="walk"&&Nu()){Z0();return}if(i.code==="KeyE"&&zt==="walk"&&Fu()){Jh();return}if(i.code==="KeyR"&&zt==="walk"&&Or()!=null){Jh();return}if(i.code==="KeyE"&&zt==="walk"&&ku()){J0();return}i.code==="KeyE"&&zt==="walk"&&Pc()&&Du()});const cp=new hM,lp=new st;let dr=null;kr.addEventListener("pointerdown",i=>{dr=[i.clientX,i.clientY]});kr.addEventListener("pointerup",i=>{if(!dr||zt!=="walk")return;const t=Math.hypot(i.clientX-dr[0],i.clientY-dr[1]);if(dr=null,t>6)return;lp.set(i.clientX/window.innerWidth*2-1,-(i.clientY/window.innerHeight)*2+1),cp.setFromCamera(lp,Ft),cp.intersectObject(he.computer,!0).length&&(Pc()?Du():X2("walk closer to the desk"))});function Nu(){const i=Ru(),t=Qt.position;return i&&Math.hypot(t.x-i.position.x,t.z-i.position.z)<1.6&&Math.abs(t.y-i.position.y)<.6}function Fu(){const i=Qt.position;return Or()!=null&&Math.hypot(i.x-Ne.x,i.z-Ne.z)<9&&i.y<2.5}function Jh(){const i=Or(),t=F0().find(e=>e.index===i);t&&(Qt.mesh.position.set(t.x,t.top+.05,t.z),Qt.vy=0,Qt.grounded=!0,Qt.vel.set(0,0,0),ne.pop())}let Nl=null;function N2(){const i=Qt.onPad;if(!i||i===Nl){i||(Nl=null);return}if(Nl=i,i.kind!=="checkpoint"&&i.kind!=="summit")return;const t=Or();t!=null&&t>=i.index||(XS(i.index),i.kind==="checkpoint"&&O0(i.index),ne.checkpoint(),i.kind==="summit"?(Rr("Sky Steps","You made it to the top. Sit on the bench and listen for a while."),O2()):Rr("Checkpoint",`${F0().filter(e=>e.kind==="checkpoint").findIndex(e=>e.index===i.index)+1} of 2. Fall, and you can jump back here.`))}let xo=0,Ou=!1;const F2=new b,hp=new b,Qh=new b;function O2(){if(zt!=="walk")return;zt="tween",Qt.enabled=!1,Qt.keys.clear(),Ou=!0,xo=0,Mi.classList.add("hidden"),sn.classList.add("hidden");const i=he.skyisland.position,t=new b(i.x,i.y+12,i.z),e=Qt.position.clone().add(new b(0,2.4,0)),n=t.clone().sub(e).normalize();Qh.copy(t),Br(e.addScaledVector(n,-4.5).add(new b(0,.8,0)),t,1.8,()=>{zt="hold",xo=xo===.01?.01:5})}let lc=!1;function $0(){zt="tween",lc=!0,Qt.cameraPose(dn),Br(dn.position,dn.target,1.5,()=>{zt="walk",Qt.enabled=!0,Ou=!1,Po.copy(Ft.position),Lo.copy(dn.target)})}let We=null;const Fl=new b,up=new b;let tu=null,Y0=null;function k2(){const i=WS(),t=(n,s,o)=>new b(n,s,o),e=[[t(i.x,i.top+3,i.z+7),t(i.x,i.top+1.5,i.z-40)],[t(-8,16,4),t(10,2,0)],[t(8,9,24),t(19,0,6)],[t(30,4.5,18),t(19,1.5,2)],[t(26,10,-6),t(0,26,-95)],[t(4,20,-24),t(-30,18,-80)],[t(26,24,24),t(140,48,72)],[t(2,24,40),t(-80,66,62)],[t(-6,10,18),t(0,1,0)],[t(i.x+8,i.top+6,i.z+12),t(i.x,i.top,i.z)]];tu=new xi(e.map(n=>n[0]),!0,"centripetal"),Y0=new xi(e.map(n=>n[1]),!0,"centripetal")}function j0(i,t=0){tu||k2();const e=(i/7.2%1+1)%1;tu.getPointAt(e,Ft.position),Y0.getPointAt(e,Fl),t>0&&(up.copy(he.celestial.userData.moon.position),Fl.lerp(up,t*t*(3-2*t)));const n=50-22*t*t*(3-2*t);Math.abs(Ft.fov-n)>.01&&(Ft.fov=n,Ft.updateProjectionMatrix()),Ft.lookAt(Fl)}function Z0(){if(zt!=="walk")return;zt="chill",Qt.enabled=!1,Qt.keys.clear();const i=Ru();Qt.mesh.position.set(i.position.x,i.position.y+.51,i.position.z-.2),Qt.seated=!0,Qt.mesh.rotation.y=Math.PI,sn.classList.add("hidden"),Mi.classList.add("hidden"),rs.classList.remove("hidden"),rs.innerHTML=Cc?'<span class="hint-key">tap</span> stand up':'<span class="hint-key">esc</span> stand up',We={angle:0},j0(0),re.k>.9?(We.song=!0,Fe.playId("KvMY1uzSC1E")):Fe.playing||Fe.start(),ne.sit()}function K0(){if(zt!=="chill")return;zt="walk",We=null,he.zeppelin.visible=!0,he.blockchain.visible=!0,Ft.fov=50,Ft.updateProjectionMatrix(),rs.classList.add("hidden"),rs.innerHTML=Cc?'<span class="hint-key">tap</span> step back':'<span class="hint-key">esc</span> step back';const i=Ru();Qt.seated=!1,Qt.mesh.position.set(i.position.x,i.position.y,i.position.z-.6),Qt.enabled=!0,Mi.classList.remove("hidden")}function ku(){const i=Qt.position,t=he.telescope.position;return Math.hypot(i.x-t.x,i.z-t.z)<1.6&&Math.abs(i.y-t.y)<2}function J0(){if(zt!=="walk")return;zt="scope",Qt.enabled=!1,Qt.keys.clear(),sn.classList.add("hidden"),Mi.classList.add("hidden");const i=he.telescope,t=new b(i.position.x,i.position.y+1.2,i.position.z),e=G0.map(r=>Math.atan2(-(r.point.x-t.x),-(r.point.z-t.z))),n=Math.min(...e)-.15,s=Math.max(...e)+.15,o=(n+s)/2;we={yaw:o,pitch:.12,baseYaw:o,minYaw:n,maxYaw:s},he.telescope.userData.inUse=!0,Ft.fov=9,Ft.updateProjectionMatrix(),document.body.classList.add("scoped"),tm(),document.getElementById("scope-hint").classList.remove("hidden"),rs.classList.remove("hidden"),ne.click()}function Q0(){zt==="scope"&&(zt="walk",Rc.clear(),we=null,he.telescope.userData.inUse=!1,Ft.fov=50,Ft.updateProjectionMatrix(),document.body.classList.remove("scoped"),uo.classList.remove("on"),document.getElementById("scope-hint").classList.add("hidden"),rs.classList.add("hidden"),Qt.enabled=!0,Mi.classList.remove("hidden"))}const Ds=document.getElementById("scope-ui"),z2=Ds.querySelector(".lock"),B2=Ds.querySelector(".lock-fill"),Ol=Ds.querySelector(".flash"),uo=Ds.querySelector(".stamp"),dp=Ds.querySelector(".seen"),H2=Ds.querySelector(".dots"),G2=Ds.querySelector(".tally-n");let fp=0,pp=0;function tm(){const i=Ec();H2.innerHTML=Ni.map((t,e)=>`<i class="${i.has(e)?"got":""}"></i>`).join(""),G2.textContent=`${i.size} / ${Ni.length} found`}function V2(i,t){z2.classList.toggle("on",i>.02),B2.style.strokeDasharray=`${(i*100).toFixed(1)} 100`;const e=Math.floor(i*4);e>pp&&i<1&&ne.tick(),pp=e;const n=t>=0&&!uo.classList.contains("on");dp.classList.toggle("on",n),n&&(dp.textContent=`Already found: ${Ni[t]}`)}function W2(i){const t=Ec().size;uo.querySelector(".st-name").textContent=Ni[i],uo.querySelector(".st-count").textContent=t===Ni.length?`All ${t} found`:`${t} / ${Ni.length}`,uo.classList.add("on"),Ol.classList.remove("go"),Ol.offsetWidth,Ol.classList.add("go"),ne.found(),tm(),clearTimeout(fp),fp=setTimeout(()=>uo.classList.remove("on"),2800)}let fo=null;const Rc=new Set;window.addEventListener("keydown",i=>{zt==="scope"&&Rc.add(i.code)});window.addEventListener("keyup",i=>Rc.delete(i.code));kr.addEventListener("pointerdown",i=>{zt==="scope"&&(fo=[i.clientX,i.clientY])});window.addEventListener("pointermove",i=>{!fo||!we||(we.yaw-=(i.clientX-fo[0])*9e-4,we.pitch=Bn.clamp(we.pitch+(i.clientY-fo[1])*9e-4,-.12,1.15),we.yaw=Bn.clamp(we.yaw,we.minYaw,we.maxYaw),fo=[i.clientX,i.clientY])});window.addEventListener("pointerup",()=>{fo=null});function Pc(){const i=Qt.position;return Math.hypot(i.x,i.z-.6)<2.9}let Pi=0;function X2(i){sn.textContent=i,sn.classList.remove("hidden"),Pi=1.6}window.addEventListener("resize",()=>{Ft.aspect=window.innerWidth/window.innerHeight,Ft.updateProjectionMatrix(),Pu(Jn.level),Zn.setSize(window.innerWidth,window.innerHeight),zt==="focus"&&(Ft.position.copy(zi).addScaledVector(Lu,q0()),Ft.lookAt(zi),X0()),ti.render(),hr&&Zn.render(ze,Ft)});const em=document.getElementById("theme-btn"),q2=em.querySelector(".theme-label");function nm(){q2.textContent=re.name==="night"?"day":"night"}nm();function im(i){Fe.setMode(i),i!==re.name?(_f(i),ne.click()):_f(i),nm()}em.addEventListener("click",i=>{i.stopPropagation(),im(re.name==="night"?"day":"night")});window.addEventListener("keydown",i=>{i.code==="KeyN"&&zt==="walk"&&im(re.name==="night"?"day":"night")});let di=null;const mp=3.4,$2=new b(1.5,5,15),Y2=new b(1,5.2,11),kl=new b;function j2(){zt="intro",di={t:0},Qt.enabled=!1,Mi.classList.add("hidden")}function zu(){zt==="intro"&&(di=null,zt="tween",Qt.cameraPose(dn),Br(dn.position,dn.target,2.2,()=>{zt="walk",Qt.enabled=!0,eu=99,Po.copy(Ft.position),Lo.copy(dn.target),Mi.classList.remove("hidden")}))}window.addEventListener("keydown",()=>{zt==="intro"&&di&&di.t>.4&&zu(),sm()});function sm(){Ou&&(zt==="hold"?$0():zt==="tween"&&!lc&&(xo=.01))}window.addEventListener("pointerdown",sm);window.addEventListener("pointerdown",i=>{i.target.closest&&i.target.closest("#theme-pick, #theme-btn")||zt==="intro"&&di&&di.t>.4&&zu()});const gp=new p0;let eu=0;const Z2=2.6;Qt.cameraPose(dn);Po.set(0,6,22);Lo.set(0,1,0);function vp(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}const xp=new b;let zl=0,_p=performance.now(),K2=0,As=1,hc=16.7,Bu=1;const _o=[];(function i(t){requestAnimationFrame(e=>{if(t){const n=e-t;n>2&&n<50&&_o.push(n)}_o.length<60?i(e):om()})})();function om(){if(_o.length<60)return;hc=[..._o].sort((n,s)=>n-s)[_o.length>>1];const i=1e3/hc,t=matchMedia("(pointer: coarse)").matches,e=Math.max(1,Math.round(i/60));As=Math.max(As,t||Jn.level>0?e:1),Bu=t||Jn.level>0?e:Math.min(2,e)}let Bl=0,Hl=0,Gl=0,Vl=0;const Wl=new URLSearchParams(location.search).has("perf")?(window.__perf={draws:[],get pacing(){return{skipN:As,refreshMs:hc,maxSkip:Bu}}}).draws:null;function J2(i){if(!dc||_o.length<60||document.hidden){Bl=i;return}const t=i-Bl;Bl=i,!(t>250)&&(Gl++,Hl+=t,t>hc*(As+.6)&&Vl++,!(Hl<2e3)&&(Vl/Gl>.15&&As<Bu&&As++,Hl=0,Gl=0,Vl=0))}function uc(){const i=performance.now();if(++K2%As!==0){requestAnimationFrame(uc);return}J2(i),Wl&&Wl.length<3e4&&Wl.push(i),zl++,performance.now()-_p>1e3&&(window.__dbg&&(window.__dbg.fps=zl),zl=0,_p=performance.now());const t=gp.getDelta(),e=Math.min(t,.05);W0.tick(t),dc||eb(t);const n=gp.elapsedTime;if(EM(e),Qt.update(e,n),xp.copy(Qt.position).y+=.9,dw([Ft.position,xp]),QS(he,n,e,Qt,Ft),zt==="walk"){Qt.cameraPose(dn),eu+=e;const a=eu<Z2?1-Math.exp(-e*1.4):1-Math.exp(-e*6);Po.lerp(dn.position,a),Lo.lerp(dn.target,a),Ft.position.copy(Po),Ft.lookAt(Lo),N2(),zt!=="walk"||(Nu()?Pi<=0&&(sn.innerHTML=za("sit and listen"),sn.classList.remove("hidden")):Fu()?Pi<=0&&(sn.innerHTML=za("back to your checkpoint"),sn.classList.remove("hidden")):ku()?Pi<=0&&(sn.innerHTML=za("look through the telescope"),sn.classList.remove("hidden")):Pc()?Pi<=0&&(sn.innerHTML=za("sit down"),sn.classList.remove("hidden")):Pi<=0&&sn.classList.add("hidden"))}else if(zt==="chill"&&We){if(We.angle+=e*(We.moon>0?.02:.08),We.t=(We.t||0)+e,re.k>.9&&We.t>4&&!We.moonDone){We.song||(We.song=!0,Fe.playId("KvMY1uzSC1E"));const c=We.t-4;We.moon=c<4?c/4:c<10?1:Math.max(0,1-(c-10)/4),c>=4&&L0(1),c>=14&&(We.moonDone=!0,We.moon=0)}const a=re.k>.9&&!We.moonDone;he.zeppelin.visible=!a,he.blockchain.visible=!a,j0(We.angle,We.moon||0)}else if(zt==="scope"&&we){const a=he.telescope,c=Rc,l=.55*e;(c.has("KeyA")||c.has("ArrowLeft"))&&(we.yaw+=l),(c.has("KeyD")||c.has("ArrowRight"))&&(we.yaw-=l),(c.has("KeyW")||c.has("ArrowUp"))&&(we.pitch+=l),(c.has("KeyS")||c.has("ArrowDown"))&&(we.pitch-=l),we.yaw=Bn.clamp(we.yaw,we.minYaw,we.maxYaw),we.pitch=Bn.clamp(we.pitch,-.12,1.15);const h=a.getObjectByName("head");h.rotation.y=we.yaw-a.rotation.y,a.getObjectByName("tilt").rotation.x=we.pitch,Ft.position.set(a.position.x,a.position.y+1.2,a.position.z);const u=new b(-Math.sin(we.yaw)*Math.cos(we.pitch),Math.sin(we.pitch),-Math.cos(we.yaw)*Math.cos(we.pitch));Ft.lookAt(Ft.position.clone().add(u)),Ft.position.addScaledVector(u,.9),Ft.updateMatrixWorld();const d=Ec();let p=0,g=-1;G0.forEach((v,m)=>{const f=v.point.clone().project(Ft),x=f.z<1&&Math.hypot(f.x,f.y)<.18;if(d.has(m)){x&&(g=m);return}v.dwell=x?v.dwell+e:0,p=Math.max(p,Math.min(1,v.dwell/.5)),v.dwell>.5&&rS(m,!0)&&W2(m)}),V2(p,g)}else if(zt==="intro"&&di){dc&&(di.t+=e);const a=vp(Math.min(1,di.t/mp));Ft.position.lerpVectors($2,Y2,a),qw(he.zeppelin,kl),kl.y+=1.5,Ft.lookAt(kl),he.zeppelin.userData.highlight=1,di.t>=mp&&zu()}else if(zt==="hold"){xo-=e,Ft.fov+=(26-Ft.fov)*Math.min(1,e*1.1),Ft.updateProjectionMatrix();const a=he.skyisland,c=a.userData.dragon.userData.head.getWorldPosition(F2);hp.set(a.position.x,a.position.y+10,a.position.z).lerp(c,.42),Qh.lerp(hp,Math.min(1,e*1.5)),Ft.lookAt(Qh),xo<=0&&$0()}else if(zt==="tween"&&vn){vn.t+=e;const a=vp(Math.min(1,vn.t/vn.dur));if(Ft.position.lerpVectors(vn.fromPos,vn.toPos,a),Ft.quaternion.slerpQuaternions(vn.fromQ,vn.toQ,a),vn.t>=vn.dur){const c=vn.done;vn=null,c()}}Pi>0&&(Pi-=e,Pi<=0&&sn.classList.add("hidden")),lc&&(Ft.fov+=(50-Ft.fov)*Math.min(1,e*3),Ft.updateProjectionMatrix(),Math.abs(Ft.fov-50)<.05&&(Ft.fov=50,Ft.updateProjectionMatrix(),lc=!1)),Ul.subVectors(Ft.position,zi);const s=Ul.length(),o=Ul.dot(Lu),r=zt==="focus"||zt==="tween"&&vn&&vn.toPos.distanceTo(zi)<2||(hr?s<9.5&&o>0:s<8.5&&o>.1);r!==hr&&(hr=r,he.screen.material=r?R2:P2,r&&Zn.render(ze,Ft),Zn.domElement.style.display=r?"":"none"),++op>=Ro[Jn.level].shadowEvery&&(op=0,Oe.shadowMap.needsUpdate=!0),ti.render(),hr&&Zn.render(ze,Ft),(Zn.domElement.scrollTop||Zn.domElement.scrollLeft)&&(Zn.domElement.scrollTop=0,Zn.domElement.scrollLeft=0),requestAnimationFrame(uc)}new URLSearchParams(location.search);zt==="walk"&&j2();let dc=!1,rm=!1,Xl=0;const Q2=performance.now();async function tb(){y0(ze);const i=[];ze.traverse(n=>{n.visible||(i.push(n),n.visible=!0)}),Oe.setRenderTarget(ti.renderTarget1);const t=Oe.compileAsync(ze,Ft);Oe.setRenderTarget(null);for(const n of i)n.visible=!1;const e=new Set;ze.traverse(n=>{for(const s of n.material?[].concat(n.material):[])for(const o of["map","emissiveMap","normalMap","roughnessMap","alphaMap","bumpMap"]){const r=s[o];r&&!e.has(r)&&(e.add(r),Oe.initTexture(r))}});try{await t}catch{}performance.mark("0x:warm"),rm=!0,W0.start()}function eb(i){const t=performance.now()-Q2;Xl=rm&&i<.034?Xl+1:0,(t>3200&&Xl>=40||t>12e3)&&(dc=!0,performance.mark("0x:loader-gone"),S2(Oe)&&setTimeout(()=>V0("software"),1500),document.getElementById("loader").classList.add("gone"))}document.fonts.ready.then(()=>{performance.mark("0x:fonts"),tb().then(uc,uc)});
