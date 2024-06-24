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
                {local.strings.experience.s1}
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                {local.strings.experience.s2}
                </h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                {local.strings.work.s3}
                </motion.p>
            </div>

            <motion.div>
                <BoxSx />
            </motion.div>
        </>
    )
};

export default SectionWrapper(Skills, "skills");