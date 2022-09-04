import {AbstractControl} from "@angular/forms";

export function ValidateImg(control: AbstractControl){
    if(!control.value || control.value.endsWith('.jpeg') 
    || control.value.endsWith('.png') || control.value.endsWith('.gif')|| control.value.endsWith('.webp') || control.value.endsWith('.jpg'))
    {
        return null;
    }
    else{
        return {invalidUrl:"The url must end with .png or .gif or .jpeg"}
    }
    
}