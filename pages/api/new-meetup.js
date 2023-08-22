import { MongoClient } from "mongodb";

// /api/new-meetup
// POST/api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, address, image, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://sagar_01:wcyGGAGhxaGaH8kO@cluster0.o01vfhz.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    client.close();
    res.status(201).json({ message: "meetup inserted!" });
  }
}

export default handler;
