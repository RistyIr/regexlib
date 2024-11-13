README - Regexlib
    DESCRIPTION
    Regexlib est une petite bibliothèque dynamique conçue pour valider automatiquement la conformité des valeurs saisies dans les formulaires d’un projet. Basée sur des expressions régulières, elle permet de vérifier les champs classiques comme les noms, prénoms, adresses email, mots de passe, et numéros de téléphone. Elle est particulièrement adaptée aux projets intégrant Bootstrap pour une mise en forme soignée des messages d’erreur.

    UTILISATION
    Pré-requis :
    Regexlib fonctionne uniquement avec Bootstrap, veuillez donc vous assurer de lier Bootstrap dans votre projet pour un affichage optimal des messages d'erreur et des indications visuelles.
    Ajouter le fichier regexlib.js à votre projet.

    Intégration :
        Dans votre code HTML, liez Bootstrap et regexlib.js.
        Ajoutez la classe form-with-regexlib aux formulaires que vous souhaitez valider avec regexlib.
        Exemple d'utilisation :
        HTML
            <form class="form-with-regexlib">
                <!-- Vos champs ici -->
            </form>
        Attributs name :
            Assurez-vous que les champs à valider utilisent les valeurs suivantes pour l'attribut name :
            name : Pour les noms complets.
            firstname : Pour les prénoms.
            lastname : Pour les noms de famille.
            email : Pour les adresses email.
            password : Pour les mots de passe.
            phoneNumber : Pour les numéros de téléphone.

            Exemple de formulaire :

            HTML
            <form class="form-with-regexlib">
                <div class="mb-3">
                    <label for="name" class="form-label">Nom</label>
                    <input type="text" class="form-control" name="name" id="name" placeholder="Nom">
                    <div class="invalid-feedback"></div>
                </div>
                <!-- Ajouter d'autres champs selon les besoins -->
                <button type="submit" class="btn btn-primary">Valider</button>
            </form>

    DISPONIBILITE
    Regexlib est pour l'instant disponible uniquement en français.
    CONTRIBUTION
    Tout le monde est libre d’apporter des modifications ou d’améliorer le code source de regexlib. Si vous souhaitez partager vos contributions, cela pourrait enrichir et améliorer cet outil.

    AVERTISSEMENT
    Regexlib est un outil mis à disposition librement, mais je décline toute responsabilité en cas de perte de données, de vol de données, ou de toute utilisation malveillante de cette bibliothèque.
    Assurez-vous de bien comprendre les implications de sécurité liées à la validation des données utilisateur et aux données sensibles.
    
     