let str=window.prompt("Print Number From – To","Example: 5-20");
let nums=str.split("-");
let max=Math.max(nums[0],nums[1]);
let min=Math.min(nums[0],nums[1]);
for(let i=min; i <= max; i++){
    document.write(i+"\n");
}
