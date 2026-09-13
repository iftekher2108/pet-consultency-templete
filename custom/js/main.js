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

    $('.gallery-extra .gallery-item').appendTo($('.gallery-grid').first());
    $('.gallery-extra').remove();

    var extraGalleryItems = [
        ['care', 'image/health-care-3.png', 'Comfort first', 'Gentle support every day'],
        ['happy', 'image/pet-dog-1.png', 'New friendships', 'Good care, happy homes'],
        ['care', 'image/recent-post-1.png', 'Care in motion', 'Little routines matter'],
        ['happy', 'image/recent-post-2.png', 'Bright moments', 'A little joy goes far']
    ];
    $.each(extraGalleryItems, function (_, item) {
        $('.gallery-grid').first().append('<button class="gallery-item" data-category="' + item[0] + '" data-image="' + item[1] + '" aria-label="Open ' + item[2] + ' photo"><img src="' + item[1] + '" alt="' + item[2] + '"><span class="gallery-caption"><strong>' + item[2] + '</strong><span>' + item[3] + '</span></span></button>');
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