// loadCategories
// function
    const loadCategories = () => {
        // fetch data
        fetch ('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((response) => response.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) =>console.log(error));
    }

    

// displayCategories
// function
    const displayCategories= (items) => {
        // take the button container from html
        const buttonContainer = document.getElementById("categories")
        
        // get every cartegory
        for(let item of items){
            console.log(item)

        // creat button for every category
        const button = document.createElement("button")
        button.classList = "btn";
        button.innerText = item.category;
        // now going to html to show the button that i created

        // append category
        buttonContainer.appendChild(button)

     }
    }

    loadCategories();