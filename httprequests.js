const baseURL="https://northwind.vercel.app/api/categories";
// get all Categories
export const getAllCategories=async()=>{
    const response = await fetch(baseURL, { mode: 'cors' });
    const data = await response.json();
    data.forEach(element => {
        console.log(element.name)
    });
    return data;
}

// get all Category by ID
export const getAllCategoriesByID=async(id)=>{
    let globalData;
    await fetch(`${baseURL}/categories/${id}`)
    .then(response =>response.json() )
    .then(data =>{
        globalData= data;
})
return globalData;
}

// delete  Category by ID


// post Category 


// put Category by ID