"use strict";
// Manipulação do DOM para adicionar projetos dinamicamente
document.addEventListener('DOMContentLoaded', function () {
    var projectsDiv = document.querySelector('.projects');
    var projects = [
        {
            title: "Controle de Estoque",
            description: "É uma aplicação robusta de controle de estoque desenvolvida em Java, projetada para otimizar a gestão de inventário em empresas de diversos tamanhos. A solução permite o acompanhamento em tempo real do nível de estoque, facilitando a organização e o planejamento. Com uma interface intuitiva e funcionalidades como alertas de estoque baixo, relatórios detalhados e integração com outras ferramentas empresariais, garantindo precisão e eficiência na gestão dos recursos, contribuindo diretamente para a redução de custos e o aumento da produtividade..",
            imageUrl: "img/projeto1.png"
        },
        {
            title: "Gerador de Cupons",
            description: "Desenvolvemos uma aplicação de cupons integrada ao sistema Gesfood, que facilita o envio de cupons diretamente para o e-mail dos clientes. Criada com Java e Thymeleaf, a solução automatiza o processo de geração e envio dos cupons, garantindo que cada cupom já esteja pré-cadastrado no sistema Gesfood, oferecendo uma experiência eficiente e confiável tanto para os clientes quanto para a administração do restaurante.",
            imageUrl: "img/projeto2.png"
        },
        {
            title: "Site de agencia de viagens",
            description: "Site completo para uma agência de viagens, utilizando HTML, CSS e JavaScript. O site foi projetado para oferecer uma experiência de usuário intuitiva e visualmente atraente, com recursos como busca de destinos, pacotes promocionais e formulários de contato dinâmicos. Cada detalhe foi pensado para facilitar a navegação e inspirar os clientes a encontrar a viagem dos seus sonhos, garantindo uma jornada online agradável desde a primeira visita ao site.",
            imageUrl: "img/projeto3.png"
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
