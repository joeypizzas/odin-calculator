# Planning and pseudocode for calculator
## Does your program have a user interface? What will it look like? What functionality will the interface have?
- Calculator has user interface. 
- Top of calculator has display that shows ongoing calculation. Eg: shows numbers you click or result of calculation. 
- Below that, buttons for numbers, and operators. 
- Calculator is centered in the page. Border around the edge of calculator. Border between each calculator button. 
- Number buttons, operators, and clear button all are different colors. Also +/- button, and % button. 
- Extra credit decimal button, same color as numbers. 
## What inputs will your program have? Will the user enter data or will you get input from somewhere else?
- User inputs are numbers, operators for calculation, and clear button. Will get them from event listeners on buttons. 
## What’s the desired output?
- Show user input from buttons on display. 
- Correctly perform calculations using input numbers and operators. 
- Show correct result in display after calculation. 
- Clear display using clear button. 
## Given your inputs, what are the steps necessary to return the desired output?
1. Add calculator HTML/CSS: 
    - Body element: add ID and add background color to it. Also flexbox, and center flex item. 
    - Div for main calculator. Flexbox. Flex direction column. 6 child divs inside of it, which are for display and rows of buttons. 
    - Top child div inside of main calculator is display. Background color greyish. Has flexbox and itself one child div for displaying input. Child is right adjusted and has filler number to start. 
    - Below that is top row of buttons. Parent has flex box. Button children are AC, +/-, %, and /. First three are same color. Last is different for operator. 
    - Below that is next row of buttons. Parent has flex box. Button children are 7, 8, 9, *. First three are same color as numbers, last same color as other operators. 
    - Below that is next row of buttons. Parent has flex box. Button children are 4, 5, 6, -. First three are same color as numbers, last same color as other operators.
    - Below that is next row of buttons. Parent has flex box. Button children are 1, 2, 3, +. First three are same color as numbers, last same color as other operators.
    - Below that is next row of buttons. Parent has flex box. Button children are 0, ., =. First two are same color as numbers, last same color as other operators.
    - Border around entire calculator. Border between each button. Border around display. Each calculator row same size. 
2. Create functions for math operators. 
    - Add: 
        - takes two number parameters. 
        - returns them added together. 
    - Subctract
        - takes two number paramters. 
        - returns them, second subctracted from the first. 
    - Multiply 
        - takes two number parameters. 
        - returns their product. 
    - Divide 
        - takes two number paramters. 
        - if second number = 0, return error message. 
        - else, returns quotient of first divided by second. 
    - Converting percentage to decimal 
        - takes one number parameter. 
        - returns that number / 100
    - Plus/negative
        - Takes one number parameter. 
        - returns paramter - (parameter * 2)
3. Initialize three global variables for operations. 
    - One number. 
    - One operator. 
    - Another number. 
4. Create operate function. 
    - takes three parameters, two numbers and operator. 
    - Conditional logic based on the operator to decide which operator function to run. 
    - set new variable to the result of the operator function with the number variables as parameter. 
    - round result of operator to however many numbers fit on the display. 
    - set first number variable to result of calculation (for use in next calculation). 
    - set second number back to 0. 
    - return result of operator function. 
5. Functions that populate the display. 
    - Function that removes current number/operator in display. 
        -  Selects div that holds current display number. 
        -  Deletes it. 
    - Function that adds new item to display. 
        - Takes parameter, either number or operator. 
        - Creates new div. 
        - Adds text content with parameter. 
        - Adds class with style that original display number had. 
        - Maybe selects parent display div. 
        - Inserts new div into the DOM. 
    - allClear function. 
        - calls function that clears display. 
        - calls function that adds new div with parameter of 0. 
        - sets first and second number variables, and operator variable to 0. 
6. Make the calculator work: 
    - Put event handler on the container for all buttons. Use event delegation to capture click on child button when it bubbles up. 
    - add style to show button clicked on click down, and then remove the style on click up. 
    - When a button is clicked, if user input is a number or a decimal.
        - If first number variable is 0 and operator variable is 0. 
            - assign number or decimal to first number variable. 
        - Else if first number variable != 0 and operator variable is 0. 
            - If user input is a number. 
                - Concat it to first number variable. 
            - Else. 
                - if .includes() string method on string doesn't include decimal. 
                    - concat decimal to first number variable. 
        - Else if first number variable !=0 and operator variable != 0 and second number variable = 0. 
            - assign number or decimal to second number variable. 
        - Else first number variable != 0 and operator variable != 0 and second number variable != 0. 
            - If user input is a number. 
                - Concat it to second number variable. 
            - Else. 
                - if .includes() string method on string doesn't include decimal. 
                    - concat decimal to second number variable. 
    Else (meaning user input is an operator or clear button). 
        - If operator variable === 0. 
            - If user input === +. 
                - Assign user input to operator variable. 
            - Else If user input === -.
                - Assign user input to operator variable. 
            - Else If user input === *. 
                - Assign user input to operator variable. 
            - Else If user input === /. 
                - Assign user input to operator variable. 
        - Else If user input === +/-. 
            - If value in display === first number variable.  
                - call +/- function with first number variable as parameter, which should automatically update in display.
            - Else if value in display === second number variable. 
                - call +/- function with second number variable as parameter, which should autotmatically update in display. 
        - Else If user input === %. 
            - if value in display === first number variable. 
                - call % function with first number variable as parameter, which should automatically update in display.
            - else if value in display === second number variable. 
                - call % function with second number variable as parameter, which should automatically update in display.
        - Else If user input === a/c. 
            - Call allClear function. 
        - Else if user input === +. 
            - remove current display item. 
            - set display item to result of operate function call, passing first, second, and operator variables as parameters.
            - if operator variable === - OR operator variable === * OR operator variable === /. 
                - set operator variable === +. 
        - Else if user input === -. 
            - remove current display item. 
            - set display item to result of operate function call, passing first, second, and operator variables as parameters.
            - if operator variable === + OR operator variable === * OR operator variable === /. 
                - set operator variable === -. 
        - Else if user input === *. 
            - remove current display item. 
            - set display item to result of operate function call, passing first, second, and operator variables as parameters.
            - if operator variable === + OR operator variable === - OR operator variable === /. 
                - set operator variable === *. 
        - Else if user input === /. 
            - remove current display item. 
            - set display item to result of operate function call, passing first, second, and operator variables as parameters.
            - if operator variable === + OR operator variable === - OR operator variable === *. 
                - set operator variable === /. 
        - Else user input === =. 
            -remove the current display item. 
            - set display item to result of operate function call, passing first, second, and operator variables as parameters. 
            - set operator variable to 0. 
7. Running list of edge cases to fix:
    - Dividing by 0 / clicking divide twice. 
    - Starting with 0 and then using some operation to move to a different number from that. IE 0 + 3 should equal 3. 
    - Clicking multiple operators in a row to start. 
    - fix size of 0 button. 
    - buttons don't work if first number entered is zero. 
    




        

    


