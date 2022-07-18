const team = [
    {
        nome: 'Wayne',
        cognome: 'Barnett',
        ruolo: 'Founder & CEO',
        immagine: '<img src="img/wayne-barnett-founder-ceo.jpg" alt=""/>'
    },
    {
        nome: 'Angela',
        cognome: 'Caroll',
        ruolo: 'Chief Editor',
        immagine: '<img src="img/angela-caroll-chief-editor.jpg" alt=""/>'
    },
    {
        nome: 'Walter',
        cognome: 'Gordon',
        ruolo: 'Office Manager',
        immagine: '<img src="img/walter-gordon-office-manager.jpg" alt=""/>'
    },
    {
        nome: 'Angela',
        cognome: 'Lopez',
        ruolo: 'Social Media Manager',
        immagine: '<img src="img/angela-lopez-social-media-manager.jpg" alt=""/>'
    },
    {
        nome: 'Scott',
        cognome: 'Estrada',
        ruolo: 'Developer',
        immagine: '<img src="img/scott-estrada-developer.jpg" alt=""/>'
    },
    {
        nome: 'Barbara',
        cognome: 'Ramos',
        ruolo: 'Graphic Designer',
        immagine: '<img src="img/barbara-ramos-graphic-designer.jpg" alt=""/>'
    }
];

const main = document.getElementById('main');

for(let i=0; i<team.length; i++){
    const memeber = team[i];
    const card = createCard();
    main.append(card);
    for(let c in memeber){
        card.innerHTML=memeber['immagine'];    
        card.append(memeber['nome'] + ' ' + memeber['cognome'] + ', ' + memeber['ruolo']);  
    };
}


function createCard(){
    const newCard = document.createElement('div');
    newCard.style.height = '600px';
    newCard.style.width = 'calc(100% / 3)';
    return newCard;
}