export interface Questions {
    question: string
    choice: string[]
    answer: string
}

// Sample questions
export const questions: Questions[] = [
    {
        question: "1. What does HTML stand for?",
        choice: ["Hypertext Markup Language", "Hightext Markup Language", "Hyperlink Text Markup Language", "None of the above"],
        answer: "Hypertext Markup Language"
    },
    {
        question: "2. Which of the following is used for styling a webpage?",
        choice: ["HTML", "CSS", "JavaScript", "PHP"],
        answer: "CSS"
    },
    {
        question: "3. Which HTML tag is used to define a hyperlink?",
        choice: ["<a>", "<link>", "<href>", "<button>"],
        answer: "<a>"
    },
    {
        question: "4. What does CSS stand for?",
        choice: ["Cascading Style Sheets", "Cascading Simple Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "5. Which of the following is used to add interactivity to a webpage?",
        choice: ["HTML", "CSS", "JavaScript", "JSON"],
        answer: "JavaScript"
    },
    {
        question: "6. What does the 'div' tag represent in HTML?",
        choice: ["A division or section", "A form element", "A button", "An image"],
        answer: "A division or section"
    },
    {
        question: "7. Which property is used to change the font size in CSS?",
        choice: ["font-size", "text-size", "font-style", "text-style"],
        answer: "font-size"
    },
    {
        question: "8. What is the default display property of a <div> element?",
        choice: ["inline", "block", "flex", "grid"],
        answer: "block"
    },
    {
        question: "9. Which tag is used to define a table in HTML?",
        choice: ["<table>", "<tr>", "<td>", "<th>"],
        answer: "<table>"
    },
    {
        question: "10. What is the purpose of the 'alt' attribute in an <img> tag?",
        choice: ["It sets the image's alt text", "It defines the image's size", "It links to a different image", "None of the above"],
        answer: "It sets the image's alt text"
    },
    {
        question: "11. Which CSS property is used to change the background color of an element?",
        choice: ["background-color", "bg-color", "color", "background"],
        answer: "background-color"
    },
    {
        question: "12. Which of these is a correct way to declare a variable in JavaScript?",
        choice: ["var x = 10;", "let x = 10;", "const x = 10;", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "13. What does 'DOM' stand for?",
        choice: ["Document Object Model", "Document Order Model", "Data Object Model", "None of the above"],
        answer: "Document Object Model"
    },
    {
        question: "14. Which CSS property is used to change the text color?",
        choice: ["color", "font-color", "text-color", "bg-color"],
        answer: "color"
    },
    {
        question: "15. What is the correct syntax for adding a comment in JavaScript?",
        choice: ["/* comment */", "// comment", "<!-- comment -->", "# comment"],
        answer: "// comment"
    },
    {
        question: "16. Which HTML tag is used to define an unordered list?",
        choice: ["<ul>", "<ol>", "<li>", "<dl>"],
        answer: "<ul>"
    },
    {
        question: "17. Which HTML attribute specifies the destination URL of a link?",
        choice: ["href", "src", "link", "url"],
        answer: "href"
    },
    {
        question: "18. Which method is used to find an element by its ID in JavaScript?",
        choice: ["getElementById()", "getElementByClass()", "querySelector()", "findElement()"],
        answer: "getElementById()"
    },
    {
        question: "19. Which of the following is not a valid CSS selector?",
        choice: [".class", "#id", "div", "href"],
        answer: "href"
    },
    {
        question: "20. Which tag is used to define an ordered list in HTML?",
        choice: ["<ul>", "<ol>", "<li>", "<dl>"],
        answer: "<ol>"
    },
    {
        question: "21. What is the correct HTML element for inserting a line break?",
        choice: ["<break>", "<br>", "<lb>", "<hr>"],
        answer: "<br>"
    },
    {
        question: "22. What does JavaScript 'JSON' stand for?",
        choice: ["JavaScript Online", "JavaScript Object Notation", "Java Source Object Notation", "Java Script On Node"],
        answer: "JavaScript Object Notation"
    },
    {
        question: "23. Which HTML tag is used to define a form?",
        choice: ["<form>", "<input>", "<textarea>", "<button>"],
        answer: "<form>"
    },
    {
        question: "24. Which of the following is a valid JavaScript array method?",
        choice: ["pop()", "push()", "shift()", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "25. Which of the following HTML tags is self-closing?",
        choice: ["<div>", "<input>", "<p>", "<span>"],
        answer: "<input>"
    },
    {
        question: "26. What does the 'display' property in CSS control?",
        choice: ["Visibility of an element", "The box model", "How an element is displayed on a page", "None of the above"],
        answer: "How an element is displayed on a page"
    },
    {
        question: "27. What is the purpose of the 'z-index' property in CSS?",
        choice: ["It controls the layering of elements", "It defines the element's zoom level", "It sets the background image position", "None of the above"],
        answer: "It controls the layering of elements"
    },
    {
        question: "28. What does the 'position: absolute' property do in CSS?",
        choice: ["It positions an element relative to its first positioned ancestor", "It positions an element relative to the document", "It makes an element fixed", "None of the above"],
        answer: "It positions an element relative to its first positioned ancestor"
    },
    {
        question: "29. Which of the following is a way to declare a constant in JavaScript?",
        choice: ["var", "let", "const", "static"],
        answer: "const"
    },
    {
        question: "30. What does the 'float' property do in CSS?",
        choice: ["It specifies whether the element is floated to the left or right", "It sets the element's opacity", "It adds a shadow to the element", "None of the above"],
        answer: "It specifies whether the element is floated to the left or right"
    }
];


