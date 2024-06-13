import { test, expect } from "@playwright/test";

test("event creation", async ({ request }) => {
  const testTitle = "Test event";
  const response = await request.post("/api-v1/auth/login", {
    data: {
      email: "user1@gmail.com",
      password: "123456",
    },
  });
  expect(response.ok()).toBeTruthy();
  expect.stringContaining("json");
  const resDataRaw = await response.body();
  const resData = JSON.parse(resDataRaw.toString());
  
});


// test("should respond with a 200 status code", async ({ request }) => {
//   const response = await request(app).post("/api-v1/auth/login").send({
//     email: "user1@gmail.com",
//     password: "123456",
//   });
//   expect(response.statusCode).toBe(200);
// });
// test("should specify json in the content type header", async ({ request }) => {
//   const response = await request(app).post("/api-v1/auth/login").send({
//     email: "user1@gmail.com",
//     password: "123456",
//   });
//   expect(response.headers["content-type"]).toEqual(
//     expect.stringContaining("json")
//   );
// });
// test("response has userId", async ({ request }) => {
//   const response = await request(app).post("/api-v1/auth/login").send({
//     email: "user1@gmail.com",
//     password: "123456",
//   });
//   expect(response.body.userId).toBeDefined();
// });
