// import { getAllCategories } from "./httprequests";

const baseURL = "https://northwind.vercel.app/api/categories";
// get all Categories
const getAllCategories = async () => {
    const response = await fetch(baseURL, { mode: 'cors' });
    const data = await response.json();
    return data;
}

// get all Category by ID
const getAllCategoriesByID = async (id) => {
    let globalData;
    await fetch(`${baseURL}/${id}`)
        .then(response => response.json())
        .then(data => {
            globalData = data;
        })
    return globalData;
}



// delete  Category by ID
const deleteCategoryByID = async (id) => {
    let globalData;
    await fetch(`${baseURL}/${id}`, {
        method: "DELETE"
    })

    return globalData;
}

// post Category 
const postCategory = async (category) => {
    fetch(`${baseURL}/${category}`, {
        method: "POST",
headers: {
'Content-Type':'application/json'
        },
        body: JSON.stringify(category)
    })
}


// put Category by ID
const putCategory = async (id,category) => {
    fetch(`${baseURL}/${id,category}`, {
        method: "PUT",
headers: {
'Content-Type':'application/json'
        },
        body: JSON.stringify(category)
    })
}














let list = document.querySelector("#categories")
let detail = document.querySelector("#detail")
// use categories
getAllCategories().then(data => {
    data.forEach(categories => {
        list.innerHTML += `<li>${categories.name}</li>`
    });
})

// // use categorie by ID
// getAllCategoriesByID(4).then(data=>{
//     detail.textContent=`${data.name},desc: ${data.description}`
// })

// // use deletecategorie by ID
// deleteCategoryByID(4)


// //use post category
//  postCategory({name:'code Academy', description:'1234'});