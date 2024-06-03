
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ShadcnPratice = () => {
  const myArray = [
    {
      title: "Accordion Item 1",
      accitem: [
        {
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt nostrum dolor blanditiis, atque beatae, perferendis fuga repellendus sit consectetur earum nam deserunt suscipit provident odit dicta harum unde veniam!",
        },
        {
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt nostrum dolor blanditiis, atque beatae, perferendis fuga repellendus sit consectetur earum nam deserunt suscipit provident odit dicta harum unde veniam!",
        },
        {
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt nostrum dolor blanditiis, atque beatae, perferendis fuga repellendus sit consectetur earum nam deserunt suscipit provident odit dicta harum unde veniam!",
        },
      ],
    },
    {
      title: "Accordion Item 2",
      accitem: [
        {
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt nostrum dolor blanditiis, atque beatae, perferendis fuga repellendus sit consectetur earum nam deserunt suscipit provident odit dicta harum unde veniam!",
        },
      ],
    },
  ];

  return (
    <div className="bg-black min-h-screen flex items-center">
      <div className="container">
        <Accordion type="single" collapsible className="w-full">
          {myArray.map((obj, id) => (
            <AccordionItem key={id} value={`item-${id}`}>
              <AccordionTrigger className="text-white font-bold list-none decoration-transparent text-2xl">
                {obj.title}
              </AccordionTrigger>
              <AccordionContent className="text-white text-base font-normal">
                {obj.accitem.map((item, index) => (
                  <p key={index}>{item.description}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ShadcnPratice;
