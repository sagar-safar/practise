let alien = {
    laptop:{
        ram:'4Gb',
        storage:'2Tb',
        processor:'intel'
    },

    name:'sagar',
    planet:'mars'
};


for(let key in alien.laptop){
    console.log(alien.laptop[key]);
}