(()=>{"use strict";(()=>{const t=document.createElement("nav");t.classList.add("navbar");const e=document.createElement("ul");e.classList.add("navbar-nav"),e.innerHTML='<li data-nav-item="#home" id="home" class="active"><button class="nav-item" >Home</button></li>\n\t\t\t\t<li data-nav-item="#menu" id="menu" ><button class="nav-item" >Menu</button></li>\n\t\t\t\t<li data-nav-item="#contact" id="contact" ><button class="nav-item" >Contact</button></li>',t.append(e),document.getElementsByTagName("body")[0].prepend(t)})(),(()=>{const t=document.createElement("h1"),e=document.createElement("div"),n=document.createElement("div"),a=document.createElement("h2"),d=document.createElement("p"),r=document.querySelector("[data-class-content]"),c=document.createElement("div");c.classList.add("home-display"),c.setAttribute("data-home-display",""),t.classList.add("landing-title"),t.innerText="LKO Coffee Co-Op",c.append(t),e.classList.add("informational-box"),c.append(e),n.classList.add("blurb"),e.append(n),a.classList.add("blurb-title"),a.innerText="Great Coffee at a Great Price",n.append(a),d.classList.add("blurb-text"),d.innerHTML="Here at LKO Coffee Co-Op, we strive to bring you great coffee at a price, that is fair to you, our baristas, and the people who grow the coffee we serve here. From the farm where the beans are grown, to the cappuccino we serve you at our bar, you can rest easy knowing that no humans or animals were exploited in the making of your delicious beverage. <br><br>See you here! &#9773;",n.append(d),r.append(c)})(),(()=>{const t=document.querySelector("[data-class-content]"),e=document.createElement("div"),n=document.createElement("h1"),a=document.createElement("div");e.classList.add("display-menu"),e.setAttribute("data-display-menu",""),n.classList.add("landing-title"),a.classList.add("menu"),e.append(n),n.innerText="Menu",e.append(a),t.append(e),a.innerHTML='<table>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Espresso(Single)</td>\n\t\t\t\t\t\t\t<td>$1</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Espresso(Double)</td>\n\t\t\t\t\t\t\t<td>$2</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Americano</td>\n\t\t\t\t\t\t\t<td>$2.50</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Cappuccino</td>\n\t\t\t\t\t\t\t<td>$4.25</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Cafe Latte</td>\n\t\t\t\t\t\t\t<td>$5</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Flat White</td>\n\t\t\t\t\t\t\t<td>$4</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Cortado</td>\n\t\t\t\t\t\t\t<td>$2.50</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Macchiato</td>\n\t\t\t\t\t\t\t<td>$1.50</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class="coffee-menu"></tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Batch Brew</td>\n\t\t\t\t\t\t\t<td>$1.50</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>V60</td>\n\t\t\t\t\t\t\t<td>$5</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Chemex</td>\n\t\t\t\t\t\t\t<td>$7</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>French Press</td>\n\t\t\t\t\t\t\t<td>$3</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Aeropress</td>\n\t\t\t\t\t\t\t<td>$3.50</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Siphon</td>\n\t\t\t\t\t\t\t<td>$8</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Cold Brew</td>\n\t\t\t\t\t\t\t<td>$5</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Japanese Iced</td>\n\t\t\t\t\t\t\t<td>$5</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>'})(),(()=>{const t=document.querySelector("[data-class-content]"),e=document.createElement("div");e.classList.add("contact-display"),e.setAttribute("data-display-contact","");const n=document.createElement("h1");n.classList.add("landing-title"),n.innerText="Contact";const a=document.createElement("img");a.src="../images/espresso.jpg",e.append(n),e.append(a);const d=document.createElement("div");d.classList.add("contact-information"),d.innerHTML='<p class="contact-paragraph">We are open 7 days a week, from 6am to 10pm.</p><br><p class="contact-paragraph">Address: 12345 Fake Rd, Fakecity, Fakestate 00000 </p><br><p class="contact-paragraph">Phone Number: (123)456-7899</p> ',e.append(d),t.append(e)})(),(()=>{const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("p");e.innerHTML='Created by <a href="https://github.com/Lucas-ODonnell">Lucas O\'Donnell</a> &copy',t.append(e),document.getElementsByTagName("body")[0].append(t)})(),(()=>{const t=document.querySelector("[data-home-display]"),e=document.querySelector("[data-display-menu]"),n=document.querySelector("[data-display-contact]");let a=t;a.classList.add("current-menu"),document.querySelectorAll("[data-nav-item]").forEach((d=>{d.addEventListener("click",(()=>{var r;r=document.querySelector(d.dataset.navItem),a.classList.remove("current-menu"),"home"===r.id?(t.classList.add("current-menu"),a=t):"menu"===r.id?(e.classList.add("current-menu"),a=e):"contact"===r.id&&(n.classList.add("current-menu"),a=n)}))}))})()})();