import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { currentlanguage } from "../constants/index";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { BoxSx } from "../MaterialUI";

const Skills = () => {
    const local = currentlanguage();

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                {local.strings.apprentissagecritique.s0_1}
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                {local.strings.apprentissagecritique.s0_2}
                </h2>
                <p className={` text-center`}>
                    {local.strings.apprentissagecritique.s0_3}
                </p>
            </motion.div>

            <motion.div>
                <BoxSx />
            </motion.div>
        </>
    )
};

export default SectionWrapper(Skills, "skills");