const InitialState = {
  permissions: {},
};

const ROLES = {
  USER: "User",
  ADMIN: "Admin",
  GUEST: "Guest",
};

const Permission = (role) => {
  InitialState["permissions"] = {
    home: {
      canViewTask: role !== ROLES.GUEST,
      canDeleteTask: role === ROLES.USER || role === ROLES.ADMIN,
      canAddTask: role !== ROLES.USER,
    },
    // Add more permissions as you like
  };
  localStorage.setItem("Permission", JSON.stringify(InitialState));
};

export default Permission;
