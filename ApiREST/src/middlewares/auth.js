const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Acceso denegado");
  try {
    const payload = jwt.verify(token, process.env.SECRET_TOKEN);
    req.payload = payload;
    console.log(payload);

    next();
  } catch (error) {
    try {
      const payload = jwt.verify(token, process.env.SECRET_TOKEN_REFRESH);
      req.payload = payload;
      next();
    } catch (error) {
      res.status(401).send({ status: "Token Expired", error: error.message });
    }
  }
};

const verifyAdmin = (req, res, next) => {
  try {
    const { role } = req.payload;
    if (role !== "admin") {
      return res
        .status(401)
        .send({ status: "Failed", message: "You dont have admin privileges" });
    }
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ status: "Error Endpoint", error: error.message });
  }
};

const verifyUserPermision = (req, res, next) => {
  try {
    const { _id: idUserAuthenticatedId, role: roleAdmin } = req.payload;

    const idUser = req.params.idUser;
    console.log(roleAdmin);
    
    if (idUserAuthenticatedId === idUser || roleAdmin === "admin") {
      next();
    } else {
      return res.status(403).send({
        status: "failed",
        message: "No tienes permiso para realizar esta accion",
      });
    }
  } catch (error) {
    return res
      .status(401)
      .send({ status: "Error Endpoint", error: error.message });
  }
};
module.exports = {
  verifyToken,
  verifyAdmin,
  verifyUserPermision,
};
