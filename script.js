let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
 
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
} 

const typed = new Typed('.multiple-texts', {
      strings: ['a Professor','an Associate Professor.', 'a Cyber Security.', 'an Education AI expert', 'a Researcher'],
      typeSpeed: 80,
      backspeed: 80,
      backdelay: 1200,
      loop: true,

 });

 const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const toast = document.getElementById('toast-success');

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    submitBtn.value = "Sending...";
    submitBtn.disabled = true;

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {

            /* show toast */
            toast.classList.add('show');

            /* clear form */
            form.reset();

            /* hide toast after 4 sec */
            setTimeout(() => {
                toast.classList.remove('show');
            }, 4000);

            /* anti fast-resubmit */
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.value = "Send Message";
            }, 8000);

        } else {
            alert("Something went wrong.");
            submitBtn.disabled = false;
        }

    } catch (error) {
        alert("Network error.");
        submitBtn.disabled = false;
    }
});