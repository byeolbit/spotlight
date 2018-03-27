!function(t,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o();else if("function"==typeof define&&define.amd)define([],o);else{var e=o();for(var s in e)("object"==typeof exports?exports:t)[s]=e[s]}}(window,function(){return function(t){var o={};function e(s){if(o[s])return o[s].exports;var i=o[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=o,e.d=function(t,o,s){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:s})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="/dist",e(e.s=0)}([function(t,o,e){"use strict";e.r(o);const s=()=>navigator&&navigator.platform.toUpperCase().indexOf("MAC")>=0;var i={isMac:s,getMaskBackground:(t,o,{radius:e,dimmedColor:s})=>"radial-gradient(circle at "+t+"px "+o+"px, transparent "+e+"px, "+s+" 0)"};const n={ESC:27,SHIFT:16,CTRL:s()?91:17};e(1);e.d(o,"SpotLight",function(){return r});class r{constructor(t){this.changeOption(t),this._attachEvent()}_computeOptions(t){let o=t.el||document.body.firstElementChild,e={dimmedColor:"rgba(0,0,0,0.4)",zoomedColor:"#fff",zoomKey:i.isMac()?"metaKey":"ctrlKey",zoomScale:2,zIndex:1e3,el:o,scrollEl:o,radius:t.el.getBoundingClientRect().width/6};return Object.assign({},e,t)}changeOption(t){this.options=this._computeOptions(t)}_attachEvent(){document.addEventListener("keyup",t=>{n.SHIFT===t.keyCode&&this.stopMask(),n.CTRL===t.keyCode&&this.stopZoom()}),document.addEventListener("keydown",t=>{n.SHIFT===t.keyCode&&this.startMask(),t.shiftKey&&n.CTRL===t.keyCode&&this.startZoom(t)}),document.addEventListener("mousemove",this.onMove.bind(this))}remove(){}startMask(){this.$mask||(this.$mask=document.createElement("div"),this.$mask.classList.add("spotlight-mask"),document.body.appendChild(this.$mask),this.setMask())}setMask(){let t=i.getMaskBackground(this.x,this.y,this.options);this.$mask.setAttribute("style",`\n\t\t\tbackground-image: ${t}; \n\t\t\tbackground-image: -webkit-${t};\n\t\t\tposition: fixed;\n\t\t\tleft: 0;\n\t\t\ttop: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tcursor: none;\n\t\t\tz-index: ${this.options.zIndex}`)}stopMask(){this.$mask&&this.$mask.remove(),this.stopZoom(),this.$mask=null}startZoom(){this.$zoom||(this.$zoom=document.createElement("div"),this.$zoom.classList.add("spotlight-zoom"),this.$zoomContent=this.options.el.cloneNode(!0),this.$zoomContent.classList.add("spotlight-zoom-content"),this.$zoom.setAttribute("style",`\n\t\t\twidth: ${2*this.options.radius}px; \n\t\t\theight: ${2*this.options.radius}px;\n\t\t\toverflow: hidden;\n\t\t\tborder-radius: 50%;\n\t\t\tdisplay: block;\n\t\t\tposition: fixed;`),this.$zoomContent.setAttribute("style",`\n\t\t\twidth: ${this.options.el.offsetWidth}px; \n\t\t\theight: ${this.options.el.offsetHeight}px;\n\t\t\tbackground-color: ${this.options.zoomedColor};\n\t\t\tposition: fixed;\n\t\t\ttransform: scale(${this.options.zoomScale});\n\t\t\toverflow: ${this.options.el.style.overflow};\n\t\t\tz-index: ${this.options.zIndex+1}`),this.options.el.parentNode.parentNode.appendChild(this.$zoom),this.$zoom.appendChild(this.$zoomContent),this.elRect=this.options.el.getBoundingClientRect(),this.$zoomContent.scrollTop=parseInt(this.options.scrollEl.scrollTop,10),this.$zoomContent.scrollLeft=parseInt(this.options.scrollEl.scrollLeft,10),this.setZoom())}setZoom(){let t=this.options.zoomScale;this.$zoom.style.top=`${this.y-this.options.radius}px`,this.$zoom.style.left=`${this.x-this.options.radius}px`,this.$zoomContent.style.top=`${this.y-this.options.radius}px`,this.$zoomContent.style.left=`${this.x-this.options.radius}px`,this.$zoomContent.style.marginTop=-t*(this.y-this.elRect.top)+this.options.el.offsetHeight*(t-1)/2+this.options.radius+"px",this.$zoomContent.style.marginLeft=-t*(this.x-this.elRect.left)+this.options.el.offsetWidth*(t-1)/2+this.options.radius+"px"}stopZoom(){this.$zoom&&this.$zoom.remove(),this.$zoom=null}onMove(t){this.x=t.clientX,this.y=t.clientY,this.$mask&&(t.shiftKey||this.stopMask(),!t[this.options.zoomKey]&&this.$zoom&&this.stopZoom(),this.setMask(),t[this.options.zoomKey]&&this.setZoom())}}},function(t,o){[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}})})}])});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGwuanMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwiYSIsImkiLCJ3aW5kb3ciLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwidmFsdWUiLCJuIiwiX19lc01vZHVsZSIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImlzTWFjIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJ0b1VwcGVyQ2FzZSIsImluZGV4T2YiLCJ1dGlsIiwiZ2V0TWFza0JhY2tncm91bmQiLCJ4IiwieSIsInJhZGl1cyIsImRpbW1lZENvbG9yIiwiS0VZX0NPREUiLCJFU0MiLCJTSElGVCIsIkNUUkwiLCJzcmNfU3BvdExpZ2h0IiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwidGhpcyIsImNoYW5nZU9wdGlvbiIsIl9hdHRhY2hFdmVudCIsIl9jb21wdXRlT3B0aW9ucyIsImVsIiwiZG9jdW1lbnQiLCJib2R5IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJkZWZhdWx0T3B0aW9ucyIsInpvb21lZENvbG9yIiwiem9vbUtleSIsInpvb21TY2FsZSIsInpJbmRleCIsInNjcm9sbEVsIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJhc3NpZ24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJzdG9wTWFzayIsInN0b3Bab29tIiwic3RhcnRNYXNrIiwic2hpZnRLZXkiLCJzdGFydFpvb20iLCJvbk1vdmUiLCJiaW5kIiwicmVtb3ZlIiwiJG1hc2siLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJzZXRNYXNrIiwiaW1hZ2VDc3MiLCJzZXRBdHRyaWJ1dGUiLCIkem9vbSIsIiR6b29tQ29udGVudCIsImNsb25lTm9kZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBhcmVudE5vZGUiLCJlbFJlY3QiLCJzY3JvbGxUb3AiLCJwYXJzZUludCIsInNjcm9sbExlZnQiLCJzZXRab29tIiwic2NhbGUiLCJ0b3AiLCJsZWZ0IiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImNsaWVudFgiLCJjbGllbnRZIiwiRWxlbWVudCIsIkNoYXJhY3RlckRhdGEiLCJEb2N1bWVudFR5cGUiLCJmb3JFYWNoIiwiaXRlbSIsIndyaXRhYmxlIiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiJDQUFBLFNBQUFBLEVBQUFDLEdBQ0Esb0JBQUFDLFNBQUEsaUJBQUFDLE9BQ0FBLE9BQUFELFFBQUFELFNBQ0Esc0JBQUFHLGVBQUFDLElBQ0FELFVBQUFILE9BQ0EsQ0FDQSxJQUFBSyxFQUFBTCxJQUNBLFFBQUFNLEtBQUFELEdBQUEsaUJBQUFKLGdCQUFBRixHQUFBTyxHQUFBRCxFQUFBQyxJQVBBLENBU0NDLE9BQUEsV0FDRCxtQkNUQSxJQUFBQyxLQUdBLFNBQUFDLEVBQUFDLEdBR0EsR0FBQUYsRUFBQUUsR0FDQSxPQUFBRixFQUFBRSxHQUFBVCxRQUdBLElBQUFDLEVBQUFNLEVBQUFFLElBQ0FKLEVBQUFJLEVBQ0FDLEdBQUEsRUFDQVYsWUFVQSxPQU5BVyxFQUFBRixHQUFBRyxLQUFBWCxF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QUFLVixFQUFJVSxLQUFLNEMsT0FBT00sS0FBT2xELEtBQUtELFFBQVFLLEdBQUdvQyxjQUFnQlMsRUFBTyxHQUFHLEVBQUlqRCxLQUFLRCxRQUFRUixPQUFTLEtBQy9JUyxLQUFLcUMsYUFBYUksTUFBTVksWUFBZUosR0FBU2pELEtBQUtYLEVBQUlXLEtBQUs0QyxPQUFPTyxNQUFRbkQsS0FBS0QsUUFBUUssR0FBR21DLGFBQWVVLEVBQU8sR0FBRyxFQUFJakQsS0FBS0QsUUFBUVIsT0FBUyxLQUdqSjhCLFdBQ0NyQixLQUFLb0MsT0FBU3BDLEtBQUtvQyxNQUFNVCxTQUN6QjNCLEtBQUtvQyxNQUFRLEtBR2RYLE9BQU9QLEdBQ05sQixLQUFLWCxFQUFJNkIsRUFBRW9DLFFBQ1h0RCxLQUFLVixFQUFJNEIsRUFBRXFDLFFBRVB2RCxLQUFLNEIsUUFJSlYsRUFBRUssVUFDTnZCLEtBQUtvQixZQUdERixFQUFFbEIsS0FBS0QsUUFBUVcsVUFBWVYsS0FBS29DLE9BQ3BDcEMsS0FBS3FCLFdBR05yQixLQUFLaUMsVUFFRGYsRUFBRWxCLEtBQUtELFFBQVFXLFVBQ2xCVixLQUFLZ0QsNkJDNUlKUSxRQUFROUUsVUFBVytFLGNBQWMvRSxVQUFXZ0YsYUFBYWhGLFdBZHhEaUYsUUFBUSxTQUFVQyxHQUNqQkEsRUFBS2pGLGVBQWUsV0FHeEJaLE9BQU9DLGVBQWU0RixFQUFNLFVBQzNCM0YsY0FBYyxFQUNkQyxZQUFZLEVBQ1oyRixVQUFVLEVBQ1Z4RixNQUFPLFdBQ2tCLE9BQXBCMkIsS0FBSzJDLFlBQ1IzQyxLQUFLMkMsV0FBV21CLFlBQVk5RCIsImZpbGUiOiJzcG90bGlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdFwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgY29uc3QgaXNNYWMgPSAoKSA9PiB7XG5cdHJldHVybiBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnBsYXRmb3JtLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignTUFDJykgPj0gMDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNYXNrQmFja2dyb3VuZCA9ICh4LCB5LCB7cmFkaXVzLCBkaW1tZWRDb2xvcn0pID0+IHtcblx0cmV0dXJuICdyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0ICcgKyB4ICsgJ3B4ICcgKyB5ICsgJ3B4LCB0cmFuc3BhcmVudCAnICsgcmFkaXVzICsgJ3B4LCAnKyBkaW1tZWRDb2xvciArICcgMCknO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGlzTWFjLFxuXHRnZXRNYXNrQmFja2dyb3VuZFxufSIsImltcG9ydCB7aXNNYWN9IGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IGNvbnN0IEtFWV9DT0RFID0ge1xuXHRFU0M6IDI3LFxuXHRTSElGVDogMTYsXG5cdENUUkw6IGlzTWFjKCkgPyA5MTogMTdcbn07XG4iLCJpbXBvcnQge0tFWV9DT0RFfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCBcIi4vcG9seWZpbGxcIlxuXG5jbGFzcyBTcG90TGlnaHQge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cdFx0dGhpcy5jaGFuZ2VPcHRpb24ob3B0aW9ucyk7XG5cdFx0dGhpcy5fYXR0YWNoRXZlbnQoKTtcblx0fVxuXG5cdF9jb21wdXRlT3B0aW9ucyhvcHRpb25zKSB7XG5cdFx0bGV0IGVsID0gb3B0aW9ucy5lbCB8fCBkb2N1bWVudC5ib2R5LmZpcnN0RWxlbWVudENoaWxkO1xuXG5cdFx0bGV0IGRlZmF1bHRPcHRpb25zID0ge1xuXHRcdFx0ZGltbWVkQ29sb3I6IGByZ2JhKDAsMCwwLDAuNClgLFxuXHRcdFx0em9vbWVkQ29sb3I6ICcjZmZmJyB8fCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbClbJ2JhY2tncm91bmRDb2xvciddLCAvL+yehOyLnCDsvZTrk5xcblx0XHRcdHpvb21LZXk6IHV0aWwuaXNNYWMoKT8gJ21ldGFLZXknOiAnY3RybEtleScsXG5cdFx0XHR6b29tU2NhbGU6IDIsXG5cdFx0XHR6SW5kZXg6IDEwMDAsXG5cdFx0XHRlbDogZWwsXG5cdFx0XHRzY3JvbGxFbDogZWwsXG5cdFx0XHRyYWRpdXM6IG9wdGlvbnMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLyA2LFxuXHRcdH07XG5cblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXHR9XG5cblx0Y2hhbmdlT3B0aW9uKG9wdGlvbnMpIHtcblx0XHR0aGlzLm9wdGlvbnMgPSB0aGlzLl9jb21wdXRlT3B0aW9ucyhvcHRpb25zKTtcblx0fVxuXG5cdF9hdHRhY2hFdmVudCgpIHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG5cdFx0XHRpZiAoS0VZX0NPREUuU0hJRlQgPT09IGUua2V5Q29kZSkge1xuXHRcdFx0XHR0aGlzLnN0b3BNYXNrKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChLRVlfQ09ERS5DVFJMID09PSBlLmtleUNvZGUpIHtcblx0XHRcdFx0dGhpcy5zdG9wWm9vbSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG5cdFx0XHRpZiAoS0VZX0NPREUuU0hJRlQgPT09IGUua2V5Q29kZSkge1xuXHRcdFx0XHR0aGlzLnN0YXJ0TWFzaygpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZS5zaGlmdEtleSAmJiBLRVlfQ09ERS5DVFJMID09PSBlLmtleUNvZGUpIHtcblx0XHRcdFx0dGhpcy5zdGFydFpvb20oZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW92ZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHJlbW92ZSgpIHtcblxuXHR9XG5cblx0c3RhcnRNYXNrKCkge1xuXHRcdGlmKHRoaXMuJG1hc2spIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy4kbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRoaXMuJG1hc2suY2xhc3NMaXN0LmFkZCgnc3BvdGxpZ2h0LW1hc2snKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuJG1hc2spO1xuXHRcdHRoaXMuc2V0TWFzaygpO1xuXHR9XG5cblx0c2V0TWFzaygpIHtcblx0XHRsZXQgaW1hZ2VDc3MgPSB1dGlsLmdldE1hc2tCYWNrZ3JvdW5kKHRoaXMueCwgdGhpcy55LCB0aGlzLm9wdGlvbnMpO1xuXHRcdHRoaXMuJG1hc2suc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6ICR7aW1hZ2VDc3N9OyBcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtJHtpbWFnZUNzc307XG5cdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRjdXJzb3I6IG5vbmU7XG5cdFx0XHR6LWluZGV4OiAke3RoaXMub3B0aW9ucy56SW5kZXh9YClcblx0fVxuXG5cdHN0b3BNYXNrKCkge1xuXHRcdHRoaXMuJG1hc2sgJiYgdGhpcy4kbWFzay5yZW1vdmUoKTtcblx0XHR0aGlzLnN0b3Bab29tKCk7XG5cdFx0dGhpcy4kbWFzayA9IG51bGw7XG5cdH1cblx0c3RhcnRab29tKCkge1xuXHRcdGlmKHRoaXMuJHpvb20pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy4kem9vbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRoaXMuJHpvb20uY2xhc3NMaXN0LmFkZCgnc3BvdGxpZ2h0LXpvb20nKTtcblx0XHR0aGlzLiR6b29tQ29udGVudCA9IHRoaXMub3B0aW9ucy5lbC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc3BvdGxpZ2h0LXpvb20tY29udGVudCcpO1xuXHRcdHRoaXMuJHpvb20uc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcblx0XHRcdHdpZHRoOiAke3RoaXMub3B0aW9ucy5yYWRpdXMgKiAyfXB4OyBcblx0XHRcdGhlaWdodDogJHt0aGlzLm9wdGlvbnMucmFkaXVzICogMn1weDtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHBvc2l0aW9uOiBmaXhlZDtgXG5cdFx0KTtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxuXHRcdFx0d2lkdGg6ICR7dGhpcy5vcHRpb25zLmVsLm9mZnNldFdpZHRofXB4OyBcblx0XHRcdGhlaWdodDogJHt0aGlzLm9wdGlvbnMuZWwub2Zmc2V0SGVpZ2h0fXB4O1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLm9wdGlvbnMuem9vbWVkQ29sb3J9O1xuXHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgke3RoaXMub3B0aW9ucy56b29tU2NhbGV9KTtcblx0XHRcdG92ZXJmbG93OiAke3RoaXMub3B0aW9ucy5lbC5zdHlsZS5vdmVyZmxvd307XG5cdFx0XHR6LWluZGV4OiAke3RoaXMub3B0aW9ucy56SW5kZXggKyAxfWBcblx0XHQpO1xuXHRcdC8vVE9ETzog7J6E7Iuc7L2U65OcXG5cdFx0dGhpcy5vcHRpb25zLmVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLiR6b29tKTtcblx0XHR0aGlzLiR6b29tLmFwcGVuZENoaWxkKHRoaXMuJHpvb21Db250ZW50KTtcblx0XHR0aGlzLmVsUmVjdCA9IHRoaXMub3B0aW9ucy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zY3JvbGxUb3AgPSBwYXJzZUludCh0aGlzLm9wdGlvbnMuc2Nyb2xsRWwuc2Nyb2xsVG9wLCAxMCk7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc2Nyb2xsTGVmdCA9IHBhcnNlSW50KHRoaXMub3B0aW9ucy5zY3JvbGxFbC5zY3JvbGxMZWZ0LCAxMCk7XG5cdFx0dGhpcy5zZXRab29tKCk7XG5cdH1cblxuXHRzZXRab29tKCkge1xuXHRcdGxldCBzY2FsZSA9IHRoaXMub3B0aW9ucy56b29tU2NhbGU7XG5cdFx0dGhpcy4kem9vbS5zdHlsZS50b3AgPSBgJHt0aGlzLnkgLSB0aGlzLm9wdGlvbnMucmFkaXVzIH1weGA7XG5cdFx0dGhpcy4kem9vbS5zdHlsZS5sZWZ0ID0gYCR7dGhpcy54IC0gdGhpcy5vcHRpb25zLnJhZGl1cyB9cHhgO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnN0eWxlLnRvcCA9IGAke3RoaXMueSAtIHRoaXMub3B0aW9ucy5yYWRpdXN9cHhgO1xuXHRcdHRoaXMuJHpvb21Db250ZW50LnN0eWxlLmxlZnQgPSBgJHt0aGlzLnggLSB0aGlzLm9wdGlvbnMucmFkaXVzfXB4YDtcblx0XHR0aGlzLiR6b29tQ29udGVudC5zdHlsZS5tYXJnaW5Ub3AgPSAtIHNjYWxlICogKHRoaXMueSAtIHRoaXMuZWxSZWN0LnRvcCkgKyB0aGlzLm9wdGlvbnMuZWwub2Zmc2V0SGVpZ2h0ICogKHNjYWxlIC0xKS8yICsgdGhpcy5vcHRpb25zLnJhZGl1cyArICdweCc7XG5cdFx0dGhpcy4kem9vbUNvbnRlbnQuc3R5bGUubWFyZ2luTGVmdCA9IC0gc2NhbGUgKiAodGhpcy54IC0gdGhpcy5lbFJlY3QubGVmdCkgKyB0aGlzLm9wdGlvbnMuZWwub2Zmc2V0V2lkdGggKiAoc2NhbGUgLTEpLzIgKyB0aGlzLm9wdGlvbnMucmFkaXVzICsgJ3B4Jztcblx0fVxuXG5cdHN0b3Bab29tKCkge1xuXHRcdHRoaXMuJHpvb20gJiYgdGhpcy4kem9vbS5yZW1vdmUoKTtcblx0XHR0aGlzLiR6b29tID0gbnVsbDtcblx0fVxuXG5cdG9uTW92ZShlKSB7XG5cdFx0dGhpcy54ID0gZS5jbGllbnRYO1xuXHRcdHRoaXMueSA9IGUuY2xpZW50WTtcblxuXHRcdGlmKCF0aGlzLiRtYXNrKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFlLnNoaWZ0S2V5KSB7XG5cdFx0XHR0aGlzLnN0b3BNYXNrKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCFlW3RoaXMub3B0aW9ucy56b29tS2V5XSAmJiB0aGlzLiR6b29tKSB7XG5cdFx0XHR0aGlzLnN0b3Bab29tKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRNYXNrKCk7XG5cblx0XHRpZiAoZVt0aGlzLm9wdGlvbnMuem9vbUtleV0pIHtcblx0XHRcdHRoaXMuc2V0Wm9vbSgpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQge1Nwb3RMaWdodH1cbiIsIi8vIGZyb206aHR0cHM6Ly9naXRodWIuY29tL2pzZXJ6L2pzX3BpZWNlL2Jsb2IvbWFzdGVyL0RPTS9DaGlsZE5vZGUvcmVtb3ZlKCkvcmVtb3ZlKCkubWRcbihmdW5jdGlvbiAoYXJyKSB7XG5cdGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0aWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ3JlbW92ZScpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdGVtLCAncmVtb3ZlJywge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcblx0XHRcdFx0aWYgKHRoaXMucGFyZW50Tm9kZSAhPT0gbnVsbClcblx0XHRcdFx0XHR0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufSkoW0VsZW1lbnQucHJvdG90eXBlLCBDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSwgRG9jdW1lbnRUeXBlLnByb3RvdHlwZV0pOyJdLCJzb3VyY2VSb290IjoiIn0=