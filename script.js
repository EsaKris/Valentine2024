let name = document.getElementById("name");
let submit = document.getElementById("submit");
let envelope = document.getElementById("envelope");
let message = document.getElementById("message");

submit.addEventListener("click", function() {
    let nameValue = name.value;
    if (nameValue) {
      name.style.display = "none";
      submit.style.display = "none";
      envelope.style.display = "block";
  
      // Create a new div for the message container
      let messageContainer = document.createElement("div");
      messageContainer.id = "message-container"; // Assign an id for styling
      // Apply styles for the container
      messageContainer.style.width = "80%";
      messageContainer.style.margin = "50px auto";
      messageContainer.style.padding = "20px";
      messageContainer.style.borderRadius = "10px";
      messageContainer.style.backgroundColor = "white";
      messageContainer.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)"; // Shadow effect
  
      // Append the message container to the body
      document.body.appendChild(messageContainer);
  
      setTimeout(function() {
        envelope.style.display = "none";
        messageContainer.style.display = "block";
  
        // Create a new image element
        let image = document.createElement("img");
        // Set the image source
        image.src = "1.png"; // Assuming the image is located in the "img" directory
        // Set any additional attributes if needed
        image.alt = "Valentine's Day Image";
        // Apply styles for the image
        image.style.display = "block";
        image.style.margin = "0 auto"; // Centralize the image
        // Append the image to the message container
        messageContainer.appendChild(image);
  
        messageContainer.innerHTML += "<br><br>My dearest baby " + nameValue + ", on this Valentine's Day, I want you to know how much you mean to me. " +
                           "Your smile brightens my darkest days, and your laughter fills my heart with joy. " +
                           "You are my precious gift, and I'm forever grateful for your love. " +
                           "Happy Valentine's Day, my little one. " +
                           "I love you more than words can express. <strong>I love you, " + nameValue + "!</strong>";
  
        // Reduce the size of the text and adjust spacing
        messageContainer.style.fontSize = "20px";
        messageContainer.style.lineHeight = "1.5";
        // Justify the text
        messageContainer.style.textAlign = "justify";
      }, 3000);
    } else {
      alert("Please enter a name!");
    }
  });
 
  
  window.addEventListener('load', function() {
    let footer = document.createElement("footer");
    footer.textContent = "Created by Esakris";
    document.body.appendChild(footer);
  
    // Add class to h1 element if scrolled to the bottom
    let h1 = document.getElementById("valentines-heading");
    window.addEventListener('scroll', function() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        h1.classList.add("red-text");
      } else {
        h1.classList.remove("red-text");
      }
    });
  
    // Style the footer text
    footer.style.color = "white"; // Set the color to white
  });
  
  
  
  
