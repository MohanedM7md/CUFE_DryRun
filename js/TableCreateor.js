function CreateDayShcduale(endTime,DayCaontain,dayName){
    const InsertionPlace = document.querySelector(DayCaontain);
    for(i= 0; i < endTime; i++){
        const CreateSchedualBlocks = document.createElement("div");
        CreateSchedualBlocks.id = `SundayGrid${i}`;
        CreateSchedualBlocks.className = `Grid`;
        let T  = (i+8)%12;
        CreateSchedualBlocks.innerHTML = `${T}:00<br>${T}:50`;
        CreateSchedualBlocks.style.gridColumn = `${i+1}`;
        
        InsertionPlace.append(CreateSchedualBlocks);
    }
}


function updateGridContainer(columns,gridCont) {
    
    const gridContainer = document.querySelector(gridCont);
    const gridTemplateColumns = `repeat(${columns}, 32px)`;
    const gridTemplateAreas = `'${'day '.repeat(columns).trim()}'`;
    gridContainer.style.gridTemplateColumns = gridTemplateColumns;
    gridContainer.style.gridTemplateAreas = gridTemplateAreas;
}

//debugger


fetch('js/scheduale.json')
.then(Response => Response.json())
.then(value=>{
    
    for (const key in value) {
        let endTime = value[key].endtime[0]; 
       
        updateGridContainer(endTime,`.${key}grid`);
        CreateDayShcduale(endTime,`.${key}grid`);
    }

})
.catch(error=>console.log(error));

