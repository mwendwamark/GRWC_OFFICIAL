import { RiBox3Line, RiWomenLine, RiParentLine, RiEmotionHappyLine } from "@remixicon/react";
import BishopPreaching from "../../assets/Images/AboutImages/BishopPreaching.webp";

export const mensMinistryData = {
  meta: {
    className: "mens_ministry_page",
  },
  hero: {
    icon: RiBox3Line,
    title: "Men's Ministry",
    image: BishopPreaching,
    imageAlt: "Revival wave men",
    faqLink: "#mens_faqs",
    className: "mens_hero_icon",
  },
  subHero: {
    titleTop: "men's ministry at Gospel Revival Wave Church",
    title: "Developing men to live faithfully, engage missionally, and worship joyfully",
    // You can add a specific background color class or style here if needed
    // For now we will handle it via CSS classes or inline styles in the layout if passed
    className: "mens_subhero", 
  },
  activities: {
    title: "What We Do",
    description: [
      "We create spaces where men can proactively use the gifts, relationships, and opportunities they have to make disciples for God’s glory. Through events, groups, and retreats, we equip men to be faithful in the places and seasons God has placed them, both now and in the future.",
      "Men’s Ministry at Gospel Revival connects, equips, and mobilizes men for the work of ministry and the glory of Jesus"
    ],
    images: [BishopPreaching, BishopPreaching], // Using the same image as placeholder for the second one as in original
    className: "men_activities"
  },
  faq: {
    id: "mens_faqs",
    questions: [
      {
        question: "How can I get involved in Men's Ministry?",
        answer: "We encourage you to join us for a gathering at your congregation or attend a retreat! You can directly contact a Men's Ministry representative from your congregation for more information.",
      },
      {
        question: "What can I expect from a men's gathering or a retreat?",
        answer: "While each congregation holds gatherings and retreats in a slightly different manner, we hope these spaces serve as a casual, easy pathway to get to know other men in our congregation and be empowered to follow Jesus in your daily life.",
      },
      {
        question: "What types of groups do you have for men at Gospel Revival Wave Church?",
        answer: "A meaningful way we hope to foster discipleship at Gospel Revival Wave Church is through groups that meet regularly. These groups typically include women and men. You can contact your congregation's Connection Director for next steps on how to get involved with a group at Gospel Revival Wave Church.",
      },
      {
        question: "Is there any additional care that's available for me?",
        answer: "Our counseling center provides direct biblical counseling services, as well as groups and classes. They also have resources for walking through substance abuse, infidelity, recovery, and more. We'd also love to get to know you and connect you to pastoral care in your congregation if needed. Contact your congregation's Men's Ministry representative for more information.",
      },
    ]
  }
};

export const womenMinistryData = {
  meta: {
    className: "women_ministry_page",
  },
  hero: {
    icon: RiWomenLine, // Placeholder
    title: "Women's Ministry",
    image: BishopPreaching, // Placeholder
    imageAlt: "Revival wave women",
    faqLink: "#women_faqs",
    className: "women_hero_icon",
  },
  subHero: {
    titleTop: "women's ministry at Gospel Revival Wave Church",
    title: "Empowering women to walk in faith, love, and service",
    className: "women_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "Women's Ministry description placeholder.",
    ],
    images: [BishopPreaching, BishopPreaching],
    className: "women_activities"
  },
  faq: {
    id: "women_faqs",
    questions: [
      {
        question: "How can I get involved in Women's Ministry?",
        answer: "Contact us for more information.",
      }
    ]
  }
};

export const sundaySchoolMinistryData = {
  meta: {
    className: "sundayschool_ministry_page",
  },
  hero: {
    icon: RiParentLine, // Placeholder
    title: "Sunday School",
    image: BishopPreaching, // Placeholder
    imageAlt: "Sunday School",
    faqLink: "#sundayschool_faqs",
    className: "sundayschool_hero_icon",
  },
  subHero: {
    titleTop: "Sunday School at Gospel Revival Wave Church",
    title: "Teaching children the way of the Lord",
    className: "sundayschool_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "Sunday School description placeholder.",
    ],
    images: [BishopPreaching, BishopPreaching],
    className: "sundayschool_activities"
  },
  faq: {
    id: "sundayschool_faqs",
    questions: [
      {
        question: "When is Sunday School?",
        answer: "Every Sunday morning.",
      }
    ]
  }
};

export const youngstersMinistryData = {
  meta: {
    className: "youngsters_ministry_page",
  },
  hero: {
    icon: RiEmotionHappyLine, // Placeholder
    title: "Youngsters Ministry",
    image: BishopPreaching, // Placeholder
    imageAlt: "Youngsters",
    faqLink: "#youngsters_faqs",
    className: "youngsters_hero_icon",
  },
  subHero: {
    titleTop: "Youngsters at Gospel Revival Wave Church",
    title: "Raising the next generation of leaders",
    className: "youngsters_subhero",
  },
  activities: {
    title: "What We Do",
    description: [
      "Youngsters description placeholder.",
    ],
    images: [BishopPreaching, BishopPreaching],
    className: "youngsters_activities"
  },
  faq: {
    id: "youngsters_faqs",
    questions: [
      {
        question: "Who can join?",
        answer: "All youth are welcome.",
      }
    ]
  }
};
