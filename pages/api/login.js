// fake login
export default function handler(req, res) {
  const request = req.body;
  const email = request.email;
  const password = request.password;

  if (email === "ziedkhanfir@gmail.com" && password === "ecommerce") {
    res.status(200).json({ status: true });
  } else {
    res.status(401).json({ status: false });
  }
}
