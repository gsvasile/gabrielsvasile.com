import React from 'react';
import './SkillList.css';

const SkillList = ({ skillItems }) => {

    console.log('skillItems (inside SkillList) : ', skillItems);

    const skillItemsForCss = skillItems.map(skillItem => {
        let skillItemForCss = '';
        switch (skillItem) {
            case 'C++':
                skillItemForCss = 'CPlusPlus';
                break;
            case 'C#':
                skillItemForCss = 'CSharp';
                break;
            default:
                skillItemForCss = skillItem;
                break;
        }
        skillItemForCss = 'skillItem ' + skillItemForCss;
        return skillItemForCss;
    });

    return (
        <div className='skillItems flex flex-wrap justify-center items-center mb2 mt1'>
            {skillItems.map((skillItem, index) => (
                <div
                    key={skillItem}
                    className={skillItemsForCss[index]}
                >
                    {skillItem}
                </div>
            ))}
        </div>
    );
}


export default SkillList;