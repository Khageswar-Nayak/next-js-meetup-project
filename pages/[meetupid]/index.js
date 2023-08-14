import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetupDetail = () => {
  return (
    <MeetupDetails
      image="https://tse1.mm.bing.net/th?id=OIP.yQV9YN97q7-pD-MDLHFaJAHaEK&pid=Api&P=0&h=180"
      title="first meetup"
      address="aaaa"
      description="aaaa"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: "m1",
        },
      },
      {
        params: {
          meetupid: "m2",
        },
      },
      {
        params: {
          meetupid: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupid;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://tse1.mm.bing.net/th?id=OIP.yQV9YN97q7-pD-MDLHFaJAHaEK&pid=Api&P=0&h=180",
        title: "first meetup",
        id: meetupId,
        address: "aaa",
        description: "aa",
      },
    },
  };
}

export default MeetupDetail;
