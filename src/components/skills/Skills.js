import SkillCategory from './SkillCategory';

const Skills = () => {
    const skillsData = [
        {
            category: 'Programming languages',
            skills: [
                { name: 'Javascript', highlighted: true },
                { name: 'CSS', highlighted: true },
                { name: 'HTML', highlighted: true },
                { name: 'Ruby', highlighted: true },
                { name: 'Python', highlighted: false },
                { name: 'C++', highlighted: false }
            ]
        },
        {
            category: 'Frameworks',
            skills: [
                { name: 'Ruby on rails', highlighted: true },
                { name: 'ReactJS', highlighted: true },
                { name: 'React Native', highlighted: false }
            ]
        },
        {
            category: 'Tools',
            skills: [
                { name: 'MySQL', highlighted: true },
                { name: 'Docker', highlighted: true },
                { name: 'Postgresql', highlighted: true },
                { name: 'Nginx', highlighted: true }
            ]
        }
    ];

    return (
        <div className="p-4 sm:p-2 md:p-2">
            {skillsData.map((categoryData, index) => (
                <SkillCategory key={index} category={categoryData.category} skills={categoryData.skills} />
            ))}
        </div>
    );
};

export default Skills;
