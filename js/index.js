const content_hov = document.querySelector('.contents_hov');
const service_hov = document.querySelector('.service_hov');
const contents = document.querySelector('#contents');
const service = document.querySelector('#service');
const hamburger = document.querySelector('.hamburger');
const nav1 = document.querySelector('#nav1');

if(window.innerWidth < 768) {
    service.className = 'm_service_box';
    nav1.className = 'd-none';
} else {
    service.className = 'd-none';
}

window.addEventListener('resize', function () {
        if(window.innerWidth < 768) service.className = 'm_service_box';
        else service.className = 'd-none';

        content_hov.addEventListener('mouseenter', function () {
            if(window.innerWidth >=768) {
                service.className = 'd-none';
                contents.className = 'contents_box';
            }
        });

        service_hov.addEventListener('mouseenter', function () {
            if(window.innerWidth >= 768) {
                contents.className = 'd-none';
                service.className = 'service_box';
            }
        });

        contents.addEventListener('mouseleave', function () {
            contents.className = "d-none";
        });

        service.addEventListener('mouseleave', function () {
            if (window.innerWidth >= 768) service.className = "d-none";
        });
});

