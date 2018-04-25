import { PipeTransform, Pipe } from "@angular/core";

const SYMBOLS = {
    CHECK: '\u2713',
    CROSS: '\u2718'
};

@Pipe({
    name: 'symbol'
})
class SymbolPipe implements PipeTransform {
    transform(bindingValue: any):string {
        return bindingValue ? SYMBOLS.CHECK : SYMBOLS.CROSS;
    }
}

export { SymbolPipe };
