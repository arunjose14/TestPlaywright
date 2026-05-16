import { test as base } from '@playwright/test';

// 1. Define the shape of your custom fixture
type MyFixtures = {
  testDataForOrder: {
    username: string;
    password: string;
    productName: string;
  };
};

// 2. Extend the base test with the defined type
export const customtest = base.extend<MyFixtures>({
  testDataForOrder: {
    username: "arun.joseph@gmail.com",
    password: "Rahulpass@14",
    productName: "Zara"
  }
});
