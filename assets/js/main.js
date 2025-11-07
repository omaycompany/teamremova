// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const dropdownToggles = document.querySelectorAll('.has-dropdown > a');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
    
    // Mobile dropdown toggle
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.site-header')) {
            mainNav.classList.remove('active');
        }
    });
});

// Contact form mailto handler
function handleContactForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        let body = '';
        
        // Format the email body with proper labels
        const fieldLabels = {
            'name': 'Name',
            'company': 'Company',
            'email': 'Email',
            'phone': 'Phone',
            'landscapes': 'System Landscapes',
            'user-count': 'User Count',
            'sap-version': 'SAP Version',
            'database': 'Database Platform',
            'infrastructure': 'Infrastructure',
            'rpo-rto': 'RPO/RTO Requirements',
            'service-interest': 'Service Interest',
            'planned-projects': 'Planned Projects',
            'timeline': 'Timeline',
            'additional-info': 'Additional Information'
        };
        
        for (let [key, value] of formData.entries()) {
            if (key !== 'subject' && value) {
                const label = fieldLabels[key] || key;
                body += `${label}:\n${value}\n\n`;
            }
        }
        
        const subject = formData.get('subject') || 'Quote Request from Website';
        const email = form.dataset.email || 'notifications@removateam.org';
        
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
    });
}

// Initialize contact form if it exists
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('contact-form')) {
        handleContactForm('contact-form');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#services') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

