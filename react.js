// const Fname="abdul"
// const lastname= "Rahman"

// const addname=()=>{
//   return `${Fname} ${lastname}`
// }
// //console.log(addname())

// const arry1=[-3, -2, -1]
// const arry2=[0,1,2,3,1]

// const addArray=()=>{
//   const result=[...arry1,...arry2]
//   return result
// }
// //console.log(addArray())

// const addArrayV2=()=>[...arry1,...arry2]
//console.log(addArrayV2())

const userData={
  name:"tripal",
  email:"email@gmail.com",
  phone:12345,
  hasPassedOut:false,
  occupation:undefined
}
// const filterFalsyValue=()=>{
//   let finalUserData={}
//   for(let key in userData){

//     if(!userData[key]){
//       finalUserData={...finalUserData,[key]:userData[key]}
//     }
//   }
//   return finalUserData
// }
// console.log(filterFalsyValue())

const apiResponse={
  status:404,
  message:"Not FOund",
  data:{}
}
const thisIsFinalUserData={}
const poularData=()=>{
  if (apiResponse.status===200 && apiResponse.data){
    thisIsFinalUserData=apiResponse.data
  }else{
    thisIsFinalUserData=userData
  }
}