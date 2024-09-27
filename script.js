// const myfileS = document.querySelectorAll("#myfile");

// myfileS.forEach(input => {
//   input.addEventListener('change', function() {
//     alert("File selected!");
//     // File select hone par yahan kuch aur actions bhi add kar sakte hain
//   });
// });

// function myFunction() {
//     alert("File selected!");

// }

// ya ha ek or
// function handleFileChange(event) {
// function handleFileChange(event) {
//
//     const fileList = event.target.files; // Get the selected file
// const fileList = event.target.files; // Get the selected files

// for (let i = 0; i < fileList.length; i++) {
//   const fileReader = new FileReader(); // Create a FileReader object to read the file
//     const fileReader = new FileReader(); // Create a FileReader object to read the file

//     fileReader.onload = function() {
//       const img = document.createElement('img'); // Create an img element
//       img.src = fileReader.result; // Set the src attribute of the img to the file data
//       img.style.width = '240px'; // Set the width of the img
//       img.style.height = '300px'; // Set the height of the img
//       img.style.objectFit = "cover";
//       img.style.marginTop = '200px'
//        document.body.appendChild(img); // Append the img to the body
//     };
// fileReader.onload = function() {
//     const img = document.createElement('img'); // Create an img element
//     img.src = fileReader.result; // Set the src attribute of the img to the file data
//     img.style.width = '240px'; // Set the width of the img
//     img.style.height = '300px'; // Set the height of the img
//     img.style.objectFit = "cover"; // Adjust image within container
//     img.style.marginTop = '20px'; // Add margin to the top
//     document.body.appendChild(img); // Append the img to the body
//   };

//     fileReader.readAsDataURL(fileList[0]); // Read the file as a data URL
//   }

// fileReader.readAsDataURL(fileList[i]); // Read the file as a data URL
// }
// }

//   const myfileS = document.querySelectorAll("#myfile");

//   myfileS.forEach(input => {
//     input.addEventListener('change', handleFileChange);
//   });

// const myfileS = document.querySelectorAll("#myfile");

// myfileS.forEach(input => {
//   input.addEventListener('change', handleFileChange);
// });

// ya tek ha

// function handleFileChange(event) {
//     const fileList = event.target.files; // Get the selected files
//     const imageContainer = document.getElementById('image-container');

//     // Loop through each selected file
//     for (let i = 0; i < fileList.length; i++) {
//       const fileReader = new FileReader(); // Create a FileReader object to read the file

//     //   fileReader.onload = function() {
//     //     const img = document.createElement('img'); // Create an img element
//     //     img.src = fileReader.result; // Set the src attribute of the img to the file data
//     //     // img.style.width = '200px'; // Set the width of the img
//     //     // img.style.height = '200px'; // Set the height of the img
//     //     // img.style.objectFit = "cover"; // Adjust image within container
//     //     // img.style.marginTop = '60px'; // Add margin to the top
//     //     // document.body.appendChild(img); // Append the img to the body

//     //   };
//     fileReader.onload = function(){
//         const img =  document.createElement("img");
//         img.src = fileReader.result;
//         imageContainer.appendChild(img);
//     }

//       fileReader.readAsDataURL(fileList[i]); // Read the file as a data URL
//     }
//   }

//   const myfileS = document.querySelectorAll("#myfile");

//   myfileS.forEach(input => {
//     input.addEventListener('change', handleFileChange);
//   });

// agian copy

function handleFileChange(event) {
  const fileList = event.target.files;
  const imageContainer = document.getElementById("image-container");

  for (let i = 0; i < fileList.length; i++) {
    const fileReader = new FileReader();
    fileReader.onload = function () {
      const imgContainer = document.createElement("div");
      imgContainer.classList.add("image-item");

      const img = document.createElement("img");
      img.src = fileReader.result;
      imgContainer.appendChild(img);

      const actionIcons = document.createElement("div");
      actionIcons.classList.add("action-icons");

      const removeIcon = document.createElement("span");
      removeIcon.innerHTML = "&#10060;";
      removeIcon.style.cursor = "pointer";
      removeIcon.style.marginRight = "10px"; // Add margin to create a gap

      removeIcon.onclick = function () {
        imgContainer.remove();
      };
      actionIcons.appendChild(removeIcon);

      // const rotateLeftIcon = document.createElement("span");
      // rotateLeftIcon.innerHTML = "&#10227;";
      // rotateLeftIcon.style.cursor = "pointer";
      // rotateLeftIcon.onclick = function() {
      //   img.style.transform = "rotate(-90deg)";

      // };
      const rotateLeftIcon = document.createElement("span");
      rotateLeftIcon.innerHTML = "&#10227;";
      rotateLeftIcon.style.cursor = "pointer";
      rotateLeftIcon.style.marginRight = "10px"; // Add margin to create a gap

      let rotationAngle = 0; // Initial rotation angle

      rotateLeftIcon.onclick = function () {
        rotationAngle -= 90; // Decrease rotation angle by 90 degrees
        img.style.transform = `rotate(${rotationAngle}deg)`; // Apply the new rotation
      };

      document.body.appendChild(rotateLeftIcon);

      actionIcons.appendChild(rotateLeftIcon);
      // yaha tek

      // const rotateRightIcon = document.createElement("span");
      // rotateRightIcon.innerHTML = " &#10226;";
      // rotateRightIcon.style.cursor = "pointer";
      // rotateRightIcon.onclick = function() {
      //   img.style.transform = "rotate(90deg)";
      // };
      const rotateRightIcon = document.createElement("span");
      rotateRightIcon.innerHTML = "&#10226;";
      rotateRightIcon.style.cursor = "pointer";

      let rotationAnglel = 0; // Initial rotation angle

      rotateRightIcon.onclick = function () {
        rotationAnglel -= 90; // Decrease rotation angle by 90 degrees
        img.style.transform = `rotate(${rotationAnglel}deg)`; // Apply the new rotation
      };

      document.body.appendChild(rotateRightIcon);
      actionIcons.appendChild(rotateRightIcon);

      imgContainer.appendChild(actionIcons);
      imageContainer.appendChild(imgContainer);
    };

    fileReader.readAsDataURL(fileList[i]);
  }
}
const myfile = document.getElementById("myfile");
myfile.addEventListener("change", handleFileChange);
 