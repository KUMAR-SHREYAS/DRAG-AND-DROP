
let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

//EXPLANATION
/* This JavaScript code is implementing a drag-and-drop functionality that allows elements from two boxes (`rightBox` and `leftBox`) to be moved back and forth using drag events. Here's a detailed breakdown:

### Variables:
1. **`lists`**: 
   - `document.getElementsByClassName("list")` selects all elements with the class `"list"`. These are the draggable items.
   - This returns a collection of elements (assumed to be draggable items).

2. **`rightBox`** and **`leftBox`**: 
   - These are two containers selected by their `id` values ("right" and "left"), where draggable items will be dropped.

### Event Handling:

1. **Loop through draggable items (`lists`)**:
   - The loop iterates through each element in the `lists` collection. 
   - For each item (`list`), an event listener is added for the `dragstart` event. This is triggered when the user starts dragging an item.

2. **`dragstart` event**:
   - When the drag starts, the event listener is triggered, and the element being dragged is assigned to the variable `selected`
    (using `e.target`).
   - Now, `selected` holds a reference to the dragged item, which can later be dropped into one of the boxes (`rightBox` or `leftBox`).

3. **Right Box (`rightBox`) drag events**:
   - `rightBox.addEventListener("dragover", function(e){ e.preventDefault(); });`:
     - This allows the `rightBox` to accept the dragged item. By default, elements do not accept drops, but calling `e.preventDefault()` 
     inside `dragover` makes it a valid drop target.
   - `rightBox.addEventListener("drop", function(e){ rightBox.appendChild(selected); selected=null; });`:
     - This event is triggered when the dragged item is dropped into the `rightBox`. 
     - The dropped element (stored in `selected`) is appended to `rightBox`.
     - `selected = null;` clears the reference to the dragged element after it's dropped.

4. **Left Box (`leftBox`) drag events**:
   - Similar to `rightBox`, event listeners are attached to `leftBox`.
   - `dragover` prevents the default behavior to allow the box to be a valid drop target.
   - `drop` event appends the dragged element to the `leftBox`.

### Key Points:
- **Drag Start**: When the user starts dragging an item, the element is stored in the `selected` variable.
- **Drag Over**: For both `rightBox` and `leftBox`, `dragover` events are used to allow the element to be dropped inside them.
- **Drop**: The item is appended to the respective box (either `rightBox` or `leftBox`) when it's dropped.

### Issue:
- The event listeners for both boxes (`rightBox` and `leftBox`) are added every time an item is dragged, which could result in redundant
 event listeners over time.
 It would be better to attach the `dragover` and `drop` listeners outside the loop to avoid performance issues.*/





for(list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;
        rightBox.addEventListener("dragover",function(e){
            e.preventDefault();
        });

        rightBox.addEventListener("drop",function(e){
            rightBox.appendChild(selected);
            selected=null;
        });



        leftBox.addEventListener("dragover",function(e){
            e.preventDefault();
        });
        
        leftBox.addEventListener("drop",function(e){
            leftBox.appendChild(selected);
            selected=null;
        });
})
}