import React from 'react';

const stages = [
  {
    title: 'Infancy (0-1 year)',
    milestones: [
      'First smiles and coos',
      'Rolling over',
      'First words',
    ],
    tips: [
      'Establish a routine',
      'Bond through touch and eye contact',
      'Ensure proper nutrition and sleep',
    ],
  },
  {
    title: 'Toddlerhood (1-3 years)',
    milestones: [
      'Walking and running',
      'Language development',
      'Beginning of potty training',
    ],
    tips: [
      'Encourage exploration',
      'Set boundaries and be consistent with discipline',
      'Foster language skills through reading and conversation',
    ],
  },
  {
    title: 'Preschool (3-5 years)',
    milestones: [
      'Improved motor skills',
      'Basic understanding of numbers and letters',
      'Social interaction and play',
    ],
    tips: [
      'Engage in educational play',
      'Support social development through playdates',
      'Begin early education activities',
    ],
  },
  {
    title: 'School Age (5-12 years)',
    milestones: [
      'Reading and writing proficiency',
      'Developing friendships',
      'Understanding of rules and structure',
    ],
    tips: [
      'Encourage academic and extracurricular activities',
      'Teach responsibility and independence',
      'Maintain open communication about school and friends',
    ],
  },
  // {
  //   title: 'Adolescence (13-18 years)',
  //   milestones: [
  //     'Physical and emotional changes of puberty',
  //     'Developing identity and independence',
  //     'Preparing for adulthood',
  //   ],
  //   tips: [
  //     'Be supportive and understanding',
  //     'Encourage healthy lifestyle choices',
  //     'Discuss future goals and plans',
  //   ],
  // },
];

const ParentingStages = () => {
  return (
    <div className=" space-y-11 grid grid-cols-2 grid-rows-3 gap-3  px-[4rem] bg-gray-50 mt-[3rem]  relative  ">
        <h1 className=' text-center  absolute left-[32rem] text-[3rem]  bottom-[43rem] font-Far  '>Parenting 
          <span className='text-[#50C878] '> Stages</span> </h1>
      {stages.map((stage, index) => (
        <div key={index} className="p-6 bg-white rounded-lg  relative top-[10rem]  shadow-md mt-[10rem]  ">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">{stage.title}</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Developmental Milestones</h3>
            <ul className="list-disc list-inside space-y-1">
              {stage.milestones.map((milestone, idx) => (
                <li className=' list-decimal' key={idx}>{milestone}</li>
              ))}
            </ul>
          </div>
        
        </div>
      ))}
    </div>
  );
};

export default ParentingStages;
