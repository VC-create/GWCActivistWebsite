/* .js files add interaction to your website */

/*to generate the personalized script, first create variables*/
var email = document.getElementById("email");
var button = document.getElementById("myButton");

button.addEventListener("click", displayEmail);

function displayEmail(){
  var name = document.getElementById("name").value;
  var loc = document.getElementById("myLoc").value;
  displayEmail.innerHTML = "My name is" + name + ", and I live in " + loc + ". I’m writing to share concerns on cuts for two essential programs: SNAP (Supplemental Nutrition Assistance Program) and CHIP (Children’s Health Insurance Program).SNAP helps families afford groceries and nutritional food. CHIP provides health coverage to millions of children. I’m especially concerned about the cuts and different eligibility requierements that are now being imposed in order to have access to these programs. These programs need to be fully funded to protect millions of Americans. I strongly hope that you will consider advocating for increased funding for SNAP and CHIP, and combating legislation that proposes cuts and adds harsher barriers to access, which reduces the number of people the program is eligible for. Thank you for supporting families in this time of need.";
}

