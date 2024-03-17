function navBar() {
    const btn = document.getElementById('icon');
    const icon = document.getElementById("menu-icon");
    const navList = document.querySelector('nav ul');
    const dropDownNav = document.querySelector('.dropdown a');
    const dropDownItem = document.querySelector('.dropdown-content');

    btn.addEventListener('click', () => {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");

        if (window.innerWidth <= 900) {
            if (navList.style.display === 'none' || navList.style.display === '') {
                navList.style.cssText = "display: flex; flex-direction: column;";
            } else {
                navList.style.display = 'none';
            }
        }
    }); 
    
    dropDownNav.addEventListener('click', () => {      
        if (dropDownItem.style.display === 'none' || dropDownItem.style.display === '') {
            dropDownItem.style.display = 'block';
        } else {
            dropDownItem.style.display = 'none';
        }
    });   
    
}

navBar();