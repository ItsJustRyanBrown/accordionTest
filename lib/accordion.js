'use strict';

var accordionTrg = document.querySelectorAll('.accordion-trigger');

var i = void 0;

for (i = 0; i < accordionTrg.length; i++) {
    accordionTrg[i].addEventListener("click", function () {
        var accordionItem = this.parentElement;
        accordionItem.classList.toggle('active');
        if (this.getAttribute('aria-expanded') === "false") {
            this.setAttribute('aria-expanded', "true");
        } else {
            this.setAttribute('aria-expanded', "false");
        }
    });
};
