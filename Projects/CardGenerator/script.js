
const container = document.querySelector('.container');

function formatViews(views){
    if(views === 0) return `No views`;
    if((views > 0 && views < 1000) || (views >= 1000000000)) return views;
    if(views >= 1000 && views < 1000000) return `${Math.round(views/1000)}K`
    if(views >= 1000000 && views < 1000000000) return `${Math.round(views/1000000)}M`
}

function createCardHTML(thumbnail, title, channelName, views, date, duration){
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const formattedViews = formatViews(views);
    
    card.innerHTML = `
    <div class="img">
        <img src="${thumbnail}" alt="">
        <div class="duration">${duration}</div>
    </div>
    <div class="details">
        <h3>${title}</h3>
        <p>${channelName} • ${formattedViews} views • ${date}</p>
    </div>
    `
    container.appendChild(card)
}


createCardHTML('assets/img1.png', "Hello there", 'codewithharray', 2500, '5 months ago', '11:50')
createCardHTML('assets/img2.png', "Hello there", 'codewithharray', 250, '5 months ago', '09:50')
createCardHTML('assets/img3.png', "VS code installation", 'codewithharray', 253000, '5 months ago', '10:50')
createCardHTML('assets/img4.png', "Hello there", 'codewithharray', 1253000, '5 months ago', '11:50')
createCardHTML('assets/img5.png', "Hello there", 'codewithharray', 22253000, '5 months ago', '11:50')
createCardHTML('assets/img6.png', "Hello there", 'codewithharray', 253012000, '5 months ago', '1:50')

