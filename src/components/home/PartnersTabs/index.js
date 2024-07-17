import ImageWithContent from '@/components/common/ImageWithContent';
import React, { useState } from 'react';

const PartnersTab = () => {
  const [activeTab, setActiveTab] = useState(-1);

  // Define emojis for tabs
  const emojis = ['🇺🇸', '🇬🇧', '🇫🇷', '🇨🇦', '🇩🇪', '🇯🇵', '🇮🇹', '🇪🇸','🇩🇪', '🇯🇵',];

  const cardData = [
  {
    imageUrl: "https://www.plant-for-the-planet.org/wp-content/uploads/2024/07/Plant-for-the-Planet-Global-Board-2024-25.png",
    heading: "Global Board of the Plant-for-the-Planet Initiative",
    subheading: "Plant-for-the-Planet thrives on the most outstanding children and young people. To spread the word, we have a Global Board with young leaders around the world. They are committed to climate justice and tree planting on a voluntary basis. The Global Board is elected every year.",
    buttonText: "Get to know our Global Board members",
  },
  {
    imageUrl: 'https://example.com/image2.jpg',
    heading: 'Card 2 Heading',
    subheading: 'Card 2 Subheading',
    buttonText: 'Button 2',
  },
  {
    imageUrl: 'https://example.com/image3.jpg',
    heading: 'Card 3 Heading',
    subheading: 'Card 3 Subheading',
    buttonText: 'Button 3',
  },
  {
    imageUrl: "https://www.plant-for-the-planet.org/wp-content/uploads/2024/07/Plant-for-the-Planet-Global-Board-2024-25.png",
    heading: "Global Board of the Plant-for-the-Planet Initiative",
    subheading: "Plant-for-the-Planet thrives on the most outstanding children and young people. To spread the word, we have a Global Board with young leaders around the world. They are committed to climate justice and tree planting on a voluntary basis. The Global Board is elected every year.",
    buttonText: "Get to know our Global Board members",
  },
  {
    imageUrl: 'https://example.com/image2.jpg',
    heading: 'Card 2 Heading',
    subheading: 'Card 2 Subheading',
    buttonText: 'Button 2',
  },
  {
    imageUrl: 'https://example.com/image3.jpg',
    heading: 'Card 3 Heading',
    subheading: 'Card 3 Subheading',
    buttonText: 'Button 3',
  },
  {
    imageUrl: "https://www.plant-for-the-planet.org/wp-content/uploads/2024/07/Plant-for-the-Planet-Global-Board-2024-25.png",
    heading: "Global Board of the Plant-for-the-Planet Initiative",
    subheading: "Plant-for-the-Planet thrives on the most outstanding children and young people. To spread the word, we have a Global Board with young leaders around the world. They are committed to climate justice and tree planting on a voluntary basis. The Global Board is elected every year.",
    buttonText: "Get to know our Global Board members",
  },
  {
    imageUrl: 'https://example.com/image2.jpg',
    heading: 'Card 2 Heading',
    subheading: 'Card 2 Subheading',
    buttonText: 'Button 2',
  },
  {
    imageUrl: 'https://example.com/image3.jpg',
    heading: 'Card 3 Heading',
    subheading: 'Card 3 Subheading',
    buttonText: 'Button 3',
  },
  {
    imageUrl: 'https://example.com/image3.jpg',
    heading: 'Card 3 Heading',
    subheading: 'Card 3 Subheading',
    buttonText: 'Button 3',
  },
];

  return (
    <div className='p-10'>
      <ul className={`flex border-b rounded-t-lg border-gray-200 bg-gradient-to-r from-[#007A48] to-[#65AF31] py-5 mt-10  items-center justify-center rounded-t-[20px] ${activeTab ===-1 ?"rounded-[20px] ":"rounded-t-[20px]"}`}>
        {emojis.map((emoji, index) => (
          <li key={index} className=" mr-1">
            <button
              className={`inline-block mx-2 py-2 px-10 rounded-[10px] text-[20px] bg-[#91BDA4] hover:bg-white ${activeTab === index && 'bg-white'} `}
              onClick={() => setActiveTab(index)}
            >
              {emoji}
            </button>
          </li>
        ))}
      </ul>
      {
        activeTab!==-1 &&(
          <div className='bg-gradient-to-r from-[#007A48] to-[#65AF31] rounded-b-lg'>
         <ImageWithContent
        imageUrl={cardData[activeTab].imageUrl}
        heading={cardData[activeTab].heading}
        subheading={cardData[activeTab].subheading}
        buttonText={cardData[activeTab].buttonText}
        imageOnLeft
        rounded
        bgColor="#F5F3ED"
      />
      </div>
        )
      }
     
    </div>
  );
};

export default PartnersTab;
