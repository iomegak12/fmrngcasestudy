import { PipeTransform, Pipe } from "@angular/core";

const DEFAULT_FIELD_NAME = 'name';
const DEFAULT_FIELD_VALUE = '';
const MIN_FIND_POS = 0;

@Pipe({
    name: 'where'
})
class WherePipe implements PipeTransform {
    transform(bindingValues: any[], fieldName: string = DEFAULT_FIELD_NAME,
        fieldValue: any = DEFAULT_FIELD_VALUE): any[] {
        let filteredValues: any[] = [];
        let validation = fieldName || fieldValue;

        if (!validation)
            filteredValues = bindingValues;
        else {
            filteredValues = bindingValues.filter(
                bindingValue => bindingValue[fieldName] &&
                    bindingValue[fieldName].indexOf(fieldValue) >= MIN_FIND_POS);
        }

        return filteredValues;
    }
}

export { WherePipe };
