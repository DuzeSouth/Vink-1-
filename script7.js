var $logo = document.getElementsByClassName("logo");
var $hello = document.getElementsByClassName("hello");
var $boxone = document.getElementsByClassName("boxone");
var $welcome_text = document.getElementsByClassName("Welcome_text");
$logo.velocity({opacity:0});
$logo.velocity({opacity:1},{duration:5000, easing: "swing", loop:15});
//$middleKext.velocity({ left:5000},{duration:4000,easing:"swing",loop:true});
$logo.velocity({left:2000,opacity:1},{duration:10000, easing: "swing", loop:true});
$boxone.velocity({opacity:0},{duration:5000,loop:true});
$boxone.velocity({scale:"200px"},{duration:5000,loop:true});
$welcome_text.velocity({opcaity:0});

const nums =[9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const ops =['/','*', '-','+'];
const ids={
    7:'seven',
    8:'eight',
    9:'nine',
    4:'four',
    5:'five',
    6:'six',
    1:'one',
    3:'three',
    2:'two',
    0:'zero',
    '/':'divide',
    '*': 'multiply',
     '-': 'subtract',
     '+': 'add'

};

class App extends React.Component{

    
    state ={
        
        lastPressed: undefined,
        calc: '0',
        operation:undefined
    }
    handleClick = (e) =>{
        const { lastPressed, calc } = this.state;
        const {innerText} = e.target;
       
        console.log(innerText);
       
        switch(innerText){
       case 'AC' : {
           this.setState({
               calc:'0',
           });
           break;
       }
       case '=': {
           const evaluated = eval(calc);
           this.setState({
               calc: evaluated,
           });
           break;
       }
       case '.':{
       const splitted=calc.split(/[\+\-\*/]/);
       const last = splitted.slice(-1)[0];
       
       if(!last.includes('.')){
           this.setState({
           
                   calc: calc + '.'
           })
       }
       break;
       }
       default: {
       let e = undefined;
       if(ops.includes(innerText)){
       if(ops.includes(lastPressed) && innerText !== '-'){
           const lastNumberIdx = calc.split('').reverse()
           .findIndex(char => char !== ' ' && nums.includes(+char));
           e = calc.slice(0, calc.length - lastNumberIdx) + `${innerText}`;
       }else{
           e = `${calc} ${innerText}`;
       }
       }else{
           e = (calc === '0') ? innerText : (calc + innerText);
       }
       
       this.setState({
           calc:e
       });
       }
       
        }
        this.setState({
           lastPressed: innerText
        })
}
    render(){
        const {currentNumber, calc} = this.state;
        return(
            <div className="cont-Body">
                 <p style={{position: 'absolute', top:0}}>{JSON.stringify(this.state,null,2)}</p>
           <div className="calculator">
            <div id="display" className="display">
            {calc}
            </div>
           
            <div className="nums-container">
            <button className="big-h light-gray ac" onClick={this.handleClick} id="clear">AC</button>
            {nums.map(num => (
                <button className={`dark-gray ${num === 0 && 'big-h'}`} key={num} onClick={this.handleClick} id={ids[num]}>{num}</button>
                ))}
                <button className="light-gray" onClick={this.handleClick} id="decimal">.</button>
            </div>
            
            <div className="ops-container">
                {ops.map(op => (
                <button className="orange" key={op} onClick={this.handleClick} id={ids[op]}>{op}</button>
                ))}
      <button className="orange" onClick={this.handleClick} id="equals">=</button>

            </div>
           </div> 
         
            </div>
        )
                }
    }

ReactDOM.render(<App/>, document.getElementById("app"));