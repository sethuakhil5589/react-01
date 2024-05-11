const laptops = [
    {id:"101", name:"NoteBook", manufacturer:"Asus", ram:"8", isProModel: false},
    {id:"102", name:"MacBook Air", manufacturer:"Apple", ram:"8", isProModel: false},
    {id:"103", name:"Surface pro", manufacturer:"Microsoft", ram:"16", isProModel: true},
    {id:"104", name:"MacBook pro", manufacturer:"Apple", ram:"24", isProModel: true}
];

function Laptops(){
    const laptopList = laptops.map(
        laptop =>
        <li key={laptop.id} style={{
            backgroundColor: laptop.isProModel  ? "red" : "green",
            color: "white",
            fontWeight: laptop.isProModel ? "bold" : "normal"
        }}>
            {laptop.name} is manufactured by {laptop.manufacturer} with {laptop.ram} gb RAM 
        </li>
    );
    return(
        <ul>
            {laptopList}
        </ul>
    );
}

export default Laptops;