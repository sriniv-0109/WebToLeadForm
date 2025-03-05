function handleSubmit(){
let outputDate=document.querySelector(".outputDate");
let inputDate=document.querySelector(".inputDate");
console.log('inputDate',inputDate.value);//type of this date is String

//we have to convert this date as per user locale

let formattedDate=new Date(inputDate.value).toLocaleDateString("en-IN");
outputDate.value=formattedDate;
console.log("outputDate.value",outputDate.value);
}
function timestamp() { 
var response = document.getElementById("g-recaptcha-response");
 if (response == null || response.value.trim() == "") {
             var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
}
 } setInterval(timestamp, 500);