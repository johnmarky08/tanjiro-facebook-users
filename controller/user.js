import User from "../model/User.js";

/* CREATE */
export const createUser = async (req, res) => {
  try {
    const uid = req.query.uid,
      name = req.query.name,
      username = req.query.username || "No data",
      gender = req.query.gender || "No data",
      link = req.query.link || "No data",
      bday = req.query.bday || "No data",
      followers = req.query.followers || "No data",
      about = req.query.about || "No data",
      email = req.query.email || "No data",
      town = req.query.town || "No data",
      status = req.query.status || "No data";
    const newUser = new User({
      uid,
      name,
      username,
      gender,
      link,
      bday,
      followers,
      about,
      email,
      town,
      status,
    });
    await newUser.save();

    const user = await User.find({ uid });
    res.status(201).json({result: user});
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getUser = async (req, res) => {
  try {
    const { uid } = req.query;
    const user = await User.find({ uid });
    res.status(200).json({result: user});
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
