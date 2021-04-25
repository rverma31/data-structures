// this is basic program for insertion sort in javascript

var arrCollection = [100,90,80,70,60,50,40,30,20,10];

function InsertionSort(unsortedArr) {
    var key ; // this variable holds value of current element
    var j ; // this variable defines outer loop
    var i; // this variable defines inner loop
    for (var j = 1; j <= unsortedArr.length - 1 ; j++) {
        key = unsortedArr[j];
        i = j - 1;
        while ( i >= 0 && unsortedArr[i] >= key ) {
            unsortedArr[i + 1] = unsortedArr[i] ;
            i = i - 1;
        }
        unsortedArr[i + 1] = key;
    }
     return unsortedArr;
}

InsertionSort(arrCollection);