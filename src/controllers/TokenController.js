import UserModel from "../models/UserModel";
import jwt from "jsonwebtoken";

class TokenController {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ response: "Credências inválidas." });
      }

      const user = await UserModel.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ response: "Credências inválidas." });
      }

      if (!user.passwordIsValid(password)) {
        return res.status(401).json({ response: "Credências inválidas." });
      }
      const { id, username, role } = user;
      const token = jwt.sign(
        { id, email, username, role },
        process.env.TOKEN_SECRET,
        {
          expiresIn: process.env.TOKEN_EXPIRATION,
        }
      );

      return res.status(200).json({ token, user: { id, username, email, role } });
    } catch (err) {
      return res.status(500).json({ response: "Algo inesperado aconteceu " });
    }
  }
}

export default new TokenController();
