
// const arr=[1, 2, 3, 4, 5]
// const filtereven =()=>{
//   const result= arr.filter((num)=> num % 2==0)
//     return result
// }
// console.log(filtereven())

// const UserData=[
//   {id:1, name:"eljan",gender:"male",age:19,occupation:"web dev"},
//   {id:2, name:"subash",gender:"male",age:17,occupation:"web dev"},
//   {id:3, name:"sumit",gender:"male",age:19,occupation:"designer"},
//   {id:4, name:"gyanisha",gender:"female",age:35,occupation:undefined},
//   {id:5, name:"nishum",gender:"female",age:18,occupation:undefined},
// ]
// const response={
//   status:200,
//   message:"UserData phased successfully",
//   data:UserData
// }

// const FetchUserNames=()=>{
//   if(response.status === 200){
//    const result = response.data
//    .filter((user)=>user.occupation !== undefined || user.age > 30)
//    .map((user)=>user.name)
//    return result
//   }else{
//     const message="APT Fetch failes!!"
//     return message
//   }
// }
// console.log(FetchUserNames())
const potentialMatch = [
  {id:1, Fname:"Abdul", Lname:"Rahman", age:25, maritialStatus:"single", gender:"Male", location:{
    permanentLocation:{city:"Kathmandu", country:"Nepal"},
    currentLocation:{city:"Banglore", country:"India"}
  }},
  {id:2, Fname:"Sumit", Lname:"Oli", age:20, maritialStatus:"married", partnerName:"Susmita", gender:"Male", location:{
    permanentLocation:{city:"Kathmandu", country:"Nepal"},
    currentLocation:{city:"Texas", country:"usa"}
  }},
  {id:3, Fname:"Saradha", Lname:"Bhattarai", age:19, maritialStatus:"single", gender:"Female", location:{
    permanentLocation:{city:"Kathmandu", country:"Nepal"},
    currentLocation:{city:"mexico", country:"usa"}
  }},
  {id:4, Fname:"Sita", Lname:"Shrestha", age:22, maritialStatus:"single", gender:"Female", location:{
    permanentLocation:{city:"Kathmandu", country:"Nepal"},
    currentLocation:{city:"NewYork", country:"usa"}
  }}
];

const shadiwebAPIresp = {
  status: 200,
  message: "Data fetched successfully",
  data: potentialMatch,
};

// const getPerfectMatch = () => {
//   if (shadiwebAPIresp.status === 200) {
//     shadiwebAPIresp.data.forEach((candidate) => {
//       const { gender, age, maritialStatus, location, Fname, Lname } = candidate;

//       Convert country to lowercase for case-insensitive comparison
//       const currentCountry = location.currentLocation.country.toLowerCase();
      
//       const myRequirements = 
//         gender?.toLowerCase() === "female" && 
//         maritialStatus?.toLowerCase() === "single" && 
//         age >= 18 && 
//         currentCountry.includes("usa");

//       if (myRequirements) {
//         console.log(`Perfect match found: ${Fname} ${Lname}`);
//       } else {
//         console.log(`Not a perfect match: ${Fname} ${Lname}`);
//       }
//     });
//   }
// };

// getPerfectMatch();


const getCountryName = (country) => {
  let countryName = [];
  shadiwebAPIresp.data.map((candidate) => {
    Object.values(candidate.location).map((loc) => {
      // countryName.includes(loc.country) ? null 
      // : countryName.push(loc.country);
      countryName.push(loc.country);
    });
  });
  // return [...new set (countryName)];
  const result=countryName.filter((country, index)=>{
  return countryName.indexOf(country)===index;
  });
  return result
};

// console.log(getCountryName());

arr=[1,1,2,2,3,3]
const filternum = arr.filter((num,index)=>{
  return arr.indexOf(num)===index
});
console.log(filternum)
