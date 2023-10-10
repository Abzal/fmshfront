import axios from "axios";

// axios.defaults.baseURL = 'https://corp-site.kazatomprom.kz/api/'
// axios.defaults.baseURL =  'https://test-corp-site.kazatomprom.kz/api/'
axios.defaults.baseURL = process.env.VUE_APP_ENDPOINT
axios.defaults.headers.common['Access-Control-Allow-Origin'] = process.env.VUE_APP_ENDPOINT;
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common = {'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiemFsLmFtYW50YXlAZm1zaC5uaXMuZWR1Lmt6IiwidXNlcklkIjoiOTAwNTE2MzAxMTIwIiwiaWF0IjoxNjk2ODM0MDExfQ.wieQS51Ka0I1VPxRX9K7KRpzN_2hwwJqU0QPjBgXbP9`};