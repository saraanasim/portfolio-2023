import { ImageComponent } from 'components/Image';
import Image from 'next/image';
import { useState } from "react";
import { media } from "utils/style";

export const TechCard = ({ image, text }) => {
    const [hovering, setHovering] = useState(false);
    const [hover, setHover] = useState(false);
    return (
        <div
            style={hovering ? styles.cardHoverStyle : styles.cardStyle}
            onMouseOver={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <Image
                src={image}
                alt={text}
            />
            <p style={styles.textStyle}>{text}</p>
        </div>
    );
};

const styles = {
    cardStyle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "all 250ms linear",
        maxWidth: "100px",
        height: "fit-content",
    },
    cardHoverStyle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transform: "scale(1.1)",
        boxShadow: "0px 5px 0px 0px#4270b6",
        maxWidth: "100px",
        height: "fit-content"
    },
    textStyle: {
        color: "white",
        fontSize: { xl: "18px", lg: "18px", md: "18px", sm: "0.7rem", xs: "14px" },
        lineHeight: "30px",
    },
};
