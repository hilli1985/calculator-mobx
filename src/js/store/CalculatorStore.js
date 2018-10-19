import { observable , action, computed } from "mobx";


class CalculatorStore {
    @observable value = null;//number
    @observable currentOperand = '0';//string
    @observable displayValue ='0';// computed;//string
    @observable opertor =null; //string
    
    @action updateCurrentOperand = (digit)=> {
        // operand after a '=' operator means start over!!
        if (this.opertor==='=') {
            this.currentOperand = '0';
            this.displayValue = '0';
            this.value = null;
            this.opertor = null;
        }
        if ((this.currentOperand[0]==='0')&&(this.currentOperand[1]==='.')) {
            this.currentOperand = this.currentOperand + digit; 
            this.displayValue = this.currentOperand;
            return;
        }
        else if (this.currentOperand[0]==='0') {
            this.currentOperand = digit;
            this.displayValue = this.currentOperand;
            return;
        }
        this.currentOperand = this.currentOperand + digit; 
        this.displayValue = this.currentOperand;
    }
    
    @action updateOpertor = (opertor)=> {
        // debugger;
        if(this.value){// it's not the first operand
        this.calc();
    }
    this.opertor = opertor.toString();
    // debugger;
    this.value = parseFloat(this.currentOperand)
    this.currentOperand = '0';
    return; 
}

@action clearCurrentOperand = ()=> {
    this.currentOperand = '0';
    this.displayValue = '0';
    this.opertor = null;
    this.value = null;
}

@action changeSign = ()=> {
    if (!this.value){
        this.currentOperand = parseFloat(this.currentOperand)*(-1).toString();
        this.displayValue = this.currentOperand;
        return;
    }
    this.value = this.value *(-1); 
    this.currentOperand = this.value.toString();
    this.displayValue = this.value.toString();
}

@computed get updateDisplayValue() {
    return this.displayValue 
}

@action precentage = () => {
    alert ('todo : precentage!')
}

@action adddecimalPoint = () => {
    this.currentOperand = this.currentOperand + '.';
    this.displayValue = this.displayValue + '.';
}

@action calc = () => {   
    if (this.opertor==='+'){
        this.value = parseFloat(this.value) + parseFloat(this.currentOperand) 
    }
    else if (this.opertor==='-'){
        this.value = parseFloat(this.value) - parseFloat(this.currentOperand) 
    }
    else if (this.opertor==='/'){
        this.value = parseFloat(this.value) / parseFloat(this.currentOperand) 
    }
    else if (this.opertor==='X'){
        this.value = parseFloat(this.value) * parseFloat(this.currentOperand) 
    }
    this.displayValue = this.value.toString();;
    if (this.displayValue.includes('.')) {
        this.displayValue = (this.value.toFixed(5)/1).toString(); //// dividing by 1 coerces it to a Number, but drops the decimals back off the end.
    }
    this.currentOperand = this.value.toString();
    if (this.opertor==='='){
        return;
    }
    this.opertor = null;
}

}

export default CalculatorStore;