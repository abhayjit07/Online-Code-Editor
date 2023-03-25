# Problem statement 
To design and build an online code editor for HTML, CSS, JS code snippets using HTML,CSS and React.

# Inspiration 
For any developer, often the freedom of using a local code editor may be unavailable. As online code-editors are fast, efficient and greatly popular, it is a frequently used tool among developers.
An online code execution platform lets you write code in your favorite programming language and run that code on the same platform.

# Method
The first part is all about building the front-end using React.js.Creating structural aspect of the site and user interface (site’s layout),using HTML and CSS then Implementing the site’s core functionality and frontend features using react and the second part is building the back-end using Express.js. In the front-end, we have three sections, a text editor, an input box, and an output box. In the back-end, we create an API and implement logic to compile the source code provided from the front-end.

# Implementation

## App.js

## Navbar Component
The Navbar component is responsible for rendering the navigation bar at the top of the screen. It has several props that are used to control the behavior and appearance of the editor. These props are:

lang: The programming language used in the editor. By default the language is set as JavaScript
setLang: A function that is called when the user changes the programming language in the editor.
theme: The color theme of the editor. By default the color theme is vs-dark. 
setTheme: A function that is called when the user changes the color theme of the editor.
fontSize: The font size of the editor. By default the font size is 15.
setFontSize: A function that is called when the user changes the font size of the editor.

## EditorBox Component
The EditorBox component is responsible for rendering the editor on the screen. It uses the props passed down from the Navbar component to control the behavior and appearance of the editor. The props used in this component are:

theme: The color theme of the editor. This is a string that is passed down from the Navbar component.
fontSize: The font size of the editor. This is a number that is passed down from the Navbar component.
lang: The programming language used in the editor. This is a string that is passed down from the Navbar component.
CompileBox Component
The CompileBox component is responsible for rendering the compile box on the screen. It doesn't have any props or state.

## State
The App component uses the useState hook to manage the state of the application. It has three state variables:

lang: The programming language used in the editor. The default value is "javascript".
theme: The color theme of the editor. The default value is "vs-dark".
fontSize: The font size of the editor. The default value is 15.

# App.css
This is a stylesheet that contains the styling rules for the componentsl. It defines the appearance of the Navbar, EditorBox, and CompileBox components.

## App Component
The .App class sets the text alignment to the center.

## Navbar Component
The .Navbar class sets the display to flex, aligns the items to the center, sets the padding to the left to 20 pixels, sets the height to 50 pixels, sets the text alignment to the center, sets the color to yellowgreen, sets the background color to #474747, and sets the gap between the elements to 10 pixels.

## EditorBox Component
The .editor class sets the margin-top to 0 pixels.

## CompileBox Component
The .run-btn class sets the position to relative, sets the width to 80 pixels, sets the font size to 22 pixels, sets the font weight to bold, sets the background color to #afec3f, sets the border to none, sets the border radius to 4 pixels, sets the transition to 0.3 seconds, and sets the cursor to a pointer. The .run-btn:active class sets the background color to black when the button is active.

The .compile-box class sets the flex property to 40%, sets the gap between the elements to 50 pixels, sets the display to flex, sets the flex direction to row, sets the background color to #242424, sets the border to 3 pixels solid #1f65e6, and sets the padding to 5 pixels. The @media rule sets the flex direction to column, sets the gap between the elements to 30 pixels, and sets the padding to 0 pixels when the screen width is less than 700 pixels.


# Output Screenshots
## Navbar
![image](https://user-images.githubusercontent.com/100589347/220425057-59f419c4-cc6a-4851-8ae0-e07ab54dd3c8.png)

## Editor Box
![image](https://user-images.githubusercontent.com/100589347/220425643-f95c09b1-0390-400c-9c57-2dc71773ef19.png)

## Compile Box
![image](https://user-images.githubusercontent.com/100589347/220425868-1e708dd8-6237-4cda-8cda-ab831cc31da8.png)

# Tech Stack Used
1.HTML
2.CSS
3.React



