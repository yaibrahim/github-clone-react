import SkillItem from './SkillItem';

const SkillCategory = ({ category, skills }) => {
    return (
        <div className="mb-4">
            <h3 className="mb-2 text-sm font-semibold">{category}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <SkillItem key={index} skill={skill.name} highlighted={skill.highlighted} />
                ))}
            </div>
        </div>
    );
};

export default SkillCategory;
