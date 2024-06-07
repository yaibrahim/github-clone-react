const SkillItem = ({ skill, highlighted }) => {
    const className = highlighted 
        ? 'px-2 py-1 bg-black text-white rounded-md text-xs' 
        : 'px-2 py-1 bg-gray-200 rounded-md text-xs';
    return <span className={className}>{skill}</span>;
};

export default SkillItem;
