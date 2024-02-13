import{f as y,g,r as v,s as B,a as $,m as A}from"./assets/quot-19c3a191.js";import{i as w}from"./assets/vendor-85e7f25d.js";const H=document.querySelector(".btn-wrapper"),j=document.querySelectorAll(".exercises-btn-filter"),d=document.querySelector(".exercises-form"),o=document.querySelector(".exercises-list"),i=document.querySelector(".exercises-pagination");let E=document.querySelector(".span");const L=document.querySelector(".second-span"),C=document.querySelector(".exercises-header");let p="Muscles",q=0;y(p).then(({data:{results:n,totalPages:t,page:e}})=>{j[0].classList.add("is-active"),o.insertAdjacentHTML("beforeend",h(n)),k(t,e)});H.addEventListener("click",P);function P(n){E.classList.add("visually-hidden");const t=n.target;if(t.nodeName!=="BUTTON")return;const e=document.querySelector(".is-active");e&&e.classList.remove("is-active"),innerWidth>=768&&innerWidth<1440&&(C.style.marginBottom="32px"),t.classList.add("is-active"),p=t.textContent,o.addEventListener("click",x),y(p).then(({data:{results:r,totalPages:s,page:a}})=>{o.innerHTML="",o.insertAdjacentHTML("beforeend",h(r)),k(s,a),d.classList.add("visually-hidden")})}o.addEventListener("click",x);function x(n){if(n.target.nodeName!="UL"){let t=n.target.closest("li").dataset.name,e=n.target.closest("li").dataset.filter;if(e==="bodyparts"&&(e="bodypart"),n.target.nodeName==="UL")return;d.classList.remove("visually-hidden"),E.classList.remove("visually-hidden"),L.textContent=t,o.innerHTML="",i.innerHTML="",g(e,t).then(({data:{results:r,totalPages:s,page:a}})=>{o.insertAdjacentHTML("beforeend",S(r)),document.querySelectorAll(".workout-start-button").forEach(l=>l.addEventListener("click",()=>{v(l.dataset.id)})),k(s,a),i.removeEventListener("click",M),i.addEventListener("click",F),q=s,i.firstChild.classList.add("active-pag-btn"),o.removeEventListener("click",x)}),innerWidth>=768&&innerWidth<1440&&(C.style.marginBottom="55px")}}function F(n){let t=n.target.textContent;if(n.target.nodeName!=="BUTTON")return;const e=document.querySelector(".active-pag-btn");e&&e.classList.remove("active-pag-btn"),n.target.classList.add("active-pag-btn");const r=d.querySelector("input").value.trim();N(q,t),g(p.toLowerCase(),L.textContent,t,r).then(s=>{o.innerHTML="",o.insertAdjacentHTML("beforeend",S(s.data.results)),document.querySelectorAll(".workout-start-button").forEach(c=>c.addEventListener("click",()=>{v(c.dataset.id)}))})}function M(n){let t=n.target.textContent;if(n.target.nodeName!=="BUTTON")return;const e=document.querySelector(".active-pag-btn");e&&e.classList.remove("active-pag-btn"),n.target.classList.add("active-pag-btn"),y(p,t).then(r=>{o.innerHTML="",o.insertAdjacentHTML("beforeend",h(r.data.results))})}function h(n){return i.addEventListener("click",M),n.sort((t,e)=>t.name.localeCompare(e.name)).map(({name:t,filter:e,imgUrl:r})=>`<li
          class="exercises-item"
          style="
          background:linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${r});
          background-size: cover;
  background-repeat: no-repeat;
          "
          data-name = "${t}"
          data-filter = "${e.toLowerCase().split(" ").join("")}"
        >

          <p class="exercises-name" >${t}</p>
          <p class="exercises-text" >${e}</p>

        </li>`).join("")}function N(n,t){let r=Math.max(1,t-Math.floor(2.5)),s=Math.min(r+5-1,n);s-r+1<5&&(r=Math.max(1,s-5+1));const a=Array.from({length:s-r+1},(c,l)=>{const f=r+l;return f===Number(t)?`<button class="exercises-pagination-btn active-pag-btn" type="button">${f}</button>`:`<button class="exercises-pagination-btn" type="button">${f}</button>`}).join("");i.innerHTML="",i.insertAdjacentHTML("beforeend",a)}function k(n,t){let e="";n>5?e=[t-2,t-1,t,t+1,t+2].fill(t,3,4).map((s,a)=>`<button class = "exercises-pagination-btn" type = "button">${a+1}</button>`).join(""):e=Array(n).fill().map((s,a)=>`<button class = "exercises-pagination-btn" type = "button">${a+1}</button>`).join(""),i.innerHTML="",i.insertAdjacentHTML("beforeend",e),Array.from(i.querySelectorAll(".exercises-pagination-btn")).some(s=>s.classList.contains("active-pag-btn"))||i.firstChild.classList.add("active-pag-btn")}function S(n){return n.map(({name:t,rating:e,burnedCalories:r,target:s,bodyPart:a,time:c,_id:l})=>`<li
          class="workout-item">
          <div class="workout-card">
      <div class="workout-header">
          <div class="workout-header-wrapper">
            <p class="workout-title">workout</p>
            <p class="workout-rating">${e}</p>
            <img
            class="workout-rating-icon"
              src="${B}" />
          </div>
          <button
            class="workout-start-button"
            data-id = "${l}"
            type="button"
          >
            Start
             <img
              class="workout-icon-start"
             src="${$}" />
          </button>
        </div>
        <div class="workout-name-wrapper">
           <img
            class="workout-icon-man"
            src="${A}" />
          <p class="workout-name">${t}</p>
        </div>

        <div class="workout-inform-wrapper">

        <p class="workout-calories">
            Burned calories:
            <span class="number-calories">${r} / ${c} min</span>
          </p>

        <p class="workout-body-part">
            Body part:
            <span class="body-part">${a}</span>
          </p>

          <p class="workout-target">
            Target: <span class="target">${s}</span>
          </p>

          </div>
          </div>
</li>
      `).join("")}function I(n,t,e,r){g(n,t,e,r).then(s=>{String(s.data.results)===""?(o.innerHTML=`
      <li class="workout-item-no-results">
  <p class="workout-no-results">
    Unfortunately, <span class="workout-no-results-span">no results</span> were found. You may want to consider other
    search options to find the exercise you are looking
    for. Our range is wide and you have the opportunity to find more options that suit your needs.
  </p>
</li>`,i.classList.add("visually-hidden")):(i.classList.remove("visually-hidden"),o.innerHTML="",o.insertAdjacentHTML("beforeend",S(s.data.results)),o.addEventListener("click",a=>{a.target.closest(".workout-start-button")&&v(a.target.closest(".workout-start-button").dataset.id)}))})}function Y(n){n.preventDefault();let t=document.querySelector(".exercises-btn-filter.is-active").textContent.toLocaleLowerCase();t==="body parts"&&(t="bodypart");const e=document.querySelector(".exercises-pagination-btn.active-pag-btn").textContent,r=d.querySelector("input").value.trim();I(t,L.textContent.toLowerCase(),e,r),d.reset()}d.addEventListener("submit",Y);const m=document.querySelector(".footer-form"),D=document.querySelector(".footer-form-input"),U=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;m.addEventListener("submit",async function(n){n.preventDefault();const t=D.value.trim();if(!U.test(t)){T(),m.reset();return}try{(await fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})})).ok?(m.reset(),W()):O()}catch{T()}finally{m.reset()}});function W(){w.info({title:"Info",position:"center",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."})}function T(){w.error({title:"Error",position:"center",message:"Sorry, there was an error sending your address. Please try again!"})}function O(){w.info({title:"Info",position:"center",message:"Its okay, you are already subscribed : ) "})}const u=document.querySelector(".scroll-container"),z=document.querySelector(".scroll-btn");addEventListener("scroll",b,{once:!0});z.addEventListener("click",_);function b(){window.scrollY>0?u.style.transform="translateY(0)":window.innerWidth<768?u.style.transform="translateY(60px)":u.style.transform="translateY(120px)"}function _(){window.scroll({top:0,behavior:"smooth"}),window.innerWidth<768?u.style.transform="translateY(60px)":u.style.transform="translateY(120px)",removeEventListener("scroll",b),setTimeout(()=>{addEventListener("scroll",b,{once:!0})},1e3)}
//# sourceMappingURL=commonHelpers3.js.map
