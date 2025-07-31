# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
   ```html
   {child name} will be making memories with {celebrity name}, a {celebrity
   sport} star, by {child wish}
   ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?

   > The module Kids.js contains that code.

   The first step is to target our document and tell the event listener what type of event it will be listening for. It's "click" in this case. Then we create a variable which will contain the item that was clicked. We do this by using ".target" which looks at the click event's meta data to see which item was the subject of the event. Next, we need to make sure that the event listener is listening for a specific type of item to be clicked. We use an if statement to compare the dataset.type of the item clicked with our desired type, which in this case is "child". If those are the same, the window alert will pop up. The pop-up message is created by taking different dataset information from the item clicked and concatenating it into a string.

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?

   > Because we need to invoke that function for each kid in the kids array.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?

   > It's done basically the same way as in Kids.js. This time we listen for a "celebrity" type item to be clicked, then we display the correct message by using the dataset information of the clicked item. It's "dataset.name" and "dataset.sport" here.

4. Can you describe, in detail, the algorithm that is in the `main` module?

   > First we need to import the functions from our other modules. Then we select the HTML target that we'll be replacing. Next we define a variable which will contain our new HTML string. Inside the string, we need to invoke the functions that we imported in the beginning to fill the string with the desired information. Finally, we use ".innerHTML" to replace our targeted HTML with the new string we just created.
