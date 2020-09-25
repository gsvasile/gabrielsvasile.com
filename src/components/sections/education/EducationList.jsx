import React from 'react';
import styled from 'styled-components';

// This contains information for official education.
const educationList = [
    {
        id: 1,
        school: 'TMCC',
        graduationYear: undefined,
        lastYearAttended: '2008',
        degree: undefined,
        classes: ['Advanced C#', 'Database Design'],
        link: undefined,
        image: undefined
    },
    {
        id: 0,
        school: 'UCSC',
        graduationYear: '2004',
        lastYearAttended: '',
        degree: 'Computer Engineering',
        classes: undefined,
        link: undefined,
        backgroundColor: 'linear-gradient(to bottom, rgba(88,88,0, 0.7), rgba(0, 0, 94, 0.5) 70%)',
        image: 'ucscLogo'
    },
];

export default () => {
    return (
        <React.Fragment>
            {educationList.map(({ id, school, graduationYear, lastYearAttended, degree, classes, link, backgroundColor, image }) => (
                <Card
                    key={id}
                    backgroundColor={backgroundColor ? backgroundColor : 'rgb(0, 0, 0, 0.5)'}
                >
                    <Degree>
                        {degree
                            ? degree
                            : classes.map((classTaken) => (
                                { classTaken } + ' '
                            ))}
                    </Degree>

                </Card>
            ))}
        </React.Fragment>
    );
}

const Card = styled.div.attrs({
    className: 'ba br3 white pa1'
})`
    background-image: ${props => props.backgroundColor};
`;

const Degree = styled.div.attrs({
    className: 'flex justify-start f3'
})``;