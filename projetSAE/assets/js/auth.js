document.querySelector('.subform').addEventListener('submit', (e) => {
    e.preventDefault();
    let form_id = e.target.getAttribute('id');
    if (form_id == 'login') {
        

        //message d'erreur vide
        document.querySelector('#email-error').innerHTML = '';
        document.querySelector('#password-error').innerHTML = '';

        
        let email = document.querySelector('#email').value;
        let password = document.querySelector('#password').value;
        let error = false;

        //vérifier si un champ est vide
        if (email == '') {
            document.querySelector('#email-error').innerHTML = 'Veuillez renseigner une adresse e-mail';
            error = true;
        }

        if (password == '') {
            document.querySelector('#password-error').innerHTML = 'Veuillez renseigner un mot de passe';
            error = true;
        }

        //si pas d'erreur envoyer le formulaire
        if (!error) {
            window.location.href = 'index.html';
        }

        
    } else if (form_id == 'register') {

        
        document.querySelector('#email-error').innerHTML = '';
        document.querySelector('#password-error').innerHTML = '';
        document.querySelector('#password2-error').innerHTML = '';

        let email = document.querySelector('#email').value;
        let password = document.querySelector('#password').value;
        let password_confirm = document.querySelector('#password2').value;
        let error = false;

        
        if (email == '') {
            document.querySelector('#email-error').innerHTML = 'Veuillez renseigner une adresse e-mail';
            error = true;
        }

        if (password == '') {
            document.querySelector('#password-error').innerHTML = 'Veuillez renseigner un mot de passe';
            error = true;
        }

        if (password_confirm == '') {
            document.querySelector('#password2-error').innerHTML = 'Veuillez renseigner un mot de passe';
            error = true;
        }

        // vérifier que les mot de passe identiques
        if (password != password_confirm) {
            document.querySelector('#password2-error').innerHTML = 'Les mots de passe ne correspondent pas';
            error = true;
        }

        //si pas d'erreur envoyer le formulaire
        if (!error) {
            document.querySelector('#register-success').innerHTML = 'Un mail de confirmation vous a été envoyé';
        }

    }else if (form_id == 'reset') {

       
        document.querySelector('#email-error').innerHTML = '';

        let email = document.querySelector('#email').value;

        let error = false;

        
        if (email == '') {
            document.querySelector('#email-error').innerHTML = 'Veuillez renseigner une adresse e-mail';
            error = true;
        }

        
        if (!error) {
            
            document.querySelector('#reset-success').innerHTML = 'Si cette adresse e-mail correspond à un compte existant, un mail y a été envoyé';
        }

    }
    
});