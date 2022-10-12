import { UncontrolledCarousel } from "reactstrap";

const items = [
   {
      id: 1,
      src: require("../assets/images/babiesboth.jpg"),
      Header: "Baby Burton and Munchkin",
      caption:
         "They were adopted together when they were 6 weeks. They cuddle and check each other all the time.",
   },
   {
      id: 2,
      src: require("../assets/images/moose.jpg"),
      altText: "Moose the boss",
      caption:
         "He is the longest resident to the cafe. Although he is stubborn, he makes sure everyone gets fed.",
   },
   {
      id: 3,
      src: require("../assets/images/cat_on_books.jpg"),
      altText: "Taro the bookwarm",
      caption: "He is super cuddley when someone is reading.",
   },
   {
      id: 4,
      src: require("../assets/images/white_fur.jpg"),
      altText: "Michelle the welcome cat",
      caption:
         "She is bit shy, but pays attention to the outside and welcomes you for the visit.",
   },
   {
      id: 5,
      src: require("../assets/images/taylor_cat.jpg"),
      altText: "Taylor the olympian",
      caption:
         "He is quite a athlete treversing a cat tree to another cat tree. He patrols the lounge and looks for any treat.",
   },
   {
      id: 6,
      src: require("../assets/images/dark_cat.jpg"),
      altText: "Shawn the healer",
      caption:
         "Shawn checks everyone is well. He has a power to heal a pain for his friends.",
   },
   {
      id: 7,
      src: require("../assets/images/burton.jpg"),
      altText: "Curious Burton",
      caption: "He is always curious and eat things that he is not suppsed to.",
   },
   {
      id: 8,
      src: require("../assets/images/munch.jpg"),
      altText: "Munchkin the princess",
      caption:
         "She is super shy, but show the friendliness when she feels like to.",
   },
];

const Slider = () => <UncontrolledCarousel items={items} />;

export default Slider;
