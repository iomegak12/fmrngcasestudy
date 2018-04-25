import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

const JSON_CONTENT_TYPE = 'application/json';

class JsonHeadersHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let clonedRequest = req.clone({
            setHeaders: {
                'Accept': JSON_CONTENT_TYPE,
                'Content-Type': JSON_CONTENT_TYPE,
                'Custom-Header': 'CustomValue'
            }
        });

        return next.handle(clonedRequest);
    }
}

export { JsonHeadersHttpInterceptor };
