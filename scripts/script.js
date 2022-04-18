let checkboxes =  document.getElementById("checkboxes").getElementsByTagName("input");

 function check(){
   let len = checkboxes.length;
   let count = 0;

   for(let i = 0; i< len; i++)
   {
    if(checkboxes[i].checked)
        count++;
   } 
   if(count >= 2)
    return true;

   return false
}

document.getElementById("submit-btn").onclick = () =>{
    console.log("clicked!");
    const errorMsg = !check()  ? "At least two boxes must be checked" : '';
    checkboxes[0].setCustomValidity(errorMsg);


}