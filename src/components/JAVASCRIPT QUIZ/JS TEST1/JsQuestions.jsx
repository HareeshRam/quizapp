const questions = [
        {
          id: 1,
          question: "What is JavaScript primarily used for?",
          options: [
            "A. Styling web pages",
            "B. Building web applications",
            "C. Sending emails",
            "D. Creating databases",
          ],
          answer: "B. Building web applications",
        },
        {
          id: 2,
          question: "Which of the following is not a valid JavaScript data type?",
          options: ["A. string", "B. boolean", "C. undefined", "D. float"],
          answer: "D. float",
        },
        {
          id: 3,
          question: "How do you declare a variable in JavaScript?",
          options: [
            "A. var myVar;",
            "B. variable myVar;",
            "C. let myVar;",
            "D. variable = myVar;",
          ],
          answer: "C. let myVar;",
        },
        {
          id: 4,
          question: "What does 'NaN' stand for?",
          options: [
            "A. Not a Number",
            "B. New Age Notation",
            "C. Negative And Null",
            "D. No Action Needed",
          ],
          answer: "A. Not a Number",
        },
        {
          id: 5,
          question: "Which keyword is used to declare a function in JavaScript?",
          options: ["A. func", "B. function", "C. fn", "D. def"],
          answer: "B. function",
        },
        {
          id: 6,
          question: "What is the purpose of the 'if' statement in JavaScript?",
          options: [
            "A. Looping through an array",
            "B. Declaring a function",
            "C. Conditional execution of code",
            "D. Defining a variable",
          ],
          answer: "C. Conditional execution of code",
        },
        {
          id: 7,
          question: "Which operator is used to compare the equality of two values in JavaScript?",
          options: ["A. =", "B. ==", "C. ===", "D. =>"],
          answer: "C. ===",
        },
        {
          id: 8,
          question: "What does the 'null' value represent in JavaScript?",
          options: [
            "A. An empty string",
            "B. A non-existent value",
            "C. A numeric value",
            "D. A boolean value",
          ],
          answer: "B. A non-existent value",
        },
        {
          id: 9,
          question: "Which built-in method is used to print something in the browser console?",
          options: [
            "A. print()",
            "B. log()",
            "C. write()",
            "D. console()",
          ],
          answer: "B. log()",
        },
        {
          id: 10,
          question: "What is the result of '5' + 3 in JavaScript?",
          options: ["A. 53", "B. 8", "C. '53'", "D. 35"],
          answer: "C. '53'",
        },
        {
          id: 11,
          question: "Which statement is used to exit a loop prematurely in JavaScript?",
          options: ["A. stop", "B. exit", "C. break", "D. terminate"],
          answer: "C. break",
        },
        {
          id: 12,
          question: "What does the 'push' method do in JavaScript?",
          options: [
            "A. Removes an element from an array",
            "B. Adds an element to the beginning of an array",
            "C. Adds an element to the end of an array",
            "D. Sorts the elements of an array",
          ],
          answer: "C. Adds an element to the end of an array",
        },
        {
          id: 13,
          question: "Which event occurs when an HTML element loses focus in JavaScript?",
          options: ["A. onfocus", "B. onblur", "C. onclick", "D. onkeydown"],
          answer: "B. onblur",
        },
        {
          id: 14,
          question: "What is the purpose of the 'this' keyword in JavaScript?",
          options: [
            "A. It refers to the current HTML document",
            "B. It refers to the parent element",
            "C. It refers to the current object",
            "D. It refers to the previous element",
          ],
          answer: "C. It refers to the current object",
        },
        {
          id: 15,
          question: "Which method is used to remove the last element from an array in JavaScript?",
          options: ["A. removeLast()", "B. pop()", "C. shift()", "D. unshift()"],
          answer: "B. pop()",
        },
        {
          id: 16,
          question: "What is the purpose of the 'addEventListener' method in JavaScript?",
          options: [
            "A. To add a CSS class to an element",
            "B. To create a new element",
            "C. To attach an event handler to an element",
            "D. To change the page URL",
          ],
          answer: "C. To attach an event handler to an element",
        },
        {
          id: 17,
          question: "How do you comment out multiple lines of code in JavaScript?",
          options: [
            "A. // This is a comment",
            "B. /* This is a comment */",
            "C. # This is a comment #",
            "D. ' This is a comment '",
          ],
          answer: "B. /* This is a comment */",
        },
        {
          id: 18,
          question: "Which object is used to represent the global object in JavaScript?",
          options: ["A. window", "B. document", "C. global", "D. this"],
          answer: "A. window",
        },
        {
          id: 19,
          question: "What is the result of '3' - 2 in JavaScript?",
          options: ["A. 5", "B. 1", "C. '1'", "D. 32"],
          answer: "B. 1",
        },
        {
          id: 20,
          question: "Which method is used to convert a string to an integer in JavaScript?",
          options: ["A. parseInt()", "B. toInt()", "C. convertToInt()", "D. strToNum()"],
          answer: "A. parseInt()",
        },
        {
          id: 21,
          question: "What is the purpose of the 'splice' method in JavaScript?",
          options: [
            "A. To concatenate two strings",
            "B. To remove elements from an array",
            "C. To split a string into an array",
            "D. To reverse the order of elements in an array",
          ],
          answer: "B. To remove elements from an array",
        },
        {
            id: 22,
            question: "Which keyword is used to declare a constant variable in JavaScript?",
            options: ["A. var", "B. let", "C. const", "D. constant"],
            answer: "C. const",
          },
          {
            id: 23,
            question: "What is the purpose of the 'map' method in JavaScript?",
            options: [
              "A. To change the font size",
              "B. To create animation effects when changing CSS properties",
              "C. To control the text alignment",
              "D. To control the visibility of an element",
            ],
            answer: "B. To create animation effects when changing CSS properties",
          },
          {
            id: 24,
            question: "What is the JavaScript 'strict mode' used for?",
            options: [
              "A. To enable extra features in JavaScript",
              "B. To make JavaScript code more permissive",
              "C. To catch common coding mistakes and 'unsafe' actions",
              "D. To enhance performance of JavaScript applications",
            ],
            answer: "C. To catch common coding mistakes and 'unsafe' actions",
          },
          {
            id: 25,
            question: "What is a JavaScript callback function?",
            options: [
              "A. A function that is called automatically when a script is loaded",
              "B. A function that handles HTTP requests",
              "C. A function that is passed as an argument to another function and is executed later",
              "D. A function that generates random numbers",
            ],
            answer: "C. A function that is passed as an argument to another function and is executed later",
          },
          {
            id: 26,
            question: "Which JavaScript framework is commonly used for building user interfaces?",
            options: ["A. Angular", "B. React", "C. Vue", "D. jQuery"],
            answer: "B. React",
          },
          {
            id: 27,
            question: "What is the purpose of the JavaScript 'localStorage' object?",
            options: [
              "A. To store data in the browser that persists across sessions",
              "B. To access external web services",
              "C. To retrieve data from a server",
              "D. To perform mathematical calculations",
            ],
            answer: "A. To store data in the browser that persists across sessions",
          },
          {
            id: 28,
            question: "What does the JavaScript 'JSON' acronym stand for?",
            options: [
              "A. JavaScript Object Notation",
              "B. JavaScript Object Navigator",
              "C. JavaScript Output Notation",
              "D. JavaScript Object Naming",
            ],
            answer: "A. JavaScript Object Notation",
          },
          {
            id: 29,
            question: "Which JavaScript method is used to remove the last element from an array?",
            options: ["A. pop()", "B. push()", "C. remove()", "D. delete()"],
            answer: "A. pop()",
          },
          {
            id: 30,
            question: "What is the purpose of the JavaScript 'async/await' feature?",
            options: [
              "A. To create animations on a web page",
              "B. To handle asynchronous operations in a more synchronous way",
              "C. To generate random numbers",
              "D. To control the flow of a program",
            ],
            answer: "B. To handle asynchronous operations in a more synchronous way",
          },
        // You now have a complete set of 30 JavaScript multiple-choice questions with full answers included in the answer key.
        
  ];
  
  
export default questions  