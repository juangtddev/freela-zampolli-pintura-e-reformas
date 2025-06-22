// Seleção de elementos
const menuLinks = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('section');
const hamburgerBtn = document.querySelector('.hamburger-btn');
const mobileMenu = document.querySelector('.mobile-menu');

// Configurações do IntersectionObserver
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

// Callback do observer corrigido
const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            if (!id) return;

            // Remove 'active' de todos os links
            menuLinks.forEach(link => link.classList.remove('active'));

            // Adiciona 'active' ao link correspondente
            const activeLink = document.querySelector(`.menu-link[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};

// Cria e configura o observer
const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

// Função para fechar o menu móvel
const closeMobileMenu = () => {
    mobileMenu.classList.remove('active');
};

// Event listeners
function initEventListeners() {
    // Menu hamburguer
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em links
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initEventListeners);