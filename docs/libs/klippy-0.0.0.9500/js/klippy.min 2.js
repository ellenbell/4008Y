function addClassKlippyToPreCode(){document.addEventListener("DOMContentLoaded",function(){for(var e=document.querySelectorAll("pre > code"),t=0;t<e.length;t+=1)e.item(t).parentElement.className+=" klippy"})}function addClassKlippyTo(e){document.addEventListener("DOMContentLoaded",function(){for(var t=document.querySelectorAll(e),o=0;o<t.length;o+=1)t.item(o).className+=" klippy"})}function changeTooltipMessage(e,t){e.setAttribute("aria-label",t)}function getUriOcticonClippy(e,t){var o;if("auto"===e){var n=document.createElement("a");document.body.appendChild(n),o=window.getComputedStyle(n).getPropertyValue("color"),document.body.removeChild(n)}else o=e;var l='<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="'+o+'" opacity="'+t+'"><path d="m2 13h4v1h-4v-1zm5-6h-5v1h5v-1zm2 3v-2l-3 3 3 3v-2h5v-2h-5zm-4.5-1h-2.5v1h2.5v-1zm-2.5 3h2.5v-1h-2.5v1zm9 1h1v2c-0.02 0.28-0.11 0.52-0.3 0.7s-0.42 0.28-0.7 0.3h-10c-0.55 0-1-0.45-1-1v-11c0-0.55 0.45-1 1-1h3c0-1.11 0.89-2 2-2s2 0.89 2 2h3c0.55 0 1 0.45 1 1v5h-1v-3h-10v9h10v-2zm-9-8h8c0-0.55-0.45-1-1-1h-1c-0.55 0-1-0.45-1-1s-0.45-1-1-1-1 0.45-1 1-0.45 1-1 1h-1c-0.55 0-1 0.45-1 1z"/></g></g></svg>';return"data:image/svg+xml;base64,"+window.btoa(l)}function initKlippy(t,o,n,l,i,a){document.addEventListener("DOMContentLoaded",function(){for(var r=getUriOcticonClippy(n,l),c="<button type='button' class='btn-klippy tooltipped tooltipped-no-delay' aria-label='"+i+"' onfocusout='changeTooltipMessage(this,&quot;"+i+"&quot;)' data-clipboard-klippy><div><img class='octicon' src='"+r+"' alt='Copy'></div></button>",d=document.querySelectorAll(".klippy > code"),p=0;p<d.length;p+=1)d.item(p).insertAdjacentHTML("beforebegin",c);var s=document.getElementsByClassName("btn-klippy");Array.prototype.map.call(s,function(e){var n=e.parentElement,l=window.getComputedStyle(n).getPropertyValue("padding-"+t),i=e.querySelector(".octicon");i.style.width=l,i.style.verticalAlign=o,"right"===t?(e.style.right="0",e.className+=" tooltipped-w"):(e.style.left="0",e.className+=" tooltipped-e"),"bottom"===o?e.style.bottom="0":e.style.top="0"});var u=new Clipboard("[data-clipboard-klippy]",{text:function(e){return e.parentNode.querySelector("code").textContent}});u.on("success",function(e){changeTooltipMessage(e.trigger,a),e.clearSelection()}),u.on("error",function(){changeTooltipMessage(e.trigger,"Press Ctrl+C or Command+C to copy")})})}function addKlippy(e,t,o,n,l,i){Clipboard.isSupported()&&initKlippy(e,t,o,n,l,i)}
