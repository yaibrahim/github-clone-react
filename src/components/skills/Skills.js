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
                { name: 'Dart', highlighted: true },
                { name: 'Python', highlighted: false },
                { name: 'C++', highlighted: false }
            ]
        },
        {
            category: 'Frameworks & Library',
            skills: [
                { name: 'Ruby on rails', highlighted: true },
                { name: 'ReactJS', highlighted: true },
                { name: 'Flutter', highlighted: true },
                { name: 'React Native', highlighted: false }
            ]
        },
        {
            category: 'Tools',
            skills: [
                { name: 'MySQL', highlighted: true },
                { name: 'Docker', highlighted: true },
                { name: 'Postgresql', highlighted: true },
                { name: 'Nginx', highlighted: true },
                { name: 'Heroku', highlighted: true },
                { name: 'AWS', highlighted: false }
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
