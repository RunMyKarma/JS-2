for (let i = 1; i<= 20; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('Fronted Simplified')
    }
    else if (i % 5 === 0){
        console.log('Simplified')
    }
    else if (i % 3 === 0){
        console.log('Fronted')
    }
    else{
        console.log(i)
    }
}

function welcome(firstName, lastName) {
    console.log(`Welcome,  ${firstName} ${lastName}`)
}

welcome('Mahdi', 'Miah'); 