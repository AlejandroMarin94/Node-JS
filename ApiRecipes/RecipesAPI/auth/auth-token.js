const jwt = require("jsonwebtoken");

const generateToken = (payload, isTokenRefresh) => {
  if (isTokenRefresh) {
    return jwt.sign(payload, process.env.SECRET_TOKEN_REFRESH, {
      expiresIn: "60min",
    });
  }
  return jwt.sign(payload, process.env.SECRET_TOKEN, {
    expiresIn: "90min",
  });
};

const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Acceso no permitido");
  try {
    const payload = jwt.verify(token, process.env.SECRET_TOKEN);
    req.payload = payload;
    next();
  } catch (error) {
    try {
      const payload = jwt.verify(token, process.env.SECRET_TOKEN_REFRESH);
      req.payload = payload;
      next();
    } catch (error) {
      res
        .status(401)
        .send({ status: "Token has expired", error: error.message });
    }
  }
};

const verifyAdmin = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Acceso no permitido");
  try {
    const payload = jwt.verify(token, process.env.SECRET_TOKEN);
    const isAdmin = payload.role;
    req.payload = payload;
    if (isAdmin !== "admin") {
      return res
        .status(401)
        .send("Acceso solo permitido a usuario administrador");
    }
    next();
  } catch (error) {
    try {
      const payload = jwt.verify(token, process.env.SECRET_TOKEN_REFRESH);
      const isAdmin = payload.role;
      req.payload = payload;
      if (isAdmin !== "admin") {
        return res
          .status(401)
          .send("Acceso solo permitido a usuario administrador");
      }
      next();
    } catch (error) {
      res
        .status(401)
        .send({ status: "Token has expired", error: error.message });
    }
  }
};

module.exports = { generateToken, verifyToken, verifyAdmin };
