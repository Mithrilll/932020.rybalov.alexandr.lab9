class Calc {
    constructor() {
        this.value = undefined;
        this.operation = undefined;
        this.prevValue = 0;
        this.performedOperation = false;
    }

    setNewValue() {
        let el = document.getElementById('output');
        el.innerHTML = '';

        const value = document.createElement('p');
        let text = this.value == undefined ? '' : this.value;        
        value.innerText = text;

        const lightPart = document.createElement('span');
        lightPart.style.opacity = 0.3;

        if (this.operation != undefined) {
            lightPart.innerText = this.prevValue + ' ' + this.operation + ' ';
        }

        el.appendChild(value);
        el.appendChild(lightPart);
    }

    number(num) {
        if (this.value == undefined || this.performedOperation == true) {
            this.value = num;
            this.performedOperation = false;
        } else {
            this.value = this.value + num.toString();
        }
        this.setNewValue();
    }

    dot() {
        if (this.value.includes('.')) {
            return
        }

        this.value = this.value + '.';
        this.setNewValue();
    }

    swapValues() {
        this.prevValue = this.value;
        this.value = undefined;
    }

    add() {
        if (this.value == undefined) {
            return;
        }

        this.swapValues();
        this.operation = '+';
        this.setNewValue();
    }

    subtract() {
        if (this.value == undefined) {
            return;
        }

        this.swapValues();
        this.operation = '-';
        this.setNewValue();
    }

    divide() {
        if (this.value == undefined) {
            return;
        }

        this.swapValues();
        this.operation = '/';
        this.setNewValue();
    }

    multiply() {
        if (this.value == undefined) {
            return;
        }

        this.swapValues();
        this.operation = '*';        
        this.setNewValue();
    }

    equal() {
        if (this.value == undefined || this.prevValue == undefined || this.operation == undefined) {
            return;
        }

        switch (this.operation) {
            case '+':
                this.value = +this.value + +this.prevValue;
                break;
        
            case '-':
                this.value = +this.prevValue - +this.value;
                break;
            
            case '/':
                if (this.value == 0) {
                    this.value = 0;
                } else {
                    this.value = +this.prevValue / +this.value;
                }
                break;
            
            case '*':
                this.value = +this.prevValue * +this.value;
                break;
            
            default:
                break;
        }

        this.operation = undefined;
        this.prevValue = undefined;
        this.performedOperation = true;
        this.setNewValue();
    }

    clear() {
        this.value = undefined;
        this.prevValue = 0;
        this.operation = undefined;
        this.setNewValue();
    }

    backspace() {
        if (this.value == undefined) {
            return;
        }

        this.value = this.value.slice(0, -1);

        this.setNewValue();
    }
}

var calc = new Calc();