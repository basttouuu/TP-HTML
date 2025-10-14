
const formCommentaire = document.getElementById('formulaire-commentaire');
const commentairesDiv = document.getElementById('commentaires');

 
window.addEventListener('load', () => {
    const saved = JSON.parse(localStorage.getItem('chillCommentaires') || '[]');
    saved.forEach(c => ajouterCommentaire(c.nom, c.message));
});

formCommentaire.addEventListener('submit', function(e) {
    e.preventDefault();
    const nom = document.getElementById('nom').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!nom || !message) return;

    ajouterCommentaire(nom, message);


    const saved = JSON.parse(localStorage.getItem('chillCommentaires') || '[]');
    saved.push({ nom, message });
    localStorage.setItem('chillCommentaires', JSON.stringify(saved));

    formCommentaire.reset();
 });

function ajouterCommentaire(nom, message) {
    const div = document.createElement('div');
    div.classList.add('commentaire');
    div.innerHTML = `<strong>${nom}</strong> : ${message}`;
    commentairesDiv.appendChild(div);
}

