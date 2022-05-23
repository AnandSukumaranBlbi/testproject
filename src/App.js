import React  from "react";



var a=10;
export default class testclass extends React.Component{

update=()=>{
a=a+10;
alert(a);
<div>aaa</div>
  
}

render(){
return(
<div>

<button onClick={this.update}>Click to Add </button>

</div>

)

}

}