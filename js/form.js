var selector = document.querySelector("input[type='tel']");
var im = Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate(".form", {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30,
        },
        phone: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                console.log(phone);
                return Number(phone) && phone.length === 10
            }
        },
    },
    messages: {
        name: {
            required: "Недопустимый формат",
            minLength: "Недопустимый формат",
            maxLength: "Недопустимый формат",
        },
        phone: {
            required: "Недопустимый формат",
            function: "Недопустимый формат"
        },
    }
});