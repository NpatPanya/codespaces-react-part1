import "./Hello.css";
const Hello = function({name,surname= "nagg",age = 20}){
return(
    <div>
    <h1>Whats'up<br/> {name} {surname} age {age}</h1><hr/>
    {/* <h1>Whats'up<br/> {name+surname}</h1><hr/> */}
    {/* <h1>Whats'up<br/> {props.name +" " + props.surname}</h1><hr/> */}
    </div>
);
}
export default Hello;