// AJAX
// Fetch
// Axios

// Ajax
// const getApi = () => {
//     const xml = new XMLHttpRequest();

//     return new Promise((resolve, reject) => {
//         try {
//             xml.addEventListener("readystatechange", () => {
//                 if (xml.readyState === 4 && xml.status === 200) {
//                     resolve(JSON.parse(xml.responseText))
//                 }else{
//                     // reject(JSON.parse(xml))
//                 }
//             })
//             xml.open("GET", "https://655f2b37879575426b44b8f7.mockapi.io/products");
//             xml.send()

//         } catch (error) {
//             console.log(error);
//         }
//     })
// }

// getApi()
//     .then((res) => {
//         let ul = document.getElementById("ul");
//         // console.log(res);

//         res.forEach((item) =>{
//             let li = document.createElement("li");
//             li.innerHTML= `${item.title} <br> ${item.description}`
//             ul.appendChild(li)
//         })


//     })
//     .catch((err) => console.log(err))

// Fetch
// const getApi = () => {
//     fetch("https://655f2b37879575426b44b8f7.mockapi.io/products")
//         .then((res) => console.log(res.json()))

// }
// getApi()

// Post

// const getPost = () => {
//     try {
//         fetch("https://655f2b37879575426b44b8f7.mockapi.io/products", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "Application/json"
//             },
//             body: JSON.stringify(yeniData)
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// getPost()
// let yeniData = {
//     "name": "ali",
// }

// const getPost = () => {
//     try {
//         fetch("https://655f2b37879575426b44b8f7.mockapi.io/products/116", {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "Application/json"
//             },
//             body: JSON.stringify(yeniData)
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// getPost()
// const getPost = () => {
//     try {
//         fetch("https://655f2b37879575426b44b8f7.mockapi.io/products/112", {
//             method: "DELETE",
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// getPost()

// axios
// CRUD
// const getApi = () =>{
//     try {
//         axios.get("https://655f2b37879575426b44b8f7.mockapi.io/products")
//         .then((res) => console.log(res.data))
//     } catch (error) {
//         console.log(error);

//     }
// }
// getApi()

// POST
let data ={
    name:"Eltun",
    surname:"Isgenderli"
}
// const postApi = () => {
//     try {
//         axios.post("https://655f2b37879575426b44b8f7.mockapi.io/products",data)
//     } catch (error) {
//         console.log(error);

//     }
// }
// postApi()

// UPDATE
// const postApi = () => {
//     try {
//         axios.put("https://655f2b37879575426b44b8f7.mockapi.io/products/118",data)
//     } catch (error) {
//         console.log(error);

//     }
// }
// postApi()
// Delete

// const postApi = () => {
//     try {
//         axios.delete("https://655f2b37879575426b44b8f7.mockapi.io/products/117")
//     } catch (error) {
//         console.log(error);

//     }
// }
// postApi()


