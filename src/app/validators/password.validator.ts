import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const matchPassword: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  let password = control.get('Password');

  if (/[A-Z]/.test(password?.value) != true) {
    return {
      passwordCapitalError: true,
    };
  } else if (/[0-9]/.test(password?.value) != true) {
    return {
      passwordNumberError: true,
    };
  } else if (
    /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password?.value) != true
  ) {
    return {
      passwordSymbolError: true,
    };
  }

  return null;
};
