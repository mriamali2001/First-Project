function updateProfile(data) {
  // التحقق من البريد
  if (data.email && data.email.includes("@")) {
    throw new Error("Invalid email");
  }

  return data;
}

// Test
console.log(
    updateProfile({
        name: "Mariam",
        email: "mariam@test.com"
    })
);