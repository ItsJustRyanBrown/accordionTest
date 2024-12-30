const htmlTag = document.querySelector("html");

htmlTag.classList.add("js");

const triggers = document.querySelectorAll(".accordion-trigger");

for (trigger of triggers){
    let triggerButton = document.createElement("button");
    let triggerHeader = document.createElement("h2");
    let headerContent = "Accordion Trigger";
    triggerButton.classList.add("accordion-trigger");
    triggerButton.setAttribute("aria-expanded", false);
    triggerButton.appendChild(triggerHeader);
    triggerHeader.innerHTML = headerContent;
    trigger.replaceWith(triggerButton);
}

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
