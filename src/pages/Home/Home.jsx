import React, { useEffect, useState } from "react";
import TypingLetters from "../../components/TypingLetters/TypingLetters";
import Loading from "../Loading/Loading";
import { motion, AnimatePresence } from "motion/react";

function Home() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            <AnimatePresence>{loading && <Loading />}</AnimatePresence>
            {!loading && (
                <>
                    <motion.div
                        className="flex flex-col items-center justify-center h-screen"
                        initial={{ opacity: 0, y: -100 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 2,
                            },
                            y: 0,
                        }}
                    >
                        <h1 className="text-3xl text-black dark:text-white">
                            Umut Satir
                        </h1>
                        <TypingLetters />
                    </motion.div>
                    <div className="h-screen"></div>
                </>
            )}
        </>
    );
}

export default Home;
