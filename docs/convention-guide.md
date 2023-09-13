<h1 style="font-size: 4rem; 
					text-align: center; 
					background: linear-gradient(to right, #8E2DE2, #4A00E0); 
					-webkit-background-clip: text; 
					-webkit-text-fill-color: transparent;
">
	Project Convention Guide
</h1>

# Project Setup

If you dont have Node.JS instal Node.JS before setting up the project
[nodejs.org/en](https://nodejs.org/en)

- Run the command below, then follow the prompt :

      $ npm create vite@latest

- After finish creating react project environment run the command below :

      $ npm install

  This will install all the necessary node package to be able to build the react web application.

- If your project use any libraries or framework you will need to install their package beforehand. Since this project uses state management library called `zustand`, it is important to install
  zustand package to be able to use in the project. run the command below:

        $ npm install zustand

# Linting

Use a linting tool like ESLint to enforce coding standards and catch common errors in your code. ESLint can be configured with rules to ensure consistent formatting, code style, and best practices.

<br>
<br>

# Commenting Rules

Ensure that the comments are meaningful and provide context where necessary, especially for complex logic or components.. In JavaScript and JSX, use single-line and multi-line comments:

```javascript
// Single-line comment

/*
  Multi-line comment
  explaining the purpose
  of the code.
*/

{
/*
  jsx comment
*/
}

// TODO: Something you need to address later
// FIXME: Something that needs fixing
```

<br>
<br>

# Folder Structure

```bash
my-react-app/
|-- doc
|-- public/
|-- src/
    |-- components/
    |-- store/
    |-- util
    |-- index.js
    |-- App.js // Main application component
    |-- main.js // Entry point
|-- README.md
```

- `doc` : Stores project's documentation
- `public` : Contains static assets like HTML, images, and other files. i.e: `favicon`.
- `src` : Houses the main source code of the application.
- `components` : This is where the React components will reside.
- `store` : Stores state management related files.
- `util` : Store helper functions.
- `README.md` : Contains information about the project.

<br>

# Use BEM Rules For CSS Class Naming

For more detailed information about BEM visit [BEM Official Website](https://en.bem.info/methodology/filestructure/).

```css
.button {
  /* Styles for the button block */
}
```

```css
.button__text {
  /* Styles for the text element inside the button */
}
```

```css
.button--primary {
  * Styles for a primary button variation */
}

.button__text--bold {
  /* Styles for a bold text variation inside the button */
}
```

```css
<button class="button button--primary">
  <span class="button__text button__text--bold">Click me</span>
</button>
```

<br>

# React code conventions

## Consistent Naming for Components and Files

Ensure that the component name matches the file name and follows consistent casing conventions.

```bash
// ❌ Incorrect naming
components/
|-- component-name/
    |-- mycomponent.jsx
    |-- my-component.css

// ✅ Correct naming
components/
|-- component-name/
    |-- MyComponent.jsx
    |-- MyComponent.css
```

<br>

## Group Related Imports

Group imports from the same library or module to improve organization and readability.

```js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Tab, TabList, TabPanel } from 'react-tabs';
import { FaUser, FaCog } from 'react-icons/fa';
```

<br>

## DRY (Don't Repeat Yourself) Principle

Look for opportunities to reuse code by extracting common functionality into utility functions or higher-order components.

<br>

## Import order

Add some import order rules to your eslint config. This will ensure that the imports are always in the same order and are grouped by predefined rules.

**Example:**

```js
rules: {
  'import/order': [
    2,
    {
      'newlines-between': 'always',
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'unknown',
        'object',
        'type',
      ],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      pathGroups: [
        {
          pattern: 'react*',
          group: 'external',
          position: 'before',
        },
      ],
    },
  ],
}
```

<br>

## Naming conventions

**Use PascalCase in components**

```js
function SideNav() {
	...
}
```

**Use camelCase for JavaScript data types like variables, arrays, objects, functions, etc.**

```js
function handleSubmit {...}

const importTasks = [...]
```

**Use camelCase for folder and non-component file names and PascalCase for component file names**

```bash
src/components/Form.jsx
src/assets/react.svg
```

<br>

## Avoid default export

When working on React projects, it's recommended to avoid using default exports and instead opt for named exports. This practice contributes to better code organization, maintainability, and codebase consistency. Named exports offer several advantages that can lead to a more efficient and readable codebase.

**Example :**

```js
export { MyComponent };
```

<br>

## Component structure

```js
// 1. Imports - Prefer destructuring imports to minimize written code
import React, { PropsWithChildren, useState, useEffect } from 'react';

// 2. Additional variables
const SOME_CONSTANT = 'something';

// 3. Component
function Component({ someProperty }: PropsWithChildren<ComponentProps>) {
  // 3.1 Definitions
  const [state, setState] = useState(true);
  const { something } = useSomething();

  // 3.2 Functions
  function handleToggleState() {
    setState(!state);
  }

  // 3.3 Effects
  // ❌
  React.useEffect(() => {
    // ...
  }, []);

  // ✅
  useEffect(() => {
    // ...
  }, []);

  // 3.4 Additional destructures
  const { property } = something;

  return (
    <div>
      {/* Separate elements if not closed on the same line to make the code clearer */}
      {/* ❌ */}
      <div>
        <div>
          <p>Lorem ipsum</p>
          <p>Pellentesque arcu</p>
        </div>
        <p>Lorem ipsum</p>
        <p>Pellentesque arcu</p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque
          arcu. Et harum quidem rerum facilis est et expedita distinctio.
        </p>
        <p>Pellentesque arcu</p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque
          arcu. Et harum quidem rerum facilis est et expedita distinctio.
        </p>
      </div>

      {/* ✅ */}
      <Wrapper>
        <div>
          <p>Lorem ipsum</p>
          <p>Pellentesque arcu</p>
        </div>

        <p>Lorem ipsum</p>
        <p>Pellentesque arcu</p>
      </Wrapper>

      <div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Pellentesque arcu. Et harum quidem rerum facilis est et expedita
            distinctio.
          </p>

          <p>Pellentesque arcu</p>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Pellentesque arcu. Et harum quidem rerum facilis est et expedita
            distinctio.
          </p>
        </div>
      </div>
    </div>
  );
}


// 6. Exports
export { Component };
```

<br>

## Use children prop pattern

Using the children prop pattern in React, it allows to pass components or content as children to another component. This is a powerful technique for creating reusable and flexible components that can render different content based on their use

```js
function App() {
  return (
    <div>
      <Card>
        <h2>Title</h2>
        <p>Some content here</p>
      </Card>

      <Card>
        <img src="image.jpg" alt="An image" />
      </Card>
    </div>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export { Card };
```

<br>

## Separate function from the JSX if it takes more than 1 line

```js
// ❌
// ❌
<button
  onClick={() => {
    setState(!state);
    resetForm();
    reloadData();
  }}
/>

// ✅
<button onClick={() => setState(!state)} />

// ✅
function handleButtonClick() {
  setState(!state);
  resetForm();
  reloadData();
}

<button onClick={handleButtonClick} />

```

<br>

## Avoid using indexes as key props

```js

// ❌
function List() {
  const list = ['item1', 'item2', 'item3'];

  return (
    <ul>
      {list.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </ul>
  );
}

// ✅
function List() {
  const list = [
    { id: '111', value: 'item1' },
    { id: '222', value: 'item2' },
    { id: '333', value: 'item3' },
  ];

  return (
    <ul>
      {list.map((item) => {
        return <li key={item.id}>{item.value}</li>;
      })}
    </ul>
  );
}

```

<br>

## Use fragments

JSX Fragments provide a clean and efficient way to group multiple JSX elements without introducing unnecessary elements into the rendered HTML. They help improve code readability, maintainability, and performance.

```js
// ❌
function ActionButtons({ text1, text2 }) {
  return (
    <div>
      <button>{text1}</button>
      <button>{text2}</button>
    </div>
  );
}

// ✅
function Button({ text1, text2 }) {
  return (
    <>
      <button>{text1}</button>
      <button>{text2}</button>
    </>
  );
}
```

<br>

## Prefer destructuring properties

Prefer destructuring properties so it is clear what properties are used in the component.

```js
// ❌
function Button(props) {
  return <button>{props.text}</button>;
}

// ✅
function Button(props) {
  const { text } = props;

  return <button>{text}</button>;
}

// ✅
function Button({ text }) {
  return <button>{text}</button>;
}

```

<br>

## Separation of Concerns in React :

- `Component-Based Structure`: Divide your app into reusable components, each focused on a specific UI piece.
- `Single Responsibility`: Keep components focused on one task, making them easier to understand and maintain.
- `Modularity`: Create components that can be used independently and combined to build complex UIs.
- `Container & Presentational`: Separate logic (containers) from UI rendering (presentational) for clarity.
- `Clear Data Flow`: Pass data from parent to child components via props for predictable communication.
- `Styling Isolation`: Keep styling concerns separate from component logic to enhance maintainability.
- `State Management`: Separate global state logic using libraries like Redux or the Context API.
- `Testing Simplicity`: Independent components are easier to test, enhancing reliability.
- `Business vs. Presentation`: Divide business logic from presentation logic for a modular and maintainable codebase.

<br>

## Custom hook

- `Reusability`: Encapsulate logic for reuse across multiple components.
- `Abstraction`: Abstract complex logic for cleaner component code.
- `Modularization`: Keep related logic organized and maintainable.
- `Composition`: Combine smaller hooks to create more complex behaviors.
- `Code Organization`: Provide a clear structure for managing different functionalities.
- `Simpler Components`: Keep components focused and easier to understand.
- `Testing`: Test custom hooks independently for improved testing.
- `Encapsulation`: Shield components from implementation details.
- `Readability`: Well-named hooks make code more self-explanatory.
- `Adoption of Patterns`: Implement design patterns more intuitively.

```js
// ❌
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [otherState, setOtherState] = useState('');

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h1>My App</h1>
      {/* ... other components */}
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItemToCart({ id: Date.now(), name: 'Product' })}>
        Add to Cart
      </button>
    </div>
  );
}

// ✅
function ShoppingCart() {
  const { cartItems, addItemToCart, removeItemFromCart } = useShoppingCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItemToCart({ id: Date.now(), name: 'Product' })}>
        Add to Cart
      </button>
    </div>
  );
}

function useShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return {
    cartItems,
    addItemToCart,
    removeItemFromCart,
  };
}

```

<br>

## Avoid huge components

Avoiding huge components and shortening them into smaller, focused components in lists improves code readability, maintainability, reusability, and collaboration.

<br>

## Group the state whenever possible

```js
// ❌
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

// ✅
const [user, setUser] = useState({});
```

<br>

## Use shorthand for boolean props

```js
// ❌
<Form hasPadding={true} withError={true} />

// ✅
<Form hasPadding withError />
```

<br>

## Avoid curly braces for string props

```js

// ❌
<Title variant={"h1"} value={"Home page"} />

// ✅
<Title variant="h1" value="Home page" />
```

## Avoid using inline styles

Avoiding inline styles in favor of external CSS or CSS-in-JS enhances maintainability, reusability, performance, and separation of concerns in web applications.

<br>

## Prefer conditional rendering with ternary operator

```js
const { role } = user;

// ❌
if (role === ADMIN) {
  return <AdminUser />;
} else {
  return <NormalUser />;
}

// ✅
return role === ADMIN ? <AdminUser /> : <NormalUser />;
```

<br>

## Prefer declarative programming

```js
// ❌ imperative: dealing with internals of array iteration
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

// ✅ declarative: we don't deal with internals of iteration
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = arr.reduce((acc, v) => acc + v, 0);
```

<br>

## Use descriptive variable names

```js
// ❌ Avoid single letter names
const n = 'Max';
// ✅
const name = 'Max';

// ❌ Avoid abbreviations
const sof = 'Sunday';
// ✅
const startOfWeek = 'Sunday';

// ❌ Avoid meaningless names
const foo = false;
// ✅
const appInit = false;
```

<br>

## Avoid long list of function arguments

```js
// ❌
function createPerson(firstName, lastName, height, weight, gender) {
  // ...
}

// ✅
function createPerson({ firstName, lastName, height, weight, gender }) {
  // ...
}

// ✅
function createPerson(person) {
  const { firstName, lastName, height, weight, gender } = person;
  // ...
}
```

<br>

## Use object destructuring

```js
// ❌
return (
  <>
    <div> {user.name} </div>
    <div> {user.age} </div>
    <div> {user.profession} </div>
  </>
);

// ✅
const { name, age, profession } = user;

return (
  <>
    <div> {name} </div>
    <div> {age} </div>
    <div> {profession} </div>
  </>
);
```

<br>

## Prefer using template literals

```js
// ❌
const userName = user.firstName + ' ' + user.lastName;

// ✅
const userDetails = `${user.firstName} ${user.lastName}`;
```

<br>

## Use implicit return in small functions

```js
// ❌
const add = (a, b) => {
  return a + b;
};

// ✅
const add = (a, b) => a + b;
```

<br>
<br>

# Git / Github Convention

## Git Branch Strategy

- Git Branch Strategy Convention
- Use the Git Flow branching strategy for managing code changes.
- Create branches with clear names that reflect the purpose of the work.
- Common branch types:
  - `main`: Represents the production-ready codebase.
  - `develop`: Integration branch for ongoing development.
  - `feature/<feature-name>`: For developing new features.
  - `bugfix/<bug-description>`: For fixing bugs.
  - `hotfix/<issue-description>`: For critical fixes in production.
  - `release/<version>`: Preparing a release version.

<br>

## Commit Message Convention

- Use a consistent format for commit messages to improve clarity and traceability.
- Follow the Conventional Commit Messages pattern:
  - `feat`: for new features
  - `fix`: for bug fixes
  - `chore`: for routine tasks, maintenance, etc.
  - `docs`: for documentation updates
  - `style`: for formatting, style changes
  - `refactor`: for code refactoring
  - `test`: for adding or modifying tests
- Use the present tense ("Add feature" not "Added feature").
- Start the message with a capital letter.
- Keep the message concise and descriptive.

<br>

## Code Reviews and Pull Request Convention

- Leverage Self-Review and Pull Requests
- Conduct self-reviews for all changes prior to merging into main branches.
- Maintain a constructive and critical perspective during self-reviews to enhance code quality.
- Utilize pull requests for proposing and discussing changes before merging.
- Furnish pull requests with informative titles.
- Include a brief, yet comprehensive description of the changes alongside contextual details, motivations, or background information.
- Embrace the role of both proposer and reviewer during the pull request process.
- Address all self-review comments before merging code changes.
- Utilize tools and platforms for code reviews, such as GitHub's built-in review features.
- Seize the opportunity for learning and improvement through self-reviews.
- Opt for smaller, focused pull requests to ensure detailed scrutiny.
- Prioritize incremental updates over large-scale changes in a single pull request.
- Use pull requests as a means to improve your skills and coding practices.

<br>

## Use Semantic Versioning (SemVer) Tag

- Follow Semantic Versioning guidelines for version numbering.
- Versions are of the form `MAJOR.MINOR.PATCH`.
- Increment the version as follows:
  - `MAJOR`: Significant changes, breaking backward compatibility.
  - `MINOR`: New features, backward-compatible.
  - `PATCH`: Bug fixes, backward-compatible.
  - Example: `1.0.0` -> `1.1.0` -> `1.1.1`
