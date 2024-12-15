// Define an array of objects with image source and description
const hobbies = [
  {
    image: './assets/icons/iconController.png',
    description: 'Here are the top Games I play to pass the time and bond with friends.',
  },
  {
    image: './assets/icons/iconValo.png',
    description: 'I play Valorant in my free time, but I always queue with friends. Add me: skylight#8064.',
  },
  {
    image: './assets/icons/iconLeague.png',
    description: 'League is something I only play with friends, and it is simultaneously fun and annoying.',
  },
  {
    image: './assets/icons/iconMC.png',
    description: 'In Minecraft, I often host servers during the summer to gather with friends from different locations.',
  },
  {
    image: './assets/icons/iconTerraria.png',
    description: 'Terraria is something we play yearly, each time with new mods.',
  },
];

const talents = [
  {
    image: './assets/icons/iconStar.png',
    description: 'Here are my hobbies related to work and school.',
  },
  {
    image: './assets/icons/iconProgramming.png',
    description: 'I have experience developing websites, web applications, and mobile applications.',
  },
  {
    image: './assets/icons/iconWeb.png',
    description: 'I spent the majority of my academic break learning web frameworks.',
  },
  {
    image: './assets/icons/iconArt.png',
    description: 'I made time to learn digital and traditional art. All the assets of this website were made by yours truly.',
  },
  {
    image: './assets/icons/iconUnity.png',
    description: 'I am currently learning game development using the Unity engine.',
  },
];

// Get the elements
const hobbyIcon = document.getElementById('hobbyIcon');
const hobbyDescription = document.querySelector('.Hobbydescription');
const talentsIcon = document.getElementById('talentsIcon');
const talentsDescription = document.getElementById('talentsDescription');

// Initialize the index
let hobbyIndex = 0;
let talentIndex = 0;

// Function to change the hobby
function changeHobby() {
  const currentHobby = hobbies[hobbyIndex];
  hobbyIcon.style.opacity = 0;
  setTimeout(() => {
    hobbyIcon.src = currentHobby.image;
    hobbyIcon.style.opacity = 1;
  }, 500);

  const currentDescription = hobbyDescription.textContent;
  let deleteIndex = currentDescription.length;
  const deleteInterval = setInterval(() => {
    hobbyDescription.textContent = currentDescription.substring(0, deleteIndex);
    deleteIndex--;
    if (deleteIndex < 0) {
      clearInterval(deleteInterval);
      const descriptionText = currentHobby.description;
      let descriptionIndex = 0;
      const typingInterval = setInterval(() => {
        hobbyDescription.textContent += descriptionText[descriptionIndex];
        descriptionIndex++;
        if (descriptionIndex >= descriptionText.length) {
          clearInterval(typingInterval);
        }
      }, 50);
    }
  }, 10);
  hobbyIndex = (hobbyIndex + 1) % hobbies.length;
}

// Function to change the talent
function changeTalent() {
  const currentTalent = talents[talentIndex];
  talentsIcon.style.opacity = 0;
  setTimeout(() => {
    talentsIcon.src = currentTalent.image;
    talentsIcon.style.opacity = 1;
  }, 500);

  const currentDescription = talentsDescription.textContent;
  let deleteIndex = currentDescription.length;
  const deleteInterval = setInterval(() => {
    talentsDescription.textContent = currentDescription.substring(0, deleteIndex);
    deleteIndex--;
    if (deleteIndex < 0) {
      clearInterval(deleteInterval);
      const descriptionText = currentTalent.description;
      let descriptionIndex = 0;
      const typingInterval = setInterval(() => {
        talentsDescription.textContent += descriptionText[descriptionIndex];
        descriptionIndex++;
        if (descriptionIndex >= descriptionText.length) {
          clearInterval(typingInterval);
        }
      }, 50);
    }
  }, 10);
  talentIndex = (talentIndex + 1) % talents.length;
}

// Add transition effects
hobbyIcon.style.transition = 'opacity 0.5s';
talentsIcon.style.transition = 'opacity 0.5s';

// Call the functions every 8 seconds
setInterval(changeHobby, 8000);
setInterval(changeTalent, 8000);

// About Me Section
const btnChangeDes = document.querySelector('.btnChangeDes');
const aboutDescription = document.querySelector('.Aboutdescription');

const descriptions = [
  'My name is Karl Anthony T. Floresca the middle child of Rizaldy S. Floresca and Memfi T. Floresca, 19 years of age and is currently studying bachelor of science in information technology 2nd year in Camarines Norte State College, soon to be University Of Camarines Norte. My mother originally came from Ormoc city in Leyte and My father lived in Quezon city, they met due to my father starting work at an early age near my mother\'s house in Quezon at a shipyard originally owned by Panganiban who is the boss of my father, after a few years they got married and had me as the second child, i was born in Ormoc city and raised here in Camarines norte for majority of my life, as for the reason why we stayed here is due to my father\'s work for Panganiban and now as of now we permanently stay in Jose Panganiban up till the present.',
  'My hobbies are drawing, chess , online games and programming, my love for art stem from the love of animated movies and comics and chess is a recent hobby i picked up in highschool due to my friends who were all relatively good in chess and i saw it as a challenge to learn the sport and now my elo in chess is over a thousand. Games originated from the things i saw in the internet and this is also the catalyst of why I\'m interested in programming, i consider my dream job as a game developer.',
  'I studied daycare in a local children development center close to purok 5 of our barangay and spent may elementary days at Jose Panganiban Elementary and graduated with high marks, Moving forward in junior and senior high school i studied in Jose Panganiban National High School under the interest of computers so i choose the tvl course Computer System Servicing and graduated with honors in 2023. I think the one thing that drove me to my passion about computers was my time spent on the internet, meeting interesting people and inspiring materials that I used to fuel my course. Now that I\'m in college i have spent time learning and growing my abilities in programming and designing for may eventual job, however i encountered many challenges as i go an.',
    'The challenges that killed my drive during the first semester of college was the adjustment to culture in my new path. I found it difficult to keep up due to stress and it was my first time being far from my own family. One more challenge that i have experience in the past year was accepting my faults and taking heartfelt criticism that can break my spirit, however i spent my life adapting and strengthening myself to take and handle words in a positive light, i tend to laugh it off and don\'t mind and improve.',
    'Reflecting on my past i see now that life is nothing like those we see in tv or the things we heard from stories when we were kids, life is what we decide it to be, life is not something to rush and figure out, it is a part of us that we must enjoy weather it\'s trough family, friend, love, pursuing a passion etc.  we must treasure the time we have in order to make the most of the limited time we have.',
];
let currentDescriptionIndex = 0;

function updateDescription() {
  const descriptionText = descriptions[currentDescriptionIndex];
  const descriptionElement = document.createElement('p');
  aboutDescription.innerHTML = `
    <h2>About Me</h2>
    <h6>Analyzing Unidentified Living Object</h6>
    <br>
  `;
  aboutDescription.appendChild(descriptionElement);

  let i = 0;
  const typingInterval = setInterval(() => {
    if (i < descriptionText.length) {
      descriptionElement.textContent += descriptionText[i];
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, 10);
}

function switchDescription() {
  currentDescriptionIndex = (currentDescriptionIndex + 1) % descriptions.length;
  updateDescription();
}

btnChangeDes.addEventListener('click', switchDescription);
updateDescription();

// UFO Crash Animation
function crashUFO(ufo) {
  const rect = ufo.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  ufo.style.animation = 'crash 2s forwards';
  ufo.style.left = `${x}px`;
  ufo.style.top = `${y}px`;
  ufo.style.position = 'absolute';

  const audio = new Audio('./assets/sfx/laser.mp3');
  audio.play();
}

function popBubble(bubble) {
  const rect = bubble.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  bubble.style.position = 'absolute';
  bubble.style.left = `${x - 25}px`;  // Adjusted to center the bubble
  bubble.style.top = `${y - 25}px`;   // Adjusted to center the bubble

  // Trigger the pop effect
  bubble.classList.add('popped');

  // Play a popping sound
  const audio = new Audio('./assets/sfx/pop.mp3');
  audio.play();

  setTimeout(() => {
      bubble.remove();
  }, 500); 
}


// Call initial updates
changeHobby();
changeTalent();
updateDescription();

document.addEventListener("DOMContentLoaded", function () {
  const underwaterArea = document.querySelector(".UnderwaterArea"); // Select UnderwaterArea
  const ufos = document.querySelectorAll(".ufo"); // Select all UFO elements
  startAudio();

  // Handle scroll event
  window.addEventListener("scroll", function () {
      // Get the UnderwaterArea position
      const underwaterAreaRect = underwaterArea.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if UnderwaterArea is visible
      if (underwaterAreaRect.top <= windowHeight && underwaterAreaRect.bottom >= 0) {
          // Hide UFOs
          ufos.forEach(ufo => {
              ufo.style.display = "none";
          });
      } else {
          // Show UFOs if UnderwaterArea is not visible
          ufos.forEach(ufo => {
              ufo.style.display = "block";
          });
      }
  });

  // Add click functionality to list items
  const listItems = document.querySelectorAll(".material li"); // Select all <li> in .material
  listItems.forEach(item => {
      item.addEventListener("click", () => {
          const searchText ="what is "+ item.querySelector("p").innerText; // Get the <p> text
          const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`; // Construct URL
          window.open(googleSearchURL, "_blank"); // Open in new tab
      });
  });
});


function createBubble() {
  const bubble = document.createElement("img");
  bubble.src = "./assets/icons/bubble.png";
  bubble.classList.add("animatedBubble");

  // Set a random horizontal position
  bubble.style.setProperty("--random-x", Math.random());
  bubble.onclick = function () {
    popBubble(bubble);
  };
  // Append bubble to the container
  const bubbleContainer = document.querySelector(".bubbleContainer");
  bubbleContainer.appendChild(bubble);

  // Remove bubble after animation ends
  setTimeout(() => {
      bubble.remove();
  }, 7000); // Match the duration of the animation
}

// Generate bubbles at intervals
setInterval(createBubble, 1000); 


document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const tabs = document.querySelector(".tabs");

  menuToggle.addEventListener("click", () => {
      tabs.classList.toggle("active");  
  });
});