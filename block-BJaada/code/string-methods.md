Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

    - parameter : It do not accept any parameter  
    - Return : string converted to uppercase
    - Example :

      ```js
      let message = "Arya stark" ;
        message.toUpperCase // "ARYA STARK"
      let user = "John Doe" 
        user.toUpperCase // "JOHN DOE"
      let sentence = "this is first sentence of paragraph"
        sentence.toUpperCase // "THIS IS FIRST SENTENCE OF PARAGRAPH" 
      ```
    - `toUpperCase` Donot accept any parameter and after calling return string converted to uppercase. Other than string value it return undefined 


3. `toLowerCase`

    - parameter : It do not accept any parameter 
    - return : string converted to lowercase
    - example

    ```js
    let work = "STUDY";
      work.toLowerCase() // "study"
    let tagline = "EVERY THING NEED TO BE DEVELOPER"
      tagline.toLowerCase() //  'every thing need to be developer'
    let line = "This IS HEading OF PaRaGraPh giVen BeLoW"
      line.toLowerCase // 'this is heading of paragraph given below'
    ```

    - `toLowerCase` donot accept any parameter and after calling return string converted to lowercase. Other than string value it return undefined 


4. `trim`

    - Parameter : It do not accept any parameter
    - return : string by removing whitespace from both the end
    - Example : 

    ```js
      let topic = "     this is first topic of this chapeter     "
        topic.trim() // 'this is first topic of this chapeter'
      let uppercase = "     THIS IS FIRST TOPIC OF THIS CHAPETER            "
        uppercase.trim() //  'this is first topic of this chapeter'
      let user = "john doe"
        user.trim // 'john doe' 
    ```

    - `trim` it donot accept any parameter and after calling return string by removing whitespace from start and end of the string. if there is no space it return string as it is.


5. `trimEnd`

    - parameter : It dont accepet any parameter.
    - return : string by removing white space from end or right side of string.
    - Example :

    ```js
      let topic = "     this is first topic of this chapeter     "
        topic.trimEnd() // '     this is first topic of this chapeter'
      let uppercase = "     THIS IS FIRST TOPIC OF THIS CHAPETER            "
        uppercase.gtrimEnd() // '     THIS IS FIRST TOPIC OF THIS CHAPETER'
      let name = "john          "
        name.trimEnd() // 'john'
      let msg = "this is message"
        msg.trimEnd() // 'this is message'
    ```

    - `trimEnd` It does not accept any parameter and after calling return string by removing whitespace from end or right side of string and if there is no any space at right side of string it will return string as it is.


6. `trimStart`

    - Prameter : It dont accepet any parameter.
    - return : string by removing white space from beginning of string.
    - Example : 

    ```js
      let idea = "    this is idea      "
        idea.trimStart() //  'this is idea      '
      let context  = "         This is not going"
        context.trimStart() // 'This is not going'
      let uppercase = "     THIS IS FIRST TOPIC OF THIS CHAPETER            "
        uppercase.trimStart() // 'THIS IS FIRST TOPIC OF THIS CHAPETER         '
    ```

    - `trimStart` It does not accept any parameter and after calling return string by removing whitespace from beginning of string and if there is no any space at beginning of string it will return string as it is.


7. `concat`

    - Parameters :  (number data type)  One or more strings and variables to concatinate to string
    - return : String contain combined all the text of string provieded in parameter
    - Example : 

    ```js
    let message = "Arya stark" ;
      message.concat(" ","Abhijeet") // 'Arya stark Abhijeet'
    let work = "Study";
      work.concat(message) // 'studyArya stark'
    let sentance = "A quick brown fox jumped over a lazy dog"
      sentance.concat(" ",work," ",message)  // 'A quick brown fox jumped over a lazy dog study Arya stark'
    ```
    `concat` It accpet one or more string and space and variable name and return string contain combined all the text of string provided in parameter,


8. `endsWith`

    - Prameter : 
     - searchstring :(string data type) charater that is to be searched at end of string
     - length : optional - (number data type) - defaults to str.length
    - return 
      true : if given character is found at end of string or given length 
      false : if not found
    - Example : 
    ```js
      let message = "Arya Stark"
        message.endsWith("stark") // true
      let message = "Arya Stark"
        message.endsWith("stark", 4) // false
      let sentance = "A quick brown fox jumped over a lazy dog"
        sentance.endsWith("jumped", 24) // true
        sentance.endsWith("jumped") // false
        sentance.endsWith("dog") // true
        sentance.endsWith("g") // true
        sentance.endsWith("") // true
        sentance.endsWith(" ", 25) // true
    ```

    `endsWith` It accepts one string data type and one number data type if given charater is found at end or given lenngth then it return true if not found it return false.


9. `includes`

    - Parameter : 
      - searchString :  (number data type)
      - position : (optional) defaults to 0
    - return : 
      - true : If searchstring is found any where within given string.
               if searchstring is found ant given position in given string. 
      - false : if not found 
    - Example : 
    ```js
      let sentance = "A quick brown fox jumped over a lazy dog"
        sentance.includes("fox") // true
      let message = "Arya stark"
        message.includes("Arya", 0) // true
        message.includes("Arya", 1) // false
        message.includes("rya", 1) // true
        message.includes("strak", 5) // true
        message.includes("trak", 6) // true
    ```
    `includes` It accpets one searchstring and one optional position(number data type) if serchstring found in given string return true else false.
    
10. `indexOf`

    - Parameter : 
      searchValue :  (string data type) string value for search
      fromIndex : (optional)  defaults to 0 if formIndex is greater than searchvalue then return -1
    - return : (number data type) index of first occurance of searchValue if not found -1
    - Example : 
    ```js
      let sentance = "A quick brown fox jumped over a lazy dog"
        sentance.indexOf("brown") // 8
        sentance.indexOf("brown", 5) // 8
        sentance.indexOf("brown", 10) // -1
        sentance.indexOf("brown", 20) // -1
      let message = "Arya stark"
        message.indexOf() // -1
        message.indexOf("stark") // 5 
      let str = "this is string"
        str.indexOf("Abhijeet") // -1
        str.indexOf("") // 0
      let string = 'To be, or not to be, that is the question.'
        string.indexOf("be", 10) // 17
        string.indexOf("be") // 3
      ```

      `indexOf` It return index of searchValue of first occurance of specified value, starting the search from searching formIndex. if value not found return -1


11. `lastIndexOf`

    - Parameter :
        searchVlaue :  (string data type) string value for search
        fromIndex : (Optional)  (number data type) defalult to Infinity if formIndex value is lower searchValue then it will return -1
    - return : index of last occurance of searchValue.
    - Example :
    ```js
    let string = 'To be, or not to be, that is the question.'
        string.lastIndexOf("be") // 17
        string.lastIndexOf("be", 5) // 3
        string.lastIndexOf("Abhi") // -1
    let msg = "Arya Strak"
        msg.lastIndexOf("Stark") // 5
    ```

    `lastIndexOf` It return index of searchValue of last occurance of specified value, searching backword from formIndex. if value not found return -1


12. `padEnd`

    - Paramater : 
      targetLength : (number data type), default to length of string 
      padString : (optional) 
    - return : string of specified targetLength if padstring provided  applied at end. 
    - Example : 
    ```js
      let msg = "Arya Strak"
        msg.padEnd(20) // "Arya Strak        "
        msg.padEnd(20, "A") // "Arya StrakAAAAAAAAA"
      let string =  'To be, or not to be, that is the question'
        str.padEnd(50, ".") // 'To be, or not to be, that is the question.........'
        str.padEnd(20, ".") // 'To be, or not to be, that is the question'
      let message = "Arya stark"
        message.padEnd("") // 'Arya stark'
        message.padEnd(5) // 'Arya stark'
    ```
    `padEnd` It accepts targetlength (number data type) raeturn the string to given length if padString is provided then length is filled with given padString at end


13. `padStart`

    - Parameter : 
      targetLength : (number data type), default to length of string
      padString : (optional) 
    - return : string to specifed targetLength and if padString is provided then it applied at start.
    - Example :
      ```js
        let msg = "Arya Strak"
          msg.padStart(20) // '          Arya stark'
          msg.padStart(20, "*") // '**********Arya Strak'
        let string =  'To be, or not to be, that is the question'
          str.padStart(60, "'") // "''''''''''''''''''To be, or not to be, that is the question."
          str.padStart(50) // '        To be, or not to be, that is the question.'

      ```

    `padStrat` It accepts targetLength (number data type) return string to given length if padString is provided then length is filled with given padString at strat.


14. `repeat`

    - Parameter : count : (number data type) an intiger between 0 to infinity indicating number of times to repeat the string.
    - return : String containing given number of copies of string.
    - Example : 
    ```js
      let msg = "Arya Strak"
        msg.repeat(5) // 'Arya StrakArya StrakArya StrakArya StrakArya Strak'
      let worl = "study"
        work.repeat("10") // 'studystudystudystudystudystudystudystudystudystudy'
      let string = 'To be, or not to be, that is the question.'
        string.repeat(2) // 'To be, or not to be, that is the question.To be, or not to be, that is the question.'
    ```

    `repeat` It accept count(number data type) and return specified number of copies of called string. and it will concatinate the copies


15. `replace`

    - Parameter :
      - regexp (pattern) : (string data type) The match or matches replaced with new Substring. 
      - substr : (string data type) It is string that is to be replaced by newSubstr.
      - newSubstr (replacement) :  (string data type)The String that replaces the substr 
      - replacerFunction (replacement) : (string data type) A function to be invoked to create the new substring 
    - return : New string with some or all matches of pattern replaced by replacement
    - example :
    ```js
      let string = 'To be, or not to be, that is the question.'
        string.replace("question", "answer") // 'To be, or not to be, that is the answer.'
      let msg = "Arya Stark"
        msg.replace("Stark", "John") // "Arya John"
      let sentance = 'A quick brown fox jumped over a lazy dog'
        sentance.replace("dog", "fox") // A quick brown dog jumped over a lazy dog'
    ```

    `replace` returns a new string with some or all matches of a pattern replaced by a replacement. 


16. `slice`

      - Parameter : 
        - beginIndex : (number data type) zero based at which to begin extraction.
        - endIndex : (optional) (number data type) The zero-based index before which to end extraction.
      - return : New string containig remained section after extraction
      - Example : 
      ```js
          let string = 'To be, or not to be, that is the question.'
            string.slice(10) // 'not to be, that is the question.'
            string.slice(-20) // 'hat is the question.'
            string.slice(10,-10) // not to be, that is the'
          let sentance = 'A quick brown fox jumped over a lazy dog'
            sentance.slice(-40) // 'A quick brown fox jumped over a lazy dog'
            sentance.slice(-30, -10) // 'own fox jumped over '
            sentance.slice(0,20) // 'A quick brown fox ju'

      ```

      `slice` it accepts beginIndex and after extraction from start return remained string, it also accepts endIndex and after extraction return fron end return remained string.
      if beginIndex is more than length it return '' empty string



17. `split` 

    - Parameter : 
        separator : (optional)  (string data type)
        limit : (optional)  (number data type)
    - return : An Array of string
    - Example :
    ```js
        let string = 'To be, or not to be, that is the question.'
            string.split(" ") //  ['To', 'be,', 'or', 'not', 'to', 'be,', 'that', 'is', 'the', 'question.']
            string.split() // ['To be, or not to be, that is the question.']
            string.split("t" , 4) // ['To be, or no', ' ', 'o be, ', 'ha']
        let message = "Arya stark"
            message.split("") // ['A', 'r', 'y', 'a', ' ', 's', 't', 'a', 'r', 'k']
            message.split("y") // ['Ar', 'a stark']
        let work = "study"
            work.split("u") // ['st', 'dy']
            work.split("") // ['s', 't', 'u', 'd', 'y']
      ```

    `split` It devides string into ordered list of substring
            if seprator is empty "" str is converted into each of its charachter
            if sperator does not occured in str return str in an array

            if limit is 0 return empty array []
            limit stop the spliting at specified limit


18. `substring` 

    - Parameter :  
      indexStart : (number data type)The index of first character to include in the returned substring 
      indexEnd : (optional)  (number data type) index of first character to exclude from returned substring
    - return : New string containg specified part of given string 
    - Example : 
      ```js 
        let string = 'To be, or not to be, that is the question.'
            str.substring(5) // ', or not to be, that is the question.'
            str.substring(5,30) // ', or not to be, that is t'
        let msg = "Arya stark"
            msg.subString(0,5) // 'Arya '
        let sentance =  'A quick brown fox jumped over a lazy dog'
            sentance.substring(10,10) // ''
            sentance.substring(10,30) // 'own fox jumped over '
        

      ```
      `substring` It returns the part of the string between the start and end indexes