import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.yQV9YN97q7-pD-MDLHFaJAHaEK&pid=Api&P=0&h=180",
    address: "aaaaaa",
    description: "this is the first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.yQV9YN97q7-pD-MDLHFaJAHaEK&pid=Api&P=0&h=180",
    address: "bbbbb",
    description: "this is the second meetup",
  },
];

function Homepage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  //fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://sagar_01:wcyGGAGhxaGaH8kO@cluster0.o01vfhz.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  // console.log(meetups);
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Homepage;
