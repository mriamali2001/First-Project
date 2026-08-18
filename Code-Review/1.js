function updateProfile(data) {
  // ممنوع تغيير الدور
  if (data.role) {
    throw new Error("You cannot change role");
  }

  // التحقق من البريد
  if (data.email && !data.email.includes("@")) {
    throw new Error("Invalid email");
  }

  return data;
}

// Test 1: بيانات صحيحة
console.log(
  updateProfile({
    name: "Mariam",
    email: "Mariam@example.com"
  })
);

// Test 2: محاولة تغيير Role
try {
  console.log(
    updateProfile({
      name: "Mariam",
      role: "admin"
    })
  );
} catch (error) {
  console.log("Error:", error.message);
}

const apiKey = "sk-proj-a1B2c3D4e5F6g7H8i9J0k1L2m3N4o5P6q7R8s9T0u1V2w3X4y5Z6";
// لا يتم كتابة الـ API Key
// console.log(apiKey);

const identityDocument = "ID-12345";
// لا يتم كتابتها
console.log("Profile updated");