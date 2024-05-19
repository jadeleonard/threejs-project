export function ButtonProps(text,type){
    const Button = document.createElement('button');
    Button.className = `button button${type}`;
    Button.innerText = text;
    if(type === 'disable'){
        Button.disabled = true;





    }else{
        Button.disabled = false;
    }
    return Button
}