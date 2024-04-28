import app from '../src/app.js';
import { use, expect } from 'chai';
import chaiHttp from 'chai-http';

const request = use(chaiHttp).request;

describe('Check successful project setup', () => {
  it('should return healthy status', async() => {
    const res = await request(app).get('/health');

    expect(res.status).to.eql(200);
    expect(res.text).to.eql('<h2>HEALTHY</h2>');
  });
});