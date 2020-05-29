$(document).ready(function () {

    $("body, html").click(function () {
        $(".dropdown").removeClass('active');
    });

    //stopPropagation
    $(".dropdown, .popup").click( function (e) {
        e.stopPropagation();
    });

    //Select
    $(".select-item").click(function () {
        $(this).closest(".select").toggleClass('active');
        $(".select-drop").slideToggle(300);
    });

    $(".select-option").click(function () {
        let option = $(this).text();
        let optionLink = $(this).find("a").text();

        $(this).closest(".select").removeClass('active').find(".select-item span").text(option);
        $(this).closest(".select-lang").removeClass('active').find(".select-item span").text(optionLink);

        $(this).addClass('active').siblings().removeClass('active');
        $(this).closest(".select").find(".select-drop").slideUp(300);
    });

    //choice number of guests
    $(".input-visitor, .icon").click( function (e) {
        e.stopPropagation();
        $(".dropdown").addClass('active');
    });

    $(".count-minus").click(function () {
        let $input = $(this).parent().find("input");
        let count = parseInt($input.val() - 1);

        //adults
        let $inputChildren= $(this).parent().find(".count__adults");
        let guestAdult  = count < 1 ? 1 : count;
        $inputChildren.val(guestAdult);

        //children
        let $inputAdults = $(this).parent().find(".count__children");
        let guestChildren  = count < 0 ? 0 : count;
        $inputAdults.val(guestChildren);

        $input.change();
        return false;
    });

    $('.count-plus').click(function () {
        let $input = $(this).parent().find('.input-count');
        $input.val(parseInt($input.val()) + 1);
        let count = parseInt($input.val());
        count = count >= 12 ? 12 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $(".input-count").change( function () {
        let a = parseInt($(".count__adults").val());
        let b = parseInt($(".count__children").val());
        let total = a+b;

        if (total == 1 || total >= 5){
            $(".input-visitor").val(a+b + " человек");
        } else {
            $(".input-visitor").val(a+b + " человекa");
        }
    });

    //Slider (page MAIN)
    $(".row-slider").slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        variableWidth: true,
        prevArrow:" <button type=\"button\" class=\"btn-arrow btn-prev\"></button>",
        nextArrow:"  <button type=\"button\" class=\"btn-arrow btn-next\"></button>",
        responsive: [
            {
                breakpoint: 1179,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            },

        ]
    });

    //Slider in cards
    $(".card-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
    });

    // POPUPS

    $(".header__selects-item .link, .footer__select").click(function (e) {
        e.preventDefault();
        $(".popup__lang-curr").addClass('active');
        let popup =  $(".popup__lang-curr .popup");

        if (popup.height() >= $(window).height()){
            popup.addClass("positionTop");
        }
    });

    $(".btn-filter").click(function (e) {
        e.preventDefault();
        $(".popup__additional-filters").addClass('active');
    });
    $(".close, .popups").click(function (e) {
        e.preventDefault();
        $(".popups").removeClass('active');
    });

    //show only 6 apartments in the desktop and 3 in the mobile. The rest are hidden
    function hideCards() {
        let lengthCard = $(".offers-cards .card").length;
        if (window.matchMedia("(max-width: 767px)").matches) {
            if (lengthCard > 3) {
                $(".offers-cards .card").hide();
                for (let i = 1; i <= 3; i++) {
                    $(".offers-cards .card:nth-child(" + i + ")").show();
                }
            }
        } else {
            if (lengthCard > 6) {
                $(".offers-cards .card").hide();
                for (let i = 1; i <= 6; i++) {
                    $(".offers-cards .card:nth-child(" + i + ")").show();
                }
            }
        }
    }

    hideCards();

    //show all apartments
    $("#more-apartaments").click(function (e) {
        e.preventDefault();
        $(".offers-cards .card").show();
    });

    //selected option in sorting button (page CATALOG)
    $(".sorting-option").click(function () {
        let option = $(this).text();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).closest(".sorting").find("button span").text(option);
    });


    // card layout (page CATALOG)

    if (window.matchMedia("(min-width: 1179px)").matches) {
        $(".catalog-list").find("li").removeClass('card').addClass('card-item');
    } else {
        $(".catalog-list").find("li").removeClass('card-item').addClass('card');
    }

    //tabs
    $(".tab").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(".forms-content form").eq(index).addClass('active').siblings().removeClass('active');
    });

    //after selected country - focus on next input
    $(".easy-autocomplete-container").click( function () {
        console.log("22");
        $("input.phone").focus();
    });



    // $.getJSON( "city.json", function() {
    //   mask.getValue
    // });


});


$(document).ready(function () {
    //Mask
    $(":input[data-inputmask-alias]").inputmask();
});
$(document).ready(function () {

    validate
    $(".signup, .signin").validate({
        tooltip: {
            hide: false
        },
        rules: {
            firstname: "required",
            lastname: "required",
            password: {
                required: true,
                minlength: 6
            },
            confirm_password: {
                required: true,
                minlength: 6,
                equalTo: ".password"
            },
            email: {
                required: true,
                email: true
            },
            // phone: {
            //     required: true,
            // }
        },

        messages: {
            firstname: "Пожалуйста, введите ваше имя",
            lastname: "Пожалуйста, введите свою фамилию",
            password: {
                required: "Пожалуйста, введите пароль.",
                minlength: "Длина пароля должна быть не менее 6 символов."
            },
            confirm_password: {
                required: "Пожалуйста, введите пароль.",
                minlength: "Длина пароля должна быть не менее 6 символов.",
                equalTo: "Пожалуйста, введите тот же пароль, что и выше."
            },
            email: "Пожалуйста, введите действительный адрес электронной почты",
        }
    });

});
$(document).ready(function () {
    //masks
    // $(".phone").inputMasks(optionsMask);
    // let optionsMask = {
    //     url: "city.json",
    //     getValue: "mask"
    // };

    //Autocomplete
    let options = {
        url: "city.json",
        getValue: "cityname",
        list: {
            maxNumberOfElements: 4,
            match: {
                enabled: true
            }
        }
    };
    let options2 = {
        url: "city.json",
        getValue: "codecountry",
        list: {
            maxNumberOfElements: 4,
            match: {
                enabled: true
            }
        }
    };

    $("#js-easyAutocomplete").easyAutocomplete(options);
    $("#js-easyAutocomplete2").easyAutocomplete(options2);




});
//daterangepicker
$(document).ready(function () {

    $(function() {
        $('input[name="daterange"]').dateRangePicker({
            opens: 'left',
            autoUpdateInput: true,
            startOfWeek: 'monday',
            singleMonth: true,
            showShortcuts: false,
            // showTopbar: false,
            autoApply: false,
            locale: {
                "format": "DD.MM.YYYY",
            }
        }, function(start, end, label) {
            console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD'));
        });
    });
});


