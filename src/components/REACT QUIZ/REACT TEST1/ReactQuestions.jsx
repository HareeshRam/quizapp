const questions = [
        {
          id: 1,
          question: "What is a Functional Component in React?",
          options: [
            "A. A component that contains only functions",
            "B. A component that can have state and lifecycle methods",
            "C. A component that is created using class syntax",
            "D. A component that does not take any props",
          ],
          answer: "A. A component that contains only functions",
        },
        {
          id: 2,
          question: "How do you define a Functional Component in React?",
          options: [
            "A. Using the class keyword",
            "B. Using the createComponent() method",
            "C. Using the function keyword",
            "D. Using the constructor() method",
          ],
          answer: "C. Using the function keyword",
        },
        {
          id: 3,
          question: "Which React hook is used to manage state in a Functional Component?",
          options: [
            "A. useState",
            "B. setState",
            "C. useStateful",
            "D. setStateful",
          ],
          answer: "A. useState",
        },
        {
          id: 4,
          question: "What is the purpose of the useEffect hook in a Functional Component?",
          options: [
            "A. To define props for the component",
            "B. To perform side effects in the component",
            "C. To render the component",
            "D. To define initial state",
          ],
          answer: "B. To perform side effects in the component",
        },
        {
          id: 5,
          question: "In a Functional Component, where should you fetch data from an API?",
          options: [
            "A. In the constructor method",
            "B. In the render method",
            "C. In the useEffect hook",
            "D. In the useState hook",
          ],
          answer: "C. In the useEffect hook",
        },
        {
          id: 6,
          question: "What is the purpose of the useContext hook in React?",
          options: [
            "A. To create context providers",
            "B. To consume context values in a Functional Component",
            "C. To create class components",
            "D. To define prop types",
          ],
          answer: "B. To consume context values in a Functional Component",
        },
        {
          id: 7,
          question: "How do you pass props to a Functional Component in React?",
          options: [
            "A. Using the render method",
            "B. Using the this.props object",
            "C. By defining them as arguments in the component function",
            "D. Using the setState method",
          ],
          answer: "C. By defining them as arguments in the component function",
        },
        {
          id: 8,
          question: "Which hook is used to control the component's lifecycle in a Functional Component?",
          options: [
            "A. useEffect",
            "B. componentDidMount",
            "C. useLifecycle",
            "D. useState",
          ],
          answer: "A. useEffect",
        },
        {
          id: 9,
          question: "What is the purpose of the useState hook in React?",
          options: [
            "A. To define context providers",
            "B. To manage state in a Functional Component",
            "C. To create class components",
            "D. To define prop types",
          ],
          answer: "B. To manage state in a Functional Component",
        },
        {
          id: 10,
          question: "What is the role of the return statement in a Functional Component?",
          options: [
            "A. It defines the props of the component",
            "B. It defines the initial state of the component",
            "C. It specifies what the component should render",
            "D. It is used to define context providers",
          ],
          answer: "C. It specifies what the component should render",
        },
        {
          id: 11,
          question: "How do you render a list of items in a Functional Component?",
          options: [
            "A. Using the map method inside the render method",
            "B. By directly including the items in the JSX",
            "C. By using the for loop",
            "D. By defining a separate component for each item",
          ],
          answer: "A. Using the map method inside the render method",
        },
        {
          id: 12,
          question: "Which hook allows you to subscribe to the component's context changes?",
          options: [
            "A. useEffect",
            "B. useContext",
            "C. useState",
            "D. useRef",
          ],
          answer: "B. useContext",
        },
        {
            id: 13,
            question: "What is the purpose of the 'props.children' property in a Functional Component?",
            options: [
              "A. It represents the child components of the current component",
              "B. It contains the component's internal state",
              "C. It is used to access the component's parent",
              "D. It represents the children elements passed to the component",
            ],
            answer: "D. It represents the children elements passed to the component",
          },
          {
            id: 14,
            question: "What is the key benefit of using Functional Components in React?",
            options: [
              "A. They have access to lifecycle methods",
              "B. They are faster than class components",
              "C. They are easier to optimize",
              "D. They can define multiple states",
            ],
            answer: "C. They are easier to optimize",
          },
          {
            id: 15,
            question: "How do you update state in a Functional Component?",
            options: [
              "A. Use the setState method",
              "B. Assign a new value directly to the state variable",
              "C. Use the this.setState method",
              "D. Use the useState hook",
            ],
            answer: "A. Use the setState method",
          },
          {
            id: 16,
            question: "Which hook is used to perform data fetching in a Functional Component?",
            options: [
              "A. componentDidMount",
              "B. useEffect",
              "C. useState",
              "D. useFetch",
            ],
            answer: "B. useEffect",
          },
          {
            id: 17,
            question: "What is the purpose of the 'Fragment' component in React?",
            options: [
              "A. To create custom components",
              "B. To group multiple elements without adding extra nodes to the DOM",
              "C. To define context providers",
              "D. To render text content",
            ],
            answer: "B. To group multiple elements without adding extra nodes to the DOM",
          },
          {
            id: 18,
            question: "How do you handle events in a Functional Component?",
            options: [
              "A. Use the bind method",
              "B. Use the this keyword",
              "C. Pass event handlers as props",
              "D. Use the componentDidMount lifecycle method",
            ],
            answer: "C. Pass event handlers as props",
          },
          {
            id: 19,
            question: "Which hook is used to create a reference to a DOM element in a Functional Component?",
            options: [
              "A. useRef",
              "B. useState",
              "C. useReference",
              "D. createRef",
            ],
            answer: "A. useRef",
          },
          {
            id: 20,
            question: "What is the purpose of the 'memo' function in React?",
            options: [
              "A. To create a higher-order component",
              "B. To memoize function results",
              "C. To define context providers",
              "D. To fetch data from an API",
            ],
            answer: "B. To memoize function results",
          },
          {
            id: 21,
            question: "In React, what is the recommended way to update the UI after changing state?",
            options: [
              "A. Use forceUpdate",
              "B. Manually modify the DOM",
              "C. Rerender the component with updated state",
              "D. Use the componentWillUpdate lifecycle method",
            ],
            answer: "C. Rerender the component with updated state",
          },
          {
            id: 22,
            question: "What is the purpose of the 'useState' hook in a Functional Component?",
            options: [
              "A. To manage state and side effects",
              "B. To define context providers",
              "C. To create custom hooks",
              "D. To handle HTTP requests",
            ],
            answer: "A. To manage state and side effects",
          },
          {
            id: 23,
            question: "What is the key benefit of using keys when rendering a list of items in React?",
            options: [
              "A. Keys make the code shorter",
              "B. Keys help React identify which items have changed, are added, or are removed",
              "C. Keys automatically add animations to the list",
              "D. Keys allow for parallel rendering of list items",
            ],
            answer: "B. Keys help React identify which items have changed, are added, or are removed",
          },
          {
            id: 24,
            question: "Which hook is used to handle side effects after the component has rendered?",
            options: [
              "A. componentDidUpdate",
              "B. useEffect",
              "C. componentDidMount",
              "D. componentWillUpdate",
            ],
            answer: "B. useEffect",
          },
          {
            id: 25,
            question: "What is the primary role of the 'useState' hook?",
            options: [
              "A. To define context providers",
              "B. To manage state in a Functional Component",
              "C. To create class components",
              "D. To define prop types",
            ],
            answer: "B. To manage state in a Functional Component",
          },
          {
            id: 26,
            question: "Which hook is used to create a reference to a DOM element in a Functional Component?",
            options: [
              "A. useRef",
              "B. useState",
              "C. useReference",
              "D. createRef",
            ],
            answer: "A. useRef",
          },
          {
            id: 27,
            question: "In React, what is the purpose of the 'forwardRef' function?",
            options: [
              "A. To pass refs between components",
              "B. To create higher-order components",
              "C. To handle HTTP requests",
              "D. To manage state",
            ],
            answer: "A. To pass refs between components",
          },
          {
            id: 28,
            question: "Which hook is used to control the component's lifecycle in a Functional Component?",
            options: [
              "A. useEffect",
              "B. componentDidMount",
              "C. useLifecycle",
              "D. useState",
            ],
            answer: "A. useEffect",
          },
          {
            id: 29,
            question: "What is the purpose of the 'useContext' hook in React?",
            options: [
              "A. To create context providers",
              "B. To consume context values in a Functional Component",
              "C. To create class components",
              "D. To define prop types",
            ],
            answer: "B. To consume context values in a Functional Component",
          },
          {
            id: 30,
            question: "What is the recommended way to update the state in a Functional Component?",
            options: [
              "A. Use the forceUpdate method",
              "B. Manually modify the state variable",
              "C. Use the setState method",
              "D. Use the render method",
            ],
            answer: "C. Use the setState method"
          },
         
      
  ];
  
  
export default questions  