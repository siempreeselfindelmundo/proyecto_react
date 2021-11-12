const productos = [
    {id:1, category: 'frio', title:'Postal Azul', price:'25', pictureUrl: "https://i.imgur.com/ILEdkVv.png"},
    {id:2, category: 'calido', title:'Postal Rosa', price:'30', pictureUrl: "https://i.imgur.com/4EUHaMO.png"},
    {id:3, category: 'calido', title:'Postal Mango', price:'40', pictureUrl: "https://i.imgur.com/TauI7v4.png"},
    {id:4, category: 'calido', title:'Postal Granada', price:'20', pictureUrl: "https://i.imgur.com/TGpLY4t.png"},
    {id:5, category: 'frio', title:'Postal Verde', price:'50', pictureUrl: "https://i.imgur.com/fi4vw4R.png"},
    {id:6, category: 'frio', title:'Postal Morado', price:'60', pictureUrl: "https://i.imgur.com/ZWqbPH0.png"}
]

 const getFetch = new Promise((resolve, reject)=>{
    const condition = true
    if (condition){
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    } else {
        setTimeout(()=>{
            reject('404 not found')
        }, 2000)
    } 

})

export default getFetch