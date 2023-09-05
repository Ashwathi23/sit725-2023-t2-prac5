/*const cardList = [{
    title: ' The Magician ',
    path: 'images/The magician.webp',
    subTitle: 'Click the Magician card to know more',
    description: 'The Magician tarot card reveals how your wishes and desires can be realized through determination and willpower. When this card shows up in your reading, you can be assured that you have the drive to make your dreams happen.Just remember that you are powerful and if you create your inner world, the outer will follow. Yet, you have to focus and concentrate on achieving your dream. Get rid of any discretions and make a detailed plan to stay on track.'
},
{
    title: ' Death Card ',
    path: 'images/Death card.png',
    subTitle: 'Click the Death card to know more',
    description: 'For many readings, the Death Tarot card signifies completing a chapter, putting the past behind you, and cutting out what is unnecessary. It can also signify a transition or middle ground between one phase of life and the next.The key is to welcome the Death card in a tarot spread instead of avoiding it. What path is number thirteen trying to point you toward? After all, there is no new beginning without an ending.'
},
{
    title: ' The Tower card ',
    path: 'images/The tower card.webp',
    subTitle: 'Click the Tower card to know more',
    description: 'If we had to redesign the Tower card to a more modern-day representation, a crashing airplane would be an accurate alternative image.The Tower signifies total destruction. If you’ve received the Upright Tower tarot card, prepare for things to be leveled and dismantled.As with all losses, this will probably be a painful process. It can also lead to a fresh start. Before you are able to make these positive changes, you’ll have first to face the truth about a situation.'
}];*/

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
                '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.path+'">'+
                '</div><div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.subTitle+'</a></p></div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
                '<p class="card-text">'+item.description+'</p>'+
                '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

const formSumitted = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.path = $('#path').val();
    formData.subTitle = $('#subTitle').val();
    formData.description = $('#description').val();

    console.log(formData);
    postCat(formData);
}

function postCat(cat) {
    $.ajax({
        url:'/api/cat',
        type:'POST',
        data:cat,
        success: (result) => {
            if (result.statusCode === 201) {
                alert('Card is added');
            }
        }
    });
}

function getAllCats() {
    $.get('/api/cat',(result)=>{
        if (result.statusCode === 200) {
            addCards(result.data);
        }
    });
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        formSumitted();
    });
    $('.modal').modal();
    getAllCats();
});

let socket = io();
socket.on('number',(msg)=>{
    console.log('Random Number: ' + msg);
});

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        formSumitted();
    });
    $('.modal').modal();
    getAllCats();
    console.log('ready');
});