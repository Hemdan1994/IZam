const menuToggle=document.getElementById("menuToggle"),sidebar=document.getElementById("sidebar"),closeBtn=document.getElementById("menuCloser");menuToggle.addEventListener("click",(()=>{sidebar.classList.toggle("show")})),closeBtn.addEventListener("click",(()=>{sidebar.classList.remove("show")})),document.querySelectorAll(".like-icon").forEach((function(e){e.addEventListener("click",(function(){this.classList.toggle("liked")}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("customDropdownMenuButton"),o=document.querySelectorAll(".custom-dropdown .dropdown-item"),n=document.getElementById("dropdownArrow");o.forEach((o=>{o.addEventListener("click",(function(o){o.preventDefault();const t=this.getAttribute("data-value");e.innerHTML=`<span class="sort-label">Sorting by:</span> <span class="active-option">${t}</span> <img src="./assets/images/down-arrow.svg" alt="Dropdown Arrow" class="dropdown-arrow" id="dropdownArrow">`;document.querySelector(".custom-dropdown .dropdown-menu").classList.remove("show"),e.setAttribute("aria-expanded","false"),n.classList.remove("rotate")}))})),e.addEventListener("click",(function(){document.querySelector(".custom-dropdown .dropdown-menu").classList.contains("show")?(e.style.backgroundColor="",n.classList.remove("rotate")):(e.style.backgroundColor="white",n.classList.add("rotate"))})),document.addEventListener("click",(function(o){const t=document.querySelector(".custom-dropdown .dropdown-menu");e.contains(o.target)||t.contains(o.target)||(e.style.backgroundColor="",t.classList.remove("show"),n.classList.remove("rotate"))}))})),$(document).ready((function(){let e=!1,o={"#eye-open-icon":"open","#nested-eye-open-icon-1":"open","#nested-eye-open-icon-2":"open","#nested-eye-open-icon-3":"open"};function n(e,o,n){"open"===n?($(e).show(),$(o).hide()):($(e).hide(),$(o).show())}$("#correct-icon").hide(),$("#cancel-icon").hide(),$("#edit-icon").hide(),$("#eye-open-icon").hide(),$("#eye-close-icon").hide(),$(".dragger").hide(),$(".accordion-button").removeClass("no-arrow"),$("#toggle-menu-item").on("click",(function(){$(this).hide(),$("#correct-icon").show(),$("#cancel-icon").show(),$("#edit-icon").show(),n("#eye-open-icon","#eye-close-icon",o["#eye-open-icon"]),$("#nested-edit-icon, #nested-edit-icon-1, #nested-edit-icon-2, #nested-edit-icon-3").show(),n("#nested-eye-open-icon","#nested-eye-close-icon",o["#nested-eye-open-icon"]),n("#nested-eye-open-icon-1","#nested-eye-close-icon-1",o["#nested-eye-open-icon-1"]),n("#nested-eye-open-icon-2","#nested-eye-close-icon-2",o["#nested-eye-open-icon-2"]),n("#nested-eye-open-icon-3","#nested-eye-close-icon-3",o["#nested-eye-open-icon-3"]),$(".dragger").show(),$(".accordion-button").attr("disabled",!0),$(".accordion-button").addClass("no-arrow"),e=!0})),$("#correct-icon, #cancel-icon").on("click",(function(){$("#toggle-menu-item").show(),$("#correct-icon").hide(),$("#cancel-icon").hide(),$("#edit-icon").hide(),$("#eye-open-icon").hide(),$("#eye-close-icon").hide(),$("#nested-edit-icon, #nested-edit-icon-1, #nested-edit-icon-2, #nested-edit-icon-3, #nested-eye-open-icon, #nested-eye-close-icon, #nested-eye-open-icon-1, #nested-eye-close-icon-1, #nested-eye-open-icon-2, #nested-eye-close-icon-2, #nested-eye-open-icon-3, #nested-eye-close-icon-3").hide(),$(".dragger").hide(),$(".accordion-button").removeAttr("disabled"),$(".accordion-button").removeClass("no-arrow"),e=!1})),$(".pointer").on("click",(function(e){e.stopPropagation();const n=$(this);n.is("#eye-open-icon, #nested-eye-open-icon, #nested-eye-open-icon-1, #nested-eye-open-icon-2, #nested-eye-open-icon-3")?(n.hide(),n.siblings("#eye-close-icon, #nested-eye-close-icon, #nested-eye-close-icon-1, #nested-eye-close-icon-2, #nested-eye-close-icon-3").show(),o[`#${n.attr("id")}`]="closed"):n.is("#eye-close-icon, #nested-eye-close-icon, #nested-eye-close-icon-1, #nested-eye-close-icon-2, #nested-eye-close-icon-3")&&(n.hide(),n.siblings("#eye-open-icon, #nested-eye-open-icon, #nested-eye-open-icon-1, #nested-eye-open-icon-2, #nested-eye-open-icon-3").show(),o[`#${n.attr("id").replace("close","open")}`]="open"),n.is("#edit-icon, #nested-edit-icon, #nested-edit-icon-1, #nested-edit-icon-2, #nested-edit-icon-3")&&n.toggle()}))}));