let container = document.querySelector('.container');
container.style.cursor = 'pointer';
let input = document.querySelector('input');
let newList = document.querySelector('.new');
newList.addEventListener('click',()=>{
    if(input.value !==''){
        // adding div that containe the text 
        let div1 = document.createElement('div');
        div1.setAttribute('class','divOne');
        container.append(div1);
        // adding the h1 inside the div
        let h1 = document.createElement('h1');
        div1.append(h1);
        // give the value of input to the h1 
        h1.innerText = input.value;
        // adding checking && delete inside the div
        let check = document.createElement('div');
        let delet = document.createElement('div');
        check.setAttribute('class','check');
        delet.setAttribute('class','delete');
        div1.append(check);
        div1.append(delet);
        // if first the input is empty will change the border red to  #36F48B 
        input.style.border = '1px solid #36F48B';

        check.addEventListener('click',()=>{
            h1.classList.toggle('h1');
        })
        delet.addEventListener('click',()=>{
            div1.remove();
        })
    }else{
        input.style.border = '2px solid red';
    }
    // return empty value for input
    input.value = '';
})
