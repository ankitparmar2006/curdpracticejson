let fetchData=async()=>{
    let url=`http://localhost:3000/car`
    let res=await fetch(url,
        {method:"GET"}
    )
    let data=await res.json()
    console.log(data);



let show =document.querySelector("#show")
data.map((e)=>{


show.innerHTML+=`
<tr>
<td>${e.carname}</td>
<td>${e.carprice}</td>
<td>${e.carcolor}</td>
<td>${e.carbrand}</td>

<td onclick="del('${e.id}')">deleted</td>

</tr>

`

})

}

//==========================================

let del=(id)=>{
    let url=`http://localhost:3000/car/${id}`

fetch(url,{
    method:"DELETE"
})

    
}

//==========================================




let ins =()=>{
    let name=document.querySelector("#name").value
let price=document.querySelector("#price").value
let color=document.querySelector("#color").value
let brand=document.querySelector("#brand").value

    let url=`http://localhost:3000/car`

    fetch(url,{method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            "carname":name,
            "carprice":price,
            "carcolor":color,
            "carbrand":brand

            
        })

    })


}
