import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://contoso-ship-manager-frontend.ca9fe47f23584722aeb2.westeurope.aksapp.io');
  sleep(1);
}
