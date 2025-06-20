const background = document.getElementById('body')

background.style.backgroundColor = "silver";
background.style.alignContent = 'center';
background.style.marginLeft = '10%'

const title = document.getElementById("title");

title.style.color = "green";

const headings = document.querySelectorAll("h3");
headings.forEach(heading => {
  heading.style.textTransform = "uppercase";
});

const fruitsList = document.getElementById("fruits");
fruitsList.style.display = 'flex';
fruitsList.style.backgroundColor = '#b97d65';

const imageStyles = document.getElementById('image');
imageStyles.style.width = '280px';

const bananaStyle = document.getElementById('banana');
bananaStyle.style.width = '280px';

const melonStyle = document.getElementById('melon');
melonStyle.style.width = '280px'



const newFruit = document.createElement("img");
newFruit.src = './images/banana.jpg';
newFruit.style.width = '280px';
newFruit.style.height = '280px';
newFruit.style.marginTop = '18px';

fruitsList.appendChild(newFruit);


newFruit.textContent =   "Oranges";

newFruit.textContent = "Strawberies"

const carrotStyle = document.getElementById('carrot');
carrotStyle.style.width = '280px';
carrotStyle.style.height = '280px';

const tomatoStyle = document.getElementById('tomato');
tomatoStyle.style.width = '280px';

const kaleStyle = document.getElementById('kale');
kaleStyle.style.width = '280px';
kaleStyle.style.height = '280px';


fruitsList.appendChild(newFruit);

const vegesList = document.getElementById("veges");
vegesList.style.display = 'flex';
vegesList.style.backgroundColor = '#b97d65'

const newVegetable = document.createElement('img')
newVegetable.src = './images/onions.jpg';
newVegetable.style.width = '280px';
newVegetable.style.height = '280px';
newVegetable.style.marginTop = '23px';
newVegetable.textContent = 'Carrots'

const newVeg = document.createElement("figcaption");
newVeg.textContent = "Carrots";
vegesList.appendChild(newVeg);
vegesList.appendChild(newVegetable)

const addFruitButton = document.getElementById('addFruitButton');
addFruitButton.onclick = ()=>{
  fruitsList.style.backgroundColor = '#5ACD32'
}

const addVegButton = document.getElementById('addVegeButton');
addVegButton.onclick = ()=>{
  vegesList.style.backgroundColor = '#5ACD32'
}


