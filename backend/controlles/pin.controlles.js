import Pin from "../models/pin.model.js";

export const getPins = async (req, res) => {
  const pageNumber = Number(req.query.cursor) || 0;
  const search = req.query.search;
  const userId = req.query.userId;
  const LIMIT = 21;

  const pins = await Pin.find(
    {
      $or: [
        { title: { $regex: search, $options: "i" } },
        { tags: { $in: [search] } },
      ],
      user: userId,
    }
  ).limit(LIMIT).skip(LIMIT * pageNumber);

  const hasNextPage = pins.length === LIMIT;
  res.status(200).json({ pins, nextCursor: hasNextPage ? pageNumber + 1 : null });
};

export const getPin = async (req, res) => {
  const id = req.params.id;
  const pin = await Pin.findOne({ _id: id }).populate("user");
  res.status(200).json(pin);
};
