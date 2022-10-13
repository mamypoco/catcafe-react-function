import {
   Container,
   Row,
   Col,
   Carousel,
   CarouselItem,
   CarouselControl,
   CarouselIndicators,
   CarouselCaption,
} from "reactstrap";
import { useState } from "react";

const items = [
   {
      id: 1,
      src: require("../assets/images/latte_cat_calico.jpg"),
      altText: "Lucy the welcome cat",
      caption:
         "She is bit shy, but pays attention to the outside and welcomes you for the visit.",
   },

   {
      id: 2,
      src: require("../assets/images/munchn_burton.jpg"),
      altText: "Baby Burton and Munchkin",
      caption:
         "They were adopted together when they were 6 weeks. They cuddle and check each other all the time.",
   },
   {
      id: 3,
      src: require("../assets/images/blackcat_carpet.jpg"),
      altText: "Moose the boss",
      caption:
         "He is the longest resident to the cafe. He is super friendly and love laying on the carpet. ",
   },
   {
      id: 4,
      src: require("../assets/images/cat_head_bookshelf.jpg"),
      altText: "Taro the bookwarm",
      caption: "He is super cuddley when someone is reading.",
   },
   {
      id: 5,
      src: require("../assets/images/kittens.jpg"),
      altText: "Lacy, Acorn, Sora, Kite, Beans, Jayjay",
      caption:
         "They are super curious. We usually have some kittens wating for being adopted.",
   },
   {
      id: 6,
      src: require("../assets/images/cat_cattree.jpg"),
      altText: "Taylor the olympian",
      caption:
         "He is quite an athlete treversing a cat tree to another cat tree. He patrols the lounge and looks for any treat.",
   },
   {
      id: 7,
      src: require("../assets/images/cat_gray.jpg"),
      altText: "Shawn the healer",
      caption:
         "Shawn checks everyone is well. He has a power to heal a pain for his friends.",
   },
   {
      id: 8,
      src: require("../assets/images/burton2.jpg"),
      altText: "Curious Burton",
      caption:
         "He likes being held like this. He is always curious and eat things that he is not suppsed to.",
   },
   {
      id: 9,
      src: require("../assets/images/munch2.jpg"),
      altText: "Munchkin the princess",
      caption:
         "She is very shy, but show the friendliness when she feels like to.",
   },
];

const Slider = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [animating, setAnimating] = useState(false);

   // const onExiting = () => {
   //    animating = true;
   // };
   // const onExited = () => {
   //    animating = false;
   // };
   const next = () => {
      if (animating) return;
      //if animating exists, do nothing; otherwise do below:
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
   };

   const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
   };

   const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
   };

   const slides = items.map((item) => {
      return (
         <CarouselItem
            className="carousel-item"
            tag="div"
            key={item.key}
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
         >
            <img src={item.src} alt={item.altText} className="w-100" />
            <CarouselCaption
               className="carousel-caption"
               captionHeader={item.altText}
               captionText={item.caption}
            />
         </CarouselItem>
      );
   });

   return (
      <Container>
         <Row className="row-content">
            <Col mc="8">
               <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                  interval={false}
               >
                  <CarouselIndicators
                     items={items}
                     activeIndex={activeIndex}
                     onClickHandler={goToIndex}
                  />
                  {slides}
                  <CarouselControl
                     direction="prev"
                     directionText="Previous"
                     onClickHandler={previous}
                  />

                  <CarouselControl
                     direction="next"
                     directionText="Next"
                     onClickHandler={next}
                  />
               </Carousel>
            </Col>
         </Row>
      </Container>
   );
};

export default Slider;
