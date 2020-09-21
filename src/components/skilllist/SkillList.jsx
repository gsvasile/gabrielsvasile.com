import React from 'react';
import styled from 'styled-components';

export default function SkillList({ skillItems },) {
    return (
        <div>
            {skillItems.map((skillItem, index) => (
                <SkillItem skillItem={skillItem} key={`skillItem-${skillItem}`}>
                    {skillItem}
                </SkillItem>
            ))}
        </div>
    );
};

const SkillItem = styled.div`    
    display: inline-block;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    line-height: 22px;
    height: 22px;
    white-space: nowrap;
    padding: 0 5px;
    margin: 7px;
    color: ${props => skillColors[props.skillItem] && skillColors[props.skillItem].color};
    border-color: ${props => skillColors[props.skillItem] && skillColors[props.skillItem].borderColor};
`;

const skillColors = {
    /* Languages */
    'C#': {
        color: 'rgb(116, 178, 253)',
        borderColor: 'rgba(183, 218, 255, 0.9)'
    },

    'C++': {
        color: 'rgb(200, 201, 201)',
        borderColor: 'rgba(200, 201, 201, 0.4)'
    },

    LUA: {
        color: 'rgba(171, 184, 236, 0.8)',
        borderColor: 'rgba(171, 253, 116, 0.5)',
    },

    JavaScript: {
        color: 'rgb(247, 223, 30)',
        borderColor: 'rgba(171, 253, 116, 0.5)',
    },

    Docker: {
        color: 'rgb(56, 170, 255)',
        borderColor: 'rgba(56, 170, 255, 0.5)',
    },

    Python: {
        color: 'rgb(125, 188, 241)',
        borderColor: 'rgba(171, 253, 116, 0.5)',
    },

    VBA: {
        color: 'rgb(151, 203, 245)',
        borderColor: 'rgba(171, 253, 116, 0.5)',
    },

    PHP: {
        color: 'rgba(151, 203, 245)',
        borderColor: 'rgba(171, 253, 116, 0.5)',
    },

    /* Libraries */
    ES6: {
        color: 'rgb(247, 223, 30)',
        borderColor: 'rgba(247, 223, 30, 0.5)',
    },

    React: {
        color: 'rgb(97, 218, 251)',
        borderColor: 'rgba(247, 223, 30, 0.5)',
    },

    Tachyons: {
        color: 'rgb(255, 152, 187)',
        borderColor: 'rgba(247, 223, 30, 0.5)',
    },

    Redux: {
        color: 'rgb(188, 144, 255)',
        borderColor: 'rgba(188, 144, 255, 0.5)',
    },

    Nodejs: {
        color: 'rgb(102, 210, 100)',
        borderColor: 'rgba(102, 210, 100, 0.5)',
    },

    /* Databases */
    PostgreSQL: {
        color: 'rgb(220, 141, 116)',
        borderColor: 'rgba(15, 203, 245, 0.5)',
    },

    MySQL: {
        color: 'rgb(202, 125, 102)',
        borderColor: 'rgba(15, 203, 245, 0.5)',
    },

    SQLServer: {
        color: 'rgb(219, 141, 96)',
        borderColor: 'rgba(15, 203, 245, 0.5)',
    },

    MSAccess: {
        color: 'rgb(218, 72, 79)',
        borderColor: 'rgba(15, 203, 245, 0.5)',
    },

    /* Game Engines */
    Unity3D: {
        color: 'rgb(194, 59, 12)',
        borderColor: 'rgba(194, 59, 12, 0.5)'
    },
}