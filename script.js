const openNav = () => {
  const menuIcon = document.querySelector('.mobile-menu');
  const navItems = document.querySelector('.nav-items');

  menuIcon.addEventListener('click', () =>{
    console.log("Test");
    navItems.classList.toggle('nav-open');
  })
}

openNav();
