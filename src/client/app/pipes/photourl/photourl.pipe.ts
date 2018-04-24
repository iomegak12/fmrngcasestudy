import { PipeTransform, Pipe } from "@angular/core";

const DEFAULT_PHOTO_FORMAT: string = 'JPG';
const IMAGE_BASE_URL = 'assets/images/people';

@Pipe({
    name: 'photourl'
})
class PhotoUrlPipe implements PipeTransform {
    transform(bindingValue: any, photoFormat: string = DEFAULT_PHOTO_FORMAT): string {
        let photoUrl = '';

        if (bindingValue) {
            photoUrl = `${IMAGE_BASE_URL}/Customer${bindingValue}.${photoFormat}`;
        }

        return photoUrl;
    }
}

export { PhotoUrlPipe };
