window.addEventListener("CoursesAdded", (event) => {
    
    if(event.detail)
        HandleSelction();
});


function HandleSelction(){
    const coursesBlocks = document.querySelectorAll('.CoursesBlocks');
    let color = true;
    coursesBlocks.forEach(Element =>{

        Element.addEventListener('click',event => {
            
            const OldEnabledBlocks = document.querySelectorAll('.Enabled');
            const tragetedBlock = event.target;
            const toggleType = tragetedBlock.classList.toggle ("Enabled");
            
            EveryLecHasTut(document.querySelectorAll('.Enabled'));
            if(toggleType){
                console.log("Hello")
                RemoveMultiSameSelction(OldEnabledBlocks,tragetedBlock);
                CheckSameColSelction(tragetedBlock);
            }

            creditsCalaculator(document.querySelectorAll('.Enabled.Lecture'));

        })
    })
}



function EveryLecHasTut(EnabledcoursesBlocks){
    const allLectures = document.querySelectorAll('.Lecture');
    const allTutorials = document.querySelectorAll('.Tutorial');

    // Reset all "ErrorSelction" classes
    allLectures.forEach(e => e.classList.remove("ErrorSelction"));
    allTutorials.forEach(e => e.classList.remove("ErrorSelction"));
    
    EnabledcoursesBlocks.forEach(Element =>{
        if(Element.classList.contains("Lecture")){
            const TutOfThisLec = document.querySelectorAll(`.Tutorial.${Element.id}`);
            
            const EnabledTuts = Array.from(TutOfThisLec).filter(e =>e.classList.contains("Enabled") );
            

           
            
            if (EnabledTuts.length ===0) {
                TutOfThisLec.forEach(e =>e.classList.add("ErrorSelction") )
            } else{
                TutOfThisLec.forEach(e =>e.classList.remove("ErrorSelction"))
            }
        }else{
            const LecOfThisLec = document.querySelectorAll(`.Lecture.${Element.id}`);
            
            const EnabledLecs = Array.from(LecOfThisLec).filter(e =>e.classList.contains("Enabled") );
            
            if (EnabledLecs.length === 0) {
                LecOfThisLec.forEach(e =>e.classList.add("ErrorSelction") )
            } else{
                LecOfThisLec.forEach(e =>e.classList.remove("ErrorSelction"))
            }
        }

    })
}


function RemoveMultiSameSelction(oldEnable, recentEnabledItem){
    if(!recentEnabledItem)
        return;

    const oldSlectedOne = Array.from(oldEnable)
    .filter(
        e=>{
             return e.classList.contains(`${getBlockType(recentEnabledItem)}`)
                    &&
                    e.classList.contains(`${recentEnabledItem.id}`)
                    &&
                    e.classList.contains('Enabled');
}   );

    const AllSectionSameType = document.querySelectorAll(`.${getBlockType(recentEnabledItem)}.${recentEnabledItem.id}.Enabled`);
 
    if(AllSectionSameType.length > 1){
  
        oldSlectedOne[0].classList.remove('Enabled');
       
    }
   
}



function getBlockType(element) {
        return element.classList[1]; // Return the second (middle) class
}

function creditsCalaculator(SelectedElements){
    if(SelectedElements.length>0)
    {    
        
        const numberOfcredits = Array.from(SelectedElements).reduce((accumulator, current)=> accumulator + Number(current.dataset.credits),0)
        
        
        document.getElementById("CreditsNum").innerText= numberOfcredits;
    }
    else
        document.getElementById("CreditsNum").innerText=0;
}


function CheckSameColSelction(RecentAddedBlock){
    const Dayblock = RecentAddedBlock.parentElement.querySelectorAll(".Enabled");
    console.log(Dayblock);
    Dayblock.forEach(item=>{
        console.log('true1')
        const BlocksCol = getComputedStyle(item).gridColumn.trim().split('/');
        const RecentAddedCol = getComputedStyle(RecentAddedBlock).gridColumn.trim().split('/');
        console.log(`Shof: ${BlocksCol} wdi ${RecentAddedCol}`);
        if(OverlapCheck(BlocksCol,RecentAddedCol) && RecentAddedBlock.id !== item.id){
            
            item.classList.remove('Enabled');
            
        }
    })
}

function OverlapCheck(range1, range2){
    if(range1[0] == range2[0] && range2[0] == range2[0])
        return true;//make sure that the two range aren't concide

    return range1[0] < range2[1] && range2[0] < range1[1]; // checks if there is C between range1 and range2 

}
