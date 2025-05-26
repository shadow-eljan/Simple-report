
const arr=[1, 2, 3, 4, 5]
const filtereven =()=>{
  const result= arr.filter((num)=> num % 2==0)
    return result
}
console.log(filtereven())

const UserData=[
  {id:1, name:"eljan",gender:"male",age:19,occupation:"web dev"},
  {id:2, name:"subash",gender:"male",age:17,occupation:"web dev"},
  {id:3, name:"sumit",gender:"male",age:19,occupation:"designer"},
  {id:4, name:"gyanisha",gender:"female",age:35,occupation:undefined},
  {id:5, name:"nishum",gender:"female",age:18,occupation:undefined},
]
const response={
  status:200,
  message:"UserData phased successfully",
  data:UserData
}

const FetchUserNames=()=>{
  if(response.status === 200){
   const result = response.data
   .filter((user)=>user.occupation !== undefined || user.age > 30)
   .map((user)=>user.name)
   return result
  }else{
    const message="APT Fetch failes!!"
    return message
  }
}
console.log(FetchUserNames())