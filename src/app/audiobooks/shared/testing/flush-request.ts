import { HttpTestingController } from '@angular/common/http/testing';

export function flushJsonpRequest(httpMock: HttpTestingController, url: string, json: any) {
  const req = httpMock.expectOne(request => request.url === url);
  expect(req.request.method).toBe('JSONP');
  req.flush(json);
}
