function goToSection(section) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

// Show About Me first
goToSection('about');
