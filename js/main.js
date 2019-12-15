/*
    this is exmaple how to get values from html form
    in many cases you will need to get value radio button or checkbox etc...
    use array method is more flexible and convenience 
*/     


window.onload = () =>{
    "use strict";
    const csInterface = new CSInterface();
    themeManager.init();

    const call = document.getElementById("call");
    console.log(Array.isArray(document.getElementsByClassName("radioBtn")));

    class CallFormValues{
        constructor(btn){
            this.btn = btn;
            this.btn.addEventListener("click",this);
        }

        handleEvent(){
            /* you need to turn HTMLcollection into Array object */ 
            const radioBtn = Array.from(document.getElementsByClassName("radioBtn"));
            const boxes = Array.from(document.getElementsByClassName("boxes"));
            const setData = Array.from(document.getElementsByClassName("setData"));

            /* you can get radio button value without any array method */
            const radioValue = document.forms.radio.Rbtn.value;
            console.log(radioValue);
            /* with find method can get checked radio button easily */
            const checkedRadio = radioBtn.find(select=> select.checked === true);
            console.log(checkedRadio);
            const checks = {};
            boxes.forEach(elm=>{
                checks[elm.id] = elm.checked;//set id as a key and set checked as a value
            });
            console.log(checks);//sort checkBox values in a object 
            
            const checksObj = boxes.reduce((acc,current)=>{
                acc[current.id] = current.checked;
                return acc;
            },{});/*initial value*/
            console.log(checksObj);
            //use reduce method is more concisely */

            /*get dataset value trough reduce method and object entries */
            const dataset = setData.reduce((acc,current,index)=>{
                Object.entries(current.dataset).forEach(([key,value])=>{
                    acc[index][key] = value;
                })
                return acc;
            },new Array(setData.length).fill({}));//set initial value Array in empty objects
            console.log(dataset);//get dataset as a object
        }
    }
    const callValue = new CallFormValues(call);
}