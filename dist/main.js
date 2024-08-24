"use strict";
// Manipulação do DOM para adicionar projetos dinamicamente
document.addEventListener('DOMContentLoaded', function () {
    var projectsDiv = document.querySelector('.projects');
    var projects = [
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
    projects.forEach(function (project) {
        var projectElement = document.createElement('div');
        projectElement.className = 'project';
        var projectImage = document.createElement('img');
        projectImage.src = project.imageUrl;
        projectImage.alt = project.title;
        var projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        var projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectElement.appendChild(projectImage);
        projectElement.appendChild(projectTitle);
        projectElement.appendChild(projectDescription);
        projectsDiv === null || projectsDiv === void 0 ? void 0 : projectsDiv.appendChild(projectElement);
    });
});
// Integração com uma API fictícia ao enviar o formulário
var contactForm = document.getElementById('contact-form');
contactForm === null || contactForm === void 0 ? void 0 : contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    // Aqui seria onde a integração com uma API de envio de email ocorreria
    console.log('Dados do formulário:', formData);
    // Simulando um envio de API
    var statusDiv = document.getElementById('form-status');
    statusDiv.textContent = 'Mensagem enviada com sucesso!';
    // Agora o TypeScript sabe que contactForm é um formulário, então o método reset() é válido
    contactForm.reset();
});
