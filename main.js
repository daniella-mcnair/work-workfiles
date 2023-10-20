const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
      id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl: "https://media.istockphoto.com/id/1393799270/photo/tyrannosaurus-rex-on-black-background.webp?b=1&s=612x612&w=0&k=20&c=LWA3P9LTpVIMVG2DZnjXI7_joW2SWYkdWBFbxcLlcbw=",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl: "https://cdn.pixabay.com/photo/2017/09/10/13/06/pterosaur-2735500_1280.jpg"
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
  },
  {
    id: 10,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
  },
  {
    id: 11,
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl: "https://cdn.pixabay.com/photo/2016/03/15/09/01/prehistoric-times-1257162_640.jpg"
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl: "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_640.jpg"
  },
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl: "https://cdn.pixabay.com/photo/2020/07/17/16/01/dinosaur-5414593_640.jpg"
  },
  {
   id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "https://cdn.pixabay.com/photo/2015/02/25/17/56/cat-649164_640.jpg"
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl: "https://cdn.pixabay.com/photo/2020/05/25/11/55/dinosaur-5218265_640.jpg"
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl: "https://cdn.pixabay.com/photo/2019/06/08/17/02/cat-4260536_640.jpg"
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl: "https://cdn.pixabay.com/photo/2020/05/25/11/43/dinosaur-5218227_1280.jpg"
  },
  {
      id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl: "https://cdn.pixabay.com/photo/2018/01/28/12/37/cat-3113513_640.jpg"
  },
  {
      id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
  },
  {
      id: 24,
    name: "George",
    color: "Brown",
    specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl: "https://cdn.pixabay.com/photo/2017/06/18/03/59/dog-2414477_640.jpg"
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl: "https://cdn.pixabay.com/photo/2016/03/28/10/05/kitten-1285341_640.jpg"
  },
  {
      id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
  },
  {
      id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
  },
  {
      id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
  },
  {
      id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
  },
  {
      id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl: "https://cdn.pixabay.com/photo/2017/01/03/18/54/rex-1950276_1280.jpg"
  }
];
 
  
  // Function to render cards to DOM that takes an array
const renderToDom = (pets) => {

  // Create our domstring so we can push our cards to it
  let domString = ""
  // Loop over the array and create our pie cards
  for(pet of pets){
      domString += `
      <div class="cardFlex">
      <div class="card border-success mb-3" style="max-width: 18rem;">
      <div class="card-header">${pet.name}</div>
      <img src=${pet.imageUrl} class="img" alt=${pet.id}>
      <div class="card-body text-success">
      
        <h5 class="card-title">${pet.color}</h5>
        <p class="card-text">${pet.specialSkill}</p>
      </div>
      <div class="card-footer bg-transparent border-success">${pet.type}</div>
    </div>
    </div>`
  }
  
  // CAT FILTER
  // Select our HTML div
    const app = document.querySelector("#app")
      // Set our cards to our div's inner HTML
      app.innerHTML = domString
  
  }

  // Invoke our function and send in our full pie array
  // This will put our cards on the page on load
  renderToDom(pets)
  

  // Now let's make our vegan button work!
  // Select our HTML button
  const catButton = document.querySelector("#catB")
  
  // Create our function to filter out our vegan pies
  const filter = () => {
      // Create an empty array to hold our vegan pie objects
      // Just like we created our empty string to hold our cards!
      let itsCATS = []
  
      // Loop over that pie arrray
      for(pet of pets){
          // Check to see if the pie is vegan
          if(pet.type === "cat"){
              // If it is push it into our pie array
             itsCATS.push(pet)
          }
      }
  
      // Now we can use our handy dandy function to render our new vegan pie aray to our page!
      renderToDom(itsCATS)
  }
  
  // Add an event listener to our button
  // This will listen for us to click our button
  // On click it will invoke our filter function
  catButton.addEventListener('click', filter)


// DOG FILTER


// Invoke our function and send in our full pie array
// This will put our cards on the page on load
renderToDom(pets)


// Now let's make our vegan button work!
// Select our HTML button
const dogButton = document.querySelector("#dog")

// Create our function to filter out our vegan pies
const filter1 = () => {
  // Create an empty array to hold our vegan pie objects
  // Just like we created our empty string to hold our cards!
  let itsDOGS = []

  // Loop over that pie arrray
  for(pet of pets){
      // Check to see if the pie is vegan
      if(pet.type === "dog"){
          // If it is push it into our pie array
         itsDOGS.push(pet)
      }
  }

  // Now we can use our handy dandy function to render our new vegan pie aray to our page!
  renderToDom(itsDOGS)
}

// Add an event listener to our button
// This will listen for us to click our button
// On click it will invoke our filter function
dogButton.addEventListener('click', filter1)

// DINO FILTER


// Invoke our function and send in our full pie array
// This will put our cards on the page on load
renderToDom(pets)


// Now let's make our vegan button work!
// Select our HTML button
const dinoButton = document.querySelector("#dino")

// Create our function to filter out our vegan pies
const filter2 = () => {
  // Create an empty array to hold our vegan pie objects
  // Just like we created our empty string to hold our cards!
  let itsDINOS = []

  // Loop over that pie arrray
  for(pet of pets){
      // Check to see if the pie is vegan
      if(pet.type === "dino"){
          // If it is push it into our pie array
         itsDINOS.push(pet)
      }
  }

  // Now we can use our handy dandy function to render our new vegan pie aray to our page!
  renderToDom(itsDINOS)
}

// Add an event listener to our button
// This will listen for us to click our button
// On click it will invoke our filter function
dinoButton.addEventListener('click', filter2)

// ALL FILTER
// Invoke our function and send in our full pie array
// This will put our cards on the page on load
renderToDom(pets)


// Now let's make our vegan button work!
// Select our HTML button
const allButton = document.querySelector("#all")

// Create our function to filter out our vegan pies
const filter3 = () => {
  // Create an empty array to hold our vegan pie objects
  // Just like we created our empty string to hold our cards!
  let itsALL = []

  // Loop over that pie arrray
  for(pet of pets){
      // Check to see if the pie is vegan
      if(pet.type === "cat" || "dog" || "dino"){
          // If it is push it into our pie array
         itsALL.push(pet)
      }
  }

  // Now we can use our handy dandy function to render our new vegan pie aray to our page!
  renderToDom(itsALL)
}

// Add an event listener to our button
// This will listen for us to click our button
// On click it will invoke our filter function
allButton.addEventListener('click', filter3)
