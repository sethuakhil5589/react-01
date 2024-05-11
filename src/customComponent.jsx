import './customComponent.css';
const person = {
    name: "Sethu Akhil",
    skills: "Java, JavaScript, Html",
    profileImage: "https://plus.unsplash.com/premium_photo-1658507044566-f40d7167ba62?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileHeight: 200,
    profileWidth: 300
}
function CustomComponent(){
    return(
        <div className="container">
            <h1>Custom component</h1>
            <hr />
            <img src={person.profileImage}
             alt='profile image of the person'
             style={{
                height: person.profileHeight,
                width: person.profileWidth
             }} />
            <p>Hey {person.name}, we are building a custom component</p>
        </div>
        

    );
}
export default CustomComponent;