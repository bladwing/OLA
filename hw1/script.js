let row = 4;
let col = 5;


const getTable = (row, col) => {
    var arr  = [];
    let f = 1;
    
    for (let i = 0; i < row; i++) {
       arr.push([f]);
       
       f++;
    }
    
    for (let x = 0; x < col; x++) {
        
            for (let i = 0; i < row; i++) {
                arr[i].push(f);
                f++   
            }        
    }
return arr
}



console.log(getTable(row, col));