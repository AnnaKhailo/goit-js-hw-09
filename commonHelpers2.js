import"./assets/styles-e392f41f.js";const a="feedback-form-state",e=document.querySelector(".feedback-form");e.addEventListener("input",m);function m(){const t=e.elements.email.value.trim(),s=e.elements.message.value.trim(),l=JSON.stringify({email:t,message:s});localStorage.setItem(a,l)}const n=localStorage.getItem(a)??"";try{const t=JSON.parse(n);e.elements.message.value=t.message,e.elements.email.value=t.email}catch{console.log("No saved data")}e.addEventListener("submit",o);function o(t){if(t.preventDefault(),localStorage.removeItem(a),!e.elements.message.value||!e.elements.email.value)return alert("All form fields must be filled in");console.log({email:e.elements.email.value.trim(),message:e.elements.message.value.trim()}),e.reset()}
//# sourceMappingURL=commonHelpers2.js.map
