const cursor = document.querySelector(".cursor");
let timeout;

const animateCursor = function () {
  //   Cursor movement
  document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    // Stop animation
    function mouseStopped() {
      cursor.style.display = "none";
    }

    // Hide animation
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 3000);

    // Stop animation off the screen
    document.addEventListener("mouseout", () => {
      cursor.style.display = "none";
    });
  });
};

animateCursor();
