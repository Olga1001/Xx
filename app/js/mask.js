
$(document).ready(function () {
    //Mask
    $("input.inputmask-date").inputmask({
            alias: "dd/mm/yyyy",
            val: true
        }
    );
    $("input[name='username']").inputmask({
        regex: String.raw`\D*`,
    });

    $("input[name='email']").inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        greedy: false,
        onBeforePaste: function (pastedValue, opts) {
            pastedValue = pastedValue.toLowerCase();
            return pastedValue.replace("mailto:", "");
        },
        definitions: {
            '*': {
                validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                casing: "lower"
            }
        }
    });
    $("input.input-card").inputmask("9999 - 9999 - 9999 - 9999");
    $("input.input-validity").inputmask( "99 / 99");
    $("input.input-cvv").inputmask("999");

});