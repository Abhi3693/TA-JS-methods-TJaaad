Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

    - Parameter : seperator (optional) 
    - Return : New string with all array joined by given parameter
    - Example : 
  
    ```js 
        let colors = ['red', 'orange', 'green', 'blue', 'white', 'yellow', 'pinke', 'blacke']
          colors.join() // 'red,orange,green,blue,white,yellow,pinke,blacke'
          colors.join("")  // 'redorangegreenbluewhiteyellowpinkeblacke'
          colors.join("-") // 'red-orange-green-blue-white-yellow-pinke-blacke'
          colors.join("*") // 'red*orange*green*blue*white*yellow*pinke*blacke'
        let numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8];
          numbers.join() // '1,2,3,4,5,6,7,1,2,3,4,5,6,7,8'
          numbers.join("") // '123456712345678'
          numbers.join("..") // '1..2..3..4..5..6..7..1..2..3..4..5..6..7..8'
        let msg1 = [1,2,3,4]
        let msg2 = ["arya","john","sameer","stark"]
          msg1.join(msg2) // '1arya,john,sameer,stark2arya,john,sameer,stark3arya,john,sameer,stark4'
    ```
    - `join` : It accepet (optional) array, any string value and return new string concatenating all of the element with separator provided 
    - Mutate or not : It does not mutate the original array


3. `flat`

    - Parameter : depth (optional) defaults to 1 , depth level specifying how deep nested array structure  should be flattened.
    - Return : New array with concatenated given depth into it.
    - Example : 
    ```js 
        let num1 = [1,2,[3,4,[5,6,[7,8,[9,10]]]]];
            num1.flat(1) // (7) [1, 2, 3, 4, 5, 6, Array(3)]
            num1.flat(Infinity) // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        let msg = ["arya",["stark",["john",["sameer",["doe"]]]]];
            msg.flat(3); // (5) ['arya', 'stark', 'john', 'sameer', Array(1)]
            msg.flat(Infinity); // (5) ['arya', 'stark', 'john', 'sameer', 'doe']
    ```
    - `flat`:  It creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
    - Mutate or not :  It does not mutate the original array

4. `push`

    - Parameter : element - element to add at end of array it can be any type of value (string,number,boolean,undefined,null,NaN,variable,array,object)
    - Return : It return new length of that array
    - Example : 
    ```js 
          let colors = ['red', 'orange', 'green', 'blue']
              colors.push("white"); // 5 (length)  // ['red', 'orange', 'green', 'blue', 'white']
              colors.push("pink","sky","black"); // 8 // ['red', 'orange', 'green', 'blue', 'white', "pink", "sky", "black"]
              colors.push(1,2,3,4); // 12 //  ['red', 'orange', 'green', 'blue', 'white', "pink", "sky", "black", 1,2,3,4]
          let msg = "Arya stark"
             msg.push(colors) ; // 2  //   ['Arya stark', Array(12)]

    ``` 
    - `push` : It accpet n numbers of elements and return length of that array. if we see that array all element are add at the end of that array
    - Mutate or not : Mutate

5. `indexOf`

    - Parameter : 
        searchElement - element to search in array
        fromElement - (optional) it accepet number data type and The index to start the search at forword
    - Return : first index of array 
    - Example : 
    ```js 
          let colors = ['red', 'orange', 'green', 'blue']
              colors.indexOf("green"); // 2
              colors.indexOf("blue"); // 3
              colors.indexOf("green", 1) // 2
              colors.indexOf("green", 5) // -1
          let numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8]
              numbers.indexOf(3); // 2
              numbers.indexOf(5,8); // 11
              numbers.indexOf(5,15); // -1
    ```
    - `indexOf` It accepet searchelement and return its first index and if not found will return -1. search start from leftend 
    - Mutate or not : It does not mutate the original array


6. `lastIndexOf`

    - Parameter :
        searchElement - element to search in array
        fromElement - (optional) it accepet number data type and The index to start the search at backword
    - Return : last index of array 
    - Example : 
    ```js 
          let numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8]
              numbers.lastIndexOf(3); // 3
              numbers.lastIndexOf(7,15)); //  13
              numbers.lastIndexOf(1); // 7
              numbers.lastIndexOf(1,4); // 0
              numbers.lastIndexOf(1,8); // 7
          let colors = ['white', 'black','red', 'blue', 'yellow', 'orange', 'green', 'blue', 'white', 'yellow', 'pink', 'black']
              colors.lastIndexOf("yellow"); // 9
              colors.lastIndexOf("blue"); //7
              colors.lastIndexOf("yellow",15); //9
              colors.lastIndexOf("yellow",5); 4
    ```
    - `lastIndexOf` It accepet searchelement and return its last index and if not found will return -1. search start from rightend
    - Mutate or not : It does not mutate the original array

7. `includes`

    - Parameter :
        searchElement - value to search in array
        fromElement - (optional) defaults to 0, position in array to beginning search for value
    - Return : boolean data type if found return true if not found return false
    - Example : 
    ```js 
          let numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8]
              numbers.includes(3); // true
              numbers.includes(10); // false
              numbers.includes(4,12); // false
          let colors = ['red', 'orange', 'green', 'blue', 'white', 'yellow', 'pink', 'blacke']
              colors.includes("blue"); // true
              colors.includes("chocolate"); // false
              colors.includes("pink", 5); // true
          let allValue = [true,false,12,undefined,null,NaN];
              allValue.includes(false); // true
              allValue.includes(undefined); // true
              allValue.includes(""); // false
    ```
    - `include` : It accepet value of any data type and formElement (optional) and search that value if found return true if not found return false
    - Mutate or not : It does not mutate the original array.

8. `reverse`

    - Parameter : no parameter
    - Return : Reversed array
    - Example : 
    ```js 
          let numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8]
              numbers.reverse() // [8, 7, 6, 5, 4, 3, 2, 1, 7, 6, 5, 4, 3, 2, 1]
          let allValue = [true,false,12,undefined,null,NaN];
              allValue.reverse() // [NaN, null, undefined, 12, false, true]
          let colors = ['red', 'orange', 'green', 'blue', 'white', 'yellow', 'pink', 'blacke']
              colors.reverse() // ['black', 'pink', 'yellow', 'white', 'blue', 'green', 'orange',]
    ```
    - `reverse` : It reverse an array. First array become last and last become fisrt array
    - Mutate or not : Mutate


9. `every`

    - Parameter :
        calback function
            element : current element
            index : index of current elemenet
            array : optional : give accesses to array
        thisArg : (optional) : Value to use this when executing function
    - Return : 
        true : if every array return true or truthy value then return true 
        false : if one of element or all element return false array will return false 
    - Example : 
    ```js 
         let numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8]
            let ret = numbers.every(function(number){return number > 0}) // true
            let ret = numbers.every(function(number){return number > 5}) // false
        let colors = ['red', 'orange', 'green', 'blue', 'white', 'yellow', 'pinke', 'blacke'] 
            colors.every(function(color){return color.includes("e")}) // true
            colors.every(function(color){return color.includes("w")}) // false
    ```
    - `every` : It test weather element passed in call back function is true or not if all element are true then array return true. if any one or more than one element become false then array return false
    - Mutate or not : It does not mutate the original array.

10. `shift`

    - Parameter : no parameter
    - Return : Removed element from array 
    - Example : 
    ```js 
          let numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8]
              numbers.shift() // 1  /// [2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8]
          let colors = ['red', 'orange', 'green', 'blue', 'white', 'yellow', 'pinke', 'blacke'] 
              colors.shift() // 'red'  ///  ['orange', 'green', 'blue', 'white', 'yellow', 'pinke', 'blacke'] 
          let allValue = [true,false,12,undefined,null,NaN];
              allValue.shift() // true   ///  [false,12,undefined,null,NaN];
    ```
    - `shift` It donat accept any parameter and remove first element from array and return removed element
    - Mutate or not : mutate

11. `splice`

    - Parameter :
        start : element at which to start changing (deleting)array
        deleteCount : (Optional) default to n -  integer indicating number of elements in array to remove
        item : (Optional)   element to add in array, beginning
    - Return : An array containing deleted element
    - Example : 
    ```js 
          let numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8]
              numbers.splice(4);  //  [5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8]
              numbers.splice(5,1,"Arya");  // [6]  /// [1, 2, 3, 4, 5, "Arya", 7, 1, 2, 3, 4, 5, 6, 7, 8]
              numbers.splice(10,3,100,50,200  );  // [6,7,1]    ///[1, 2, 3, 4, 5, 100, 50, 200, 7, 1, 2, 3, 4, 5, 6, 7, 8]
          let colors = ['red', 'orange', 'green', 'blue', 'white', 'yellow', 'pinke', 'blacke'] 
              colors.splice(5) // ['yellow', 'pinke', 'blacke']
              colors.splice(5,1,"purple") // ['yellow']
              colors.splice(2,3,"skyblue",12,true) // ['green', 'blue', 'white']  
              colors.splice(5,0,"skyblue") // []   //// ['red', 'orange', 'green', 'blue', 'white', 'skyblue', 'yellow', 'pinke', 'blacke']
    ```
    - `splice` : This method changes the array by removing , replacing or by concatenating element
    - Mutate or not :

12. `find`

    - Parameter :
          callBackFn : function to execute on each value in array it take three argument
              element : current element
              index : (optional) index of current element
              array : (optional) : array that is called 
          thisArg :  (optional) - object to use this inside  callBackFn
    - Return : The value of the first element in the array that satisfies the provided testing function.
    - Example : 
    ```js 
            let numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8]
                let found = numbers.find(function(number){ return number > 5});  /// 6
            let colors = ['red', 'orange', 'green', 'blue', 'white', 'yellow', 'pinke', 'blacke'] 
                let found = colors.find(function(color){ return color > "u"});  /// "white"
                let found = colors.find(function(color){ return color !== "yellow" });  /// "red"

    ```
    - `concat`
    - Mutate or not :  It does not mutate the original array.

13. `unshift`

    - Parameter : elementN - An element to add at start od array
    - Return : New length of array
    - Example : 
    ```js 
          let numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8]
              numbers.unshift("Abhijeet"); // 16    /// 'abhijeet', 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8]
              numbers.unshift(true); // 17   //// [true,'abhijeet', 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8]
              numbers.unshift("hello World");// 18  ////["hello World", true, 'abhijeet', 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8]
          let colors = ['red', 'orange', 'green', 'blue', 'white', 'yellow', 'pinke', 'blacke'] 
              colors.unshift(12)  // 8  /// [12,'red', 'orange', 'green', 'blue', 'white', 'yellow', 'pinke', 'blacke'] 
              colors.unshift("purple") // 9 // ["purple",12,'red', 'orange', 'green', 'blue', 'white', 'yellow', 'pinke', 'blacke'] 
    ```
    - `unshift` :  It accept element of any data type and add it at start of array
    - Mutate or not : Mutate

14. `findIndex`

    - Parameter :
        callBackfn : A function to execute all value in function untill function turn true. It takes three argument 
            element : current element being passed
            index: (optional) - index of current element.
            array: (optional) - arrya findIndex called upon
        thisArg: (optional) - object to use this when executing callBackFunction
    - Return : The index of the first element in the array that passes the test. Otherwise, -1
    - Example : 
    ```js 
          let numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8]
              numbers.findIndex()Element => Element > 7 // 14
          let numbers = [100, 50, 40, 80, 500, 800, 1000, 1600, 1400]
              numbers.findIndex(Element => Element > 1000) // 7  
    ```
    - `findIndex` : it returns the index of the first element in the array that satisfies the provided testing function
    - Mutate or not : It does not mutate the original array.

15. `filter`

    - Parameter :
        callBackfn : A function to test all the element in array . It takes three argument 
            element : current element being passed to array
            index: (optional) - index of current element.
            array: (optional) - arrya filter called upon
        thisArg: (optional) - object to use this when executing callBackFunction
    - Return : New array with the element that pass the test.
    - Example : 
    ```js 
          let numbers = [100, 50, 40, 80, 500, 800,1000, 1600, 1400]
              numbers.filter(Element => Element > 100) // [500, 800, 1000, 1600, 1400];
          let numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8]
              numbers.filter(Element => Element < 5); /// [1, 2, 3, 4, 1, 2, 3, 4]
          let colors = ['red', 'orange', 'green', 'blue', 'white', 'yellow', 'pinke', 'blacke']
              colors.filter(Element => Element.length > 5) // ['orange', 'yellow', 'blacke']
    ```
    - `filter` : It calles the function and which element pass the test it retrun into new array
    - Mutate or not :  It does not mutate the original array.


17. `forEach`

    - Parameter :
        callBackfn : A function to execute each element
            element : current element being passed to array
            index: (optional) - index of current element.
            array: (optional) - arrya forEach called upon.
        thisArg: (optional) - Value to use as this when executing callBackFn
    - Return : Undefined  
    - Example : 
    ```js 
        let numbers = [100, 50, 40, 80, 500, 800,1000, 1600, 1400]
        let allNumbers = "";
              numbers.forEach(addNumbers);
              function addNumbers(num) {
                  allNumbers += num + " 


        let colors = ['red', 'orange', 'green', 'blue', 'white', 'yellow', 'pinke', 'blacke']
        let allcolors = "";
                  colors.forEach(addcolors);
                  function addcolors(color) {
                      allcolors += color + " ";
                  }
    ```
    - `forEach` it executes a provided function once for each array element.
    - Mutate or not : It does not mutate the original array.

18. `map`

    - Parameter :
          callBackfn : A function to execute each element of array. It has Three argument
              element : current element being passed to array
              index: (optional) - index of current element.
              array: (optional) - arrya map called upon.
          thisArg: (optional) - Value to use as this when executing callBackFn
    - Return : A new array with each element being the result of the callback function.
    - Example : 
    ```js 
          let numbers = [100, 50, 40, 80, 500, 800,1000, 1600, 1400]
              function add(num,index) {
                return num ;
              }
          let allNumber3 = number2.map(add)
          console.log(allNumber3)



          let colors = ['red', 'orange', 'green', 'blue', 'white', 'yellow', 'pinke', 'blacke']
              function addColors(color,index) {
                return color;
              }
          let allColor = colors.map(addColors)


          let num = [1,2,3,4,5] 
          let allNum = num.map(element => element * 2)
    ```
    - `map` : Return new Array with result of call back function 
    - Mutate or not : It does not mutate the original array.


19. `pop`

    - Parameter : No parameter
    - Return : removed element from array 
    - Example : 
    ```js 
          let colors = ['red', 'orange', 'green', 'blue', 'white', 'yellow', 'pinke', 'blacke']
              colors.pop() // 'blacke'
          let numbers = [100, 50, 40, 80, 500, 800,1000, 1600, 1400]
              numbers.pop() // 1400
          let allValue = [true,false,12,undefined,null,NaN];
              allValue.pop() // NaN
    ```
    - `pop` It remove last element of array and return that removed element
    - Mutate or not : Mutate

20. `reduce`

    - Parameter :
        callbackFn : 
        initialValue : (optional)
    - Return : final value of reducer function into single string
    - Example : 
    ```js 
          let numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8]
            numbers.reduce((acc,num) => {return acc += num},0) // 64
          let colors = ['red', 'orange', 'green', 'blue', 'white', 'yellow', 'pinke', 'blacke']
            colors.reduce((acc,color) => {return acc += color + " "},"") // 'red orange green blue white yellow pinke blacke'
          tagline = ["This is tagline of brand","Amul dudh pita hai india", "think different","innovationa and you","we creat next generation"]
                  tagline.reduce((acc,val) => acc += val + " ","")   /// 'This is tagline of brand Amul dudh pita hai india think different innovationa and you we creat next generation '
    ```
    - `reduce` : It callBackFn which calculate all value and final value come in one string.
    - Mutate or not :  It does not mutate the original array.

21. `slice`

    - Parameter :
          start : (optional) index at which extraction has to start
          end : (optional) indes before extraction has to end
    - Return : New array containg extracted element
    - Example : 
    ```js 
          let numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8]
              numbers.slice(4,10) // [5, 6, 7, 1, 2, 3]
              numbers.slice(10) // [4, 5, 6, 7, 8]
              numbers.slice(-5) // [1, 2, 3, 4, 5, 6, 7, 1, 2]
          let colors = ['red', 'orange', 'green', 'blue', 'white', 'yellow', 'pinke', 'blacke']
              colors.slice(2,5); // ['green', 'blue', 'white']
              colors.slice(5); // ['yellow', 'pinke', 'blacke']
              colors.slice(-5); // ['blue', 'white', 'yellow', 'pinke', 'blacke']

    ```
    - `slice` : It will slice from left end to on words, if nigative index is given it will silce from right end to onwords
    - Mutate or not :  It does not mutate the original array.

22. `some`

    - Parameter :
            callBackfn : A function to execute each element of array. It has Three argument
                element : current element being passed to array
                index: (optional) - index of current element.
                array: (optional) - arrya some called upon.
            thisArg: (optional) - Value to use as this when executing callBackFn
    - Return : Return true if callBackFn return true value for at least one element other wise return false
    - Example : 
    ```js 
        let numbers = [100, 50, 35, 40, 80, 500, 77, 800, 47, 1000, 1600, 1400, 53];
            let num = numbers.some(element => element % 2 === 0 ) // true
            let num = numbers.some(element => element > 5000 ) // false
        let colors = ['red', 'orange', 'green', 'blue', 'white', 'yellow', 'pinke', 'blacke']
            let col = colors.some(color => color.length > 10) // false
            let col = colors.some(color => color.length > 5) // true
    ```
    - `some` : It test weather atleast one element in array passes the test provided by function. if passes retrun true else false.
    - Mutate or not : It does not mutate the original array.

