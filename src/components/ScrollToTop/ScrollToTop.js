import { HiArrowUp } from 'react-icons/hi';
import classes from './ScrollToTop.module.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
	const [showBtn, setShowBtn] = useState(false);

	const handleScroll = () => {
		window.scrollY > 500 ? setShowBtn(true) : setShowBtn(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<>
			<motion.button
				initial={{ opacity: 0 }}
				animate={{ opacity: showBtn ? 1 : 0 }}
				className={`no_select ${classes.scroll_btn}`}
				onClick={scrollToTop}
			>
				<HiArrowUp />
			</motion.button>
		</>
	);
};

export default ScrollToTop;
