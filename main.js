let data = {
    name: "ay muellim",
    age: "21"
}

// const postApi = () => {
//     try {
//         let dataa = fetch("https://655f2b37879575426b44b8f7.mockapi.io/products/101", {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data)
//         });
//         console.log(dataa);

//     } catch (error) {
//         console.log(error);

//     }
// }
// postApi()

// const getData = () => {
//     const xml = new XMLHttpRequest();
//     return new Promise((resolve, reject) => {
//         xml.addEventListener("readystatechange", () => {
//             if (xml.readyState === 4 && xml.status === 200) {
//                 resolve(JSON.parse(xml.responseText))
//             }
//         })
//         xml.open("https://655f2b37879575426b44b8f7.mockapi.io/products/101")
//         xml.send()
//     })
// }
// getData()
//     .then((res) => console.log(res))