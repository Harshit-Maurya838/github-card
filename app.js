document.querySelector('.form').addEventListener('submit',()=> event.preventDefault())
const inputUsernameArea = document.querySelector('#search');
let userName = '';


const hidePopup = ()=>{
    document.querySelector('.popup').style.display ="none" ;
    inputUsernameArea.value = "";
}


document.querySelector('.icon').addEventListener('click', ()=>{
    userName = inputUsernameArea.value;
    main();
})

const main = async () =>{
    let url = `https://api.github.com/users/${userName}`;
    const response = await fetch(url);
    const result = await response.json();

    if(result.status == 404){
        document.querySelector('.error_msg').style.display = "block";
    }else{
        hidePopup();
        document.querySelector('.name').innerText = result.name;
        document.querySelector('.avatar_img img').src = result.avatar_url;
        document.querySelector('.follower_count').innerText = result.followers;
        document.querySelector('.follower_count').innerText = result.followers;
        document.querySelector('.following_count').innerText = result.following;
        document.querySelector('.location_text').innerText = result.location;
        document.querySelector('.email_text').innerText = result.email;
        document.querySelector('.userbio_text').innerText = result.bio;
        document.querySelector('.repo').innerText = result.public_repos;
        document.querySelector('.gists').innerText = result.public_gists;
        document.querySelector('.visit_btn').href = result.html_url;
    }
}

const reloadPage = ()=>{
    location.reload();
}

