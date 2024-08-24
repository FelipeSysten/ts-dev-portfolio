// Manipulação do DOM para adicionar projetos dinamicamente
document.addEventListener('DOMContentLoaded', () => {
    const projectsDiv = document.querySelector('.projects');

    const projects = [
        { 
            title: "Controle de Estoque", 
            description: "Descrição do projeto 1.", 
            imageUrl: "img/projeto1.png" // Substitua pelo caminho da imagem
        },
        { 
            title: "Gerador de Cupons", 
            description: "Descrição do projeto 2.", 
            imageUrl: "img/projeto2.png" // Substitua pelo caminho da imagem
        },
        { 
            title: "Site de agencia de viagens", 
            description: "Descrição do projeto 3.", 
            imageUrl: "img/projeto3.png" // Substitua pelo caminho da imagem
        }
    ];

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';

        const projectImage = document.createElement('img');
        projectImage.src = project.imageUrl;
        projectImage.alt = project.title;

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        projectElement.appendChild(projectImage);
        projectElement.appendChild(projectTitle);
        projectElement.appendChild(projectDescription);

        projectsDiv?.appendChild(projectElement);
    });
});

// Integração com uma API fictícia ao enviar o formulário
const contactForm = document.getElementById('contact-form') as HTMLFormElement;

contactForm?.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        message: (document.getElementById('message') as HTMLTextAreaElement).value
    };

    // Aqui seria onde a integração com uma API de envio de email ocorreria
    console.log('Dados do formulário:', formData);

    // Simulando um envio de API
    const statusDiv = document.getElementById('form-status');
    statusDiv!.textContent = 'Mensagem enviada com sucesso!';
    
    // Agora o TypeScript sabe que contactForm é um formulário, então o método reset() é válido
    contactForm.reset();
});