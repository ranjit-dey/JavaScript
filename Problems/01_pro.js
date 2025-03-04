/*
Create a business name generator by combining list of adjectives and shop name and another words

Adjectives :
Crazy 
Amazing
Fire

Shop Name : 
Engine
Foods
Garments

Another Word :
Bros
Limited
Hub

*/


const adjectives = {
    0 : 'Crazy',
    1 : 'Amazing',
    2 : 'Fire'
}

const shopNames = {
    0 : 'Engine',
    1 : 'Foods',
    2 : 'Garments'
}

const anotherWords = {
    0 : 'Bros',
    1 : 'Limited',
    2 : 'Hub'
}

function generateKey (){
    const randomKey = Math.round(Math.random()*2);
    return randomKey;
}

function generateBusinessName(){
    businessName = `${adjectives[generateKey()]} ${shopNames[generateKey()]} ${anotherWords[generateKey()]}`;
    console.log(businessName)
}

generateBusinessName();
