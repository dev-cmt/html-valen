// Sticky header
document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});

// Sidebar functionality
document.addEventListener('DOMContentLoaded', function () {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebarClose = document.querySelector('.sidebar-close');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');

    sidebarToggle.addEventListener('click', function () {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    function closeSidebar() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    sidebarClose.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);
});

// category
document.addEventListener('DOMContentLoaded', function () {
    const categoryToggle = document.querySelector('.category-toggle');
    const categoryMenu = document.querySelector('.main-menu');
    const categoryOverlay = document.querySelector('.category-overlay');
    const categoryClose = document.querySelector('.category-close');

    function openSidebar() {
        categoryMenu.classList.add('active');
        categoryOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => categoryMenu.classList.add('active-show'), 10);
    }

    function closeSidebar() {
        categoryMenu.classList.remove('active-show');
        categoryOverlay.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => categoryMenu.classList.remove('active'), 400); // wait for slide out
    }

    categoryToggle.addEventListener('click', openSidebar);
    categoryClose.addEventListener('click', closeSidebar);
    categoryOverlay.addEventListener('click', closeSidebar);
});

// search
document.addEventListener('DOMContentLoaded', function () {
    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');

    searchToggle.addEventListener('click', function () {
        searchOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    searchClose.addEventListener('click', function () {
        searchOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    searchOverlay.addEventListener('click', function (e) {
        if (e.target === searchOverlay) {
            searchOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Initialize Swiper
var swiper = new Swiper(".myProductSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});