# Planning and pseudocode for etch-a-sketch game
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
    - Below that is next row of buttons. Parent has flex box. Button children are 0, ., =. First tw0 are same color as numbers, last same color as other operators.
    - Border around entire calculator. Border between each button. Border around display. Each calculator row same size. 