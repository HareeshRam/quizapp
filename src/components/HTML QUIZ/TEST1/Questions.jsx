const questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High-Level Text Markup Language",
      "Hyperlink and Text Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>"],
    correctAnswer: "<a>",
  },
  {
    id: 3,
    question: "What is the correct HTML element for the largest heading?",
    options: ["<heading>", "<h1>", "<header>"],
    correctAnswer: "<h1>",
  },
  {
    id: 4,
    question: "Which HTML attribute is used to define the source URL of an image?",
    options: ["source", "url", "src"],
    correctAnswer: "src",
  },
  {
    id: 5,
    question: "What is the correct way to comment out multiple lines of HTML code?",
    options: [
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "// This is a comment"
    ],
    correctAnswer: "<!-- This is a comment -->",
  },
  {
    id: 6,
    question: "Which HTML element is used to define an unordered (bulleted) list?",
    options: ["<list>", "<ul>", "<ol>"],
    correctAnswer: "<ul>",
  },
  {
    id: 7,
    question: "Which HTML element defines the structure of an HTML document, including the head and body sections?",
    options: ["<doctype>", "<html>", "<meta>"],
    correctAnswer: "<html>",
  },
  {
    id: 8,
    question: "In HTML, which attribute is used to specify a unique name for an element?",
    options: ["id", "name", "unique"],
    correctAnswer: "id",
  },
  {
    id: 9,
    question: "Which HTML element is used to define the title of a webpage, displayed in the browser's title bar or tab?",
    options: ["<head>", "<title>", "<meta>"],
    correctAnswer: "<title>",
  },
  {
    id: 10,
    question: "Which HTML tag is used to create a line break within a paragraph?",
    options: ["<br>", "<lb>", "<break>"],
    correctAnswer: "<br>",
  },
  {
    id: 11,
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style System",
      "Creative Style Selector"
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    id: 12,
    question: "Which HTML element is used to define a table?",
    options: ["<table>", "<tab>", "<tbl>"],
    correctAnswer: "<table>",
  },
  {
    id: 13,
    question: "What does the HTML <em> tag represent?",
    options: ["An emphasized text", "An abbreviation", "An italicized text"],
    correctAnswer: "An emphasized text",
  },
  {
    id: 14,
    question: "What is the purpose of the HTML <meta> tag?",
    options: [
      "To define a table",
      "To specify metadata about the document",
      "To create a form"
    ],
    correctAnswer: "To specify metadata about the document",
  },
  {
    id: 15,
    question: "Which HTML element is used for creating an ordered list?",
    options: ["<ol>", "<ul>", "<li>"],
    correctAnswer: "<ol>",
  },
  {
    id: 16,
    question: "What is the correct way to include an external JavaScript file in an HTML document?",
    options: [
      "<script src='script.js'></script>",
      "<javascript src='script.js'></javascript>",
      "<js src='script.js'></js>"
    ],
    correctAnswer: "<script src='script.js'></script>",
  },
  {
    id: 17,
    question: "Which HTML tag is used to define the structure of an HTML table?",
    options: ["<table>", "<tr>", "<td>"],
    correctAnswer: "<table>",
  },
  {
    id: 18,
    question: "In HTML, what does the <p> tag represent?",
    options: ["A paragraph", "A link", "A header"],
    correctAnswer: "A paragraph",
  },
  {
    id: 19,
    question: "Which HTML element is used for creating a hyperlink?",
    options: ["<a>", "<link>", "<url>"],
    correctAnswer: "<a>",
  },
  {
    id: 20,
    question: "What is the purpose of the HTML <style> tag?",
    options: [
      "To define a table style",
      "To specify document fonts and colors",
      "To create a form style"
    ],
    correctAnswer: "To specify document fonts and colors",
  },
  {
    id: 21,
    question: "Which HTML element is used to define a form in a web page?",
    options: ["<form>", "<input>", "<submit>"],
    correctAnswer: "<form>",
  },
  {
    id: 22,
    question: "What does the HTML <strong> tag represent?",
    options: ["A strong emphasis text", "A subheading", "A highlighted text"],
    correctAnswer: "A strong emphasis text",
  },
  {
    id: 23,
    question: "Which HTML element is used to define an image in a web page?",
    options: ["<image>", "<img>", "<picture>"],
    correctAnswer: "<img>",
  },
  {
    id: 24,
    question: "What is the correct HTML for creating a hyperlink to an email address?",
    options: [
      "<a href='mailto:example@example.com'>Send Email</a>",
      "<a email='example@example.com'>Send Email</a>",
      "<a link='mailto:example@example.com'>Send Email</a>"
    ],
    correctAnswer: "<a href='mailto:example@example.com'>Send Email</a>",
  },
  {
    id: 25,
    question: "Which HTML element is used to define a list item?",
    options: ["<item>", "<li>", "<list-item>"],
    correctAnswer: "<li>",
  },
  {
    id: 26,
    question: "What is the correct HTML for creating a checkbox input?",
    options: [
      "<input type='text'>",
      "<input type='checkbox'>",
      "<input type='radio'>"
    ],
    correctAnswer: "<input type='checkbox'>",
  },
  {
    id: 27,
    question: "Which HTML element is used to define a hyperlink?",
    options: ["<link>", "<a>", "<href>"],
    correctAnswer: "<a>",
  },
  {
    id: 28,
    question: "What is the purpose of the HTML <head> element?",
    options: [
      "To define the body content of the page",
      "To define the header section of the page",
      "To define the metadata of the page"
    ],
    correctAnswer: "To define the metadata of the page",
  },
  {
    id: 29,
    question: "Which HTML tag is used to create a horizontal line?",
    options: ["<hr>", "<line>", "<hl>"],
    correctAnswer: "<hr>",
  },
  {
    id: 30,
    question: "What does the HTML <sup> tag represent?",
    options: ["Superscript text", "Subscript text", "Strong emphasis text"],
    correctAnswer: "Superscript text",
  }
];

export default questions;



  
  