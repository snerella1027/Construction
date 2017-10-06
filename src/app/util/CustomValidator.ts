import { FormControl} from "@angular/forms";
export class CustomValidator {
  static minLength(formControl: FormControl): { [key: string]: any } {
    if (formControl.value) {
      if (formControl.value.length > 4) {
        return null;
      } else {
        return {'invalid UserName': true};
      }
    }

  }

  static emailValidator(formControl: FormControl): { [key: string]: any } {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (formControl.value) {
      if (emailPattern.test(formControl.value)) {
        return null;
      } else {
        return {'invalid Email': true};
      }
    }

  }
}
