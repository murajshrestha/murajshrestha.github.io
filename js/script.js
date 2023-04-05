// function changeActive(navitem) {
//     const cur = document.getElementById(navitem)
//     const navLi = document.querySelectorAll('.nav-link');

//     for (var i = 0; i < navLi.length; i++) {
//         navLi[i].classList.remove('active');
//     }
//     // window.alert(navLi[0]);
//     cur.classList.add('active'); 
//     test = navitem;
// };

(function(window, document, undefined) {
  
    window.onload = init;
  
    function init(){
        const menuToggle = document.getElementById('collapseNavbar')
        const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})

        menuToggle.addEventListener('show.bs.collapse', function () {
            window.addEventListener('click', () => { bsCollapse.hide() })     
        })
    }
  
  })(window, document, undefined);