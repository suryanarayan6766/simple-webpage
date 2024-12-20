
function toggleNavbarActiveState() {
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });
}


function scrollToTopButton() {
    const btn = document.createElement('button');
    btn.textContent = '↑';
    btn.style.position = 'fixed';
    btn.style.bottom = '20px';
    btn.style.right = '20px';
    btn.style.padding = '10px 15px';
    btn.style.fontSize = '18px';
    btn.style.borderRadius = '50%';
    btn.style.backgroundColor = '#092bec';
    btn.style.color = 'white';
    btn.style.border = 'none';
    btn.style.cursor = 'pointer';
    btn.style.display = 'none';
    btn.setAttribute('title', 'Scroll to Top');

    document.body.appendChild(btn);

    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });

    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


function animateImagesOnScroll() {
    const images = document.querySelectorAll('.details img');
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        },
        { threshold: 0.2 }
    );

    images.forEach(img => observer.observe(img));
}


function updateFooterYear() {
    const footerYear = document.createElement('span');
    footerYear.textContent = new Date().getFullYear();
    const footer = document.querySelector('.footer p:last-of-type');
    footer.appendChild(document.createTextNode(` | Updated: `));
    footer.appendChild(footerYear);
}


function addHoverEffectToIcons() {
    const icons = document.querySelectorAll('.icons img');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.3s ease';
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
        });
    });
}


function handleFormSubmission() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            alert('Thank you for contacting us! We will get back to you shortly.');
            form.reset();
        });
    }
}


function lazyLoadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
}


function init() {
    toggleNavbarActiveState();
    scrollToTopButton();
    animateImagesOnScroll();
    updateFooterYear();
    addHoverEffectToIcons();
    handleFormSubmission();
    lazyLoadImages();
}


document.addEventListener('DOMContentLoaded', init);
