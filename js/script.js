const typed = new Typed('.multiple-text',{
    strings:['Desarrollador de web', 'Programador'],
    typedSpeed: 1000,
    backSpeed: 200,
    backDelay: 2000,
    loop: true
});
document.querySelectorAll('.projects_items').forEach(item => {
    item.addEventListener('click', () => {
        const title = item.getAttribute('data-title');
        const description = item.getAttribute('data-description');

        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-description').innerText = description;

        const modal = document.getElementById('modal');
        modal.style.display = "block";
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = "none";
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
