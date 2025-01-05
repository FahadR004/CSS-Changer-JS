const inputs = document.querySelectorAll(".controller input"); // Gives an array 


inputs.forEach((inputs)=> inputs.addEventListener("change", update));  // We want to listen to change event of the inputs and call the update function

function update() {  // "this" is the input element triggering the event    
    const suffixData = this.dataset.sizing || "";  // Access data sizing property of the input element  like returning px. Assigns null string in case of null, undefined etc.
    document.documentElement.style.setProperty( // Updates a CSS variable on the root element. For all variables basically.
        `--${this.name}`,  // Input element's  name property 
        this.value + suffixData  // Combines input value with the suffix
    );
    console.log(inputs);

}

