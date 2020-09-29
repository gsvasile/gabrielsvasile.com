import React from 'react';
import styled from 'styled-components';
import SkillList from '../../skilllist/SkillList';
import FadeInSection from '../../effects/FadeInSection';

const categoriesHeadings = {
    web: 'Web Development',
    lang: 'Laguages',
    data: 'Data',
    tool: 'Tools'
}

// This contains the skills mapped to a confidence level.
const skillCategoryMap = [
    { skill: 'JavaScript', category: 'lang' },
    { skill: 'C#', category: 'lang' },
    { skill: 'Unity3D', category: 'game' },
    { skill: 'React', category: 'web' },
    { skill: 'C++', category: 'lang' },
    { skill: 'CSS3', category: 'web' },
    { skill: 'LUA', category: 'game' },
    { skill: 'MySQL', category: 'data' },
    { skill: 'SQLServer', category: 'data' },
    { skill: 'PHP', category: 'lang' },
    { skill: 'VSCode', category: 'tool' },
    { skill: 'Visual Studio', category: 'tool' },
    { skill: 'HTML5', category: 'web' },
    { skill: 'GitHub', category: 'web' },
    { skill: 'npm', category: 'web' },
    { skill: 'Unity3D', category: 'tool' },
];

/// Get the skill lists from the category headings and skill category map.
const getSkills = (skillMap) => skillMap.map(entry => entry.skill);
const sortedCategoryKeys = Object.keys(categoriesHeadings).sort();
const getCategorizedSkillLists = (category) => skillCategoryMap.filter(entry => entry.category === category);
const getSkillLists = () => {
    let object = {};
    for (let entry in sortedCategoryKeys) {
        object[entry] = getCategorizedSkillLists(sortedCategoryKeys[entry]);
    }
    return [getSkills(object[0]), getSkills(object[1]), getSkills(object[2]), getSkills(object[3])];
};

/// Get the column sizes and the headers.
const getTemplateColumns = () => Object.keys(categoriesHeadings).map(() => {
    return 'auto';
});
const sortedCategories = Object.values(categoriesHeadings).sort();

export default () => {
    let columnCountToPlace = 1;
    let numberOfRows = skillCategoryMap.length;
    return (
        <FadeInSection fadeClass='fade-in-section'>
            <GridContainer numColumns={getTemplateColumns().toString().replace(/,/g, ' ')}>
                {sortedCategories.map((category, index) => (
                    <GridHeaderElement
                        key={'skillHeader' + index}
                        columnStart={index + 1}
                        columnEnd={index + 2}
                    >
                        {category}
                    </GridHeaderElement>
                ))}
                {getSkillLists().map((list, index) => (
                    <SkillItems
                        key={'skillList' + index}
                        numRowLines={numberOfRows}
                        columnStart={columnCountToPlace}
                        columnEnd={++columnCountToPlace}
                    >
                        <SkillList skillItems={list} />
                    </SkillItems>
                ))}
            </GridContainer>
        </FadeInSection>
    );
}

const GridContainer = styled.div.attrs({
    className: 'ba br3 white bg-black-10'
})`    
    display: grid;
    grid-template-columns: ${props => props.numColumns};
    background-image: linear-gradient(to right, rgba(75, 85, 95, 0.8), rgba(0, 0, 0, 0.5));
    overflow: hidden;
`;

const GridHeaderElement = styled.div.attrs({
    className: 'br'
})`    
    grid-area: 1 / ${props => props.columnStart} / 1 / ${props => props.columnEnd};
    border-bottom: dotted 1px white;
`;

const SkillItems = styled.div.attrs({
    className: 'flex flex-column justify-around br'
})`
    grid-area: 2 / ${props => props.columnStart} / ${props => props.numRowLines} / ${props => props.columnEnd};
    font-size: 15px;
    text-align: center;
    background-image: linear-gradient(to right, rgba(45, 45, 45, 0.8), rgba(15, 15, 15, 0.9) );
`;