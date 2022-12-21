const accordionTrg = document.querySelectorAll('.accordion-trigger');

let i;

for (i = 0; i < accordionTrg.length; i++) {
    accordionTrg[i].addEventListener("click", function () {
        const accordionItem = this.parentElement;
        accordionItem.classList.toggle('active');
        if (this.getAttribute('aria-expanded') === "false"){
            this.setAttribute('aria-expanded', "true");
        }else{
            this.setAttribute('aria-expanded', "false");
        }
    });
};
