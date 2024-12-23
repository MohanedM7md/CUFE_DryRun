window.addEventListener("CoursesAdded", (event) => {
    
    if(event.detail)
        HandleSelction();
});


function SelctionColorHandling(){
    const coursesBlocks = document.querySelectorAll('.CoursesBlocks');
    let color = true;
    coursesBlocks.forEach(Element =>{
    Element.addEventListener('click',event => {
        console.log('clicked')
        event.target.classList.toggle ("Enabled");
        LecturTutorialHandleing();
        })
    })
}


function LecturTutorialHandleing(){
    console.log('entered')
    const EnabledcoursesBlocks = document.querySelectorAll('.Enabled');
    const coursesBlocks = document.querySelectorAll('.CoursesBlocks');
    EveryLecHasTut(EnabledcoursesBlocks);
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
            console.warn(Array.from(TutOfThisLec))
            const EnabledTuts = Array.from(TutOfThisLec).filter(e =>e.classList.contains("Enabled") );
            

           
            
            if (EnabledTuts.length ===0) {
                TutOfThisLec.forEach(e =>e.classList.add("ErrorSelction") )
            } else{
                TutOfThisLec.forEach(e =>e.classList.remove("ErrorSelction"))
            }
        }else{
            const LecOfThisLec = document.querySelectorAll(`.Lecture.${Element.id}`);
            console.warn(Array.from(LecOfThisLec))
            const EnabledLecs = Array.from(LecOfThisLec).filter(e =>e.classList.contains("Enabled") );
            
            if (EnabledLecs.length === 0) {
                LecOfThisLec.forEach(e =>e.classList.add("ErrorSelction") )
            } else{
                LecOfThisLec.forEach(e =>e.classList.remove("ErrorSelction"))
            }
        }

    })
}


function HandleSelction() {
    SelctionColorHandling();
    
    
    
}


