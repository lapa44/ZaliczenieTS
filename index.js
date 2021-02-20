let  zaliczenie=null;

class Zaliczenie {

    constructor( cssClassName ) {
        this.cssClassName = cssClassName;
    }

    findCssClassInBody() {
         return document.body.getElementsByClassName(this.cssClassName);
    }

    showResultOnPage(domElements) {
        let text='';
        for (let i=0; i<domElements.length; i++) {
            text += domElements.item(i) + " " + domElements.item(i).innerText + "</br>";
        }
        document.getElementById("score").innerHTML =  text;
    }

}

const processApp = () => {
    zaliczenie = new Zaliczenie(document.getElementById("cssClassInput").value)
    let domElements = zaliczenie.findCssClassInBody();
    console.log(domElements);
    zaliczenie.showResultOnPage(domElements);
    return domElements;
}

const processTask1 = () => {
    let longestChain = 0;
    let iWithLongestChain = 0;
    let tempChain;
    for (let i = 1; i < 1_000_000; i++) {
        tempChain = solveCollatz(i);
        if (tempChain > longestChain) {
            longestChain = tempChain;
            iWithLongestChain = i;
        }
    }
    document.getElementById("Task1Score").innerText =
        "i: " + iWithLongestChain + " gives the longest chain with length: " + longestChain + ", while 'i' cannot be bigger than 1 000 000";
}

const solveCollatz = (i)  => {
    if (i%2===0) {
        return 1+ solveCollatz(i/2);
    }
    else if (i===1) {
        return 1;
    }
    else {
        return 1+ solveCollatz((i*3)+1);
    }
}
