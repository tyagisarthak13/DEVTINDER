import validator from "validator";

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Name is not valid");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter a strong password");
  }
};

const validateEditProfileData = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "emailId",
    "age",
    "gender",
    "photoUrl",
    "about",
    "skills",
  ];

  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );

  // const { skills } = req.body;
  // if (skills !== undefined) {
  //   if (!Array.isArray(skills)) {
  //     throw new Error("Skills must be an array");
  //   }
  //   if (skills.length > 10) {
  //     throw new Error("Skills cannot be more than 10");
  //   }
  // }
  return isEditAllowed;
};

export { validateSignUpData, validateEditProfileData };
