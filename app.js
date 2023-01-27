document.addEventListener("input",input)

function input(){
    let ans =document.getElementById("binary").value

    let val = ans.split("")

    let val2 =val.reverse()


    let arr=[];



    console.log(val2)
    val2.forEach((val,index)=>{
        if(val == 1){
            let val3 = Math.pow(2,index)
            arr.push(val3)
        }
    })

    let ans2 = arr.reduce((red,curr)=> red+curr)

    document.getElementById("ans").innerText=ans2
}
