import React from 'react';
import styled from 'styled-components';
import FadeInSection from '../../effects/FadeInSection';

// This contains information for official education.
const educationList = [
    {
        id: 1,
        school: 'TMCC',
        graduationYear: undefined,
        lastYearAttended: '',
        degree: undefined,
        classes: 'Advanced C# & Database Design Classes',
        link: undefined,
    },
    {
        id: 0,
        school: 'University of California, Santa Cruz',
        graduationYear: '',
        lastYearAttended: '',
        degree: 'Computer Engineering, BS',
        classes: undefined,
        link: undefined,
        backgroundColor: 'linear-gradient(to bottom, rgba(100,100,0, 0.7), rgba(0, 0, 94, 0.5) 70%)',
        textColor: undefined
    },
];

const EducationList = () =>
    <React.Fragment>
        {educationList.map(({ id, school, graduationYear, lastYearAttended, degree, classes, link, backgroundColor, textColor }) => (
            <FadeInSection
                key={id}
                fadeClass='fade-in-section'
            >
                <Card
                    backgroundColor={backgroundColor ? backgroundColor : 'rgb(0, 0, 0, 0.5)'}
                >
                    <Degree>
                        {degree
                            ? degree
                            : classes
                        }
                    </Degree>
                    <School textColor={textColor}>
                        <div>
                            {school}
                        </div>
                        <div>
                            {graduationYear
                                ? graduationYear
                                : lastYearAttended}
                        </div>
                    </School>
                </Card>
            </FadeInSection>
        ))}
    </React.Fragment>

export default EducationList;

const Card = styled.div.attrs({
    className: 'ba br3 white bg-black-80 mb2'
})`
    background-image: ${props => props.backgroundColor};
    overflow: hidden;

`;

const Degree = styled.div.attrs({
    className: 'flex justify-start pa1 f4 bb'
})`
    @media only screen and (max-width: 767px) {
        font-size: 15px;
`;

const School = styled.div.attrs({
    className: 'flex justify-between pa1 f5'
})`
    color: ${props => props ? props.textColor : 'rgb(255, 255, 255, 0.8)'};

    @media only screen and (max-width: 767px) {
            font-size: 13px;
`;