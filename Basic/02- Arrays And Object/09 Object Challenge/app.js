// Step 1
const library=[{
    title: 'the road ahead',
    author: 'Mustaf',
    status :{
        own: true,
        reading:false,
        read:false

    }
},
{
    
        title: 'stave jobs',
        author: 'walter Isaacson',
        status :{
            own: true,
            reading:false,
            read:false}
 },
           {
           title: 'Mockingjay',
            author: 'Suzannw collins',
            status :{
                own: true,
                reading:false,
                read:false}
          }
]
// step 2

library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;

// Step 3
const {title: Mustaf}=library[0];

console.log(Mustaf);

console.log(library)


// step 4

const str=JSON.stringify(library)
console.log(str)