const bodyEl = document.querySelector("body");

// adding event listener method to thjis body section and attach and event handler to detect the mouse moving inside the browser (mousemove)
bodyEl.addEventListener("mousemove", (event) => {

    //this will help us tract the y and x axis of the body 
    const xPosition = event.offsetX;
    const yPosition = event.offsetY;

    // We're creating another span inside javascript and we're going to position the span crom left and top by this xPosition and yPosition
    const spanEl = document.createElement("span");

    // as you can see we style because we're going to the same thing as we did in style.css file the left(50%) and Top(50%) and also we add "px" because our xPostion variable is a number 

    spanEl.style.left = xPosition;


    spanEl.style.left = xPosition + "px";
    spanEl.style.top = yPosition + "px";


    // we append a child the spanEl to bodyEl to be able to see it on our screen and the child is the spanEl
    bodyEl.appendChild(spanEl);

    // and here we create a variable called size to hold the Math.random function which is going to give a 0 - 100 random number everytime we call it and connect it to our spanEl so that we can produce different heart in different width and size 

    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    // we use the setTimeout method to create a function that will remoe the heart animation so the heart will not stay on the screen that can be remove in 3000 = 3 seconds

    

    setTimeout(()=>{
        spanEl.remove();
    }, 3000)
});