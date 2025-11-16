document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('formularz-kontaktowy');
    const emailInput = document.getElementById('email');
    const wiadomoscInput = document.getElementById('wiadomosc');
    const emailError = document.getElementById('email-error');
    const wiadomoscError = document.getElementById('wiadomosc-error');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        let czyPoprawny = true; 

        emailError.textContent = '';
        wiadomoscError.textContent = '';

        const email = emailInput.value.trim();
        if (email === '') {
            emailError.textContent = 'Pole E-mail nie może być puste.';
            czyPoprawny = false;
        } else if (!email.includes('@') || !email.includes('.')) {
            emailError.textContent = 'Proszę podać poprawny adres e-mail (musi zawierać "@" i ".")';
            czyPoprawny = false;
        }
        const wiadomosc = wiadomoscInput.value.trim();
        if (wiadomosc === '') {
            wiadomoscError.textContent = 'Pole Wiadomość nie może być puste.';
            czyPoprawny = false;
        }

        if (czyPoprawny) {
            alert('Dziękujemy! Formularz wysłany pomyślnie.');
            form.submit(); 
        }
    });
});