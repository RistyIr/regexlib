function regexlib(input) {
    var validation;
    var divMessageReturn = input.nextElementSibling; // Sélectionne le div .invalid-feedback juste après l'input

    // Vérification des champs en fonction de leur nom
    switch (input.name) {
        case "name":
        case "lastname":
        case "firstname":
            validation = /^[A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ]+(?:[-\s][A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ]+)*$/;
            if (!validation.test(input.value)) {
                input.classList.add("is-invalid");
                divMessageReturn.textContent = "Format invalide.";
            } else {
                input.classList.remove("is-invalid");
                divMessageReturn.textContent = "";
            }
            break;

        case "email":
            validation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!validation.test(input.value)) {
                input.classList.add("is-invalid");
                divMessageReturn.textContent = "Le format de l'email est invalide.";
            } else {
                input.classList.remove("is-invalid");
                divMessageReturn.textContent = "";
            }
            break;

        case "password":
            validation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!validation.test(input.value)) {
                input.classList.add("is-invalid");
                divMessageReturn.textContent = "Le mot de passe doit contenir au moins 8 caractères, incluant une majuscule, une minuscule, un chiffre, et un caractère spécial.";
            } else {
                input.classList.remove("is-invalid");
                divMessageReturn.textContent = "";
            }
            break;

        case "phoneNumber":
            validation = /^(?:\+?(\d{1,3})[-.\s]?)?((\d{2}|\d{3}))?[-.\s]?\d{2}[-.\s]?\d{2}[-.\s]?\d{2}[-.\s]?\d{2}$/;
            if (!validation.test(input.value)) {
                input.classList.add("is-invalid");
                divMessageReturn.textContent = "Format invalide.";
            } else {
                input.classList.remove("is-invalid");
                divMessageReturn.textContent = "";
            }
            break;
    }
}

document.querySelectorAll('.form-with-regexlib').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputFormCible = form.querySelectorAll('input[name]');
        inputFormCible.forEach(input => regexlib(input));
    });
});
