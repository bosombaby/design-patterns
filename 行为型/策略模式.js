const { role } = { role: "ADMIN" };

function AdminUser() {
  console.log("ADMIN");
}

function EmployeeUser() {
  console.log("EMPLOYEE");
}

function NormalUser() {
  console.log("NormalUser");
}
const components = {
  ADMIN: AdminUser,
  EMPLOYEE: EmployeeUser,
  USER: NormalUser,
};

const Component = components[role];
Component();
