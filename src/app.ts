// Função para alternar entre o modo claro e o modo escuro
function toggleDarkMode(): void {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Função para carregar o estado do dark mode do localStorage
function loadDarkMode(): void {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}

// Função para capturar os dados dos formulários de login e cadastro
function captureFormData(formId: string): void {
    const form = document.getElementById(formId) as HTMLFormElement;
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            formData.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });
        });
    } else {
        console.error(`Formulário com ID "${formId}" não encontrado.`);
    }
}

// Função para inicializar o comportamento da página
function initialize(): void {
    loadDarkMode();

    const darkModeToggle = document.getElementById('dark-mode-toggle') as HTMLElement;
    darkModeToggle.addEventListener('click', toggleDarkMode);

    captureFormData('form-login');
    captureFormData('form-register');
}

document.addEventListener('DOMContentLoaded', initialize);
