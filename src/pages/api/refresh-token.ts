import { NextApiRequest, NextApiResponse } from "next";
const cookie = require("cookie");

const refreshToken = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { refreshToken } = req.body;
    const option = {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      path: "/",
      maxAge: 360000,
    };
    const RT = cookie.serialize("refreshToken", refreshToken, option);
    res.setHeader("Set-Cookie", [RT]);

    //
    res.status(201);
    res.json({ message: "Authorized successfully" });
    res.end();
  } else {
    res.status(405);
  }
};

export default refreshToken;
