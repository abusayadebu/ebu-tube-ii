
// time-getting function
function getTimeString(time) {
    //get Hour and rest seconds
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} hr ${minute} min ${remainingSecond} sec ago`;
}
// --------

// loadCategories
// function
    const loadCategories = () => {
        // fetch data
        fetch ('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((response) => response.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) =>console.log(error));
    }

// loadVideos
    const loadVideos = () => {
        // fetch data
        fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((response) => response.json())
        .then((data) => displayVideos(data.videos))
        .catch((error) => console.log(error))
    }

// displayVideos
    const displayVideos = (videos) => {
        console.log(videos)
        // // take the videos container from html
        const videoContainer = document.getElementById("videos");

        // get every videos 
        for(let video of videos){
            console.log(video);

        // Create card for every video
            const card = document.createElement("div")
            card.classList = "card bg-base-100 shadow-sm"
            card.innerHTML = 
            `<figure class="px-2 py-2 relative">
            <img
            src= ${video.thumbnail}
            alt="thumbnail"
            class="h-full w-full text-xs object-cover rounded-md" />
            ${
                video.others.posted_date?.length === 0 ? "" :
                `<span class="absolute right-5 bottom-5 bg-black text-white px-2 rounded-sm">${getTimeString(video.others.posted_date)}</span>`
            }
            
        </figure class = "h-[200px]">
        <div class="px-0 py-2 flex gap-2">
            <div>
            <img class ="w-10 h-10 rounded-full object-cover" src = ${video.authors[0].profile_picture} />
            </div>

            <div class = "">
            <h2 class = "text-xl font-bold">${video.title}</h2>
            <div class = flex gap-2 justify-center items-center>
             <p class = "font-semibold">${video.authors[0].profile_name}</p>
            ${video.authors[0].verified === true ? 
            `<img class = "w-5" src ="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png" />` : ""
            }
            </div>
            <p>${video.others.views} views</p>
            </div>

            </div>
        </div>`

        videoContainer.append(card);
        }
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
    loadVideos();