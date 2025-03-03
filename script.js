document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registro-form');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmarPassword = document.getElementById('confirmar-password');
    const terminos = document.getElementById('terminos');
    const successMessage = document.getElementById('success-message');

    // Mostrar errores
    function showError(input, message) {
        const errorElement = document.getElementById(`${input.id}-error`);
        input.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('visible');
    }

    // Ocultar errores
    function hideError(input) {
        const errorElement = document.getElementById(`${input.id}-error`);
        input.classList.remove('error');
        errorElement.classList.remove('visible');
    }

    // Validar email con expresión regular
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Validar contraseña con expresión regular
    function isValidPassword(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return re.test(password);
    }

    // Validación en tiempo real
    nombre.addEventListener('blur', function () {
        if (nombre.value.trim() === '') {
            showError(nombre, 'El nombre es obligatorio');
        } else {
            hideError(nombre);
        }
    });

    email.addEventListener('input', function () {
        if (email.value.trim() === '') {
            showError(email, 'El correo electrónico es obligatorio');
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Introduce un correo electrónico válido');
        } else {
            hideError(email);
        }
    });

    password.addEventListener('input', function () {
        if (password.value.trim() === '') {
            showError(password, 'La contraseña es obligatoria');
        } else if (!isValidPassword(password.value)) {
            showError(password, 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número');
        } else {
            hideError(password);
        }

        // Verificar confirmación de contraseña si ya se ha introducido
        if (confirmarPassword.value !== '') {
            if (password.value !== confirmarPassword.value) {
                showError(confirmarPassword, 'Las contraseñas no coinciden');
            } else {
                hideError(confirmarPassword);
            }
        }
    });

    confirmarPassword.addEventListener('input', function () {
        if (confirmarPassword.value.trim() === '') {
            showError(confirmarPassword, 'Debes confirmar la contraseña');
        } else if (password.value !== confirmarPassword.value) {
            showError(confirmarPassword, 'Las contraseñas no coinciden');
        } else {
            hideError(confirmarPassword);
        }
    });

    terminos.addEventListener('change', function () {
        const errorElement = document.getElementById('terminos-error');
        if (!terminos.checked) {
            errorElement.classList.add('visible');
        } else {
            errorElement.classList.remove('visible');
        }
    });

    // Envío del formulario
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        // Validar nombre
        if (nombre.value.trim() === '') {
            showError(nombre, 'El nombre es obligatorio');
            isValid = false;
        }

        // Validar email
        if (email.value.trim() === '') {
            showError(email, 'El correo electrónico es obligatorio');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Introduce un correo electrónico válido');
            isValid = false;
        }

        // Validar contraseña
        if (password.value.trim() === '') {
            showError(password, 'La contraseña es obligatoria');
            isValid = false;
        } else if (!isValidPassword(password.value)) {
            showError(password, 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número');
            isValid = false;
        }

        // Validar confirmación de contraseña
        if (confirmarPassword.value.trim() === '') {
            showError(confirmarPassword, 'Debes confirmar la contraseña');
            isValid = false;
        } else if (password.value !== confirmarPassword.value) {
            showError(confirmarPassword, 'Las contraseñas no coinciden');
            isValid = false;
        }

        // Validar términos y condiciones
        if (!terminos.checked) {
            document.getElementById('terminos-error').style.display = 'block';
            isValid = false; // Marcar como inválido si no está chequeado
        } else {
            document.getElementById('terminos-error').style.display = 'none';
        }
        // Si todo es válido, mostrar mensaje de éxito
        if (isValid) {
            successMessage.classList.add('visible');
            form.reset();
            setTimeout(() => {
                successMessage.classList.remove('visible');
            }, 3000);
        }
    });
});