let square = function square(x){
    return x *  x
 }
 console.log(square(3))

// let square = (x)=>{
// return x * x
// }
// console.log(square(3))

//THIS IS THE MOST CONCISE WAY TO WRITE AN ARROW FUNCTION
//  const square = (x)=> x * x;

//  console.log(square(4));

// const Event ={
//     name:'Birthday party',
//     printGuestList : function(){
//         console.log('guest list for ' + this.name)
//     }
// }
// Event.printGuestList();

// we removed the object colon and the => syntax and the function keyword because we are working
// with a method
// console.log('starting')

// setTimeout(() => {
//     console.log('5 seconds have passed')
// }, 5000);

// setTimeout(()=>{
//     console.log('0 second timer')
// },2000);
const Event ={
    name:'Birthday party',
    guestList:['mike', 'jennifer','goodness','Ruth'],
    printGuestList() {
        console.log('guest list for ' + this.name)

        this.guestList.forEach((guest)=>{
            console.log(guest + ' is attending the ' + this.name)
        })
    }

}
Event.printGuestList();








