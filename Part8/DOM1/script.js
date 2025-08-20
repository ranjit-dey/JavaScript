// Example 1

document.getElementById("toggleTheme").addEventListener("click", function () {
    document.body.classList.toggle("darkmode");
    const btn = document.getElementById("toggleTheme");
    if (btn.textContent === "Toggle Darkmode") {
        btn.textContent = "Toggle Lightmode";
    } else {
        btn.textContent = "Toggle Darkmode";
    }
});

// Example 1

document.getElementById("changeTextButton").addEventListener("click", () => {
    document.getElementById("myParagraph").innerHTML = `Hey, I am changed!`;
});

// Example 2

const btn = document.getElementById("highlightFirstCity");
btn.addEventListener("click", function () {
    // console.log(document.getElementById('citiesList').firstElementChild);

    // one way
    /*
      let firstCity = document.getElementById('citiesList').firstElementChild;
      firstCity.style.backgroundColor = 'Yellow'
      firstCity.style.color = 'black'
      */

    // another way
    // for this you have to define a class in css file => ex. highlight
    let firstCity = document.getElementById("citiesList").firstElementChild;
    firstCity.classList.toggle("highlight");
});

// Example 3
document.querySelector("#changeOrder").addEventListener("click", () => {
    let coffee = document.getElementById("coffeeType");
    coffee.textContent = "Espresso";
    coffee.style.color = "yellow";
});

// Example 4

document.getElementById("addNewItem").addEventListener("click", () => {
    let items = {
        1: "Eggs",
        2: "Chicken",
        3: "Panir",
        4: "Chola bature",
        5: "Pizza",
    };
    let shoppingList = document.getElementById("shoppingList");
    let newItem = document.createElement("li");
    newItem.textContent = items[Math.floor(Math.random()*5)+1];
    shoppingList.appendChild(newItem);
});

// Example 5

document
    .querySelector("#removeLastTask")
    .addEventListener("click", function () {
        const taskList = document.querySelector("#taskList");
        // taskList.remove() //remove all items
        if(taskList.children.length){
            taskList.lastElementChild.remove();
            console.log(taskList.children)
        }
        else alert('No item in tasklist');
    });

// Example 6

document
    .getElementById("clickMeButton")
    .addEventListener("mouseover", function () {
        let item = document.createElement("p");
        let list = document.getElementById("example-6");
        item.textContent = "Mouse is overing on me";
        list.insertBefore(item, list.children[1]);
    });

// Example 7

document.getElementById("teaList").addEventListener("click", (event) => {
    // one way
    /*
      if(event.target && event.target.matches('.teaItem')){
          alert(`You clicked on: ${event.target.textContent}`)
      }*/

    alert(`You clicked on: ${event.target.textContent}`);
});

// Example 8

const feedBackForm = document.getElementById("feedbackForm");
feedBackForm.addEventListener("submit", function (e) {
    // alert('form submitted!')
    e.preventDefault(); // e == event
    let feedback = document.getElementById("feedbackInput").value;
    let output = document.getElementById("feedbackDisplay");
    output.style.display = "block";

    let heading = document.createElement("p");
    heading.textContent = "Feedback";
    heading.style.textAlign = "center";

    let content = document.createElement("p");
    content.textContent = feedback;

    output.append(heading, content);
    // output.appendChild(heading)
    // output.appendChild(content)
});

// Example 9

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("domStatus").textContent = "DOM Loaded Successfully";
});

// Example 10

document
    .getElementById("toggleHighlight")
    .addEventListener("click", function () {
        let descriptionText = document.getElementById("description");
        descriptionText.classList.toggle("highlight");
        // descriptionText.classList.add('highlight')
    });
