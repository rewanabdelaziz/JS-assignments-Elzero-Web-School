function showDetails(var1 , var2 , var3){
    let arr=[var1,var2,var3];
    let name;
    let age;
    let status;
    for(let i=0 ; i <arr.length ; i++){
        typeof arr[i] === "number"
        ? age =arr[i]
        :typeof arr[i] === "string"
        ? name =arr[i]
        :status=arr[i]
        // if(typeof arr[i] === "number"){
        //     age =arr[i];
        // }else if(typeof arr[i] === "string"){
        //     name =arr[i];
        // }else{
        //     status=arr[i];
        // }
    }
    status
    ?console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`)
    :console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`)
    // if (status){
    //     console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`);
    // }else{
    //     console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`);
    // }
}
showDetails("Osama", 38, true);
showDetails(38, "Osama", true);
showDetails(true, 38, "Osama");
showDetails(false, "Osama", 38);