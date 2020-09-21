import React from 'react';
import './SkillList.css';

const SkillList = ({ skillItems }) => {

    // Build the same list of skill items, but without symbols, etc. included.
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

    // Contains links to the libraries used.
    const skillLinks = {
        'Tachyons': 'http://tachyons.io/',
        'Styled Components': 'https://styled-components.com/',
        'React': 'https://reactjs.org/',
        'Redux': 'https://redux.js.org/'
    }

    return (
        <div>
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