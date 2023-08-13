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

function Homepage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default Homepage;
