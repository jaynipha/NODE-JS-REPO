setTimeout(() => {
    console.log('2seconds are enough')
}, 2000);

const names = ['andrew', 'jen', 'obinna']
const shortNames = names.filter(()=> {
    return names.length<=4
});

const geoCode =(address, callback)=>{
    const data ={
        latitude:0,
        longitude:0
    }
    return data
}
const data = geoCode('philadephia')
console.log(data)

