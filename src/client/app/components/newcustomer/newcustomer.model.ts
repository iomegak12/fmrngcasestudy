import { FormGroup, FormControl, Validators } from "@angular/forms";

const NAME_MAX_LENGTH = 50;
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PHONE_PATTERN = /^\d{5}-\d{5}$/i;
const MIN_CREDIT = 1000;
const MAX_CREDIT = 50000;

const creditLimitValidation = (minCredit = MIN_CREDIT, maxCredit = MAX_CREDIT) => {
    return (formControl: FormControl) => {
        let controlValue = parseInt(formControl.value);
        let status = controlValue >= minCredit && controlValue <= maxCredit;

        if (!status) {
            return {
                creditLimitValidation: true
            };
        }

        return null;
    };
};

let customerFormModel: FormGroup = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.maxLength(NAME_MAX_LENGTH)]),
    address: new FormControl(''),
    credit: new FormControl(0, [Validators.required, creditLimitValidation()]),
    status: new FormControl(true),
    remarks: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.pattern(EMAIL_PATTERN)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(PHONE_PATTERN)])
});

export { customerFormModel };
