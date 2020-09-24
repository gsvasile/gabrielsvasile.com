import React from 'react';
import styled from 'styled-components';
import SkillList, { skillColors } from '../../skilllist/SkillList';

// This contains the skills mapped to a confidence level.
const skillsConfidenceMap = {
    'C#': '95',
    'Unity3D': '90',
    'JavaScript': '60',
    'React': '60',
    'C++': '50',
    'CSS': '35',
    'LUA': '50',
    'MySQL': '60',
};

export default () =>
    <GridContainer>
        <GridHeaderLeft>
            <GridHeaderElement>{'Skills'}</GridHeaderElement>
        </GridHeaderLeft>
        <GridHeaderRight>
            <GridHeaderElement>{'Novice'}</GridHeaderElement>
            <GridHeaderElement>{'Expert'}</GridHeaderElement>
        </GridHeaderRight>
        <SkillItems numRowLines={Object.keys(skillsConfidenceMap).length + 2}>
            <SkillList skillItems={Object.keys(skillsConfidenceMap)} />
        </SkillItems>
        {Object.keys(skillsConfidenceMap).map((skill) => (
            <GraphLineContainer>
                <GraphLine color={skillColors[skill].color} fillPercentage={skillsConfidenceMap[skill]} />
            </GraphLineContainer>
        ))}
    </GridContainer>

const GridContainer = styled.div.attrs({
    className: 'ba br3 white bg-black-10'
})`    
    display: grid;
    grid-template-columns: 170px auto;
    background-image: linear-gradient(to right, rgba(75, 85, 95, 0.8), rgba(0, 0, 0, 0.5));
    padding: 10px;
    overflow: hidden;
`;

const GridHeaderLeft = styled.div.attrs({
    className: 'flex justify-start bb'
})`
    grid-area: 1 / 1 / 1 / 2;
    width: 100%;
    overflow: hidden;
`;

const GridHeaderRight = styled.div.attrs({
    className: 'flex justify-between bb bl pl1'
})`
    grid-area: 1 / 2 / 1 / 3;
    width: 100%;
    overflow: hidden;
`;

const GridHeaderElement = styled.div``;

const SkillItems = styled.div.attrs({
    className: 'flex flex-column justify-around br'
})`
    grid-area: 2 / 1 / ${props => props.numRowLines} / 1;
    font-size: 15px;
    text-align: center;
    background-image: linear-gradient(to right, rgba(45, 45, 45, 0.8), rgba(15, 15, 15, 0.9) );
`;

const GraphLineContainer = styled.div``;

const GraphLine = styled.div.attrs({
    className: 'flex justify-around bb'
})`
    align-items: initial;
    height: 100%;
    background-image: linear-gradient(to right, ${props => props.color}, rgba(0, 0, 0, 1) ${props => props.fillPercentage}%);
`;