import Title from '../components/Header/Title';
import { Inner, Info } from '../sharedStyling';

const Contact = () => {
    return (
        <>
            <Inner>
                <Title lineContent="This is the " lineContent2="contact page" />
                <div>
                    <Info>
                        Quantum physics is the study of matter and energy at its most fundamental level. A central tenet of quantum physics is that energy comes in indivisible packets called quanta. Quanta behave very differently to macroscopic matter: particles can behave like waves, and waves behave as though they are particles.
                    </Info>
                </div>
            </Inner>
        </>
    )
}

export default Contact
