//Function checks if 2 Cells going to overelap
function OverlapCheck(range1, range2){
    if(range1[0] == range2[0] && range2[0] == range2[0])
        return true;//make sure that the two range aren't concide
   // console.log("Hellos")
    return range1[0] < range2[1] && range2[0] < range1[1]; // checks if there is C between range1 and range2 

}

// Function check if a grid cell is occupied
function isGridCellOccupied(row, column,GridContain) {
    // Select all grid items
    const GridContainer = document.querySelector(GridContain);

    const items = GridContainer.children;
    
    // Check each item's position
    for (const item of items) {
        const gridRow = getComputedStyle(item).gridRowStart;
        const gridColumn = getComputedStyle(item).gridColumn;
        const OccpupiedCell = gridColumn.trim().split('/');
        if (parseInt(gridRow) === row && OverlapCheck(OccpupiedCell,column)) {
            return true; // Found an element at the specified cell
        }
    }
    return false; // No element found at the specified cell
}




fetch('js/scheduale.json')
.then(Response => Response.json())
.then(value=>{
    for(key in value){
        
        let Courses =value[key].Courses;
        
        Courses.forEach((element,index) => {
            
    
            colRange = [element.start_time.slice(0,2)-7,element.end_time.slice(0,2)-6]; // Getting the Column range from the json File
            //Create the course Div block;
            const newCourse = document.createElement('div');
            newCourse.id = `${element.course_code}`;
            newCourse.className = `CoursesBlocks ${element.type} ${element.course_code}`;
            newCourse.title = `${element.name} - Group ${element.g_number} (${element.course_code})\n${element.type}\n${element.location}`;
            newCourse.innerText = element.course_code;
            newCourse.setAttribute('data-Credits', element.credits);
            let i = 4;
            
            while(isGridCellOccupied(i, colRange,`.${key}grid`)){
                i++;
            }
            newCourse.style.gridRow = `${i}`;
            newCourse.style.gridColumn = `${colRange[0]}/${colRange[1]}`;
    
            document.querySelector(`.${key}grid`).append(newCourse);

        });
    }
   
}).then(()=>{

    const event = new CustomEvent("CoursesAdded", {
            detail: true
        });
        window.dispatchEvent(event);
})
.catch(err=>console.error(err));
