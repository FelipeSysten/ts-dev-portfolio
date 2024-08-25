"use strict";
// Função para alternar entre o modo claro e o modo escuro
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
    var isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}
// Função para carregar o estado do dark mode do localStorage
function loadDarkMode() {
    var darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}
// Função para capturar os dados dos formulários de login e cadastro
function captureFormData(formId) {
    var form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var formData = new FormData(form);
            formData.forEach(function (value, key) {
                console.log("".concat(key, ": ").concat(value));
            });
        });
    }
    else {
        console.error("Formul\u00E1rio com ID \"".concat(formId, "\" n\u00E3o encontrado."));
    }
}
// Função para inicializar o comportamento da página
function initialize() {
    loadDarkMode();
    var darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);
    captureFormData('form-login');
    captureFormData('form-register');
}
document.addEventListener('DOMContentLoaded', initialize);
