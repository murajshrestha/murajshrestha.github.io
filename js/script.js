function changeActive(navitem) {
    const cur = document.getElementById(navitem)
    const navLi = document.querySelectorAll('.nav-link');

    for (var i = 0; i < navLi.length; i++) {
        navLi[i].classList.remove('active');
    }
    // window.alert(navLi[0]);
    cur.classList.add('active'); 
    test = navitem;
};
