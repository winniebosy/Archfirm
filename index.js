let menubtn = document.getElementById('toggle')
let menuNav = document.querySelector('.nav-menu');

//opens and closes menu
function openMenu() {
    menuNav.classList.toggle("hidden");
    menubtn.setAttribute('aria-expanded', true);
}

//event listener
menubtn.addEventListener('click', openMenu);


//let li = document.querySelector('.nav-list-item-two');












function trapFocus() {

    /* FOCUS TRAP METHOD  */
    //select all the elements that need to be focused
    let focusElements = document.querySelectorAll('button[id*="toggle"], a[class*="nav-list-link"');
    console.log(focusElements);
    //select the first element to be focused
    let firstFocusElement = focusElements[0];
    //last element to be focused
    let lastFocusElement = focusElements[focusElements.length - 1];

    //loop through the node list
    focusElements.forEach(focusElement => {
        //listen to the keydown event in each node
        focusElement.addEventListener('keydown', function(e) {
            let code = e.key;
            if (!code) {
                return;
            }
            if (e.shiftKey) /* shift + tab */ {
                if (document.activeElement === firstFocusElement) {
                    lastFocusElement.focus();
                    e.preventDefault();
                    console.log('focused on first last element');


                }
            } else {
                if (document.activeElement === lastFocusElement) {
                    firstFocusElement.focus();
                    e.preventDefault();
                    console.log('focused on first element');

                }

            }





        });
    });

}

trapFocus();









// query all elements that need to be focused


// li[class*="nav-list-item"');


// select the first element to be focused;
//let firstFocusElement = focusElements[0];
//last element to be focused
//let lastFocusElement = focusElements[focusElements - 1];
//listen to keydown event

//let KEYCODE_TAB = 9;

/* document.addEventListener('keydown', function(e) {

   let isTabPressed = (e.key === 'Tab' || e.key === KEYCODE_TAB);

   if (!isTabPressed) {
       return;
   }
   if (e.shiftKey) //shift + tab 
{
    if (document.activeElement === firstFocusElement) {
        lastFocusElement.focus();
        e.preventDefault();
    } else // using tab {
        if (document.activeElement === lastFocusElement) {
            firstFocusElement.focus();
            e, preventDefault();

        }
    }


}

}); */