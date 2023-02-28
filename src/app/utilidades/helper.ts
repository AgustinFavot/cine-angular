import { ActivatedRoute } from "@angular/router";

export function toBase64(file: File){
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    })
}

export function paramsId(activateRoute: ActivatedRoute): string{
    return activateRoute.params['id'];
}