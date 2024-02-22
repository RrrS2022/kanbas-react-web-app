import VariablesAndConstants
  from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions";
import ArrowFunctions from "./functions/ArrowFunctions";
import ImpliedReturn from "./functions/ImpliedReturn";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import JsonStringify from "./json/JsonStringify";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";
function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <br />
          <VariableTypes/>
          <br />
          <BooleanVariables/>
          <br />
          <IfElse/>
          <br />
          <TernaryOperator/>
          <br />
          <ES5Functions/>
          <br />
          <ArrowFunctions/>
          <br />
          <ImpliedReturn/>
          <br />
          <FunctionParenthesisAndParameters/>
          <br />
          <WorkingWithArrays/>
          <br />
          <JsonStringify/>
          <br /><br />
          <TemplateLiterals/>
          <br />
          <House/>
          <br />
          <Spreading/>
          <br />
          <Destructing/>
          <br />
          <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript