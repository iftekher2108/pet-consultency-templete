$(function () {
    $('.date').text(new Date().getFullYear());

    window.setTimeout(function () {
        $('#loader').css({ opacity: 0, visibility: 'hidden' });
    }, 350);

    if (window.AOS) {
        AOS.init({ offset: 90, duration: 700, easing: 'ease-out-cubic', once: true });
    }

    $('.navbar-nav .nav-link, .navbar-nav .nav-cta').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    $('.filter-btn').on('click', function () {
        var filter = $(this).data('filter');
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        $('.gallery-item').each(function () {
            var visible = filter === 'all' || $(this).data('category') === filter;
            $(this).toggle(visible);
        });
    });

    $('.gallery-item').on('click', function () {
        $('#lightbox img').attr('src', $(this).data('image'));
        $('#lightbox').addClass('open');
    });

    $('.lightbox, .lightbox-close').on('click', function (event) {
        if (event.target === this || $(event.target).closest('.lightbox-close').length) {
            $('#lightbox').removeClass('open');
        }
    });

    $(document).on('keydown', function (event) {
        if (event.key === 'Escape') {
            $('#lightbox').removeClass('open');
        }
    });

    $('#contactForm').on('submit', function (event) {
        event.preventDefault();
        $('#formSuccess').addClass('visible');
        this.reset();
    });
});