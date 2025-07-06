import { use } from "react";


function LocalStorage() {
    LocalStorage.setItem('user' , JSON.stringify({name:'ali' , age: 33}))
    LocalStorage.setItem('user' , JSON.stringify({name:'ali' , age: 33}))
    LocalStorage.setItem('user' , JSON.stringify({name:'ali' , age: 33}))
    LocalStorage.setItem('user' , JSON.stringify({name:'ali' , age: 33}))
    LocalStorage.setItem('user' , JSON.stringify({name:'ali' , age: 33}))
    LocalStorage.setItem('user' , JSON.stringify({name:'ali' , age: 33}))
    LocalStorage.setItem('user' , JSON.stringify({name:'ali' , age: 33}))
    LocalStorage.setItem('user' , JSON.stringify({name:'ali' , age: 33}))
    const user = JSON.parse(localStorage.getItem('user'))
    localStorage.removeItem('user');
    localStorage.clear();



    console.log(user);
    
}



export default LocalStorage;