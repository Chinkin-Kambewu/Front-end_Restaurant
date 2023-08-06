const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

fetch('../data/menu.json')
	.then(response => response.json())
	.then(response => {

    displayMenuItems(response);
    displayMenuButtons();
      
    function displayMenuItems(menuItems){
      let displayMenu = menuItems.map(function(item){

        return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;

      })
      displayMenu = displayMenu.join("");
      sectionCenter.innerHTML = displayMenu;
    }
      

      //the btns section

    

    function displayMenuButtons() {
      const categories = response.reduce(  
        function (values, item) {
          if (!values.includes(item.category)) {  //check if item categorie isnt already in the arr ["all"]
            values.push(item.category);
          }
          return values; //always return the values when you use reduce
        },
        ["all"]  //this arr being returned is the values parameter
      );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = response.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(response);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

//=================================//
      
  })
	.catch(err => console.error(err));


        
        

