'use strict';


function BubbleSort(A)       // A - массив, который нужно
{                            // отсортировать по возрастанию.
    let n = A.length;
    
    for (let i = 0; i < n-1; i++) { 
         for (let j = 0; j < n-1-i; j++) { 
            if (A[j+1] < A[j]) { 
                let t = A[j+1]; 
                A[j+1] = A[j]; 
                A[j] = t; 
            }
        }
     }   
     console.log(A);                  
    return A;    // На выходе сортированный по возрастанию массив A.
}

BubbleSort([9, 'box', 'kek', 'crush', '2', 'lamer', 10, 22]);