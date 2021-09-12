import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { PageTitle, LineWrap, Line } from './header.styling';

const Title = ({ lineContent, lineContent2 }) => {
    let line1 = useRef(null);
    let line2 = useRef(null);

    useEffect(() => {
        gsap.from([line1, line2], 0.8, {
            delay: 0.8,
            ease: "power3.out",
            y: 64,
            stagger: {
                amount: .15
            }
        })

    }, [line1, line2])

    return (
        <PageTitle>
            <LineWrap>
                <Line ref={el => line1 = el}>
                    {lineContent}
                </Line>
            </LineWrap>
            <LineWrap>
                <Line ref={el => line2 = el}>
                    {lineContent2}
                </Line>
            </LineWrap>
        </PageTitle>
    )
}

export default Title
