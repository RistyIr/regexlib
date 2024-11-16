function regexlib(input) {
    let isValid = true;
    let validation;
    let divMessageReturn = input.nextElementSibling;

    const errorMessages = {
        name: "Le nom doit commencer par une lettre majuscule et ne contenir que des caractères alphabétiques.",
        lastname: "Le nom de famille doit commencer par une lettre majuscule et ne contenir que des caractères alphabétiques.",
        firstname: "Le prénom doit commencer par une lettre majuscule et ne contenir que des caractères alphabétiques.",
        tutor: "Le nom du tuteur doit être au format valide.",
        age: "L'âge doit être compris entre 1 et 120.",
        major: "Vous devez avoir au moins 18 ans.",
        email: "L'adresse email doit être au format valide (ex : exemple@domaine.com).",
        password: "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.",
        phoneNumber: "Le numéro de téléphone doit être au format valide.",
        moreInfo: "Utilisez uniquement des caractères alphabétiques, des espaces et des tirets.",
        comments: "Les commentaires ne doivent contenir que du texte alphabétique.",
    };

    const regexPatterns = {
        name: /^[A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ]+(?:[-\s][A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ]+)*$/i,
        lastname: /^[A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ]+(?:[-\s][A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ]+)*$/i,
        firstname: /^[A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ]+(?:[-\s][A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ]+)*$/i,
        tutor: /^[A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ]+(?:[-\s][A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ]+)*$/i,
        age: /^(?:[1-9][0-9]?|1[01][0-9]|120)$/,
        major: /^(?:1[89]|[2-9][0-9]|1[01][0-9]|120)$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        phoneNumber: /^(?:\+?(\d{1,3})[-.\s]?)?((\d{2}|\d{3}))?[-.\s]?\d{2}[-.\s]?\d{2}[-.\s]?\d{2}[-.\s]?\d{2}$/,
        moreInfo: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
        comments: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s.,!?;:'"()\-]+$/,
    };

    validation = regexPatterns[input.name];
    const errorMessage = errorMessages[input.name];

    if (validation) {
        if (!validation.test(input.value)) {
            input.classList.add("is-invalid");
            divMessageReturn.textContent = errorMessage;
            isValid = false;
        } else {
            input.classList.remove("is-invalid");
            divMessageReturn.textContent = "";
        }
    }

    return isValid;
}

document.querySelectorAll('.form-with-regexlib').forEach(form => {
    form.addEventListener('submit', (e) => {
        const inputs = form.querySelectorAll('input[name], textarea[name]');
        let allValid = true;

        inputs.forEach(input => {
            const isFieldValid = regexlib(input);
            if (!isFieldValid) {
                allValid = false;
            }
        });

        if (!allValid) {
            e.preventDefault();
        } else {
            console.log("Formulaire valide, prêt à être soumis !");
        }
    });
});
