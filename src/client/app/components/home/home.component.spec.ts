import { TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ReasonsComponent } from '../reasons/reasons.component';
import { SocialComponent } from '../social/social.component';
import { FaqComponent } from '../faq/faq.component';

function main() {
    describe('Home Component Test Suite', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [HomeComponent, ReasonsComponent, SocialComponent, FaqComponent]
            });
        });

        it('Valid Test Case for Home Component', async(() => {
            TestBed.compileComponents()
                .then(() => {
                    let homeComponent = TestBed.createComponent(HomeComponent);
                    let markup = homeComponent.debugElement.children[0].nativeElement;
                    let text = markup.querySelectorAll('.lead')[0].textContent;
                    let expectedText = 'AWESOME, CUSTOMIZABLE, FREE';

                    expect(text).toBe(expectedText);
                });
        }));
    });
}

export { main };