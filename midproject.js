"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const basicGameView = document.querySelector(".basicGame");
  const overlay = document.querySelector(".overlay");
  const btnCloseGame = document.querySelector(".close-modal");
  const btnsOpenGame = document.querySelectorAll(".startGame");

  const openGameConsole = function () {
    basicGameView.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeGameConsole = function () {
    basicGameView.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  for (let i = 0; i < btnsOpenGame.length; i++) {
    btnsOpenGame[i].addEventListener("click", openGameConsole);
  }

  btnCloseGame.addEventListener("click", closeGameConsole);

  overlay.addEventListener("click", closeGameConsole);

  //   document.addEventListener("keydown", function (e) {
  //     // console.log(e.key);

  //     if (e.key === "Escape" && !modal.classList.contains("hidden")) {
  //       closeModal();
  //     }
  //   });
});

document.addEventListener("DOMContentLoaded", function () {
  const optionsDropdown = document.getElementById("gameOptions");
  const dialogBox = document.getElementById("dialogBox");
  const dialogImage = document.getElementById("dialogImage");

  const updateInfo = document.getElementById("updateConsole");

  optionsDropdown.addEventListener("change", function () {
    const selectedOption = optionsDropdown.value;
    let dialogContent = "";
    let imagePath = "";
    let updateContent = "";
    // Determine dialog content and image path based on selected option
    switch (selectedOption) {
      case "rockClimbing":
        dialogContent =
          "Rock climbing challenges your physical and mental strength as you ascend vertical cliffs using ropes and harnesses. It's a thrilling adventure in nature's vertical playground.";

        updateContent =
          "This is the user friendly game console for the Rock Climbing.";
        imagePath = "rock_climbing.jpg";
        break;
      case "mtnBiking":
        dialogContent =
          "Mountain biking involves navigating rugged trails on bicycles, conquering steep climbs and thrilling descents, amidst breathtaking mountain scenery, providing an exhilarating adventure for outdoor enthusiasts and adrenaline junkies alike.";
        updateContent =
          "This is the user friendly game console for the Mountain Biking.";
        imagePath = "mtn_biking.jpg";
        break;
      case "snowBoarding":
        dialogContent =
          "Snowboarding is a thrilling winter sport where riders glide down snowy slopes on a single board. With a blend of skill and style, it's an exhilarating adventure in the mountains.";
        updateContent =
          "This is the user friendly game console for the Snow Boarding.";
        imagePath = "snow_boarding.jpg";
        break;
      case "paragliding":
        dialogContent =
          "Paragliding offers exhilarating flights through the sky, where participants soar like birds, enjoying breathtaking views and the freedom of flight using a parachute-like canopy and harness.";
        updateContent =
          "This is the user friendly game console for the Paragliding.";
        imagePath = "paragliding.jpg";
        break;
      default:
        dialogContent = "Invalid option.";
    }

    // Update dialog box content and image
    dialogBox.querySelector("p").textContent = dialogContent;
    // readMoreBtn.querySelector(".readMoreBtn")=hiddenContent;
    updateInfo.querySelector("p").textContent = updateContent;
    dialogImage.src = imagePath;
  });
});
// readMoreBtn.addEventListener("click", function () {
//   if (moreText.classList.contains("hidden")) {
//     moreText.classList.remove("hidden");
//     readMoreBtn.textContent = "Read Less";
//   } else {
//     moreText.classList.add("hidden");
//     readMoreBtn.textContent = "Read More";
//   }
// });
// });
document.addEventListener("DOMContentLoaded", function () {
  const moreText = document.getElementById("moreText");
  const readMoreBtn = document.getElementById("readMoreBtn");

  readMoreBtn.addEventListener("click", function () {
    if (moreText.classList.contains("hidden")) {
      moreText.classList.remove("hidden");
      readMoreBtn.textContent = "Read Less";
    } else {
      moreText.classList.add("hidden");
      readMoreBtn.textContent = "Read More";
    }
  });
});
