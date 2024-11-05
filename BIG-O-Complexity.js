// Big O(N)

/*
function BigO(n){
    for(let i=0; i<n; i++){
        console.log(i);
    }
}

BigO(10);
*/

// Big O(N^2)

function BigO_N2(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            console.log(i,j);
        }
    }
}

BigO_N2(10); 
