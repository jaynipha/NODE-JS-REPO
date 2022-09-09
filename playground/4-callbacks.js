const names = ['andrew', 'jen', 'obinna']
const shortNames = names.filter(()=> {
    return names.length<=4
});

const geoCode =(address, callback)=>{
    setTimeout(() => {
     const data = {
            latitude:0,
            longitude:0, 
        }

        callback (data)
    }, 2000);
}
    
const data = geoCode('philadephia', (data)=>{
    console.log(data)
})


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!



const add = (a, b,callback)=>{
    setTimeout(() => {
    callback(a + b)    
    }, 3000);
}
add(1,4, (sum)=>{
    console.log(sum)
});










