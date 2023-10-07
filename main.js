/* ::-:: >>> grid generate main js <<< ::-::*/

(function(){

/* get the elements: */
const mainGrid = document.querySelector('.main_wrap');
const resBtn = document.querySelector('#reset_button');
const setBtn = document.querySelector('#set_button');
const rowInpt = document.querySelector('#row_value');
const colInpt = document.querySelector('#col_value');
const sizeInpt = document.querySelector('#size_value');
const gapInpt = document.querySelector('#gap_value');


/** initialize the value variables:
* one for the grid row count 
* one for the grid column count
* others for size and gap...
*/
let colMax = 2;
let rowMax = 2;
let shapeSize = 4;
let gapSize = 2;


/* get the input values for each value variable: */
rowInpt.addEventListener('input',()=>{

    return rowMax = rowInpt.value;

});

colInpt.addEventListener('input',()=>{

    return colMax = colInpt.value;

});

sizeInpt.addEventListener('input',()=>{

    return shapeSize = sizeInpt.value;

});

gapInpt.addEventListener('input',()=>{

    return gapSize = gapInpt.value;

});


/* :: set the grid :: */
setBtn.addEventListener('click', ()=>{

    /* first clear the previous grid
    * or they will overlay each other.. */
    resetGrid()

    /* then add the values: */
    mainGrid.style.gridTemplateColumns = `repeat(
        ${colMax}, ${shapeSize}rem)`;

    mainGrid.style.gridTemplateRows = `repeat(
        ${rowMax}, ${shapeSize}rem)`;
    
    mainGrid.style.gap = `${gapSize}px`;

    /* add the template style: */
    createGridPlates();

});


/** deklare an global
*   variable for the element 
*   initialization for loops below..
*/
let newShape;


function createGridPlates(){

    /** ▼ nested loop:
    * outer loop for the row count,
    * inner for the column count: */
    for( let i = 1; i <= rowMax; i++){

        /* create the shapes => colMax of -> shapes */
            for( let j = 1; j <= colMax; j++){

                newShape = document.createElement('div');

                newShape.classList.add('shape');
        
                mainGrid.appendChild(newShape)
        
                /* direct every single shape to its
                * grid area column with -> j */
                newShape.style.gridColumn =`${j}`;
        
        /** :: >>>> ! assign the outer Loop index i to your rows 
        * so the col counter jumps into the next row.. <<<< ::*/
                if( i <= rowMax){
        
                    newShape.style.gridRow = `${i}`;
        
                }
                /* prevent counting over the edge: */
                else if( i >= rowMax){
                    
                    break;
        
                }
        
            }
         
        };
}


/** reset the grid.style(css), 
* the input and 
* kill the div elements: */
function resetGrid(){

    mainGrid.style.gridTemplateColumns = `repeat( 2, 4rem)`;
    mainGrid.style.gridTemplateRows = `repeat( 2, 4rem)`;

    colInpt.value = null;
    rowInpt.value = null;
    sizeInpt.value = null;
    gapInpt.value = null;

    const noValueArray = [];
    /* clear the grid from the "newShape" div elements */
    mainGrid.replaceChildren(noValueArray);

}

resBtn.addEventListener('click', resetGrid);


}());