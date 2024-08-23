
// let departmentCourse= "cse"
// departmentCourse = "cse-computer"
// console.log("the daprtment is "+departmentCourse);


// const year = 2025;
//  year=2026;

// console.log(year)

//snakecase for declaring the variable(naming conventions) 
// var  year_month = "january"
// var year_month = "february"
// console.log("month:"+year_month)


// const val =2*2;
// const Val = 3*2;
// console.log(val)
// console.log(Val)


// const students=[
//     {
        
//         name :"hemendra",
//         dob :  new Date("12/12/2012"),
//         college:"college name",
//         cpi : 7.8
//     },
//     {
        
//         name:"hemendra1",
//         dob : new Date("15/12/2003"),
//         college:"college named",
//         cpi: 8.8
//     },
   
// ];
// console.log(students)
// const st_copy = {...students}
// st_copy.name="great"
// console.log(st_copy)

// const studentname="dear diary"
// let age = 25;
//  var new_name = "dear dear diary"

//  const sts={
//     name:studentname,
//   age,
//     // age:age,
//     new_name:new_name
//  }
//  console.log(sts)

// const updatekey ='dob';
// const collegename= "college";
const dob = "12/12/12"
// const var1 = students?.["collegename"];
// console.log(var1)


let st =[
    {
        studentname : "student name",
        collegename:"new college name",
        dob,
        eng: 1234,
        mbbs:7891,
        order:1,
        english: {
            total:89,
            attendance:89
        }
    },
    {

        studentname : "student no2",
        collegename: "second college name",
        dob,
        eng: 1234,
        mbbs:7891,
        order:2,
        english: {
            total:89,
            attendance:89
        }
    },
    {

        studentname : "student no2",
        collegename: "second college name",
        dob,
        eng: 1234,
        mbbs:7891,
        order:2,
        english: {
            total:89,
            attendance:89
        }
    },
    {

        studentname : "student no2",
        collegename: "second college name",
        dob,
        eng: 1234,
        mbbs:7891,
        order:2,
        english: {
            total:89,
            attendance:89
        }
    },
    {

        studentname : "student no2",
        collegename: "second college name",
        dob,
        eng: 1234,
        mbbs:7891,
        order:2,
        english: {
            total:89,
            attendance:89
        }
    },
    {

        studentname : "student no2",
        collegename: "second college name",
        dob,
        eng: 1234,
        mbbs:7891,
        order:2,
        english: {
            total:89,
            attendance:89
        }
    }

];
// st[0].order = st[0].order +1 ;
//  st[1].order= st[1].order +1;
// // const out= `the name is ${st.studentname}, and and study in ${st.collegename}`;
// const out =`the value of s1 is ${st[0].order +2} and${st[1].order} `
// console.log(out)

st= st.map((item, index) => {
    const updated = item.order *5;
    // console.log(item)
    // console.log( st[item].order)
    item.order = updated;
    return item;

});

// // [].map((value, idx)=>{

// // });
console.log(st)

console.log(0/0)


nums = [5,10,12,20,25]

 nums.map((item, index)=>{ 
    nums[index]= item -5; // throwing error 
    // return item-5;
})


// nums.forEach(element => {
//     element = element *2;
// });
console.log(nums)