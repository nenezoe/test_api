/* eslint-disable no-console */
/* eslint-disable max-len */


const supertest = require('supertest');
require('dotenv').config();
const headers = require('../../testData/DefaultHeaders').myHeaders;

const username = '3442f8959a84dea7ee197c632cb2df15';
const password = '13023';
const token = `${username}:${password}`;
const encodedToken = Buffer.from(token).toString('base64');
/** This getBaseUrl will help you in dynamically assigning the baseurl and baseurl extension to the ENVIRONMENT and ENVEXT variable
        for more information about env var read the Readme file * */

exports.getBaseURL = () => {
  let baseURL = '';
  let baseURLExt = '';
  try {
    baseURL = process.env.ENVIRONMENT;
    baseURLExt = process.env.ENVEXT;
    console.log(`BaseURL : ${baseURL}`);
  } catch (err) {
    throw new Error(`BASE URL is not Defined, Please Specify the BASE URL : ${process.env.ENVIRONMENT}`);
  }
  const BaseURLSpecifications = {
    BASE_URL: baseURL, // baseUrl(Ex:'https://27.158.126.894/')
    BASE_URL_EXTENSION: baseURLExt, // baseUrl_ext(Ex:'api/v1/')
  };
  return BaseURLSpecifications.BASE_URL + BaseURLSpecifications.BASE_URL_EXTENSION;
};

/** This sendPOSTRequest can be used when you dont need to pass a token while performing a POST operation * */

exports.sendPOSTRequest = async (baseUrl, apiEndPoint, requestBody) => {
  try {
    const res = await supertest(baseUrl).post(apiEndPoint).retry(2)
      .set(headers.ACCEPT_JSON)
      .set(headers.APPLICATION_JSON)
      .send(requestBody);
    return res;
  } catch (err) {
    console.log('Error in sending POST Request: ', err);
  }
};

/** This sendPOSTRequest1 can be used when you will be passing a token and body params while performing a POST operation * */

exports.sendPOSTRequest1 = async (baseUrl, apiEndPoint, requestBody) => {
  try {
    console.log(token);
    console.log(baseUrl + apiEndPoint);
    const res = await supertest('').post(baseUrl + apiEndPoint).retry(2)
      .set(headers.ACCEPT_JSON)
      .set(headers.APPLICATION_JSON)
      .set('Authorization', `Basic ${encodedToken}`)
      .send(requestBody);
    return res;
  } catch (err) {
    console.log('Error in sending POST Request: ', err);
  }
};

/** This sendGETRequest can be used when you will be passing a token while performing a GET operation * */

exports.sendGETRequest = async (baseUrl, apiEndPoint) => {
  try {
    const res = await supertest(baseUrl).get(apiEndPoint).retry(2)
      .set(headers.ACCEPT_JSON)
      .set('Authorization', `Basic ${encodedToken}`)
      .set(headers.APPLICATION_JSON);
    return res;
  } catch (err) {
    console.log('Error in sending GET Request: ', err);
  }
};

/** This sendPUTRequest can be used when you will be passing a token and body params while performing a PUT operation * */

exports.sendPUTRequest = async (baseUrl, apiEndPoint, requestBody) => {
  try {
    const res = await supertest(baseUrl).put(apiEndPoint).retry(2)
      .set(headers.ACCEPT_JSON)
      .set(headers.APPLICATION_JSON)
      .set('Authorization', `Basic ${encodedToken}`)
      .send(requestBody);
    return res;
  } catch (err) {
    console.log('Error in sending PUT Request: ', err);
  }
};

/** This sendDELETERequest can be used when you will be passing a token while performing a DELETE operation * */

exports.sendDELETERequest = async (baseUrl, apiEndPoint) => {
  try {
    const res = await supertest(baseUrl).delete(apiEndPoint).retry(2)
      .set(headers.ACCEPT_JSON)
      .set(headers.APPLICATION_JSON)
      .set('Authorization', `Basic ${encodedToken}`);
    return res;
  } catch (err) {
    console.log('Error in sending DELETE Request: ', err);
  }
};
