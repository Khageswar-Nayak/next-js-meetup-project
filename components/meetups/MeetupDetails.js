import { useRouter } from "next/router";

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
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.yQV9YN97q7-pD-MDLHFaJAHaEK&pid=Api&P=0&h=180",
    address: "bbbbb",
    description: "this is the third meetup",
  },
];
const MeetupDetails = () => {
  const route = useRouter();
  const id = route.query.meetupid;
  console.log("route", route.query);
  const detail = DUMMY_MEETUPS.find((meetup) => meetup.id === id);
  console.log(detail);
  return (
    <>
      <img src={detail.image} />
      <h2>{detail.title}</h2>
      <h3>{detail.address}</h3>
    </>
  );
};

export default MeetupDetails;
