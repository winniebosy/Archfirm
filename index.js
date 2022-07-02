let menubtn = document.getElementById('toggle')
let menuNav = document.querySelector('.nav-menu');


//opens and closes menu
menubtn.addEventListener('click', function(e) {
    menuNav.classList.toggle("hidden");
    menubtn.setAttribute('aria-expanded', true);

    //closes menu when user clicks outside the menu.
    document.addEventListener('click', function(e) {
        let inside = (e.target.closest('div'));
        if (!inside) {
            menuNav.classList.add('hidden');
        }
    });
});

//closes the menu when user presses the escape key
window.addEventListener('keydown', function(e) {
    if (e.key === 27 || e.key === 'Escape') {
        menuNav.classList.add('hidden');
    }
})


//FOCUS TRAPPING KEYBOARD
function trapFocus() {
    /* FOCUS TRAP METHOD  */
    //select all the elements that need to be focused
    let focusElements = document.querySelectorAll('button[id*="toggle"], a[class*="nav-list-link"');
    //console.log(focusElements);
    //select the first element to be focused
    let firstFocusElement = focusElements[0];
    //last element to be focused
    let lastFocusElement = focusElements[focusElements.length - 1];

    //loop through the node list
    focusElements.forEach(focusElement => {
        //listen to the keydown event in each node
        focusElement.addEventListener('keydown', function(e) {

            if (e.shiftKey) /* shift + tab */ {
                // focuses on last element
                if (document.activeElement === firstFocusElement) {
                    lastFocusElement.focus();
                    e.preventDefault();

                }
            } else { /* if tab key is selected */
                if (document.activeElement === lastFocusElement) {
                    // focuses on last element
                    firstFocusElement.focus();
                    e.preventDefault();


                }

            }

        });
    });

}

trapFocus();