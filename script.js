
/* .js files add interaction to your website */

// Check if we're on the takeAction page before setting up email functionality
var email = document.getElementById("email");
var TAbutton = document.getElementById("myTAButton");

if (TAbutton && email) {
  TAbutton.addEventListener("click", displayEmail);
}

function displayEmail(){
  // Create variables to hold the values of what was in the textboxes
  var name = document.getElementById("myName").value;
  var loc = document.getElementById("myLoc").value;
  email.innerHTML = "My name is " + name + ", and I live in " + loc + ". I'm writing to share concerns on cuts for two essential programs: SNAP (Supplemental Nutrition Assistance Program) and CHIP (Children's Health Insurance Program). SNAP helps families afford groceries and nutritional food. CHIP provides health coverage to millions of children. I'm especially concerned about the cuts and different eligibility requirements that are now being imposed in order to have access to these programs. These programs need to be fully funded to protect millions of Americans. I strongly hope that you will consider advocating for increased funding for SNAP and CHIP, and combating legislation that proposes cuts and adds harsher barriers to access, which reduces the number of people the program is eligible for. Thank you for supporting families in this time of need.";
}

// Fact generator array
var factList = [
  "One out of six children lives in extreme poverty (United Nations)",
  "Nearly 22,000 children die each day due to living in poverty (The Borgen Project).",
  "Nearly 90% of children living in extreme poverty reside in either sub-Saharan Africa or South Asia (WorldVision)",
  "There are 2.2 billion children in the world, and 1 billion of them live in poverty (The Borgen Project).",
  "Most recently, in 2024, almost 700 million people around the world were subsisting on less than $2.15 per day (United Nations).",
  "One frappuccino at Starbucks costs more than the median income for people in the developing world ($3 a day) (The Borgen Project).", 
  "The COVID-19 pandemic pushed an additional 70 million people into extreme poverty, marking the largest one-year increase in decades (WorldVision).",
  "There are 2.2 billion children in the world, and 1 billion of them live in poverty (The Borgen Project).", 
  "According to an Oxfam report, if the world's 100 richest people pooled their collective earnings in 2012, they could have ended extreme world poverty four times over (The Borgen Project)."
];

// Check if we're on the home page before setting up fact functionality
var fact = document.getElementById("fact");
var count = 0;
var homeButton = document.getElementById("homeButton");

if (homeButton && fact) {
  homeButton.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
