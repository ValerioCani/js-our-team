const team = [
    {
        nome: 'Wayne',
        cognome: 'Barnett',
        ruolo: 'Founder & CEO',
        immagine: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela',
        cognome: 'Caroll',
        ruolo: 'Chief Editor',
        immagine: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter',
        cognome: 'Gordon',
        ruolo: 'Office Manager',
        immagine: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela',
        cognome: 'Lopez',
        ruolo: 'Social Media Manager',
        immagine: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott',
        cognome: 'Estrada',
        ruolo: 'Developer',
        immagine: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara',
        cognome: 'Ramos',
        ruolo: 'Graphic Designer',
        immagine: 'barbara-ramos-graphic-designer.jpg'
    }
];

console.log(team);

for(let i in team){
    const memeber = team[i];
    console.log(team[i]);
    document.getElementById('main').innerHTML +='</br></br>';
    for(let c in team[i]){
        document.getElementById('main').innerHTML += c +': '+ memeber[c] +', ';
    };
};
