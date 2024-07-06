
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { request } from '@playwright/test';

let response;

let requestBody = {};

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
 
});

When('I send a POST request to the endpoint', async function (dataTable) {
  dataTable.hashes().forEach(row => {
    requestBody[row.key] = row.value;
  });

});
