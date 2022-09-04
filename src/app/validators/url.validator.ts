import {AbstractControl} from "@angular/forms";

export function ValidateUrl(control: AbstractControl){
    if(!control.value || control.value.startsWith('http://') || control.value.startsWith('https://') )
    {
        return null;
    }
    else{
        return {invalidUrl:"The url must start with http:// or https://"}
    }
    
}