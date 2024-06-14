import { test, expect } from "@playwright/test";

// test("Testing user API", async ({ request }) => {
//   // Kiểm tra tạo tài khoản
//   const register = await request.post("/api-v1/auth/register", {
//     data: {
//       firstName: "Tester",
//       lastName: "Tester",
//       email: "tester@gmail.com",
//       password: "123456",
//     },
//   });

//   // Kiểm tra tạo tài khoản thành công hay không
//   expect(register.status()).toBe(201);
//   expect(register.ok()).toBeTruthy();

//   const registerDataRaw = await register.body();
//   const registerData = JSON.parse(registerDataRaw.toString());

//   // Kiểm tra có các trường xác nhận thành công hay không
//   expect(registerData).toHaveProperty("success");
//   expect(registerData.success).toEqual(true);
//   expect(registerData).toHaveProperty("message");
//   expect(registerData.message).toEqual("Account created successfully");

//   // Kiểm tra có token hay không
//   expect(registerData).toHaveProperty("token");

//   const response = await request.post("/api-v1/auth/login", {
//     data: {
//       email: "tester@gmail.com",
//       password: "123456",
//     },
//   });
//   // Kiểm tra xem đăng nhập thành công hay không
//   expect(response.status()).toBe(201);

//   expect(response.ok()).toBeTruthy();
//   expect.stringContaining("json");

//   const resDataRaw = await response.body();
//   const resData = JSON.parse(resDataRaw.toString());
//   // Kiểm tra có token hay không
//   expect(resData).toHaveProperty("token");
//   expect(resData.token.length).toBeGreaterThan(0);

//   // Kiểm tra có đúng là user hay không
//   expect(resData.user).toHaveProperty("accountType");
//   expect(resData.user.accountType).toEqual("seeker");

//   // Kiểm tra lấy dữ liệu user bằng token
//   const token = resData.token;
//   const getUserDataWithToken = await request.post("/api-v1/users/get-user", {
//     headers: {
//       "content-type": "application/json",
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//   });
//   // Kiểm tra xem có lấy được dữ liệu thành công hay không
//   expect(getUserDataWithToken.status()).toBe(200);

//   // Kiểm tra xem có lấy được các trường dữ liệu cần thiết hay không
//   const userDataRaw = await getUserDataWithToken.body();
//   const userData = JSON.parse(userDataRaw.toString());
//   expect(resData.user).toHaveProperty("firstName");
//   expect(resData.user).toHaveProperty("lastName");
//   expect(resData.user).toHaveProperty("email");

// });

test("Testing sign in as company", async ({ request }) => {
  const register = await request.post("/api-v1/companies/register", {
    data: {
      name: "Tester Tech",
      email: "testercompany@gmail.com",
      password: "123456",
    },
  });

  // Kiểm tra tạo tài khoản thành công hay không
  expect(register.status()).toBe(201);
  expect(register.ok()).toBeTruthy();

  const registerDataRaw = await register.body();
  const registerData = JSON.parse(registerDataRaw.toString());

  // Kiểm tra có các trường xác nhận thành công hay không
  expect(registerData).toHaveProperty("success");
  expect(registerData.success).toEqual(true);
  expect(registerData).toHaveProperty("message");
  expect(registerData.message).toEqual("Company Account Created Successfully");

  // Kiểm tra có token hay không
  expect(registerData).toHaveProperty("token");

  const response = await request.post("/api-v1/companies/login", {
    data: {
      email: "testercompany@gmail.com",
      password: "123456",
    },
  });
  // Kiểm tra xem đăng nhập thành công hay không
  expect(response.status()).toBe(200);

  expect(response.ok()).toBeTruthy();
  expect.stringContaining("json");

  const resDataRaw = await response.body();
  const resData = JSON.parse(resDataRaw.toString());
  // Kiểm tra có token hay không
  expect(resData).toHaveProperty("token");
  expect(resData.token.length).toBeGreaterThan(0);

  // Kiểm tra có đúng là company hay không
  expect(resData.user).toHaveProperty("jobPosts");

  
});


test("Testing if sign in failed", async ({ request }) => {
  const testTitle = "Test event";
  const response = await request.post("/api-v1/auth/login", {
    data: {
      email: "1",
      password: "1",
    },
  });
  // Kiểm tra xem đăng nhập thất bại hay không
  expect(response.status()).toBe(404);

  const resDataRaw = await response.body();
  const resData = JSON.parse(resDataRaw.toString());

  // Kiểm tra xem có đúng là lỗi hay không
  expect(resData).toHaveProperty("success");
  expect(resData.success).toEqual("failed");

});


