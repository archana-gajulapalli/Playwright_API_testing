
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { request } from '@playwright/test';

let response;

Given('I have the API endpoint {string}', async function (endpoint) {
  this.endpoint = endpoint;
});

When('I send a GET request to the endpoint', async function () {
  const context = await request.newContext();
  response = await context.get(this.endpoint);
});

Then('the response status should be {int}', async function (status) {
  expect(response.status()).to.equal(status);
});

Then('the response should contain the user details', async function () {
  const responseBody = await response.json();
  console.log(responseBody);
  expect(responseBody).to.have.property('id');
  expect(responseBody).to.have.property('first_name');
  expect(responseBody).to.have.property('email');
});
