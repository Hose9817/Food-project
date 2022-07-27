function modal() {
    //Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');


    // btnOpenModal[0].addEventListener('click', openModal);
    // btnOpenModal[1].addEventListener('click', openModal);

    modalTrigger.forEach(el => {
        el.addEventListener('click', openModal);
    });



    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }

    });

    function openModal() {
        // modal.style.display = 'block';

        modal.classList.add('show');
        modal.classList.remove('hide');

        // modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function closeModal() {
        // modal.style.display = 'none';

        modal.classList.add('hide');
        modal.classList.remove('show');

        // modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    const modalTimerId = setTimeout(openModal, 300000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);


};

module.exports = modal;