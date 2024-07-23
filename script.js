const body = document.body
const tablediv = document.createElement("div")
const table = document.createElement("table")
tablediv.setAttribute("id","tablediv")
table.classList.add("table")
body.append(tablediv)
tablediv.append(table)

const thead = document.createElement("thead")
const tbody = document.createElement("tbody")
table.append(thead)
table.append(tbody)

const headtr = document.createElement("tr")
thead.append(headtr)

let heading = ["ID.No","FirstName","LastName","Email","Address","Pincode","State","Country","Gender","Choice of foods"]

for(let ele in heading){
    const th = document.createElement("th")
    th.innerText = `${heading[ele]}`
    headtr.append(th)
}
let idNo = 0
function getData(){
    idNo+=1
    let formData = new FormData(form);
    let keyvalue = [...formData.entries()]
    console.log(Object.entries(formData))
    keyvalue.splice(0,0,["ID.NO",`${idNo}`])
    formData = Object.fromEntries(keyvalue)

    const bodytr = document.createElement("tr")
    for (var pair of Object.entries(formData)) {
        if(pair[0]!==("food"))
        {
        const td = document.createElement("td")
        td.innerText = `${pair[1]}`
        bodytr.append(td)
        }
    }
    let choice = []
    const td = document.createElement("td")
    const checkboxes = document.getElementsByName("food")
    for(let ele of checkboxes){
        if(ele.checked==true){
            choice.push(ele.value)
        }
    }
    td.innerText = `${choice.join(", ")}`
    bodytr.append(td)
    tbody.append(bodytr)
}
Request.get
function checkError(e){
    let formData = new FormData(form);
    if(formData.getAll("food").length<2){
        document.getElementById("errorCheck").style.visibility = "visible"
        return false
    }
    else{
        document.getElementById("errorCheck").style.visibility = "hidden"
        getData()
        e.target.reset()
        return true
    }

}


document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault()
    return checkError(e)      
})